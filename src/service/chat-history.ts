import axios from "axios";

const ChatHistoryService = () => {
  const getChatHistory = axios.create({
    baseURL: "https://whisper-warehouse.c24.tech",
    headers: {
      "x-channel-name": "web",
    },
  });

  const defaultParams = Object.freeze({
    page: 0,
    size: 20,
    paged: true,
    sorted: true,
    agentType: "BUY_AGENT",
    sort: "requestDate,DESC",
    externalUserId: "KS001",
  });

  return {
    chatHistory: async (params) => {
      const mergedParams = { ...defaultParams, ...params };
      return getChatHistory.get("/api/v1/chats/history", {
        params: mergedParams,
      });
    },
  };
};

export { ChatHistoryService };
