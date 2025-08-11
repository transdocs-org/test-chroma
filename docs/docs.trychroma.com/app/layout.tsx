import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import ThemeProvider from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import PostHogProvider from "@/components/posthog/posthog-provider";
import CloudSignUp from "@/components/header/cloud-signup";
import HeaderNav from "@/components/header/header-nav";

export const metadata: Metadata = {
  title: 'Chroma 文档',
  description: 'ChromaDB 的文档',
  openGraph: {
    title: 'Chroma 文档',
    description: 'ChromaDB 的文档',
    siteName: 'Chroma 文档',
    url: 'https://docs.trychroma.com',
    images: [
      {
        url: 'https://docs.trychroma.com/og.png', // 必须是绝对 URL
        width: 2400,
        height: 1256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chroma 文档',
    description: 'ChromaDB 的文档',
    site: 'trychroma',
    siteId: '1507488634458439685',
    creator: '@trychroma',
    creatorId: '1507488634458439685',
    images: ['https://docs.trychroma.com/og.png'], // 必须是绝对 URL
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-invert-bg="true" className={`${inter.className} antialiased bg-white dark:bg-black bg-[url(/composite_noise.jpg)] bg-repeat relative text-[#27201C] dark:text-white dark:backdrop-invert`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            {/* 主要页面结构在这里完成
                首先我们将页面设置为一个大的 flex 列容器 */}
            <div className="relative z-10 flex flex-col h-dvh overflow-hidden">
              {/* 防止头部区域缩小 */}
              <div className="shrink-0">
                <Header />
                <HeaderNav/>
              </div>
              {/* 让此容器占据剩余空间并隐藏任何溢出内容
                  侧边栏和主页面内容将在这里渲染并填满可用空间
                  并执行它们自己的滚动操作 */}
              <div className="flex-1 overflow-y-hidden h-full">
                {children}
              </div>
            </div>
            {/* 云服务注册组件可以放在这里，因为它是固定定位 */}
            <CloudSignUp />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}