import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import btnStyle from '../../styles/button.module.css'

export default function PostPage({ frontmatter: { title, description, cover_image },
    slug,
    content }) {

    return (
        <div className="prose p-5 prose-blue bg-white rounded-2xl shadow-xl blockmy-5 mx-5 my-3 sm:mx-10">
            <h1>{title}</h1>
            <img src={cover_image} />
            <div className="post-body ">

                <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }))

    return {
        paths, fallback: false
    }
}


export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {

        props: {
            frontmatter,
            slug,
            content
        }
    }
}