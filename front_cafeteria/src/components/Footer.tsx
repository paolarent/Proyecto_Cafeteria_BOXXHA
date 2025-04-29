import icon_facebook from "../assets/Iconos/facebook.png";
import icon_instagram from "../assets/Iconos/instagram.png";
import icon_maps from "../assets/Iconos/maps.png";
import icon_tiktok from "../assets/Iconos/tiktok.png";

const Footer = () => {
    
    return (
        <footer className="bg-[#311808] text-white py-6 font-Montserrat">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-12 text-center md:text-left">
                <div>
                    <p className="font-bold mt-4 text-center">Cafeteria Boxxha</p>
                    <p>© 2025 Todos los derechos reservados</p>
                </div>
                <div>
                    <p className="font-bold">CONTACTO:</p>
                    <p><span className="font-semibold">Teléfono:</span> +52 668 124 7762</p>
                    <p><span className="font-semibold">Correo:</span> boxxhacafeteria@gmail.com</p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4 mt-4">
                    <a href="https://maps.app.goo.gl/xXKc4P2Y8jGBGfju6?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
                        <img src={icon_maps} alt="Mapas" title="MAPS" className="w-10 h-10" />
                    </a>
                    <a href="https://facebook.com/share/1BapWZXdsg/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <img src={icon_facebook} alt="Facebook" title="FACEBOOK" className="w-10 h-10" />
                    </a>
                    <a href="https://instagram.com/boxxha_cafeteria/#" target="_blank" rel="noopener noreferrer">
                        <img src={icon_instagram} alt="Instagram" title="INSTAGRAM" className="w-10 h-10" />
                    </a>
                    <a href="https://tiktok.com/@boxxha_cafeteria" target="_blank" rel="noopener noreferrer">
                        <img src={icon_tiktok} alt="Tiktok" title="TIKTOK" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;