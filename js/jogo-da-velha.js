$(function(){

	const imgX = 'img/x.png';
	const img0 = 'img/0.png';

	//criar e popular array
	var posicoesArray = [];
	for (i= 0; i < 10; i++) {
		posicoesArray[i] = 0;
	}
	posicoesArray[9] = 1;

	var verificaArray = [];
	var verificaArray0 = [];

	var arrayVencedor = [];
	for (i = 0; i < 8; i++) {
		arrayVencedor[i] = 0;
	}

	//variáveis da página
	//////////////////////////
	var seletorArea0 = $('.js-area0');
	var seletorArea1 = $('.js-area1');
	var seletorArea2 = $('.js-area2');
	var seletorArea3 = $('.js-area3');
	var seletorArea4 = $('.js-area4');
	var seletorArea5 = $('.js-area5');
	var seletorArea6 = $('.js-area6');
	var seletorArea7 = $('.js-area7');
	var seletorArea8 = $('.js-area8');
	var areaSeletor = $('.js-areaSeletor');
	var areaSeletorImg = $('.js-areaSeletorImg');
	var areSeletorImgChange = $('.js-areaSeletorImgChange');

	//eventos
	/////////////
	seletorArea0.on('click', function(e) {
		if (posicoesArray[0] == 0) {
			adicionarIMG(seletorArea0, posicoesArray[9], 0);
		}
	});

	seletorArea1.on('click', function(e) {
		if (posicoesArray[1] == 0) {
			adicionarIMG(seletorArea1, posicoesArray[9], 1);
		}
	});

	seletorArea2.on('click', function(e) {
		if (posicoesArray[2] == 0) {
			adicionarIMG(seletorArea2, posicoesArray[9], 2);
		}
	});

	seletorArea3.on('click', function(e) {
		if (posicoesArray[3] == 0) {
			adicionarIMG(seletorArea3, posicoesArray[9], 3);
		}
	});

	seletorArea4.on('click', function(e) {
		if (posicoesArray[4] == 0) {
			adicionarIMG(seletorArea4, posicoesArray[9], 4);
		}
	});

	seletorArea5.on('click', function(e) {
		if (posicoesArray[5] == 0) {
			adicionarIMG(seletorArea5, posicoesArray[9], 5);
		}
	});

	seletorArea6.on('click', function(e) {
		if (posicoesArray[6] == 0) {
			adicionarIMG(seletorArea6, posicoesArray[9], 6);
		}
	});

	seletorArea7.on('click', function(e) {
		if (posicoesArray[7] == 0) {
			adicionarIMG(seletorArea7, posicoesArray[9], 7);
		}
	});

	seletorArea8.on('click', function(e) {
		if (posicoesArray[8] == 0) {
			adicionarIMG(seletorArea8, posicoesArray[9], 8);
		}
	});

	//funções
	/////////////
	var adicionarIMG = function(obj, imagem, posicao){
		var img = '';
		var verificaVencedor = false;

		if (imagem == 1) {
			img = imgX;
		};
		if (imagem == 2) {
			img = img0;
		}

		obj.prepend('<img src="' + img + '">');
		obj.find('img').addClass('posicao-img');
		posicoesArray[posicao] = imagem;

		if (imagem == 1) {
			posicoesArray[9] = 2;

			areSeletorImgChange.attr('src', img0);
		} else {
			posicoesArray[9] = 1;

			areSeletorImgChange.attr('src', imgX);
		}

		verificaVencedor = verificarPosicoes();

		if (verificaVencedor == true) {
			travarBotoes();

			montarQuadroVencedor();
		}
	};

	var verificarPosicoes = function() {
		var verificaVencedor = false;

		for (i = 0; i < 8; i++) {
			verificaArray[i] = 0;
			verificaArray0[i] = 0;
		}

		for (i = 0; i < 9; i++) {
			if (i >= 0 && i < 3) {
				verificaArray[0] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[0] = 1;
				}
			}
			if (i >= 3 && i < 6) {
				verificaArray[1] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[1] = 1;
				}
			}
			if (i >= 6 && i <= 8) {
				verificaArray[2] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[2] = 1;
				}
			}
			if (i == 0 || i == 3 || i == 6) {
				verificaArray[3] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[3] = 1;
				}
			}
			if (i == 1 || i == 4 || i == 7) {
				verificaArray[4] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[4] = 1;
				}
			}
			if (i == 2 || i == 5 || i == 8) {
				verificaArray[5] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[5] = 1;
				}
			}
			if (i == 0 || i == 4 || i == 8) {
				verificaArray[6] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[6] = 1;
				}
			}
			if (i == 2 || i == 4 || i == 6) {
				verificaArray[7] += posicoesArray[i];
				if (posicoesArray[i] == 0) {
					verificaArray0[7] = 1;
				}
			}
		}

		for (i = 0; i < 8; i++) {
			if (verificaArray[i] == 3 && verificaArray0[i] == 0) {
				arrayVencedor[i] = 1;

				verificaVencedor = true;
			}
			if (verificaArray[i] == 6) {
				arrayVencedor[i] = 2;

				verificaVencedor = true;
			}
		}

		return verificaVencedor;
	};

	var travarBotoes = function() {
		for (i= 0; i < 9; i++) {
			posicoesArray[i] = 1;
		}
	}

	var montarQuadroVencedor = function() {
		quadrosVencedorAux(arrayVencedor[0], seletorArea0, seletorArea1, seletorArea2);
		quadrosVencedorAux(arrayVencedor[1], seletorArea3, seletorArea4, seletorArea5);
		quadrosVencedorAux(arrayVencedor[2], seletorArea6, seletorArea7, seletorArea8);
		quadrosVencedorAux(arrayVencedor[3], seletorArea0, seletorArea3, seletorArea6);
		quadrosVencedorAux(arrayVencedor[4], seletorArea1, seletorArea4, seletorArea7);
		quadrosVencedorAux(arrayVencedor[5], seletorArea2, seletorArea5, seletorArea8);
		quadrosVencedorAux(arrayVencedor[6], seletorArea0, seletorArea4, seletorArea8);
		quadrosVencedorAux(arrayVencedor[7], seletorArea6, seletorArea4, seletorArea2);
	}

	var quadrosVencedorAux = function(array, obj1, obj2, obj3) {
		switch(array) {
			case 1:
				quadrosVencedor(obj1, obj2, obj3, 1);
			break;
			case 2 :
				quadrosVencedor(obj1, obj2, obj3, 2);
			break;
		}
	}

	var quadrosVencedor = function(obj1, obj2, obj3, tipo) {

		if (tipo == 1) {
			obj1.addClass('quadro-win-x');
			obj2.addClass('quadro-win-x');
			obj3.addClass('quadro-win-x');
		}

		if (tipo == 2) {
			obj1.addClass('quadro-win-0');
			obj2.addClass('quadro-win-0');
			obj3.addClass('quadro-win-0');
		}

		obj1.removeClass('quadros');
		obj1.addClass('quadros-win');

		obj2.removeClass('quadros');
		obj2.addClass('quadros-win');

		obj3.removeClass('quadros');
		obj3.addClass('quadros-win');
	}

});