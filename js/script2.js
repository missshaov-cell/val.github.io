const data = {
    imgs: [
        p1 = {
            img: "../img/p1.jpg",
            desc: "кисонька я тебя очень сильно люблю, спасибо что ты есть, я хочу, чтобы мы всегда были вместе"
        },
        p2 = {
            img: "../img/p2.jpg",
            desc: "ты самое хорошее что происходило в моей жизни :3"
        },
        p3= {
            img: "../img/p3.jpg",
            desc: "я люблю тебя никусечка, люблю твои глаза, твой запах, всю тебя, целую!!!"
        }
    ]
}

const image = document.getElementById('image')
const title = document.getElementById('title')
const next = document.getElementById('nextp')
const last = document.getElementById('lastp')

let currentIndex = 0


function updateContent() {
    image.setAttribute('src', data.imgs[currentIndex].img)
    title.textContent = data.imgs[currentIndex].desc
}

// Next button click handler
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % data.imgs.length
    updateContent()
})

// Previous button click handler
last.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + data.imgs.length) % data.imgs.length
    updateContent()
})

// Initialize with first image and description
updateContent()