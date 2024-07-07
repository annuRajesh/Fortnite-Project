import Card from "./Card.jsx";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
const Features = () => {
  const features = [
    {
      imgsrc: image2,
      description:
        "Explore Large, Destructible Environments Where No Two Games Are Ever The Same",
    },
    {
      imgsrc: image3,
      description:
        "Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale",
    },
    {
      imgsrc: image4,
      description:
        "Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres",
    },
  ];

  return (
    <>
    <div className="container mx-auto lg:max-w-5xl">
      <div className="flex flex-col  my-20 justify-center gap-10  py-12 md:flex-row">
        {features.map((item,index) => (
          <Card key={index} imageLink={item.imgsrc} description={item.description} />
        ))}
      </div>
      </div>
    </>
  );
};
export default Features;
