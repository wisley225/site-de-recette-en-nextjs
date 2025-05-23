import { PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from "next/server";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function enregistrerImage(base64: string, dossier: string): Promise<string> {
    const buffer = Buffer.from(base64.split(',')[1], 'base64');
    const nomfichier = `${uuidv4()}.jpg`;
    const chemin = path.join(process.cwd(), 'public', dossier, nomfichier);
    await writeFile(chemin, buffer);
    return `${dossier}/${nomfichier}`;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { donneesFormulaire, etapes } = body;

        // Enregistrer l'image principale
        const urlImagePrincipale = await enregistrerImage(
            donneesFormulaire.apercuImagePrincipale,
            'uploads'
        );

        // Créer la recette
        const recette = await prisma.recette.create({
            data: {
                nom: donneesFormulaire.nom,
                nomChef: donneesFormulaire.nomChef,
                tempsPreparation: parseInt(donneesFormulaire.tempsPreparation),
                nbr_pers: parseInt(donneesFormulaire.nbr_pers),
                difficulte: donneesFormulaire.difficulte,
                imagePrincipale: urlImagePrincipale,
                utilisateurId: 1, // À remplacer par l'ID de l'utilisateur connecté
            }
        });

        // Créer les étapes et leurs images
        for (const etape of etapes) {
            const nouvelleEtape = await prisma.etape.create({
                data: {
                    description: etape.description,
                    recetteId: recette.id,
                }
            });

            // Enregistrer les images de l'étape
            for (const image of etape.images) {
                const urlImage = await enregistrerImage(image.apercu, 'uploads');
                await prisma.imageEtape.create({
                    data: {
                        url: urlImage,
                        etapeId: nouvelleEtape.id,
                    }
                });
            }
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Recette créée avec succès',
            recette 
        });

    } catch (error) {
        console.error('Erreur lors de la création de la recette:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur lors de la création de la recette' },
            { status: 500 }
        );
    }
}




























