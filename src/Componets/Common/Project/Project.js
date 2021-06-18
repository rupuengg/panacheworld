import Header from '../../Common/Header';
import Footer from '../../Common/Footer/Footer';
import './Project.scss';
import project1d1 from '../../../assets/images/projects/1/designer_images/001-mb-tv-wr.jpeg';
import project1d2 from '../../../assets/images/projects/1/designer_images/002-mb-tv-door.jpeg';
import project1d3 from '../../../assets/images/projects/1/designer_images/003-mb-b-fw.jpeg';
import project1d4 from '../../../assets/images/projects/1/designer_images/004-gb-right-side.jpeg';
import project1d5 from '../../../assets/images/projects/1/designer_images/005-gb-bed-hydralic.jpeg';
import project1d6 from '../../../assets/images/projects/1/designer_images/006-gb-common-pic.jpeg';
import project1d7 from '../../../assets/images/projects/1/designer_images/007-sr-bed.jpeg';
import project1d8 from '../../../assets/images/projects/1/designer_images/008-sr-studdy-table.jpeg';
import project1d9 from '../../../assets/images/projects/1/designer_images/009-k-left-side.jpeg';
import project1d10 from '../../../assets/images/projects/1/designer_images/010-k-right-side.jpeg';
import project1d11 from '../../../assets/images/projects/1/designer_images/011-l-sofa-wp.jpeg';
import project1d12 from '../../../assets/images/projects/1/designer_images/012-l-tv-common-area.jpeg';
import { Link } from 'react-router-dom';

const projects = [
  {
    link: '11',
    title: 'First Project',
    address: 'Gulshan Bellina',
    location: '',
    default_image: project1d1,
    designer_images: [project1d1, project1d2, project1d3, project1d4, project1d5, project1d6, project1d7, project1d8, project1d9, project1d10, project1d11, project1d12],
    after_work: [],
  },
];

const Project = () => {
  return (
    <>
      <Header />
      <div className="siteCss">
        <h1 className="p0 m0 pageTitle">All Project</h1>
        <div className="projectBox">
          {projects.map(project => (
            <div>
              <div className="projectDesc">
                <Link to={`projects/${project.link}`} >
                  <img alt={project.title} src={project.default_image} />
                  <div className="projectDetail">
                    <h2 className="p0 m0">{project.title}</h2>
                    <p className="p0 m0">{project.address}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
