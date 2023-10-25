from email_validator import validate_email, EmailNotValidError


def validate_email_field(v):
    try:
        validate_email(v)
        return v
    except EmailNotValidError as e:
        raise ValueError("Invalid email format")


def validate_phone(v):
    return v
