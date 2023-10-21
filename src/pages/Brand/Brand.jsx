import { Link, useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";


const Brand = () => {
    const brandProductDeatails = useLoaderData()



    return (
        <div className="container mx-auto">
            {
                brandProductDeatails.length > 0 ? <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={brandProductDeatails[3].photo} className="w-full lg:h-[650px]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={brandProductDeatails[2].photo} className="w-full lg:h-[650px]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={brandProductDeatails[1].photo} className="w-full lg:h-[650px]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>

                    {
                        brandProductDeatails.map((brand, idx) => <BrandDetailsCard key={idx} brandDetails={brand}></BrandDetailsCard>)
                    }
                </div> : <>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold">There is No product available for this brand right now!!</h2>
                        <Link to={'/'}> <button className="btn btn-primary mt-12">visit our other brands</button></Link>
                    </div>
                </>
            }

        </div>
    );
};

export default Brand;