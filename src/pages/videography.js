import React from "react";

const Videography = (props) => {
    return (
        <div >
            <div className={props.classTitle}>
            <div className="title-text">
              <strong className="title-animation">{props.title}</strong>
            </div>
          </div>
    {props.videoItems.map( item => {
       return <div className="my-3 cus-container" data-aos="fade-up" data-aos-easing="ease-in">
    <div className="row row-home">
      <span className="col-3 text-centering desc-container">
        <h1 className="mid-title"><strong>{item.title}</strong></h1>
      </span>
      <div className="col-9 container-col">
        <div className="container my-3">
        <div className="row">
            {item.data.map( vid => {
                return <div className="col-6 expand">
            <iframe className="video" src={vid} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  </div> 
    })}
    
    </div>
        );
}

export default Videography