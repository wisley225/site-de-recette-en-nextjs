
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { getSession, sessionOptions } from "../../../../lib/session";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, password }: { email: string; password: string } = body;

    // Rechercher l'utilisateur
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return new Response(JSON.stringify({ message: "Utilisateur non trouvé" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Mot de passe incorrect" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

     if (user) {
         const session = await getSession();
         session.user={ id:user.id , email: user.email };
         await session.save();
          console.log("Session enregistrée :", session.user);

          
          // apres pour recuperer  users dans n'importe quel composant
          //  on importe le le ficher getsession.ts
          //  et on l'utilise comme suit
          // const session = await getSession(req);
           // user= session.user;
           // et on prend  l'id ou email avec user.id ou user.email
    }
    // Connexion réussie

    return new Response(
      JSON.stringify({
        message: "Connexion réussie !",
     

        user: {
          id: user.id,
          fullname: user.fullname,
          password: user.password,
          email: user.email,
        },
      }),

   

      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    ); 


   
 

    

    
  } catch (error) {
    console.error("Erreur serveur :", error);
    return new Response(JSON.stringify({ message: "Erreur interne du serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
};


