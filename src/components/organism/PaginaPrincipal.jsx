import { useNavigate } from 'react-router-dom';
import "../../assets/styles/LandingPage.css";

function PaginaPrincipal() {
    const navigate = useNavigate()
    
    const handlerClickLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return ( 
        <>
            <div className='div-landing-content'>
                <div className='div-landing-hijo'>
                    <div className='container'>
                        <div className='container-text'>
                            <p className="h4">"Escoge como quieres <br/> desconectarte del mundo"</p>
                        </div>
                        <div className='div-botton'>
                            <button type="button" className="btn-primary btn-sm iniciarSesion" onClick={handlerClickLogin}>INICIAR SESION</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default PaginaPrincipal;