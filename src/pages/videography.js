import React from "react";

const Videography = (props) => {
    return (
        <div >
            <div className={props.classTitle}>
            <div className="title-text">
              <strong className="title-animation">{props.title}</strong>
            </div>
          </div>

          {props.jamiVideos.map( item => {
       return <div className="my-3 cus-container" data-aos="fade-up" data-aos-easing="ease-in">
    <div className="row row-home">
      <span className="col-3 text-centering desc-container">
        <h1 className="mid-title"><strong>{item.title}</strong></h1>
      </span>
      <div className="col-9 container-col">
        <div className="container my-3">
        <div className="border-green"> <div className="text-green-border text-centering"> Stories of Jami</div></div>
        <div className="about-text text-centering">About the series</div>
        <div className="text-centering story-text">Every building has some history within. This series was created to showcase some of the
events/incidents that contributed to its history. Abdulla Idris was one of the members that
were there ever since this Church was converted into a Mosque as it stands today.</div>
        <div className="row">
            {item.data.map( (vid, index) => {
                return (<div className="col-6 expand">
                <div className="green-text text-centering">
                  Episode {index + 1}
                </div>
            <iframe className="video" src={vid} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  </div> 
    })}
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