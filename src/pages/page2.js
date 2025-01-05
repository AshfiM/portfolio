import React from "react"
import { useUser } from "../context/usercontext";


const Page2 = () => {
    const {user} = useUser()
    return (
        <div >
            page 2
            <h2>{user.name}</h2>
        </div>
    )
}

export default Page2;