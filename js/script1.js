const date = document.getElementById('date')
const title = document.getElementById('title')
const button = document.getElementById('buttonYes')
const link = document.getElementById('linkNextPage')

let stage = 0; // Используем stage вместо i для большей понятности
date.value = ""
date.style.display = "none" // Скрываем поле ввода изначально

findValueInDate = (a) => {
    verifyDay = a.includes("31")
    verifyMonth = a.includes("08") || a.includes("август")
    if (verifyDay && verifyMonth) {
        return true
    } else {
        return false
    }
}

button.addEventListener('click', () => {
    
    if (stage === 0) {
        // Первый клик - показываем вопрос
        title.textContent = `Когда мы познакомились? (дд.мм)`
        button.textContent = "Ответить"
        date.style.display = "block"
        stage = 1
    } 
    else if (stage === 1) {
        // Проверяем ответ на вопрос о знакомстве
        if (findValueInDate(date.value)) {
            title.textContent = `хмм это было очевидно.. 
        но может быть ты подскажешь мне вопрос получше??⬇⬇пиши`
            date.value = ""
            stage = 2
        } else {
            title.textContent = "Неверно, попробуй еще раз"
            date.value = ""
            // stage остается 1, чтобы можно было попробовать снова
        }
    } 
    else if (stage === 2) {
        if (date.value.trim() !== "") {
            title.textContent = date.value
            date.value = ""
            stage = 3 
        }
    }
    else if (stage === 3) {
        link.style.display = "block"
        button.style.display = "none"
        date.style.display = "none"
        title.textContent = "Умничка!!"
    }
})