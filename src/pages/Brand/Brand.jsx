import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const Brand = () => {
    const brandProductDeatails = useLoaderData()
   

    return (
        <div className="container mx-auto">
            {
                brandProductDeatails.map((brand,idx)=><BrandDetailsCard key={idx} brandDetails={brand}></BrandDetailsCard>)
            }
            
        </div>
    );
};

export default Brand;