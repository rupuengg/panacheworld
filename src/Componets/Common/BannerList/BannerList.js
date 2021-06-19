import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './BannerList.scss';

const BannerList = (props) => {
  const { banners } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let newIndex = activeIndex + 1;
      if (newIndex >= banners.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }, 2000);
  });

  return (
    <div className="bannerBox">
      <div>
        {banners.map((item, index) => (
          <div key={`banner-${index}`} className={`bannerItem ${index === activeIndex ? 'active' : ''}`}>
            <div className="slideItem" style={{ backgroundImage: 'url(' + item.img + ')' }}>
              <div className="siteCss">
                <div className="contentBox">
                  Text
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  banners: store.bannerReducer.bannerList,
});

export default connect(mapStateToProps)(BannerList);