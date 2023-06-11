import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccountComponent } from './pages/account/account.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListProductsComponent } from './share/list-products/list-products.component';
import { ArticleComponent } from './components/article/article.component';
import { OurOffreComponent } from './components/our-offre/our-offre.component';
import { PopularComponent } from './components/popular/popular.component';
import { ButtonListArticlesComponent } from './share/button-list-articles/button-list-articles.component';

import { BtnNameAvailPipe } from './pipes/btn-name-avail.pipe';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMouseleaveDirective } from './directives/input-mouseleave.directive';
import { IdentificationComponent } from './pages/identification/identification.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Page404Component } from './pages/page404/page404.component';
import { BasketComponent } from './components/basket/basket.component';
import { ArticleBasketComponent } from './components/article-basket/article-basket.component';
import { FilterComponent } from './components/filter/filter.component';
import { FiltersComponent } from './components/filters/filters.component';


// Создаем инъекционный токен для JWT_OPTIONS
export const jwtOptionsProvider = {
  provide: JWT_OPTIONS,
  useValue: JWT_OPTIONS
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AccountComponent,
    FooterComponent,
    DetailsComponent,
    ListProductsComponent,
    ArticleComponent,
    OurOffreComponent,
    PopularComponent,
    ButtonListArticlesComponent,
   
    BtnNameAvailPipe,
    LoginComponent,
    InputMouseleaveDirective,
    IdentificationComponent,
    RegistrationComponent,
    LogoutComponent,
    Page404Component,
    BasketComponent,
    ArticleBasketComponent,
    FilterComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    JwtHelperService,
    jwtOptionsProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
