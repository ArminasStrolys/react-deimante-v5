import React, { useState } from 'react';
import './first.css'

const First = () => {

    const [field1, setField1] = useState([])
    const [field2, setField2] = useState([])
    const [field3, setField3] = useState([])

    return (
        <main>
           <div className='one'>
           <button className='tree1' onClick={() => setField1((arry)=>([...arry, <div key={arry} className='box'>Ąžuolas</div>]))}>?WHAT TREE?</button>
            {field1}
           </div>
           <div className='two'>
           <button className='tree1' onClick={() => setField2((arry)=>([...arry, <div key={arry} className='box'>Beržas</div>]))}>?WHAT TREE?</button>
            {field2}
           </div>
           <div className='three'>
           <button className='tree1' onClick={() => setField3((arry)=>([...arry, <div key={arry} className='box'>Uosis</div>]))}>?WHAT TREE?</button>
            {field3}
           </div>
        </main>
    );
}

export default First;
