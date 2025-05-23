'use client';

import React from 'react';
import Navbar from '../product/navbar';
import Image from 'next/image';
import { useState } from 'react';
import { Etape,ImageEtape } from '@/types/types';
import axios from 'axios';
// Interface pour les images des étapes


const Page = () => {
  // État du formulaire principal
  const [donneesFormulaire, setDonneesFormulaire] = useState({
    nom: '',           // Nom de la recette
    nomChef: '',              // Nom du chef
    tempsPreparation: '',     // Temps de préparation en minutes
    nbr_pers: '',            // Nombre de personnes
    difficulte: 'facile',     // Niveau de difficulté (facile, moyen, difficile)
    imagePrincipale: null as File | null,  // Image principale du plat
    apercuImagePrincipale: '',            // URL de prévisualisation de l'image principale
  });

  // État des étapes de la recette
  const [etapes, setEtapes] = useState<Etape[]>([{ description: '', images: [] }]);

  // Gestionnaire de changement pour les champs du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDonneesFormulaire(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestionnaire de changement pour l'image principale
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fichier = e.target.files[0];
      const lecteur = new FileReader();
      lecteur.onloadend = () => {
        setDonneesFormulaire(prev => ({
          ...prev,
          imagePrincipale: fichier,
          apercuImagePrincipale: lecteur.result as string
        }));
      };
      lecteur.readAsDataURL(fichier);
    }
  };

  // Gestionnaire de changement pour la description d'une étape
  const handleStepChange = (index: number, value: string) => {
    const nouvellesEtapes = [...etapes];
    nouvellesEtapes[index].description = value;
    setEtapes(nouvellesEtapes);
  };

  // Gestionnaire d'upload d'images pour une étape
  const handleImageUpload = (index: number, fichiers: FileList) => {
    const nouvellesEtapes = [...etapes];
    const nouvellesImages: ImageEtape[] = [];

    Array.from(fichiers).forEach(fichier => {
      const lecteur = new FileReader();
      lecteur.onloadend = () => {
        nouvellesImages.push({
          fichier: fichier,
          apercu: lecteur.result as string
        });
        
        if (nouvellesImages.length === fichiers.length) {
          nouvellesEtapes[index].images = [...nouvellesEtapes[index].images, ...nouvellesImages];
          setEtapes(nouvellesEtapes);
        }
      };
      lecteur.readAsDataURL(fichier);
    });
  };

  // Suppression d'une image d'une étape
  const supprimerImage = (indexEtape: number, indexImage: number) => {
    const nouvellesEtapes = [...etapes];
    nouvellesEtapes[indexEtape].images.splice(indexImage, 1);
    setEtapes(nouvellesEtapes);
  };

  // Ajout d'une nouvelle étape
  const ajouterEtape = () => {
    setEtapes([...etapes, { description: '', images: [] }]);
  };

  // Soumission du formulaire
  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault(); 
    const reponse = await axios.post('/api/recette', { donneesFormulaire, etapes} )
     console.log(reponse.data);
    console.log({ donneesFormulaire, etapes });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Section Profil */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="size-20 relative rounded-full overflow-hidden">
              <Image
                src="/profile1.jpeg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Profil Utilisateur</h1>
            </div>
          </div>
        </div>

        {/* Formulaire de Recette */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Nouvelle Recette</h2>
              
              {/* Image principale du plat */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image principale du plat
                </label>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-md">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainImageChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      required
                    />
                  </div>
                  {donneesFormulaire.apercuImagePrincipale && (
                    <div className="w-full max-w-md aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={donneesFormulaire.apercuImagePrincipale}
                        alt="Image principale du plat"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Informations de base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom de la recette</label>
                  <input
                    type="text"
                    name="nom"
                    value={donneesFormulaire.nom}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom du chef</label>
                  <input
                    type="text"
                    name="nomChef"
                    value={donneesFormulaire.nomChef}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Temps de préparation (minutes)</label>
                  <input
                    type="number"
                    name="tempsPreparation"
                    value={donneesFormulaire.tempsPreparation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre de personnes</label>
                  <input
                    type="number"
                    name="nbr_pers"
                    value={donneesFormulaire.nbr_pers}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Niveau de difficulté</label>
                  <select
                    name="difficulte"
                    value={donneesFormulaire.difficulte}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  >
                    <option value="facile">Facile</option>
                    <option value="moyen">Moyen</option>
                    <option value="difficile">Difficile</option>
                  </select>
                </div>
              </div>

              {/* Étapes de la recette */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Étapes de la recette</h3>
                {etapes.map((etape, indexEtape) => (
                  <div key={indexEtape} className="mb-8 p-4 border rounded-lg">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Étape {indexEtape + 1}
                        </label>
                        <textarea
                          value={etape.description}
                          onChange={(e) => handleStepChange(indexEtape, e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          rows={3}
                          required
                          placeholder="Décrivez cette étape de la recette..."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Images de l'étape
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              handleImageUpload(indexEtape, e.target.files);
                            }
                          }}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                        
                        {/* Grille d'images */}
                        {etape.images.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {etape.images.map((image, indexImage) => (
                              <div key={indexImage} className="relative group">
                                <div className="aspect-square relative rounded-lg overflow-hidden">
                                  <Image
                                    src={image.apercu}
                                    alt={`Étape ${indexEtape + 1} - Image ${indexImage + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => supprimerImage(indexEtape, indexImage)}
                                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={ajouterEtape}
                  className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200"
                >
                  + Ajouter une étape
                </button>
              </div>

              {/* Bouton de soumission */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Enregistrer la recette
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;



































