import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// Tell backend that we are sending json obj
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //Instantiate HttpClient to enable us to use the functions, such as GET, POST, PUT, DELETE
  constructor(private http: HttpClient) { }
  result: any;

  getActors() {
    return this.http.get("/actors");
  }

  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }

  createActor(data) {
    return this.http.post("/actors", data, httpOptions);
  }

  updateActor(id, data) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteActor(id) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }

  getMovies() {
    return this.http.get("/movies");
  }

  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }

  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }

  deleteMovieAYear(data){
    return this.http.post("/movies/deletebyyear", data, httpOptions);
  }

  addActorToMovie(movieID, actorID){ //first parameter is string, second is json obj which consists of actorID
    let url = "/movies/" + movieID + "/actors"
    return this.http.post(url, actorID, httpOptions);
  }
}
