interface Channel {
  id: string;
  name: string;
  logo: string | null;
  url: string;
  user_agent: string | null;
  referrer: string | null;
}

interface ChannelListProps {
  channels: Channel[];
  onChannelSelect: (channel: Channel) => void;
}

const ChannelList = ({ channels, onChannelSelect }: ChannelListProps) => {
  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id} onClick={() => onChannelSelect(channel)}>
            {channel.logo && <img src={channel.logo} alt={channel.name} width="50" />}
            <span>{channel.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelList;
