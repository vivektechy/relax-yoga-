-- Drop existing restrictive policies that use USING (true)

-- demo_bookings: Allow public inserts (booking form), restrict modifications to admin
DROP POLICY IF EXISTS "insert_bookings" ON demo_bookings;
DROP POLICY IF EXISTS "update_bookings" ON demo_bookings;
DROP POLICY IF EXISTS "delete_bookings" ON demo_bookings;

CREATE POLICY "insert_bookings" ON demo_bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "update_bookings" ON demo_bookings FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "delete_bookings" ON demo_bookings FOR DELETE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

-- services: Read public, modifications admin-only
DROP POLICY IF EXISTS "insert_services" ON services;
DROP POLICY IF EXISTS "update_services" ON services;
DROP POLICY IF EXISTS "delete_services" ON services;

CREATE POLICY "insert_services" ON services FOR INSERT
  TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "update_services" ON services FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "delete_services" ON services FOR DELETE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

-- testimonials: Read public, modifications admin-only  
DROP POLICY IF EXISTS "insert_testimonials" ON testimonials;
DROP POLICY IF EXISTS "update_testimonials" ON testimonials;
DROP POLICY IF EXISTS "delete_testimonials" ON testimonials;

CREATE POLICY "insert_testimonials" ON testimonials FOR INSERT
  TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "update_testimonials" ON testimonials FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "delete_testimonials" ON testimonials FOR DELETE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

-- gallery_media: Read public, modifications admin-only
DROP POLICY IF EXISTS "insert_gallery" ON gallery_media;
DROP POLICY IF EXISTS "update_gallery" ON gallery_media;
DROP POLICY IF EXISTS "delete_gallery" ON gallery_media;

CREATE POLICY "insert_gallery" ON gallery_media FOR INSERT
  TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "update_gallery" ON gallery_media FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  ) WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );

CREATE POLICY "delete_gallery" ON gallery_media FOR DELETE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
  );