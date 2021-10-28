import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Image, Carousel } from "react-bootstrap";
import Background from "./components/images/IMG_20190728_122614.jpg";
import Avatar from "./components/images/Avatar.png";
import android from "./components/images/icons/android.png";
import backend from "./components/images/icons/backend.png";
import frontend from "./components/images/icons/frontend.png";

function App() {
  //  const heightWindow = window.screen.height
  //const widthWindow = window.screen.width
  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }}>
        <div>
          <Image
            src={Background}
            style={{ position: "relative" }}
            width="100%"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div style={{ width: "100%", position: "absolute" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#000",
              display: "flex",
              borderTopLeftRadius: "30%",
              borderTopRightRadius: "30%",
              marginTop: "-40%",
              paddingBottom: "50%",
            }}
          >
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "-10%" }}
            >
              <Image
                src={Avatar}
                thumbnail
                roundedCircle
                width="25%"
                style={{ margin: 15 }}
              />
              <section style={{ padding: "10%", marginTop: "-10%" }}>
                <h3 style={{ color: "#999", paddingBlock: 20 }}>
                  Hola, Mi nombre es Carlos Quijano
                </h3>

                <h5 style={{ color: "#777" }}>
                  Soy desarrollador Full-Stack para web y android, a pesar de la
                  corta experiencia, soy muy apasionado y realmente bueno en lo
                  que hago, encuentro soluciones faciles, rapidas y usables a
                  todo tipo de problemas.
                </h5>
              </section>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#e8e8e8",
              display: "flex",
              marginTop: "-50%",
              paddingBottom: "50%",
            }}
          >
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "-10%" }}
            >
              <section style={{ padding: "10%" }}>
                <h3 style={{ color: "#000", paddingBlock: 20 }}>
                  Habilidades principales
                </h3>
                <div className="container-fluid content-row">
                  <div className="row">
                    <div className="col-sm-4 p-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={frontend}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Front-End</h5>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <h5 className="card-title">Lenguajes:</h5>
                          <p className="card-text">
                            HTML, CSS, JavaScript, TypeScript React, NodeJs.
                          </p>
                          <h5 className="card-title">
                            Herramientas de desarrollo:
                          </h5>
                          <p className="card-text">Bootstrap</p>
                          <p className="card-text">CoreUi</p>
                          <p className="card-text">Github</p>
                          <p className="card-text">Gitlab</p>
                          <p className="card-text">Heroku</p>
                          <p className="card-text">Lottie</p>
                          <p className="card-text">Visual studio</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 p-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={backend}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Back-End</h5>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
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
                    <div className="col-sm-4 p-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <Image
                            src={android}
                            style={{ width: 60, paddingBlock: 20 }}
                          />
                          <h5>Desarrollador Android</h5>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <h5 className="card-title">Lenguajes:</h5>
                          <p className="card-text">React Native, TypeScript.</p>
                          <h5 className="card-title">
                            Herramientas de desarrollo:
                          </h5>
                          <p className="card-text">Lottie</p>
                          <p className="card-text">React Native CLI</p>
                          <p className="card-text">React Native Elements</p>
                          <p className="card-text">Visual studio</p>
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
              marginTop: "-50%",
              paddingBottom: "50%",
            }}
          >
            <section
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "-10%",
                padding: "10%",
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
                          Aplicación móvil para obtener las estadisticas deportivas de jugadores del futbol amateur, cuenta con su administracion web  .
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
                          Aplicación móvil para obtener las estadisticas deportivas de jugadores del futbol amateur, cuenta con su administracion web  .
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
                        <h5 className="card-title">Administración ferreteria</h5>
                        <p className="card-text">
                          Aplicación móvil para obtener las estadisticas deportivas de jugadores del futbol amateur, cuenta con su administracion web  .
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
                          Aplicación móvil para obtener las estadisticas deportivas de jugadores del futbol amateur, cuenta con su administracion web  .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
