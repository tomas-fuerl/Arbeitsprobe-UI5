sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sosebama",
		settings : {
			id : "sosebama"
		},
		async: true
	}).placeAt("content");
});