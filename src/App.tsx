import React, { useEffect, useState } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Image, Carousel } from "react-bootstrap";
import Background from "./components/images/IMG_20190728_122614.jpg";
import Avatar from "./components/images/Avatar.png";
import ScrollReaveal from "scrollreveal";
import "./styles.css";
import {
  SiReact,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";

import dataCarousel from "./DataProjects";
import dataSkils from "./DataSkils";
import ModalCarousel from "./components/ModalCarousel";

function App() {
  const [modalShow, setModalShow] = useState<any>(false);
  const [data, setData] = useState<any>({});

  const openModal = async (item: any) => {
    setModalShow(true);
    setData(item);
  };

  useEffect(() => {
    const config = {
      origin: "down",
      duration: 2000,
      delay: 750,
      distance: "0px",
      scale: 1,
      easing: "ease",
      interval: 100,
    };
    ScrollReaveal().reveal(".reveal-1", config);
  }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div style={{ width: "100%", backgroundColor: "#000" }}>
        <div
          style={{ position: "relative", backgroundColor: "#000", height: 800 }}
        >
          <Image
            src={Background}
            style={{ position: "relative", backgroundColor: "#000" }}
            width="100%"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div style={{ width: "100%", position: "absolute", marginTop: -700 }}>
          <div className="Description">
            <div style={{ width: "100%", textAlign: "center" }}>
              <Image
                className="reveal-1"
                src={Avatar}
                thumbnail
                roundedCircle
                width="25%"
                style={{ margin: 15 }}
              />
              <section style={{ paddingBlock: "5%", paddingInline: "7%" }}>
                <h3
                  style={{ color: "#999", paddingBlock: 20 }}
                  className="reveal-1"
                >
                  Hola, Mi nombre es Carlos Quijano{"   "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/330/330508.png"
                    style={{ height: 30 }}
                  />
                </h3>

                <h5 style={{ color: "#777" }} className="reveal-1">
                  Me desempeño como desarrollador Full-Stack tanto para web como
                  Android, a pesar de la corta experiencia, soy muy apasionado y
                  realmente bueno en lo que hago, encuentro soluciones fáciles,
                  rapidas y usables a todo tipo de problemas, si deseas trabajar
                  conmigo no dudes en contactarme.
                </h5>
                <br />
                <h5 style={{ color: "#777" }} className="reveal-1">
                  Cumplí con toda la malla curricular de la carrera profesional
                  en ingeniería de sistemas, y me encuentro próximo a recibir la
                  titulación, igualmente sigo en aprendizaje continuo.Debido a
                  mis estudios, además de codificar, puedo trabajar en cualquier
                  fase del ciclo de vida del desarrollo de software.
                </h5>
              </section>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#bfbfbf",
              display: "flex",
            }}
          >
            <div style={{ width: "100%", textAlign: "center" }}>
              <section style={{ paddingBlock: "4%", paddingInline: "7%" }}>
                <h3
                  style={{ color: "#000", paddingBlock: 20 }}
                  className="reveal-1"
                >
                  Habilidades principales
                </h3>
                <div className="container-fluid content-row">
                  <div className="row">
                    {dataSkils.map((item: any, index: number) => {
                      return (
                        <div
                          className="col-sm-4 p-3 reveal-1"
                          key={index}
                          style={{ borderRadius: 20 }}
                        >
                          <div
                            className="card h-100"
                            style={{ borderRadius: 20 }}
                          >
                            <div className="card-body">
                              <Image
                                src={item.image}
                                style={{ width: 60, paddingBlock: 20 }}
                              />
                              <h5>{item.title}</h5>
                              <p className="card-text">{item.description}</p>
                              <h5 className="card-title">Lenguajes:</h5>
                              <p className="card-text">{item.lenguajes}</p>
                              <h5 className="card-title">
                                Herramientas de desarrollo:
                              </h5>
                              <>
                                {item.herramientas.map((it: any, i: number) => {
                                  return (
                                    <p className="card-text" key={i}>
                                      {it.herramienta}
                                    </p>
                                  );
                                })}
                              </>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#e0e0e0",
              display: "flex",
            }}
          >
            <section
              style={{
                width: "100%",
                textAlign: "center",
                paddingBlock: "4%",
                paddingInline: "7%",
              }}
            >
              <h3
                style={{ color: "#000", paddingBlock: 20 }}
                className="reveal-1"
              >
                Mis trabajos
              </h3>
              <div className="container-fluid content-row">
                <div className="row">
                  {dataCarousel.map((item: any, index: number) => {
                    return (
                      <div
                        onClick={() => openModal(item)}
                        className="col-sm-4 p-3 reveal-1"
                        key={index}
                        style={{ borderRadius: 20 }}
                      >
                        <div
                          className="card h-100 "
                          style={{ borderRadius: 20 }}
                        >
                          <Carousel style={{ borderRadius: 20 }}>
                            {item.images.map((ima: any, i: number) => {
                              return (
                                <Carousel.Item>
                                  <img
                                    style={{
                                      borderTopLeftRadius: 20,
                                      borderTopRightRadius: 20,
                                      cursor: "zoom-in",
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
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h6>
                  Cada proyecto fue desarrollado con varios de los siguiente
                  lenguajes y tecnologías:{" "}
                </h6>{" "}
                <SiReact style={{ fontSize: 25, marginInline: 5 }} />{" "}
                <SiJavascript style={{ fontSize: 25, marginInline: 5 }} />{" "}
                <SiTypescript style={{ fontSize: 25, marginInline: 5 }} />{" "}
                <SiBootstrap style={{ fontSize: 25, marginInline: 5 }} />{" "}
                <SiFirebase style={{ fontSize: 25, marginInline: 5 }} />{" "}
                <SiMongodb style={{ fontSize: 25, marginInline: 5 }} />
              </div>
            </section>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#000",
              display: "flex",
            }}
          >
            <section
              style={{
                width: "100%",
                textAlign: "center",
                paddingBlock: "3%",
                paddingInline: "7%",
              }}
            >
              <h6 style={{ color: "#e3e4e5" }}>
                Diseño y Desarrollo | Quijano Carlos
              </h6>
              <h6 style={{ color: "#e3e4e5" }}>Actualizado Nov 2021</h6>
              <div className="container-fluid content-row"></div>
            </section>
          </div>
        </div>
      </div>
      <ModalCarousel
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </div>
  );
}

export default App;
