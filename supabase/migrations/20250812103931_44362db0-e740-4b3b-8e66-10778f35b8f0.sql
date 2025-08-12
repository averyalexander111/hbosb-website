
-- Update OTP expiry settings to follow security best practices
-- Set OTP to expire after 10 minutes (600 seconds) for better security
UPDATE auth.config 
SET 
  otp_exp = 600,
  otp_length = 6
WHERE TRUE;

-- If the above doesn't work due to config table structure, use these alternative commands:
-- These are the standard Supabase auth configuration updates

-- Set email OTP expiry to 10 minutes
UPDATE auth.config SET email_confirm_change_otp_exp = 600 WHERE id = 1;
UPDATE auth.config SET email_otp_exp = 600 WHERE id = 1;

-- Set SMS OTP expiry to 10 minutes  
UPDATE auth.config SET sms_otp_exp = 600 WHERE id = 1;

-- Set phone confirmation OTP expiry to 10 minutes
UPDATE auth.config SET phone_confirm_change_otp_exp = 600 WHERE id = 1;
