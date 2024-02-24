import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import Videos from "./Videos"

import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2},
        color: "#fff"
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        style={{
          alignText: 'center',
          padding: '3rem'
        }}
      >
        <Typography variant="h5"
        fontWeight="bold"  mb={2} 
        sx={{
          color:'white',
          alignText: 'center'
        }}
        > 
          {selectedCategory} videos
          <Videos videos={videos}/>
        </Typography>

      </Box>
    </Stack>  
  )
} 

export default Feed