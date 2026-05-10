import React from "react";

const Card = (props) => {
	return (
		<div className="card h-100">
			{/* La imagen, el título y la descripción vienen por props */}
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer text-center">
				{/* El botón no hace nada como pediste */}
				<a href="#" className="btn btn-primary">Ver más</a>
			</div>
		</div>
	);
};

export default Card;