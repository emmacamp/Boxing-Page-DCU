import React from 'react'
import Navbar from '../NavBar'
import CardsContainer from '../Cards/CardsContainer'
import Carrousel from '../Carrousel'
import Footer from '../Footer'
import CenterSection from '../CenterSection'
import RingSection from '../RingSection'
import Form from '../Form'

export const Section = ({ title = '', children }) => {
    return (
        <section className='my-5'>
            <h1>{title}</h1>
            {children}
        </section>
    )
}


function Home() {
    return (
        <>
            <div className='container'>
                <div style={{ margin: '10px' }}>
                    <Navbar />
                    <div>'</div>
                    <Section children={<Carrousel />} />
                    <Section children={<CenterSection />} />
                    {/* <div className="m-auto d-flex justify-content-center ">
                        <img className='w-25 h-25' src="https://imgs.search.brave.com/QMLThUlsswzaMMMXXRffoNknm7w29FrjaHo3PeVJ1Iw/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z181MzE0MjQucG5n" alt="" />
                    </div> */}
                    <Section children={<CardsContainer />} />
                    {/* <Section title='Section 4' children={<CardsContainer />} /> */}
                    <Section children={<RingSection />} />
                    {/* <hr /> */}
                    {/* <Section children={<Form />} /> */}
                </div>
            </div>
            <footer >
                <Footer />
            </footer>
        </>
    )
}

export default Home