import { useState } from "react";
import { useUpdatePostMutation } from "../slices/postsApiSlice";
import PropTypes from 'prop-types';

const EditPost = ({postTitle, postText, postId, hideEditPostForm}) => {
  const [title, setTitle] = useState(postTitle);
  const [text, setText] = useState(postText);

  const [updatePost, { isLoading, isError }] = useUpdatePostMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, text };
      await updatePost({postId, postData}).unwrap(); // unwrap() will return the actual data from the promise

      hideEditPostForm();
    } catch (err) {
        console.log({err})
    }
  }

  return (
    <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
        id="title"
        value={title}
        placeholder="Title"
        maxLength="180"
        required
      />
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
        id="text"
        value={text}
        placeholder="Write your post..."
        maxLength="180"
        required
      />
      <button
        type="submit"
        className="bg-light-green text-dark-blue rounded py-1.5 px-1.5 hover:bg-opacity-50"
      >
        {isLoading ? "Loading..." : "Submit Edit"}
      </button>
      {isError && <p className="text-red-500">Could not edit. Please try again later.</p>}
    </form>
  );
}

EditPost.propTypes = {
  postTitle: PropTypes.string,
  postText: PropTypes.string,
  postId: PropTypes.string,
  hideEditPostForm: PropTypes.func,
};

export default EditPost;