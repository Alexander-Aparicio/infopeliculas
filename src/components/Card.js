
const Card = ({img,age, setInfo, id})=> {

    const handleClick=()=>{
        setInfo(id)
        window.scrollTo(0,200)
    }

    return(
        <figure className=" flex flex-col flex-wrap w-36 sm:w-48 lg:w-52 xl:w-56 rounded-lg delay-100 cursor-pointer overflow-hidden border-transparent hover:border-red-600 border-2">
            <img 
            className=" w-full rounded-t-lg"
            src={img}  
            alt="card de película"
            onClick={handleClick}
            />
            <figcaption className="flex w-full justify-center py-2 bg-gray-800">
                <h2 className="text-white">{age}</h2>
            </figcaption>
        </figure>
    )
}

export default Card