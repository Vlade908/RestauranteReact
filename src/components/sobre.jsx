import './sobre.css'

function Sobre(){
    return (
        <section className="restaurant-sobre">
          <div className="sobre-content">
            <h1>Sobre o Oreon</h1>
            <p>
              No coração da alta gastronomia, o <strong>Oreon</strong> é mais do que um restaurante — é uma experiência sensorial inesquecível. 
              Combinando sofisticação, ingredientes selecionados e técnicas culinárias refinadas, cada prato conta uma história de paixão, 
              tradição e inovação.
            </p>
            <p>
              Em um ambiente elegante e acolhedor, nossa equipe de chefs renomados transforma ingredientes frescos em verdadeiras obras de arte, 
              harmonizadas com uma carta exclusiva de vinhos selecionados de vinícolas prestigiadas ao redor do mundo.
            </p>
            <p>
              <strong>Oreon — onde cada refeição é uma celebração.</strong> 🍷✨
            </p>
          </div>
          <div className="sobre-image">
            <img 
              src={`${import.meta.env.BASE_URL}IMGS/imagemRest.jpg`}
              alt="Ambiente sofisticado do Restaurante Oreon" 
            />
          </div>
        </section>
      );
    };

export default Sobre;