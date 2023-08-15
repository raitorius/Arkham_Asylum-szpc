const persoN = document.querySelectorAll('.s');

let ocultoConteudo = document.querySelectorAll('.oculto');
ocultoConteudo.forEach(elemento => {
    elemento.style.display = 'none';
});

persoN.forEach((du) => {
    du.addEventListener('click', () => {
        ocultoConteudo.forEach(elemento => {
            elemento.style.display = ''; // Isso remove a propriedade 'display'
        });

        const imgAlter = document.querySelector('.imga');
        const idPers = du.attributes.id.value;
        imgAlter.src = `assets/img/card_${idPers}.png`;

        const tituloAlter = document.querySelector('.identidade')
        tituloAlter.innerHTML = du.getAttribute('data-name')

        const biograf = document.querySelector('.informac')
        biograf.innerHTML = du.getAttribute('data-description')

        let realname = document.getElementById('realName')
        realname.innerHTML = du.getAttribute('data-realName')

        let ocupation = document.getElementById('ocupation')
        ocupation.innerHTML = du.getAttribute('data-ocupation')

        let baseOp = document.getElementById('baseOper')
        baseOp.innerHTML = du.getAttribute('data-baseOp')

        let eyes = document.getElementById('olhos')
        eyes.innerHTML = du.getAttribute('data-olhos')

        let hair = document.getElementById('cabelo')
        hair.innerHTML = du.getAttribute('data-cabelo')

        let altura = document.getElementById('altura')
        altura.innerHTML = du.getAttribute('data-altura')

        let peso = document.getElementById('peso')
        peso.innerHTML = du.getAttribute('data-peso')

        let Fapper = document.getElementById('pApar')
        Fapper.innerHTML = du.getAttribute('data-apar')

        let info01 = document.querySelector('#info01')
        info01.innerHTML = du.getAttribute('info01')

        let info02 = document.querySelector('#info02')
        info02.innerHTML = du.getAttribute('info02')

        let info03 = document.querySelector('#info03')
        info03.innerHTML = du.getAttribute('info03')

        let info04 = document.querySelector('#info04')
        info04.innerHTML = du.getAttribute('info04')

        let info05 = document.querySelector('#info05')
        info05.innerHTML = du.getAttribute('info05')

        let info06 = document.querySelector('#info06')
        info06.innerHTML = du.getAttribute('info06')

        let info07 = document.querySelector('#info07')
        info07.innerHTML = du.getAttribute('info07')

        let info08 = document.querySelector('#info08')
        info08.innerHTML = du.getAttribute('info08')

        let info09 = document.querySelector('#info09')
        info09.innerHTML = du.getAttribute('info09')

        let info10 = document.querySelector('#info10')
        info10.innerHTML = du.getAttribute('info10')

        let info11 = document.querySelector('#info11')
        info11.innerHTML = du.getAttribute('info11')

    })
})

let currentTut = 1;

function proximoTut() {
    const tuts = document.querySelectorAll('#div');

    tuts[currentTut - 1].style.zIndex = 1;
    tuts[(currentTut % 3)].style.zIndex = 3;
    tuts[((currentTut + 1) % 3)].style.zIndex = 2;

    tuts[currentTut - 1].style.top = '400px'; // Top para z-index 1
    tuts[(currentTut % 3)].style.top = '500px'; // Top para z-index 3
    tuts[((currentTut + 1) % 3)].style.top = '450px'; // Top para z-index 2

    currentTut = (currentTut % 3) + 1;
}

console.log(info01)





