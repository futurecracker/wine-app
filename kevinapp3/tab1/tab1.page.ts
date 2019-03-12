import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public isSearchBarOpened = false;

    /*constructor(){
      
    }*/
    Posts : any;
    constructor(public navCtrl: NavController, private db: AngularFireDatabase, private afStorage: AngularFireStorage) { 
        //this.Posts = afStorage.doc<any>('Post/Vkqf5t2vBgryB8YaEolm')

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
    

