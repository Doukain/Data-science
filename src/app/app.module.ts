import { MainComponent } from '../app/home/pages/headingcategories/main/main.component';
import { RouterModule, ExtraOptions } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './home/pages/home/home.component';
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
import { ArticlesComponent } from './home/pages/home/articles/articles.component';
import { CategoriesComponent } from './home/pages/home/categories/categories.component';
import { HeadingcategoriesComponent } from './home/pages/headingcategories/headingcategories.component';
import { ArticlesPageComponent } from './home/pages/articles-page/articles-page.component';
import { MathJaxModule } from 'ngx-mathjax';

const routerOptions: ExtraOptions = {
  // useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',

  onSameUrlNavigation: 'reload',
  enableTracing: true,
  scrollOffset: [0, 1],
};

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
    HomeComponent,
    HeaderComponent,
    ArticlesComponent,
    CategoriesComponent,
    HeadingcategoriesComponent,
    MainComponent,
    ArticlesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MathJaxModule.forRoot({
    //   version: '2.7.5',
    //   config: 'TeX-AMS_HTML',
    //   hostname: 'cdnjs.cloudflare.com',
    // }),
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'headingarticle', component: HeadingcategoriesComponent },
        {
          path: 'headingarticle/article',
          component: ArticlesPageComponent,
        },
        // {
        //   path: 'headingarticle/article1',
        //   component: LinearRegressionComponenew,
        // },
        { path: '**', component: HomeComponent },
        {
          path: '',
          redirectTo: 'content', // Empty path will redirect to content route.
          pathMatch: 'full',
        },
      ],
      routerOptions
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
