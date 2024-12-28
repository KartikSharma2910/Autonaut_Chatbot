import { MessageTypesUnion } from "./message-type";
import { PinCard } from "./pin-card";

export type ListItem = {
  url: string | null;
  key: string;
  value: string;
  imageUrl?: string | null;
  metadata?: { [key: string]: unknown };
  userInteractions?: undefined[];
};

export type ChatContent = {
  id: string;
  text: string;
  visible: boolean;
  type?: MessageTypesUnion | string;
  selection?: string;
  list: ListItem[];
  isResponse?: boolean;
  metadata?: { [key: string]: unknown };
  entities?: { [key: string]: unknown };
  timestamp: string;
  contents?: ChatContent[];
};

export type ResponseData = {
  data: {
    message: ChatContent;
    sessionId?: string;
  };
};

export type ChatContext = {
  data: ChatContent[];
  metaData: PinCard | { [key: string]: unknown };
  timestamp: string;
  sessionId?: string;
};

export type CustomChat = {
  type: MessageTypesUnion | string;
  text: string;
  timestamp: string;
};

export type InterceptorResponse = {
  sessionId?: string;
  timestamp?: string;
  metaData?: PinCard | { [key: string]: unknown };
  data: CustomChat[];
};

export type HistoryResponse = {
  id: string;
  text: string;
  visible: boolean;
  type: string;
  selection: string;
  list?: ListItem[];
  metadata?: { [key: string]: unknown };
  entities?: { [key: string]: unknown };
  timestamp: string;
  contents?: undefined | null;
  isLastMessage?: boolean;
  showDate?: boolean;
  showTopImage?: boolean;
  enableFeedback?: boolean;
  batchId?: string;
  isResponse?: boolean;
  isChatHistory?: boolean;
  isLastMessageOfBatch?: boolean;
};
