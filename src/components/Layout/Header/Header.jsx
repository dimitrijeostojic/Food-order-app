import React, { Fragment } from 'react'
import classes from '../../Layout/Header/Header.module.css'
import meals from '../../../assets/meals.jpg'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of delicius food" />
            </div>
        </Fragment>
    )
}

export default Header