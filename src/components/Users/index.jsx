import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { Button, Card } from 'react-bootstrap';
import Footer from '../Footer';

const UserCard = ({ id, nombre, email, img, phone }) => (
    <Card className='d-flex justify-content-center align-items-center m-2' style={{ width: '18rem', }}>
        <Card.Img variant="top" src={img} style={{ maxHeight: '50%' }} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text >
                <p className='text-justify text-secondary fs-6 lh-sm'>{id}</p>
            </Card.Text>
            <Card.Text >
                <p className='text-justify text-secondary fs-6 lh-sm'>{email}</p>
            </Card.Text>
            <Card.Text >
                <p className='text-justify fw-bold fs-6 lh-sm'>{phone}</p>
            </Card.Text>
        </Card.Body>
    </Card>
);


export const Users = () => {

    const [users, setUsers] = useState(() => {
        const localData = localStorage.getItem('users')
        return localData ? JSON.parse(localData) : []
    })

    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(users)

    // console.log(users);

    const onChange = (e) => {
        const { value } = e.target;
        setSearch(value)

        const filtered = users.filter((user) => {
            return user.id.includes(search)
        })


        setFilteredUsers(filtered)

        // console.log(filtered);
        if (value === '') {
            setFilteredUsers(users)
        }

    }

    const onSearch = () => {

        const filtered = users.filter((user) => {
            return user.id.toLowerCase().includes(search.toLowerCase())
        })


        setFilteredUsers(filtered)

    }


    return (
        <>
            <div className="container">
                <NavBar />
                <div className='w-25 h-100 my-4 '>.</div>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className='my-5'>Usuarios</h1>

                    <div className="input-group w-25">
                        <div className="form-outline w-75">
                            <input type="search" id="form1" className="form-control" onChange={onChange} />
                            <label className="form-label" htmlFor="form1">Search</label>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-25"
                            onClick={onSearch}
                            onChange={onSearch}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                <section className='d-flex flex-wrap m-2'>
                    {
                        filteredUsers.length !== 0 ?
                            filteredUsers.map((product) => {
                                return (
                                    <UserCard
                                        key={product.id}
                                        id={product.id}
                                        nombre={product.name}
                                        email={product.email}
                                        img={product.photo}
                                        phone={product.phone}

                                    />
                                )
                            })
                            :
                            <h1 className='m-auto py-5'>No hay usuarios</h1>
                    }
                </section>
            </div>
            <footer className='mt-5'>
                <Footer />
            </footer>
        </>
    )
}

export default Users