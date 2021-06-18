import { useState } from 'react';
import './Header.scss';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  {
    title: 'Home',
    link: '/home',
    scrollTo: '',
    items: []
  },
  {
    title: 'About',
    link: '/about',
    scrollTo: '',
    items: []
  },
  {
    title: 'Services',
    link: '/services',
    scrollTo: '',
    items: [
      {
        title: 'All Services',
        link: '/services/all',
        scrollTo: '',
        items: []
      },
      {
        title: 'Residences interiors',
        link: '/services/residences',
        scrollTo: '',
        items: []
      },
      {
        title: 'Recreation Interiors',
        link: '/services/recreation',
        scrollTo: '',
        items: []
      },
      {
        title: 'Modular kitchen',
        link: '/services/modularkitchen',
        scrollTo: '',
        items: []
      },
      {
        title: 'living room interiors',
        link: '/services/livingroom',
        scrollTo: '',
        items: []
      },
    ]
  },
  {
    title: 'Location',
    link: '/location',
    scrollTo: '',
    items: []
  },
  {
    title: 'Projects',
    link: '/projects',
    scrollTo: '',
    items: []
  },
  {
    title: 'Contact',
    link: '/contact',
    scrollTo: '',
    items: []
  }
];

const Header = () => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const makeMenu = (items, parentIndex = 0) => {
    return items.map((item, index) => (
      <li key={`${parentIndex === 0 ? 'mainMenu-' : 'subMenu'}parentIndex - ${index}`}>
        <Link to={item.link} onClick={() => setIsShowSubMenu(false)}>{item.title}</Link>
        {item.items && (
          <ul>
            {makeMenu(item.items, index)}
          </ul>
        )}
      </li>
    ));
  }

  return (
    <div className="mainHeader">
      <div className="topHeader">
        <div className="siteCss">
          <ul className="contactInfo">
            <li><span>PHONE : </span><a href="tel:9810681281">+91-9045096124</a></li>
            <li><span>EMAIL : </span> <a href="mailto:shabadinteriors@gmail.com">sales@panacheworld.in</a></li>
          </ul>
          <div className="clear"></div>
        </div>
      </div>
      <div className="lowerHeader">
        <div className="siteCss">
          <div className="navBar">
            <div className="logo-box">
              <Link to="/"><Logo /></Link>
            </div>
            <div className="navMenu">
              <nav className="navMenuIcon">
                <div className="navbar-header">
                  <button type="button" onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
                    <FontAwesomeIcon icon={isShowSubMenu ? faTimesCircle : faList} />
                  </button>
                </div>
                <ul className={`navigation ${isShowSubMenu ? 'open' : ''}`}>
                  {makeMenu(menuItems)}
                </ul>
                <div className="clear"></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;