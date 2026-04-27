import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.com/dashboard/project/jerfioytmyqmpmokizlh';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcmZpb3l0bXlxbXBtb2tpemxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDE0NjQsImV4cCI6MjA5Mjg3NzQ2NH0.aw3TUggTjShq_a_zrQmhQaH1h8rhnCicyL8t--Pg984';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
