import React from 'react'
import './Counter.css';



function Counter() {
    return(
        <div className='Counter'>
<section>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <h3>No of Cities</h3>
                <h1 className='mx-5'>50+</h1>
              
            </div>
            <div className="col-md-3">
            <h2>No of Cities</h2>
                <h3 className='mx-5'>50+</h3>
            </div>
            <div className="col-md-3">
            <h3>No of Cities</h3>
            <h3 className='mx-5'>50+</h3>
            </div>
            <div className="col-md-3">
            <h3>No of Cities</h3>
            <h3 className='mx-5'>50+</h3>
            </div>
        </div>
    </div>
</section>
        </div>

    );
}
export default Counter;