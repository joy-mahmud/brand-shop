
import { FaStar } from 'react-icons/fa';


const BrandDetailsCard = ({ brandDetails }) => {
    const { name, brand, price, type, rating, photo,shortDesc } = brandDetails


    return (
      <div>
          <div className="flex bg-[#DEE1E6] rounded-lg p-5 ">
            <img className="h-[300px] w-[400px] mr-5" src={photo} alt="" />
            <div className="flex justify-between w-full">
                <div className="flex flex-col justify-center w-3/4">
                    <h2 className="text-3xl font-semibold">{brand}</h2>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <h2 className="text-xl font-medium">{type}</h2>
                    <p className="mb-2">{shortDesc}</p>
                  <div className='flex my-2'>
                  {
                    [...Array(5)].map((star,idx)=>{
                        const currentRate = idx+1 
                        return (<div key={idx}><FaStar
                            color={rating>=currentRate?'yellow':'grey'} 
                        
                        ></FaStar></div>)
                    })
                   }
                  </div>
                   
                <button className="btn btn-primary w-1/2 mb-5">Update</button>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="text-3xl font-semibold">Price</p>
                    <h2 className="text-2xl font-medium">${price}</h2>
                    <button className="btn btn-primary">view details</button>
                </div>

            </div>
        </div>
        <div className="text-center mt-2">
        
        </div>
      </div>
    );
};

export default BrandDetailsCard;