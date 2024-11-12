document.addEventListener("DOMContentLoaded", function() {
    // Cek apakah ada notifikasi dan sembunyikan setelah beberapa detik
    const notification = document.getElementById("notification");
    if (notification) {
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000); // Menyembunyikan setelah 3 detik
    }
});
