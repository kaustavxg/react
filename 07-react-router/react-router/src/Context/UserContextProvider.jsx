import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children} 
            {/* iske andar jo bhi component aayega, use is global user context ka scope mil jayega */}
        </UserContext.Provider>
    )
}

export default UserContextProvider