import React from 'react';
import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';

export const UserContext = React.createContext()

export const UserStorage = ({children}) =>{
    const [ data, setData] = React.useState(null)
    const [ usuario, setUsuario] = React.useState(null)
    const [ login, setLogin] = React.useState(null)
    const [ loading, setLoading] = React.useState(null)
    const [ error, setError] = React.useState(null)

    React.useEffect(() => {
      async function autoLogin(){
        const token = window.localStorage.getItem('token')

        if(token)
            setError(null)
            setLoading(true)
            try {
                const { url, options } = TOKEN_VALIDATE_POST(token)
                const response = await fetch(url, options)
                if(!response.ok) throw new Error ("Token ínvalido")
                await getUser(token)
                
            } catch (error) {
                userLogout();
                
            }finally{
               setLoading(false) 
               
            }
          
        }
      

      autoLogin()
    }, [])

    async function userLogout(){
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        window.localStorage.removeItem('token')
    }
    async function getUser(token) {
        console.log(token)
        const { url, options } = USER_GET(token)
        const repsonse = await fetch(url, options)
        const json = await repsonse.json()
        setData(json)
        setLogin(true)
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({username, password})
        const repsonse = await fetch(url, options)
        const { token } = await repsonse.json()
        window.localStorage.setItem('token', token)
        getUser(token)
        console.log(token)
    }

    return (
   <UserContext.Provider value={{ userLogin, data, userLogout }}>
        {children}
    </UserContext.Provider>
    )
}