import React from 'react';
import Service from './Service';
import serv1 from '../../assets/images/fluoride.png';
import serv2 from '../../assets/images/cavity.png';
import serv3 from '../../assets/images/whitening.png';

const Services = () => {
    const services =[
        {_id:1,name:'Fluoride Treatment',img:serv1},
        {_id:2,name:'Cavity Filling',img:serv2},
        {_id:3,name:'Teeth Whitening',img:serv3}
    ]
    return (
        <div class="px-12">
            <div class="text-center">
            <h1 class="text-primary text-xl uppercase font-bold">Our Services</h1>
            <h1 class="text-4xl">Services We Provide</h1>
            </div>
            <div class="grid grid-cols-3 gap-5 py-10">
               {services.map(service=><Service key={service._id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;