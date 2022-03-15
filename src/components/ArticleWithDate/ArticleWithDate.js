import { Link } from 'react-router-dom';

import styles from './articlewithdate.module.css';

const ArticleWithDate = ({ imageSrc, date, title, highlight=false }) => {
  return (
    <>
      {highlight ?  
        <Link to='/' className={styles['link']}>
          <article className={styles['article']}>
            <div className={styles['img-box']}>
              <img 
                alt=''
                src={imageSrc}
                className={styles['article__img']}
              />
            </div>
            <p className={styles['article__date']}>{date}</p>
            <h4 className={styles['article__title']}>{title}</h4>
          </article>
        </Link>
        : 
        <Link to='/' className={styles['link']}>
          <article className={[`${styles['article']}`, `${styles['--no-hightlight']}`].join(' ')}>
            <div className={styles['img-box']}>
              <img 
                alt=''
                src={imageSrc}
                className={styles['article__img']}
              />
            </div>
            <div className={styles['content-wrapper']}>
              <h4 className={styles['article__title']}>{title}</h4>
              <p className={styles['article__date']}>{date}</p>
            </div>
          </article>
        </Link>
      }
    </>
  )
}

export default ArticleWithDate;