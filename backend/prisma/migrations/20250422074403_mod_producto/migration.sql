/*
  Warnings:

  - The values [bebida] on the enum `producto_tipo_prod` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `producto_extra` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sabor` to the `producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `producto_extra` DROP FOREIGN KEY `fk_e_producto_extra`;

-- DropForeignKey
ALTER TABLE `producto_extra` DROP FOREIGN KEY `fk_p_producto_extra`;

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `sabor` VARCHAR(15) NOT NULL,
    MODIFY `tipo_prod` ENUM('bebidac', 'bebidaf', 'postre', 'nuevo') NOT NULL;

-- DropTable
DROP TABLE `producto_extra`;
