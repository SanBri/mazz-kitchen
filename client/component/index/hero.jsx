import SocialNetworks from "../common/socialNetworks";
import Icon from "../common/icon";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__parallelogram'>
        <div className='hero__parallelogram-content'>
          <div className='hero__parallelogram-logo'>
            {/* <h4>
              MAZZ <br />
              KITCHEN
            </h4> */}
            <Icon src='/images/logo-black.png' width='100%' height='50%' />{" "}
            <p>SOLUTIONS DIGITALES ET SERVICES WEB</p>
          </div>
          <div className='hero__parallelogram-social-networks'>
            <SocialNetworks width='40rem' height='40rem' color='white' />
          </div>
          <div className='hero__parallelogram-information'>
            <p>mazzkitchen@mailo.com</p>
            <p>06.23.56.71.48</p>
          </div>
        </div>
      </div>
      <div className='hero__title'>
        <p>la recette idéale !</p>
      </div>
    </div>
  );
};

export default Hero;
