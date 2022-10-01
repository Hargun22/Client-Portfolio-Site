import React from "react";
import DesignElem from "./designs-elem";
import DesignItem from "./designs-elemItem";

const Photography = (props) => {
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
                        return <li className="nav-list-item"><DesignItem item={item} index={index}/></li>
                    })}
                  </ul>
                </nav>
              </div>
              <div id="cont" className="col-10 content2">
                <DesignElem id={"Deenagers"} name="Deenagers" images={props.deenagerImages}/>
                <DesignElem id={"Professional"} name="Professional" images={props.isnaImages}/>
                <DesignElem id={"Personal"} name="Personal" images={props.PersImages}/>
              </div>
            </div>
            </div>  
          </div>
        );
}

export default Photography