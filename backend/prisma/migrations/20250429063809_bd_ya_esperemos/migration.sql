/*
  Warnings:

  - You are about to drop the column `cantidad` on the `detalle_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `id_producto` on the `detalle_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `precio_unitario` on the `detalle_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `detalle_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `extra` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `notificacion` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `notificacion` table. All the data in the column will be lost.
  - You are about to drop the `producto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_tamano` to the `detalle_pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_extra` to the `extra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detalle_pedido` DROP FOREIGN KEY `fk_producto_detalleped`;

-- DropIndex
DROP INDEX `fk_producto_detalleped_idx` ON `detalle_pedido`;

-- AlterTable
ALTER TABLE `detalle_pedido` DROP COLUMN `cantidad`,
    DROP COLUMN `id_producto`,
    DROP COLUMN `precio_unitario`,
    DROP COLUMN `subtotal`,
    ADD COLUMN `id_bebidac` INTEGER NULL,
    ADD COLUMN `id_bebidaf` INTEGER NULL,
    ADD COLUMN `id_frappe` INTEGER NULL,
    ADD COLUMN `id_leche` INTEGER NULL,
    ADD COLUMN `id_postre` INTEGER NULL,
    ADD COLUMN `id_tamano` INTEGER NOT NULL,
    ADD COLUMN `regular` BOOLEAN NULL,
    ADD COLUMN `total` DOUBLE NULL;

-- AlterTable
ALTER TABLE `extra` DROP COLUMN `precio`,
    ADD COLUMN `precio_extra` FLOAT NOT NULL;

-- AlterTable
ALTER TABLE `notificacion` DROP COLUMN `fecha`,
    DROP COLUMN `status`;

-- DropTable
DROP TABLE `producto`;

-- CreateTable
CREATE TABLE `bebcaliente` (
    `id_bebidac` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NOT NULL,
    `sabor` VARCHAR(18) NOT NULL,
    `precio_base` DOUBLE NOT NULL,

    PRIMARY KEY (`id_bebidac`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bebfria` (
    `id_bebidaf` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NOT NULL,
    `sabor` VARCHAR(18) NOT NULL,
    `precio_base` DOUBLE NOT NULL,

    PRIMARY KEY (`id_bebidaf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `frappe` (
    `id_frappe` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NOT NULL,
    `sabor` VARCHAR(18) NOT NULL,
    `precio_base` DOUBLE NOT NULL,

    PRIMARY KEY (`id_frappe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leche` (
    `id_leche` INTEGER NOT NULL,
    `nombre` VARCHAR(25) NOT NULL,
    `precio_leche` DOUBLE NOT NULL,

    PRIMARY KEY (`id_leche`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postre` (
    `id_postre` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NOT NULL,
    `sabor` VARCHAR(18) NOT NULL,
    `precio_base` DOUBLE NOT NULL,

    PRIMARY KEY (`id_postre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tamano` (
    `id_tamano` INTEGER NOT NULL,
    `nombre` VARCHAR(4) NOT NULL,
    `precio_tamano` DOUBLE NOT NULL,

    PRIMARY KEY (`id_tamano`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_bebidac_detalleped_idx` ON `detalle_pedido`(`id_bebidac`);

-- CreateIndex
CREATE INDEX `fk_bebidaf_detalleped_idx` ON `detalle_pedido`(`id_bebidaf`);

-- CreateIndex
CREATE INDEX `fk_frappe_detalleped_idx` ON `detalle_pedido`(`id_frappe`);

-- CreateIndex
CREATE INDEX `fk_postre_detalleped_idx` ON `detalle_pedido`(`id_postre`);

-- CreateIndex
CREATE INDEX `fk_tamano_detalleped_idx` ON `detalle_pedido`(`id_tamano`);

-- CreateIndex
CREATE INDEX `fk_leche_detalleped_idx` ON `detalle_pedido`(`id_leche`);

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_bebidac_detalleped` FOREIGN KEY (`id_bebidac`) REFERENCES `bebcaliente`(`id_bebidac`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_bebidaf_detalleped` FOREIGN KEY (`id_bebidaf`) REFERENCES `bebfria`(`id_bebidaf`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_frappe_detalleped` FOREIGN KEY (`id_frappe`) REFERENCES `frappe`(`id_frappe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_postre_detalleped` FOREIGN KEY (`id_postre`) REFERENCES `postre`(`id_postre`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_tamano_detalleped` FOREIGN KEY (`id_tamano`) REFERENCES `tamano`(`id_tamano`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_leche_detalleped` FOREIGN KEY (`id_leche`) REFERENCES `leche`(`id_leche`) ON DELETE SET NULL ON UPDATE CASCADE;
