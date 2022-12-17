import { Button, Card } from 'react-bootstrap';

function Card1({ title, text, img }) {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    <p className='text-justify text-secondary fs-6 lh-sm'>{text}</p>
                </Card.Text>
                <Button variant="danger">
                    <a style={{ textDecoration: 'none', color: 'white' }}
                        href='https://es.wikipedia.org/wiki/Boxeo#Indumentaria_y_protecci%C3%B3n_personal'
                        target='_blank' rel="noreferrer"
                    >
                        Más información
                    </a>
                </Button>
            </Card.Body>
        </Card>
    );
}

export function Card2({ title, text, img }) {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    <p className='text-justify text-secondary fs-6 lh-sm'>{text}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}




export default Card1;