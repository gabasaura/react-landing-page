import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar";
import Album from "./album";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
		< NavBar/>
		<main style={{paddingTop: "4.5rem"}}>
		< Jumbotron/>
		< Album/>
		</main>
		< Footer/>
		</>
	);
};

export default Home;
