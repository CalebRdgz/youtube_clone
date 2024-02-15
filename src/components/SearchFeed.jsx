import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]); //new state for videos used for .then for fetchFromAPI
  const { searchTerm } = useParams(); //this will be populated into what we enter in url bar after /search/

  //make use of the fetchFromAPI function using useEffect hook
  //call fetchFromAPI as soon as our feed loads, because we want to immediately fetch the data
  //useEffect = life-cycle hook, get called when the component initially loads
  //re-call our API to give us the searchTerm videos when we type into the searchbar
  useEffect(() => {
    //pass the remainder of the URL we want to call
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    }); //.then executed when we call the function, and once it returns a promise that results into a successful return
  }, [searchTerm]); //dependency array = updates every time we search for something (searchTerm)

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      {/* render the videos we typed into the searchTerm out to the feed */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
