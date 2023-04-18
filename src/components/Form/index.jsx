import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


export const CustumForm = () => {

    const alertError = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Debes ingresar todos los campos correctamente',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    const alertSubmit = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Formulario enviado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //validations
        const email = document.getElementById('formBasicEmail').value;
        const password = document.getElementById('formBasicPassword').value;

        if (email === '' || password === '') {
            alertError();
            return;
        }



        alertSubmit();




    }

    return (
        <Form className='border p-5 w-50 m-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default CustumForm;