import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

function ModalCarousel(props: any) {
  const { title, images } = props.data;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered  
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel style={{ borderRadius: 20 }}>
          {images.map((ima: any, i: number) => {
            return (
              <Carousel.Item>
                <img
                  style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                  className="d-block w-100"
                  src={ima}
                />
                <Carousel.Caption
                  color="#000"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    height: 10,
                  }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCarousel;
