import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];

  selectMovie = null;

  selectActor = null;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }

  // Get Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  //Get Movies
  onGetMovies() {
    console.log("From on GetMovies");
      return this.dbService.getMovies().subscribe((data: any[]) => {
        this.moviesDB = data;
      });
    }

  onSelectActor(item){
    this.selectActor = item;
  }

  onSelectMovie(item){
    this.selectMovie = item;
  }

  onAddActorToMovie() {
    let actorID = {id: this.selectActor._id};
    this.dbService.addActorToMovie(this.selectMovie._id, actorID).subscribe(result => {
      this.onGetActors();
      this.onGetMovies();
    });
  }

}
