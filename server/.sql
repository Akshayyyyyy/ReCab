CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  phone TEXT UNIQUE,
  password TEXT,
  user_type TEXT CHECK (user_type IN ('driver', 'passenger')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE rides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id UUID REFERENCES users(id),
  from_location TEXT,
  to_location TEXT,
  datetime TIMESTAMP,
  price INTEGER,
  contact_info TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
