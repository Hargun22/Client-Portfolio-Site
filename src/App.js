import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './css/portfolio.css';
import './css/bootstrap.min.css';
import Home from './pages/home'
import Designs from './pages/designs';
import Photography from './pages/photography';
import Videography from './pages/videography';
import Contact from './pages/contact';


import DesignIsna1 from './resources/Designs/ISNA Canada/First Day of Winter.jpg';
import DesignIsna2 from "./resources/Designs/ISNA Canada/Int Day of Charity.jpg";
import DesignInsa3 from "./resources/Designs/ISNA Canada/International Day of Peace V2.jpg";
import DesignIsna4 from "./resources/Designs/ISNA Canada/International Teacher_s Day V2.jpg";
import DesignIsna5 from "./resources/Designs/ISNA Canada/FB Event.jpg";
import DesignIsna6 from "./resources/Designs/ISNA Canada/Instagram Post.jpg";
import DesignIsna7 from "./resources/Designs/ISNA Canada/Islamic History Month.jpg";
import DesignIsna8 from "./resources/Designs/ISNA Canada/World Mental Health Day.jpg";
import DesignIsna9 from "./resources/Designs/ISNA Canada/Labour Day V2.jpg";

import DesignYQ1 from './resources/Designs/YQ/Beautiful Batience.jpg';
import DesignYQ5 from "./resources/Designs/YQ/Being Selfish V2.jpg";
import DesignYQ3 from "./resources/Designs/YQ/Good Deed.jpg";
import DesignYQ4 from "./resources/Designs/YQ/Eid Adha 2020.jpg";
import DesignYQ2 from "./resources/Designs/YQ/Wealth.jpg";
import DesignYQ6 from "./resources/Designs/YQ/Wisdom.jpg";
import DesignYQ7 from "./resources/Designs/YQ/Ihsan.jpg";
import DesignYQ8 from "./resources/Designs/YQ/Righteous Speech.jpg";
import DesignYQ9 from "./resources/Designs/YQ/Think About Death.jpg";

import DesignHun1 from './resources/Designs/Hunnibi/April-10.png';
import DesignHun2 from "./resources/Designs/Hunnibi/Feb 4th, 2019Artboard 1.png";
import DesignHun3 from "./resources/Designs/Hunnibi/Feb 6th, 2019Artboard 1.png";
import DesignHun4 from "./resources/Designs/Hunnibi/Feb 17th, 2019Artboard 1.png";
import DesignHun5 from "./resources/Designs/Hunnibi/Feb 25th, 2019Artboard 1.png";
import DesignHun6 from "./resources/Designs/Hunnibi/Feb 19th, 2019Artboard 1.png";
import DesignHun7 from "./resources/Designs/Hunnibi/Jan 23rd, 2019Artboard 1.png";
import DesignHun8 from "./resources/Designs/Hunnibi/Jan 27th, 2019Artboard 1.png";
import DesignHun9 from "./resources/Designs/Hunnibi/Jan 10th, 2019Artboard 1.png";

import DesignAl1 from './resources/Designs/AlMaghrib/Insta Poster.jpg';
import DesignAl2 from "./resources/Designs/AlMaghrib/Sold Out.jpg";
import DesignAl3 from "./resources/Designs/AlMaghrib/Scholarship Post.jpg";
import DesignAl4 from "./resources/Designs/AlMaghrib/Family Discount.jpg";
import DesignAl5 from "./resources/Designs/AlMaghrib/95 Sold.jpg";
import DesignAl6 from "./resources/Designs/AlMaghrib/1 Day.jpg";


import DesignPers1 from './resources/Designs/Personal/Steve Jobs.jpg';
import DesignPers2 from "./resources/Designs/Personal/Personal1.png";
import DesignPers3 from "./resources/Designs/Personal/Personal2.png";
import DesignPers4 from "./resources/Designs/Personal/Personal3.png";
import DesignPers5 from "./resources/Designs/Personal/Personal4.png";
import DesignPers6 from "./resources/Designs/Personal/Personal5.png";
import DesignPers7 from "./resources/Designs/Personal/Personal6.png";

