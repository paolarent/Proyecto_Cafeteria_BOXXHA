/*
  Warnings:

  - The primary key for the `bebcaliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_bebidac` on the `bebcaliente` table. All the data in the column will be lost.
  - The primary key for the `bebfria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_bebidaf` on the `bebfria` table. All the data in the column will be lost.
  - You are about to drop the column `id_bebidac` on the `detalle_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `id_bebidaf` on the `detalle_pedido` table. All the data in the column will be lost.
  - Added the required column `id_bebcaliente` to the `bebcaliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_bebfria` to the `bebfria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detalle_pedido` DROP FOREIGN KEY `fk_bebidac_detalleped`;

-- DropForeignKey
ALTER TABLE `detalle_pedido` DROP FOREIGN KEY `fk_bebidaf_detalleped`;

-- DropIndex
DROP INDEX `fk_bebidac_detalleped_idx` ON `detalle_pedido`;

-- DropIndex
DROP INDEX `fk_bebidaf_detalleped_idx` ON `detalle_pedido`;

-- AlterTable
ALTER TABLE `bebcaliente` DROP PRIMARY KEY,
    DROP COLUMN `id_bebidac`,
    ADD COLUMN `id_bebcaliente` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_bebcaliente`);

-- AlterTable
ALTER TABLE `bebfria` DROP PRIMARY KEY,
    DROP COLUMN `id_bebidaf`,
    ADD COLUMN `id_bebfria` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_bebfria`);

-- AlterTable
ALTER TABLE `detalle_pedido` DROP COLUMN `id_bebidac`,
    DROP COLUMN `id_bebidaf`,
    ADD COLUMN `id_bebcaliente` INTEGER NULL,
    ADD COLUMN `id_bebfria` INTEGER NULL;

-- CreateIndex
CREATE INDEX `fk_bebidac_detalleped_idx` ON `detalle_pedido`(`id_bebcaliente`);

-- CreateIndex
CREATE INDEX `fk_bebidaf_detalleped_idx` ON `detalle_pedido`(`id_bebfria`);

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_bebidac_detalleped` FOREIGN KEY (`id_bebcaliente`) REFERENCES `bebcaliente`(`id_bebcaliente`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_bebidaf_detalleped` FOREIGN KEY (`id_bebfria`) REFERENCES `bebfria`(`id_bebfria`) ON DELETE SET NULL ON UPDATE CASCADE;
