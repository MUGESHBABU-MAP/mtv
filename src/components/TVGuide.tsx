import Player from './Player';
import ChannelList from './ChannelList';

interface Channel {
  name: string;
  url: string;
  logo: string;
}

interface TVGuideProps {
  currentUrl: string;
  channels: Channel[];
  onChannelSelect: (url: string) => void;
}

const TVGuide = ({ currentUrl, channels, onChannelSelect }: TVGuideProps) => {
  return (
    <div className="tv-guide">
      <Player url={currentUrl} />
      <ChannelList channels={channels} onChannelSelect={onChannelSelect} />
    </div>
  );
};

export default TVGuide;