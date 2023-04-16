import React from 'react';
import style from './second.module.css'

export const Second = ({text}) => {
    return (
    <ul className={style.paint}>
    <li>{text.name}</li>
    <li>{text.age}</li>
    </ul> 
    )
}