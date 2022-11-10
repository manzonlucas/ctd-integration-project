import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/index';
import Recommendations from '../components/Recommendations/Recommendations';

export default function Home() {

  return (
    <>
      <Layout>
        <SearchBar />
        <Categories />
        <Recommendations />
      </Layout>
    </>
  )
}