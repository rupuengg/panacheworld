import Header from '../Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import './Project.scss';

const ProjectDetail = (props) => {
  const { projects } = props;
  const proj = projects.find(p => p.project_id === props.match.params.id);

  return (
    <>
      <Header />
      <div className="siteCss">
        <h1 className="p0 m0 pageTitle">{proj.title}</h1>
        <div className="projectDescBox">
          <div>
            <h2 className="p0 m0">Before completion designer images</h2>
            <div className="images">
              {proj.designer_images.map((img, index) => (
                <div key={index}>
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
      <Footer />
    </>
  );
}

const mapStateToProps = (store) => ({
  projects: store.projectReducer.projects,
});

export default connect(mapStateToProps)(ProjectDetail);
