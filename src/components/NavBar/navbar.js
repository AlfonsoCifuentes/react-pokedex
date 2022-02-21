import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import DrawerMenu from '../Menu/DrawerMenu';
import { SearchContext } from '../SearchContext/SearchContext';
import { useNavigate } from 'react-router-dom';




const NavBar = () => {
  const navigate = useNavigate();
  let { searchInput, setSearchInput, enterPressed, setEnterPressed } = useContext(SearchContext)
  

  const handleEnter = (event) => {
    if (event.key === "Enter"){
      setEnterPressed(true)
      navigate("search")
    }
  }

  return (



    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
 
          <DrawerMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            POKEDEX
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(event) => {
                setSearchInput(event.target.value)
              }}
              onKeyUp={(event) => handleEnter(event)}
              placeholder="Search Pokemon"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar