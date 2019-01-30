import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatListModule],
  exports: [MatButtonModule, MatTabsModule, MatListModule],
})
export class MaterialModule {
}
