import Button from "../common/button";
import SocialNetworks from "../common/socialNetworks";
import Icon from "../common/icon";

const TeamCard = ({
  image,
  name,
  job,
  text,
  icons = {},
  buttonText = "Références",
}) => {
  return (
    <div className='team-card'>
      <div className='team-card__photo'>
        <div className='image'>
          <Icon src={image} width='100%' height='100%' />
        </div>
      </div>
      <div className='team-card__name'>
        <h5>{name}</h5>
      </div>
      <div className='team-card__job'>
        <p>{job}</p>
      </div>
      <div className='team-card__text'>
        <p>{text}</p>
      </div>
      <div className='team-card__social-networks'>
        <SocialNetworks icons={icons} />
      </div>
      <div className='team-card__button'>
        <Button children={buttonText} />
      </div>
    </div>
  );
};

export default TeamCard;
