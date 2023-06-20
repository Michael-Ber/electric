
const scroll = ({
    arrowSelector,
    arrowActiveClass
}) => {
    const links = document.querySelectorAll('[href^="#"]');
    const speed = 0.2;
    let arrow = document.querySelector(arrowSelector);
    
    window.addEventListener('scroll', () => {
        let fromTop = document.documentElement.scrollTop;
        if(arrow) {
            if(fromTop > 850) {
                arrow.classList.add(arrowActiveClass);
            }else {
                arrow.classList.remove(arrowActiveClass);
            }
        }
        
    });

    arrow && arrow.addEventListener('click', function(e) {
        e.preventDefault();
        let toSection = - document.documentElement.scrollTop;
        let fromTop = document.documentElement.scrollTop;
        let start = null;
        requestAnimationFrame(step);
        function step(time) {
            if(start === null) {
                start = time;
            }
            let progress = time - start;
            let r = toSection < 0 ? Math.max(fromTop - progress/speed, fromTop + toSection): Math.min(fromTop + progress/speed, fromTop + toSection);
            document.documentElement.scrollTo(0, r);
            console.log(r, fromTop + toSection)
            if(r != fromTop + toSection) {
                requestAnimationFrame(step);
            }
        }
    })

    links.forEach(link => {
        if(link.hash) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                let toSection = document.querySelector(link.hash).getBoundingClientRect().top - 100;
                let fromTop = document.documentElement.scrollTop;
                let start = null;
                requestAnimationFrame(step);
                
                function step(time) {
                    if(start === null) {
                        start = time;
                    }
                    let progress = time - start;
                    let r = toSection < 0 ? Math.max(fromTop - progress/speed, fromTop + toSection): Math.min(fromTop + progress/speed, fromTop + toSection);
                    document.documentElement.scrollTo(0, r);
                    console.log(r, fromTop + toSection);
                    if(r != fromTop + toSection) {
                        requestAnimationFrame(step);
                    }
                }
            });
        }
    })


};

export { scroll };