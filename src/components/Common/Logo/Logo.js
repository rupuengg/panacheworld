import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Logo.scss';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// const element = <FontAwesomeIcon icon={faCoffee} />;

function Logo() {
  return (
    <div className="logo">
      <ul>
        <li>
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </li>
        <li>
          <div>
            PanacheWorld
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Logo;
