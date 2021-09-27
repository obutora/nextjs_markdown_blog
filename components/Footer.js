import React from 'react'
import Link from 'next/link'

export default function Header() {

    return (
        <header className="bg-primary">
            <div className="p-3 ml-3 space-x-4 block">
                <Link href='/'>
                    <a className='text-white no-underline font-light'>Home</a>
                </Link>
                <Link href='/'>
                    <a className='text-white no-underline font-light'>Content</a>
                </Link>
            </div>
        </header >
    )
}