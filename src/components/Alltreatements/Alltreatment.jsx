import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Alltreatment = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className='grid gap-6 grid-cols-4 w-[1200px] mx-auto'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Alltreatment;