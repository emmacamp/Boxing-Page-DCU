import React from 'react'
import { ResponsiveAppBar as NavBar } from '../NavBar'
import { CustumForm } from '../Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const alertSubmit = () => {
    Swal.fire({
        title: 'Success!',
        text: 'Formulario enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}
const alertError = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Debes ingresar todos los campos correctamente',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
}


const index = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState('https://imgs.search.brave.com/ey6SS1U8r34_rao7b2v8aysrA6JJ_O3qe5LikejVpGw/rs:fit:600:600:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL25vLXBy/b2ZpbGUtcGljdHVy/ZS1pY29uLTIxLmpw/Zw')
    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        photo
    })

    // async function getImages() {
    //     const res = await fetch('https://picsum.photos/v2/list?page=2&limit=1')
    //     const data = await res.json()

    //     return data[0].url

    // }

    // useEffect(() => {
    //     getImages().then((img) => {
    //         setPhoto(img)
    //     })
    // }, [form])


    const onSubmit = (event) => {
        event.preventDefault();
        //validations
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const phone = document.getElementById('phone').value;

        if (name === '' || id === '' || phone === '') {
            alertError();
            return;
        }

        // local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(form);
        localStorage.setItem('users', JSON.stringify(users));
        alertSubmit();
        navigate('/');

        console.log(form);
    }




    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <NavBar />
                <Form className='border p-5 w-50 m-auto'>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="name"
                            name='name'
                            placeholder="Raul Perez"
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label>Documento de Identidad</Form.Label>
                        <Form.Control
                            type="text"
                            name='id'
                            placeholder="402-7364308-4"
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            name='phone'
                            placeholder="809-123-4567"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="example@xyz.com"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            name='photo'
                            placeholder="https://example.com"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}


export default index