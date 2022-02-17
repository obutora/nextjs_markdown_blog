import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import btnStyle from '../../styles/button.module.css'

export default function PostPage({ frontmatter: { title, description, cover_image },
    slug,
    content }) {

    return (
        <div>
            <div className="px-8 md:mx-20 bg-white py-8 flex flex-col items-center">
                <h1>{title}</h1>
                <Image src={cover_image} layout='fixed' objectFit='contain' width={600} height={400} alt={title + 'Top Image'} />
                <div>

                    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                </div>


            </div>
            <div className='text-center my-12'>
                <Link href={`/`}>
                    <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                        トップにもどる
                    </div>
                </Link>
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