const yes = document.getElementById('buttonYes')
const no = document.getElementById('buttonNo')
const link = document.getElementById('linkNextPage')
const title = document.getElementById('title') 

let widthYes = parseInt(yes.style.width) || 40;
no.addEventListener('click', () => {
    widthYes = widthYes + 10;
    yes.style.width = widthYes + 'px';
    console.log('Yes button width:', widthYes + 'px');
    
    if (widthYes >= 200) {
        title.textContent = "Ну нажми ты уже чтоли";
        console.log('Текст изменен');
    }
});

yes.addEventListener('click', () => {
    if (widthYes > 60) {
        link.style.display = "block"
        console.log('ОТОБРАЖЕНИЕ')
    }
    
}); 
