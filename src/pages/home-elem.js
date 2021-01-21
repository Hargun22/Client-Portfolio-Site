import { findAllByPlaceholderText } from "@testing-library/react";
import React from "react";

const HomeElem = (props) => {
    //Aos.init();
    return (
    <div>
    <div className="my-3 cus-container" >
    <div className="row row-home">
      <span className="col-3 text-centering desc-container">
        <h1 className="mid-title"><strong>Work Experience</strong></h1>
      </span>
      <div className="col-9 container-col" data-aos="fade-up" data-aos-easing="ease-in">
      {props.workData.map(place =>
        <div className="container my-3">
          <div className="row">
            <div className="col-5 m-auto">
              <h4> <strong>{place.title}</strong> </h4>
              <h5>{place.date}</h5>
              <h6>{place.name}</h6>
            </div>
            <div className="col-7">
              <ul>
                {place.list.map(item =>
                    <li>
                        {item}
                    </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  </div> 

    <div className="my-3 cus-container" >
        <div className="row row-home">
            <span className="col-3 text-centering desc-container">
            <h1 className="mid-title"><strong>Education</strong></h1>
            </span>
            <div className="col-9 container-col" data-aos="fade-up" data-aos-easing="ease-in">
                {props.eduData.map(education =>
                    <div className="container my-4">
                    <div className="row">
                        <div className="col-5 m-auto">
                        <h4> <strong>{education.title}</strong> </h4>
                        </div>
                        <div className="col-7">
                        <ul>
                            <li>
                            <h5>{education.list.name}</h5>
                            </li>
                            <li>
                            <h6>{education.list.year}</h6>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
</div>

    );
}

export default HomeElem;