import { InferType, object, string } from "yup";

const envVariables = object({
  VITE_API_KEY: string().required(),
  VITE_AUTH_DOMAIN: string().required(),
  VITE_PROJECT_ID: string().required(),
  VITE_STORAGE_BUCKET: string().required(),
  VITE_MESSAGING_SENDER_ID: string().required(),
  VITE_APP_ID: string().required(),
  VITE_APP_DB_URL: string(),
});

envVariables.validateSync(import.meta.env);

declare global {
  interface ImportMetaEnv extends InferType<typeof envVariables> {}
}

export const config = {
  API_KEY: import.meta.env.VITE_API_KEY,
  AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN,
  PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
  STORAGE_BUCKET: import.meta.env.VITE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: import.meta.env.VITE_MESSAGING_SENDER_ID,
  APP_ID: import.meta.env.VITE_APP_ID,
  APP_DB_URL: import.meta.env.VITE_APP_DB_URL || undefined,
} as const;
