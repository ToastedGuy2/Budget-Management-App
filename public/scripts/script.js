const dataTable = new simpleDatatables.DataTable("#transactions-table");
flatpickr("#date-input", {});
document.querySelector(".dataTable-input").classList.add("form-control");
document.querySelector(".dataTable-selector").classList.add("form-control");


Array.from(document.querySelectorAll(".income-expense-button")).forEach(btn => {
    btn.addEventListener("click", evt => {
        const btn = evt.currentTarget;
        if (!btn.classList.contains("selected-option")) {
            const onBtn = document.querySelector(".selected-option");
            onBtn.classList.remove("selected-option");
            onBtn.classList.add("off")
            btn.classList.add("selected-option")
        };
    })
});