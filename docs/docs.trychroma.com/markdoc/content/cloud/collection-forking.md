# 集合分叉（Collection Forking）

**Chroma Cloud 中的即时写时复制集合分叉功能。**

分叉功能可让您从现有集合中即时创建一个新集合，其底层使用的是写时复制（copy-on-write）机制。分叉后的集合最初与源集合共享数据，仅在之后进行增量更改时才会产生额外的存储成本。

{% Banner type="tip" %}
**分叉功能仅在 Chroma Cloud 中可用。** 单节点 Chroma 的文件系统不支持分叉。
{% /Banner %}

## 工作原理

- **写时复制（Copy-on-write）**：分叉的集合与源集合共享数据块。对任一分支的新写入操作会分配新的数据块；未更改的数据保持共享状态。
- **即时性**：无论集合大小如何，分叉操作均可快速完成。
- **隔离性**：对分叉集合的更改不会影响源集合，反之亦然。

## 尝试使用

- **云控制台 UI**：打开任意集合并点击“Fork”按钮。
- **SDK**：使用 Python 或 JavaScript 的 fork API。

### 示例代码

{% TabbedCodeBlock %}

{% Tab label="python" %}
```python
source_collection = client.get_collection(name="main-repo-index")

# 创建一个分叉集合。名称在数据库中必须唯一。
forked_collection = source_collection.fork(name="main-repo-index-pr-1234")

# 分叉后的集合可立即查询；更改是隔离的
forked_collection.add(documents=["new content"], ids=["doc-pr-1"])  # 按增量存储计费
```
{% /Tab %}

{% Tab label="typescript" %}
```typescript
const sourceCollection = await client.getCollection({ name: "main-repo-index" });

// 创建一个分叉集合。名称必须在数据库中唯一。
const forkedCollection = await sourceCollection.fork({ name: "main-repo-index-pr-1234" });

await forkedCollection.add({
  ids: ["doc-pr-1"],
  documents: ["new content"], // 按增量存储计费
});
```
{% /Tab %}

{% /TabbedCodeBlock %}

[在本笔记本](https://github.com/chroma-core/chroma/blob/main/examples/advanced/forking.ipynb)中，您可以找到一个完整的演示。我们将一个代码库索引到 Chroma 集合中，并使用分叉功能高效地为新分支创建集合。

## 定价

- **每次分叉调用 $0.03**
- **存储**：您只需为分叉后写入的增量数据块付费（基于写时复制）。未更改的数据在各分支间保持共享。

## 配额与错误

Chroma 对您的分叉树中的分叉边数有限制。每次调用“fork”时，都会从父集合到子集合创建一条新的边。该限制包括根集合及其所有后代创建的边；请参见下图。当前默认限制为每棵树 **4,096** 条边。如果您删除了一个集合，其对应的边仍会保留在树中并计入配额。

如果超过此限制，请求将返回针对 `NUM_FORKS` 规则的配额错误。在这种情况下，您可以创建一个完整复制的新集合，以开启一个全新的根集合。

{% MarkdocImage lightSrc="/fork-edges-light.png" darkSrc="/fork-edges-dark.png" alt="分叉边示意图" /%}

## 使用分叉的适用场景

- **数据版本控制 / 检查点设置**：在数据演变过程中维护一致的快照。
- **类 Git 工作流**：例如，通过从分支的分叉点进行分叉，然后将差异应用到分叉集合中。与重新摄入整个数据集相比，这种方式可以节省写入和存储成本。

## 注意事项

- 您的分叉集合将始终与源集合位于同一个数据库中。