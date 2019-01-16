import { Observable } from 'rxjs';

export function log() {
  return function logFn<T>(source: Observable<T>) {
    const output = new Observable<T>(observer => {
      const subscription = source.subscribe(
        value => {
          console.log('Next:', value);
          observer.next(value);
        },
        error => {
          console.error('Error:', error);
          observer.error(error);
        },
        () => {
          console.log('complete');
          observer.complete();
        }
      );
      return subscription;
    });
    return output;
  };
}
