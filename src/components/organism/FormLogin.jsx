import { useNavigate } from "react-router-dom";
import "../../assets/styles/Login.css";

function FormLogin() {
  // const navigate = useNavigate();
  const navigate = useNavigate()

  const handlerClick = (e) =>{
    e.preventDefault();
    navigate("/musicapp")
  }

  return (
    <>
    <div className="containers-padre">
      <div className="containers-hijo">
        <div className="containers-informacion">
        <p className="h4 titulo-login">Bienvenido</p>
    <form className="formulario-login">
      <div className="div-login-hijo">
        <div className="mb-3 usuario">
          <label className="form-label" >Usuario</label>
          <input type="email" id="form2Example1" className="form-control" placeholder="IkerJelipe"/>
        </div>
        <div className="mb-3 password">
          <label className="form-label" >Contraseña</label>
          <input type="password" id="form2Example2" className="form-control" placeholder="******"/>
        </div>
        <div className="boton-login">
          <button type="button" className="boton-login-iniciar" onClick={handlerClick}>Iniciar Sesion</button>
        </div>
      </div>
    </form>
        </div>
      </div>
          </div>
    </>
  );
}

export default FormLogin;