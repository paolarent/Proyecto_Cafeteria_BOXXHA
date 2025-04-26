/*
  Warnings:

  - You are about to drop the column `sabor` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `u_med` on the `producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `producto` DROP COLUMN `sabor`,
    DROP COLUMN `u_med`;

-- CreateTable
CREATE TABLE `sabor` (
    `id_sabor` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_sabor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tamano` (
    `id_tamano` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_tamano`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leche` (
    `id_leche` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_leche`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_extra` (
    `id_producto` INTEGER NOT NULL,
    `id_extra` INTEGER NOT NULL,

    PRIMARY KEY (`id_producto`, `id_extra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_sabor` (
    `id_producto` INTEGER NOT NULL,
    `id_sabor` INTEGER NOT NULL,

    PRIMARY KEY (`id_producto`, `id_sabor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_tamano` (
    `id_producto` INTEGER NOT NULL,
    `id_tamano` INTEGER NOT NULL,

    PRIMARY KEY (`id_producto`, `id_tamano`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_leche` (
    `id_producto` INTEGER NOT NULL,
    `id_leche` INTEGER NOT NULL,

    PRIMARY KEY (`id_producto`, `id_leche`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `producto_extra` ADD CONSTRAINT `producto_extra_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_extra` ADD CONSTRAINT `producto_extra_id_extra_fkey` FOREIGN KEY (`id_extra`) REFERENCES `extra`(`id_extra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_sabor` ADD CONSTRAINT `producto_sabor_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_sabor` ADD CONSTRAINT `producto_sabor_id_sabor_fkey` FOREIGN KEY (`id_sabor`) REFERENCES `sabor`(`id_sabor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_tamano` ADD CONSTRAINT `producto_tamano_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_tamano` ADD CONSTRAINT `producto_tamano_id_tamano_fkey` FOREIGN KEY (`id_tamano`) REFERENCES `tamano`(`id_tamano`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_leche` ADD CONSTRAINT `producto_leche_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `producto_leche` ADD CONSTRAINT `producto_leche_id_leche_fkey` FOREIGN KEY (`id_leche`) REFERENCES `leche`(`id_leche`) ON DELETE RESTRICT ON UPDATE CASCADE;
