export default async function authWithSSO({email}:{email: string}){
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/sign-in-sso`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
    });
    
    return await response.json();
}