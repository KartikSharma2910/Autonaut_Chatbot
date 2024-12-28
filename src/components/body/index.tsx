import ChatBubble from "components/chat-bubble";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { ChatsRenderer, Wrapper } from "./styles";
import { useEffect } from "react";
import { fetchHistory } from "redux/thunks";

const Body = () => {
  const chats = useSelector((state: RootState) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory(undefined));
  }, []);

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
