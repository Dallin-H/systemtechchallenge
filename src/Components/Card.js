import React from 'react'

const Card = (props) => {

    let moveLeft = () => {
        return props.moveCard(props.cardID, 'left')
    }

    let moveRight = () => {
        return props.moveCard(props.cardID, 'right')
    }

    return (
        <div className='Card'>
            <button onClick={moveLeft}>{`<`}</button>
            <p>{props.text}</p>
            <button onClick={moveRight}>{`>`}</button>
        </div>
    )
}

export default Card