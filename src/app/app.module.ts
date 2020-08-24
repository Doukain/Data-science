import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { SectionComponent } from './article/section/section.component';
import { CommentsComponent } from './article/comments/comments.component';
import { CommentFormComponent } from './article/comments/comment-form/comment-form.component';
import { HeaderNComponent } from './header-n/header-n.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    SectionComponent,
    CommentsComponent,
    CommentFormComponent,
    HeaderNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
