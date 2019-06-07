import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  header: string = '0 to 0';
  para: string = 'Playing to : 5';
  limit: number = 5;
  var1: number = 0;
  var2: number = 0;
  decided: boolean = false;
  p: number;

  constructor() { }

  ngOnInit() {
  }
  changepara(){
       this.limit = document.getElementById('input').value
       document.querySelector('p').textContent =  'Playing to : ' + this.limit
  }

  player1(){
  if(this.decided === false && this.var1 < this.limit){
    this.var1++
    document.querySelector('h1').textContent = this.var1 + ' to ' + this.var2
  }
    if(this.var1 == this.limit)
      this.decided = true
  }

  player2(){
    if(this.decided === false && this.var2 < this.limit){
      this.var2++
      document.querySelector('h1').textContent = this.var1 + ' to ' + this.var2
    }
      if(this.var2 == this.limit)
        this.decided = true
  }

  reset(){
  document.querySelector('h1').textContent  = '0 to 0'
  document.querySelector('p').textContent =  'Playing to : 5'
  this.limit = 5
  this.var1 = 0
  this.var2= 0
  this.decided = false
  document.getElementById('input').value = null
  }
}
