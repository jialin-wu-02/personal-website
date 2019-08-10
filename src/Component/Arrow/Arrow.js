import React from 'react';

import './Arrow.css'

const Arrow = (props) => {
    let ArrowClasses = ['Arrow'];
    if (props.show) {
        ArrowClasses.push("show")
    }
    return (
    <div className={ArrowClasses.join(' ')}>
        ⬇️
    </div>
    )
}

export default Arrow;
