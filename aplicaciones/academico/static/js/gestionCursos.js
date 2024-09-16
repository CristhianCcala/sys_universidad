(function () {
    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿seguro que desea eliminar el curso?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });
})();

(function () {
    const autoCloseAlerts = document.querySelectorAll(".autoCloseAlert");

    autoCloseAlerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 2000); // 2 segundos
    });
})();
