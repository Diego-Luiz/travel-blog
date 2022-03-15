import { Link } from 'react-router-dom';

import styles from './articlesection.module.css';

const ArticlesSection = ({ articles }) => {
  return (
    <section className={styles['section']}>
      {
        articles.map(({ id, title, destination, image }) => (
          <Link 
            to='/' 
            className={styles['link']}
            key={id}
          >
            <article className={styles['article']}>
              <div className={styles['box-img']}>
                <img 
                  src={image} 
                  className={styles['article__img']} 
                  alt=''
                />
                <span role='presentation'>{destination}</span>
              </div>
              <h4 className={styles['article__title']}>
                {title}
              </h4>
            </article>
          </Link>
        ))
      }
    </section>
  );
}

export default ArticlesSection;