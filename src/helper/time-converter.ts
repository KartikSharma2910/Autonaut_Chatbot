const timeConverter = (time: string | number | Date): string => {
  const date = new Date(time);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const readableTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return readableTime;
};

export { timeConverter };
