import React from 'react'
import './Counter.css';
import CountUp from 'react-countup';




function Counter() {
    return(

    
        <div className='Counter'>
<section>
    <div className="container-lg">
        <div className="row px-md-5 py-5 text-center">
            <div className="col-md-3 col-sm-6 col-6">
                <h2 className='text-black'>No of Cities</h2>
             <h1 className='mx-5 fw-bolder '><CountUp start={0}  end={53}  duration={20} />+</h1>
              
            </div>
            <div className="col-md-3 col-sm-6 col-6">
            <h2 className='text-black'>No of Cities</h2>
                <h1 className='mx-5 fw-bolder'><CountUp  start={0}  end={50}  duration={20}/>+</h1>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
            <h2 className='text-black'>No of Cities</h2>
            <h1 className='mx-5 fw-bolder'><CountUp   end={100}  duration={10} />+</h1>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
            <h2 className='text-black'>No of Cities</h2>
            <h1 className='mx-5 fw-bolder'><CountUp   end={100}  duration={10} />+</h1>
            </div>
        </div>
    </div>
</section>
        </div>

    );
}
export default Counter;