import React from 'react'
import { UserContext } from '../../UserContext';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRouter = (props) => {
    const { login } = React.useContext(UserContext)
    if(login) return <Route {...props}/>
    else if(!login) return <Navigate  to="/login"/>
    else null
}

export default ProtectedRouter
