import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';
import 'stream-chat-react/dist/css/index.css';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

const cookies = new Cookies();

const apiKey = 'f5ehqb947wx4';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
    client.connectUser({
        name: cookies.get('username'),
        id: cookies.get('userId'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword')
    }, authToken)
}

const App = () => {

    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth />

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="theme dark">
                <ChannelListContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}

                />
                <ChannelContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
    )
}

export default App
