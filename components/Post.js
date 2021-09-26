import Link from 'next/link'
import btnStyle from '../styles/button.module.css'

export default function Post({ post }) {
    return (
        <>
            <div className='rounded-xl bg-white mx-5 my-3 pb-5 max-w-lg shadow-lg sm:max-w-xl'>
                <img src={post.frontmatter.cover_image} className="rounded-t-xl" />

                <div className='mt-3 mx-5 post-date text-sm text-gray-400 font-semibold'>{post.frontmatter.date} </div>
                <h3 className='mt-2 mx-5 mb-6 text-2xl text-gray-800 font-semibold'>{post.frontmatter.title}</h3>

                {/* ここでblog/[slug]に飛ばす */}
                <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                    <Link href={`/blog/${post.slug}`}><a className="btn">Read more</a></Link>
                </div>
                {/* <div className={btnStyle.btn + ' ' + btnStyle.btnSecoundary}>あいうえお</div> */}
            </div>
        </>
    )
}