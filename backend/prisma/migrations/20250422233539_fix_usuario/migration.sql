--  Eliminar la clave foránea primero
ALTER TABLE `pedido` DROP FOREIGN KEY `fk_usuario_pedido`;

--  Modificar la tabla usuario
ALTER TABLE `usuario`
  MODIFY `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
  MODIFY `tipo_usuario` ENUM('cliente', 'empleado', 'admin') NOT NULL DEFAULT 'cliente';

--  Volver a agregar la foreign key
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_usuario_pedido`
    FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
