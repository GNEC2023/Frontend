import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  api_url = "https://api.fooddonor.org";

  constructor(private http: HttpClient) { }

  getStats() {
    return this.http.get(this.api_url + '/public/stats').toPromise();
  }

  getAllLocations() {
    return this.http.get(this.api_url + '/public/locs').toPromise();
  }

  getLocationWithCode(zipcode: string) {
    const headers = new HttpHeaders().set('zip', zipcode);

    return this.http.get('https://api.fooddonor.org/public/specific', {'headers': headers}).toPromise();
  }

  getVolunteerLocs(zipcode: string) {
    const headers = new HttpHeaders()
    .set('zip', zipcode)
    .set('authorization', 'eec2c0ce-e5fc-403b-9be1-2d4cd226b918');

    return this.http.get(this.api_url + '/volunteer/locs', {'headers': headers}).toPromise();
  }

  login(details: any) {
    let enc = JSON.stringify(details);
    enc = btoa(enc);
    return this.http.post(this.api_url + '/auth/login', {'encrypted': enc}).toPromise();
  }

  register(details: any) {
    let enc = JSON.stringify(details);
    enc = btoa(enc);
    return this.http.post(this.api_url + '/auth/register', {'encrypted': enc}).toPromise();
  }

  distributorUpdate(loc_id: string, details: any) {
    const headers = new HttpHeaders()
    .set('loc_id', loc_id)
    .set('authorization', 'eec2c0ce-e5fc-403b-9be1-2d4cd226b918');

    return this.http.post(this.api_url + '/distributor/update_daily', details, {'headers': headers}).toPromise();
  }
}
