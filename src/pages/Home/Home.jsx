import { useLoaderData } from "react-router-dom";
import banner from "../../../public/banner.jpg"
import BrandCard from "./BrandCard";
import Meetus from "./MeetUs/Meetus";
import Testimony from "./Testimony/Testimony";

const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
   
        return (
            <div>
               <img src={banner} className="lg:h-[400px] w-full" alt="" />
               <h2 className="text-center text-4xl font-semibold mt-12">Our trusted Brands</h2>
               <div className="grid md:grid-cols-3 gap-5 container mx-auto mt-10">
                {
                    brands?brands.map(brand=><BrandCard key={brand._id} brandData={brand}></BrandCard>):<span className="loading loading-spinner loading-lg"></span>
                }
               </div>
               <Meetus></Meetus>
               <Testimony></Testimony>
            </div>
        );



   
};

export default Home;