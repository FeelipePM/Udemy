let rodada = 1;
let matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready( function(){
  $('#btn_inicia_jogo').click(function() {

    if ($('#apelido_jogador1').val() == '') {
      alert('Apelido do Jogador 1 não foi preenchido');
      return false;
    }

    if ($('#apelido_jogador2').val() == '') {
      alert('Apelido do Jogador 2 não foi preenchido');
      return false;
    }

    $('#nome_jogador1').html($('#apelido_jogador1').val());
    $('#nome_jogador2').html($('#apelido_jogador2').val());

    $('#pagina_inicial').hide();
    $('#palco_jogo').show();

  });

    $('.jogada').click( function() {

      let id_campo_clicado = this.id;
      $('#' + id_campo_clicado).off();
      jogada(id_campo_clicado);
    });

    function jogada(id) {
      let icone = '';
      let ponto = 0;

      if ((rodada % 2) == 1) {
        icone = 'url("imagens/marcacao_1.png")';
        ponto = -1;
      } else {
        icone = 'url("imagens/marcacao_2.png")';
        ponto = 1;
      }

      rodada++;

      $('#' + id).css('background-image', icone);

      let linha_coluna =id.split('-');

      matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

      verifica_combinacao();
      
    }

    function verifica_combinacao() {
      

      //verifica na horizontal
      let pontos = 0;
      for (let i = 1; i <= 3; i++) {
        pontos = pontos + matriz_jogo['a'][i];
        
      }
        ganhador(pontos);

      pontos = 0;
      for (let i = 1; i <= 3; i++) {
        pontos = pontos + matriz_jogo['b'][i];
        
      }
        ganhador(pontos);

      pontos = 0;
      for (let i = 1; i <= 3; i++) {
        pontos = pontos + matriz_jogo['c'][i];
        
      }
        ganhador(pontos);

      //verifica na vertical

      for (let l = 1; l <= 3; l++) {
        pontos = 0;
        pontos += matriz_jogo['a'][l];
        pontos += matriz_jogo['b'][l];
        pontos += matriz_jogo['c'][l];

        ganhador(pontos);
        
      }

      //verifica na diagonal

      pontos = 0;
      pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
      ganhador(pontos);

      pontos = 0;
      pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
      ganhador(pontos);

    }

    function ganhador(pontos) {
      if (pontos == -3) {
        let jogador_1 = $('#apelido_jogador1').val();
        alert(jogador_1 + ' Venceu!');
        $('.jogada').off();

      } else if(pontos == 3) {
        let jogador_2 = $('#apelido_jogador2').val();
        alert(jogador_2 + ' Venceu!');
        $('.jogada').off();
      }
    }

});