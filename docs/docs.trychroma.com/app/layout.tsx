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
  title: 'Chroma Docs',
  description: 'ChromaDBのドキュメント',
  openGraph: {
    title: 'Chroma Docs',
    description: 'ChromaDBのドキュメント',
    siteName: 'Chroma Docs',
    url: 'https://docs.trychroma.com',
    images: [
      {
        url: 'https://docs.trychroma.com/og.png', // 絶対URLである必要があります
        width: 2400,
        height: 1256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chroma Docs',
    description: 'ChromaDBのドキュメント',
    site: 'trychroma',
    siteId: '1507488634458439685',
    creator: '@trychroma',
    creatorId: '1507488634458439685',
    images: ['https://docs.trychroma.com/og.png'], // 絶対URLである必要があります
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  function baiduTongji() {
    return {
      __html: `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8ef5361f32cd3b980206b5818e7062cf";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
    };
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={baiduTongji()} /></head>
      <body data-invert-bg="true" className={`${inter.className} antialiased bg-white dark:bg-black bg-[url(/composite_noise.jpg)] bg-repeat relative text-[#27201C] dark:text-white dark:backdrop-invert`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            {/* ページ構造の主要部分はすべてここで定義しています。
                まずページ全体を大きなflex列コンテナとして定義します */}
            <div className="relative z-10 flex flex-col h-dvh overflow-hidden">
              {/* ヘッダーが縮まないように設定 */}
              <div className="shrink-0">
                <Header />
                <HeaderNav/>
              </div>
              {/* 残りの領域を埋め、オーバーフローを非表示にします。
                  サイドバーとメインコンテンツはここに表示され、
                  利用可能な領域を埋めつつ独自のスクロールを行います */}
              <div className="flex-1 overflow-y-hidden h-full">
                {children}
              </div>
            </div>
            {/* クラウドサインアップはposition fixedでここに配置できます */}
            <CloudSignUp />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}