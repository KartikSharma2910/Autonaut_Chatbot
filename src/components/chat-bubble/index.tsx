import { ChatBubbleProps } from "types/chat-bubble";
import { Bubble } from "./styles";

const ChatBubble = ({ chats }: ChatBubbleProps) => {
  return <Bubble isResponse={chats.isResponse}>{chats.message}</Bubble>;
};

export default ChatBubble;
