import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
     providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                // هنا اللعبة: لو مش عايز اللون يتغير مع السيستم
                // حدد selector معين يتحكم في الـ Dark Mode
                darkModeSelector: '.my-app-dark', 
                cssLayer: {
                    name: 'primeng',
                    order: 'tailwind-base, primeng, tailwind-utilities'
                }
            }
        }
        }),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
