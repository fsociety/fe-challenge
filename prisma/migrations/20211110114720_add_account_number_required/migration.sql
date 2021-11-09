-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "currencySign" TEXT NOT NULL,
    "accountNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Account" ("accountNumber", "createdAt", "currency", "currencySign", "id", "name") SELECT coalesce("accountNumber", 0) AS "accountNumber", "createdAt", "currency", "currencySign", "id", "name" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
