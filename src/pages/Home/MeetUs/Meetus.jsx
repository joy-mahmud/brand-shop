import { FiPhoneCall } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
const Meetus = () => {
    return (
        <div className=" ">
            <h2 className="text-4xl font-semibold text-center my-10">Meet Us</h2>
            <div className="bg-[#DEE1E6]">
                <div className="grid md:grid-cols-3 py-10 container mx-auto gap-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/syHCkjg/ameer-basheer-ABuz-WPku1-Ug-unsplash.jpg" className="rounded-full h-[200px] w-[200px] mt-3" alt="CEO" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">CEO</h2>
                            <div>
                                
                                <div className='flex items-center gap-2'><FiPhoneCall></FiPhoneCall> <p>+880123456789</p></div>
                                <div className='flex items-center gap-2'><CiMail></CiMail><p>ceo123@gmail.com</p></div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/k4NZV3k/corey-collins-j-Kv4-6z-XUBw-unsplash.jpg" className="rounded-full h-[200px] w-[200px] mt-3" alt="CEO" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Manager</h2>
                            <div>
                                
                                <div className='flex items-center gap-2'><FiPhoneCall></FiPhoneCall> <p>+880123456789</p></div>
                                <div className='flex items-center gap-2'><CiMail></CiMail><p>manger123@gmail.com</p></div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/BgQ9GNh/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg" className="rounded-full h-[200px] w-[200px] mt-3" alt="CEO" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Assistant manager</h2>
                            <div>
                                
                                <div className='flex items-center gap-2'><FiPhoneCall></FiPhoneCall> <p>+880123456789</p></div>
                                <div className='flex items-center gap-2'><CiMail></CiMail><p>asmanager123@gmail.com</p></div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meetus;