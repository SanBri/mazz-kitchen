import Link from "next/link";

import Button from "./button";

const Card = ({
  title,
  children,
  icn,
  linkBack,
  textBack = "Retour",
  width = "50rem",
  marginLeft = "23rem",
}) => {
  return (
    <>
      {linkBack && (
        <div className='card__back' style={{ marginLeft: marginLeft }}>
          <Link href={linkBack}>
            <a>
              <Button className='btn'>
                <i
                  style={{ color: "black" }}
                  className='fas fa-chevron-left'
                ></i>{" "}
                {textBack}
              </Button>
            </a>
          </Link>
        </div>
      )}
      <div className='card' style={{ width: width }}>
        {title && icn && (
          <div className='card__title'>
            <h3>
              {icn && <i className={icn}></i>} {title}
            </h3>
          </div>
        )}

        <div className='card__content'>{children}</div>
      </div>
    </>
  );
};

export default Card;
