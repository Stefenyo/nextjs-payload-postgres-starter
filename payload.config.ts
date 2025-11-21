import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
// import { Posts } from "./app/collections/Blog";
import { Pages } from "./app/collections/Pages";

export default buildConfig({
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  db: postgresAdapter({
    // Database connection config - defaults match .env.example
    pool: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT!),
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      max: 20, // Maximum number of connections in pool
      idleTimeoutMillis: 20000, // Close idle connections after 20s
      connectionTimeoutMillis: 2000, // Return error after 2s if can't connect
    },
  }),

  localization: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  // Define and configure your collections in this array
  collections: [Pages],
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
