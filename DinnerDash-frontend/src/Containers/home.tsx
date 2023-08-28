import NavBar from "../Components/navbar";
import HomeImg from "../Images/Home.png";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home-img-container">
        <img className="home-img" src={HomeImg}></img>
      </div>

      {/* <div className="items-container">
        <ItemCard />
      </div> */}
    </div>
  );
};
