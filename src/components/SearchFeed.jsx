import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Videos from "./Videos"

import { fetchFromApi } from '../utils/fetchFromApi';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box
      style={{
        alignText: 'center',
      }}
    >
      <Typography variant="h5"
      fontWeight="bold"  mb={2} 
      sx={{
        color:'white',
        alignText: 'center'
      }}
      > 
        Search Results for: {searchTerm}
        <Videos videos={videos}/>
      </Typography>

    </Box>
  )
} 

export default SearchFeed