import { Link } from 'react-router-dom';

import styles from './articlewithdate.module.css';

const ArticleWithDate = ({ imageSrc, date, title, highlight=false }) => {
  return (
    <>
      {highlight ? 
        <article className={styles['article']}>
          <Link to='/'>
            <img 
              alt=''
              src={imageSrc}
              className={styles['article__img']}
            />
            <p className={styles['article__date']}>{date}</p>
            <h4 className={styles['article__title']}>{title}</h4>
          </Link>
        </article>
        : 
        <article className={[`${styles['article']}`, `${styles['--no-hightlight']}`].join(' ')}>
          <Link to='/'>
            <img 
              alt=''
              src={imageSrc}
              className={styles['article__img']}
            />
            <div className={styles['content-wrapper']}>
              <h4 className={styles['article__title']}>{title}</h4>
              <p className={styles['article__date']}>{date}</p>
            </div>
          </Link>
        </article>
      }
    </>
  )
}

export default ArticleWithDate;