import PhotoProf1 from "./resources/Photography/Professional/IMG_6369.JPG";
import PhotoProf2 from "./resources/Photography/Professional/IMG_6355.JPG";
import PhotoProf3 from "./resources/Photography/Professional/IMG_7209.JPG";
import PhotoProf4 from "./resources/Photography/Professional/IMG_7219.JPG";
import PhotoProf5 from "./resources/Photography/Professional/IMG_7305.JPG";
import PhotoProf6 from "./resources/Photography/Professional/IMG_7534.JPG";
import PhotoProf7 from "./resources/Photography/Professional/IMG_7584.JPG";
import PhotoProf8 from "./resources/Photography/Professional/IN1A4634.JPG";
import PhotoProf9 from "./resources/Photography/Professional/IN1A5211.JPG";

import PhotoPers1 from "./resources/Photography/Car Photography/Benzo mILTON 1.jpg";
import PhotoPers2 from "./resources/Photography/Car Photography/Benzo mILTON 2.jpg";
import PhotoPers3 from "./resources/Photography/Car Photography/Church FL - Updated.jpg";
import PhotoPers4 from "./resources/Photography/Car Photography/Oak 3.jpg";
import PhotoPers5 from "./resources/Photography/Car Photography/Summer 1.jpg";
import PhotoPers6 from "./resources/Photography/Car Photography/Summer V3 2.jpg";
import PhotoPers7 from "./resources/Photography/Car Photography/Wallpaper 3.jpg";
import PhotoPers8 from "./resources/Photography/Car Photography/AMG Place.jpg";
import PhotoPers9 from "./resources/Photography/Car Photography/Church Booti.jpg";
import PhotoPers10 from "./resources/Photography/Car Photography/1234 Wall.jpg";
import PhotoPers11 from "./resources/Photography/Car Photography/ING 5.jpg";
import PhotoPers12 from "./resources/Photography/Car Photography/Port 1.jpg";
import PhotoPers13 from "./resources/Photography/Car Photography/Smecond 1.jpg";

import DesignSouladri1 from "./resources/Designs/Souladri/Persia.png";
import DesignSouladri2 from "./resources/Designs/Souladri/Han Dynasty.png";
import DesignSouladri3 from "./resources/Designs/Souladri/Desert Dusk.png";
import DesignSouladri4 from "./resources/Designs/Souladri/Persia - Women Final.jpeg";
import DesignSouladri5 from "./resources/Designs/Souladri/Han Dynasty Final.jpeg";
import DesignSouladri6 from "./resources/Designs/Souladri/Dessert Dusk  - Final.jpeg";

import DesignUser1 from "./resources/Designs/UserFlow/V2-01.jpeg";
import DesignUser2 from "./resources/Designs/UserFlow/V2-02.png";
import DesignUser3 from "./resources/Designs/UserFlow/V2-03.png";
import DesignUser4 from "./resources/Designs/UserFlow/V2-04.jpeg";
import DesignUser5 from "./resources/Designs/UserFlow/V2-05.png";


const isnaImages = [
    {src: DesignIsna1,
        width: 1,
        height: 1},
    {src: DesignIsna2,
        width: 1,
        height: 1},
    {src: DesignInsa3,
        width: 1,
        height: 1},
    {src: DesignIsna4,
        width: 1,
        height: 1}, 
    {src: DesignIsna5,
        width: 1.8,
        height: 1},
    {src: DesignIsna6,
        width: 1,
        height: 1},
    {src: DesignIsna7,
        width: 1,
        height: 1},
    {src: DesignIsna8,
        width: 1,
        height: 1},
    {src: DesignIsna9,
        width: 1,
        height: 1}
];

const YQImages = [
  {src: DesignYQ1,
      width: 1,
      height: 1},
  {src: DesignYQ2,
      width: 1,
      height: 1},
  {src: DesignYQ3,
      width: 1,
      height: 1},
  {src: DesignYQ4,
      width: 2,
      height: 1}, 
  {src: DesignYQ5,
      width: 1,
      height: 1},
  {src: DesignYQ6,
      width: 1,
      height: 1},
  {src: DesignYQ7,
      width: 2,
      height: 1},
  {src: DesignYQ8,
      width: 3,
      height: 2},
  {src: DesignYQ9,
      width: 1,
      height: 1}
];

