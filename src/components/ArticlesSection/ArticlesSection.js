import { Link } from 'react-router-dom';

import styles from './articlesection.module.css';

const ArticlesSection = ({ articles }) => {
  return (
    <section className={styles['section']}>
      {
        articles.map(({ id, title, image }) => (
          <article 
            className={styles['article']}
            key={id}
          >
            <img 
              src={image} 
              className={styles['article__img']} 
              alt=''
            />
            <h4 className={styles['article__title']}>
              <Link to='/'>
                {title}
              </Link>
            </h4>
          </article>
        ))
      }
    </section>
  );
}

export default ArticlesSection;