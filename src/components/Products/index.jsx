import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { Card } from 'react-bootstrap';
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



function Products() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <div className="container">
                <NavBar />
                <div className='w-25 h-100 my-4 '>.</div>
                <h1 className='my-5'>Products</h1>
                <section className='d-flex flex-wrap m-2'>
                    {
                        products.length !== 0 ?
                            products.map((product) => {
                                return (
                                    <CardPrice
                                        type={product.title}
                                        brand={product.category}
                                        price={product.price}
                                        img={product.image}
                                    />
                                )
                            })
                            :
                            <h1 className='m-auto py-5'>No hay productos</h1>
                    }
                </section>
            </div>
            <footer className='mt-5'>
                <Footer />
            </footer>
        </>
    )
}

export default Products