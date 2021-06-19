import { connect } from 'react-redux';
import './OfferList.scss';
import Offer from './Offer';

const OfferList = (props) => {
  const { offers } = props;

  return (
    <div className="offers">
      <div className="siteCss">
        <article className="article">
          {offers.map((offer, index) => <Offer key={`list-${index}`} offer={offer} />)}
        </article>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  offers: store.offerReducer.offerList,
});

export default connect(mapStateToProps)(OfferList);
