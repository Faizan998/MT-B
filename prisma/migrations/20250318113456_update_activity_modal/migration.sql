/*
  Warnings:

  - You are about to drop the column `type` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "transactionType" "TransactionType" NOT NULL DEFAULT 'CREDIT';

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "type";
