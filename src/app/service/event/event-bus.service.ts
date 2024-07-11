import { Injectable } from '@angular/core';
import { Observable, Subject, filter } from 'rxjs';
import { IMessage } from 'src/app/shared/interface';

@Injectable({
   providedIn: 'root'
})
export class EventBusService {
   private eventBus$: Subject<IMessage>;

   constructor() {
      this.eventBus$ = new Subject<IMessage>();
   }

   public dispatch = (data: IMessage) => {
      this.eventBus$.next(data);
   };

   public listen = (key: string): Observable<IMessage> => {
      return this.eventBus$.pipe(filter((event: IMessage) => event.type === key));
   };
}
