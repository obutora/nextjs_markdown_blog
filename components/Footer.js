import React from 'react'
import Link from 'next/link'

export default function Footer() {

    return (
        <header className="bg-primary">
            <p className='mt-8 py-2 text-sm text-white text-center'>Copyright © 2022 Hagakun. All Rights Reserved.</p>
            {/* <div className="p-3 ml-3 space-x-4 block">
                <Link href='/'>
                    <a className='text-white no-underline font-light'>Home</a>
                </Link>
                <Link href='/'>
                    <a className='text-white no-underline font-light'>Content</a>
                </Link>
            </div> */}
        </header >
    )
}