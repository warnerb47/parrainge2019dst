import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) { 
    
    document.addEventListener('keyup', (e) => {
      if (e.key == '7'){
        console.log("restart");
        //this.sendMessage('restart');
        if (this.fin == true){
          this.fin = false;
          this.reinitialiser();
        }
        this.clickTheClick();
      }
      if (e.key == '1'){
        console.log("automatique");
        this.automatique=true;
        if (this.fin == true){
          this.fin = false;
          this.reinitialiser();
        }
        this.clickTheClick();
      }
    }); 
   }

  ngOnInit() {
   this.getFilleuls();
   this.getParrains();
  }
  
  cliked= false;
  zoom = false;
  tof2;
  tof3;
  tof4;
  finAnime1 = true;
  finAnime2 = false;
  showFinalImage1= false;
  showFinalImage2= false;
  round2 = false;
  automatique = false;

  selected= {
    tel_p: '',
    prenom: '',
    nom: '',
    email: '',
    formation: '',
    tel: '',
    image_file: '../assets/images/default.png'    
  };

formation="";
tel_p = '';

selected1= {
    tel_p: '',
    prenom: '',
    nom: '',
    email: '',
    formation: '',
    tel: '',
    image_file: '../assets/images/default.png'
}

selected2= {
  prenom: '',
  nom: '',
  email: '',
  formation: '',
  tel: '',
  image_file: '../assets/images/default.png'
};

  parrains = [];
  filleuls=[];

  couple = [];
  fin = false;

  clickTheClick(){
    if (this.cliked == false){
      this.cliked = true;
      if (this.round2 == false){
        this.findOne('first', 'Filleuls');

        setTimeout(() => {
          this.finAnime1 = false;
          this.selected['type'] = 'image_file';
          //console.log("selected = "+JSON.stringify(this.selected));
        }, 12000);

        setTimeout(() => {
          this.showFinalImage1 = true;
          this.finAnime2 = true;
          this.cliked = false;
          this.round2 = true;
          if(this.automatique==true){
            //this.sendMessage('restart');
            console.log('automatique =>',this.automatique);
            if (this.fin == true){
              this.fin = false;
              this.reinitialiser();
            }
          }
        }, 17000);

        if(this.automatique==true){
          setTimeout(() => {
            this.clickTheClick();
          }, 19000);
        }

      }
      else{
        this.findOne('second', 'Parrains');
        setTimeout(() => {
          this.finAnime2 = false;
          this.selected['type'] = 'image_file';
          //this.sendMessage(JSON.stringify(this.selected));
        }, 12000);

        setTimeout(() => {
          this.showFinalImage2 = true;
          this.zoom = true;
          this.fin = true;
          this.jumeller(this.selected1, this.selected2);
        }, 20000);

      }
    }
  }

  findOne(myRound, etudiants){
    if (etudiants === 'Filleuls') {
      const index = Math.floor(Math.random() * this.filleuls.length);
      this.selected = this.filleuls[index];
      this.tel_p = this.selected.tel_p;
      if (this.filleuls[index].image_file=== 'default.png') {
        this.selected.image_file = '../assets/images/default.png';
      }
      this.filleuls.splice(index,1);
      
      let index2;
      let index3;
      let index4;
      if (this.filleuls.length > 1) {
        do {
          index2 = Math.floor(Math.random() * this.filleuls.length);
        }
        while (index2 == index);
        this.tof3 = this.filleuls[index2];
        if (this.tof3.image_file=== 'default.png') {
          this.tof3.image_file = '../assets/images/default.png';
        }       
      }
      if (this.filleuls.length > 2) {
        do{
          index3 = Math.floor(Math.random() * this.filleuls.length);
        }
        while (index3 == index || index3 == index2);
        this.tof2 = this.filleuls[index3];
        if (this.tof2.image_file=== 'default.png') {
          this.tof2.image_file = '../assets/images/default.png';
        }        
      }
      if (this.filleuls.length > 3) {
        do {
          index4 = Math.floor(Math.random() * this.filleuls.length);
        }
        while (index4 == index || index4 == index2 || index4 == index3);
        this.tof4 = this.filleuls[index4];
        if (this.tof4.image_file=== 'default.png') {
          this.tof4.image_file = '../assets/images/default.png';
        }        
      }
  
    }

    if (etudiants === 'Parrains') {
      let index=0;
      this.parrains.map((parrain)=>{
        if (parrain.tel === this.tel_p) {
          this.selected = parrain;
          index = this.parrains.indexOf(parrain);
        }
      });
      if (this.selected.image_file=== 'default.png') {
        this.selected.image_file = '../assets/images/default.png';
      }
      let index2;
      let index3;
      let index4;
      if (this.parrains.length > 1) {
        do {
          index2 = Math.floor(Math.random() * this.parrains.length);
        }
        while (index2 == index);
        this.tof3 = this.parrains[index2];
        if (this.tof3.image_file=== 'default.png') {
          this.tof3.image_file = '../assets/images/default.png';
        }        
      }
      if (this.parrains.length > 2) {
        do{
          index3 = Math.floor(Math.random() * this.parrains.length);
        }
        while (index3 == index || index3 == index2);
        this.tof2 = this.parrains[index3];
        if (this.tof2.image_file=== 'default.png') {
          this.tof2.image_file = '../assets/images/default.png';
        }        
      }
      if (this.parrains.length > 3) {
        do {
          index4 = Math.floor(Math.random() * this.parrains.length);
        }
        while (index4 == index || index4 == index2 || index4 == index3);
        this.tof4 = this.parrains[index4];
        if (this.tof4.image_file=== 'default.png') {
          this.tof4.image_file = '../assets/images/default.png';
        }        
      }

    }

          if (myRound === 'first') {
            this.selected1 = this.selected;  
          }
          
          if (myRound === 'second') {
            this.selected2 = this.selected;
            //console.log("selected2",this.selected2);
            //console.log("selected1",this.selected1);  
          }

          if (this.filleuls.length <= 0) {
            alert('Parrainage bouclé !');
            this.automatique = false;
            this.reinitialiser();
            //console.log(this.couple)
          }

  }

  jumeller(filleul, parrain){
    let newCouple = {
      'filleul': filleul,
      'parrain': parrain
    };
    //console.log('new couple =>',newCouple);
    this.couple.push(newCouple);

    if(this.automatique){
      this.fin = true;
      setTimeout(() => {
        if (this.fin == true){
          this.fin = false;
          this.reinitialiser();
        }
      }, 3000);

      setTimeout(() => {
        this.clickTheClick();
      }, 5000);
      
    }

  }


  


  reinitialiser(){
    this.cliked = false;
    this.zoom = false;
    this.tof2 = null;
    this.tof3 = null;
    this.tof4 = null;
    this.finAnime1 = true;
    this.finAnime2 = false;
    this.showFinalImage1 = false;
    this.showFinalImage2 = false;
    this.round2 = false;
    this.selected = {
      tel_p: '',
      prenom: '',
      nom: '',
      email: '',
      formation: '',
      tel: '',
      image_file: '../assets/images/default.png'
    };
    this.selected1= {
  
      tel_p: '',
      prenom: '',
      nom: '',
      email: '',
      formation: '',
      tel: '',
      image_file: '../assets/images/default.png'
  }

  this.selected2= {
    prenom: '',
    nom: '',
    email: '',
    formation: '',
    tel: '',
    image_file: '../assets/images/default.png'
  };
    //this.etudiants = [];
  }

 getFilleuls(){
  this.dataService.get('dsti1.json')
  .then((data : any)=>{
    data.map((filleul)=>{
      let jsonFilleul = {
        tel_p: filleul[0],
        prenom: filleul[1],
        nom: filleul[2],
        email: filleul[3],
        formation: filleul[4],
        tel: filleul[5],
        image_file: filleul[6],
      };
      this.filleuls.push(jsonFilleul);
    });
  }).then(()=>{
      //console.log(this.filleuls);
  });

  this.dataService.get('dsttr1.json')
  .then((data : any)=>{
    data.map((filleul)=>{
      let jsonFilleul = {
        tel_p: filleul[0],
        prenom: filleul[1],
        nom: filleul[2],
        email: filleul[3],
        formation: filleul[4],
        tel: filleul[5],
        image_file: filleul[6],
      };
      this.filleuls.push(jsonFilleul);
    });
  }).then(()=>{
      //console.log(this.filleuls);
  });    
 }

 getParrains(){
  this.dataService.get('dsti2.json')
  .then((data : any)=>{
    data.map((parrain)=>{
      let jsonParrain = {
        prenom: parrain[0],
        nom: parrain[1],
        email: parrain[2],
        formation: parrain[3],
        tel: parrain[4],
        image_file: parrain[5]
      };
      this.parrains.push(jsonParrain);
    });
  }).then(()=>{
      //console.log(this.parrains);
  });

  this.dataService.get('dsttr2.json')
  .then((data : any)=>{
    data.map((parrain)=>{
      let jsonParrain = {
        prenom: parrain[0],
        nom: parrain[1],
        email: parrain[2],
        formation: parrain[3],
        tel: parrain[4],
        image_file: parrain[5]
      };
      this.parrains.push(jsonParrain);
    });
  }).then(()=>{
      //console.log(this.parrains);
  });    
 }
 
 
}
