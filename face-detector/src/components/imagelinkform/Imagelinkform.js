import React from 'react';

const Imagelinkform=()=>{
    return (
        <div >
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures.Try it!'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex'></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
            </div>
        </div>
    );
}
export default Imagelinkform;