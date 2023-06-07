import { useState } from "react";
import { useAddCommentMutation } from "../slices/postsApiSlice";


const CommentForm = ({postId}) => {
  const [text, setText] = useState('');

  const [createComment, { isLoading, isError }] = useAddCommentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createComment({ postId, text}).unwrap(); // unwrap() will return the actual data from the promise
    } catch (err) {
        console.log({err})
    }
  }

  return (
    <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-9">
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
        id="text"
        value={text}
        placeholder="Write your comment..."
        required
      />
      <button
        type="submit"
        className="bg-light-green text-white rounded py-1.5 px-1.5"
      >
        Comment
      </button>
    </form>
  );
}

export default CommentForm;