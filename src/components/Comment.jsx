const Comment = ({ comment }) => { 
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-2 items-center">
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-semibold">{comment.author}</p>
          <p className="text-sm text-gray-500">{comment.createdAt}</p>
        </div>
      </div>
      <p className="text-lg">{comment.text}</p>
    </div>
  );
}

export default Comment;