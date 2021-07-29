import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";

import { addPost, addTag, getPost } from "../../actions/post";
import Input from "../common/input";
import Button from "../common/button";

const PostForm = ({ id }) => {
  const dispatch = useDispatch();

  const [textContent, setTextContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "",
    tags: [],
  });

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, []);

  const post = useSelector((state) => state.postReducer.post);

  useEffect(() => {
    if (post) {
      setFormData((formData) => ({
        ...formData,
        title: post.title,
        text: post.text,
        category: "",
        tags: post.tags,
      }));
    }
  }, [post]);

  const { title, text, category, tags } = formData;

  const options = ["catégorie A", "catégorie B", "catégorie C"];

  const router = useRouter();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const textChange = (e) => {
    setTextContent(e);
  };

  const addTagClick = (e) => {
    e.preventDefault();
    if (document.getElementById("tags").value !== "") {
      dispatch(addTag(document.getElementById("tags").value));
      setFormData({ ...formData, tags });
      document.getElementById("tags").value = "";
    }
  };

  const onSubmit = (e, status) => {
    e.preventDefault();
    formData.status = status;
    if (textContent !== "") {
      formData.text = textContent;
    }
    if (!id) {
      dispatch(addPost(formData, status));
    } else {
      dispatch(addPost(formData, status, id, true));
    }
    formData.title !== "" && formData.text !== ""
      ? router.push("/dashboard-posts")
      : "";
  };

  return (
    <div className='post-form'>
      <form id='postForm'>
        <Input
          name='title'
          label='Titre'
          placeholder="Le titre de l'article"
          type='text'
          value={title}
          onChange={(e) => onChange(e)}
        />
        <Editor
          apiKey='cjgjybypx0spctvhpkvjg6unu89di4hkke40mpc2xpisiu5g'
          name='text'
          label='Contenu'
          initialValue={text}
          onEditorChange={(e) => textChange(e)}
          init={{
            plugins: "link image code",
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright | code",
          }}
        />
        {/* <Input
          name='text'
          label='Contenu'
          placeholder='Rédigez un article...'
          type='textarea'
          value={text}
          onChange={(e) => onChange(e)}
        /> */}
        <Input
          name='category'
          label='Catégorie'
          type='select'
          options={options}
          selected={category}
          onChange={(e) => onChange(e)}
          required={false}
        />
        <button onClick={(e) => addTagClick(e)}>Ajouter</button>
        <Input
          name='tags'
          label='Tags'
          type='text'
          id='tags'
          required={false}
        />
        {tags && tags.length > 0 ? (
          <div className='tags-block'>
            {tags.map((tag) => (
              <div key={tag} className='tags-block__item'>
                {tag}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className='post-form__buttons'>
          <Button
            type='submit'
            id='Publié'
            className='btn add-post'
            onClick={(e) => onSubmit(e, "Publié")}
          >
            Publier l'article
          </Button>
          <Button
            type='submit'
            id='Brouillon'
            className='btn save-post'
            onClick={(e) => onSubmit(e, "Brouillon")}
          >
            Enregister en brouillon
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
