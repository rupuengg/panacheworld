import project1d1 from '../assets/images/projects/1/designer_images/001-mb-tv-wr.jpeg';
import project1d2 from '../assets/images/projects/1/designer_images/002-mb-tv-door.jpeg';
import project1d3 from '../assets/images/projects/1/designer_images/003-mb-b-fw.jpeg';
import project1d4 from '../assets/images/projects/1/designer_images/004-gb-right-side.jpeg';
import project1d5 from '../assets/images/projects/1/designer_images/005-gb-bed-hydralic.jpeg';
import project1d6 from '../assets/images/projects/1/designer_images/006-gb-common-pic.jpeg';
import project1d7 from '../assets/images/projects/1/designer_images/007-sr-bed.jpeg';
import project1d8 from '../assets/images/projects/1/designer_images/008-sr-studdy-table.jpeg';
import project1d9 from '../assets/images/projects/1/designer_images/009-k-left-side.jpeg';
import project1d10 from '../assets/images/projects/1/designer_images/010-k-right-side.jpeg';
import project1d11 from '../assets/images/projects/1/designer_images/011-l-sofa-wp.jpeg';
import project1d12 from '../assets/images/projects/1/designer_images/012-l-tv-common-area.jpeg';

export const defaultProjectStore = {
  projects: [
    {
      project_id: '1',
      link: '11',
      title: 'First Project',
      address: 'Gulshan Bellina',
      location: '',
      default_image: project1d1,
      designer_images: [project1d1, project1d2, project1d3, project1d4, project1d5, project1d6, project1d7, project1d8, project1d9, project1d10, project1d11, project1d12],
      after_work: [],
    }
  ]
};

export default defaultProjectStore;