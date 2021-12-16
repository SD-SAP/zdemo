sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.zdemo.controller.App", {
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        },
        formatMail: function(sFirstName, sLastName) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle()
            return mobileLibrary.URLHelper.normalizeEmail(
                sFirstName + "." + sLastName + "@cirkevlouny.cz",
                oBundle.getText("mailSubject", [sFirstName]),
                oBundle.getText("mailBody")
            );
        }
    });
});