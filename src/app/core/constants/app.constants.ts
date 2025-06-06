interface Route {
  label: string;
  path: string;
}

export class AppConstants {
  static readonly BRAND = 'FO Renault Trucks';

  static readonly ROUTES: Route[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Actualités', path: '/news' },
    { label: 'Contacts', path: '/contacts' }
  ];
}
