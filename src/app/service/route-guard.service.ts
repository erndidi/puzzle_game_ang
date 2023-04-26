import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  _hardCdeSrv: HardcodedAuthenticationService;
  private _router: Router;

  constructor(hardCdeServ: HardcodedAuthenticationService,
    private router: Router) {
    this._hardCdeSrv = hardCdeServ;
    this._router = router;

  }
  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._hardCdeSrv.isUserLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['login']);
      return false;
    }

  }
}
