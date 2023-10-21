import logof from "../../public/images/facebook 1.png"
import logot from "../../public/images/twitter 1.png"
import logoi from "../../public/images/instagram 1.png"
const Footer = () => {
    return (
        
            <div className="p-8 md:p-10 lg:p-20 bg-[#011627] text-white mt-10">
                <div className="flex flex-col items-center justify-center  gap-5 mt-15">
                    <h2 className="text-4xl font-bold"><span className="text-white">Road</span><span className="text-[#F71735]">Beasts</span></h2>
                    <div className="flex gap-8">
                        <img src={logof} alt="" />
                        <img src={logoi} alt="" />
                        <img src={logot} alt="" />
                    </div>
                    <p className="text-white"> 2023 All rights reserved by RoadBeasts.com</p>
                </div>
            </div>
      
    );
};

export default Footer;