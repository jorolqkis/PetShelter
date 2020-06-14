import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getShelters(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'shelters'
    }, query))
      .then(res => res.items);
  }
  getShelter(shelterId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'shelters'
    }, { 'sys.id': shelterId }))
      .then(res => res.items[0]);

  }

}
