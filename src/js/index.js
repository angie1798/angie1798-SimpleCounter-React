//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SimpleCounter(props) {
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-2">
				<div className="card">
					<div id="title">
						<i className="far fa-clock"></i>
					</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.duno}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.ddos}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.dtres}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.dcuatro}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.dcinco}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.dseis}</div>
				</div>
			</div>
			<div className="col-2"></div>
		</div>
	);
}

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 1) % 10;
	const five = Math.floor(counter / 10) % 10;
	const four = Math.floor(counter / 100) % 10;
	const three = Math.floor(counter / 1000) % 10;
	const two = Math.floor(counter / 10000) % 10;
	const one = Math.floor(counter / 100000) % 10;
	counter++;

	ReactDOM.render(
		<SimpleCounter
			duno={one}
			ddos={two}
			dtres={three}
			dcuatro={four}
			dcinco={five}
			dseis={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

SimpleCounter.propTypes = {
	duno: PropTypes.number,
	ddos: PropTypes.number,
	dtres: PropTypes.number,
	dcuatro: PropTypes.number,
	dcinco: PropTypes.number,
	dseis: PropTypes.number
};

//render your react application
