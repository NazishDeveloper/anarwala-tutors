import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CONSOLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CONSOLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.SECRET
});

/* export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "GOOGLE_CLIENT_ID",
      clientSecret: "GOOGLE_CLIENT_SECRET",
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "secret token",
  //Callback here
}); */

/* 
export default function handler( req, res) {
    if(req.method == "POST") {
        let provider = "google";

        if( provider == "google") {
            res.status(200).json({ msg : "testing"});
        }

    }
}
 */
