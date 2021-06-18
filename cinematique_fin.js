var cine_fin1;
var cine_cage;

var cine_fin2;

var cine_fin3;
var cine_fin_fin;

var deroulement = 1;
var ready = true;

class cinematique_fin extends Phaser.Scene{
    constructor(){
        super("cinematique_fin");
    }
    init(data){
    }
    preload ()
    {

        this.load.spritesheet('cine_fin1', 'assets/UI/cinematique_fin1.png', { frameWidth: 896, frameHeight: 448 });
        this.load.spritesheet('cine_cage', 'assets/UI/cinematique_fin_cage.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('cine_fin2', 'assets/UI/cinematique_fin2.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('cine_fin3', 'assets/UI/cinematique_fin3.png', { frameWidth: 896, frameHeight: 448 });
        this.load.spritesheet('cine_fin_fin', 'assets/UI/cinematique_fin_fin.png', { frameWidth: 353, frameHeight: 201 });

        
    }

    create ()
    {
        deroulement = 1;
        ready = true;

        cine_fin3 = this.add.sprite(448,224, 'cine_fin3');
        cine_fin_fin = this.add.sprite(448,324, 'cine_fin_fin');
        cine_fin_fin.alpha = 0;

        cine_fin2 = this.add.sprite(448,224, 'cine_fin2');

        cine_fin1 = this.add.sprite(448,224, 'cine_fin1');
        cine_cage = this.add.sprite(448,224, 'cine_cage');
        cine_cage.alpha = 0;
        
        


        cursors = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.Z,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.Q,
            right:Phaser.Input.Keyboard.KeyCodes.D,

            timeInput:Phaser.Input.Keyboard.KeyCodes.SPACE,
            platformInput:Phaser.Input.Keyboard.KeyCodes.SHIFT,
            ballInput:Phaser.Input.Keyboard.KeyCodes.E,

            cheat1Input:Phaser.Input.Keyboard.KeyCodes.G,
            cheat3Input:Phaser.Input.Keyboard.KeyCodes.B,

            echapInput:Phaser.Input.Keyboard.KeyCodes.ESC,
        
            });


    }
    
    update ()
    {
        if (deroulement === 1 && ready){
            ready = false
            deroulement = 2;

            this.cameras.main.fadeIn(1000);
            this.cameras.main.zoomTo(1.20, 5000);

            //game.add.tween(cine_cage).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            cine_cage.alpha = 1;
            cine_cage.anims.play('cineFinCage',true);

            setTimeout(function(){ ready = true }, 5000);

        }
        if (deroulement === 2 && ready){
            ready = false

            cine_fin1.alpha = 0;
            cine_cage.alpha = 0;
            cine_fin2.anims.play('cineFin2',true);

            this.cameras.main.fadeIn(500);
            this.cameras.main.setZoom(1.25);
            this.cameras.main.zoomTo(1, 2800);

            deroulement = 3;
            setTimeout(function(){ ready = true }, 2800);

        }
        if (deroulement === 3 && ready){
            ready = false

            cine_fin2.alpha = 0;

            //game.add.tween(cine_fin_fin).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
            cine_fin_fin.alpha = 1;

            this.cameras.main.fadeIn(500);
            this.cameras.main.setZoom(1);
            this.cameras.main.zoomTo(1.20, 4000);
            
            

            deroulement = 4;
            setTimeout(function(){ ready = true }, 5000);

        }

        if (deroulement === 4 && ready){
            this.scene.start("menu");

            checkpoint = '1';

            oeilActivated = false;
            fin = false;
            timeCollected = false;
            platformCollected = false;
            ballCollected = false;
        }

        if (cursors.echapInput.isDown){
            this.scene.start("menu");

            checkpoint = '1';

            oeilActivated = false;
            fin = false;
            timeCollected = false;
            platformCollected = false;
            ballCollected = false;
        }
    }
}