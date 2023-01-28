import P from 'prop-types';
import styles from './Content.module.css';

export const Content = ({ children }) => {
  return <div className={styles.customContent}>{children}</div>;
};
Content.propTypes = {
  children: P.node.isRequired,
};
