import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax.component';
export { ParallaxComponent } from './parallax.component';

@NgModule({
	declarations: [ParallaxComponent],
	imports: [CommonModule],
	exports: [ParallaxComponent],
	providers: [],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ParallaxModule { }