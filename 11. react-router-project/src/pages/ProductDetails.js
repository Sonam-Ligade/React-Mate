import {Link, useParams} from 'react-router-dom';

const ProductDetails = () => {
const params = useParams();

    return <><h1>Prodct Details</h1>
    <p>{params.productId}</p>
    <p><Link to='..' relative='path'>Back</Link></p>
     {/* {relative = route to navigate as per route defined. i.e. home page} */}
    </>
};

export default ProductDetails;