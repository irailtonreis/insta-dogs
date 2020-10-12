import React from 'react';

export const UserContext = React.useContext()

export const UserStorage = ({children}) =>{
    const [ data, setData] = React.useState(null)
    const [ usuario, setUsuario] = React.useState(null)
    return (
   <UserContext.Provider valu={{}}>
        {children}
    </UserContext.Provider>
    )
}