import { createContext, useContext, useState } from "react"; // function that give newcontext bag

const UserContext = createContext() // context argument is the default value

export const UserProvider = ({children}) => {
    //prop value is authenticated user
    const [user] = useState({
        name:"ashfi",
        email:"a@gmail.com",
        dob:"1/1/2002"
    })
    
    return (<UserContext.Provider value={{user}}>{children}</UserContext.Provider>) // userContext.Provider component allows consuming components to subcribe context changes
                                                    // accept value prop which will be passed to consuming components
                                                    // that are decendants of the provider

}
export const useUser = () => useContext(UserContext); // custom hook for convenience, not need to export userContext component



