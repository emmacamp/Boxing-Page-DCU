import React from 'react'

const img = 'https://imgs.search.brave.com/mdoL6nhPNUs1cIFHE8JzbgZtLJ65yul8z2pI8z2E7QU/rs:fit:400:273:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbGliLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/MS9taWtlLXR5c29u/LWJveGluZ181ZTI3/ZTg1MGJkNmZlLnBu/Zw'

function index() {
    return (
        <div className='d-flex'>
            <div className="box-left w-50">
                <h2>¿En qué consiste?</h2>
                <p className='text-justify text-secondary fs-5 lh-lg'>
                    El boxeo es un deporte de contacto y combate que se practica dentro de un cuadrilátero, en donde dos personas luchan y se enfrentar en un duelo utilizando únicamente sus puños, los cuales a su vez, deberán de permanecer cubiertos por unos guantes durante todo el encuentro.
                </p>
                <a href="#">más información...</a>
            </div>
            <div className="box-right w-50 m-auto d-flex justify-content-center">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default index