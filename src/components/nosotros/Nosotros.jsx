import "./Nosotros.css"
import imgNosotrosMf from "../assets/img/nosotrosMf.png"
import imgLimpiezaMf from "../assets/img/limpieza.png"
const Nosotros = () => {
  return (
    <>
      <div className="container mt-5 clearfix ">
        
        <div className="row">
      {/*     <div className="col-2">
            <div id="list-example" className="list-group">
              <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
              <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
            </div>
          </div> */}
          
          <div className="col-12">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
              <h4 id="list-item-1" className="text-center" >¡Bienvenido a MF - Productos de Limpieza! </h4>
              <img src={imgNosotrosMf} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>  
              <div className="hrNosotros"></div>
              <p>
                Somos una empresa reciente dedicada a proporcionarte soluciones de limpieza de alta calidad para <strong> satisfacer todas tus necesidades.</strong>  Fundada con la visión de ofrecer productos de limpieza que garanticen la higiene y el bienestar en tu hogar, lugar de trabajo o cualquier espacio que desees mantener impecable.
               <strong> En MF - Productos de Limpieza</strong>, nos esforzamos por ofrecer una amplia gama de artículos de limpieza, cuidadosamente seleccionados por su eficacia y calidad. Desde productos básicos hasta soluciones especializadas, estamos aquí para ayudarte a mantener un ambiente <strong>limpio y saludable en todo momento.</strong></p>
              
              <h4 id="list-item-2"className="text-center">Nuestro Compromiso</h4>
              <img src={imgLimpiezaMf} className="col-md-6 float-md-start mb-3 ms-md-3" alt="..."/>
              <div className="hrNosotros"></div>
              <p>
                Nuestro compromiso con la excelencia se refleja en cada producto que ofrecemos. Trabajamos con los mejores proveedores y nos aseguramos de que cada artículo cumpla con los estándares más exigentes en <strong>términos de rendimiento y seguridad.</strong>  Queremos ser tu socio confiable en el cuidado de tus espacios, brindándote la tranquilidad que mereces.
               <strong> En MF - Productos de Limpieza</strong> , no solo nos dedicamos a vender productos, sino que también nos esforzamos por ofrecer un servicio al cliente excepcional. Estamos aquí para responder a tus preguntas, ofrecerte asesoramiento experto y garantizarte una experiencia de compra sin problemas.
                Gracias por elegir <strong> MF - Productos de Limpieza para tus necesidades de limpieza. </strong>¡Esperamos poder servirte y ayudarte a mantener un entorno limpio y saludable en todo momento!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nosotros
