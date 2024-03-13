
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css"
const Footer = () => {
  return (
    <footer className=" ft py-4 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-2">
            <h3 className="text-light">Sobre Nosotros <hr style={{width:"50%"}} /></h3>
            <p className="text-dark pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus est id nisi consectetur, ut sollicitudin sem pellentesque.</p>
          </div>
          <div className="col-lg-4 mb-2">
            <h3 className="text-light">Contacto <hr style={{width:"50%"}} /></h3>
            <ul className="list-unstyled text-dark pt-3">
              <li>Dirección: Calle Falsa 123, Ciudad Ficticia</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@miempresa.com</li>
            </ul>
          </div>
          <div className="col-lg-4 mb-2">
            <h3 className="text-light">Síguenos <hr style={{width:"50%"}}/></h3>
            <ul className="list-unstyled">
            <li className="me-3 pt-2"><FontAwesomeIcon className='iconoInsta' icon={faInstagram} style={{ fontSize: '1.5rem' }} /> Instagram</li>
            <li className="me-3 pt-2"><FontAwesomeIcon className='iconoFace' icon={faFacebook} style={{ fontSize: '1.5rem' }} /> Facebook</li>
            <li className="me-3 pt-2"><FontAwesomeIcon className='iconoWsp' icon={faWhatsapp} style={{ fontSize: '1.5rem' }} /> WhatsApp</li>
            </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

  
