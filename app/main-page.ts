import { EventData, Frame, Label, NavigatedData, Page, TextField, Button, Observable, PropertyChangeData } from '@nativescript/core';
import { PropertyChangedNumber } from './propertyChangedNumber';

var page: Page
var result: Label
var pcn: PropertyChangedNumber

export function navigatingTo(args: NavigatedData) {
  page = <Page>args.object
  result = <Label>page.getViewById("result")
  
  if(!args.isBackNavigation){
    pcn = new PropertyChangedNumber();
  }

  page.bindingContext = pcn

  pcn.on(Observable.propertyChangeEvent, () => {
    if(pcn.selectedIndex == 1)
    {
      pcn.message = "Get the first number"
      pcn.selectedIndex = 0
      goToFirstPage();
    } 
    else if(pcn.selectedIndex == 2)
    {
      pcn.message = "Get the second number"
      pcn.selectedIndex = 0
      goToFirstPage();
    }
  }); 
}

export function goToFirstPage(){

  var navigationOptions = {
    moduleName: 'firstpage/first-page',
    context:{
      pcn: pcn
    }
  }
  Frame.topmost().navigate(navigationOptions);
}

export function onTap(args: EventData){
  var button: Button = <Button>args.object
  switch(button.id){
    case "plus":
      result.text = (pcn.number1 + pcn.number2).toString()
      break
    case "minus":
      result.text = (pcn.number1 - pcn.number2).toString()
      break
    case "multiply":
      result.text = (pcn.number1 * pcn.number2).toString()
      break
    case "divide":
      result.text = (pcn.number1 / pcn.number2).toString()
      break
  } 
}
