import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]) //new state for videos used for .then for fetchFromAPI
  //make use of the fetchFromAPI function using useEffect hook
  //call fetchFromAPI as soon as our feed loads, because we want to immediately fetch the data
  //useEffect = life-cycle hook, get called when the component initially loads
  useEffect(() => {
    //pass the remainder of the URL we want to call
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {setVideos(data.items)}) //.then executed when we call the function, and once it returns a promise that results into a successful return
  }, [selectedCategory]) //provide the dependency array and leave it empty at first meaning code only runs when page reloads

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* The Box component is a generic, theme-aware container with access to CSS utilities from MUI System. */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Change the title of the feed by passing the necessary states into the Sidebar */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        {/* Use typography to present your design and content as clearly and efficiently as possible. */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2024 Caleb Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
