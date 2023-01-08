import { createClient } from "@supabase/supabase-js";

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Z3RjeHJ1bGRhYWRlenNoeWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNTQyNTQsImV4cCI6MTk4NjkzMDI1NH0.sCAxKsNNeNlvZOk6-KpYLO2UiGxA4TGIMkEGqHVRWbE
// https://bwgtcxruldaadezshyej.supabase.co

// retrieving environment variables
const supabaseUrl = "https://bwgtcxruldaadezshyej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Z3RjeHJ1bGRhYWRlenNoeWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNTQyNTQsImV4cCI6MTk4NjkzMDI1NH0.sCAxKsNNeNlvZOk6-KpYLO2UiGxA4TGIMkEGqHVRWbE";
const options = {
  schema: "public",
  headers: { "x-my-custom-header": "wrapup" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};
export const supabase = createClient(supabaseUrl, supabaseKey, options);
