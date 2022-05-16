
const LogoTheMovieDB = ()=>{

    return (
        <figure className=" m-auto my-4 flex gap-5 justify-center px-5">
            <img className="w-20" src="./imgs/the-movie-db.svg" alt='Logo de The Movie DB' />
            <figcaption className="text-white">
                <a className="text-white cursor-pointer" href="https://www.themoviedb.org/" target={'_blank'} rel='noreferrer noopener nofollow'> Esta Aplicación web usa la Api-Rest de datos de "The Movie DB".</a>
               
            </figcaption>
        </figure>
    )

}

export default LogoTheMovieDB