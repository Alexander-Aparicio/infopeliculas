import LogoTheMovieDB from "./LogoApiRest"

const Footer = ({children})=>{
    return(
        <footer className="text-white w-full flex justify-center border-t items-center p-t-3 flex-col">
                <LogoTheMovieDB />
            <span className="border-t w-full text-center p-4">{children}</span>
        </footer>
    )
}

export default Footer