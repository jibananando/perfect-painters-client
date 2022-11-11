import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LatestWork from '../../LatestWork/LatestWork';
import Packages from '../../Package/Packages';
import useTitle from '../../../../hooks/useTitle';
import LimitService from './LimitService/LimitService';
import ServiceCard from '../../Services/ServiceCard';

const Home = () => {
    useTitle('Home');
    const [services, setServices] = useState([]);
    useEffect(() => {
        // 'https://perfect-painters-server.vercel.app/limitServices'
        fetch('https://perfect-painters-server.vercel.app/limitServices?size=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div><h1 className="text-4xl font-bold text-center m-4">Service</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            {/* <LimitService></LimitService> */}
            <LatestWork></LatestWork>
            <Packages></Packages>
        </div>
    );
};

export default Home;