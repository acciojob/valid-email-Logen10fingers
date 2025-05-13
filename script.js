function validEmail(str) {
  if (!str) return false; // Handle empty string

  // Regex explanation:
  // ^[\w.-]+        : start with one or more word characters, dots, or hyphens (but not consecutive dots/hyphens)
  // @               : must contain an @
  // [\w-]+(\.[\w-]+)+ : domain name(s) and at least one dot for TLD, supports subdomains like .co.in
  // $               : end of string
  const regex = /^[\w.-]+@[\w-]+(\.[\w-]{2,})+$/;

  // Check for consecutive dots or invalid patterns
  if (/\.\.|--/.test(str)) return false;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
