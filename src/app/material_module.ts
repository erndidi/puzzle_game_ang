import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NgModule } from "@angular/core";

@NgModule({
    imports:[
        MatButtonModule, 
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports:[
        MatButtonModule, 
        MatInputModule, 
        MatFormFieldModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule{}