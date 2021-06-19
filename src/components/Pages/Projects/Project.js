import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import ProjectDetail from '../../Common/ProjectList/ProjectDetail';

const Project = (props) => {
  return (
    <>
      <Header />
      <ProjectDetail {...props} />
      <Footer />
    </>
  );
}

export default Project;
