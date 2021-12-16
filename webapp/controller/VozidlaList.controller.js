sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.zdemo.controller.VozidlaList", {
        onFilterInvoices: function (oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("OZNACENI", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("vozidlaList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                vozidlaPath: window.encodeURIComponent(oItem.getBindingContext("vozidla").getPath().substr(1))
            });
        },
        stavText: function(sStav) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStav) {
                case "1 ":
                    return resourceBundle.getText("veStavu");
                case "2 ":
                    return resourceBundle.getText("vyrazeno");
                case "3 ":
                    return resourceBundle.getText("vProdeji");
                default:
                    return sStav;
            }
        },
        osUzivani: function(sStav) {
            switch (sStav) {
                case "X":
                    return true;
                case " ":
                    return false;
                default:
                    return false;
            }
        }
    });
});