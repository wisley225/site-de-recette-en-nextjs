'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface Ingredient {
  name: string;
  image: File | null;
  imagePreview: string;
}

interface Step {
  description: string;
}

export default function RecipeForm() {
  const [formData, setFormData] = useState({
    recipeName: '',
    chefName: '',
    preparationTime: '',
    servings: '',
    difficulty: 'facile',
  });

  const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: '', image: null, imagePreview: '' }]);
  const [steps, setSteps] = useState<Step[]>([{ description: '' }]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIngredientChange = (index: number, field: string, value: string | File) => {
    const newIngredients = [...ingredients];
    if (field === 'image' && value instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newIngredients[index] = {
          ...newIngredients[index],
          image: value,
          imagePreview: reader.result as string
        };
        setIngredients(newIngredients);
      };
      reader.readAsDataURL(value);
    } else {
      newIngredients[index] = {
        ...newIngredients[index],
        [field]: value
      };
      setIngredients(newIngredients);
    }
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index].description = value;
    setSteps(newSteps);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', image: null, imagePreview: '' }]);
  };

  const addStep = () => {
    setSteps([...steps, { description: '' }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      
      // Ajouter les données de base
      formDataToSend.append('recipeName', formData.recipeName);
      formDataToSend.append('chefName', formData.chefName);
      formDataToSend.append('preparationTime', formData.preparationTime);
      formDataToSend.append('servings', formData.servings);
      formDataToSend.append('difficulty', formData.difficulty);
      
      // Ajouter les ingrédients
      ingredients.forEach((ingredient, index) => {
        formDataToSend.append(`ingredients[${index}][name]`, ingredient.name);
        if (ingredient.image) {
          formDataToSend.append(`ingredients[${index}][image]`, ingredient.image);
        }
      });
      
      // Ajouter les étapes
      steps.forEach((step, index) => {
        formDataToSend.append(`steps[${index}][description]`, step.description);
      });
      
      // Envoyer les données au serveur
      const response = await axios.post('/api/recipes', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.status === 200) {
        alert('Recette enregistrée avec succès !');
        // Réinitialiser le formulaire
        setFormData({
          recipeName: '',
          chefName: '',
          preparationTime: '',
          servings: '',
          difficulty: 'facile',
        });
        setIngredients([{ name: '', image: null, imagePreview: '' }]);
        setSteps([{ description: '' }]);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la recette:', error);
      alert('Une erreur est survenue lors de l\'enregistrement de la recette.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Nouvelle Recette</h2>
          
          {/* Informations de base */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom de la recette</label>
              <input
                type="text"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom du chef</label>
              <input
                type="text"
                name="chefName"
                value={formData.chefName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Temps de préparation (minutes)</label>
              <input
                type="number"
                name="preparationTime"
                value={formData.preparationTime}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre de personnes</label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Niveau de difficulté</label>
              <select
                name="difficulty"
                value={formData.difficulty}
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

          {/* Ingrédients */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Ingrédients</h3>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                    placeholder="Nom de l'ingrédient"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-32">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleIngredientChange(index, 'image', e.target.files[0]);
                      }
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </div>
                {ingredient.imagePreview && (
                  <div className="w-16 h-16 relative">
                    <Image
                      src={ingredient.imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200"
            >
              + Ajouter un ingrédient
            </button>
          </div>

          {/* Étapes de la recette */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Étapes de la recette</h3>
            {steps.map((step, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Étape {index + 1}
                </label>
                <textarea
                  value={step.description}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={3}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addStep}
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
  );
} 