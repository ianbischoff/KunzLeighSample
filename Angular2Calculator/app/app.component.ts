import { Component } from '@angular/core';
@Component({
    selector: 'calc-component',
    templateUrl: 'template/calc.html'
})
export class AppComponent {
    title = 'Angular 2 Calculator';
    value = "0";
    memory = "";

    public setValue = (input) => {

        if (isNaN(input)) {
            console.log("NOT NUMERIC");
            switch (input) {
                case 'C':
                    this.value = "0";
                    this.memory = "";
                    break;
                case '.':
                    this.value = this.value + ".";
                    break;
                case '+/-':
                    if (this.value != "0") {
                        if (this.value.indexOf("-") == -1)
                            this.value = "-" + this.value;
                        else
                            this.value = this.value.substring(1, this.value.length);
                    }
                    break;
                case "=":
                    this.value = eval(this.memory).toString();
                    this.memory = this.value;
                    break;
                case "%":
                    break;
                case "<":
                    break;
                default:
                    this.memory += input.toString();
                    this.value = this.memory;
                    
                    break;
            }


        }
        else {
            console.log("NUMERIC");
            if (this.value == "0" || (this.value.length > 1 && this.value == this.memory))
                this.value = input.toString();
            else {
                    this.value = this.value + input.toString(); 
            }
            this.memory += input.toString();
            }

       


        }
    }
