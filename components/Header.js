import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-blue-500">
            <div className="p-5 ml-3 text-white">
                <Link href='/'>
                    <h2>Home</h2>
                </Link>
            </div>
        </header>
    )
}
