import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post";
import Link from "next/link";

const Actions = ({ id, fontSize }) => {
  const dispatch = useDispatch();

  return (
    <div className='actions-icons'>
      <Link
        href={{
          pathname: "/dashboard-create-post",
          query: { id: id },
        }}
      >
        <a>
          <i
            className='fas fa-edit'
            style={{ color: "#63b2e0", fontSize: fontSize }}
            title="Éditer l'article"
          ></i>
        </a>
      </Link>
      <i
        className='fas fa-trash-alt'
        style={{ color: "#ee3939ca", fontSize: fontSize }}
        onClick={(e) => dispatch(deletePost(id))}
        title="Supprimer l'article"
      ></i>
    </div>
  );
};

export default Actions;
