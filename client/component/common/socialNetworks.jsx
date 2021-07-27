import Icon from "./icon"

const SocialNetworks = ({icons = {'facebook':'mazzkitchencom', 'instagram':'mazzkitchencom','twitter': 'mazzkitchencom', 'linkedin':'company/mazzkitchen/'}, color = "black", width = "40rem" , height = "40rem"}) => {

  return (
    <div className="social-networks">
      {Object.keys(icons).map((icon)=>(
        <div className="social-networks__icon" key={icon}>  
          <a href={`www.${icon}${icon === "behance" ? '.net' : '.com'}/${icons[icon]}`}>          
            <Icon 
              src={`/icons/${color}/${icon}.svg`}
              width={width}
              height={height}
              />
          </a>
        </div>
      ))}
    </div>
  )

}
export default SocialNetworks
