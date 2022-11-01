import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function ProductView() {

  const params = useParams();
  const [product, setProduct] = useState('');

  // GET ITEMS FROM DB ENDPOINT
  // useEffect(() => {
  //   const product = getItemsById(params.id);
  //   setProduct(product);
  // }, [])

  return (
    <>
      <Layout>
        <h1>Product view</h1>
      </Layout >
    </>
  )
}