import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Phones from '../../components/Phones/Phones';
import { useLoaderData } from 'react-router-dom';
import useGetPhones from '../../hook/useGetPhones';

const Home = () => {


    // const phones = useLoaderData()

    
    const [phones] = useGetPhones()


    return (
        <div>
            <Banner></Banner>
            <Phones phones ={phones}></Phones>
        </div>
    );
};

export default Home;