import "./card.css";
import flower from "../assets/flower2.png";

const Card = () => {
  const cardData = [
    {
      titulos: "Card 1",
      description: "Este é o primeiro card.",
      link: "#",
    },
    {
      titulos: "Card 2",
      description: "Este é o segundo card.",
      link: "#",
    },
    {
      titulos: "Card 3",
      description: "Este é o terceiro card.",
      link: "#",
    },
    {
      titulos: "Card 4",
      description: "Este é o quarto card.",
      link: "#",
    },
  ];
  console.log(cardData);

  return (
    <div className="card-container">
      {cardData.map((card, index) => {
        return (
          <div className="card" key={index}>
            <h2>{card.titulos}</h2>
            <p>{card.description}</p>
            <a href={card.link}>Veja mais</a>
            <img src={flower} alt="" />
          </div>
        );
      })}
      
    </div>
  );
};

export default Card;
