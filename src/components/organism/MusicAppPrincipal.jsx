import SeFueLaLuz from "../../assets/icons/seFueLaLuz.svg"
import Spiterman from "../../assets/icons/spiterman.svg"
import musicaAmigosFiesta from "../../assets/icons/musicaAmigosFiesta.svg"
import King from "../../assets/icons/king.svg"
import "../../assets/styles/MusicAppPrincipal.css";

function MusicAppPrincipal() {


    return ( 
       <>
            <main className="container contenedorPadre">
                <div className="row contenedorFila">
                    <div className="col-4 contenedorIzquierdo">
                            <div className="icon">
                                <img src={SeFueLaLuz}/>
                                <p className="h4 titulo">Se fue la luz <br/> Latin mafia, Jesse Baez</p>
                            </div>
                            <div className="icon">
                                <img src={Spiterman} />
                                <p className="h4 titulo">Home <br/> Metro Boomin, Don Toliver</p>

                            </div>
                            <div className="icon">
                                <img src={musicaAmigosFiesta} />
                                <p className="h4 titulo">Col´s Memories <br/> Pyramid </p>

                            </div>
                            <div className="icon">
                                <img src={King} />
                                <p className="h4 titulo">King <br/> Years and Years</p>
                            </div>
                    </div>
                    <div className="col-8 contenedorDerecho">
                        <iframe className="videoPrincipal" src="https://www.youtube.com/embed/T4CEq1nK8rY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </div>
                </div>
            </main>       
       </>
     );
}

export default MusicAppPrincipal;