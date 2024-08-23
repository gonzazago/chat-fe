'use client'
import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store'
import Link from 'next/link'
import React, { useState } from 'react'

export const TopMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openSideMenu = useUIStore(state => state.openSideMenu);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);
    const isSiMenuOpen = useUIStore(state => state.isSideMenuOpen)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-gray-50 shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={"/"}>
                        <span className={`${titleFont.className} antialiased font-bold`}>
                            Hiring
                        </span>
                        <span>
                            | App
                        </span>
                    </Link>
                </div>
                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={openSideMenu} className="text-gray-600 focus:outline-none focus:text-blue-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 text-gray-600">
                    <div className="relative group">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-blue-600">Planes</a>
                        <div className="absolute z-10 left-0 hidden mt-1 space-y-2 bg-white border border-gray-200 shadow-lg group-hover:block">
                            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Opción 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Opción 2</a>
                        </div>
                    </div>
                    <a href="#" className="hover:text-blue-600">Busquedas</a>
                    <div className="relative group">
                        <a href="#" className="hover:text-blue-600">Servicios</a>
                        <div className="absolute z-10 left-0 hidden mt-1 space-y-2 bg-white border border-gray-200 shadow-lg group-hover:block">
                            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Opción 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Opción 2</a>
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="font-bold hover:text-blue-600">Publicar</a>
                    <a href="#" className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Iniciar sesión</a>
                </div>
            </nav>
            {/* Sidebar */}
            {isSiMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeSideMenu}></div>
                    <div className="relative flex flex-col w-64 h-full bg-white shadow-lg">
                        <div className="px-4 py-4 space-y-2 text-gray-600">
                            <div>
                                <a href="/" className="block py-2 hover:text-blue-600">Home</a>
                            </div>
                            <div>
                                <a href="#" className="block py-2 hover:text-blue-600">Planes</a>
                                <div className="pl-4 space-y-2">
                                    <a href="#" className="block py-1 text-gray-600 hover:bg-gray-100">Opción 1</a>
                                    <a href="#" className="block py-1 text-gray-600 hover:bg-gray-100">Opción 2</a>
                                </div>
                            </div>
                            <a href="#" className="block py-2 hover:text-blue-600">Busquedas</a>
                            <div>
                                <a href="#" className="block py-2 hover:text-blue-600">Servicios</a>
                                <div className="pl-4 space-y-2">
                                    <a href="#" className="block py-1 text-gray-600 hover:bg-gray-100">Opción 1</a>
                                    <a href="#" className="block py-1 text-gray-600 hover:bg-gray-100">Opción 2</a>
                                </div>
                            </div>
                            <a href="#" className="block py-2 font-bold hover:text-blue-600">Publicar</a>
                            <a href="#" className="btn-primary">Iniciar sesión</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

