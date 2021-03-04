import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 1);
	five = Math.floor(counter / 10);
	four = Math.floor(counter / 100);
	three = Math.floor(counter / 1000);
	two = Math.floor(counter / 10000);
	one = Math.floor(counter / 100000);
	counter++;
}, 1000);

//two, three, four, five, six;

export function Counter(props) {
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-2">
				<div className="card">
					<div id="title">
						<i class="far fa-clock"></i>
					</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{one}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{two}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{three}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{four}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{five}</div>
				</div>
			</div>
			<div className="col-1">
				<div className="card">
					<div id="title">{props.Dseis}</div>
				</div>
			</div>
			<div className="col-2"></div>
		</div>
	);
}

Counter.propTypes = {
	Duno: PropTypes.number,
	Ddos: PropTypes.number,
	Dtres: PropTypes.number,
	Dcuatro: PropTypes.number,
	Dcinco: PropTypes.number,
	Dseis: PropTypes.number
};

ReactDOM.render(<Counter Dseis={six} />, document.querySelector("#app"));
