sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "boardtest/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("boardtest.Component", {
	   metadata : {
           manifest: "json"
     },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
     	// set dialog
			this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
		},
		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});