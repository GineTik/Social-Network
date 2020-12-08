import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  const Link = (data) => {
    return (
      <NavLink to={data.to} activeClassName={classes.nowPage} className={`${classes.link}`}>
        {data.content}
      </NavLink>
    );
  }
  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>
        <div className={classes.logo}>
          NetSo
        </div>
        <nav className={classes.navbar}>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link
                content='Главная'
                to='/main'
              />
            </li>
            <li className={classes.item}>
              <Link
                content='Переписка'
                to='/messages'
              />
            </li>
            <li className={classes.item}>
              <Link
                content='Музыка'
                to='/music'
              />
            </li>
          </ul>
        </nav>
        <button className={`${classes.night_theme}`}>
          <img src="img/night-button.svg" alt="night theme"/>
        </button>
        <Link
          content='Профиль'
          to='/profil'
        />
      </div>
    </header>
  );
}

export default Header;