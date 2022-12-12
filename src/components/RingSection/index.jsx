import React from "react";
import { Button } from "react-bootstrap";
const img = 'https://imgs.search.brave.com/brIq-0HM8klTMZyDjHG7HbRK2LG4UNm52ziTv_4HHhk/rs:fit:800:319:1/g:ce/aHR0cDovL2kuaW1n/dXIuY29tL0E0eVRC/clYucG5n'
function index() {
    return (
        <div className='d-flex'>
            <div className="box-left w-50">
                <h2>Ring</h2>
                <p className='text-justify text-secondary fs-5 lh-lg'>
                    Es una estructura cuadrada que debe medir como mínimo 5 x 5 metros, para los encuentros de índole internacional deben medir 6 x 10 metros. La superficie de este ring que de estar cubierta por una lona y la construcción debe de ser sólida y bien nivelada.
                </p>
                <Button variant="danger">Más información</Button>
            </div>
            <div className="box-right w-50 m-auto d-flex justify-content-center">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default index