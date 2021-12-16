sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.zdemo",
		settings : {
			id : "zdemo"
		},
		async: true
	}).placeAt("content");
});