import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import BannerCard from "./Components/BannerCard";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Header />
      <BannerCard
        titulo="Meet de Flowers"
        subTitulo=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Banner />
      <Card />
      <Form />
    </>
  );
}

export default App;
