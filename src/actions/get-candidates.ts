
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
    const candidates = await response.json();
    
    return candidates

}