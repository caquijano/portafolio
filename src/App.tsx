import React, { useEffect } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Image, Carousel } from "react-bootstrap";
import Background from "./components/images/IMG_20190728_122614.jpg";
import Avatar from "./components/images/Avatar.png";
import android from "./components/images/icons/android.png";
import backend from "./components/images/icons/backend.png";
import frontend from "./components/images/icons/frontend.png";
import ScrollReaveal from "scrollreveal";
import "./styles.css";

function App() {
  //  const heightWindow = window.screen.height
  //const widthWindow = window.screen.width
  useEffect(() => {
    const config = {
      origin: "down",
      duration: 6000,
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
                  android, a pesar de la corta experiencia, soy muy apasionado y
                  realmente bueno en lo que hago, encuentro soluciones faciles,
                  rapidas y usables a todo tipo de problemas, si deseas trabajar
                  conmigo no dudes en contactarme.
                </h5>
                <br />
                <h5 style={{ color: "#777" }} className="reveal-1">
                  Cumplí con toda la malla curricular de la carrera profesional
                  en ingenieria de sistemas, por algunas circuntacias aún no
                  cuento con mi titulación, pero sigo en aprendizaje continuo, a
                  demas de codificar, puedo trabajar en cualquier fase del ciclo
                  de vida del desarrollo de software.
                </h5>
              </section>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#e8e8e8",
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
                    <div className="col-sm-4 p-3 reveal-1">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={frontend}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Front-End</h5>
                          <p className="card-text">
                            Soy apasionado por la codificación y me gusta crear
                            sitios web atractivos visualmente, intuitivos y
                            usables.
                          </p>
                          <h5 className="card-title">Lenguajes:</h5>
                          <p className="card-text">
                            HTML, CSS, JavaScript, TypeScript React, NodeJs.
                          </p>
                          <h5 className="card-title">
                            Herramientas de desarrollo:
                          </h5>
                          <p className="card-text">Bootstrap</p>
                          <p className="card-text">Github</p>
                          <p className="card-text">Gitlab</p>
                          <p className="card-text">Heroku</p>
                          <p className="card-text">Lottie</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 p-3 reveal-1">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={backend}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Back-End</h5>
                          <p className="card-text">
                            Desarrollo modulos para la interaccion y el
                            procesamiento de peticiones que existen entre el
                            usuario y el sitio web.
                          </p>
                          <h5 className="card-title">Lenguajes:</h5>
                          <p className="card-text">
                            JavaScript, TypeScript React, NodeJs.
                          </p>
                          <h5 className="card-title">
                            Herramientas de desarrollo:
                          </h5>
                          <p className="card-text">Firebase</p>
                          <p className="card-text">Graphql</p>
                          <p className="card-text">MongoDb</p>
                          <p className="card-text">MySql</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 p-3 reveal-1">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={android}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Movil</h5>
                          <p className="card-text">
                            Me gusta diseñar, programar y ejecutar sistemas para
                            marcos mobiles, dando solución a las necesidades de
                            los usuarios.
                          </p>
                          <h5 className="card-title">Lenguajes:</h5>
                          <p className="card-text">React Native, TypeScript.</p>
                          <h5 className="card-title">
                            Herramientas de desarrollo:
                          </h5>
                          <p className="card-text">Lottie</p>
                          <p className="card-text">React Native CLI</p>
                          <p className="card-text">React Native Elements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#fff",
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
              <h3 style={{ color: "#000", paddingBlock: 20 }}>Mis trabajos</h3>
              <div className="container-fluid content-row">
                <div className="row">
                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">Play Explora</h5>
                        <p className="card-text">
                          Juego de exploración y preguntas el cúal se desarrolló
                          tanto la aplicación móvil, como la administración en
                          la web.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">SyntheticApp</h5>
                        <p className="card-text">
                          Es una aplicación para la ubicación y reserva de
                          canchas sinteticas en el municipio de Fusagasugá, se
                          desarrollo para móviles Android.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">SoccerStatistics</h5>
                        <p className="card-text">
                          Aplicación móvil para obtener las estadisticas
                          deportivas de jugadores del futbol amateur, cuenta con
                          su administracion web .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">Clon Instagram</h5>
                        <p className="card-text">
                          Aplicación móvil para obtener las estadisticas
                          deportivas de jugadores del futbol amateur, cuenta con
                          su administracion web .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">
                          Administración ferreteria
                        </h5>
                        <p className="card-text">
                          Aplicación móvil para obtener las estadisticas
                          deportivas de jugadores del futbol amateur, cuenta con
                          su administracion web .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 p-3">
                    <div className="card h-100 ">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      <div className="card-body">
                        <h5 className="card-title">SoccerStatistics</h5>
                        <p className="card-text">
                          Aplicación móvil para obtener las estadisticas
                          deportivas de jugadores del futbol amateur, cuenta con
                          su administracion web .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                paddingTop: "4%",
                paddingInline: "7%",
              }}
            >
              <h3 style={{ color: "#000", paddingBlock: 20 }}>Mis trabajos</h3>
              <div className="container-fluid content-row"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
