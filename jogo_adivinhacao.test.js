const { gerarNumeroAleatorio, verificarPalpite } = require('./jogo_logica');


describe('Função gerarNumeroAleatorio', () => {
    test('escolhe o número de 1 a 100', () => {
        const numeroAleatorio = gerarNumeroAleatorio(1, 100);
    });

    test('garante de que o número é de fato aleatório', () => {
        const numeroAleatorio1 = gerarNumeroAleatorio(1, 100);
        const numeroAleatorio2 = gerarNumeroAleatorio(1, 100);

        expect(numeroAleatorio1).not.toBe(numeroAleatorio2);
    });
});


describe('Função verificarPalpite', () => {

    test('retorna mensagem correta', () => {
        const palpite = 50;
        const resultado = verificarPalpite(palpite);

        expect(resultado.mensagem).toEqual('Parabéns! Você acertou o número em 1 tentativa.');
    });

    test('retorna que o número é maior', () => {
        const palpite = 40;
        const resultado = verificarPalpite(palpite);

        expect(resultado.mensagem).toEqual('Tente um número maior.');
    });

    test('retorna que o número é menor', () => {
        const palpite = 60;
        const resultado = verificarPalpite(palpite);

        expect(resultado.mensagem).toEqual('Tente um número menor.');
    });
});
