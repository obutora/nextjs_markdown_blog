import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import btnStyle from '../../styles/button.module.css'
import Script from 'next/script'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css';
import Footer from '../../components/Footer'

export default function PostPage({ frontmatter: { title, description, cover_image },
    slug,
    content }) {

    <Script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></Script>
    return (
        <div>
            <div className="block sm:mx-8 my-8 px-8 md:px-12 md:mx-20 bg-white py-8 shadow-lg shadow-sky-400/20">
                <h1 className='my-4'>{title}</h1>
                <Image src={cover_image} width={800} height={300} objectFit="contain" res alt={title + 'Top Image'} />
                <div className='mt-4'>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <div className='text-center my-12'>

                    <div className={btnStyle.btn + ' ' + btnStyle.btnP}>
                        <Link href={`/`}>
                            <a className='text-white no-underline'>
                                トップにもどる
                            </a>
                        </Link>
                    </div>
                </div>
                <Footer textColor={'text-primary'} bg={'bg-white'} />
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

    const mark = marked(content)

    const $ = cheerio.load(mark)

    $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text())
        $(elm).html(result.value)
        $(elm).addClass('hljs')
    })

    return {

        props: {
            frontmatter,
            slug,
            content: $.html()
        }
    }
}