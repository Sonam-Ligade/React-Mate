import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Navigate to <Link to="/products">Products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate Programmatically</button>
    </>
  );
};

export default HomePage;
