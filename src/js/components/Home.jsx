  import React from "react";
  import Navbar from "./navbar";
  import Jumbotron from "./jumbotron";
  import Card from "./card";
  import Footer from "./footer";

  const Home = () => {
    const cards = [
      {
        title: "Mictecacihuatl",
        description: "es la diosa azteca de la muerte y reina del Mictlan",
        imageUrl: "https://i.pinimg.com/736x/0a/e6/5a/0ae65aa09f7fb00d40ec86438cb49a79.jpg"
      },
      {
        title: "Mictlantecuhtli",
        description: "es el Principal dios azteca de la muerte y rey de Mictlan",
        imageUrl: "https://static.wikia.nocookie.net/neotolteca/images/e/eb/Mictlantecuhtli.png/revision/latest?cb=20230713152324&path-prefix=es"
      },
      {
        title: "Xoloitzcuintle",
        description: "una antigua raza de perro mexicano sin pelo venerada por los aztecas",
        imageUrl: "https://waldomatus.com.mx/wp-content/uploads/2022/02/xolo1.png"
      },
      {
        title: "Xochitonal",
        description: "es una criatura enigmatica de la mitologia mexica azteca",
        imageUrl: "https://pbs.twimg.com/media/EIMZNjBW4AAB_rq.jpg"
      }
    ];

    return (
      <div className="d-flex flex-column min-vh-100 bg-dark">
        <Navbar />
        <div className="container flex-grow-1">
          <Jumbotron />
          <div className="row pb-5">
            {cards.map((card, index) => (
              <div className="col-md-3" key={index}>
                <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Home;