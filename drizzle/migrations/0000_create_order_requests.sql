CREATE TABLE public.order_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_key uuid NOT NULL UNIQUE,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.order_requests TO service_role;
REVOKE ALL ON public.order_requests FROM anon, authenticated;
ALTER TABLE public.order_requests ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.order_requests IS 'Private customer order requests. Access is restricted to the server and Cloud database management.';