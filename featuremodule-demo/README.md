ng generate module CustomerDashboard
ng generate component customer-dashboard/CustomerDashboard

Importing a feature module
- src/app/app.module.ts
    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CustomerDashboardModule // add the feature module here
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }