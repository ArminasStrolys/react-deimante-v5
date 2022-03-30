import React, { useState } from 'react';
import './second.css'


const Second = () => {

    const [addCube, setAddCube] = useState([])
    const [count, setCount] = useState('')

    return (
        <main className='mainBase'>
            <div className='mainDiv'>
            <button onClick={()=> setAddCube(add => ([...add, <div key={add} className='blackBox'><button className='btnCent' onClick={()=>setCount(1)}>+<br/>{count}</button></div>]))}>ADD</button>
            </div>
            <div>
            <button className='btnCent' onClick={()=>setCount(count + 1)}>+<br/>{count}</button>
            {addCube}
            {console.log(addCube)}
            </div>
        </main>
    );
}

export default Second;
