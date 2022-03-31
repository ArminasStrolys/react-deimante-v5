import React, { useState } from 'react';
import './second.css'

const ExtraComp = () => {
    const [count, setCount] = useState(0)
    return (
        <>
<button className='btnCent' onClick={()=>setCount(count + 1)}>+</button>
<span className='extra'>{count}</span>
</>
    );
}

export default ExtraComp;



