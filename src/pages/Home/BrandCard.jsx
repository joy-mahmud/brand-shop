import { Link, Navigate } from "react-router-dom";


const BrandCard = ({brandData}) => {
    const {logo,brand} = brandData
    // const handleBrandProduct = (brand)=>{
    //     <Navigate to={`/brand/${brand}`}></Navigate>
    // }
    return (
        <Link to={`/brand/${brand}`}>
            <div className="bg-[#DEE1E6] rounded-lg flex flex-col justify-center items-centr p-5">
            <img className="h-[300px] rounded-lg w-full" src={logo} alt="" />
            <h2 className="text-4xl font-semibold text-center mt-5">{brand}</h2>
        </div>
        </Link>
    );
};

export default BrandCard;