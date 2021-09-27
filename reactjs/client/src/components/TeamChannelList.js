import React from 'react'

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const TeamChannelList = ({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {

    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null;
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages' } loading...
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                {type === 'team' ? 'Channels' : 'Direct Messages' }
                </p>
                <AddCircleOutlineRoundedIcon 
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
                type={type === 'team' ? 'team' : 'messaging'}
                setToggleContainer={setToggleContainer}
                onClick={() => {
                    setCreateType(type);
                    setIsCreating((prevState) => !prevState);
                    setIsEditing(false);
                    if (setToggleContainer) setToggleContainer((prevState) => !prevState)
                }} 
                
                />
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
