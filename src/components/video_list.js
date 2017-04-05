import React from 'react';
import VideoListItem from './video_list_item';

const videoList = (props) => {

  const videoItems = props.videos.map((item)=>{
    return (
      <VideoListItem
        key = {item.etag}
        video = {item}
        onVideoSelect = {props.onVideoSelect}
      />

    )
  })



  return (

    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>

  )
}

export default videoList;
