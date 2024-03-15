
import re

def is_strong_password(password):
    """Check if the password is strong."""
    # Checks
    length_check = len(password) >= 8
    digit_check = re.search(r"\d", password) is not None
    uppercase_check = re.search(r"[A-Z]", password) is not None
    lowercase_check = re.search(r"[a-z]", password) is not None
    special_char_check = re.search(r"[!@#$%^&*(),.?\":{}|<>]", password) is not None
    
    # Consider password strong if it passes all checks
    return all([length_check, digit_check, uppercase_check, lowercase_check, special_char_check])
