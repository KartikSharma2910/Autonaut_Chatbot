import { FreeText } from "components/messages";
import { ChatBubbleProps } from "types/chat-bubble";
import { Bubble } from "./styles";

const ChatBubble = ({ chats }: ChatBubbleProps) => {
  return (
    <Bubble isResponse={chats.isResponse}>
      <FreeText message={chats.text} timestamp={chats.timestamp} />
    </Bubble>
  );
};

export default ChatBubble;
