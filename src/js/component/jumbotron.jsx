import React from "react";

//create your jumbotron component
const Jumbotron = () => {
	return (
<div class="container pt-5">
    <div className="p-5 mb-4 rounded-3 bg-light">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Call To Action!</button>
      </div>
    </div>
</div>


);
};

export default Jumbotron;