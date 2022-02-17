import Head from 'next/head'
import iconSrc from '../public/icon.png'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import Image from 'next/image'


export default function Home({ posts }) {

  return (
    <div className='font-body'>
      <Head>
        <title>Hagakun's Portfolio</title>
        <meta name="description" content="Hagakunのポートフォリオサイトです。作ってきたコンテンツを紹介します。" />
        <meta name="robots" content="index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/20 px-8 mx-8 md:mx-20 mt-8">
        <div className="flex flex-col sm:flex-row rounded-2xl">

          <Image src='/icon.png' className="object-contain " width={300} height={300} />

          <div className="ml-8 flex justify-center flex-row  items-center">
            <p className="prose-sm lg:prose-lg py-5 text-natural-600">
              <p className='md:my-4 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-600'>This is</p>
              <h1 className='m-0 pb-4 text-3xl md:text-4xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-600'>
                Hagakun's Portfolio
              </h1>
              私は薬剤師として働きながら、<br />
              技術で業務をサポートするアプリやサービスを作っています。<br />

              技術とアイデアで、みんなが自分の幸せに集中できるようにしていきます。<br />
              <br />

              ご依頼・見積もり・ご相談など、Twitter DMまでお気軽にお問い合わせください。<br />
              <a href='https://twitter.com/hagakun_yakuzai'>@hagakun_yakuzai</a>
              <br />
            </p>
          </div>
        </div>
      </div >

      <hr className="my-8" />


      <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-center content-start mx-4'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div >
  )
}

export async function getStaticProps() {
  //postsフォルダからファイルを取得
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '')

    //メタ情報付きのマークダウンファイルを読み込む
    const markdownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })


  return {
    props: {
      posts: posts,
    },
  }
}
