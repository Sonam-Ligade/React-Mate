import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

//another way to use router
// const routDefinitions = createRoutesFromElements(
// <Route>
//   <Route path='/' element={<HomePage/>}></Route>
//   <Route path='/products' element={<Products/>}/>
// </Route>);
// const router = createBrowserRouter(routDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage /> }, 
      // alternative instead of index, we can use path: ""
      { path: "products", element: <Products />},
      {path: 'products/:productId', element: <ProductDetails/>}
    ],
    
  },
  
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
