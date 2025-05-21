import React from 'react';

const AddCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)

        //send data to data base 
        fetch('https://coffee-store-server-two-bay.vercel.app/coffees',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data Send to DB', data);
                if(data.insertedId){
                    alert('Coffee added successfully')
                }
            })

    }
    return (
        <div className='px-24 py-16 text-center space-y-8'>
            <h2 className="text-5xl text-center">Add New Coffee</h2>
            <p className="px-16">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div className="">

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter Coffee name"
                                required
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Quantity</label>
                            <input
                                type="text"
                                name='quantity'
                                placeholder="Quantity name"
                                required
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Supplier</label>
                            <input
                                type="text"
                                name='supplier'
                                placeholder="Supplier Name"
                                required
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Taste</label>
                            <input
                                type="text"
                                name='taste'
                                placeholder="Coffee Taste"
                                required
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Price</label>
                            <input
                                type="text"
                                name='price'
                                placeholder="Price Taka"
                                required
                                className="input w-full bg-white" />
                        </fieldset>
                        <fieldset className="fieldset border-base-300 rounded-box p-4">
                            <label className="label font-semibold text-lg">Details</label>
                            <input
                                type="text"
                                name='details'
                                placeholder="Coffee Details"
                                required
                                className="input w-full bg-white" />
                        </fieldset>


                    </div>
                    <fieldset className="fieldset border-base-300 rounded-box p-4">
                        <label className="label font-semibold text-lg">Photo</label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Photo URL"
                            className="input w-full bg-white" />
                    </fieldset>
                    <input type="submit" value="Add Coffee" className='btn w-full' />
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;