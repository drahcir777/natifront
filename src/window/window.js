import React from 'react';
import { Launcher } from 'react-chat-window'

export default function window() {


  const onMessageWasSent = () => {

  }


  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageWasSent}
        // messageList={ }
        showEmoji
      />
    </div>
  )
}