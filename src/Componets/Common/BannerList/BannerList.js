import { useState, useEffect } from 'react';
import './BannerList.scss';
import banner1 from '../../../assets/images/banner/banner1.jpg';
import banner2 from '../../../assets/images/banner/banner2.jpg';
import banner3 from '../../../assets/images/banner/banner3.jpg';
import banner4 from '../../../assets/images/banner/banner4.jpg';
import banner5 from '../../../assets/images/banner/banner5.jpg';

const BannerList = () => {
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

  const banners = [
    {
      img: banner1,
    }, {
      img: banner2,
    }, {
      img: banner3,
    }, {
      img: banner4,
    }, {
      img: banner5,
    }
  ];

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

export default BannerList;