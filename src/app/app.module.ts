import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MatCardModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LessonsComponent } from './lessons/lessons.component';

import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';
import { GoldenRuleComponent } from './golden-rule/golden-rule.component';
import { LessonComponent } from './golden-rule/lesson/lesson.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lessons', component: LessonsComponent },
  { path: 'help', component: HelpComponent},
  {
    path: 'goldenrule/:ruleId', component: GoldenRuleComponent,
    children: [
      { path: ':lessonId/:stepId', component: LessonComponent },
      { path: '', redirectTo: '0/0', pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LessonsComponent,
    FooterComponent,
    GoldenRuleComponent,
    LessonComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatCheckboxModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
