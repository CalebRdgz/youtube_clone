import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  if (!videos) return "Loading...";

  return (
    <Stack direction={ direction || 'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
        {/* map through our videos: */}
        {videos.map((item, index) => (
            // for each of the videos in the videos array render a video card inside Box container:
            <Box key={index}>
              {/* category tabs could show a channel profile, or just videos: */}
              {/* if the current item has an id that points to a videoId, render the VideoCard component */}
              {item.id.videoId && <VideoCard video={item} />}
              {/* if the current item has an id that points to a channelId, render the ChannelCard component */}
              {item.id.channelId && <ChannelCard channelDetail={item} marginTop={0} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos