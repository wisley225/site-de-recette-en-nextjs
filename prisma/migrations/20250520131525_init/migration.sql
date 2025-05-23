-- DropIndex
DROP INDEX `Commentaire_recetteId_fkey` ON `commentaire`;

-- DropIndex
DROP INDEX `Commentaire_userId_fkey` ON `commentaire`;

-- DropIndex
DROP INDEX `Etape_recetteId_fkey` ON `etape`;

-- DropIndex
DROP INDEX `ImageEtape_etapeId_fkey` ON `imageetape`;

-- DropIndex
DROP INDEX `Like_recetteId_fkey` ON `like`;

-- DropIndex
DROP INDEX `Recette_utilisateurId_fkey` ON `recette`;

-- AddForeignKey
ALTER TABLE `Recette` ADD CONSTRAINT `Recette_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etape` ADD CONSTRAINT `Etape_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImageEtape` ADD CONSTRAINT `ImageEtape_etapeId_fkey` FOREIGN KEY (`etapeId`) REFERENCES `Etape`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
