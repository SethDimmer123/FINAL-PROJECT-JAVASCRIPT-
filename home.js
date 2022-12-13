const homeSearchButton = document.querySelector(
    ".homepage__button--not-loading"
  );
  const searchBar = document.querySelector(".homepage__keyword--input");
  
  homeSearchButton.addEventListener("click", (e) => {
    console.log(e);
    localStorage.setItem("searchBarValue", searchBar.value);
    window.location.href += "/movie__page.html";
    console.log("clicked");
  });
  
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("searchBarValue", searchBar.value);
      window.location.href += "/movie__page.html";
    }
  });