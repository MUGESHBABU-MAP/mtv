interface Channel {
  name: string;
  url: string;
  logo: string;
}

interface ChannelTableProps {
  channels: Channel[];
  onChannelSelect: (url: string) => void;
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
            <tr key={channel.name}>
              <td><img src={channel.logo} alt={channel.name} width="50" /></td>
              <td>{channel.name}</td>
              <td>
                <button onClick={() => onChannelSelect(channel.url)}>Play</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChannelTable;