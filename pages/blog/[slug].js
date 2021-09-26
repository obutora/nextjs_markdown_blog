import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import btnStyle from '../../styles/button.module.css'

export default function PostPage({ frontmatter: { title, date, cover_image },
    slug,
    content }) {
    return (
        <div className="space-y-3">
            <div className={btnStyle.btn + ' my-3 ' + btnStyle.btnS}>
                <Link href="/">
                    <a >もどる</a>
                </Link>
            </div>
            <div className="p-5 bg-white mx-3 rounded-2xl shadow-xl inline-block max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl 2xl:max-w-5xl">
                <h1 className='text-3xl'>{title}</h1>
                <img src={cover_image} />
                <div className="post-body">

                    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                </div>
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