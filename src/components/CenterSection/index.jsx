import React from 'react'

const img = 'https://imgs.search.brave.com/mdoL6nhPNUs1cIFHE8JzbgZtLJ65yul8z2pI8z2E7QU/rs:fit:400:273:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbGliLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/MS9taWtlLXR5c29u/LWJveGluZ181ZTI3/ZTg1MGJkNmZlLnBu/Zw'

function index() {
    return (
        <div className='d-flex'>
            <div className="box-left w-50">
                <h3>Center Section</h3>
                <p className='text-justify text-secondary'>
                    El boxeo (del inglés boxing), también llamado a veces2​ boxeo inglés, boxeo irlandés o pugilismo, y comúnmente conocido como box, es un deporte de contacto en el que dos contrincantes luchan utilizando únicamente sus puños con guantes, golpeando a su adversario de la cintura hacia arriba, dentro de un cuadrilátero especialmente diseñado para tal fin; la pelea se lleva a cabo en breves secuencias de lucha denominadas asaltos y de acuerdo a un preciso reglamento, el cual regula categorías de pesos y duración del encuentro, entre otros aspectos.
                    <br />
                    <br />
                    Aunque el término "boxeo" comúnmente se atribuye al "boxeo inglés", en el que solo intervienen los puños, el boxeo se ha desarrollado de diversas formas en diferentes áreas geográficas y culturas.
                </p>
            </div>
            <div className="box-right w-50 m-auto d-flex justify-content-center">
                <img src={img} alt="" />

            </div>

        </div>
    )
}

export default index