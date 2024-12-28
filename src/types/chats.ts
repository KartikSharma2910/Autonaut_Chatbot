import { ChatContent } from "./message-response";
import { MessageTypesUnion } from "./message-type";

export type Chat = {
  text?: string;
  timestamp?: string | number | Date;
  list?: [];
  type?: MessageTypesUnion;
  data?: ChatContent;
  sessionId?: string;
  isChatHistory?: boolean | null | undefined;
  isResponse?: boolean;
  isLastMessage?: boolean;
};
