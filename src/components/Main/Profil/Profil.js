import React from 'react';
import classes from './Profil.module.css';
import Post from './Post/Post.js';
import classes1 from './Post/Post.module.css';
import Masonry from 'react-masonry-component';

const Profil = () => {
  return (
    <div className={classes.profil}>
      <div className={classes.preview}>
        <div className={classes.imgWrapper}>
          <img src="https://static10.tgstat.ru/channels/_0/85/8559ee91c52516797698f38d60c9c9cd.jpg"
               alt="logo"
               className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <h1 className={classes.info__title}>Denis Shevchuk</h1>
          <ul className={classes.data}>
            <li className={classes.beardth}>День рождения: <span className={classes.beardthData}>16.11.2003</span></li>
            <li className={classes.city}>Город: <span className={classes.cityData}>Киев</span></li>
            <li className={classes.education}>Обучение: <span className={classes.educationData}>Студент</span></li>
          </ul>
        </div>
      </div>

      <div className={classes.myPosts}>
        <h3 className={classes.myPosts__title}>Мои посты</h3>
        {/*<div className={classes.postContent}*/}
        {/*     // data-masonry={`{ "itemSelector": ".${classes1.post}", "columnWidth": 350, "gutter": 30 }`}*/}
        {/*>*/}
        <Masonry
          className={classes.postContent} // default ''
          elementType={'ul'} // default 'div'
          options={
            {
              gutter: 30
            }
          }
        >
          <Post />
          <Post hideImg="hidden"/>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        {/*</div>*/}
        </Masonry>
      </div>

      {/*<script>*/}
      {/*  var elem = document.querySelector(`.${classes.postContent}`);*/}
      {/*  var msnry = new Masonry( elem, {*/}
      {/*    itemSelector: `.${classes1.post}`,*/}
      {/*    columnWidth: 200*/}
      {/*  });*/}
      {/*</script>*/}
    </div>
  );
}

export default Profil;
