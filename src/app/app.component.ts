/**
 * @file
 * @author jianling(zhaochengyang@baidu.com)
 */

import { Component } from '@angular/core';

import { ApiService } from '../common/api.service';

import { ForDemoPage } from '../pages/for/demo';


@Component({
   templateUrl: 'app.html'
})
export class MyApp {

    rootPage = ForDemoPage;

    constructor(
        public apiService: ApiService
    ) {
        this.apiService.isLogin = true;
    }

}