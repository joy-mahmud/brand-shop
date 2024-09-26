
import { useLoaderData } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
    const myProducts = useLoaderData()
    const [cart, setCart] = useState(myProducts)
    console.log('cart', cart)

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You woant to delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deleteProduct/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Item has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(item => item._id != _id)
                            setCart(remaining)

                        }

                    })
            }
        })
    }
    return (
        <div className="text-center">
            <h2 className="my-5 text-4xl font-semibold">My cart</h2>
            <div className="overflow-x-auto">
                <table className="w-full z-0">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Horsepower</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) => <tr className="" key={idx}>
                                <th>{idx + 1}</th>
                                <td className="flex justify-center"><img className="w-[60px] h-[60px] rounded-lg" src={item.photo}></img></td>
                                <td>{item.model}</td>
                                <td>{item.price}</td>
                                <td>{item.horsepower}</td>
                                <td><button onClick={() => handleDelete(item._id)} className=""><RiDeleteBin5Fill className="text-2xl" /></button></td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
            <div className="">
                {/* {
                    cart.map((item, idx) => <CartItem key={idx} cartData={item} cart={cart} setCart={setCart}></CartItem>)
                } */}
            </div>
        </div>
    );
};

export default MyCart;