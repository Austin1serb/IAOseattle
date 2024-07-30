import React from 'react'
import VideoSection from '../components/VideoSection'

const page = () => {
  return (
    <div>
      <VideoSection videoSrc={'/seattleVid2.webm'} size={'1/3'} includeBrand={false} />

    </div>
  )
}

export default page