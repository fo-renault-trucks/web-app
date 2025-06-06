import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppConstants } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly routes = AppConstants.ROUTES;
}
