import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

console.log("AUTH0_ISSUER:", process.env.AUTH0_ISSUER_BASE_URL);
console.log("AUTH0_CLIENT_ID:", process.env.AUTH0_CLIENT_ID);
console.log("AUTH0_CLIENT_SECRET:", process.env.AUTH0_CLIENT_SECRET);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

export default NextAuth({

  
    providers: [
      Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID!,
        clientSecret: process.env.AUTH0_CLIENT_SECRET!,
        issuer: process.env.AUTH0_ISSUER_BASE_URL,
      }),
      // Add other providers here
    ], secret: process.env.AUTH0_SECRET,
    callbacks: {
      async session({ session, token }) {
        // Add property to session, like user role or more.
        return session;
      },
    },
    // Additional configuration
  });
