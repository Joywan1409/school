/*
  # Fix Security Issues
  
  1. Updated RLS Policies
    - Changed contact_submissions INSERT policy to require valid email format
    - Removed overly permissive "always true" check
  
  2. Adds basic validation
    - Email must contain @ character (basic validation)
    - Name and message must not be empty
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Authenticated users can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND name != ''
    AND subject != ''
    AND message != ''
  );