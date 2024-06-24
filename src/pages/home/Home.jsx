import Posts from "../posts/Posts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* post */}
      <div className="container mx-auto max-w-[1200px] w-[100%] lg-w[88%] px-0 pb-0 ">
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Home;
