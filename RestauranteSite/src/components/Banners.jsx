import { useState, useEffect } from 'react';

import {register} from 'swiper/element-bundle' 
register();
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Banner.css'

const Banner = ({initialSlides, categoria = null, ids = []}) => {

    const [slidePerView, setSlidePerView] = useState(initialSlides);
    const [imagens, setImagens] = useState([]);


    useEffect(() => {
        async function fetchImagens() {
          try {
            console.log("Iniciando fetch para banners.json...");
            const response = await fetch(`${import.meta.env.BASE_URL}JSON/banners.json`);
            console.log("Resposta do fetch:", response);
      
            if (!response.ok) {
              throw new Error("Erro ao carregar JSON");
            }
      
            const data = await response.json();
            console.log("Dados carregados:", data);
      
            // Aplicar filtros se necessário
            let filteredData = data;
            if (categoria) {
              filteredData = data.filter(img => img.categoria === categoria);
            }
            if (ids.length > 0) {
              filteredData = data.filter(img => ids.includes(img.id));
            }
      
            setImagens(filteredData);
          } catch (error) {
            console.error("Erro ao carregar JSON:", error);
          }
        }
      
        fetchImagens();
      }, [categoria, ids]);


    useEffect( () => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            } else{
                setSlidePerView(slidePerView);
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize)

        return () =>{
            window.removeEventListener("resize",handleResize)
        }
       
    }, [initialSlides])

    return(
        <div id="banner">

        <Swiper 
            //controla quantos slides estão sendo mostrados na tela
            slidesPerView={slidePerView}
            pagination={{dynamicBullets: true}}
            modules={[Pagination]}
            navigation
            >
                
            {imagens.map( (item) => (
                <SwiperSlide key={item.id}>
                    <img
                    src={item.image}
                    alt="Slider"
                    className='slide-item'
                    />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default Banner;