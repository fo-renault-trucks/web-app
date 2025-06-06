import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppConstants } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly brand = AppConstants.BRAND;
  readonly routes = AppConstants.ROUTES;

  readonly currentYear = new Date().getFullYear();
}
