-- AI Learning App Database Schema
-- Run this in your Neon SQL Editor

CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(15) PRIMARY KEY,
    password_hash TEXT,
    xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 1,
    current_level VARCHAR(20) DEFAULT 'level1',
    unlocked_levels TEXT[] DEFAULT ARRAY['level1'],
    completed_units TEXT[] DEFAULT ARRAY[]::TEXT[],
    last_played_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for leaderboard queries (sorted by XP)
CREATE INDEX IF NOT EXISTS idx_users_xp ON users(xp DESC);

-- Sample query to verify
-- SELECT * FROM users ORDER BY xp DESC LIMIT 10;
