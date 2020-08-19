
const btns = document.querySelectorAll(".tab-btn");

const articles = document.querySelectorAll(".content");

const about = document.querySelector(".about");

about.addEventListener("click", function(e){
    let id = e.target.dataset.id;

    if(id){
        // remove active from all button
        btns.forEach(function(btn){
            btn.classList.remove("active"); 
            
            e.target.classList.add("active");
        });

        // hide all articles
        articles.forEach(function(article){
            article.classList.remove("active");

            const element = document.getElementById(id);

            element.classList.add("active");
        })
    };
});