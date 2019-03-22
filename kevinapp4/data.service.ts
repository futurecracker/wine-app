import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';

/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()

export class DataService {

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }

  //this.task = db.list("/Post");
  getFiles(){
    let ref = this.db.list('Post');//To database in firebase

    return ref.snapshotChanges()
    .map(change => {
      return change.map(c => ({ key: c.payload.key }));
    });
  }

  uploadToStorage(information): AngularFireUploadTask{
      let newName = `${new Date().getTime()}.txt`;

      return this.afStorage.ref(`files/${newName}`).putString(information);
  }
  storeInfoToDatabase(metainfo){
      let toSave = {
        created: metainfo.timeCreated,
        url: metainfo.downloadURLs[0],
        fullPath: metainfo.fullPath,
        contentType: metainfo.contentType
      }

      return this.db.list('files').push(toSave);
  }
  deleteFile(file){
      let key = file.key;
      let storagePath = file.fullPath;

      // Removes entry from database
      this.db.list('files').remove(key);

      // Remove file from storage 
      return this.afStorage.ref(storagePath).delete();
  }
}
