import Layout from "../components/Layout";
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Recommendations from '../components/Recommendations';

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