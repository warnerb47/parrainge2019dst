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
    prenom: '',
    nom: '',
    numero: '',
    formation: '',
    niveau: 0,
    photo: '',
    id: '',
  };

formation="";

selected1= {
  prenom: '',
  nom: '',
  numero: '',
  formation: '',
  niveau: 0,
  photo: '',
  id: ''
};

selected2= {
    prenom: '',
    nom: '',
    numero: '',
    formation: '',
    niveau: 0,
    photo: '',
    id: ''
  };

  photo = 'data:image/png;base64,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'
  parrains = 
    [
        {
            'prenom': 'parrain1',
            'nom' : 'parrain1',
            'numero': '777348495',
            'formation': 'DSTI2',
            'niveau': 2,
            'photo': this.photo,
            'id': 1,
            'actif': true
        },
        {
            'prenom': 'parrain2',
            'nom' : 'parrain2',
            'numero': '777348495',
            'formation': 'DSTI2',
            'niveau': 2,
            'photo': this.photo,
            'id': 2,
            'actif': true
        },
        {
            'prenom': 'parrain3',
            'nom' : 'parrain3',
            'numero': '777348495',
            'formation': 'DSTI2',
            'niveau': 2,
            'photo': this.photo,
            'id': 3,
            'actif': true
        },
        {
            'prenom': 'parrain4',
            'nom' : 'parrain4',
            'numero': '777348495',
            'formation': 'DSTI2',
            'niveau': 2,
            'photo': this.photo,
            'id': 4,
            'actif': true
        }
      ];

      filleuls = [
        {
            'prenom': 'filleul1',
            'nom' : 'filleul1',
            'numero': '777348495',
            'formation': 'DSTI1',
            'niveau': 1,
            'photo': this.photo,
            'id': 5,
            'actif': true
        },
        {
            'prenom': 'filleul2',
            'nom' : 'filleul2',
            'numero': '777348495',
            'formation': 'DSTI1',
            'niveau': 1,
            'photo': this.photo,
            'id': 6,
            'actif': true
        },
        {
            'prenom': 'filleul3',
            'nom' : 'filleul3',
            'numero': '777348495',
            'formation': 'DSTI1',
            'niveau': 1,
            'photo': this.photo,
            'id': 7,
            'actif': true
        },
        {
            'prenom': 'filleul4',
            'nom' : 'filleul4',
            'numero': '777348495',
            'formation': 'DSTI1',
            'niveau': 1,
            'photo': this.photo,
            'id': 8,
            'actif': true
        },
    ];
    couple = [];
  fin = false;

  clickTheClick(){
    if (this.cliked == false){
      this.cliked = true;
      if (this.round2 == false){
        this.findOne('first', 'Filleuls');

        setTimeout(() => {
          this.finAnime1 = false;
          this.selected['type'] = 'photo';
          //console.log("selected = "+JSON.stringify(this.selected));
        }, 15000);

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
        }, 20000);

        if(this.automatique==true){
          setTimeout(() => {
            this.clickTheClick();
          }, 22000);
        }

      }
      else{
        this.findOne('second', 'Parrains');
        setTimeout(() => {
          this.finAnime2 = false;
          this.selected['type'] = 'photo';
          //this.sendMessage(JSON.stringify(this.selected));
        }, 15000);

        setTimeout(() => {
          this.showFinalImage2 = true;
          this.zoom = true;
          this.fin = true;
          this.jumeller(this.selected1, this.selected2);
        }, 18000);

      }
    }
  }

  desactiveEtudiant(etudiant, data){
    if (etudiant === 'Filleuls') {
      let index = this.filleuls.indexOf(data);
      this.filleuls[index].actif = !this.filleuls[index].actif;
    }
    if (etudiant === 'Parrains') {
      let index = this.parrains.indexOf(data);
      this.parrains[index].actif = !this.parrains[index].actif;
    }    
  }

  findOne(myRound, etudiants){
      let activeEtudiants = [];
      if (etudiants === 'Filleuls') {
        //get active filleuls
        this.filleuls.map((filleul)=>{
          if (filleul.actif === true) {
            activeEtudiants.push(filleul);
          }
        });       
      }
      if (etudiants === 'Parrains') {
        //get active parrains
        this.parrains.map((parrain)=>{
          if (parrain.actif === true) {
            activeEtudiants.push(parrain);
          }
        });
      }

      if ( activeEtudiants.length > 0 ) {
        const index = Math.floor(Math.random() * activeEtudiants.length);
        this.selected = activeEtudiants[index];
        if (etudiants === 'Filleuls') {
          this.desactiveEtudiant('Filleuls',this.selected);
        }
        if (etudiants === 'Parrains') {
          this.desactiveEtudiant('Parrains',this.selected);
        }        
          this.formation = activeEtudiants[index].formation;
          let index2;
          let index3;
          let index4;
          if (activeEtudiants.length > 1) {
            do {
              index2 = Math.floor(Math.random() * activeEtudiants.length);
            }
            while (index2 == index);
            this.tof3 = activeEtudiants[index2];
          }
          if (activeEtudiants.length > 2) {
            do{
              index3 = Math.floor(Math.random() * activeEtudiants.length);
            }
            while (index3 == index || index3 == index2);
            this.tof2 = activeEtudiants[index3];
          }
          if (activeEtudiants.length > 3) {
            do {
              index4 = Math.floor(Math.random() * activeEtudiants.length);
            }
            while (index4 == index || index4 == index2 || index4 == index3);
            this.tof4 = activeEtudiants[index4];
          }
          if (myRound === 'first') {
            this.selected1 = this.selected;  
          }
          
          if (myRound === 'second') {
            this.selected2 = this.selected;
            console.log("selected2",this.selected2);
            console.log("selected1",this.selected1);  
          }
          
          
      }
      if ( activeEtudiants.length <= 0 && etudiants==='Parrains') {
        //set all parrain to actif
        this.parrains.map((parrain)=>{
          this.desactiveEtudiant('Parrains', parrain);
        });
      }
      if ( activeEtudiants.length <= 0 && etudiants==='Filleuls') {
        alert('Parrainage bouclé !');
        this.automatique = false;
        this.reinitialiser();
      }
    
  }


  jumeller(filleul, parrain){
    let newCouple = {
      'filleul': filleul,
      'parrain': parrain
    };
    console.log('new couple =>',newCouple);
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
      prenom: '',
      nom: '',
      numero: '',
      formation: '',
      niveau: 0,
      photo: '',
      id: ''
    };
    this.selected1 = {
      prenom: '',
      nom: '',
      numero: '',
      formation: '',
      niveau: 0,
      photo: '',
      id: '',

    };

    this.selected2 = {
      prenom: '',
      nom: '',
      numero: '',
      formation: '',
      niveau: 0,
      photo: '',
      id: ''
    };
    //this.etudiants = [];
  }

}
