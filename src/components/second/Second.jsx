import React, { useState } from 'react';
import './second.css'
import ExtraComp from './ExtraComp';

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



const Second = () => {

    const [addCube, setAddCube] = useState([])
    const rnd = rndNum(0,1000)

    return (
        <main className='mainBase'>
            <div className='mainDiv'>
            <button onClick={()=> setAddCube(add => ([...add, <div key={rnd} className='blackBox'><ExtraComp /></div>]))}>ADD</button>
            </div>
            <div>
            {/* <button className='btnCent' onClick={()=>setCount(count + 1)}>+<br/>{count}</button> */}
            {addCube}
            </div>
        </main>
    );
}

export default Second;
