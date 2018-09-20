import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {OrderService} from './services/order.service';
import { EditComponent } from './components/edit/edit.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SimpledialogComponent } from './components/simpledialog/simpledialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddOrderComponent,
    SimpledialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddOrderComponent,
    EditComponent,
    SimpledialogComponent,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class ButtonOverviewExample {}
