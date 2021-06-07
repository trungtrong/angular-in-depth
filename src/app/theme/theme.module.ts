import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    DxAccordionModule, DxAutocompleteModule, DxButtonModule,
    DxChartModule, DxCheckBoxModule, DxColorBoxModule, DxToolbarModule,
    DxContextMenuModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule,
    DxDropDownButtonModule, DxFileUploaderModule, DxFormModule,
    DxHtmlEditorModule, DxListModule, DxLoadIndicatorModule, DxLoadPanelModule,
    DxNumberBoxModule, DxPivotGridModule, DxPopoverModule,
    DxPopupModule, DxProgressBarModule, DxRadioGroupModule, DxSchedulerModule,
    DxScrollViewModule, DxSelectBoxModule, DxSliderModule, DxSwitchModule,
    DxTabPanelModule, DxTabsModule, DxTagBoxModule,
    DxTextAreaModule, DxTextBoxModule, DxTooltipModule, DxTreeListModule, DxTreeViewModule,
    DxValidationGroupModule, DxValidationSummaryModule, DxValidatorModule, DxDrawerModule,
    DxSortableModule
} from 'devextreme-angular';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {DefaultLayoutComponent, SingleCardLayoutComponent} from './layouts';
import {ErrorComponent, FooterComponent, HeaderComponent, SideNavigationMenuComponent, UserPanelComponent} from './components';
import {AutoFocusInputDirective} from './directives';
import {SvgIconComponent} from './components/svg-icons/svg-icons.component';
import {QuicklinkModule} from 'ngx-quicklink';

//
const DEVEXTREME_MODULES = [
    DxButtonModule, DxDropDownButtonModule, DxDrawerModule,
    DxToolbarModule, DxTextBoxModule, DxScrollViewModule, DxListModule, DxDataGridModule,
    DxTagBoxModule, DxValidatorModule, DxValidationGroupModule, DxValidationSummaryModule,
    DxCheckBoxModule, DxPopupModule, DxPopoverModule, DxTabPanelModule, DxTreeListModule,
    DxTextAreaModule, DxSelectBoxModule, DxDateBoxModule, DxChartModule, DxContextMenuModule,
    DxFormModule, DxSliderModule, DxNumberBoxModule, DxHtmlEditorModule, DxSchedulerModule,
    DxFileUploaderModule, DxAccordionModule, DxSwitchModule, DxPivotGridModule, DxTabsModule, DxLoadIndicatorModule,
    DxLoadPanelModule, DxTooltipModule, DxProgressBarModule, DxColorBoxModule,
    DxDropDownBoxModule, DxTreeViewModule, DxRadioGroupModule, DxAutocompleteModule, DxSortableModule
];

const MATERIAL_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule
]
//
const BASE_MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuicklinkModule
];

// Components for this module only
const COMPONENTS = [
    UserPanelComponent,
    //
    HeaderComponent,
    SideNavigationMenuComponent,
    FooterComponent,
    ErrorComponent,
    //
    SingleCardLayoutComponent,
    DefaultLayoutComponent,
    SvgIconComponent
];

//
const DIRECTIVES = [
    AutoFocusInputDirective
];
//
const PIPES = [];

const PROVIDERS = [];

@NgModule({
    imports: [
        ...DEVEXTREME_MODULES,
        ...BASE_MODULES,
        ...MATERIAL_MODULES,
    ],
    declarations: [
        ...DIRECTIVES,
        ...PIPES,
        ...COMPONENTS,
    ],
    exports: [
        ...DEVEXTREME_MODULES,
        ...BASE_MODULES,
        ...MATERIAL_MODULES,

        ...DIRECTIVES,
        ...PIPES,
        ...COMPONENTS
    ],
    providers: []

})
export class ThemeModule {
}
