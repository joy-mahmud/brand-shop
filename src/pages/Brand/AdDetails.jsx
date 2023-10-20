

const AdDetails = () => {
    const HnadleAdddetails = (e) => {
        e.preventDefault()
        const form = e.target
        const model = form.model.value
        const year = form.year.value
        const bodystyle = form.bodystyle.value
        const color = form.color.value
        const engine = form.engine.value
        const horsepower = form.horsepower.value
        const torque = form.torque.value
        const model_id=form.modelId.value 

        const details = {model,year,bodystyle,color,engine,horsepower,torque}

        fetch('http://localhost:5000/details',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(details)
        })
    }
    return (
        <div>
            <form onSubmit={HnadleAdddetails}>
                <input type="text" name="model" placeholder="model" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="year" placeholder="year" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="bodystyle" placeholder="bodystyle" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="color" placeholder="color" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="engine" placeholder="engine" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="horsepower" placeholder="horsepower" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="torque" placeholder="torque" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name="modelId" placeholder="model id" className=" mr-5 input input-bordered input-primary w-full max-w-xs" /><br />
                <button type='submit' className="btn mt-3">Add</button>
            </form>
        </div>
    );
};

export default AdDetails;