import React from 'react'
import Link from 'next/link'

export default function Footer({ bg, textColor }) {

    const bgColor = bg ? bg : 'bg-primary'
    const text = textColor ? `pt-4 text-sm ${textColor} text-center` : 'pt-4 text-sm text-white text-center'


    return (
        <header className={bgColor}>
            <p className={text}>Copyright © 2022 Hagakun. All Rights Reserved.</p>
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