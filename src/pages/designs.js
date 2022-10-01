import React from "react";
import DesignElem from "./designs-elem";
import DesignItem from "./designs-elemItem";
import DesignElem2 from "./design-elem2";


const ACTIVE = { background: '#286090', color: '#fff'};

const Designs = (props) => {
    return (
    <div>
        <div className={props.classTitle}>
        <div className="title-text">
          <strong className="title-animation">{props.title}</strong>
        </div>
      </div>
      <div className="cus-container-design" style={{paddingLeft: "7%", paddingRight: "7%"}}>
        <div className="row">
          <div className="col-2 sidebar">
            <nav id="nav" className="nav">
              <ul className="nav-list">
                {props.designItems.map((item, index) => {

                  return  <li className="nav-list-item"><DesignItem item={item} index={index}/></li>;
                   
})}
              </ul>
            </nav>
          </div>
          <div id="cont" className="col-10 content2">
            <DesignElem id={"ISNA"} name="ISNA Canada" images={props.isnaImages}/>
            <DesignElem id={"YQ"} name="Yasir Qadhi" images={props.yqImages}/>
            <DesignElem id={"AlMaghrib"} name="AlMaghrib Institute" images={props.AlImages}/>
            <DesignElem id={"DAM"} name="Digital Asset Management Infographic" images={props.designDam}/>
            <DesignElem id={"Souladri"} name="Souladri" images={props.souladriImages}/>
            <DesignElem2 id={"UserFlow"} name="UserFlow Technology" images={props.userImages}/>
            <DesignElem id={"Personal"} name="Personal" images={props.PersImages}/>
            <DesignElem id={"Hunnibi"} name="Hunnibi" images={props.hunImages}/>
          </div>
        </div>
        </div>  
      </div>
    );
    
}

export default Designs
