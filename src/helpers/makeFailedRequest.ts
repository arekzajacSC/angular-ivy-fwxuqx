import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export function makeRequestFailed(timeToDelay, response = {}) {
  return throwError(() => response).pipe(delay(timeToDelay));
}
