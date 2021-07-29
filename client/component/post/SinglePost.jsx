import { useState } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

import Button from "../common/button";
import Actions from "../layout/Actions";

const SinglePost = ({ post }) => {
  const [showEditHistory, toggleShowEditHistory] = useState(false);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const { _id, title, text, date, edited } = post;
  const { name } = post.author;

  return (
    <div className='single-post'>
      {isAuthenticated && (
        <div className='single-post__administration'>
          <p>
            <span className='discret'>Publié par {name}</span>
          </p>
          <div className='single-post__administration__actions'>
            <Actions id={_id} fontSize='1.9rem' />
          </div>
        </div>
      )}
      <div className='single-post__title'>
        <h2>{title}</h2>
      </div>
      <div className='single-post__line'></div>
      <div className='single-post__date'>
        <p>
          <span className='discret'>
            Publié le <Moment format='DD/MM/YYYY'>{date}</Moment>
          </span>
        </p>
      </div>
      <div className='single-post__image'></div>
      <div
        className='single-post__text'
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      {isAuthenticated && edited.length > 0 ? (
        <div className='single-post__edit-history'>
          <Button
            onClick={() => {
              toggleShowEditHistory(!showEditHistory);
            }}
          >
            {!showEditHistory ? (
              <i class='fas fa-chevron-down'></i>
            ) : (
              <i class='fas fa-chevron-up'></i>
            )}{" "}
            Historique des modifications{" "}
          </Button>
          {showEditHistory && (
            <div className='single-post__edit-history--active'>
              <ul>
                {edited.map((edit) => (
                  <li key={edit._id}>
                    <span className='discret'>
                      Édité par {edit.author} le{" "}
                      <Moment format='DD/MM/YYYY'>{edit.date}</Moment>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SinglePost;
