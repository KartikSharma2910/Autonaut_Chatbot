import { ChatContent, CustomChat } from "types/message-response";
import {
  handleFreeText,
  handleNudge,
  handleURL,
  passToExternalComponent,
} from "./handle-chat-data";

const dataProcessor = (chat: ChatContent): CustomChat => {
  const { type, ...rest } = chat;

  switch (type) {
    case "NUDGE":
      return handleNudge(rest);
    case "FREE_TEXT":
      return handleFreeText(rest);
    case "URL":
      return handleURL(rest);
    default:
      return passToExternalComponent(type, rest);
  }
};

export { dataProcessor };
