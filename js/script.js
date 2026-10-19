  
  
  
  
  
  
  function abrirModal(caminhoDaImagem, textoDaLegenda) {
            document.getElementById('imagemModal').src = caminhoDaImagem; 
            document.getElementById('textoModal').innerText = textoDaLegenda; 
            document.getElementById('meuModal').classList.add('ativo'); 
        }




        function fecharModal() {
            document.getElementById('meuModal').classList.remove('ativo'); 
        }




        document.getElementById('meuModal').addEventListener('click', function(evento) {
            if (evento.target === this) {
                fecharModal();
            }
        });

        

        document.addEventListener('keydown', function(evento) {
            if (evento.key === "Escape") {
                fecharModal();
            }
        });