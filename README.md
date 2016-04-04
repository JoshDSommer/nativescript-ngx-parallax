#NativeScript Angular2 parallax view component


[![NativeScript Parallax Scroll Effect. Click to Play](https://img.youtube.com/vi/sR_Ku7dsm2c/0.jpg)](https://www.youtube.com/embed/sR_Ku7dsm2c)

###Install
`$ npm install nativescript-ng2-parallax --save`

###Example useage

```typescript
import {Component} from 'angular2/core';

// import parallaxView
import {ParallaxView} from 'nativescript-ng2-parallax/nativescript-ng2-parallax';

@Component({
	selector: 'app',
	template: `
	<ActionBar title="NativeScript + Angular2 Parallax View">
	</ActionBar>
	<parallax-view head-height="200" [controls-to-fade]="['headerLabel','headerLabel2']">
		<StackLayout class="header-template" head>
			<Label id="headerLabel" text="Parallax"></Label>
			<Label id="headerLabel2" text="Component"></Label>
		</StackLayout>
		<StackLayout class="body-template" body>
			<Label id="titleLabel" text="Angular 2 Parallax Template"></Label>
			<TextView editable="false" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque, est in viverra vehicula, enim lacus fermentum mi, vel tincidunt libero diam quis nulla. In sem tellus, eleifend quis egestas at, ultricies a neque. Cras facilisis lacinia velit ut lacinia. Phasellus fermentum libero et est ultricies venenatis sit amet ac lectus. Curabitur faucibus nisi id tellus vehicula luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum est id nibh volutpat tempor. Phasellus sodales velit vel dui feugiat, eget tincidunt tortor sollicitudin. Donec nec risus in purus interdum eleifend. Praesent placerat urna aliquet orci suscipit laoreet. In ac purus nec sapien rhoncus egestas.

			Ut at consequat libero, at pharetra purus. Integer mi lorem, luctus eget porttitor vitae, pharetra et urna. Morbi et euismod lacus. Vestibulum a massa odio. Aenean at neque hendrerit, consequat sem et, congue mi. Sed egestas, ante feugiat lacinia tempus, lacus lorem laoreet magna, a hendrerit augue leo vitae risus. Integer ornare odio nec libero elementum malesuada. Cras sem sapien, aliquet eget nibh molestie, finibus dictum augue. Nulla mi metus, finibus id arcu nec, molestie venenatis libero. Morbi a pharetra odio. Maecenas viverra, quam at sollicitudin sodales, diam purus lacinia dolor, vitae scelerisque erat mi nec nibh. Quisque egestas et nunc in pharetra. Sed vitae tincidunt justo, dictum tincidunt nisi. Quisque tempus dolor urna, et mattis velit porta vitae.">
			</TextView>
		</StackLayout>
	</parallax-view>
	`,
	directives: [
		ParallaxView
	],
	styles: [`
		#headerLabel2{
			font-size: 45;
			horizontal-align: center;
			margin-top:-25;
			color:#B2EBF2;
		}
		#headerLabel{
			font-size: 45;
			horizontal-align: center;
			padding-top:75;
			color:#B2EBF2;
		}
		.header-template{
			background-color:#212121;
			background-image:url('~/images/mountains.png');
			background-size:cover;
			height:250;
		}
		.body-template textview{
			font-size:20;
			padding:5 15;
			border:none;
		}
		#titleLabel{
			font-weight:bold;
			font-size:30;
			padding:5 15;

		}
`]

})
class DemoComponent {
	public message: string = "Your {N} + Angular 2 plugin is working."

	constructor() { }
}

```


To use the parallax scroll view you need to have to containers inside of the `<parallax-view></parallax-view>` tag.
one container needs the `head` attribute and the other the `body`. You can specify the head containers height with
`<parallax-view head-height="<VALUE>">` If you have controls you want to fade out with the scroll of the head container their id's can be passed as array of strings like so:
`<parallax-view [controls-to-fade]="['control1','control2']">`. Both the `head-height` and `controls-to-fade` are not required. If no `head-height` value is set then it defaults to `300`.

Special thanks to Nathan Walker for setting up the Angular 2 Plugin seed that I used to help get this plugin up and running. More info can be found about it here:
https://github.com/NathanWalker/nativescript-ng2-plugin-seed

##License

[MIT](/LICENSE)