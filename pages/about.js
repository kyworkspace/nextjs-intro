import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'

function about() {
    return (
        <div>
            <SEO title={"About"} />
            <h1>about</h1>
        </div>
    )
}

export default about