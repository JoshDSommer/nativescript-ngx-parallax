import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
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
			height:200;
            width:100%
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
export class AppComponent { }
