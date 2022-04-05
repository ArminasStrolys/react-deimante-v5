import React, { useState } from 'react';
import './first.css'
import Trees from './Trees';

const First = () => {

    const [trees, setTrees] = useState({
        tree1: '',
        tree2: '',
        tree3: ''
    })

    return (
        <main>
           <div className='one'>
           <button className='tree1' onClick={() => setTrees((val)=>({...val, tree1:'Ąžuolas'}))}>?WHAT TREE?</button>
            {trees.tree1.length > 0 && <Trees val={trees.tree1}/>}
            {console.log(trees)}
           </div>
           <div className='two'>
           <button className='tree1' onClick={() => setTrees((val)=>({...val, tree2:'Beržas'}))}>?WHAT TREE?</button>
           {trees.tree2.length > 0 && <Trees val={trees.tree2}/>}
           </div>
           <div className='three'>
           <button className='tree1' onClick={() => setTrees((val)=>({...val, tree3:'Uosis'}))}>?WHAT TREE?</button>
           {trees.tree3.length > 0 && <Trees val={trees.tree3}/>}
           </div>
        </main>
    );
}

export default First;
