/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
import au = require("aurelia-framework");
export class HelloWorld {
    static metadata() {
        return [new au.CustomElement('hello-world'), au.Behavior.withProperty("name")];
    }

    callBack(val) {
        console.log(val);
    }
}
