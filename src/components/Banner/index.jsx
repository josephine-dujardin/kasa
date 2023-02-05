import './banner.css'

const Banner = (props) => {
  return (
    <div
      className="banner_container"
    >
      <img
        className="banner_wrapper" src={props.image} alt="Bannière"
      />
      <p className='banner_title'>{props.text}</p>
    </div>
  );
};

export default Banner;
