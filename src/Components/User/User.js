import React from 'react'
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../../Components/NotFound';
import Head from '../Helper/Head';

const User = () => {
    const { data } = React.useContext(UserContext)
    return (
        <div className="container">
            <Head title="Minha Conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed userSearch={data.id} />}/>
                <Route path="/postar" element={<UserPhotoPost />}/>
                <Route path="/estatisticas" element={<UserStats />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default User
