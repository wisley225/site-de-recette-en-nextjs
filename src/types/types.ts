
export type Users={
 
     fullname:string,
     email:string
     password:string


}



// Interface pour les images des étapes
export type ImageEtape= {
  fichier: File;      // Le fichier image
  apercu: string;     // L'URL de prévisualisation de l'image
}

// Interface pour chaque étape de la recette
 export type Etape= {
  description: string;    // Description de l'étape
  images: ImageEtape[];  // Liste des images associées à l'étape
}
