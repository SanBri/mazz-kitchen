import Link from "next/link";

import { useSelector } from "react-redux";

import SocialNetworks from "../common/socialNetworks";
import Actions from "../layout/Actions";

const PostCard = ({ post }) => {
  const { _id, title, text, image } = post;
  const previewText = text.substr(0, 350) + `...`;

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  return (
    <div className='post-card'>
      <div className='post-card__content'>
        <div className='post-card__content__title'>
          <Link href={"/" + _id}>
            <a>
              <h4>{title}</h4>
            </a>
          </Link>
        </div>
        <div className='post-card__content__line'></div>
        <Link href={"/" + _id}>
          <a>
            <div
              className='post-card__content__text'
              dangerouslySetInnerHTML={{ __html: previewText }}
            ></div>
          </a>
        </Link>
        <div className='post-card__content__buttons'>
          <div className='post-card__content__buttons__social-networks'>
            <SocialNetworks width='30rem' height='30rem' />
          </div>
          {isAuthenticated && (
            <div className='post-card__content__buttons__administration'>
              <Actions id={_id} fontSize='1.9rem' />
            </div>
          )}
        </div>
      </div>
      <div className='post-card__image'></div>
      <Link href={"/" + _id}>
        <a>
          <div className='post-card__arrow'>
            <i className='fas fa-chevron-left'></i>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
