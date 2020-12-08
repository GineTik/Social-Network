import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  const st = {
    display: 'none'
  };
  return(
    <li className={classes.post}>
      <div className={classes.imgWrapper} style={props.hideImg == "hidden" ? (st) : ({})}>
        <img src="img/foto-for-post.png"
             alt="logo"
             className={classes.img}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <a className={classes.title}>Посмотрите на моего котика</a>
          <ul className={classes.data}>
            <li className={classes.nameAuthor}><a href="#">Denis Shevchuk</a></li>
            <li className={classes.date}>
              <span>08.11.2020</span></li>
          </ul>
        </div>
        <div className={classes.text}>
          <p>Скажыте что это круто, правда, правда, правда, правда, правда, правда, правда, правда,
            правда, правда!</p>
        </div>
        <div className={classes.footer}>
          <div className={classes.like}>
					  <img src="img/like.svg" alt="like"/>
						<span className={classes.countLike}>0</span>
          </div>
					<a href="#" className={classes.ecross}>перейти</a>
					<a href="#" className={classes.share}>поделится</a>
					<div className={classes.elected}>
						<img src="img/favorite.svg" alt="favorite"/>
					</div>
        </div>
      </div>
    </li>
  );
}

export default Post;
