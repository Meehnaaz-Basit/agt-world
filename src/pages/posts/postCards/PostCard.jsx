// import postImg from "./../../../assets/post.png";
import dot from "./../../../assets/dot.png";

import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
const PostCard = ({
  postImg,
  category,
  title,
  paragraph,
  userImg,
  userName,
  viewCount,
}) => {
  return (
    <div className="my-4  ">
      <div className=" bg-base-100 w-full rounded-lg border">
        <figure>
          <img
            src={postImg}
            className="object-cover w-full h-[220px]"
            alt="post"
          />
        </figure>
        <div className="p-8">
          <div className="mb-2">
            <h1 className="text-lg font-medium">{category}</h1>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl">{title}</h1>
              <div>
                <img src={dot} alt="" />
              </div>
            </div>
            <p className="text-[#5C5C5C]">{paragraph}</p>
          </div>
          <div className="flex justify-between items-center text-[#5C5C5C] mt-10">
            <div className="flex items-center gap-3">
              <img src={userImg} alt="user" />
              <h1 className="font-semibold text-lg text-black">{userName}</h1>
            </div>
            <div className="flex gap-4 items-center ">
              <div className="flex gap-1 items-center ">
                <IoEyeOutline />
                <span>{viewCount} view</span>
              </div>
              <div className="bg-[##EDEEF0] p-4">
                <IoMdShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
