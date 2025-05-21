import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { photo, price, name, quantity, _id, } = coffee;

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // Remove deleted coffee from UI
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className="card card-side bg-base-200 shadow-sm p-3">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between items-center ml-3 my-auto w-full">
                    <div className="">
                        <h2 className="card-title">{name}</h2>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="join join-vertical space-y-2">
                        <Link to={`/details/${_id}`}>
                            <button className="btn join-item">Details</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;