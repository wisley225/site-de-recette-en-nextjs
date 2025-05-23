-- CreateTable
CREATE TABLE `Recipe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomRecette` VARCHAR(191) NOT NULL,
    `TempsPreparation` VARCHAR(191) NOT NULL,
    `TempsCuisson` VARCHAR(191) NOT NULL,
    `Difficulte` VARCHAR(191) NOT NULL,
    `imagePrincipale` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etape` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `recetteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageEtape` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `etapeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImageEtape` ADD CONSTRAINT `ImageEtape_etapeId_fkey` FOREIGN KEY (`etapeId`) REFERENCES `Etape`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
