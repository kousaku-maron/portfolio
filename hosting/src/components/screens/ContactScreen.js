import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GiftedChat } from 'react-web-gifted-chat'
import Text from '../typography/Text'
import colors from '../../constants/colors'
import { usersCollection, getMessagesCollection, sendMessage } from '../../modules/firebase'
import { unixToDate } from '../../modules/timeFormatter'

const ContactScreen = ({ uid }) => {
  const [ rooms, setRooms ] = useState([])
  useEffect(() => {
    if(uid != null) {
      usersCollection.doc(uid).onSnapshot((snapshot) => {
        const newRooms = snapshot.data().rooms
        setRooms(newRooms)
      })
    }
    else {
      setRooms([])
    }
  }, [])

  const [ messages, setMessages ] = useState([])
  useEffect(() => {
    if(uid != null && rooms.length > 0) {
      const messagesCollection = getMessagesCollection(rooms[0])
      messagesCollection.orderBy('created_at').onSnapshot((querySnapshot) => {
        const newMessages = []
        querySnapshot.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            text: doc.data().message,
            createdAt: doc.data().created_at? unixToDate(doc.data().created_at.seconds): null,
            user: {
              id: doc.data().user,
              name: doc.data().user === uid? 'You' : 'Kosaku Kurino',
            }
          })
        })
        setMessages(newMessages.reverse())
      })
    }
    else {
      setMessages([])
    }
  }, [rooms])

  return (
    <Root>
      <RoomContainer>
        <Text
          weight='bold'
          color='inherit'
          align='left'
        >
          ルーム
        </Text>
        {rooms.map(room => (
          <Text
            key={room}
            color={colors.inherit}
            align='left'
          >
            {/* {room} */}
            Kosaku Kurino
          </Text>
        ))}
      </RoomContainer>
      <ChatContainer>
        <GiftedChat
          messages={messages}
          onSend={(_messages) => (uid != null && rooms.length > 0)? sendMessage(rooms[0], uid, _messages[0].text) : null}
          user={{
            id: uid,
            name: 'You'
          }}
        />
      </ChatContainer>
    </Root>
  )
}

const Root = styled.div`
  width: 100%
  height: 100%
  display: flex
`

const ChatContainer = styled.div`
  width: 80vw
  height: 100vh
  margin-left: 20vw
`

const RoomContainer = styled.div`
  position: fixed
  width: 20vw
  height: 100vh
  padding: 24px
  background: ${colors.default}
  color: ${colors.inherit}
`

// const SplitSpaceTemp = styled.div`
//   margin-bottom: 200px
// `


export default ContactScreen
