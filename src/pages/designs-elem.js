import React, { useState, useCallback }  from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

const DesignElem = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
  
    return (
      
        <section id={props.id} className="my-4">
            <h2 className="design-titles-text"><strong>{props.name} </strong></h2>
          <div className="row-design">
          
            <Gallery photos={props.images} margin={10} onClick={openLightbox}/>
            <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
        
      </ModalGateway>
        </div>
    </section>

    );

}

export default DesignElem