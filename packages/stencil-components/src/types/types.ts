import { TransactionReceipt } from 'viem';

export class TransactionError extends Error {
  public receipt: TransactionReceipt;

  constructor({ message, receipt }: { message: string, receipt: TransactionReceipt }) {
    super(message);
    this.receipt = receipt;
  }
};