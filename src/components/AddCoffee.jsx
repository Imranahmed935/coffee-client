import React from 'react';

const AddCoffee = () => {
    const handleAddCoffeeForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const details  = form.details.value;
        const photo = form.photo.value;
        const test = form.test.value;
        const coffeeComponent = {name, chef, supplier, details, photo, test}
        console.log(coffeeComponent)
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(coffeeComponent)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('added successfully!!')
            }
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-purple-500 text-center'>Add your coffee</h1>
            <form onSubmit={handleAddCoffeeForm} className='flex justify-center '>
               <div className='bg-gray-200 p-10 space-y-4'>
              
                    <input className='px-2 outline-none border rounded border-black' type="text" name='name' placeholder='Coffee name' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name='chef' placeholder='chef' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name='supplier' placeholder='supplier' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name='details' placeholder='details' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name='photo' placeholder='Photo Url' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name='details' placeholder='details' />
                    <br />
                    <input className='px-2 outline-none border rounded border-black' type="text" name="test" placeholder='test' />  
                    <br />
                    <input className='btn btn-neutral w-full' type="submit" value='add Coffee' />
               </div>
                
            </form>
        </div>
    );
};

export default AddCoffee;