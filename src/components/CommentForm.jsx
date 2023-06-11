import { useState } from "react";
import { useAddCommentMutation } from "../slices/postsApiSlice";
import PropTypes from 'prop-types';

const CommentForm = ({postId, hideCommentForm, displayComments}) => {
  const [text, setText] = useState('');

  const [createComment, { isLoading, isError }] = useAddCommentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createComment({ postId, text}).unwrap(); // unwrap() will return the actual data from the promise
      setText('');
      hideCommentForm();
      displayComments();
    } catch (err) {
        console.log({err})
    }
  }

  return (
    <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-4">
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
        id="text"
        value={text}
        placeholder="Write your comment..."
        maxLength="180"
        required
      />
      <button
        type="submit"
        className="bg-light-green text-dark-blue rounded py-1.5 px-1.5 hover:bg-opacity-50"
      >
        {isLoading ? "Loading..." : "Comment"}
      </button>
      {isError && <p className="text-red-500">Could not submit. Please try again later.</p>}
    </form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string, 
  hideCommentForm: PropTypes.func, 
  displayComments: PropTypes.func,
};

export default CommentForm;