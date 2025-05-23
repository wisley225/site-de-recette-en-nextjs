import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Users } from '@/types/types';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  console.log(request ,'voici request')
  try {
    const { fullname, email, password }:Users = await request.json();
    const salt=await bcrypt.genSalt(10)
    const passwordhash=await bcrypt.hash(password,salt)
    const nouvelUtilisateur = await prisma.user.create({
    data: { fullname, email, password:passwordhash },
    });

    return NextResponse.json(nouvelUtilisateur, { status: 201 }); 

    // Statut 201 pour une création réussie
    
    // tu aurais pu dire aussi : 
    //return NextResponse.json({message:"inscription reussi avec succes"}); 
    // // Statut 201 pour une création réussie
    

  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    return NextResponse.json({ message: "Erreur lors de l'enregistrement de l'utilisateur." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// Vous pouvez également exporter d'autres fonctions pour gérer d'autres méthodes HTTP (GET, etc.)
// export async function GET(request: NextRequest) { ... }
