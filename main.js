const main = document.querySelector('.main');
const text = document.querySelector('h1');
const move = 300; //300px

let shadow = (e) => {
    const { offsetWidth: width, offsetHeight: height } = main;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

       const xWalk = Math.round((x / width * move) - (move / 3));
    const yWalk = Math.round((y / height * move) - (move / 3));

        text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}

main.addEventListener('mousemove', shadow);