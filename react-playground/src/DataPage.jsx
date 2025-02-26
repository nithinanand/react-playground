import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import renderTile from "./components/tile";
import { getData } from "./services/dataService";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
const logoStyle = {
  height: "50px",
  width: "50px",
};



const url = "https://jsonplaceholder.typicode.com/posts";

function DataPage() {
  const [data, SetData] = useState([]);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    getData(url)
      .then((response) => SetData(response))
      .catch((e) => SetError(e))
      .finally(() => SetLoading(false));
  }

  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <div className="App">
        <Link to={"/"}>
      <header className="App-heade1">
        <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
      </header>
        </Link>
      <section>
        <input type="button" value="Refresh" onClick={fetchData} />
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
