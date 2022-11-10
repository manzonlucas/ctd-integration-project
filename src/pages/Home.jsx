import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/index';
import Recommendations from '../components/Recommendations/Recommendations';
import { useEffect, useState } from "react";

export default function Home() {

  const baseUrl = 'http://localhost:8080/';

  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fetchProducts();
    fetchCities();
    fetchCategories();
  }, [])

  function fetchCategories() {
    fetch(baseUrl + 'categoria')
      .then(response => response.json())
      .then(data => setCategories(data));
  }

  function fetchCities() {
    fetch(baseUrl + 'ciudad')
      .then(response => response.json())
      .then(data => setCities(data));
  }

  return (
    <>
      <Layout>
        <SearchBar cities={cities} />
        <Categories categories={categories} />
        <Recommendations />
      </Layout>
    </>
  )
}