import React from 'react'
import NavBar from '../NavBar'
import { Button, Card } from 'react-bootstrap';
import Footer from '../Footer';

function CardPrice({ type, brand, price, img }) {
    return (
        <Card className='d-flex justify-content-center align-items-center m-2' style={{ width: '18rem', }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{type}</Card.Title>
                <Card.Text >
                    <p className='text-justify text-secondary fs-6 lh-sm'>{brand}</p>
                </Card.Text>
                <Card.Text >
                    <p className='text-justify fw-bold fs-6 lh-sm'>{price}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

const img = 'https://i.ibb.co/PrGnGjm/guante-Azul.jpg';
const img1 = 'https://imgs.search.brave.com/jSr0hjjZwdSpIspp0LEEU5SP_CIZf_zKQRKQWTZ2Yhw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sZW9u/ZTE5NDcuZXMvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Q0wxMDFfMDFfMS5q/cGc';
const img2 = 'https://i.ibb.co/m5VCv6Y/13ab592406ea1be86df3a6f58e02df84f0d0cf3b.jpg';
const img3 = 'https://i.ibb.co/g77tcYj/105d863cb292530b9ea0853489d96d0731120e4c.jpg';
const img4 = 'https://i.ibb.co/tMbRyJx/benda.jpg';
const img5 = 'https://i.ibb.co/P4k8gQv/e71f2319971b8c7132cb5593f512c6f3ad256660.jpg';
const img6 = 'https://i.ibb.co/x84VrzF/ecd4a2163420cef790681d01f50cfa707179e5d6.jpg';
const img7 = 'https://i.ibb.co/ZhS4PDD/ptotector-Bucal.jpg';
const img8 = 'https://i.ibb.co/hdxTfM7/Saco.jpg';
const img9 = 'https://i.ibb.co/G7jcwQ8/sacoKsy.jpg';
const img10 = 'https://imgs.search.brave.com/JI4UQ5MPUxzAYDQM4FEnwA53Ttzn6jobInbvzLvznJY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aW1wYWN0b21lcmNl/ZGVzLmNvbS5hci93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NS9sZW9uZS0xOTQ3/LWd1YW50ZXMtZGUt/Ym94ZW8tbW9kZWxv/LWZsYXNoLW5lZ3Jv/LW5lZ3JvLXRhbGxh/MTQtb3otMTUzNngx/NTM2LmpwZw';
const img11 = 'https://imgs.search.brave.com/LzLZVk3b9ftJtkjA-NaWeB-ER4RGmzt51kJvrLOhDm8/rs:fit:1024:1024:1/g:ce/aHR0cDovL2Nkbi5j/b29yZGl1dGlsLmNv/bS9pbWFnZW4tcGFu/dGFsb25ldGFfZGVf/Ym94ZW9fY2VudHVy/eS0xMzExMDU0LTAt/MC0wLTc1LmpwZw';


function Products() {
    return (
        <>
            <div className="container">
                <NavBar />
                <div className='w-25 h-100 my-4 '>.</div>
                <h1 className='my-5'>Products</h1>
                <section className='d-flex flex-wrap m-2'>
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$8.95'
                        img={img}
                    />
                    <CardPrice
                        type='LEONE 1947 CL188 BOTAS BOXE, UNISEX'
                        brand='LEONE'
                        price='$63.24'
                        img={img1}
                    />
                    <CardPrice
                        type='Mytra Fusion 7-oz Mujeres Guantes MMA Palma ventilada Abierta Guantillas MMA'
                        brand='Mytra Fusion'
                        price='$85.55'
                        img={img2}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$23.95'
                        img={img3}
                    />
                    <CardPrice
                        type='Everlast 4455-3 Vendas para Manos, Adultos Unisex, Rosso, 108 Inch'
                        brand='EVERLAST'
                        price='$62.22'
                        img={img4}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$32.99'
                        img={img5}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$22.53'
                        img={img6}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$23.95'
                        img={img7}
                    />
                    <CardPrice
                        type='SuperPro Water-Air-Saco de Boxeo, Unisex Adulto'
                        brand='SuperPro'
                        price='$2.25'
                        img={img8}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$21.54'
                        img={img9}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$234.95'
                        img={img10}
                    />
                    <CardPrice
                        type='EVERLAST PRO STYLE 120" HAND WRAPS'
                        brand='EVERLAST'
                        price='$84.95'
                        img={img11}
                    />










                </section>
            </div>
            <footer className='mt-5'>
                <Footer />
            </footer>
        </>
    )
}

export default Products