import Head from 'next/head'
import Image from 'next/image'
import iconSrc from '../public/icon.png'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'


export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>MarkHaga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="block p-5">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch gap-3">

          <Image src={iconSrc} className="inline-block w-10 rounded-2xl object-contain object-center" />

          <div className="bg-white rounded-2xl shadow-md text-center flex justify-center flex-row  items-center">
            <p className="py-5 text-gray-700">👋Hagakun.devへようこそ！<br /><br />
              私は薬剤師として、<br />
              薬を通じて健康のサポートをします。<br /><br />

              さらに、みんなの心をサポートするような<br />

              アプリやサービスを作っています。<br /><br />

              生活が少しでもラクに。<br /><br />

              生活がちょこっと幸せに。<br /><br />

              自分の人生を、自分らしく生きれるように。<br />

              そんな、手助けをしていきます。
              <br />
            </p>
          </div>
        </div>
      </div >

      <hr className="m-5" />


      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center content-start items-stretch'>
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
