import Carousel from 'react-bootstrap/Carousel';
// import './style.css';



function IndividualIntervalsExample() {
    return (
        <Carousel style={{ margin: '50px auto', width: '500', height: '400px', overflow: 'hidden' }}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 "
                    src="https://images.unsplash.com/photo-1563198797-24d96c7f865c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80"
                    alt="First slide"
                />
                {/*  <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 h-50"
                    src="https://imgs.search.brave.com/-0N1NQtFHu4TDWaJV99ehrMhqn0uwcORH0LGwWn9zpA/rs:fit:1200:900:1/g:ce/aHR0cDovL2ltZzIu/cnR2ZS5lcy92LzM2/MjQ3MTE_dz0xNjAw/JnByZXZpZXc9MTQ2/NTAzNzc4ODQzNy5q/cGc"
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src="https://imgs.search.brave.com/wTJZ0FczEmtocErjMYJKYu-ulHyx3M74sU7GmZZV7eg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/aTNQVkFUcm5RZDFy/SzE3RzZRemNBSGFF/OCZwaWQ9QXBp"
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>

    );
}

export default IndividualIntervalsExample;