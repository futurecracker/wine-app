import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public isSearchBarOpened = false;

    numberOfLikes : number = 2;
    knowing : boolean = false;
    isClicked : boolean = false;

    likeButtonClick(){
      
      if (this.knowing == false){
         this.numberOfLikes++;
         this.knowing = true;
      }
      else{
          this.numberOfLikes--;
          this.knowing = false;
        }
    }



    /*constructor(){
      
    }*/
    Posts : any;
    constructor(public navCtrl: NavController, private db: AngularFireDatabase, 
      private afStorage: AngularFirestore) { 
        this.Posts = afStorage.doc<any>('posts/OIQPvpOU6dQnF5rmHRVr')

    }




    /*constructor(public navCtrl: NavController) {
    }*/

    /*click(){
      this.navCtrl.push('RedWinePage');
    }*/

    /*firestore = firebase.storage();
    constructor(){}
      getAllImage(){
        return new Promise((resolve,reject)) => {
          this.firestore.ref('/picmsgs').child(firebase.auth().currentUser.uid).getDownloadURL().then((gs://winey-b8c69.appspot.com/) => {
            console.log(url)
          })
        }*/

      }
    

