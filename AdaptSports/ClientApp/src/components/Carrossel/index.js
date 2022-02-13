import React from 'react';

export default function Carrossel(props) {
 return (
     <div>
         
         <section id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
             <div className="carousel-inner">
                 <div className="carousel-item active">
                     <img className='img' src={props.img1} className="d-block w-100" alt='img1' />
                 </div>
                 <div className="carousel-item">
                     <img className='img' src={props.img2} className="d-block w-100" alt='img2' />
                 </div>
                 <div className="carousel-item">
                     <img className='img1' src={props.img3} className="d-block w-100" alt='img3' />
                 </div>
             </div>
             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Next</span>
             </button>
         </section>

   </div>
 );
}