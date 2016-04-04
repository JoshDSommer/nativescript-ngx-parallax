import {Component, OnInit, Input } from 'angular2/core';
import * as _scrollViewModule from 'ui/scroll-view';
import * as _pages from 'ui/page';
import * as _frame from 'ui/frame';
import * as _label from 'ui/label';
import * as _view from 'ui/core/view';
import * as _stackLayout from 'ui/layouts/stack-layout';

@Component({
	selector: 'parallax-view',
	template: `
			<ScrollView id="scrollView">
				<StackLayout id="scrollViewContent">
					<StackLayout id="topView" class="top-content">
						<ng-content select="[head]"></ng-content>
					</StackLayout>
					<StackLayout id="bottomView">
						<ng-content select="[body]"></ng-content>
					</StackLayout>
				</StackLayout>
			</ScrollView>
	`,
	styles: [`
	`]
})

export class ParallaxView implements OnInit {

	private page: _pages.Page;
	private topView: _stackLayout.StackLayout;
	private scrollView: _scrollViewModule.ScrollView;
	private viewsToFade: _view.View[];

	@Input('head-height') public topViewHeight: number;
	@Input('controls-to-fade') public controlsToFade: string[];
	constructor() {
		this.page = _frame.topmost().currentPage;
		this.viewsToFade = [];

		if (this.topViewHeight == null) {
			this.topViewHeight = 300; //default height if it is not set.
		}
		if (this.controlsToFade == null) {
			this.controlsToFade = [];
		}
	}
	ngOnInit(): void {
		let prevOffset = -10;
		let topOpacity = 1;

		this.topView = <_stackLayout.StackLayout>this.page.getViewById('topView');
		this.topView.height = this.topViewHeight;

		//find each control specified to fade.
		this.controlsToFade.forEach((id: string): void => {
			let newView: _view.View = this.page.getViewById(id);
			if (newView != null) {
				this.viewsToFade.push(newView);
			}
		});

		this.scrollView = <_scrollViewModule.ScrollView>this.page.getViewById('scrollView');

		this.scrollView.on(_scrollViewModule.ScrollView.scrollEvent, (args: _scrollViewModule.ScrollEventData) => {
			if (prevOffset <= this.scrollView.verticalOffset) {
				if (this.topView.height >= 0) {
					this.topView.height = this.getTopViewHeight(this.topViewHeight, this.scrollView.verticalOffset);
				}
			} else {
				if (this.topView.height <= this.topViewHeight) {
					this.topView.height = this.getTopViewHeight(this.topViewHeight, this.scrollView.verticalOffset);
				}
			}
			//fades in and out label in topView
			if (this.scrollView.verticalOffset < this.topViewHeight) {
				topOpacity = parseFloat((1 - (this.scrollView.verticalOffset * 0.01)).toString());
				if (topOpacity > 0 && topOpacity <= 1) {
					//fade each control
					this.viewsToFade.forEach((view: _view.View): void => {
						view.opacity = topOpacity;
					});
				}
			}
			prevOffset = this.scrollView.verticalOffset;
		});
	}

	getTopViewHeight(topHeight: number, offset: number): number {
		if ((topHeight - offset) >= 0) {
			return topHeight - offset;
		} else {
			return 0;
		}
	}

}