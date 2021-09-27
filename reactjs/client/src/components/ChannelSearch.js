import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { ResultsDropdown } from './';

const ChannelSearch = ({ setToggleContainer }) => {

    const { client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([]);
    const [directChannels, setdirectChannels] = useState([]);

    useEffect(() => {
       if (!query) {
           setTeamChannels([]);
           setdirectChannels([]);
       }
    }, [query])

    const getChannels = async (text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete: text },
                members: { $in: [client.user.id]}
            });
            const userResponse = client.queryUsers({
                id: { $ne: client.userID },
                name: { $autocomplete: text }
            });

            const [channels, { users }] = await Promise.all([channelResponse, userResponse]);

            if (channels.length) setTeamChannels(channels);
            if (users.length) setdirectChannels(users);

        } catch (err) {
            setQuery('');
        }
    }

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setQuery(e.target.value);

        getChannels(e.target.value);
    }

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchRoundedIcon />
                </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query} 
                    onChange={onSearch} 
                />
            </div>
            { query && (
                <ResultsDropdown 
                    teamChannels={teamChannels}
                    directChannels={directChannels}
                    loading={loading}
                    setChannel={setChannel}
                    setQuery={setQuery}
                    setToggleContainer={setToggleContainer}
                />
            )}
        </div>
    )
}

export default ChannelSearch
