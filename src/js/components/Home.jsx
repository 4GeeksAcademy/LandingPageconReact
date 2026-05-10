import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<div className="container flex-grow-1">
				<Jumbotron />
				<div className="row pb-5">
					<div className="col-md-3">
						<Card 
							title="Mictecacíhuatl" 
							description="es la diosa azteca (mexica) de la muerte y reina del Mictlán, el inframundo, donde gobierna junto a su esposo, Mictlantecuhtli. Conocida como la 'Señora de los Muertos'" 
							imageUrl="https://i.pinimg.com/736x/0a/e6/5a/0ae65aa09f7fb00d40ec86438cb49a79.jpg" 
						/>
					</div>
					<div className="col-md-3">
						<Card 
							title="Mictlantecuhtli " 
							description=" es elPrincipal dios azteca de la muerte y rey ​​de Mictlán, el inframundo más profundo, donde gobernaba junto a su esposa, Mictecacíhuatl. Como 'Señor de la Tierra de los Muertos'" 
							imageUrl="https://static.wikia.nocookie.net/neotolteca/images/e/eb/Mictlantecuhtli.png/revision/latest?cb=20230713152324&path-prefix=es" 
						/>
					</div>
					<div className="col-md-3">
						<Card 
							title="Xoloitzcuintle" 
							description="una antigua raza de perro mexicano sin pelo, venerada por los aztecas como guardián sagrado y guía para las almas que viajan a Mictlán, el inframundo" 
							imageUrl="https://waldomatus.com.mx/wp-content/uploads/2022/02/xolo1.png" 
						/>
					</div>
					<div className="col-md-3">
						<Card 
							title="Xochitonal" 
							description="es una criatura enigmática de la mitología mexica/azteca. Descrito como una iguana o lagarto gigantesco, custodiaba las aguas negras del Apanohuacalhuia" 
							imageUrl="https://pbs.twimg.com/media/EIMZNjBW4AAB_rq.jpg" 
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;