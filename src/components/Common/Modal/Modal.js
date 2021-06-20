import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  const { isOpen, width, fromTop, title, setIsOpen, content } = props;

  if (!isOpen) {
    return null;
  }

  const style = {};
  if (width) style.width = width;
  if (fromTop) style.marginTop = fromTop;

  return (
    <div className="modalContainer">
      <div className="overlay"></div>
      <div className="container">
        <div className="containerBox" style={style}>
          <div className="header">
            <span>{title || ""}</span>
            <span className="close" onClick={() => { setIsOpen(!isOpen) }}><FontAwesomeIcon icon={faTimesCircle} /></span>
          </div>
          <div className="inner">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
