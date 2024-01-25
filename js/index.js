function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validasi sederhana
  if (email === "Riokurniawan@gmail.com" && password === "Rio") {
    alert("Login berhasil!");
    // Redirect ke halaman admin
    window.location.href = "admin.html";
  } else {
    alert("Login gagal. Cek kembali email dan password.");
  }
}
