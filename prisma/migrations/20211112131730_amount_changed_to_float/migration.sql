/*
  Warnings:

  - You are about to alter the column `amount` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accountId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "type" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Activity_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Activity" ("accountId", "amount", "createdAt", "description", "id", "type") SELECT "accountId", "amount", "createdAt", "description", "id", "type" FROM "Activity";
DROP TABLE "Activity";
ALTER TABLE "new_Activity" RENAME TO "Activity";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
