import breeze = require("breeze-shim");

export class BreezeView {
    constructor() {
        console.log("breeze-view constructed :)");
    }

    items: kendo.data.ObservableArray = new kendo.data.ObservableArray([]);
    dataSource: kendo.data.DataSource;

    activate() {

        console.log("breeze-view activate :)");

        var promise = new Promise((resolve, reject) => {
            breeze.config.initializeAdapterInstance("dataService", "odata", true);

            var query = new breeze.EntityQuery()
                .from("Customer");

            var dataService = new breeze.DataService({
                serviceName: "http://services.odata.org/V3/Northwind/Northwind.svc",
                hasServerMetadata: true,
                useJsonp: false
            });

            var manager = new breeze.EntityManager({ dataService: dataService });

            var newQuery = query.using(manager);

            newQuery.execute()
                .then(result => {
                    alert("query is resolved.");
                    resolve();
                })
                .catch(error => { alert("error in breeze-view.activate: error executing query\r\n" + error); });
        });

        return promise;
    }

    bind() {
        console.log("breeze-view in bind :)");
    }
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js