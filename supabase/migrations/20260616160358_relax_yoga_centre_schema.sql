
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  age integer,
  role text NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_own_users" ON users FOR SELECT
  TO authenticated USING (auth.uid() = id);
CREATE POLICY "insert_own_users" ON users FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "update_own_users" ON users FOR UPDATE
  TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "delete_own_users" ON users FOR DELETE
  TO authenticated USING (auth.uid() = id);

-- Demo bookings table
CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  email text,
  user_id uuid REFERENCES users(id),
  preferred_batch text NOT NULL CHECK (preferred_batch IN ('Morning 6 AM', 'Morning 7 AM', 'Evening 5 PM', 'Evening 6 PM')),
  mode text NOT NULL CHECK (mode IN ('Online', 'Offline', 'Home', 'Corporate')),
  message text,
  status text NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Attended', 'Cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_bookings" ON demo_bookings FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_bookings" ON demo_bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_bookings" ON demo_bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_bookings" ON demo_bookings FOR DELETE
  TO authenticated USING (true);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  slug text UNIQUE NOT NULL,
  base_price numeric,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_services" ON services FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_services" ON services FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_services" ON services FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_services" ON services FOR DELETE TO authenticated USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  review_text text NOT NULL,
  before_after_image text,
  student_image text,
  rating integer CHECK (rating BETWEEN 1 AND 5),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_testimonials" ON testimonials FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_testimonials" ON testimonials FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_testimonials" ON testimonials FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_testimonials" ON testimonials FOR DELETE TO authenticated USING (true);

-- Gallery media table
CREATE TABLE IF NOT EXISTS gallery_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  media_url text NOT NULL,
  media_type text NOT NULL CHECK (media_type IN ('image', 'video')),
  category text NOT NULL CHECK (category IN ('Class', 'Workshop', 'Championship', 'Meditation')),
  title text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_gallery" ON gallery_media FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_gallery" ON gallery_media FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_gallery" ON gallery_media FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_gallery" ON gallery_media FOR DELETE TO authenticated USING (true);

-- Seed sample services
INSERT INTO services (title, description, slug, base_price, image_url) VALUES
('Therapeutic Yoga', 'Heal your body and mind through specialized therapeutic yoga sessions designed for pain relief, stress reduction, and holistic wellness.', 'therapeutic-yoga', 1500, 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'),
('Weight Loss Yoga', 'Dynamic yoga sequences combined with breathwork and mindful eating guidance to help you achieve sustainable weight management.', 'weight-loss-yoga', 1800, 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg'),
('Corporate Yoga', 'Bring wellness to your workplace with our tailored corporate yoga programs designed to reduce stress and boost productivity.', 'corporate-yoga', 5000, 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg'),
('Home Yoga', 'Personalized one-on-one yoga sessions in the comfort of your own home, tailored to your schedule and specific needs.', 'home-yoga', 2000, 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg'),
('Online Yoga', 'Join live interactive yoga classes from anywhere in the world via our high-quality video streaming platform.', 'online-yoga', 999, 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg'),
('Meditation', 'Deep guided meditation practices to cultivate inner peace, mental clarity, and emotional balance in your daily life.', 'meditation', 1200, 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg'),
('Teacher Training', 'Comprehensive 200-hour Yoga Teacher Training certification program recognized internationally for aspiring yoga teachers.', 'teacher-training', 25000, 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg')
ON CONFLICT (slug) DO NOTHING;

-- Seed sample testimonials
INSERT INTO testimonials (student_name, review_text, rating, student_image) VALUES
('Priya Sharma', 'Joining Relax Yoga Centre was one of the best decisions of my life. In just 3 months, I lost 12 kg and feel more energetic than ever. Dharmanath Sir is an exceptional teacher!', 5, 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'),
('Rajesh Kumar', 'The therapeutic yoga sessions have completely relieved my chronic back pain that I had for over 5 years. The personalized attention and guidance is unmatched.', 5, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'),
('Anita Singh', 'The online yoga classes are incredibly convenient and just as effective as in-person sessions. The instructor makes sure everyone follows the postures correctly.', 5, 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'),
('Vikram Patel', 'Corporate yoga sessions have transformed our office culture. Our team is more focused, less stressed, and overall productivity has increased significantly.', 5, 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'),
('Sunita Devi', 'The meditation classes have given me a sense of peace I never experienced before. I now handle stress much better and sleep like a baby every night.', 5, 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'),
('Arjun Mishra', 'Excellent teacher training program! I am now a certified yoga instructor thanks to Dharmanath Sir. The curriculum is comprehensive and the learning environment is amazing.', 5, 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg')
ON CONFLICT DO NOTHING;

-- Seed sample gallery
INSERT INTO gallery_media (media_url, media_type, category, title) VALUES
('https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg', 'image', 'Class', 'Morning Yoga Class'),
('https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg', 'image', 'Class', 'Group Session'),
('https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg', 'image', 'Class', 'Evening Session'),
('https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg', 'image', 'Workshop', 'Wellness Workshop'),
('https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg', 'image', 'Workshop', 'Flexibility Workshop'),
('https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg', 'image', 'Workshop', 'Balance Workshop'),
('https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg', 'image', 'Meditation', 'Morning Meditation'),
('https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg', 'image', 'Meditation', 'Guided Meditation'),
('https://images.pexels.com/photos/1812960/pexels-photo-1812960.jpeg', 'image', 'Championship', 'Yoga Championship 2024'),
('https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg', 'image', 'Championship', 'State Level Competition'),
('https://images.pexels.com/photos/4662456/pexels-photo-4662456.jpeg', 'image', 'Class', 'Power Yoga'),
('https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg', 'image', 'Meditation', 'Deep Meditation')
ON CONFLICT DO NOTHING;
