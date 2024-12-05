import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const  coffees =  useLoaderData()
    const { _id,name, chef, supplier, details, photo, test} = coffees
    const handleUpdateCoffeeForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const test = form.test.value;

        const coffeeUpdates = { name, chef, supplier, details, photo, test };
        console.log(coffeeUpdates)

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffeeUpdates)
        })
            .then(res => res.json())
            .then(data => {
                if (data.updatedCount > 0) {
                    alert("Coffee updated successfully!");
                }
                console.log(data);
            })
           
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-purple-500 text-center mb-6">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffeeForm} className="flex justify-center">
                <div className="bg-gray-200 p-10 space-y-4 rounded shadow-lg">
                    <input
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        type="text"
                        name="name"
                        defaultValue={name}
                    
                        placeholder="Coffee Name"
                    />
                    <input
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        type="text"
                        name="chef"
                        defaultValue={chef}
              
                        placeholder="Chef"
                    />
                    <input
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        type="text"
                        name="supplier"
                        defaultValue={supplier}
                        placeholder="Supplier"
                    />
                    <textarea
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        name="details"
                        defaultValue={details}
                        placeholder="Details"
                    ></textarea>
                    <input
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        placeholder="Photo URL"
                    />
                    <input
                        className="px-2 py-1 outline-none border rounded border-black w-full"
                        type="text"
                        name="test"
                        defaultValue={test}
                        placeholder="Test"
                    />
                    <input
                        className="btn btn-neutral w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-700 cursor-pointer"
                        type="submit"
                        value="Update Coffee"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;
