import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
    return (
        <div className='mt-32'>
            <p className="text-center">---Sip & Savor---</p>
            <h1 className="text-center text-5xl">Our Popular Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;