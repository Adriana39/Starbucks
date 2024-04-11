
    let circulo = document.querySelector(".circulo")
    let imgCopao = document.querySelector(".grande")
    let verde = document.querySelector(".verde")
    let amarelo = document.querySelector(".amarelo")
    let rosa = document.querySelector(".rosa")

    verde.addEventListener("click", () => {
        imgCopao.src = "./img/img1.png"
        circulo.style.background = "#017143"
    })

    amarelo.addEventListener("click", () => {
        imgCopao.src = "./img/img2.png"
        circulo.style.background = "#f17cba"
    })

    rosa.addEventListener("click", () => {
        imgCopao.src = "./img/img3.png"
        circulo.style.background = "#00c7ff"
    })


