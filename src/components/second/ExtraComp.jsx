import React, { useState } from 'react';
import './second.css'

const ExtraComp = () => {

    const [count, setCount] = useState(0)

    return (
        <>
<div className='blackBox'>
    <button className='btnCent' onClick={() => setCount(count + 1)}>+<br/>{count}</button>
</div>
</>
    );
}

export default ExtraComp;



