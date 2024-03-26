import React from "react";
import Card from "./card.jsx";

//create otro component
function Album() {
    return (
        <>
        <div className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
        </>
    );
}

export default Album;