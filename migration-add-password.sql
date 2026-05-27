-- Run this if you already have the users table created
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT;
