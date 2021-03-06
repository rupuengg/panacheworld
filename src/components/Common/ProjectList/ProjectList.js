import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProjectList.scss';

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className="siteCss">
      <h1 className="p0 m0 pageTitle">All Project</h1>
      <div className="projectBox">
        {projects.map(project => (
          <div key={project.project_id}>
            <div className="projectDesc">
              <Link to={`projects/${project.project_id}`} >
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
  );
}

const mapStateToProps = (store) => ({
  projects: store.projectReducer.projects,
});

export default connect(mapStateToProps)(ProjectList);
