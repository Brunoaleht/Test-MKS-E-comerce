import P from 'prop-types';
import styles from './Content.module.css';
type props = {
  children: JSX.Element;
};
export const Content = ({ children }: props) => {
  return <div className={styles.customContent}>{children}</div>;
};
Content.propTypes = {
  children: P.node.isRequired,
};
