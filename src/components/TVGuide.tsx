import Player from './Player';
import ChannelList from './ChannelList';

interface Channel {
  id: string;
  name: string;
  logo: string | null;
  url: string;
  user_agent: string | null;
  referrer: string | null;
}

interface TVGuideProps {
  currentChannel: Channel | null;
  channels: Channel[];
  onChannelSelect: (channel: Channel) => void;
}

const TVGuide = ({ currentChannel, channels, onChannelSelect }: TVGuideProps) => {
  return (
    <div className="tv-guide">
      <div className="player-container">
        {currentChannel ? (
          <Player
            url={currentChannel.url}
            userAgent={currentChannel.user_agent}
            referrer={currentChannel.referrer}
          />
        ) : (
          <div className="player-placeholder">
            <h2>Select a channel to start watching</h2>
          </div>
        )}
        <div className="player-note">
          Note: Some streams may not be playable due to technical or geographic restrictions.
        </div>
      </div>
      <ChannelList channels={channels} onChannelSelect={onChannelSelect} />
    </div>
  );
};

export default TVGuide;