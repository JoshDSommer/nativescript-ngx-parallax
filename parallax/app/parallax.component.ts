import { Component, OnInit, Input } from '@angular/core';
import { ScrollView, ScrollEventData } from 'ui/scroll-view';
import { Page } from "ui/page";
import { topmost } from 'ui/frame';
import { View } from 'ui/core/view';
import { StackLayout } from 'ui/layouts/stack-layout';

@Component({
	selector: 'parallax',
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

export class ParallaxComponent implements OnInit {
	private _topView: StackLayout;
	private _scrollView: ScrollView;
	private _viewsToFade: View[];

	@Input('head-height') public topViewHeight: number;
	@Input('controls-to-fade') public controlsToFade: string[];

	constructor(private _page: Page) {
		this._viewsToFade = [];

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

		this._topView = <StackLayout>this._page.getViewById('topView');
		this._topView.height = this.topViewHeight;

		//find each control specified to fade.
		this.controlsToFade.forEach((id: string): void => {
			let newView = this._page.getViewById(id) as View;
			if (newView != null) {
				this._viewsToFade.push(newView);
			}
		});

		this._scrollView = <ScrollView>this._page.getViewById('scrollView');

		this._scrollView.on(ScrollView.scrollEvent, (args: ScrollEventData) => {
			if (prevOffset <= this._scrollView.verticalOffset) {
				if (this._topView.height >= 0) {
					this._topView.height = this.getTopViewHeight(this.topViewHeight, this._scrollView.verticalOffset);
				}
			} else {
				if (this._topView.height <= this.topViewHeight) {
					this._topView.height = this.getTopViewHeight(this.topViewHeight, this._scrollView.verticalOffset);
				}
			}

			//fades in and out label in topView
			if (this._scrollView.verticalOffset < this.topViewHeight) {
				topOpacity = parseFloat((1 - (this._scrollView.verticalOffset * 0.01)).toString());
				if (topOpacity > 0 && topOpacity <= 1) {
					//fade each control
					this._viewsToFade.forEach((view: View): void => {
						view.opacity = topOpacity;
					});
				}
			}
			prevOffset = this._scrollView.verticalOffset;
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
