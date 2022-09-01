const fader = document.querySelector(".fade-in");
const appearOptions = {
    threshold : 0.5,
    rootMargin : "0px"
};
const appearOnSroll = new IntersectionObserver(function(entries,appearOnSroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        entry.target.classList.add("appear");
        appearOnSroll.unobserve(entry.target);
    });
},appearOptions);
appearOnSroll.observe(fader);
