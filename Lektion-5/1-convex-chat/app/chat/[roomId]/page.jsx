
import MessageList from "./_components/message-list"
import { NewMessageForm } from "./_components/new-message-form"

function RoomPage({ params }) {
  return (
    <div >
      <MessageList roomId={params.roomId} />
      <NewMessageForm roomId={params.roomId} />
    </div>
  )
}
export default RoomPage