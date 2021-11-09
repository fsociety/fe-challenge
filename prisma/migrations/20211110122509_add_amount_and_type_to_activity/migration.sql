/*
  Warnings:

  - Added the required column `amount` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Activity_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Activity" ("accountId", "createdAt", "description", "id") SELECT "accountId", "createdAt", "description", "id" FROM "Activity";
DROP TABLE "Activity";
ALTER TABLE "new_Activity" RENAME TO "Activity";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
