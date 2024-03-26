import React from "react";

//create your first component
const Card = () => {
	return (
<div className="col">
                <div className="card shadow-sm text-center">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#cccaca"/><text x="50%" y="50%" fill="#ffffff" text-anchor="middle" alignment-baseline="middle">500 x 325</text></svg>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                  <div className="card-footer">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary">Find Out More!</button>
                    </div>
                  </div>
                </div>
              </div>

        );
};

export default Card;