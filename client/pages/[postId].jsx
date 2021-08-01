import Section from "../component/common/section";
import Card from "../component/common/card";
import SinglePost from "../component/post/SinglePost";
import Alert from "../component/layout/Alert.jsx";

const Post = ({ post }) => {
  return (
    <Section id='postSection' minHeight='0' padding='8rem 8rem 2rem 8rem'>
      <Alert />
      <Card
        linkBack={"/posts"}
        textBack='Retour aux articles'
        width='auto'
        marginLeft='0'
      >
        <SinglePost post={post} />
      </Card>
    </Section>
  );
};

// const URL = "http://localhost:5000";
const URL = "https://mazz-kitchen.herokuapp.com";

export async function getStaticPaths() {
  let paths = [];
  try {
    const uri = `${URL}/api/posts/`;
    const res = await fetch(uri);
    const posts = await res.json();
    paths = posts.map((post) => ({
      params: { postId: post._id },
    }));
  } catch (err) {
    console.log(`Error fetching ressources: `, err);
  }
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const uri = `${URL}/api/posts/${params.postId}`;
  const res = await fetch(uri);
  const data = await res.json();
  return { props: { post: data } };
};

export default Post;
