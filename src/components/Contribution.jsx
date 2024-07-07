import GainCard from "./GainCard";
const Contribution=()=>{
    const gains = [
        { number: "5M", description: "Daily User Engagements" },
        {
          number: "$500K",
          description: "Revenue Surge for an Platform",
        },
        {
          number: "10X",
          description: "ROAS on all our marketing campaigns",
        },
      ];
    return(
        <>
       <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-white text-6xl font-light">
            Our Contribution
        </h2>
        <p className="text-white mx-auto pt-10 pb-20  text-xl text-center font-light font-poppins">
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <div className="  flex flex-col md:flex-row  justify-center gap-24">
        {gains.map((item,index) =>
          <GainCard key={index}  number={item.number} description={item.description} />
        
        )}
        
      </div>
       </div>
        </>
    )
}
export default Contribution

