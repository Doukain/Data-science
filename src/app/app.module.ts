import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SectionComponent } from './article/section/section.component';
import { CommentsComponent } from './article/comments/comments.component';
import { CommentFormComponent } from './article/comments/comment-form/comment-form.component';
import { ContactusComponent } from './home/pages/contactus/contactus.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,

    ArticleComponent,
    SectionComponent,
    CommentsComponent,
    CommentFormComponent,
    ContactusComponent,
    AboutusComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
