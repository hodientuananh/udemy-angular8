import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';

export interface CanComponentDeactive {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactiveGuardService implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(component: CanComponentDeactive, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactive();
  }
  
}
