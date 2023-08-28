import ItemCard from "../Components/itemCard";
import NavBar from "../Components/navbar";

export const Menu = () => {
  return (
    <div>
      <NavBar />
      <div className="items-container">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};
