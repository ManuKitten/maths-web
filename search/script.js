let pages = ["Counting"];

function renderPages() {
    const pagesList = document.getElementById("pagesList");
    pagesList.innerHTML = "";
    pages.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        pagesList.appendChild(listItem);
    });
}

setInterval(renderPages, 500);
