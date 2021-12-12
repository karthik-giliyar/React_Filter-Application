import React from 'react'
import Display from './Display'

function DisplayContainer(props) {

    return (
        <div className='container'>
            <div className='card-box card-one'>
                <h4>england-and-wales</h4>
                {props.data["england-and-wales"].events.map((data, index)=>{
                    return <Display data={data} key={index} />
                })}
            </div>
            <div className='card-box card-two'>
                 <h4>scotland</h4>
                {props.data["scotland"].events.map((data, index)=>{
                    return <Display data={data} key={index} />
                })}
            </div>
            <div className='card-box card-three'>
                <h4>northern-ireland</h4>
                {props.data["northern-ireland"].events.map((data, index)=>{
                   return <Display data={data} key={index} />
                })}
            </div>
        </div>
    )
}

export default DisplayContainer
