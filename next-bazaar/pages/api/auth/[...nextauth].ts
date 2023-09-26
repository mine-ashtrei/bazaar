import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Keycloak from "next-auth/providers/keycloak";
import { User, Account, Session, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import API from "../../../lib";

type SignInCallbackProps = {
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile;
};

type JwtCallbackProps = {
  user: User | AdapterUser;
  token: JWT;
  account: Account | null;
};

type SessionCallbackProps = {
  session: Session;
  token: JWT;
};

export const authOptions = {
  // Configure one or more authentication providers
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Keycloak({
      clientId: process.env.KEYCLOAK_ID!,
      issuer: process.env.KEYCLOAK_ISSUER,
      clientSecret: process.env.KEYCLOAK_SECRET!,
    }),
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   id: "login",
    //   name: "login",
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: { label: "Email", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     try {
    //       const { token } = await API.auth.login({
    //         email: credentials!.username,
    //         password: credentials!.password,
    //       });
    //       const user = await API.auth.getCurrentUser(token);
    //       user.accessToken = token;
    //       return user;
    //     } catch (e) {
    //       console.error(e);
    //       // If you return null then an error will be displayed advising the user to check their details.
    //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //       return null;
    //       // Any object returned will be saved in `user` property of the JWT
    //     }
    //   },
    // }),
  ],
  pages: {
    //TODO: create this pages so redirect will work and don't have unwanted pages
    // signIn: "/auth/signin",
    // signOut: '/auth/signout',
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    signIn: async ({ user, account, profile }: SignInCallbackProps) => {
      console.log("SignIn Callback");
      console.log("User");
      console.log(user);
      console.log("Account");
      console.log(account);
      console.log("Profile");
      console.log(profile);
      if (account && account.provider === "google") {
        // TODO create or update the user based on the email and the google id
        return false;
      }
      return true;
    },
    jwt: async ({ token, user, account }: JwtCallbackProps) => {
      //if account/user is null, we need a refresh token
      console.log("Token Callback");
      console.log("User");
      console.log(user);
      console.log("Token");
      console.log(token);
      if (user) {
        // remove the token from the user object and refresh the token
        // TODO remove the hack and add the typing in a .d type file
        return {
          ...token,
          accessToken: user.accessToken,
          role: user.role,
        };
      }
      // const res = await refreshToken((token as any).accessToken);
      // token.accessToken = res.token;
      // console.log("New Token");
      // console.log(token);
      return token;
    },
    session: async ({ session, token }: SessionCallbackProps) => {
      console.log("Session Callback");
      console.log("Token");
      console.log(token);
      console.log("Session");
      console.log(session);
      if (token) {
        (session as any).accessToken = token.accessToken;
        (session as any).role = token.role;
      }
      console.log("Session After");
      console.log(session);
      return session;
    },
  },
};

export default NextAuth(authOptions);
