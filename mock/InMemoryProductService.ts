import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemProductService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {products};
  }
}
