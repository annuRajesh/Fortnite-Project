const Card=({imageLink,description})=>{
    return(
    <div className="flex flex-col gap-4  flex-1">
        <img  className="object-cover w-full aspect-square" src={imageLink} alt=""  />
        <p className="text-white text-lg text-center p-2">{description}</p>
    </div>
    )
}
export default Card
