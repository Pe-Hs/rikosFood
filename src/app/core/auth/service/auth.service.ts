import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, User, NuevoUsuario } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;
  

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  register(usuario: string, email: string, password : string){

    const url = `${this.baseUrl}/auth/new`;
    const body = {usuario, email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!)
            this._user = {
              uid: resp.uid!,
              usuario: resp.usuario!,
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )

  }

  login(usuario: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { usuario, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!)
            this._user = {
              uid: resp.uid!,
              usuario: resp.usuario!,
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validarToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' )

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(

        map(resp => {

          localStorage.setItem('token', resp.token!)
          this._user = {
            uid: resp.uid!,
            usuario: resp.usuario!,
          }

          return resp.ok

        } ),

        catchError(err => of(false))
      )
  }

  logout(){
    localStorage.clear()
  }
}
