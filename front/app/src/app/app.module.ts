import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
// IMPORTAÇÃO PARA SE UTILIZAR O FORMULÁRIO DO ANGULAR
import { FormsModule } from '@angular/forms';
// IMPORTAÇÃO PARA REALIZAR REQUISIÇÕES HTTP
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from 'componentes/login/login.component';
import { CadastroComponent } from 'componentes/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
