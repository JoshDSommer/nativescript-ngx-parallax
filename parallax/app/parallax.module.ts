import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax.component';
export { ParallaxComponent } from './parallax.component';

@NgModule({
	declarations: [ParallaxComponent],
	imports: [CommonModule],
	exports: [ParallaxComponent],
	providers: [],
})
export class ParallaxModule { }