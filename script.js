const password = document.getElementById("password");
const toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleIcon.textContent = "🙈";
  } else {
    password.type = "password";
    toggleIcon.textContent = "👁️";
  }
});
