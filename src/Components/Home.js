import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head';

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head title="Fotos" descritpion="Home site dogs com feed fotos" />
            <Feed />
        </section>
    )
}

export default Home
