import { Observable } from "@nativescript/core";

export class PropertyChangedNumber extends Observable{
    
    private _number1: number;
    private _number2: number;
    private _selectedIndex: number;
    private _message: string;

    constructor(){
        super();
        this._number1 = 0
        this._number2 = 0
        this._selectedIndex = 0
    }
    
    set number1(value: number) {
        this._number1 = value
        this.notifyPropertyChange('number1', value)
    }
    
    get number1(): number {
        return this._number1
    }
    
    set number2(value: number) {
        this._number2 = value
        this.notifyPropertyChange('number2', value)
    }
    
    get number2(): number {
        return this._number2
    }
    
    get selectedIndex(): number {
        return this._selectedIndex;
    }
    
    set selectedIndex(value: number) {
        this._selectedIndex = value;
        this.notifyPropertyChange('selectedIndex', value)
    }

    public get message(): string {
        return this._message;
    }
    
    public set message(value: string) {
        this._message = value;
    }

    public firstTap(){
        this.selectedIndex = 1
    }
    public secondTap(){
        this.selectedIndex = 2
    }
}