const hunImages = [
  {src: DesignHun1,
      width: 24,
      height: 26},
  {src: DesignHun2,
      width: 24,
      height: 26},
  {src: DesignHun3,
      width: 24,
      height: 26},
  {src: DesignHun4,
      width: 24,
      height: 26}, 
  {src: DesignHun5,
      width: 24,
      height: 26},
  {src: DesignHun6,
      width: 24,
      height: 26},
  {src: DesignHun7,
      width: 24,
      height: 26},
  {src: DesignHun8,
      width: 24,
      height: 26},
  {src: DesignHun9,
      width: 24,
      height: 26}
];

const AlImages = [
  {src: DesignAl1,
      width: 4,
      height: 7},
  {src: DesignAl2,
      width: 1,
      height: 1},
  {src: DesignAl3,
      width: 2,
      height: 1},
  {src: DesignAl4,
      width: 22,
      height: 26}, 
  {src: DesignAl5,
      width: 10,
      height: 11},
  {src: DesignAl6,
      width: 1,
      height: 1}
];

const PersImages = [
  {src: DesignPers1,
      width: 11,
      height: 13},
  {src: DesignPers2,
      width: 10,
      height: 13},
  {src: DesignPers3,
      width: 10,
      height: 13},
  {src: DesignPers4,
      width: 10,
      height: 13},
  {src: DesignPers5,
      width: 10,
      height: 13},
  {src: DesignPers6,
      width: 12,
      height: 13},
  {src: DesignPers7,
      width: 15,
      height: 16}
      
];



const designItems = [
  {
      name: "ISNA Canada",
      link: "#ISNA"
  },
  {
      name: "Yasir Qadhi",
      link: "#YQ"
  },
  {
      name: "Hunnibi",
      link: "#Hunnibi"
  },
  {
      name: "AlMaghrib Institute",
      link: "#AlMaghrib"
  },
  {
    name: "Souladri",
    link: "#Souladri"
  },
  {
    name: "UserFlow Technology",
    link: "#UserFlow"
  },
  {
      name: "Personal",
      link: "#Personal"
  },
  
];

const photoItems = [
  {
      name: "Professional",
      link: "#Professional"
  },
  {
      name: "Personal",
      link: "#Personal"
  }
];

const profImages = [
  {src: PhotoProf1,
    width: 3,
    height: 2},
  {src: PhotoProf2,
    width: 3,
    height: 2},
  {src: PhotoProf3,
    width: 3,
    height: 2},
  {src: PhotoProf4,
    width: 3,
    height: 2},
  {src: PhotoProf5,
    width: 3,
    height: 2},
  {src: PhotoProf6,
    width: 3,
    height: 2},
  {src: PhotoProf7,
    width: 3,
    height: 2},
  {src: PhotoProf8,
    width: 3,
    height: 2},
  {src: PhotoProf9,
    width: 3,
    height: 2},

];

const photoPersImages = [
  {src: PhotoPers7,
    width: 16,
    height: 30},
  {src: PhotoPers1,
    width: 1,
    height: 1},
  {src: PhotoPers2,
    width: 1,
    height: 1},
  {src: PhotoPers3,
    width: 27,
    height: 30},
  {src: PhotoPers4,
    width: 1,
    height: 1},
  {src: PhotoPers5,
    width: 1,
    height: 1},
  {src: PhotoPers6,
    width: 1,
    height: 1},
  {src: PhotoPers8,
    width: 1,
    height: 1},
  {src: PhotoPers9,
    width: 27,
    height: 30},
  {src: PhotoPers10,
    width: 24,
    height: 42},
  {src: PhotoPers11,
    width: 1,
    height: 1},
  {src: PhotoPers12,
    width: 1,
    height: 1},
  {src: PhotoPers13,
    width: 26,
    height: 31},

];

