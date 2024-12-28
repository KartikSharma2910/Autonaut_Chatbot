export type PinCard = {
  journey: string;
  enablePin: boolean;
  pin: {
    type: string;
    selection: string;
    metadata: {
      title: string;
      label1: string;
      label2: string;
      imageUrl: string;
      fields: {
        name: string;
        value: string;
      }[];
    };
    userInteractions: Array<{
      type: string;
      key: string;
      value: string;
      url: string;
      content: string;
      metadata?: { [key: string]: unknown };
    }>;
  };
};

export type Pin = {
  type: string;
  selection: string;
  metadata: {
    title: string;
    label1: string;
    label2: string;
    imageUrl: string;
    fields: {
      name: string;
      value: string;
    }[];
  };
  userInteractions: Array<{
    type: string;
    key: string;
    value: string;
    url: string;
    content: string;
    metadata?: { [key: string]: unknown };
  }>;
};
