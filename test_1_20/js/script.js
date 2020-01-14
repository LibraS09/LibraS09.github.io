document.addEventListener("DOMContentLoaded", () => {

    // vector
    document.querySelector('.vector').style.opacity = 1;
    new Vivus('my-svg', {
        duration: 200,
        start: 'autostart'
    });

    let slider_block = document.querySelector('.slider-content');

    // media
    function desktop_code(m) {
        if (m.matches) {
            // cursor
            let slider_text = document.querySelector('.cursor-text');
            slider_block.addEventListener('mouseover', (e) => {
                slider_text.classList.add('cursor-text_visible');
            });
            slider_block.addEventListener('mouseout', (e) => {
                slider_text.classList.remove('cursor-text_visible');
            });

            // parallax
            let box_arr = to_arr_object(document.querySelectorAll('.el-move'));

            function get_arr_el_move(arr) {
                for (let i = 0; i < arr.length; i++) {
                    let el_i = arr[i].element;
                    let box_coords = el_i.getBoundingClientRect();
                    arr[i].box_centerX = box_coords.left + (box_coords.width / 2);
                    arr[i].box_centerY = box_coords.top + (box_coords.height / 2);
                    arr[i].speed = el_i.dataset.speed;
                }
                return arr;
            }
            get_arr_el_move(box_arr);

            function get_mouse_pos(xRef, yRef, el) {
                let panelRect = el.getBoundingClientRect();
                return {
                    x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * panelRect.width,
                    y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * panelRect.height
                };
            };

            slider_block.addEventListener('mousemove', (e) => {
                let cursor_x = e.clientX;
                let cursor_y = e.clientY;
                // cursor
                slider_text.style.left = cursor_x + 20 + "px";
                slider_text.style.top = cursor_y + 20 + "px";

                // parallax
                let mouse_pos = get_mouse_pos(cursor_x, cursor_y, slider_block);
                for (let i = 0; i < box_arr.length; i++) {
                    let distX = mouse_pos.x - box_arr[i].box_centerX,
                        distY = mouse_pos.y - box_arr[i].box_centerY;
                    box_arr[i].element.style.transform = "translate(" + (-1 * distX) / box_arr[i].speed + "px," + (-1 * distY) / box_arr[i].speed + "px)";
                }
            });

        }
    }
    // media
    let m = window.matchMedia("(min-width: 1024px)");
    desktop_code(m);
    m.addListener(desktop_code);

});

// anime
let arr_img = document.querySelectorAll('.el-anime');

function anime_start(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add('anime');
    };
};

window.addEventListener("load", () => {

    anime_start(arr_img);

    let left_img = document.querySelector('.left-img__image');
    let right_img = document.querySelector('.right-img__image');
    // slider
    let slider_img = new Swiper('.slider-img', {
        slidesPerView: 1,
        loop: true,
        freeMode: true,
        effect: 'fade',
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        on: {
            transitionEnd: function () {
                let active = document.querySelector('.swiper-slide-active');
                right_img.src= active.previousElementSibling.children[0].src;
                left_img.src  = active.nextElementSibling.children[0].src;
            },
        }
    });
    let slider_text = new Swiper('.slider-text', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 5, //looped slides should be the same    
        thumbs: {
            swiper: slider_img,
        },
    });



});

function to_arr_object(arr) {
    let arr2 = [];
    let ob;
    for (let i = 0; i < arr.length; i++) {
        ob = {};
        ob.element = arr[i];
        arr2.push(ob);
    }
    return arr2;
}