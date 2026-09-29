-- Covers are commonly exported at several megabytes. Keep uploads practical
-- while retaining a bounded, image-only public workspace asset bucket.
update storage.buckets
set file_size_limit = 10485760,
    allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp', 'image/gif']
where id = 'pax-workspace-assets';
