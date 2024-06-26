import React from 'react';
import { Channel, useChatContext, MessageSimple } from 'stream-chat-react';
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    )
  }

  const EmptyState = () => (
    <div className="channel-empty_container">
      <p className="channel-empty_first">This is the beginning of your chat history.</p>
      <p className="channel-empty_second">Send message, attachments, links, emojis and more!</p>
    </div>
  )

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing = {setIsEditing} />
      </Channel>
    </div>
  );
}

export default ChannelContainer;