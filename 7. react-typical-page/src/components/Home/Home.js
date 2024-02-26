import classes from './Home.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Home = () => {
const authCtx = useContext(AuthContext);
    return(
        <Card className={classes.home}>
            <h1>Welcome Back!</h1>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;