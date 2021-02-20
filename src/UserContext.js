import React from 'react';
import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext()

export const UserStorage = ({children}) =>{
    const [ data, setData] = React.useState(null)
    const [ usuario, setUsuario] = React.useState(null)
    const [ login, setLogin] = React.useState(null)
    const [ loading, setLoading] = React.useState(null)
    const [ error, setError] = React.useState(null)
    const navigate = useNavigate()

    const userLogout = React.useCallback(  
        async function (){
          setData(null)
          setError(null)
          setLoading(false)
          setLogin(false)
          window.localStorage.removeItem('token')
          navigate("/login")
      },[navigate])

      async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
      }

    React.useEffect(() => {
      async function autoLogin(){
        const token = window.localStorage.getItem('token')
       
        if(token){
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
          
        }else {
            setLogin(false)
        }
    }

      autoLogin()
    }, [userLogout])

    async function userLogin(username, password) {
        try {
            setError(null)
            setLoading(true)
            const { url, options } = TOKEN_POST({username, password})
            const response = await fetch(url, options)
            if(!response.ok) throw new Error(`Error ${response.statusText}`)
            const { token } = await response.json()
            window.localStorage.setItem('token', token)
            await getUser(token)
            navigate("/conta")            
        } catch (error) {
            setError(error.message)
            setLogin(false)
            
        }finally{
            setLoading(false)
        }
       
    }

    return (
   <UserContext.Provider value={{ userLogin, data, userLogout, error, loading, login }}>
        {children}
    </UserContext.Provider>
    )
}