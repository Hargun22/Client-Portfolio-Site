import React, { useState, useCallback }  from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Divider from '@mui/material/Divider';

const DesignElem2 = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    return(
    <section id={props.id} className="my-4">
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="container-col" style={{ padding: 10}}>

            <h2 className="design-titles-text"><strong>{props.name} </strong></h2>
            <Divider variant="middle" style={{marginBottom: 10}}/>
            
          <div className="row-design2">
            {props.images.map((img, ind) => {
                return(
                    <div className="flex-design" >
                        <img src={img.src} width={'95%'} onClick={() => {
                        setCurrentImage(ind); 
                        setViewerIsOpen(true);
                    }}/>
                    </div>
                
                )
            })}
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
        </div>
        </div>
    </section>
    );

}

export default DesignElem2;