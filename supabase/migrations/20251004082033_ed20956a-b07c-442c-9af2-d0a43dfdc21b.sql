-- Add RLS policy to allow users to view their own roles
-- This fixes the security warning about user_roles insufficient protection

CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Note: This allows authenticated users to see their own role assignments
-- while maintaining admin-only control over INSERT, UPDATE, and DELETE operations