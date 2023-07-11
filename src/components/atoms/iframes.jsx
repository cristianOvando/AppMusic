import "../../assets/styles/MusicAppPrincipal.css"

function Frames(props){
    
    return(
        <>
        <iframe className="Frame" src={props.videourl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="nombreCancion">{props.videotitle}</p>
        </>
    )
}

export default Frames