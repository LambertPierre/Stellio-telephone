

var retour;

var vol0;
var vol30;
var vol60;
var vol100;

var interPCd;
var interPCg;
var interTELd;
var interTELg;


class parametres extends Phaser.Scene{
    constructor(){
        super("parametres");
    }
    init(data){
    }
    preload ()
    {

        this.load.spritesheet('parametres', 'assets/UI/parametre/parametre.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('interPCd', 'assets/UI/parametre/inter_pc_d.png', { frameWidth: 225, frameHeight: 187 });
        this.load.spritesheet('interPCg', 'assets/UI/parametre/inter_pc_g.png', { frameWidth: 225, frameHeight: 187 });
        this.load.spritesheet('interTELd', 'assets/UI/parametre/inter_tel_d.png', { frameWidth: 225, frameHeight: 187 });
        this.load.spritesheet('interTELg', 'assets/UI/parametre/inter_tel_g.png', { frameWidth: 225, frameHeight: 187 });

        this.load.spritesheet('vol0', 'assets/UI/parametre/vol_0.png', { frameWidth: 54, frameHeight: 61 });
        this.load.spritesheet('vol30', 'assets/UI/parametre/vol_30.png', { frameWidth: 66, frameHeight: 67 });
        this.load.spritesheet('vol60', 'assets/UI/parametre/vol_60.png', { frameWidth: 73, frameHeight: 94 });
        this.load.spritesheet('vol100', 'assets/UI/parametre/vol_100.png', { frameWidth: 78, frameHeight: 113 });
        
        this.load.spritesheet('retour', 'assets/UI/retour.png', { frameWidth: 154, frameHeight: 83 });


        
        

        
    }

    create ()
    {

        this.add.image(448,224, 'parametres').setScrollFactor(0);


        // ----------------- Animation --------------------- //

            this.anims.create({
                key: 'interPCdNo',
                frames: [ { key: 'interPCd', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'interPCdYes',
                frames: [ { key: 'interPCd', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'interPCgNo',
                frames: [ { key: 'interPCg', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'interPCgYes',
                frames: [ { key: 'interPCg', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'interTELdNo',
                frames: [ { key: 'interTELd', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'interTELdYes',
                frames: [ { key: 'interTELd', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'interTELgNo',
                frames: [ { key: 'interTELg', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'interTELgYes',
                frames: [ { key: 'interTELg', frame: 1 } ],
                frameRate: 20
            })




            this.anims.create({
                key: 'vol0No',
                frames: [ { key: 'vol0', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'vol0Yes',
                frames: [ { key: 'vol0', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'vol30No',
                frames: [ { key: 'vol30', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'vol30Yes',
                frames: [ { key: 'vol30', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'vol60No',
                frames: [ { key: 'vol60', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'vol60Yes',
                frames: [ { key: 'vol60', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'vol100No',
                frames: [ { key: 'vol100', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'vol100Yes',
                frames: [ { key: 'vol100', frame: 1 } ],
                frameRate: 20
            })


        
        // ------------------------- Bouton INTER PC --------------------------------- //


        if (!tel){
            interPCd = this.add.sprite(375,280, 'interPCd').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            interPCd.on('pointerover', function (event) {

                interPCd.anims.play('interPCdYes',true);
                    
            });
            
            interPCd.on('pointerout', function (event) {
            
                interPCd.anims.play('interPCdNo',true);
            
            });

            interPCd.on('pointerdown', function(){

                intervertir = false;
    
            }, this);


            interPCg = this.add.sprite(120,290, 'interPCg').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            interPCg.on('pointerover', function (event) {

                interPCg.anims.play('interPCgYes',true);
                    
            });
            
            interPCg.on('pointerout', function (event) {
            
                interPCg.anims.play('interPCgNo',true);
            
            });

            interPCg.on('pointerdown', function(){

                intervertir = true;
    
            }, this);
        }
        

        // ------------------------- Bouton INTER TEL --------------------------------- //

        if (tel){
            interTELd = this.add.sprite(375,280, 'interTELd').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            interTELd.on('pointerover', function (event) {

                interTELd.anims.play('interTELdYes',true);
                
            });
        
            interTELd.on('pointerout', function (event) {
        
                interTELd.anims.play('interTELdNo',true);
        
            });

            interTELd.on('pointerdown', function(){

                intervertir = false;
    
            }, this);
            

            interTELg = this.add.sprite(120,290, 'interTELg').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            interTELg.on('pointerover', function (event) {

                interTELg.anims.play('interTELgYes',true);
                
            });
        
            interTELg.on('pointerout', function (event) {
        
                interTELg.anims.play('interTELgNo',true);
        
            });  

            interTELg.on('pointerdown', function(){

                intervertir = true;
    
            }, this);
        }



        // ------------------------- Bouton INTER TEL --------------------------------- //

        
        vol0 = this.add.sprite(530, 265, 'vol0').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        vol0.on('pointerover', function (event) {

            vol0.anims.play('vol0Yes',true);
                
        });
        
        vol0.on('pointerout', function (event) {
        
            vol0.anims.play('vol0No',true);
        
        });
        
        vol0.on('pointerdown', function(){

            volume = '0';

        }, this);
            

        vol30 = this.add.sprite(600,245, 'vol30').setScrollFactor(0).setInteractive({ cursor: 'pointer' }).setScale(1.3);

        vol30.on('pointerover', function (event) {

            vol30.anims.play('vol30Yes',true);
                
        });
        
        vol30.on('pointerout', function (event) {
        
            vol30.anims.play('vol30No',true);
        
        });  

        vol30.on('pointerdown', function(){

            volume = '30';

        }, this);


        vol60 = this.add.sprite(680,225, 'vol60').setScrollFactor(0).setInteractive({ cursor: 'pointer' }).setScale(1.3);

        vol60.on('pointerover', function (event) {

            vol60.anims.play('vol60Yes',true);
                
        });
        
        vol60.on('pointerout', function (event) {
        
            vol60.anims.play('vol60No',true);
        
        });

        vol60.on('pointerdown', function(){

            volume = '60';

        }, this);
            

        vol100 = this.add.sprite(760,210, 'vol100').setScrollFactor(0).setInteractive({ cursor: 'pointer' }).setScale(1.3);

        vol100.on('pointerover', function (event) {

            vol100.anims.play('vol100Yes',true);
                
        });
        
        vol100.on('pointerout', function (event) {
        
            vol100.anims.play('vol100No',true);
        
        }); 

        vol100.on('pointerdown', function(){

            volume = '100';

        }, this);


        




        // ------------------------- Bouton Retour --------------------------------- //

        retour = this.add.sprite(735,355, 'retour').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        retour.on('pointerover', function (event) {

            retour.anims.play('retourYes',true);
            
    
        });
    
        retour.on('pointerout', function (event) {
    
            retour.anims.play('retourNo',true);
    
        });

        retour.on('pointerdown', function(){

            this.scene.start("menu");

        }, this)



        

        

        

        


    }
    
    update ()
    {
        if (!intervertir){
            if (!tel){
                interPCg.alpha = 0.5;
            }
            else if (tel){
                interTELg.alpha = 0.5;
            }
            if (!tel){
                interPCd.alpha = 1;
            }
            else if (tel){
                interTELd.alpha = 1;
            }
        }
        else if (intervertir){
            if (!tel){
                interPCd.alpha = 0.5;
            }
            else if (tel){
                interTELd.alpha = 0.5;
            }
            if (!tel){
                interPCg.alpha = 1;
            }
            else if (tel){
                interTELg.alpha = 1;
            }
        }

        if (volume == '0'){
            vol0.alpha = 1;
        }
        else {
            vol0.alpha = 0.5;
        }

        if (volume == '30'){
            vol30.alpha = 1;
        }
        else {
            vol30.alpha = 0.5;
        }

        if (volume == '60'){
            vol60.alpha = 1;
        }
        else {
            vol60.alpha = 0.5;
        }

        if (volume == '100'){
            vol100.alpha = 1;
        }
        else {
            vol100.alpha = 0.5;
        }
        
    }
}