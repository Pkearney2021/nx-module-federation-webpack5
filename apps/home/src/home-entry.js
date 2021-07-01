import ReactDOM from 'react-dom';
import Home from './App/Home';

export default Home;

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-app-home');

  if (el) {
    ReactDOM.render(<Home />, el);
  }
}
