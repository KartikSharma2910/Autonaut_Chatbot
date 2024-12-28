import { ChatContent } from "types/message-response";
import { MessageTypesUnion } from "types/message-type";

const handleNudge = (data: ChatContent) => {
  return {
    type: "NUDGE",
    text: data.text,
    timestamp: data.timestamp,
    list: data.list,
    isResponse: data.isResponse,
  };
};

const handleURL = (data: ChatContent) => {
  return {
    type: "URL",
    text: data.text,
    timestamp: data.timestamp,
    isResponse: data.isResponse,
    list: data?.list?.flatMap((listData) => listData?.userInteractions || []),
  };
};

const handleFreeText = (data: ChatContent) => {
  return {
    type: "FREE_TEXT",
    text: data.text,
    isResponse: data.isResponse,
    timestamp: data.timestamp,
  };
};

const passToExternalComponent = (
  type: MessageTypesUnion | string,
  data: ChatContent
) => {
  return {
    type,
    text: data.text,
    isResponse: data.isResponse,
    timestamp: data.timestamp,
    content: data,
  };
};

export { handleFreeText, handleNudge, handleURL, passToExternalComponent };
