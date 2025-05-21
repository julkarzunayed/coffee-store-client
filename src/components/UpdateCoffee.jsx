import React from 'react';
import { data, Link, useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const { name, details, photo, price, quantity, supplier, taste, _id } = useLoaderData();
    // console.log(coffee)
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee);

        //send updated coffee to the back end
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='mt-16'>
            <Link to="/">Back to Home</Link>
            <h2 className="text-center text-5xl ">Update Coffee</h2>
            <div className="">

                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter Coffee name"
                                required
                                defaultValue={name}
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Quantity</label>
                            <input
                                type="text"
                                name='quantity'
                                placeholder="Quantity name"
                                required
                                defaultValue={quantity}
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Supplier</label>
                            <input
                                type="text"
                                name='supplier'
                                placeholder="Supplier Name"
                                required
                                defaultValue={supplier}
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Taste</label>
                            <input
                                type="text"
                                name='taste'
                                placeholder="Coffee Taste"
                                required
                                defaultValue={taste}
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Price</label>
                            <input
                                type="text"
                                name='price'
                                placeholder="Price Taka"
                                required
                                defaultValue={price}
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Details</label>
                            <input
                                type="text"
                                name='details'
                                placeholder="Coffee Details"
                                required
                                defaultValue={details}
                                className="input w-full bg-white" />
                        </fieldset>


                    </div>
                    <fieldset className="fieldset border-base-300 rounded-box p-4">
                        <label className="label font-semibold text-lg">Photo</label>
                        <input
                            type="text"
                            name='photo'
                            defaultValue={photo}
                            placeholder="Photo URL"
                            className="input w-full bg-white" />
                    </fieldset>
                    <input type="submit" value="Add Coffee" className='btn w-full' />
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;