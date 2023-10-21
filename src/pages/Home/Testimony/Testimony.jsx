
import client from '../../../../public/images/DanielShiffer.png'
const Testimony = () => {
    return (
        <div >
            <h2 className="text-center text-5xl font-fold mt-14 mb-5">What Our Client Say About us</h2>
            <div className="bg-[#A8ACAC] py-10">
                <div className='container mx-auto flex  flex-col md:flex-row justify-between items-center'>
                    <div className='w-1/2'><p>"I couldn't be happier with the exceptional service and high-quality automobiles from [Your Automobile Company Name]. From the moment I stepped into their showroom, I knew I was in the right place. Their knowledgeable and friendly staff helped me find the perfect vehicle that matched my needs and preferences.

                        The vehicle I purchased has not only met but exceeded my expectations. It's a true testament to the remarkable engineering and attention to detail that [Your Automobile Company Name] is known for. I receive compliments on it regularly, and it's been a joy to drive.</p>
                        <h2 className='text-3xl font-medium mt-2'>Dnniel Shiffer</h2>
                        <h2 className='text-xl font-medium'>Ceo of the SomethingCorp</h2>
                        </div>
                    <div className=''>
                        <img src={client} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimony;