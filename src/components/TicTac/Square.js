import React from 'react'

import './Square.css'
import { clickSquare } from './Logic'

export default function Square(props) {
    return (
        <div className='square' data-num={props.num} onClick={clickSquare}></div>
    )
}


