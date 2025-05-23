import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

// Options de configuration de la session
export const sessionOptions = {
  cookieName: 'user_session',
  password: process.env.SESSION_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 1 semaine
    path: '/',
  },
};

// Type pour les données de session
export interface SessionData {
  user?: {
    id: number;
    email: string;
    // Ajoutez d'autres propriétés utilisateur si nécessaire
  };
}

// Fonction pour obtenir la session
export async function getSession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(sessionOptions.cookieName)?.value || '';
  const session = await getIronSession<SessionData>({ cookie } as any, sessionOptions);
  return session;
}




















