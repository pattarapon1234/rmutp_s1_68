import { serve } from "@hono/node-sever";
import app from "./index";

serve(app, (info) => {
    console.log(`Server is running on ${info.port}`);
});