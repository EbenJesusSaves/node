-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL DEFAULT 'default@email.com',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'default_role';
