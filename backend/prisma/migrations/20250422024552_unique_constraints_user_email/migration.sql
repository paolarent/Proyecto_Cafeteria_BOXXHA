-- CreateTable
CREATE TABLE `detalle_extra_pedido` (
    `id_detalle` INTEGER NOT NULL,
    `id_extra` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_extra` FLOAT NOT NULL,

    INDEX `fk_extra_detalleext_idx`(`id_extra`),
    PRIMARY KEY (`id_detalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalle_pedido` (
    `id_detalle` INTEGER NOT NULL,
    `id_pedido` INTEGER NOT NULL,
    `id_producto` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_unitario` FLOAT NOT NULL,
    `subtotal` FLOAT NOT NULL,

    INDEX `fk_pedido_detalleped_idx`(`id_pedido`),
    INDEX `fk_producto_detalleped_idx`(`id_producto`),
    PRIMARY KEY (`id_detalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extra` (
    `id_extra` INTEGER NOT NULL,
    `nombre` VARCHAR(25) NOT NULL,
    `precio` FLOAT NOT NULL,

    PRIMARY KEY (`id_extra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificacion` (
    `id_notificacion` INTEGER NOT NULL,
    `id_pedido` INTEGER NOT NULL,
    `mensaje` VARCHAR(50) NOT NULL,
    `status` ENUM('pendiente', 'enviado', 'leido') NOT NULL,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_pedido_notif_idx`(`id_pedido`),
    PRIMARY KEY (`id_notificacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pago` (
    `id_pago` INTEGER NOT NULL,
    `id_pedido` INTEGER NOT NULL,
    `metodo_pago` ENUM('tarjeta', 'efectivo') NOT NULL,
    `monto_pagado` FLOAT NOT NULL,
    `fecha_pago` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pendiente', 'exitoso', 'fallido') NOT NULL,

    INDEX `fk_pedido_pago_idx`(`id_pedido`),
    PRIMARY KEY (`id_pago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido` (
    `id_pedido` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pendiente', 'procesando', 'listo', 'entregado') NOT NULL,
    `codigo_conf` VARCHAR(6) NOT NULL,
    `total` FLOAT NULL,

    INDEX `id_usuario_idx`(`id_usuario`),
    PRIMARY KEY (`id_pedido`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `id_producto` INTEGER NOT NULL,
    `nombre` VARCHAR(20) NOT NULL,
    `tipo_prod` ENUM('bebida', 'postre') NOT NULL,
    `u_med` ENUM('pza', '12oz', '16oz') NOT NULL,
    `precio` FLOAT NOT NULL,

    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_extra` (
    `id_producto` INTEGER NOT NULL,
    `id_extra` INTEGER NOT NULL,

    INDEX `fk_e_producto_extra_idx`(`id_extra`),
    INDEX `fk_p_producto_extra_idx`(`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NOT NULL,
    `apellido` VARCHAR(25) NOT NULL,
    `email` VARCHAR(45) NULL,
    `numero_tel` VARCHAR(10) NULL,
    `usuario` VARCHAR(15) NOT NULL,
    `contra` VARCHAR(12) NOT NULL,
    `tipo_usuario` ENUM('cliente', 'empleado', 'admin') NOT NULL,
    `fecha_registro` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `usuario_email_key`(`email`),
    UNIQUE INDEX `usuario_usuario_key`(`usuario`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detalle_extra_pedido` ADD CONSTRAINT `fk_detalleped_detext` FOREIGN KEY (`id_detalle`) REFERENCES `detalle_pedido`(`id_detalle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_extra_pedido` ADD CONSTRAINT `fk_extra_detalleext` FOREIGN KEY (`id_extra`) REFERENCES `extra`(`id_extra`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_pedido_detalleped` FOREIGN KEY (`id_pedido`) REFERENCES `pedido`(`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `fk_producto_detalleped` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notificacion` ADD CONSTRAINT `fk_pedido_notif` FOREIGN KEY (`id_pedido`) REFERENCES `pedido`(`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pago` ADD CONSTRAINT `fk_pedido_pago` FOREIGN KEY (`id_pedido`) REFERENCES `pedido`(`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `fk_usuario_pedido` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto_extra` ADD CONSTRAINT `fk_e_producto_extra` FOREIGN KEY (`id_extra`) REFERENCES `extra`(`id_extra`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto_extra` ADD CONSTRAINT `fk_p_producto_extra` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
