import Link from 'next/link'
import btnStyle from '../styles/button.module.css'

export default function Post({ post }) {
    //descriptionが空だった時の処理
    if (!post.frontmatter.description) {
        post.frontmatter.description = ''
    }

    console.log(post.frontmatter.description);

    return (
        <>
            <div className='rounded-xl bg-white mx-5 my-3 pb-5 max-w-lg shadow-lg sm:max-w-2xl'>
                <img src={post.frontmatter.cover_image} className="rounded-t-xl" />

                <div className='mt-3 mx-5 post-date text-sm text-gray-400 font-semibold'>{post.frontmatter.date} </div>
                <h3 className='mt-2 mx-5 text-2xl text-gray-800 font-semibold'>{post.frontmatter.title}</h3>
                <p className="mb-5 mx-5 text-gray-500" >{post.frontmatter.description}</p>

                {/* ここでblog/[slug]に飛ばす */}
                <Link href={`/blog/${post.slug}`}>
                    <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                        Read more
                    </div>
                </Link>
                {/* <div className={btnStyle.btn + ' ' + btnStyle.btnSecoundary}>あいうえお</div> */}
            </div>
        </>
    )
}