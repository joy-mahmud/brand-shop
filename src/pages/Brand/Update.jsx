
import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const id = useParams()
    const productdata = useLoaderData()
    const { brand, name, photo, rating, price, type } = productdata

    console.log(productdata)

    const handleUpdateProduct = e => {

        // e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const photo = form.photo.value
        const rating = form.rating.value
        const product = { name, brand, type, price, photo, rating }
        console.log(brand)
        form.reset()
        fetch(`https://y-8ohjklzks-joy-mahmuds-projects-22f2ffa2.vercel.app/products/${id.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

    }

    return (
        <div className="flex justify-center">
            <div className="">
                <h2 className="font-bold text-3xl mb-3 text-center">Update this Product</h2>
                <form onSubmit={handleUpdateProduct} className=" ">
                    <div className="flex gap-5">
                        <div className=" flex flex-col gap-3">
                            <div>
                                <label>name:</label><input type="text" name="name" defaultValue={name} className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <label>Brand:</label><input type="text" name="brand" defaultValue={brand} className=" input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <label>Type:</label><input type="text" name="type" placeholder="Type" defaultValue={type} className=" input input-bordered input-primary w-full max-w-xs" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <div>
                                <label>price:</label><input type="text" name="price" defaultValue={price} className=" input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <label>rating:</label> <input type="text" name="rating" defaultValue={rating} className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div>
                                <label>photo:</label> <input type="text" name="photo" placeholder="photo" defaultValue={photo} className=" mr-5 input input-bordered input-primary w-full max-w-xs" />
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Update" className="btn btn-primary mt-3 w-full" />

                </form>
            </div>
        </div>
    );
};

export default Update;