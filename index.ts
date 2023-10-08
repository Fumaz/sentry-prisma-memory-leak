import * as Sentry from "@sentry/node";
import {database} from "./database.ts";

Sentry.init({
    dsn: "YOUR_DSN_HERE",
    tracesSampleRate: 1.0,
    debug: true,
    integrations: [
        new Sentry.Integrations.Prisma({client: database}),
    ]
});
