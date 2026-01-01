import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';

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

  const handleError = (error: any) => {
    console.error('Player Error:', error);
    toast.error('Failed to load stream. This can happen if the stream is offline, geo-blocked, or has technical restrictions (CORS).');
  }

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
        onError={handleError}
      />
    </div>
  )
}

export default Player;