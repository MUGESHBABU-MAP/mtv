import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';

interface PlayerProps {
  url: string;
  userAgent: string | null;
  referrer: string | null;
}

const Player = ({ url, userAgent, referrer }: PlayerProps) => {
  // The 'config' prop for ReactPlayer is passed to the underlying player library.
  // For HLS streams (which we are forcing), this is hls.js.
  const config = {
    file: {
      forceHLS: true,
      hlsOptions: {
        // We can use xhrSetup to modify the XHR object before the request is made.
        // This allows us to set custom headers like User-Agent.
        xhrSetup: (xhr: any) => {
          if (userAgent) {
            xhr.setRequestHeader('User-Agent', userAgent);
          }
        },
      },
    },
  };

  // Note: The 'referrer' header cannot be set programmatically on XHR requests
  // due to browser security restrictions. While the 'referrer' property exists in the
  // iptv-org data, we cannot use it here. The browser will automatically set a
  // Referer header based on the document's referrer policy.

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