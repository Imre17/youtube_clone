import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'


const ChannelDetail = () => {
  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  if(!channelDetail?.id) return 'Lodanig...'

  return (
    <Box minHeight='95vh'>  
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,206,255,1) 0%, rgba(204,0,186,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
          <ChannelCard channelDetail={ channelDetail } marginTop= '-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'}}} />
          <Videos videos={ videos }/>
      </Box>
    </Box>
  )
}

export default ChannelDetail