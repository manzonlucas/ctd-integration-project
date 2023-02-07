import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/index';
import Products from '../components/Products';

export default function Home() {

  return (
    <>
      <Layout>
        <SearchBar />
        <Categories />
        <Products />
      </Layout>
    </>
  )
}