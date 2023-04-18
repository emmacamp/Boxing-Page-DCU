import { Link } from 'react-router-dom'
import NavBar from '../NavBar'


export const index = () => {
    return (
        <div className='container vh-100 bg-light'>
            <NavBar />
            <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
                <h1 className='text-center'>Pagina no encontrada</h1>

                <Link className='btn btn-primary' to="/">Ir al inicio</Link>

            </div>

        </div >

    )
}


export default index