import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetailsContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const targetImage = useRef(null);

  return <div>product details page</div>;
};

export default ProductsDetailsContainer;
