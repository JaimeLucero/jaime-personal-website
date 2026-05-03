-- Projects table schema for Supabase
-- Run this in your Supabase SQL Editor to recreate the table if needed

CREATE TABLE IF NOT EXISTS public.projects (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT,
  thumbnail TEXT
);

-- Insert current projects data
INSERT INTO public.projects (id, created_at, title, description, link, thumbnail) VALUES
(10, '2026-01-03 04:54:59.190249+00', 'WattWise', 'WattWise delivers clear insights into household power usage.', 'https://wattwise-one.vercel.app/home', 'https://yspxpvxdxluafgxdptqo.supabase.co/storage/v1/object/sign/thumbnail/wattwise.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMzJiY2IzNy1iZDdjLTRjNTgtYWUxOC1jODJjMTZlYzNkOWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0aHVtYm5haWwvd2F0dHdpc2Uuc3ZnIiwiaWF0IjoxNzY3NDE2MDUyLCJleHAiOjE5MjUwOTYwNTJ9.3NPVM8guQQruA2BdmTvhxYdfGxWdmnGU_6WZzXBDi9U'),
(9, '2026-01-02 07:01:26.399499+00', 'AWS Mock Exams', 'Your go-to platform for practicing and preparing for AWS Certification Exams, powered by TutorialsDojo.', 'https://play.google.com/store/apps/details?id=com.tutorialsdojo.awsmockexams&hl=en', 'https://yspxpvxdxluafgxdptqo.supabase.co/storage/v1/object/sign/thumbnail/aws-thumbnail.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMzJiY2IzNy1iZDdjLTRjNTgtYWUxOC1jODJjMTZlYzNkOWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0aHVtYm5haWwvYXdzLXRodW1ibmFpbC5zdmciLCJpYXQiOjE3NjczMzcwOTIsImV4cCI6MTkyNTAxNzA5Mn0.X1xiICNOgy6Q0dkU9TGw6RB8uNsieYvI4VWDemhz6-w'),
(4, '2025-12-17 10:45:34.81697+00', 'RiceLense', 'A streamlit application for classifying rice grains using images.', 'https://rice-variety-recognition-usrg8d4nuruupl7pbdrmpz.streamlit.app/', 'https://yspxpvxdxluafgxdptqo.supabase.co/storage/v1/object/sign/thumbnail/ricelense.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMzJiY2IzNy1iZDdjLTRjNTgtYWUxOC1jODJjMTZlYzNkOWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0aHVtYm5haWwvcmljZWxlbnNlLnN2ZyIsImlhdCI6MTc2NTk2ODgyMSwiZXhwIjoxNzk3NTA0ODIxfQ.BgTcEsgD4J-WEYICn1g1kjImwvCkmTDYAw2SOJD3Vzo')
ON CONFLICT (id) DO NOTHING;

-- Reset sequence to avoid ID conflicts
SELECT setval('public.projects_id_seq', (SELECT MAX(id) FROM public.projects));
