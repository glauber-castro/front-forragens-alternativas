//icons
import { AiOutlineSearch } from "react-icons/ai"
import {BiFilter} from "react-icons/bi"

import "./searchBar.css"

const SearchBar = ({ searchBar }) => {
    return (
        <>
            <div className="searchPosition">
                <input
                    className="estiloSearch"
                    type="text"
                    onChange={searchBar}
                />
                <AiOutlineSearch className="estileLupa" />
                <BiFilter className="estileFilter" />

            </div>
        </>
    )
}

export default SearchBar;