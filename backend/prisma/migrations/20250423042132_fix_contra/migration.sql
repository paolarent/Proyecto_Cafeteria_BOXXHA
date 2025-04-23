-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `fk_usuario_pedido`;

-- AlterTable
ALTER TABLE `usuario` MODIFY `contra` VARCHAR(70) NOT NULL;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `fk_usuario_pedido` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
