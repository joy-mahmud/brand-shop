import Swal from "sweetalert2";

const CartItem = ({ cartData,cart,setCart }) => {
    const { photo, model, _id } = cartData
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://y-8ohjklzks-joy-mahmuds-projects-22f2ffa2.vercel.app/deleteProduct/${_id}`, {
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
        <div className="flex justify-between">
            <div className="flex items-center p-3 border-2 my-2 rounded-lg">
                <img src={photo} className="h-[80px]" alt="" />
                <div className="flex items-center gap-5">
                    <h2 className="text-3xl font-semibold">{model}</h2>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary">X</button></div>
            </div>

        </div>
    );
};

export default CartItem;