import { useState } from "react"


export const MusicList = ({ }) => {
  const [PlayPauseBtn, SetPlayPauseBtn] = useState(true)
  const onClickHandler = (boolean: boolean) => {

  }

  return (
    <div className='flex'>
      <div className="trackImg"></div>
      <div className="flex">
        <div className="trackPath"></div>
        <div className="btns">
          <button onClick={() => onClickHandler(PlayPauseBtn)}></button>
        </div>
      </div>
    </div>
  )
}


