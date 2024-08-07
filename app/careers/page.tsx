import React from 'react'
import VideoSection from '../components/VideoSection'
import ScrollOnLoad from '../components/utils/ScrollOnLoad'

const page = () => {
  return (
    <div>
      <VideoSection videoSrc={'/seattleVid2.webm'} size={'1/3'}  />
      <ScrollOnLoad scrollPosition={150}/>
    </div>
  )
}

export default page