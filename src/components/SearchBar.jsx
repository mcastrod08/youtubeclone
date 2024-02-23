import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '2px solid blue',
        pl: 2,
        boxShadow: 'none'
      }}
      placeholder="Movies"
    >
      <input
        className='search-bar'
        placeholder='Search your movie'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{
        color: 'red'
      }}>
        <Search/>
      </IconButton>

    </Paper>
  )
}

export default SearchBar