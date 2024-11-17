import React from 'react';
import Banner from './Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';
import Feedback from './Feedback/Feedback';

const Home = () => {

    const services = useLoaderData()

    const {servicesData,feedBackData} = services

    return (
        <div className='w-[1200px] mx-auto'>
            <Banner></Banner>
            <div className='grid gap-6 grid-cols-4'>
                {
                    servicesData.slice(0.4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center py-10'>
                <NavLink to="/alltreatment" className='btn btn-primary'>show more</NavLink>
            </div>
            <Feedback feedBackData={feedBackData}></Feedback>
        </div>
    );
};

export default Home;