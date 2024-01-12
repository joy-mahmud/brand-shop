

const AddProduct = () => {

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
        const product = { name, photo, brand, type, price, shortDesc, rating }
        console.log(brand)
        form.reset()
        fetch('https://y-seven-rho-25.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div className="flex justify-center">
            <div className="">
                <h2 className="font-bold text-3xl mb-3 text-center">AddProduct</h2>
                <form onSubmit={handleAddProduct} className="">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-3">
                            <label>Name:</label><input type="text" name="name" placeholder="Name" className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                            <label>Brand:</label><input type="text" name="brand" placeholder="Brand" className=" input input-bordered input-primary w-full max-w-xs" />
                            <label>Type:</label><input type="text" name="type" placeholder="Type" className=" input input-bordered input-primary w-full max-w-xs" />
                            <label>Price:</label> <input type="text" name="price" placeholder="Price" className=" input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Short description:</label> <input type="text" name="shortDesc" placeholder="short Desc" className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                            <label>rating:</label><input type="text" name="rating" placeholder="Rating" className="input input-bordered input-primary w-full max-w-xs" />
                            <label>Photo:</label> <input type="text" name="photo" placeholder="Photo" className="w-full input input-bordered input-primary max-w-xs" />
                        </div>
                    </div>


                    <input type="submit" value="Add" className="btn btn-primary w-full mt-3" />


                </form>
            </div>
        </div>
    );
};

export default AddProduct;