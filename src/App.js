import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      //back ticks
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setData(result.data);
      setIsLoading("false");
    };
    //don't forget to call the functuion

    getData();
  }, [data, query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid data={data} isLoading={isLoading} />
    </div>
  );
};

export default App;
