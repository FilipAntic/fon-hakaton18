import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(path, id?, renting_date?, returning_date?) {
    if (id) {
      return this.http.get(`http://localhost:3000/${path}/${id}`)
        .toPromise();
    } else {
      return this.http.get(`http://localhost:3000/${path}`)
        .toPromise();
    }
  }

  insert(path, object) {
    return this.http.post(`http://localhost:3000/${path}`, object)
      .toPromise();
  }

  update(path, id, object) {
    return this.http.put(`http://localhost:3000/${path}/${id}`, object)
      .toPromise();
  }

  delete(path, id) {
    return this.http.delete(`http://localhost:3000/${path}/${id}`)
      .toPromise();
  }
}
