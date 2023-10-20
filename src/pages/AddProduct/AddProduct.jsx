

const AddProduct = () => {
   const state = {
        selectedOption: 'option1', // Set the default selected option
      };
    const handleAddProduct = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const brand = form.brand.value
        const type = form.type.value 
        const price = form.price.value 
        const shortDesc = form.shortDesc.value 
        const rating = form.rating.value 
        const product = {name,photo,brand,type,price,shortDesc,rating}
        console.log(brand)
         form.reset()
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
    }
    return (
        <div className="flex justify-center">
            <div className="">
                <h2 className="font-bold text-3xl mb-3 text-center">AddProduct</h2>
                <form onSubmit={handleAddProduct} className=" flex flex-col gap-3">
                    <input type="text" name="name" placeholder="Name" className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="brand" placeholder="Brand" className=" input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="type" placeholder="Type" className=" input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="price" placeholder="Price" className=" input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="shortDesc" placeholder="short Desc" className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name="photo" placeholder="Photo" className="w-full input input-bordered input-primary max-w-xs" />
                
                   
                        <input type="submit" value="Add" className="btn btn-primary" />
                    

                </form>
            </div>
        </div>
    );
};

export default AddProduct;