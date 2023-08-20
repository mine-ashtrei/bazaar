import { ReturnMessage } from "../src/common/models";

export const checkMessage = (res: any, message: ReturnMessage) => {
  expect(res).toHaveProperty("description", message.description);
  expect(res).toHaveProperty("userAction", message.userAction);
  expect(res).toHaveProperty("summary", message.summary);
};
