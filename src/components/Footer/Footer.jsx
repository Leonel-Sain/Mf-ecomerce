import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
import ImgFooter from './ImgFooter';

const Footer = () => {
  return (
    <footer className="ft py-0" id='footer'>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Nosotros <div className="hrFooter"> </div></h3>
            <p className="text-dark pt-2 contentFooter"> 
            Ofrecemos soluciones de limpieza de alta calidad.
             Confía en nosotros para mantener tus espacios impecables y seguros.</p>
          </div>
          <div className="col-lg-3 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Contacto  <div className="hrFooter"> </div></h3>
            <ul className="list-unstyled text-dark pt-2 contentFooter">
              <li>Dirección: Calle Falsa 123, Ciudad Ficticia</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@miempresa.com</li>
            </ul>
          </div>
          <div className="col-lg-3 mb-2  contentFooter">
              <h3 className="text-light contentFooter">Síguenos  <div className="hrFooter"> </div></h3>
              <ul className="list-unstyled contentFooter">
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoInsta' icon={faInstagram} style={{ fontSize: '1.5rem' }} /> Instagram</li>
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoFace' icon={faFacebook} style={{ fontSize: '1.5rem' }} /> Facebook</li>
                <li className="me-3 pt-2"><FontAwesomeIcon className='iconoWsp' icon={faWhatsapp} style={{ fontSize: '1.5rem' }} /> WhatsApp</li>
              </ul>
          </div>   
          <div className="col-lg-3 contentFooter d-lg-block d-none">
              <ImgFooter/>
          </div>
        </div>
      </div>
      <div className='footerLine container-fluid text-center'>
        <p className='pt-1'>Diseño Web @LeonelSain-2024</p>
      </div>
    </footer>
  );
}

export default Footer;