const souladriImages = [
  {src: DesignSouladri1,
    width: 1,
    height: 1},
  {src: DesignSouladri2,
    width: 1,
    height: 1},
  {src: DesignSouladri3,
    width: 1,
    height: 1},
  {src: DesignSouladri4,
    width: 1,
    height: 1},
  {src: DesignSouladri5,
    width: 1,
    height: 1},
  {src: DesignSouladri6,
    width: 1,
    height: 1}
];

const userImages = [
  {src: DesignUser1}, 
  {src: DesignUser2}, 
  {src: DesignUser3}, 
  {src: DesignUser4},
  {src: DesignUser5} 
];

const videoItems = [
  // {
  //   title: "Youtube Intros & Outros",
  //   data: [
  //     "https://www.youtube.com/embed/bh_hTAbdsu8",
  //     "https://www.youtube.com/embed/wPVbKxlxtfQ"  
  //   ]
  // }, 
  // {
  //   title: "Instagram & Facebook Posts",
  //   data: [
  //     "https://www.youtube.com/embed/Q9DvPxAFUGA",
  //     "https://www.youtube.com/embed/zP5gOonWWQQ",
  //     "https://www.youtube.com/embed/-0jZTuV3M-E",
  //     "https://www.youtube.com/embed/r3BpLU1Kb_A",
  //     "https://www.youtube.com/embed/zagMCCUio2Q",
  //     "https://www.youtube.com/embed/yOXozKs8EMk"
  //   ]
  // },
  {
    title: "Informative Videos",
    data: [
      "https://www.youtube.com/embed/48Ox9RB08LA",
      "https://www.youtube.com/embed/o3plK07mGN0"
    ]
  
  }
];

const jamiVideos = [
  {
    title: "Short Stories - ISNA Canada",
    data: [
      "https://www.youtube.com/embed/w1inDKw-R_I",
      "https://www.youtube.com/embed/6kFDSYQWTH8"
    ]
}
]

const ramadanVideos =[
  {
    title: "Short Stories - Yasir Qadhi",
    data: [
      "https://www.youtube.com/embed/EiCoRwel2sU",
      "https://www.youtube.com/embed/ifGPTW2kCJA"
    ]
  }
]


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tariq Jumbocus',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Designs', path: '/designs'},
        {title: 'Photogranpphy', path: '/photography'},
        {title: 'Videography', path: '/videography'},
        {title: 'Resume', path: '/resume'}
      ]
    }
  }

  componentDidMount() {
    // or simply just AOS.init();
    Aos.init({
      duration: 600
    });
  }

  render() {
  
  return (
    <Router>
      <div id="navbar-color" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white shadow-sm">
        <h3 className="my-0 mr-md-auto font-weight-normal"><NavLink id="navlink" className="text-light" exact activeClassName='active' to="/">Tariq Jambocus</NavLink></h3>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/designs">Designs</NavLink>
          <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/photography">Photography</NavLink>
          <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/videography">Videography</NavLink>
          <NavLink id="navlink" className="p-2 text-light" activeClassName='active-2' exact to="/contact">Contact</NavLink>
        </nav>
    </div>

    <Route path="/" exact render={() => <Home/>}/>
    <Route path="/designs" exact render={() => <Designs designItems={designItems} classTitle={'title-design'} title={'Designs'} isnaImages={isnaImages} yqImages={YQImages} hunImages={hunImages} 
                AlImages={AlImages} PersImages={PersImages} souladriImages={souladriImages} userImages={userImages}/>}/>
    <Route path="/photography" exact render={() => <Photography designItems={photoItems} classTitle={'title-photography'} title={'Photography'} isnaImages={profImages} PersImages={photoPersImages}/>}/>
    <Route path="/videography" exact render={() => <Videography classTitle={'title-videography'} title={'Videography'} videoItems={videoItems} jamiVideos={jamiVideos} ramadanVideos={ramadanVideos}/>}/>
    <Route path="/contact" exact render={() => <Contact/>}/>
    <div className="footer">
      <h4>Website created by Hargun Bedi</h4>
    </div>
    </Router>

  
  );
  }
}

export default App;
