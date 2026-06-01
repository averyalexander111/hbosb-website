-- Lock down SECURITY DEFINER functions so they are not callable directly via the API
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.update_updated_at_column() TO service_role;

-- has_role is needed inside RLS policies for authenticated users; remove anon/public access
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- Remove sensitive tables from the anon GraphQL schema (admins still reach them as authenticated users via RLS)
REVOKE SELECT ON public.user_roles FROM anon;
REVOKE SELECT ON public."HBOSB Contact Form" FROM anon;