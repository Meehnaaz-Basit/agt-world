import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import PostTab from "./tab/PostTab";
import PostCard from "./postCards/PostCard";
// images
import postImage1 from "./../../assets/post.png";
import userImage from "./../../assets/Rectangle 3.png";
import postImage2 from "./../../assets/Rectangle 5.png";

const Posts = () => {
  return (
    <div className="mt-6">
      {/* post tabs and bth */}
      <div className="flex justify-between">
        {/*  */}
        <div className="">
          <PostTab></PostTab>
        </div>

        {/*  */}
        <div className="flex gap-3">
          {/*  */}
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Write A Post <IoMdArrowDropdown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <button className="btn">
              {" "}
              <MdGroupAdd /> Join Group
            </button>
          </div>
        </div>
      </div>
      {/* post tabs and bth */}

      {/* post and recommended group */}
      <div className="flex">
        <div className="basis-2/3 ">
          {/* card */}
          <PostCard
            postImg={postImage1}
            category="✍️ Article"
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            paragraph="I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…"
            userImg={userImage}
            userName="Sarthak Kamra"
            viewCount="1.4k"
          ></PostCard>
          <PostCard
            postImg={postImage2}
            category="🔬️ Education"
            title="Tax Benefits for Investment under National Pension Scheme launched by Government"
            paragraph="I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…"
            userImg={userImage}
            userName="Sarah West"
            viewCount="1.4k"
          ></PostCard>
        </div>
        <div className="basis-1/3 bg-blue-500 h-96"></div>
      </div>
    </div>
  );
};

export default Posts;
