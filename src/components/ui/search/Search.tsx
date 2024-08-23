"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState("")

    const handeOnClick = () => {
        console.log(search);

        router.push(
            `/candidates?search=${encodeURIComponent(search)}`)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    return (
        <>
            <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Ingresa tu busquedad"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-4 px-5 py-2 btn-primary" onClick={() => handeOnClick()}>
                Buscar
            </button>
        </>

    )
}

