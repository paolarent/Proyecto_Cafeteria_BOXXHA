/*
  Warnings:

  - You are about to drop the `detalle_extra_pedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leche` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `producto_extra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `producto_leche` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `producto_sabor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `producto_tamano` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sabor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tamano` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `detalle_extra_pedido` DROP FOREIGN KEY `fk_detalleped_detext`;

-- DropForeignKey
ALTER TABLE `detalle_extra_pedido` DROP FOREIGN KEY `fk_extra_detalleext`;

-- DropForeignKey
ALTER TABLE `producto_extra` DROP FOREIGN KEY `producto_extra_id_extra_fkey`;

-- DropForeignKey
ALTER TABLE `producto_extra` DROP FOREIGN KEY `producto_extra_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `producto_leche` DROP FOREIGN KEY `producto_leche_id_leche_fkey`;

-- DropForeignKey
ALTER TABLE `producto_leche` DROP FOREIGN KEY `producto_leche_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `producto_sabor` DROP FOREIGN KEY `producto_sabor_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `producto_sabor` DROP FOREIGN KEY `producto_sabor_id_sabor_fkey`;

-- DropForeignKey
ALTER TABLE `producto_tamano` DROP FOREIGN KEY `producto_tamano_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `producto_tamano` DROP FOREIGN KEY `producto_tamano_id_tamano_fkey`;

-- DropTable
DROP TABLE `detalle_extra_pedido`;

-- DropTable
DROP TABLE `leche`;

-- DropTable
DROP TABLE `producto_extra`;

-- DropTable
DROP TABLE `producto_leche`;

-- DropTable
DROP TABLE `producto_sabor`;

-- DropTable
DROP TABLE `producto_tamano`;

-- DropTable
DROP TABLE `sabor`;

-- DropTable
DROP TABLE `tamano`;

-- CreateTable
CREATE TABLE `detalle_extra` (
    `id_detalle_extra` INTEGER NOT NULL AUTO_INCREMENT,
    `id_detalle` INTEGER NOT NULL,
    `id_extra` INTEGER NULL,
    `cantidad` INTEGER NULL,
    `precio_total` FLOAT NULL,

    INDEX `fk_detalle_detalle_extra_idx`(`id_detalle`),
    INDEX `fk_extra_detalle_extra_idx`(`id_extra`),
    PRIMARY KEY (`id_detalle_extra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `email_idx` ON `usuario`(`email`);

-- AddForeignKey
ALTER TABLE `detalle_extra` ADD CONSTRAINT `detalle_extra_id_detalle_fkey` FOREIGN KEY (`id_detalle`) REFERENCES `detalle_pedido`(`id_detalle`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_extra` ADD CONSTRAINT `detalle_extra_id_extra_fkey` FOREIGN KEY (`id_extra`) REFERENCES `extra`(`id_extra`) ON DELETE SET NULL ON UPDATE CASCADE;
