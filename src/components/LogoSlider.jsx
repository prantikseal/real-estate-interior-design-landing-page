
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";

function LogoSlider() {
  const settings = {
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
		cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
  };
  
  return (
    <Slider {...settings}>
        <div className="slide"><img src="tesa logo.png" /></div>  
        <div className="slide"><img src="Hettich-Logo 1.png" /></div>
        <div className="slide"><img src="fevicol-logo-7BC591EE18-seeklogo 1.png" /></div>
        <div className="slide"><img src="ARISTO LOGO.png" /></div>
        <div className="slide"><img src="ASIAN PAINTS LOGO.png" /></div>
        <div className="slide"><img src="centuryply-logo 1.png" /></div>
        <div className="slide"><img src="EBCO LOGO.png" /></div>  
        <div className="slide"><img src="FABER_Logo_P3435C (1) 1.png" /></div>
        <div className="slide"><img src="fevicol-logo-7BC591EE18-seeklogo 1.png" /></div>
        <div className="slide"><img src="greenply-logo-469D8F2DFE-seeklogo 1.png" /></div>
        <div className="slide"><img src="GODREJ LOGO.png" /></div>
        <div className="slide"><img src="Haefele_Logo 1.png" /></div>
        <div className="slide"><img src="MARSHALLS LOGO.png" /></div>  
        <div className="slide"><img src="MERINO LOGO.png" /></div>
        <div className="slide"><img src="philips-logo-DE60D92C36-seeklogo 1.png" /></div>
        <div className="slide"><img src="praveedh logo.png" /></div>
        <div className="slide"><img src="welspun-logo-BE5825E96A-seeklogo 1.png" /></div>
        <div className="slide"><img src="yale-lock-logo-CE00B2672D-seeklogo 1.png" /></div>
    </Slider>   
  );
}

export default LogoSlider;

