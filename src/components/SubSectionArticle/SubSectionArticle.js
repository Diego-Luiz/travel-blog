import { Link } from 'react-router-dom';

import styles from './subsectionarticle.module.css';

const SubSectionArticle = ({ article, TitleLevel }) => {
  return (
    <Link 
      to=''
      className={styles['link']}
    >
      <article
        className={styles['article']}
      >
        <div className={styles['img-box']}>
          <img 
            src={article.imageSrc}
            alt={''}
            className={styles['article__img']}
          />
        </div>
        <TitleLevel
          className={styles['article__title']}
        >
          {article.title}
        </TitleLevel>
        { article.content && <p className={styles['article__content']}>{article.content}</p>}
      </article>
    </Link>
  );
}

export default SubSectionArticle;