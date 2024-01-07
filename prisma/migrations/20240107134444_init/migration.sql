/*
  Warnings:

  - You are about to drop the `proposals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "proposals" DROP CONSTRAINT "proposals_book_id_fkey";

-- DropForeignKey
ALTER TABLE "proposals" DROP CONSTRAINT "proposals_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "proposals" DROP CONSTRAINT "proposals_sender_id_fkey";

-- DropTable
DROP TABLE "proposals";
