import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import TVGuide from './components/TVGuide';
import ChannelTable from './components/ChannelTable';
import { useChannels } from './hooks/useChannels';
import { useState, useMemo } from 'react';

interface Channel {
  id: string;
  name: string;
  logo: string | null;
  url: string;
  user_agent: string | null;
  referrer: string | null;
}

function App() {
  const { channels, loading, error } = useChannels();
  const [currentStream, setCurrentStream] = useState<Channel | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChannelSelect = (channel: Channel) => {
    setCurrentStream(channel);
  };

  const filteredChannels = useMemo(() => {
    return channels.filter(channel =>
      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [channels, searchQuery]);

  const ChannelTableWrapper = () => {
    const navigate = useNavigate();

    const handlePlay = (channel: Channel) => {
      setCurrentStream(channel);
      navigate('/');
    };

    return <ChannelTable channels={filteredChannels} onChannelSelect={handlePlay} />;
  }

  if (loading) {
    return <div>Loading channels...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router basename="/mtv">
      <nav>
        <Link to="/">TV Guide</Link>
        <Link to="/list">Channel List</Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <TVGuide
            currentChannel={currentStream}
            channels={filteredChannels}
            onChannelSelect={handleChannelSelect}
          />}
        />
        <Route path="/list" element={<ChannelTableWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;