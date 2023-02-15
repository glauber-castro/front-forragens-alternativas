import {AiOutlineSearch} from "react-icons/ai"

import "./searchBar.css"

const SearchBar = ({ searchBar }) => {
    return (
        <div className="searchPosition">
            <input
                className="estiloSearch"
                type="text"
                onChange={searchBar}
            />
            <AiOutlineSearch className="estileLupa" />
        </div>
    )
}

export default SearchBar;