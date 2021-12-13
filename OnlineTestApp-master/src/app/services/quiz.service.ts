import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/java.json', name: 'JAVA & Spring' },
      { id: 'data/javascript.json', name: 'JavaScript' },
     
    ];
  }

}
