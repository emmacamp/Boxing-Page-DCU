import { Button, Card } from 'react-bootstrap';

function Card1({ title, text, img }) {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    );
}

export default Card1;