import {
  BlocksIcon,
  BookText,
  GraduationCap,
  RocketIcon,
  SquareTerminalIcon,
  WrenchIcon,
} from "lucide-react";
import { AppSection } from "@/lib/content";
import CloudIcon from "@/components/sidebar/cloud-icon";

const sidebarConfig: AppSection[] = [
  {
    id: "docs",
    name: "ドキュメント",
    default: "/overview/introduction",
    icon: BookText,
    subsections: [
      {
        id: "overview",
        name: "概要",
        pages: [
          {
            id: "introduction",
            name: "イントロダクション",
          },
          {
            id: "getting-started",
            name: "はじめに",
          },
          {
            id: "architecture",
            name: "アーキテクチャ",
          },
          {
            id: "data-model",
            name: "データモデル",
          },
          {
            id: "roadmap",
            name: "ロードマップ",
          },
          {
            id: "contributing",
            name: "貢献方法",
          },
          {
            id: "telemetry",
            name: "テレメトリ",
          },
          {
            id: "migration",
            name: "移行",
          },
          {
            id: "troubleshooting",
            name: "トラブルシューティング",
          },
          {
            id: "about",
            name: "Chromaについて",
          },
        ],
      },
      {
        id: "run-chroma",
        name: "Chromaの実行",
        pages: [
          { id: "ephemeral-client", name: "一時クライアント" },
          { id: "persistent-client", name: "永続クライアント" },
          { id: "client-server", name: "クライアント-サーバーモード" },
          { id: "cloud-client", name: "クラウドクライアント" },
        ],
      },
      {
        id: "collections",
        name: "コレクション",
        pages: [
          { id: "manage-collections", name: "コレクションの管理" },
          { id: "configure", name: "設定" },
          { id: "add-data", name: "データ追加" },
          { id: "update-data", name: "データ更新" },
          { id: "delete-data", name: "データ削除" },
        ],
      },
      {
        id: "querying-collections",
        name: "コレクションのクエリ",
        pages: [
          { id: "query-and-get", name: "クエリと取得" },
          { id: "metadata-filtering", name: "メタデータフィルタリング" },
          { id: "full-text-search", name: "全文検索および正規表現" },
        ],
      },
      {
        id: "embeddings",
        name: "埋め込み",
        pages: [
          { id: "embedding-functions", name: "埋め込み関数" },
          { id: "multimodal", name: "マルチモーダル" },
        ],
      },
      {
        id: "cli",
        name: "CLI",
        pages: [
          { id: "install", name: "CLIのインストール" },
          { id: "browse", name: "コレクションの閲覧" },
          { id: "copy", name: "コレクションのコピー" },
          { id: "db", name: "DB管理" },
          { id: "sample-apps", name: "サンプルアプリのインストール" },
          { id: "login", name: "ログイン" },
          { id: "profile", name: "プロファイル管理" },
          { id: "run", name: "Chromaサーバーの実行" },
          { id: "update", name: "CLIの更新" },
          { id: "vacuum", name: "Vacuum" },
        ],
      },
    ],
  },
  {
    id: "cloud",
    name: "Chroma Cloud",
    icon: CloudIcon,
    tag: "",
    pages: [
      { id: "getting-started", name: "はじめに" },
      { id: "pricing", name: "料金" },
      { id: "quotas-limits", name: "クォータおよび制限" },
    ],
  },
  {
    id: "guides",
    name: "ガイド",
    icon: GraduationCap,
    default: "/build/building-with-ai",
    subsections: [
      {
        id: "build",
        name: "構築",
        pages: [
          { id: "building-with-ai", name: "AIを用いた構築" },
          { id: "intro-to-retrieval", name: "リトリーバル入門" },
          // { id: "chunking", name: "チャンキング" },
          // { id: "embeddings", name: "埋め込み" },
          // { id: "organizing-collections", name: "コレクションの整理" },
        ],
      },
      // { id: "develop", name: "開発", generatePages: true },
      {
        id: "deploy",
        name: "導入",
        pages: [
          { id: "client-server-mode", name: "クライアント-サーバーモード" },
          { id: "python-thin-client", name: "Pythonスリムクライアント" },
          { id: "performance", name: "パフォーマンス" },
          { id: "observability", name: "観測可能性" },
          { id: "docker", name: "Docker" },
          { id: "aws", name: "AWS" },
          { id: "azure", name: "Azure" },
          { id: "gcp", name: "GCP" },
        ],
      },
    ],
  },
  {
    id: "integrations",
    name: "統合",
    default: "chroma-integrations",
    icon: BlocksIcon,
    pages: [{ id: "chroma-integrations", name: "Chroma統合" }],
    subsections: [
      {
        id: "embedding-models",
        name: "埋め込みモデル",
        generatePages: true,
      },
      {
        id: "frameworks",
        name: "フレームワーク",
        generatePages: true,
      },
    ],
  },
  {
    id: "reference",
    name: "リファレンス",
    icon: WrenchIcon,
    default: "chroma-reference",
    pages: [{ id: "chroma-reference", name: "Chromaリファレンス" }],
    subsections: [
      {
        id: "python",
        name: "Python",
        pages: [
          { id: "client", name: "クライアント" },
          { id: "collection", name: "コレクション" },
        ],
      },
      {
        id: "js",
        name: "JavaScript/TypeScript",
        pages: [
          { id: "client", name: "クライアント" },
          { id: "collection", name: "コレクション" },
        ],
      },
    ],
  },
];

export default sidebarConfig;