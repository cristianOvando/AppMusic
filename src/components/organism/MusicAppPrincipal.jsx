import SeFueLaLuz from "../../assets/icons/seFueLaLuz.svg"
import Spiterman from "../../assets/icons/spiterman.svg"
import musicaAmigosFiesta from "../../assets/icons/musicaAmigosFiesta.svg"
import King from "../../assets/icons/king.svg"
import "../../assets/styles/MusicAppPrincipal.css";
import { useState } from "react";
import Frames from "../atoms/iframes";

function MusicAppPrincipal() {
 
    const title = "Se fue la luz, Latin Mafia"


        const [link, seturl] = useState("https://www.youtube.com/embed/T4CEq1nK8rY")

        const primerVideo = () =>{
            seturl("https://www.youtube.com/embed/T4CEq1nK8rY")
        }

        const segundoVideo = () =>{
            seturl("https://www.youtube.com/embed/x6C82oGTkiY")
        }

        const tercerVideo = () =>{
            seturl("https://www.youtube.com/embed/qAe4zle21Rc")
        }

        const cuartoVideo = () =>{
            seturl("https://www.youtube.com/embed/g_uoH6hJilc")
        }

    return ( 
        <>
            <main className="contenedorPadre">
                    <div className="contenedorIzquierdo">
                       <Frames videourl = {link} videotitle = {"Se fue la luz, Latin Mafia"}></Frames>
                     </div>

                    <div className="contenedorDerecho">
                            <button onClick={primerVideo} className="icon">
                                <img src={SeFueLaLuz}/>
                                <p className="titulo">Se fue la luz <br/> Latin Mafia, Jesse Baez</p>
                            </button>
                            <button onClick={segundoVideo} className="icon">
                                <img src={Spiterman} />
                                <p className="titulo">Home <br/> Metro Boomin, Don Toliver</p>

                            </button>
                            <button onClick={tercerVideo} className="icon">
                                <img src={musicaAmigosFiesta} />
                                <p className="titulo">Col´s Memories <br/> Pyramid </p>

                            </button>
                            <button onClick={cuartoVideo} className="icon">
                                <img src={King} />
                                <p className="titulo">King <br/> Years and Years</p>
                            </button>
                    </div>

            </main>       
       </>
     );
}

export default MusicAppPrincipal;