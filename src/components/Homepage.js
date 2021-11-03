import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function getCocktails() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log("data", res.data);
      setCocktails(res.data.drinks);
    }
    getCocktails();
  }, []);

  return (
    <div>
      <h1>Cocktails</h1>
      <ul>
        {cocktails &&
          cocktails.map((c, i) => {
            return (
              <div key={i}>
                <Link to={`/category/${c.strCategory}`}> {c.strCategory} </Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
