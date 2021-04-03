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
      <div className="cus-container-design">
        <div className="row">
          <div className="col-2 sidebar">
            <nav id="nav" className="nav">
              <ul className="nav-list">
                {props.designItems.map(item => {
                    return <li className="nav-list-item"><DesignItem item={item}/></li>
                })}
              </ul>
            </nav>
          </div>
          <div id="cont" className="col-10 content2">
            <DesignElem id={"ISNA"} name="ISNA Canada" images={props.isnaImages}/>
            <div className="pdfView">
            <iframe src="https://drive.google.com/file/d/1uLbJ4aK8I6AD66LIkEvt-W8lGzPTa1KG/preview" width="100%" height="500"></iframe>
            </div>
            <DesignElem id={"YQ"} name="Yasir Qadhi" images={props.yqImages}/>
            <DesignElem id={"Hunnibi"} name="Hunnibi" images={props.hunImages}/>
            <DesignElem id={"AlMaghrib"} name="AlMaghrib Institute" images={props.AlImages}/>
            <DesignElem id={"Souladri"} name="Souldari" images={props.souladriImages}/>
            <DesignElem2 id={"UserFlow"} name="UserFlow Technology" images={props.userImages}/>
            <DesignElem id={"Personal"} name="Personal" images={props.PersImages}/>
          </div>
        </div>
        </div>  
      </div>
    );
    
}

export default Designs
