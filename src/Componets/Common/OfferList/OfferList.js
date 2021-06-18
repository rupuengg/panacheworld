import './OfferList.scss';
import Offer from './Offer';

const OfferList = () => {
  const offers = [
    {
      floor_image: './images/2-bhk.png',
      title: '2bhk interiors',
      price: 'Starting ₹6 Lacs',
      options: [
        {
          title: 'Modular kitchen',
          img: './images/kitchen.png',
          items: ['Chimney', 'Hob', 'Faucet', 'Sink', 'Granite countertop'],
        }, {
          title: 'Living room',
          img: './images/living.png',
          items: ['3-seater sofa', 'TV unit', 'Coffee table']
        }, {
          title: 'Master bedroom',
          img: './images/master-bedroom.png',
          items: ['King size bed', 'Wardrobe', 'Bedside tables']
        }, {
          title: 'Guest bedroom',
          img: './images/guest-bedroom.png',
          items: ['Queen size bed', 'Wardrobe', 'Bedside tables']
        }, {
          title: 'Dining room',
          img: './images/dining-room.png',
          items: ['4-Seater dining set']
        }, {
          title: 'Services',
          img: './images/services.png',
          items: ['False ceiling', 'Painting', 'Decor and lighting', 'Kitchen civil work', 'Deep cleaning']
        }, {
          title: 'Other',
          img: './images/services.png',
          items: ['Mandir', 'Shoe Racks', 'Bathroom Partition']
        }
      ]
    }, {
      floor_image: './images/3-bhk.png',
      title: '3bhk interiors',
      price: 'Starting ₹8 Lacs',
      options: [
        {
          title: 'Modular kitchen',
          img: './images/kitchen.png',
          items: ['Chimney', 'Hob', 'Faucet', 'Sink', 'Granite countertop'],
        }, {
          title: 'Living room',
          img: './images/living.png',
          items: ['3-seater sofa', 'TV unit', 'Coffee table']
        }, {
          title: 'Master bedroom',
          img: './images/master-bedroom.png',
          items: ['King size bed', 'Wardrobe', 'Bedside tables']
        }, {
          title: 'Guest bedroom (1)',
          img: './images/guest-bedroom.png',
          items: ['Queen size bed', 'Wardrobe', 'Bedside tables']
        }, {
          title: 'Guest bedroom (2)',
          img: './images/guest-bedroom.png',
          items: ['Queen size bed', 'Wardrobe', 'Bedside tables']
        }, {
          title: 'Dining room',
          img: './images/dining-room.png',
          items: ['4-Seater dining set']
        }, {
          title: 'Services',
          img: './images/services.png',
          items: ['False ceiling', 'Painting', 'Decor and lighting', 'Kitchen civil work', 'Deep cleaning']
        }, {
          title: 'Other',
          img: './images/services.png',
          items: ['Mandir', 'Shoe Racks', 'Bathroom Partition']
        }
      ]
    }
  ];

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

export default OfferList;
