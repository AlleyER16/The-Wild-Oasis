import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wihxmeorxruqcvbwdfvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaHhtZW9yeHJ1cWN2YndkZnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzMjQ1MTgsImV4cCI6MjAzODkwMDUxOH0.4DRxI4ItCeBlNJfb7jYuN26D1yuj5A86rzWOBtDU8E0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
