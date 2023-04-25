const newsList = document.getElementById("news-list");
const loadingIndicator = document.getElementById("loading-indicator");

let page = 1;

function loadMoreNews() {
    // Simulate a delay in loading new content
    setTimeout(() => {
        const newsItems = getNewsItems(page);
        newsItems.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item;
            newsList.appendChild(li);
        });
        loadingIndicator.style.display = "none";
        page++;
    }, 1000);
}

function getNewsItems(page) {
    // Here you would retrieve news items from a server or a static data source
    // For demonstration purposes, we'll return some fake news items
    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newsItems = [
        "News item 4",
        "News item 5",
        "News item 6",
        "News item 7",
        "News item 8",
        "News item 9",
        "News item 10",
        "News item 11",
        "News item 12",
        "News item 13",
        "News item 14",
        "News item 15",
    ];
    return newsItems.slice(startIndex, endIndex);
}

function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight) {
        loadingIndicator.style.display = "block";
        loadMoreNews();
    }
}

window.addEventListener("scroll", handleScroll);
