const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarbotao()
        selecionarPersonagem()

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado")
    })
})


function selecionarPersonagem() {
    const personagenSelecionado = document.querySelector(".personagem.selecionado")
    personagenSelecionado.classList.remove("selecionado")
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}