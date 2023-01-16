window.addEventListener("scroll", (event) => {
    var scrollingMe = window.scrollY
    console.log(scrollingMe);
    var tableofContent = document.querySelector ('#toc')
    if (scrollingMe >= 700 && scrollingMe <= 800 ) {
      //  tableofContent.classList.add ('fixedBanner')
        tableofContent.style.display = "block";
        
    } else if (scrollingMe <= 600) {
       // tableofContent.classList.remove ('fixedBanner')
       tableofContent.removeAttribute ('style');
        
    } else {
        
    }

});



