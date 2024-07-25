'use client'
import { useEffect } from 'react';



export default async function Home() {

    useEffect(()=>{
        fetch('/api/hello')
        .then(res => console.log(res))
    },[])

    return (
        <>
           <h1> Hiring App</h1>
        </>
    )
}
