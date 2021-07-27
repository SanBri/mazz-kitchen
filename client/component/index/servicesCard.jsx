import Icon from "../common/icon";

const ServicesCard = ({ icn, number, services }) => {
  return (
    <div className='services-card'>
      <div className='services-card__above'>
        <img src={`/images/services/${icn}`} />
      </div>
      <div
        className='services-card__below'
        style={{
          backgroundImage: `url(/images/services/${number}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ul>
          {services.map((service) => (
            <li key={service}>
              <i className='fas fa-caret-right'></i> {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
