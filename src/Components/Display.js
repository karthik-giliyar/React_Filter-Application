import React from 'react'

function Display(props) {
    return (
        <div className='card'>
            <p>{props.data.title}</p>
            <p>{props.data.date}</p>
            { props.data.notes && <p>{props.data.notes}</p>}
            <p>{props.data.bunting}</p>
        </div>
    )
}

export default Display
