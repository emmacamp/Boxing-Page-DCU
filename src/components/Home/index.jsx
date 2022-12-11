import React from 'react'
import Navbar from '../NavBar'
import CardsContainer from '../Cards/CardsContainer'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import CenterSection from '../CenterSection'
import RingSection from '../RingSection'
import Form from '../Form'

const Section = ({ title = '', children }) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}


function Home() {
    return (
        <>
            <div className='container'>
                <div style={{ margin: '10px' }}>
                    <Navbar />
                    <section >
                        <Carrousel />
                        <CardsContainer />
                    </section>
                    <Section title='Section 2' children={<CenterSection />} />
                    <Section title='Section 3' children={<CardsContainer />} />
                    <Section title='Section 4' children={<RingSection />} />
                    <Section title='Section 5' children={<Form />} />
                </div>
            </div>
            <footer >
                <Footer />
            </footer>
        </>
    )
}

export default Home