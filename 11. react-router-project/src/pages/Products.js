import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];
const Products = () => {
  return (
    <>
      <h1>My Products Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
        {/* <li to="/products/product-1">
          <Link>Product-1</Link>
        </li> */}
      </ul>
    </>
  );
};

export default Products;
