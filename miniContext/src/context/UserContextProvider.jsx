import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)  //we can user, userState even without importing the usestate by React.useState()

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider