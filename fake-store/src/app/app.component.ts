import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from './services/fake-store.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 constructor(private fakestore: FakeStoreService){}

    produtos!: any
  
  ngOnInit(): void {
    this.fakestore.getAllProducts().subscribe({
      next: (data: any)=>{
        console.log(data)
        this.produtos = data
      },
      error: (data: any)=>{
        console.log(error)
      }
    })
  }

}
