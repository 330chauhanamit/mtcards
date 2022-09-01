import Slider from "react-slick";


const PopupCard = ({item, setIsOpen}) => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
          ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/>
          <path d="M23.1182 13.6744L16.6275 20L23.1182 26.3256C23.6286 26.823 23.6286 27.6349 23.1182 28.1322C22.6151 28.6226 21.8045 28.6226 21.3013 28.1322L13.8837 20.9033C13.3734 20.4059 13.3734 19.5941 13.8837 19.0967L21.3013 11.8678C21.8045 11.3774 22.6151 11.3774 23.1182 11.8678C23.6286 12.3651 23.6286 13.177 23.1182 13.6744Z" fill="#1483DC" stroke="#1483DC" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        );
      }
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
          ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <path d="M16.8828 13.6744L23.3735 20L16.8828 26.3256C16.3724 26.823 16.3724 27.6349 16.8828 28.1322C17.3859 28.6226 18.1965 28.6226 18.6996 28.1322L26.1172 20.9033C26.6276 20.4059 26.6276 19.5941 26.1172 19.0967L18.6996 11.8678C18.1965 11.3774 17.3859 11.3774 16.8828 11.8678C16.3724 12.3651 16.3724 13.177 16.8828 13.6744Z" fill="#1483DC" stroke="#1483DC" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div>
            <div className="popup-container">
                <div className="close-icon" onClick={()=>setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#E4E4E4"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.13317 6.55039C6.97224 6.38945 6.71132 6.38945 6.55039 6.55039C6.38945 6.71132 6.38945 6.97224 6.55039 7.13317L9.55589 10.1387L6.55039 13.1442C6.38945 13.3051 6.38945 13.566 6.55039 13.727C6.71132 13.8879 6.97224 13.8879 7.13317 13.727L10.1387 10.7215L13.1438 13.7266C13.3047 13.8875 13.5657 13.8875 13.7266 13.7266C13.8875 13.5657 13.8875 13.3047 13.7266 13.1438L10.7215 10.1387L13.7266 7.13353C13.8875 6.9726 13.8875 6.71168 13.7266 6.55075C13.5657 6.38982 13.3047 6.38982 13.1438 6.55075L10.1387 9.55589L7.13317 6.55039Z" fill="#4A4A4A"/>
                  </svg>
                </div>
            <div className="popup-img">
                <Slider {...settings}>
                {item.image.map((img)=>{
                    return(
                        <div className="slide-img">
                            <img src={img} onClick={()=>setIsOpen(false)}/>
                        </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="col-12 col-md-6">
            {/* <div className="post-text">
                <div className="post-title">
                <h2>{item.title}</h2>
                </div>
                <div className="post-price">Price : ₹ {item.price}</div>
                <div className="post-stock">Stock : {item.stock}</div>
                <div className="post-desc">
                <h6>Description: {item.description}</h6>
                </div>
            </div> */}
            </div>
        </div>
        </div>
    )
}
export default PopupCard