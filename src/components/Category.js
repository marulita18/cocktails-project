import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const [cocktailPic, setCocktailPic] = useState([]);
  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=`;
  const category = [
    "Milk / Float / Shake",
    "Ordinary Drink",
    "Cocktail",
    "Other/Unknown",
    "Cocoa",
    "strCategory",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party Drink",
    "Beer",
    "Soft Drink / Soda",
  ];
  const categoryNoSpace = category[0].replace(/ /g, "_");
  const encodedCategory = encodeURIComponent(categoryNoSpace);

  useEffect(() => {
    async function getImages() {
      const res = await axios.get(`${baseUrl}${encodedCategory}`);
      console.log("image", res);
      setCocktailPic(res.data);
    }
    getImages();
  });

  return (
    <div>
      <h1>Category</h1>
      {cocktailPic.drinks &&
        cocktailPic.drinks.map((c, i) => {
          return (
            <div key={i}>
              <img src={c.strDrinkThumb} />
              <p>{c.strDrink} </p>
            </div>
          );
        })}
    </div>
  );
}
