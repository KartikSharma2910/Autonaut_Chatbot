import { dataProcessor } from "./data-processor";

const chatHistoryConvertor = (response) => {
  const chatHistory = [];

  response?.content.forEach((item) => {
    item.history.forEach((history) => {
      const responseMsgBatch = history.responseMessage;
      if (responseMsgBatch.visible) {
        const chatItems = responseMsgBatch.contents.filter(
          (item) => item.visible
        );
        const chatItemMassaged = chatItems.map((item, index) => {
          return {
            ...item,
            isLastMessage: false,
            showDate: false,
            showTopImage: false,
            enableFeedback: false,
            batchId: responseMsgBatch.id,
            isResponse: true,
            isChatHistory: true,
            isLastMessageOfBatch: index + 1 === chatItems.length,
            timestamp: responseMsgBatch.timestamp,
            entities: {
              appointmentId: responseMsgBatch.entities.appointmentId,
            },
          };
        });
        const reversedChatItemMassaged = chatItemMassaged.slice().reverse();
        chatHistory.push(...reversedChatItemMassaged);
      }

      const requestMsg = {
        ...history.requestMessage,
        isLastMessage: false,
        showDate: false,
        showTopImage: false,
        enableFeedback: false,
        isResponse: false,
        isChatHistory: true,
        isLastMessageOfBatch: true,
        timestamp: responseMsgBatch.timestamp,
        entities: {
          appointmentId: responseMsgBatch.entities.appointmentId,
        },
      };
      if (requestMsg.visible) {
        chatHistory.push(requestMsg);
      }
    });
  });

  const finalResponse = chatHistory.map(dataProcessor);
  return finalResponse.reverse();
};

export { chatHistoryConvertor };
