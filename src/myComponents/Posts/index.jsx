
import P from 'prop-types'
import { useState, useEffect } from 'react';
import { PostCard } from '../PostCard';
import styles from './Posts.module.css';


export const Posts = ({AddItens}) => {
  const [postsProducts, setPostsProducts] = useState([])
  useEffect(() => {
    const loadPost = async () => {
      const postsResp = await fetch(
        'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
      );
      const postsJson = await postsResp.json();
      setPostsProducts(postsJson.products);
    };
    loadPost();
  }, []);


  return (
    <div className={styles.postsDisplay}>
      <div className={styles.posts}>
        {
          //sempre q houver map, precisa de uma key
          postsProducts.map((post) => (
            <div key={post.id} className={styles.contentPostsCard}>
              <PostCard
                id={post.id}
                name={post.name}
                description={post.description}
                photo={post.photo}
                price={Number(post.price)}
                BuyClick={AddItens}
                // post={post} // isso eu pego o objeto inteiro
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};
Posts.propTypes = {
  AddItens: P.func.isRequired,
}
