import ReactPlayer from 'react-player'

interface PlayerProps {
  url: string;
  userAgent: string | null;
  referrer: string | null;
}

const Player = ({ url, userAgent, referrer }: PlayerProps) => {
  const config = {
    file: {
      forceHLS: true,
      attributes: {
        ...(userAgent && { 'user-agent': userAgent }),
        ...(referrer && { 'referrer': referrer }),
      },
    },
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing
        controls
        config={config}
      />
    </div>
  )
}

export default Player;