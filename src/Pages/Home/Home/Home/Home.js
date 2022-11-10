import React from 'react';
import Banner from '../Banner/Banner';
import LatestWork from '../../LatestWork/LatestWork';
import Packages from '../../Package/Packages';
import useTitle from '../../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <LatestWork></LatestWork>
            <Packages></Packages>
        </div>
    );
};

export default Home;