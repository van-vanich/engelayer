// src/components/Navbar.js
import Link from 'next/link';
import '@/index.css';
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav className="max-w-full container bg-cover bg-center p-4 space">

            <div className="container mx-auto flex justify-between items-center text-white space-x-2">
                <Link href="/">
                    <Image src="/static/logo.svg" className="" width={178} height={50}/>
                </Link>
                <div className="space-x-4 flex justify-center items-center">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <Link href="/ecosystem">
                        Ecosystem
                    </Link>
                    <Link href="/voting">
                        Community
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/docs">
                        Docs
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link target="_blank" href="https://twitter.com/EngeLayer">
                        <Image src="/static/twitter.svg" className="" width={40} height={40}/>
                    </Link>
                    <Link target="_blank" href="https://github.com/van-vanich/engelayer">
                        <Image src="/static/github.svg" className="" width={40} height={40}/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
