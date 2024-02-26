import { Link, NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
                    {/* <Link to='/'>Home</Link> */}
                </li>
                <li>
                    <NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink>
                    {/* <Link to='/products'>Products</Link> */}
                </li>
            </ul>
        </nav>
    </header>
};

export default MainNavigation;