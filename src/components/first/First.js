import React from 'react';
import style from './first.module.css'

export const First = ({text}) => {
    return (
    <ul className={style.paint}>
    <li>{text.name}</li>
    <li>{text.age}</li>
    </ul> 
    )
}