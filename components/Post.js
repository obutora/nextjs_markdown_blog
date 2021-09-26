import Link from 'next/link'

export default function Post({ post }) {
    return (
        <>
            <div className='card'>
                <img src={post.frontmatter.cover_image} />

                <div className='post-date'>{post.frontmatter.date} </div>
                <h3>{post.frontmatter.title}</h3>

                <Link href={`/blog/${post.slug}`}><a className="btn">Read more</a></Link>
            </div>
        </>
    )
}