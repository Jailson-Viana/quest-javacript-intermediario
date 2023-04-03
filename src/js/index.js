const aviso = document.querySelectorAll(".alerta")
const botao = document.getElementById("botao-enviar")
const todosOsCampos = document.querySelectorAll(".input")


botao.addEventListener('click', function () {
    todosOsCampos.forEach(function (input) {
        aviso.forEach(function (item) {
            const campoVisitado = input.id;
            const avisoVisitado = item.id;

            if (input.value !== '') {
                input.style.borderColor = '#F52E2E';
                input.style.borderColor = '#3CCC87';
                if (avisoVisitado === campoVisitado) {
                    item.classList.remove('mostrar');
                }
            } else {
                input.style.borderColor = '#3CCC87';
                input.style.borderColor = '#F52E2E';
                if (avisoVisitado === campoVisitado) {
                    item.classList.add('mostrar');
                }
            }
        })
    })
})




