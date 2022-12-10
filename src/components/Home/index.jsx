import React from 'react'
import Navbar from '../NavBar'
// import { } from '@mui/material'
// import Card1 from '../Cards/Card1'
import CardsContainer from '../Cards/CardsContainer'
import Carrousel from '../Carrousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Footer'
import CenterSection from '../CenterSection'

function Home() {
    return (
        <>
            <div className='container'>
                <div style={{ margin: '10px' }}>
                    <Navbar />
                    <section >
                        {/* <h1>Welcome Boking World</h1> */}
                        <Carrousel />
                        <CardsContainer />
                    </section>
                    <section>
                        <h1>Section 2</h1>
                        <CenterSection />

                    </section>
                    <section >
                        <h1>Section 3</h1>
                        <CardsContainer />
                    </section>
                </div>
            </div>
            <footer style={{}}>
                <Footer />
            </footer>
        </>
    )
}

export default Home