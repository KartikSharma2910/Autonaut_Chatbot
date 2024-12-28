import axios from "axios";

const ChatService = () => {
  const autonautChat = axios.create({
    baseURL: "https://chit-chat-flow.c24.tech",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "x-channel-name": "web",
      "x-agent-type": "BUY_AGENT",
    },
  });

  const user = Object.freeze({
    senderInfo: {
      name: "ABC",
      type: "USER",
      cityCode: "3686",
      cityName: "Hyderabad",
      externalId: "KS001",
    },
  });

  const initData = {
    senderInfo: {
      name: "ABC",
      type: "USER",
      cityCode: "3686",
      cityName: "Hyderabad",
      externalId: "KS001",
    },
    journeyInfo: {},
  };

  return {
    initChat: async (data = {}) => {
      return autonautChat.post("/api/v2/messages/init", {
        ...initData,
        ...data,
      });
    },
    sendMessage: async (data = {}) => {
      return autonautChat.post("/api/v2/messages/send", { ...user, ...data });
    },
  };
};

export { ChatService };
