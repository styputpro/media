import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PAGES_LIST } from './pages';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    ...PAGES_LIST
  ]
})
export class PagesModule {}
