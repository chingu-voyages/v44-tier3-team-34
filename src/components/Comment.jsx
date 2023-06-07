import { useGetProfileQuery } from "../slices/profilesApiSlice";
import timeSinceDate from "../utilities/timeSinceDate";
import { FiEdit, AiFillDelete } from "react-icons/all";


const Comment = ({ comment }) => { 
  // get the comment's author's name
  const { data: profile } = useGetProfileQuery(comment.author);

  const { durationInMinutes, duration } = timeSinceDate(comment.createdAt);

  return (
    <div className="p-2 mx-4 border-t-2 border-light-green bg-[#FAF9F6]">
      <div className="flex justify-between">
        <div className="flex gap-2">
            <div className="rounded-full">
                <img src="src/assets/placeholder.png" alt={profile?.name || "profile picture"} className="rounded-full h-10 w-10 object-cover"/>
            </div>
            <div className="flex gap-2 items-center">
              <span>{profile?.name}</span>
              <span className="text-sm text-gray-500">
                {durationInMinutes > 0 ? `${duration} ago` : "Just Commented"}
              </span>
            </div>
        </div>
        <ul className="flex gap-2">
            <li><FiEdit/></li>
            <li>
              <AiFillDelete 
                className="cursor-pointer hover:text-red-500"
              />
            </li>
        </ul>
      </div>
      <p>{comment.text}</p>
    </div>
  );
}

export default Comment;