import React, { useState, useCallback }  from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Divider from '@mui/material/Divider';

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

          <div className="container-col" >
           <div className={props.name === "Souladri" ? "souladriDesignBox row-design row-design-souladri" : ""} style={{ padding: 10}}>
          <h2 className={`design-titles-text ${props.name === "Souladri" ? "col-2 verticalBorder" : ""}`} ><strong>{props.name} </strong></h2>
          {props.name === "Souladri" && 
          <div className="col-10" style={{padding: 10}}>
            <h5 className="souldariDesignText">
              Souladri is a brand new perfume brand offering an option for men, women, and also
              a unisex option. The goal was to achieve a premium feel for the brand itself. The
              background of the final perfume labels were matte black, along with gold foil for
              all of the golden components, giving that premium touch.
            </h5>
          </div>

          }
          
          </div> 
          <Divider variant="middle" style={{marginBottom: 10}}/>
            
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
        {props.id === "ISNA" &&
        <div>
          <div>
            <h2 className="design-titles-text2"><strong>Influencer/Media Kit</strong></h2>
          </div>
        <div className="pdfView">
        <iframe src="https://drive.google.com/file/d/1uLbJ4aK8I6AD66LIkEvt-W8lGzPTa1KG/preview" width="100%" height="500"></iframe>
        </div>
        </div>
        }
        </div>
        
    </section>

    );

}

export default DesignElem