import image1 from "../assets/images/img1.png";

const Hero = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center  text-white text-5xl  font-[100] my-10 ">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </h1>
     <div className="flex justify-center ">
      <img className=" object-cover w-full" src={image1} alt="" />
      </div>
      
      <p className="text-white text-lg  text-center my-10  py-4 font-poppins">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you an
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <div className="flex justify-center">
        <button className="text-black bg-white border py-4 px-24">
          Visit Website
        </button>
      </div>
    </div>
  );
};
export default Hero;
