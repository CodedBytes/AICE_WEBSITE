import './principal.css';
import Transcriptions from '../../TextTranslation/TextTranscriptions.json';
import NavBar from '../../componentes/navbar';
import { Carousel } from 'primereact/carousel';
import { useState } from 'react';

const HomePage = () => {
    const [products] = useState([
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        },
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        },
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        },
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        },
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        },
        {
            img: "/imgs/product_labels/strawberry-crispy.jpg",
            name_product: "Name Product",
            description: "Description Product"
        }
    ]);
    const [partners] = useState([ 
        {img: "/imgs/partners/2022_FIFA_World_Cup.png"},
        {img: "/imgs/partners/fispal_logo.png"},
        {img: "/imgs/partners/LOGO_APAS_GRANDE.png"},
        {img: "/imgs/partners/market4u.webp"},
        {img: "/imgs/partners/olimpiadas.png"},
    ]);
    const responsiveOptions = [
        {
            breakpoint: '1700px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1600px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1440px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1050px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const responsivePartnersOptions = [
        {
            breakpoint: '2000px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1600px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1440px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1050px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '765px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className="itemContained">
                <img src={product.img} alt="" />
                <h3 className='prod-title'>{product.name_product}</h3>
                <span className='prod-desc'>{product.description}</span>
            </div>
        );
    };
    const partnerTemplate = (product) => { return ( 
        <div className="logo-wrapper" style={{width: 270}}>
            <img src={product.img} alt="" height={60}/> 
        </div>
    ); };

    return (
        <>
            <main>
                <NavBar />

                <section className='main-banner-section'>
                     {/* CONTEUDO DO BANNER INICIAL */}
                </section>
                <div className='wave-division-bottom-tiny'></div>

                <section className="aice-products-carrousel">
                    <h1 className='products-title'>{Transcriptions[1]['titulo_area_produtos']}</h1>

                    <div className="aice-products-division">
                        <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular autoplayInterval={3000}/>
                    </div>

                    <button type="button" className="reseller-btn">{Transcriptions[1]['titulo_botao_seja_revendedor']}</button>
                </section>
                        
                <div className="wave-division-top-tiny"></div>
                <section className="about-us">
                    <h1>Conheça a Aice</h1>

                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nulla nec sapien maximus ornare. Pellentesque a mi a erat pulvinar sodales. Suspendisse orci libero, efficitur id ligula vitae, vulputate fermentum lorem. Donec molestie tellus dui, in lobortis orci luctus in. Duis ac aliquam nisi, ac pellentesque elit. Sed dignissim quis mauris a dignissim. Vestibulum id condimentum urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lobortis est ligula. 
                    </span>

                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nulla nec sapien maximus ornare. Pellentesque a mi a erat pulvinar sodales. Suspendisse orci libero, efficitur id ligula vitae, vulputate fermentum lorem. Donec molestie tellus dui, in lobortis orci luctus in. Duis ac aliquam nisi, ac pellentesque elit. Sed dignissim quis mauris a dignissim. Vestibulum id condimentum urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lobortis est ligula. 
                    </span>
                </section>
                <div className='wave-division-bottom-tiny'></div>

                <section className="partnership">
                    <h1 className='partnership-title'>Parceiros Aice</h1>
                    <div className="partners-division">
                        <Carousel value={partners} numVisible={3} numScroll={3} responsiveOptions={responsivePartnersOptions} itemTemplate={partnerTemplate} circular autoplayInterval={2000} showNavigators={false} showIndicators={false}/>
                    </div>
                </section>
                
                <div className="wave-division-top-tiny"></div>
                <section className="footer-aice">
                    
                </section>
            </main>
        </>
    )
}

export default HomePage;