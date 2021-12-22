import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Category } from '../model/Category.model';
import { CategoryItems } from '../model/CategoryItems.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private Categories!:Observable<CategoryItems[]>;
  private categoriesCollection!: AngularFirestoreCollection<CategoryItems>
  constructor(private fs: AngularFirestore) {
  }

  getAllCategories(){
    this.categoriesCollection=this.fs.collection<CategoryItems>("Speciality");
    return this.categoriesCollection.valueChanges({idField:"id"})
  }

  
  getCategoryById(): Category | any {

  }
}

