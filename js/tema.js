const btn = document.querySelector("button");
const popup = document.getElementById("popup");
let type;
const switcher = document.querySelector('.btn');
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme')
            var className = document.body.className;
            if(className == "light-theme") {
                this.textContent = "Tema";
            }
            else { 
                 this.textContent = "Tema";
            }
    });

            function dados(type) {
                if (type === "site") {
                    popup.innerText = "Contextualização geral sobre Fake Newa. Site Brasil escola, 3 de jun. de 2024";
                    popup.style.padding = "1vh";
                } 
                if (type === "game") {
                    popup.innerText = "Jogo educativo com abordagem sobre Fake News, desenvolvido  por alunos do Instituto Federal de Sâo Paulo campus guarulhos ";
                    popup.style.padding = "1vh";
                }
                if (type === "Documentos") {
                    popup.style.transitionDuration = "1s";
                    popup.innerText = "Documentos gerais do projeto";
                    popup.style.padding = "1vh";
                }
                if (type === "out") {
                    popup.style.transitionDuration = "0.3s";
                    popup.innerText = "";
                    popup.style.padding = null;
                }

        }
