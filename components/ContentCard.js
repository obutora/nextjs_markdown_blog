import Image from 'next/image'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax';


export default function ContentCard({ post, index }) {
    //descriptionが空だった時の処理
    if (!post.frontmatter.description) {
        post.frontmatter.description = ''
    }

    let moveDirection = index % 2 === 0 ? 'contentImage' : 'contentImage2'

    return (
        <ParallaxProvider>
            <Parallax speed={10} translateX={['100px', '0px']} translateY={[0, 0]} scale={[0.66, 1]} easing='easeOutCirc'>

                <div className="shadow-xl shadow-slate-400/40 rounded-t-2xl mb-4 rounded-2xl bg-white">

                    <Image className={moveDirection} src={post.frontmatter.cover_image} width={800} height={800 / 1.9} alt="sing image" />

                    <div className='px-6 pt-2 pb-1 post-date text-xs text-slate-400 font-thin'>{post.frontmatter.date} </div>
                    <h3 className="gradientText font-semibold px-6 min-h-18">
                        {post.frontmatter.title}</h3>

                    <p className="text-xs text-slate-700 px-6 my-4">{post.frontmatter.description}</p>

                    <div className='flex flex-row-reverse'>
                        <div className='cursor-pointer
                py-2 px-6 mr-4 mb-4 rounded-xl w-32  focus:ring-2 focus:ring-blue-900
        hover:translate-y-0.5 uppercase tracking-wider shadow-lg text-sm transform transition bg-primary
        hover:bg-blue-400 active:bg-blue-500
        text-bg-primary font-normal'>
                            <Link href={`/blog/${post.slug}`}>
                                <a className='text-white font-normal no-underline'>
                                    もっと読む
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </Parallax>

        </ParallaxProvider>
    )
}