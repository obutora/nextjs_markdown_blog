import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href='/'>
                    <h2>Home</h2>
                </Link>
            </div>
        </header>
    )
}
