import React, { useState } from 'react'

export const SearchContext = React.createContext(null);

export const SearchProvider = ({children}) => {
    const [searchInput, setSearchInput] = useState("");
    const [enterPressed, setEnterPressed] = useState(false);
  


    const search = {
        enterPressed,
        setEnterPressed,
        searchInput,
        setSearchInput,
    }

    return <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
}