import './NoMatch.scss';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer/Footer';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <>
      <Header />
      <div className="noMatch">
        <div className="siteCss">
          <div className="content">
            This page is currently is in progress.
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="/home">Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NoMatch;
