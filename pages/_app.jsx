import '../styles/globals.css';
import P from 'prop-types';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
App.propTypes = {
  Component: P.node,
  pageProps: P.element,
};
