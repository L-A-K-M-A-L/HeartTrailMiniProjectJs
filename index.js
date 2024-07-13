// const bodyElement = document.querySelector('body');

// bodyElement.addEventListener('mousemove', (event)=>{
//     const  xPos = event.clientX;
//     const yPos = event.clientY;
//     const spanElement = document.createElement('span');
    
//     spanElement.style.left = xPos +'px';
//     spanElement.style.top = yPos +'px';

//     const size = Math.random() * 150;
//     spanElement.style.width = size +'px';
//     spanElement.style.height = size +'px';

//     bodyElement.appendChild(spanElement);

//     setTimeout(() => {
//         spanElement.remove();
//     },3000)

// });

const main = document.querySelector('.main-container');

main.addEventListener('mousemove', (event) => {
    const spanEl = document.createElement('span');

    const xPos = event.clientX;
    const yPos = event.clientY;

    spanEl.style.top = yPos +'px';
    spanEl.style.left = xPos+'px';

    const size = Math.random() *100;

    spanEl.style.width = size +'px';
    spanEl.style.height = size+'px';

    main.appendChild(spanEl);

    setTimeout(()=>{
        spanEl.remove();
    }, 3000);


});