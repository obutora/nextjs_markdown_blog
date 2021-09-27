import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function detector(path, word) {
    return path === word ? 'text-white no-underline font-light' : 'text-white underline font-light'
}


export default function Header() {
    const router = useRouter()

    console.log(router.pathname)
    const under = 'no-underline'



    return (
        <header className="bg-primary">
            <div className="p-3 ml-3 space-x-4 block">
                <Link href='/'>
                    <a className={detector(router.pathname, '/')}>Home</a>
                </Link>
                <Link href='/'>
                    <a className={detector(router.pathname, '/blog/[slug]')}>Content</a>
                </Link>
            </div>
        </header>
    )
}
