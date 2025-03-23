var containers;
function initDrawers() {
    containers = document.querySelectorAll(".content");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
    containers.forEach(container => {
        let content = container.querySelector(".additional_content");
        content.removeAttribute("aria-hidden");
        let heightOfContent = content.getBoundingClientRect().height;
        container.style.setProperty("--containerHeight", `${heightOfContent}px`);
        setTimeout(e => {
            container.classList.add("height-is-set");
            content.setAttribute("aria-hidden", "true");
        }, 0);
    });
}

function wireUpTriggers() {
    containers.forEach(container => {
        let btn = container.querySelector(".Process_block_content_body").querySelector(".trigger");
        let content = container.querySelector(".additional_content");
        btn.onclick = function(){
            btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") === "false" ? "true" : "false");
            btn.getAttribute("aria-expanded") === "false" ? btn.innerHTML='-' : btn.innerHTML='+';
            container.setAttribute(
                "data-drawer-showing",
                container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
            );
            content.setAttribute(
                "aria-hidden",
                content.getAttribute("aria-hidden") === "true" ? "false" : "true"
            );
        };
    });
}


var button_scroll_left = document.querySelector('.arrow-left-4');
var button_scroll_right = document.querySelector('.arrow-right-4');
var progress_image = document.querySelectorAll('.progress img');

var window_comment = document.querySelector('.Testimonials_block_window')
var counter_progress = 1;
button_scroll_left.addEventListener('click', scrollLeft);
button_scroll_right.addEventListener('click', scrollRight);

function scrollLeft(){
    if(counter_progress>0){
        counter_progress--;
        let position_x = 0;
        let interval_scroll = setInterval(()=>{
            position_x+=5;
            let position = parseInt(window.getComputedStyle(window_comment).getPropertyValue('left').slice(0,-2));
            window_comment.style.left = `${position+5}px`;
            if(position_x>=648){
                position_x=0;
                clearInterval(interval_scroll);
            }
        }, 3)
        progress_image[counter_progress+1].removeAttribute("src");
        progress_image[counter_progress+1].setAttribute("src", "Images/Vector (5).png");
        progress_image[counter_progress].removeAttribute("src");
        progress_image[counter_progress].setAttribute("src", "Images/11zon_cropped (33).png");
    }
}

function scrollRight(){
    if(counter_progress<4){
        counter_progress++;
        let position_x = 0;
        let interval_scroll = setInterval(()=>{
            position_x+=5;
            let position = parseInt(window.getComputedStyle(window_comment).getPropertyValue('left').slice(0,-2));
            window_comment.style.left = `${position-5}px`;
            if(position_x>=648){
                position_x=0;
                clearInterval(interval_scroll);
            }
        }, 3)
        progress_image[counter_progress-1].removeAttribute("src");
        progress_image[counter_progress-1].setAttribute("src", "Images/Vector (5).png");
        progress_image[counter_progress].removeAttribute("src");
        progress_image[counter_progress].setAttribute("src", "Images/11zon_cropped (33).png");
    }
}
