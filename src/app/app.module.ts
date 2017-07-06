/**
 * @file
 * @author jianling(zhaochengyang@baidu.com)
 */

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BasePage } from '../common/base-page';
import { ListPage } from '../common/list-page';
import { PopoverPage } from '../common/list-page';
import { SelectPopover } from '../common/select-popover';
import { ApiService } from '../common/api.service';
import { RegionService } from '../common/region.services';

import { ForDemoPage } from '../pages/for/demo';

let modules = [
    MyApp,
    BasePage,
    ListPage,
    PopoverPage,
    SelectPopover,

    ForDemoPage
];

@NgModule({
    declarations: modules,
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: modules,
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ApiService,
        RegionService
    ]
})
export class AppModule {}
