import { environment } from 'src/environments/environment';

export function umamiAttr(name: string) {
  return environment.production
    ? name : null;
}