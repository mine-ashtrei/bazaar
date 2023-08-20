// import { logger } from "../logger";

export interface ReturnMessage {
  summary: string;
  userAction: string;
  description: string;
}

export class ErrorMessage extends Error {
  retMessage: ReturnMessage;
  msg: any;

  constructor(msg: any, retMessage: ReturnMessage) {
    super(msg);
    this.retMessage = retMessage;
    this.msg = msg;
    console.log(msg);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ErrorMessage.prototype);
  }
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface PaginationResult<T> {
  values: T[];
  total: number;
}
