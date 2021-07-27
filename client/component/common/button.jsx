import { v4 as uuidv4 } from "uuid";

const Button = ({ children, onClick, id = uuidv4(), className = "btn" }) => {
  return (
    <div id={id} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
