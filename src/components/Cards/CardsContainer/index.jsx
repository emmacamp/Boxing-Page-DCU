import React from 'react'
import Card1 from '../Card1'

function CardsContainer() {
    return (
        <div className="container d-flex ml-100">
            <Card1
                title={'Card 1'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                img={'https://picsum.photos/200/300'}
            />
            <Card1
                title={'Card 2'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                img={'https://picsum.photos/200/301'}
            />
            <Card1
                title={'Card 3'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                img={'https://picsum.photos/200/302'}
            />
            <Card1
                title={'Card 4'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                img={'https://picsum.photos/200/303'}
            />
        </div>

    )
}


export default CardsContainer
