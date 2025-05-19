import santiListener from "./generated/santiListener.js";

export class CustomsantiListener extends santiListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}