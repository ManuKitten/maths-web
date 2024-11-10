let pages = ["Counting"]

function renderPages() {
    const pagesList = document.getElementById("pagesList");
    membersList.innerHTML = "";
    members.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        membersList.appendChild(listItem);
    });
}
