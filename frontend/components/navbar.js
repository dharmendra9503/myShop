import React from 'react';
import Link  from 'next/link';

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
                        <img className="w-8" src="./logo.svg" alt="" />
                        <span className="ml-3 text-xl">MyShop</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">Home</Link>
                        <Link href='/about'>About</Link>
                        {/* <Link href="/products"><a className="mr-5 hover:text-gray-900">Products</a></Link>
                        <Link href="/contact"><a className="mr-5 hover:text-gray-900">Contact Us</a></Link> */}
                    </nav>
                    <button className="text-white bg-i ndigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
