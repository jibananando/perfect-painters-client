import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LatestWork from '../../LatestWork/LatestWork';
import Packages from '../../Package/Packages';
import useTitle from '../../../../hooks/useTitle';
import ServiceCard from '../../Services/ServiceCard';
import ServiceAreas from './ServiceAreas/ServiceAreas';
import Team from './Team/Team';
import Blog from '../Blog/Blog';
import CustomerBenefits from '../CustomerBenefits/CustomerBenefits';
import ContactUs from './ContactUs/ContactUs';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import FrequentlyUsedColors from './FrequentlyUsedColors/FrequentlyUsedColors';
import Testimonials from './Testimonials/Testimonials';


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
            <ServiceAreas></ServiceAreas>
            <Team></Team>
            <CustomerBenefits></CustomerBenefits>
            <Blog></Blog>
            <CustomerReviews></CustomerReviews>
            <FrequentlyUsedColors></FrequentlyUsedColors>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>


        </div>
    );
};

export default Home;