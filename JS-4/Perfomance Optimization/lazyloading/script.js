// https://tse1.mm.bing.net/th/id/OIP.uLS-0bMo-0rdyL586jCowQHaE8?pid=Api&h=220&P=0

let images = document.querySelectorAll("img");

// Syntax : IntersectionObserver(callback,options)

const observer = new IntersectionObserver(function (entries) {
    console.log(entries);
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = "https://tse1.mm.bing.net/th/id/OIP.uLS-0bMo-0rdyL586jCowQHaE8?pid=Api&h=220&P=0";
            img.classList.add("loaded");
            observer.unobserve(img);
        }
    });
},{
    root: null,
    threshold: 0.1
});


images.forEach(img => observer.observe(img));