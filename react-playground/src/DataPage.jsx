import logo from "./logo.svg";
import React, { useState } from "react";
import useFetch from "./services/useFetch";
import renderTile from "./components/tile";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
const logoStyle = {
  height: "50px",
  width: "50px",
};

const url = "https://jsonplaceholder.typicode.com/posts";

function DataPage() {
  const [refresh,setRefresh]=useState(false);
  const{data,loading,error,}=useFetch(url,refresh);

  function handleClick(){
    setRefresh(!refresh);
  }
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <div className="App">
        <Link to="/">
      <header className="App-heade1">
        <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
      </header>
        </Link>
      <section>
        {/* <input type="button" value="Refresh" onClick={fetchData} /> */}
        <input type="button" value="Refresh" onClick={handleClick}/>
      </section>
      <section>
        <Link to="/Products">
          <input type="button" value="Laptops" />
        </Link>
      </section>
      <section id="products">{data.map(renderTile)}</section>
    </div>
  );
}

export default DataPage;
