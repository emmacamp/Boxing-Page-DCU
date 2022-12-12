import React from 'react'
import Card1 from '../Card1'

function CardsContainer() {
    return (
        <div className="container d-flex ml-100 flex-wrap">
            <Card1
                title={'Guantes de Boxeo'}
                text={`Se utilizan como medio de protección y recubren las manos de los boxeadores. Tienen también la función de suavizar un poco el golpe durante el combate reduciendo así la cantida...`}
                img={'https://imgs.search.brave.com/JI4UQ5MPUxzAYDQM4FEnwA53Ttzn6jobInbvzLvznJY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aW1wYWN0b21lcmNl/ZGVzLmNvbS5hci93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NS9sZW9uZS0xOTQ3/LWd1YW50ZXMtZGUt/Ym94ZW8tbW9kZWxv/LWZsYXNoLW5lZ3Jv/LW5lZ3JvLXRhbGxh/MTQtb3otMTUzNngx/NTM2LmpwZw'}
            />
            <Card1
                title={'Protector bucal'}
                text={'El protector bucal de boxeo es una funda dental realizada en goma flexible, además de ser una protección para la boc a, la mandíbula y huesos de la cara, también, gracias a la postura qu...'}
                img={'https://imgs.search.brave.com/Bkgo5tKbpKrlTG9D_UXDzpT1fRiQDUsG0QMVwz3SUhA/rs:fit:993:993:1/g:ce/aHR0cHM6Ly93d3cu/dmVudGEtZGUuY29t/LmNvL3NoLWltZy9w/cm90ZWN0b3ItYnVj/YWwtZXZlcmxhc3Qt/c2ltcGxlLWJveGVv/LW1tYS1hcnRlcy1t/YXJjaWFsZXMtMTY1/MDgtTUxBMjAxMjE5/NTA1NThfMDcyMDE0/LU9fcHJvdGVjdG9y/JTJCYnVjYWwlMkJl/dmVybGFzdC5qcGc'}
            />
            <Card1
                title={'Pantaloneta'}
                text={'Conocida también como calzón es una prenda que deben usar todos los boxeadores y que idealmente, debe fabricarse con material transpirables y con un elástico en la cintura para mejorar la movilidad.'}
                img={'https://imgs.search.brave.com/LzLZVk3b9ftJtkjA-NaWeB-ER4RGmzt51kJvrLOhDm8/rs:fit:1024:1024:1/g:ce/aHR0cDovL2Nkbi5j/b29yZGl1dGlsLmNv/bS9pbWFnZW4tcGFu/dGFsb25ldGFfZGVf/Ym94ZW9fY2VudHVy/eS0xMzExMDU0LTAt/MC0wLTc1LmpwZw'}
            />
            <Card1
                title={'Botas'}
                text={'Las botas de boxeo son estrechas. Además, en la práctica de este deporte se pivota mucho, Por ello, a la hora de comprar tu bota de boxeo, es importante comprar media talla más que el calza...'}
                img={'https://imgs.search.brave.com/jSr0hjjZwdSpIspp0LEEU5SP_CIZf_zKQRKQWTZ2Yhw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sZW9u/ZTE5NDcuZXMvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Q0wxMDFfMDFfMS5q/cGc'}
            />
        </div>

    )
}


export default CardsContainer
