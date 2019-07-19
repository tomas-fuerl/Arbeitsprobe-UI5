sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("HTS.IT.FIAE.ITQ.controller.HelloPanel", {

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var zahl1 = this.getView().getModel().getProperty("/recipient/zahl1");
            var zahl2 = this.getView().getModel().getProperty("/recipient/zahl2");
            var ergebnis = zahl1 + zahl2
			var sMsg = oBundle.getText("helloMsg", [zahl1], [zahl2], [ergebnis]);
			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});