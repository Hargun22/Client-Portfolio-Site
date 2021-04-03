import React, { useState, useCallback }  from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

const DesignElem2 = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    // const openLightbox = useCallback((event, { photo, index }) => {
    //   setCurrentImage(index);
    //   setViewerIsOpen(true);
    // }, []);

    // const openLightBox = (index) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    return(
    <section id={props.id} className="my-4">
            <h2 className="design-titles-text"><strong>{props.name} </strong></h2>
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
    </section>
    );

}

export default DesignElem2;