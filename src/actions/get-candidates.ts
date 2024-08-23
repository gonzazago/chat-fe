import { candidates } from '@/seed/seed';

export const getCandidates = async (search: string) => {

    const response = await fetch("http://localhost:8080/api/v1/chat", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify([
            {
                role: "user",
                content: search
            }
        ])
    })
    const candidatesApi = await response.json();
    console.log(candidatesApi)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(candidates);
        }, 1000); // Simula un retraso de 1 segundo
    });

}