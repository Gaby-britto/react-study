import "./banner.css";
import logo from "../assets/download.jpg";
import flower from "../assets/flower.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={logo} alt="" className="image" />
      <div className="banner-text">
        <h1>Hawai Flowers</h1>
        <hr />
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ea
          dignissimos nesciunt porro quasi totam, ut error distinctio minima
          deleniti. Iure inventore recusandae neque nihil beatae architecto
          reprehenderit eligendi illum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, est.
          Est, dicta? Cumque soluta atque ipsum ducimus aspernatur sequi libero
          laboriosam adipisci quod amet in ad, quasi earum recusandae
          asperiores.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          cumque similique adipisci in nostrum dolores quae dignissimos non
          debitis iure aliquam repellat earum dolorem molestias, temporibus
          perspiciatis officia ipsam voluptas!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          voluptatum nostrum unde quod, aut perspiciatis
        </h3>
      </div>
      <img src={flower} alt="" />
    </div>
  );
};

export default Banner;
