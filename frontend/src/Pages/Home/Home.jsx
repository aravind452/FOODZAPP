import React, { useState } from "react";
import styles from "./Home.module.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/App Download/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");
  console.log("home");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
