import "./product.scss";
import { singleProduct } from "../../data";
import Single from "../../components/single/Single";

const Product = () => {
  // Fetch data and return to single component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
