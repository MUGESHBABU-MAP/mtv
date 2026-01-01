interface Channel {
  id: string;
  name: string;
  logo: string | null;
  url: string;
  user_agent: string | null;
  referrer: string | null;
}

interface ChannelTableProps {
  channels: Channel[];
  onChannelSelect: (channel: Channel) => void;
}

const ChannelTable = ({ channels, onChannelSelect }: ChannelTableProps) => {
  return (
    <div className="channel-table">
      <h2>Channel List</h2>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id}>
              <td>{channel.logo && <img src={channel.logo} alt={channel.name} width="50" />}</td>
              <td>{channel.name}</td>
              <td>
                <button onClick={() => onChannelSelect(channel)}>Play</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChannelTable;