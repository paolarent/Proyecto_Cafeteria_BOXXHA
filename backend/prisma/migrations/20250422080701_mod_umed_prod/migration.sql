/*
  Warnings:

  - The values [12oz,16oz] on the enum `producto_u_med` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `u_med` ENUM('pza', 'oz') NOT NULL;
