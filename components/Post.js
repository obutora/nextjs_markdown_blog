import Link from 'next/link'
import Image from 'next/image'
import btnStyle from '../styles/button.module.css'

export default function Post({ post }) {
    //descriptionが空だった時の処理
    if (!post.frontmatter.description) {
        post.frontmatter.description = ''
    }

    // console.log(post.frontmatter.description);

    return (
        <>
            <div className="prose-sm m-3 flex flex-col　self-stretch max-h-full relative">
                <div className='rounded-xl flex-grow bg-white mx-auto pb-1 max-w-lg shadow-lg sm:max-w-2xl'>
                    <Image src={post.frontmatter.cover_image} width={800} height={800 / 1.9} className="object-center rounded-t-2xl" />


                    <div className='mt-3 mx-5 post-date text-sm text-gray-400 font-semibold'>{post.frontmatter.date} </div>
                    <h3 className='mx-5 text-2xl text-gray-800 font-semibold'>{post.frontmatter.title}</h3>
                    <p className="mx-5 text-gray-500 -bottom-full" >{post.frontmatter.description}</p>

                    <div className="h-12"></div>


                    <div className="flex mr-3 mb-2 absolute bottom-0 right-0">

                        {/* ここでblog/[slug]に飛ばす */}
                        <Link href={`/blog/${post.slug}`}>
                            <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                                もっと読む
                            </div>
                        </Link>
                        {/* <div className={btnStyle.btn + ' ' + btnStyle.btnSecoundary}>あいうえお</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}