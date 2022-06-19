-- AlterTable
ALTER TABLE "Activity" ADD COLUMN "category" TEXT;

-- CreateTable
CREATE TABLE "ActivityCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
