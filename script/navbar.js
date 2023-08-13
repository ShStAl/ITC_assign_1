const sidebarToggle = document.getElementById("sidebarToggle");
        const sidebar = document.querySelector(".left");
        const grid = document.querySelector(".grid");
        const searchToggle = document.getElementById("searchToggle");

        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
            grid.classList.toggle("left-hidden");
            searchToggle.classList.toggle("hidden");
        });

        searchToggle.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
            grid.classList.toggle("left-hidden");
            searchToggle.classList.toggle("hidden");
        });