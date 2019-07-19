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
			var sMsg1 = oBundle.getText("helloMsg1");
            var sMsg2 = oBundle.getText("helloMsg2");
			// show message
			MessageToast.show(zahl1 + sMsg1 + zahl2 + sMsg2 + ergebnis);
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});