import React from "react";
import { useState, useEffect } from "react";

export default function CardsPokemon() {
  // const [likes, setLikes] = useEffect([])
  // const [retweets, setRetweets] = useEffect(null)
  // const [share, setShare] = useEffect(null)
  // const [retweets, setRetweets] = useEffect(null)

  // didMount        ->      useEffect(()=>{},[])
  // didUpdate       ->      useEffect(()=>{},[likes])
  // willUnmount     ->      useEffect((){return},[likes])

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      console.log(json);
      console.log(json.results);
      setPokemons(json.results);
    };

    const url = "https://pokeapi.co/api/v2/pokemon/";
    getPokemons(url);
  }, []); // este useEffect al estar con llaves vacías, es un didMount

  return (
    <div>
      <h3>Los pokemons</h3>
    </div>
  );
}
