import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  posturl = 'http://localhost:3001/posts';

  postProducts(data: any) {
    return this.http.post<any>(this.posturl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductDetails() {
    return this.http.get<any>(this.posturl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProducts(id: number) {
    return this.http.delete<any>(`${this.posturl}/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateProducts(data: any, id: number) {
    return this.http.put<any>(`${this.posturl}/${id}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
