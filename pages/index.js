import Head from 'next/head'
import iconSrc from '../public/icon.png'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Footer from '../components/Footer'
import Image from 'next/image'
import SnsIcon from '../components/SnsIcon'
import { useEffect } from 'react/cjs/react.development'
import anime from 'animejs'
import ContentCard from '../components/ContentCard'
import Script from 'next/script'


export default function Home({ posts }) {
  useEffect(() => {
    <Script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js"></Script>
    // Hero Image のParallax
    var hero = document.getElementsByClassName('hero');
    new simpleParallax(hero, {
      // scale: 1.6,
      overflow: false,
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });

    var contentImage = document.getElementsByClassName('contentImage');
    new simpleParallax(contentImage, {
      scale: 1.1,
      overflow: false,
      orientation: 'left',
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });

    var contentImage2 = document.getElementsByClassName('contentImage2');
    new simpleParallax(contentImage2, {
      scale: 1.1,
      overflow: false,
      orientation: 'right',
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });

    let options = {
      root: null,
      rootMargin: '-10% 0px',
      threshold: 0
    }

    let linkBlock = document.querySelectorAll('section.link')
    let observer = new IntersectionObserver(leftInAnimation, options);

    linkBlock.forEach(
      box => {
        observer.observe(box);
      }
    )

    function leftInAnimation(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.LeftIn',
            easing: 'easeOutCirc',
            opacity: [0, 1],
            translateX: [-60, 0],
            delay: anime.stagger(160),
            duration: 1200
          })
        }
      });
    }

    let snsCircles = document.querySelectorAll('#snsCircleButton');
    let snsCirclesObserver = new IntersectionObserver(popAnimation, options);

    snsCircles.forEach(
      box => {
        snsCirclesObserver.observe(box);
      }
    )

    function popAnimation(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '#snsCircleButton',
            // easing: 'easeOutCirc',
            opacity: [0, 1],
            translateY: [-60, 0],
            delay: anime.stagger(160),
            duration: 1200
          })
        }
      });
    }

    Animon.animon();
  }, [])



  return (
    <div className='mx-auto font-body overflow-hidden'>
      <Head>
        <title>Hagakun&apos;s Portfolio</title>
        <meta name="description" content="Hagakunのポートフォリオサイトです。作ってきたコンテンツを紹介します。" />
        <meta name="robots" content="index" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/animon@1.0.1/dist/animon.css" />
        <script src="https://unpkg.com/animon@1.0.1/dist/animon.iife.js"></script>
      </Head>

      <div className="flex flex-col min-w-0 mx-auto max-w-md shadow-2xl shadow-slate-400/60 rounded-xl">
        <div className="aspect-square relative">
          <Image src='/icon.png' className="object-contain " width={450} height={450} alt={'top image'} />
          <div className="w-full h-full absolute top-0  bg-gradient-to-b from-white/10 to-white/50">
          </div>

          <div className="absolute -bottom-12 h-40 w-full backdrop-blur-sm "></div>

          <div id="titleText" className="animonItem px-4 absolute bottom-2">
            <div className='bg-white relative'>
              <p className="text-sm bg-white absolute -top-12">薬剤師 × エンジニア</p>
              <h1 className="px-2 text-3xl tracking-wide text-white font-bold bg-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-600">
                はがくん
              </h1>

            </div>

          </div>

          <div id="snsIcons" className="animonItem bg-white p-1 absolute bottom-4 right-0 flex space-x-4 mr-4">
            <SnsIcon src={'sns/zenn.svg'} href={'https://zenn.dev/hagakun_dev'} colorName={'bg-white'} alt={'zenn icon'} />
            <SnsIcon src={'sns/twitter.svg'} href={'https://twitter.com/hagakun_yakuzai'} colorName={'bg-twitter'} alt={'twitter icon'} />
            <SnsIcon src={'sns/note.svg'} href={'https://note.com/our_evidence'} colorName={'bg-transparent scale-[2.2]'} alt={'note icon'} />

          </div>
        </div>

        <section className="px-4 z-10">
          <div id="description" className="mt-">
            <p className="animonItem inline-block text-xs text-white leading-5 bg-[#14213D]" data-effect="fadeInRight">
              薬剤師/アプリ/Webエンジニア <br />専門知識を活かした、みんなが求めるアプリを作ります🔥🔥 <br />
            </p>
          </div>

        </section>

        <section className="pl-8">
          <div className="animonItem">
            <h2 className="mt-8 mb-2 text-black font-thin font-body tracking-wider">Contents</h2>
          </div>
          <div id="contentsCol">
            {posts.map((post, index) => (
              <ContentCard key={post.frontmatter.title} post={post} index={index} />
            ))}
          </div>
        </section>

        {/* <section>
          <div className="pl-8">
            <h2 className="animonItem mt-8 mb-2 text-black font-thin font-body tracking-wider">Store</h2>
          </div>
          <div className="pb-8 p-4 flex overflow-x-scroll space-x-4 snap-x snap-mandatory">
            <div className="shadow-xl rounded-2xl shadow-slate-400/40 flex-shrink-0 w-2/3 snap-center">
              <img className="object-cover rounded-t-2xl" src="images/product1.webp" />
              <h3 className="subHeadText gradientText px-6 pt-5 pb-2 min-h-18">
                COCOIモイスチャーダメージケアシャンプー</h3>
              <p className="cardDescription">幾度あやが普段使いしているシャンプー。ダメージヘアやケアをしたい方もさら艶になりますよ！</p>
            </div>

            <div className="shadow-xl rounded-2xl shadow-slate-400/40 flex-shrink-0 w-2/3 snap-center">
              <img className="object-cover rounded-t-2xl" src="images/TShirt.webp" />
              <h3 className="subHeadText gradientText px-6 pt-5 pb-2 min-h-18">
                【ファンクラブ限定】ホワイトT-Shirts</h3>
              <p className="cardDescription">幾度あやファンクラブ限定T-Shirts、ライブに着てきてね✨</p>
            </div>

            <div className="shadow-xl rounded-2xl shadow-slate-400/40 flex-shrink-0 w-2/3 snap-center">
              <img className="object-cover rounded-t-2xl" src="images/photo.webp" />
              <h3 className="subHeadText gradientText px-6 pt-5 pb-2 min-h-18">
                チェキ1部個撮</h3>
              <p className="cardDescription">幾度あやと一緒に写真を撮ってくれませんか？？ふたりの思い出を作りましょ！📸
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className="pl-8 link">
          <div className="animonItem">
            <h3 className="mt-8 mb-2 text-black font-thin font-body tracking-wider">Links</h3>
          </div>

          <div>
            <div className="LeftIn mb-4 flex items-center space-x-4 shadow-md shadow-slate-400/40 p-4 rounded-l-2xl">
              <img src="images/17.webp" alt="17 logo" className="rounded-full h-12" />
              <p className="subHeadText gradientText">17Live</p>
            </div>

            <div className="LeftIn mb-4 flex items-center space-x-4 shadow-md shadow-slate-400/40 p-4 rounded-l-2xl">
              <img src="images/tiktok.svg" alt="tiktok logo" className="rounded-full h-12 bg-black p-2" />
              <p className="subHeadText gradientText">Tiktok</p>
            </div>

            <div className="LeftIn mb-4 flex items-center space-x-4 shadow-md shadow-slate-400/40 p-4 rounded-l-2xl">
              <div className="bg-white bg-gradient-to-bl from-violet-500 via-pink-500 to-orange-400 rounded-full">
                <img src="images/instagram.svg" alt="instagram logo" className="h-12" />
              </div>
              <p className="subHeadText gradientText">諸山 祐介 - 公式Instagram</p>
            </div>

            <div className="LeftIn mb-4 flex items-center space-x-4 shadow-md shadow-slate-400/40 p-4 rounded-l-2xl">
              <div className="bg-twitter rounded-full p-2">
                <img src="images/twitter.svg" alt="17 logo" className="rounded-full h-8" />
              </div>
              <p className="subHeadText gradientText">諸山 祐介 - 公式 Twitter</p>
            </div>

            <div className="LeftIn mb-4 flex items-center space-x-4 shadow-md shadow-slate-400/40 p-4 rounded-l-2xl">
              <img src="images/community.svg" alt="17 logo"
                className="rounded-full h-12 bg-gradient-to-bl from-fuchsia-500 via-violet-500 to-sky-400 p-1" />
              <p className="subHeadText gradientText">諸山 祐介 - 公式ファンクラブ</p>
            </div>

          </div>


        </section>

        <section>
          <div className='grid sm:grid-cols-1 md:grid-cols-1 justify-center content-start mx-4'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </section> */}

        <div className="p-20"></div>

        <Footer />
      </div>


      {/* <div className="bg-white rounded-2xl shadow-lg shadow-blue-200/20 px-8 mx-8 md:mx-20 mt-8">
        <div className="flex flex-col sm:flex-row rounded-2xl">

          <Image src='/icon.png' className="object-contain " width={300} height={300} alt={'top image'} />

          <div className="ml-8 flex justify-center flex-row  items-center">
            <p className="prose-sm lg:prose-lg py-5 text-natural-600">
              <p className='md:my-4 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-600'>This is</p>
              <h1 className='m-0 pb-4 text-3xl md:text-4xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-600'>
                Hagakun&apos;s Portfolio
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

      <hr className="my-8" /> */}




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
