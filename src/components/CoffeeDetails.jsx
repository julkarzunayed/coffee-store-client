import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    console.log(coffeeData)
    return (
        <div className='mt-16'>
            <Link to="/">Back to Home</Link>
            <h1 className="text-center text-5xl">Coffee Details</h1>
        </div>
    );
};

export default CoffeeDetails;