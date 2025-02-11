import React from 'react'

const Navbar = () => {
    return (

<div className="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap">
    <div className="flex items-center">
        <img src="https://tailwindflex.com/public/images/logo.svg" className="w-10 h-10"/>
        <h2 className="font-bold text-2xl text-purple-600">TailwildFlex</h2>
    </div>
    <div className="relative flex items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" className="border border-gray-200 rounded-md py-1 px-2"/>
        <svg className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <div className="flex items-center gap-2">
        <button className="border px-2 py-1 rounded-md">Center</button>
        <button className="border px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-gray-500 text-gray-700" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
        <button className="border px-2 py-1 rounded-md text-gray-500">Tailwind V3</button>
        <button className="border px-2 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700">Save</button>
    </div>
</div>

        
    )
}

export default Navbar
