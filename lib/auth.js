import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUrl, registerUrl, profileUpdateUrl, passwordUpdateUrl } from "./constants";

export const signUp = async (formData) => {
    try {
        const response = await fetch(registerUrl,{
            method: 'POST',
            body: JSON.stringify({
                name: formData.data.name,
                email: formData.data.email,
                phone: formData.data.phone,
                password: formData.data.password,
                password_confirmation: formData.data.password_confirmation
            }),
            headers: { 'content-type': 'application/json'}
        });
        return response;
    } catch (err) {
        return null; 
    }
}

export const passwordUpdate = async (formData) => {
    try {
        const response = await fetch(passwordUpdateUrl,{
            method: 'POST',
            body: JSON.stringify({
                userId: formData.data.userId,
                password: formData.data.password,
                new_password: formData.data.new_password
            }),
            headers: { 'content-type': 'application/json'}
        });
        return await response.json();
    } catch (err) {
        return null; 
    }
}

export const profileUpdate = async (formData) => {
    try {
        const body = new FormData(); 
        body.append("userId", formData.data.userId);
        body.append("name", formData.data.name);
        body.append("bio", formData.data.bio || "");
        if (formData.data.image) {
            body.append("image", formData.data.image); 
        }

        const response = await fetch(profileUpdateUrl, {
            method: "POST",
            body: body, 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); 
    } catch (err) {
        console.error("Error updating profile:", err);
        return null;
    }
};


const login = async (credentials) => {
    try {
        const response = await fetch(loginUrl,{
            method: 'POST',
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
            headers: { 'content-type': 'application/json'}
        });
        return response;
    } catch (err) {
        onsole.error("Error during authentication:", err); 
        return null; 
    }
}

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt", 
        maxAge: 30 * 24 * 60 * 60, 
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.image = user.image;
                token.bio = user.bio;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.image = token.image;
            session.user.bio = token.bio;
            session.user.name = token.name;
            session.user.email = token.email;
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            secret: process.env.NEXTAUTH_SECRET,
            credentials: {
              email: {
                label: "email",
                type: "email",
              },
              password: {
                label: "Password",
                type: "password",
              },
            },
            authorize: async (credentials) => {               
                const response = await login(credentials); 
                if (!response.ok)  return null; 
                const data = await response.json();
                if (data.user)  return {
                        id: data.user.id, 
                        name: data.user.name, 
                        email: data.user.email, 
                        image: data.user.image,
                        bio: data.user.bio
                    };
                else  return null; 
            },
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID ?? "",
        //     clientSecret: process.env.GOOGLE_SECRET ?? ""  // Fixed the typo here
        // })
    ]
};
