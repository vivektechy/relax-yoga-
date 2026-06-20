import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type DemoBooking = {
  id?: string;
  name: string;
  mobile: string;
  email?: string;
  user_id?: string;
  preferred_batch: 'Morning 6 AM' | 'Morning 7 AM' | 'Evening 5 PM' | 'Evening 6 PM';
  mode: 'Online' | 'Offline' | 'Home' | 'Corporate';
  message?: string;
  status?: 'Pending' | 'Attended' | 'Cancelled';
  created_at?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  slug: string;
  base_price: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  student_name: string;
  review_text: string;
  before_after_image?: string;
  student_image?: string;
  rating: number;
  created_at: string;
};

export type GalleryMedia = {
  id: string;
  media_url: string;
  media_type: 'image' | 'video';
  category: 'Class' | 'Workshop' | 'Championship' | 'Meditation';
  title?: string;
  created_at: string;
};
