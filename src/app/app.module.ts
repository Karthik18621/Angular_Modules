import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { StudentModule} from './student/student.module';
import { StudentComponent} from './student/student/student.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
      path: '',
      component: StudentComponent
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
