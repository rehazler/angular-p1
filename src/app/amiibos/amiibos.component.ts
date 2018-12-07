import { Component, OnInit } from '@angular/core';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { AmiiboService } from '../services/amiibo.service';

@Component({
	selector: 'app-amiibos',
	templateUrl: './amiibos.component.html',
	styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

	amiibos: AmiiboInterface[];

	constructor(private amiibo: AmiiboService) { }

	getAmiibos() {
		return this.amiibo.getAmiibos().subscribe((res) => {
			this.amiibos = res.amiibo;
		});
	}

	ngOnInit() {
		this.getAmiibos();
	}

}
