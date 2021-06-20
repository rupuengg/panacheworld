import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../../Common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectDetail.scss';

const ProjectDetail = (props) => {
  const { projects } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const proj = projects.find(p => p.project_id === props.match.params.id);

  const handleModal = (currentImg) => {
    setIsOpen(true);
    setCurrentIndex(proj.designer_images.findIndex(img => img === currentImg));
  };

  const getModalContent = () => (
    <div className="imgModal">
      <div className="current">
        <img src={proj.designer_images[currentIndex]} alt="" />
      </div>
      <div className="list">
        <div className="left" onClick={() => { setCurrentIndex(currentIndex === 0 ? proj.designer_images.length - 1 : currentIndex - 1) }}><FontAwesomeIcon icon={faAngleLeft} /></div>
        <ul className="p0 m0 list">
          {proj.designer_images.map((img, index) => (
            <li className="p0 m0" key={index}>
              <img alt={proj.title} src={img} />
            </li>
          ))}
        </ul>
        <div className="right" onClick={() => { setCurrentIndex(proj.designer_images.length - 1 > currentIndex ? currentIndex + 1 : 0) }}><FontAwesomeIcon icon={faAngleRight} /></div>
      </div>
    </div >
  );

  return (
    <>
      <div className="siteCss">
        <h1 className="p0 m0 pageTitle">{proj.title}</h1>
        <div className="projectDescBox">
          <div>
            <h2 className="p0 m0">Before completion designer images</h2>
            <div className="images">
              {proj.designer_images.map((img, index) => (
                <div key={index} onClick={() => { handleModal(img) }}>
                  <div className="projectBox">
                    <div>
                      <div className="projectDesc">
                        <img alt={proj.title} src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>&nbsp;</div>
        </div>
      </div>
      <Modal isOpen={isOpen} width="40%" fromTop="10px" title="Project first images" setIsOpen={setIsOpen} content={getModalContent()} />
    </>
  );
}

const mapStateToProps = (store) => ({
  projects: store.projectReducer.projects,
});

export default connect(mapStateToProps)(ProjectDetail);
