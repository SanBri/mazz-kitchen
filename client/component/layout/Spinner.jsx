import { Fragment } from "react";
import Icon from "../common/icon";

const Spinner = () => {
  return (
    <div className='spinner'>
      <Icon
        src='/icons/yellow/spinner.svg'
        width={100}
        height={100}
        alt='Chargement...'
      />
    </div>
  );
};

export default Spinner;
