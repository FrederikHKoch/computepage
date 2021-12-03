import { EventData, Label, Page, TextField } from "@nativescript/core";
import { PropertyChangedNumber } from "~/propertyChangedNumber";

var page: Page
var pcn: PropertyChangedNumber

export function onNavigatingTo(args: EventData) {
    page = <Page>args.object;
    pcn = page.navigationContext.pcn
    var titleFromMain = pcn.message
    var titleSet: Label = page.getViewById("messageFromFirst");
    titleSet.text = titleFromMain
}

export function goToMain() {
    var numberToReturn: TextField = page.getViewById("numberToReturn");
    if(pcn.message == "Get the first number"){
        pcn.number1 = +numberToReturn.text
    }
    else if(pcn.message == "Get the second number"){
        pcn.number2 = +numberToReturn.text
    }
    page.frame.goBack();
}
