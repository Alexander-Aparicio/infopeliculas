import SearchFilms from "./SearchFilm"

const Header = ({children})=> {

    return(
        <header className=" fixed top-0 left-0 right-0 py-4 px-5 flex items-center justify-between shadow-lg shadow-neutral-900 z-50" >
            <p className=" text-red-500 font-bold text-3xl z-50">{children}</p>
            {  window.matchMedia("(min-width: 600px)").matches ? <SearchFilms /> : null }
        </header>
    )
}

export default Header