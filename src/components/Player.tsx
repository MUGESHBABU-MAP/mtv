import ReactPlayer from 'react-player'

interface PlayerProps {
  url: string;
}

const Player = ({ url }: PlayerProps) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing
        controls
      />
    </div>
  )
}

export default Player;