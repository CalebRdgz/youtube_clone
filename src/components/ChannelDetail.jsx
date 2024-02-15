import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  //get the video id from the url
  const { id } = useParams();

  console.log(ChannelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setvideos(data?.items)
    );
  }, [id]); //useEffect hook re-renders whenever the id changes (dependency array)

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(216,4,224,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-110px"/>
      </Box>
      <Box display={'flex'} p={'2'}>
        <Box sx={{ mr: { sm: '100px' }}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
};

export default ChannelDetail;
