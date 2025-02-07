var config = {
    
    //Em config encontramos um conjunto de configurações básicas do nosso jogo. Phaser.AUTO indica que o navegador escolhe automaticamente o tipo de renderizador da página web
    type: Phaser.AUTO,
    
    //largura
    width: 800,
    
    //altura
    height: 600,


    scene: {
        
        //scene que define as funções que serão executadas durante o ciclo de vida do jogo (preload, create, update).
        preload: preload,
        create: create,
        update: update
    }
};
    //Estamos criando uma váriavel Game e estamos guardando um novo jogo nela
    //Que usará as configurações que definimos em config
var game = new Phaser.Game(config);
 
var crustaceo;

//preload é o que irei usar para carregar os recursos do jogo
function preload(){
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('areia', 'assets/areia.png');
    this.load.image('peixe', 'assets/peixes/crustaceo.png');

}   

//poderemos criar e configurar elementos dentro do jogo 
function create() {           
    this.add.image(400, 300, 'mar');
    //this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(175, 419, 'areia');
    this.add.image(650, 419, 'areia');
    this.add.image(400, 50, 'logo').setScale(0.5);
    // this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);

    crustaceo = this.add.image(400, 300, 'peixe');
    crustaceo.setFlip(true,false);


}

//para definirmos a lógica de atualização em tempo real do jogo
//depois de executar as primeiras funçoes será chamada de loop constante
function update() {           
    
    //posição horizontal a posição x do crustaceo deve assumir o valor da posição x do mouse
    crustaceo.x = this.input.x;

    //posição vertical a posição x do crustaceo deve assumir o valor da posição x do mouse
    crustaceo.y = this.input.y;
}
