/**
 * @file
 * @author jianling(zhaochengyang@baidu.com)
 */

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BasePage } from '../../common/base-page';

@Component({
    selector: 'page-for-demo',
    templateUrl: 'demo.html'
})
export class ForDemoPage extends BasePage {

    constructor(public nav: NavController) {
        super(nav);
    }

    ionViewDidEnter() {
        super.ionViewDidEnter();
        window['Multiview'].hideNavigationBar();
    }

    popView() {
        window['Multiview'].popView();
    }
}
