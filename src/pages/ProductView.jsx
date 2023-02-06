import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';
import Layout from "../components/Layout";
import CarouselMaster from "../components/Product/CarouselMaster";
import ImgGrid from "../components/Product/ImgGrid";
import Features from "../components/Product/Features";
import Description from "../components/Product/Description";
import ProductSubheader from "../components/Product/ProductSubheader";
import ProductHeader from "../components/Product/ProductHeader";
import AvailableDates from "../components/Product/AvailableDates";
import { baseUrl } from "../services/api";
import Policies from "../components/Product/Policies";

export default function ProductView() {

  const { isLoading, setIsLoading } = useContext(UserContext);
  const [product, setProduct] = useState('');
  const [carouselIsOpen, setcarouselIsOpen] = useState(false);
  const { id } = useParams();

  async function getProductById(id) {
    const response = await axios.get(baseUrl + 'producto/' + id);
    setProduct(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    setProduct(getProductById(id));
  }, []);

  function handleClickCarouselState() {
    setcarouselIsOpen(!carouselIsOpen);
  }

  if (isLoading) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    )
  }

  return (
    <Layout>

      <ProductHeader product={product} />

      <ProductSubheader product={product} />

      <CarouselMaster handleClickCarouselState={handleClickCarouselState} carouselIsOpen={carouselIsOpen} product={product} />

      <ImgGrid handleClickCarouselState={handleClickCarouselState} product={product} />

      <Description product={product} />

      <Features product={product} />

      <Policies product={product} />

      <AvailableDates product={product} />

    </Layout >
  )
}