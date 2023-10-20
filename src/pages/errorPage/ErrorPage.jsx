import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-32">
            <h2 className="text-5xl font-bold mb-5">404!! page not found</h2>
            <button className="btn btn-primary"><Link to={'/'}>Back</Link></button>
        </div>
    );
};

export default ErrorPage;