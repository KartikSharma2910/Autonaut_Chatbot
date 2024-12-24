import ChatBubble from "components/chat-bubble";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { ChatsRenderer, Wrapper } from "./styles";

const Body = () => {
  const chats = useSelector((state: RootState) => state.chats);

  return (
    <Wrapper>
      <ChatsRenderer>
        {chats.map((chat, index) => (
          <ChatBubble key={index} chats={chat} />
        ))}
      </ChatsRenderer>
    </Wrapper>
  );
};

export default Body;
