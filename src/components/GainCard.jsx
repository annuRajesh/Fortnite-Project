const GainCard=({number,description})=>{
    return(
        <div className="flex flex-col items-center  gap-4">
            <p className="text-white text-6xl">
                {number}
            </p>
            <p className="text-white  max-w-[160px] text-center">
                {description}
            </p>
        </div>
    )
}
export default GainCard