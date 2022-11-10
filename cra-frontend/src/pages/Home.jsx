import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/index';
import Recommendations from '../components/Recommendations/Recommendations';
import { useEffect, useState } from "react";

export default function Home() {

  const baseUrl = 'http://localhost:8080/';

  const [cities, setCities] = useState([]);

  useEffect(() => {
    // fetchProducts();
    fetchCities();
    console.log(cities);
  }, [])

  // function fetchProducts() {
  // fetch(baseUrl + 'producto/findall')
  // .then(response => response.json())
  // .then(data => );
  // }

  function fetchCities() {
    fetch(baseUrl + 'ciudad')
      .then(response => response.json())
      .then(data => setCities(data));
  }

  return (
    <>
      <Layout>
        <SearchBar cities={cities} />
        <Categories />
        <Recommendations />
      </Layout>
    </>
  )
}