/*
  # Primary School Website Database Schema

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `image_url` (text, optional)
      - `published_date` (timestamptz)
      - `created_at` (timestamptz)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `event_date` (timestamptz)
      - `location` (text, optional)
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - News and events: Public read access, no write access (admin only via service role)
    - Contact submissions: Public insert only, no read access (admin only via service role)
*/

-- News Table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  published_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  USING (true);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Insert sample data
INSERT INTO news (title, content, image_url, published_date) VALUES
  ('Welcome to Sunshine Primary School!', 'We are thrilled to announce the start of a new academic year. Our dedicated staff is ready to inspire and nurture every student on their learning journey.', 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1200', now() - interval '2 days'),
  ('Science Fair Winners Announced', 'Congratulations to all our amazing young scientists who participated in this year''s science fair! The creativity and innovation displayed were truly remarkable.', 'https://images.pexels.com/photos/8612993/pexels-photo-8612993.jpeg?auto=compress&cs=tinysrgb&w=1200', now() - interval '5 days'),
  ('New Library Books Arrival', 'Our school library has received 200 new books covering various subjects and reading levels. Students can start borrowing from next week!', 'https://images.pexels.com/photos/6929034/pexels-photo-6929034.jpeg?auto=compress&cs=tinysrgb&w=1200', now() - interval '7 days');

INSERT INTO events (title, description, event_date, location) VALUES
  ('Parent-Teacher Conference', 'Join us for our quarterly parent-teacher conference to discuss student progress and development.', now() + interval '10 days', 'School Auditorium'),
  ('Spring Sports Day', 'Annual sports day featuring various athletic activities and competitions for all grade levels.', now() + interval '20 days', 'School Sports Field'),
  ('Art Exhibition', 'Showcase of student artwork from the entire school year. All families are welcome!', now() + interval '30 days', 'School Art Gallery'),
  ('School Musical Performance', 'Our talented students will perform "The Sound of Music" for the whole community.', now() + interval '45 days', 'Main Hall');