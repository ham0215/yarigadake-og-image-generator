import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content="https://yarigadake-og-image-generator.vercel.app/yarigadake.jpg"
        />
      </Head>
      <h1>槍ヶ岳のog画像生成</h1>
      <a href="/api/yarigadake?title=hoge">Param</a>
    </div>
  )
}
