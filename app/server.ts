import { serve } from "@hono/node-server";
import app from "./indxs";

serve(app, (info) => {
    console.log(`Server is running on ${info.port}`);
});