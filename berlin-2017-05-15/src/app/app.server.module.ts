import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';


@NgModule({
 imports: [
   ServerModule,
   AppModule
 ],
 bootstrap: [AppComponent]
})
export class AppServerModule { }
