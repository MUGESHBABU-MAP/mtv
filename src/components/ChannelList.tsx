interface Channel {
  name: string;
  url: string;
  logo: string;
}

interface ChannelListProps {
  channels: Channel[];
  onChannelSelect: (url: string) => void;
}

const ChannelList = ({ channels, onChannelSelect }: ChannelListProps) => {
  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.name} onClick={() => onChannelSelect(channel.url)}>
            <img src={channel.logo} alt={channel.name} width="50" />
            <span>{channel.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelList;
