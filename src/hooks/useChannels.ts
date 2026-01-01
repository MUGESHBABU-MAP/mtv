import { useState, useEffect } from 'react';

interface Channel {
  id: string;
  name: string;
  logo: string | null;
  url: string;
  user_agent: string | null;
  referrer: string | null;
}

interface Stream {
  channel: string;
  url: string;
  user_agent?: string | null;
  referrer?: string | null;
}

interface ChannelData {
  id: string;
  name: string;
  logo: string | null;
}

export const useChannels = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const [streamsRes, channelsRes] = await Promise.all([
          fetch('https://iptv-org.github.io/api/streams.json'),
          fetch('https://iptv-org.github.io/api/channels.json'),
        ]);

        if (!streamsRes.ok || !channelsRes.ok) {
          throw new Error('Failed to fetch channel data');
        }

        const streams: Stream[] = await streamsRes.json();
        const channelsData: ChannelData[] = await channelsRes.json();

        const channelsMap = new Map<string, ChannelData>();
        for (const channel of channelsData) {
          channelsMap.set(channel.id, channel);
        }

        const combinedChannels: Channel[] = streams
          .map(stream => {
            const channelInfo = channelsMap.get(stream.channel);
            if (!channelInfo) return null;

            return {
              id: channelInfo.id,
              name: channelInfo.name,
              logo: channelInfo.logo,
              url: stream.url,
              user_agent: stream.user_agent || null,
              referrer: stream.referrer || null,
            };
          })
          .filter((channel): channel is Channel => channel !== null);

        setChannels(combinedChannels);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  return { channels, loading, error };
};
