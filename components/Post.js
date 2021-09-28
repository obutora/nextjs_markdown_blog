import Link from 'next/link'
import btnStyle from '../styles/button.module.css'

export default function Post({ post }) {
    //descriptionが空だった時の処理
    if (!post.frontmatter.description) {
        post.frontmatter.description = ''
    }

    // console.log(post.frontmatter.description);

    return (
        <>
            <div className="m-3 flex items-stretch">
                <div className='rounded-xl bg-white mx-auto pb-1 max-w-lg shadow-lg sm:max-w-2xl'>
                    <img src={post.frontmatter.cover_image} className="object-cover rounded-t-2xl" />


                    <div className='mt-3 mx-5 post-date text-sm text-gray-400 font-semibold'>{post.frontmatter.date} </div>
                    <h3 className='mt-2 mx-5 text-2xl text-gray-800 font-semibold'>{post.frontmatter.title}</h3>
                    <p className="mb-5 mx-5 text-gray-500" >{post.frontmatter.description}</p>


                    <div className="self-stretch"></div>

                    <div className="flex mr-3 mb-2 my-auto">
                        <div className="flex-grow end"></div>
                        {/* ここでblog/[slug]に飛ばす */}
                        <Link href={`/blog/${post.slug}`}>
                            <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                                Read more
                            </div>
                        </Link>
                        {/* <div className={btnStyle.btn + ' ' + btnStyle.btnSecoundary}>あいうえお</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}