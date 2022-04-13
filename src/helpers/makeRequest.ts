import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function makeRequest(timeToDelay, response = {}) {
  return of(response).pipe(delay(timeToDelay));
}
