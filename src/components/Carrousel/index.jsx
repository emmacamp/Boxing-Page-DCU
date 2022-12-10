import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <div style={{ margin: '50px auto' }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-50"
                        src="https://random.imagecdn.app/v1/image?width=500&height=150&category=shopping"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://random.imagecdn.app/v1/image?width=500&height=150&category=boxing"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default IndividualIntervalsExample;