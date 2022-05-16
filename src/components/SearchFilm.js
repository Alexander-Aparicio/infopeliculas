import { useState } from "react"
import Formulario from "./miniComponents/Form"
import { InputSearch, Search } from "./miniComponents/Inputs"

const SearchFilms = ()=> {

    const [keyword, setKeyword] = useState({film:''})

    return(
        <Formulario keyword={keyword}>
            <InputSearch keyword={keyword} setKeyword={setKeyword} >Busca tu película</InputSearch>        
            <Search>Buscar</Search>   
        </Formulario>
    )
}

export default SearchFilms