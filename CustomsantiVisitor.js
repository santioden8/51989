import santiVisitor from "./generated/santiVisitor.js";

export class CustomsantiVisitor extends santiVisitor {
    constructor() {
        super();
        this.memory = new Map();   // Almacenamiento de variables
        this.output = [];          // Salidas de imprimir
    }

    // Manejo de declaración de variables
    visitDeclaracion(ctx) {
        const nombre = ctx.nombre().getText();
        const valor = ctx.valor() ? this.visit(ctx.valor()) : undefined;
        this.memory.set(nombre, valor);
        return valor;
    }

    // Manejo de valores (números, strings o variables)
    visitValor(ctx) {
        if (ctx.NUMBER()) {
            return parseInt(ctx.NUMBER().getText());
        }
        if (ctx.texto()) {
            return this.visit(ctx.texto());
        }
        if (ctx.variable()) {
            const varName = ctx.variable().getText();
            return this.memory.get(varName);
        }
    }

    // Manejo de cadenas de texto (remueve comillas)
    visitTexto(ctx) {
        const textWithQuotes = ctx.STRING().getText();
        return textWithQuotes.slice(1, -1); // Elimina las comillas
    }

    // Manejo de operaciones con texto (seguro para tipos)
    visitOperacion_texto(ctx) {
        const variable = ctx.variable().getText();
        const textoObj = this.visit(ctx.cadena());
        
        // Conversión segura a string
        let texto;
        if (typeof textoObj === 'string') {
            texto = textoObj;
        } else if (textoObj !== undefined && textoObj !== null) {
            texto = String(textoObj);
        } else {
            texto = '';
        }

        const operacion = ctx.transformacion().getText();
        
        let resultado;
        switch(operacion) {
            case 'mayusculas':
                resultado = texto.toUpperCase();
                break;
            case 'minusculas':
                resultado = texto.toLowerCase();
                break;
            case 'longitud':
                resultado = texto.length;
                break;
            case 'invertir':
                resultado = texto.split('').reverse().join('');
                break;
            default:
                resultado = texto;
        }
        
        this.memory.set(variable, resultado);
        return resultado;
    }

    // Manejo de cadenas (texto o variables)
    visitCadena(ctx) {
        if (ctx.texto()) {
            return this.visit(ctx.texto());
        }
        if (ctx.variable()) {
            const varName = ctx.variable().getText();
            const value = this.memory.get(varName);
            return value !== undefined ? String(value) : '';
        }
        return '';
    }

    // Manejo de impresión
    visitImpresion(ctx) {
        const valor = this.visit(ctx.valor());
        this.output.push(valor);
        console.log(valor);
        return valor;
    }

    // Manejo de concatenación
    visitConcatenar(ctx) {
        const variable = ctx.variable().getText();
        const izquierda = this.visit(ctx.cadena(0));
        const derecha = this.visit(ctx.cadena(1));
        const resultado = String(izquierda) + String(derecha);
        this.memory.set(variable, resultado);
        return resultado;
    }
}