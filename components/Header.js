import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

function detector(path, word) {
    return path === word ? 'text-white no-underline font-light' : 'text-white underline font-light'
}


export default function Header() {
    const router = useRouter()

    console.log(router.pathname)
    const under = 'no-underline'



    return (
        <header className="bg-primary mx-auto font-body overflow-hidden">
            <div className="p-3 ml-3 space-x-4 flex items-center">
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image src='/logo_200.png' width={50} height={50} alt={'header logo'} />
                        <a className={detector(router.pathname, '/')}>Home</a>
                    </Link>
                </div>
                <Link href='/'>
                    <a className={detector(router.pathname, '/blog/[slug]')}>Content</a>
                </Link>
            </div>
        </header>
    )
}
