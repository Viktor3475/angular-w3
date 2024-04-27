import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public noteTitle: string = '';
  public noteContent: string = '';
  public index: number = 0;
  public noteList: any = [];
  public showButtons: boolean = false;
  public noteIndex: number = 0;


  public editNote(noteElement: any, index: number): void {
    this.noteList[index].title = this.noteTitle;
    this.noteList[index].content = this.noteContent;
    this.noteList.splice(index, 1, noteElement);
    this.resetTempData();
    console.log(this.index);
    console.log(noteElement);
  }


  public showEditValue(index: number): void {
    this.index = index;
    this.noteTitle = this.noteList[this.index].title;
    this.noteContent = this.noteList[this.index].content;
  }

  public deleteNote(noteElement: any, index: number): void {
    this.index = index;
    this.noteList.splice(this.index, 1);
    this.showButtons = false;
    this.resetTempData();
  }

  public saveNoteData(): void {
    this.noteList.push({ title: this.noteTitle, content: this.noteContent });
    this.index = this.noteList.length;
    console.log(this.index);
    this.resetTempData();
  }

  private resetTempData(): void {
    this.noteTitle = '';
    this.noteContent = '';
    this.index = -1;
  }

  public select(index: number): void{
    this.noteIndex = index;

      if(this.noteList[index] === this.noteList[this.noteIndex]){
        this.showButtons = true;
      }

  }


}
