import classes from './Header.module.css';
import headerMenuImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerMenuImage} alt='A table of full delicious food!'></img>
        </div>

        </>
    );
};

export default Header;