document.addEventListener("DOMContentLoaded", () => {
    const url = window.location.href;

    if (url.includes("mentorship")) {
        const completed = sessionStorage.getItem("completed");

        if (completed === "true") {
            alert("🎉 Congratulations! Day completed successfully!");
            sessionStorage.removeItem("completed");
        }
    }
});