sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent,JSONModel,ResourceModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.zdemo.Component", {

		metadata : {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
				"viewName": "sap.ui.demo.zdemo.view.App",
				"type": "XML",
				/*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
				"id": "app"
			 }
		  },

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			var oVozidlaModel = new sap.ui.model.odata.ODataModel("sap/opu/odata/sap/ZOAU_VOZIDLA_SRV");
			sap.ui.getCore().setModel(oVozidlaModel, 'vozidla')

			// set i18n model
			var oResourceModel = new ResourceModel({
				bundleName: "sap.ui.demo.zdemo.i18n.i18n",
				supportedLocales: ["en", "cs"],
				fallbackLocale: "en"
			});
	
			this.setModel(oResourceModel, "i18n");

			// this component should automatically initialize the router!
			this.getRouter().initialize();			
		}
	});

});