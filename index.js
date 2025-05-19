import santiLexer from "./generated/santiLexer.js";
import santiParser from "./generated/santiParser.js";
import { CustomsantiVisitor } from "./CustomsantiVisitor.js";
import antlr4 from "antlr4";
import fs from 'fs';
import readline from 'readline';

const { CharStreams, CommonTokenStream } = antlr4;

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Configuración del lexer y token stream
    const inputStream = CharStreams.fromString(input);
    const lexer = new santiLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    // Mostrar tabla de tokens
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (const token of tokenStream.tokens) {
        if (token.type === -1) break;
        const tokenName = santiLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        console.log(`| ${token.text.padEnd(14)} | ${tokenName.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Configuración del parser
    const parser = new santiParser(tokenStream);
    const tree = parser.programa();

    // Verificación de errores
    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        console.log(`Árbol de derivación: ${tree.toStringTree(parser.ruleNames)}`);
        
        // Ejecución con el visitor
        const visitor = new CustomsantiVisitor();
        visitor.visit(tree);
        
        // Mostrar resultados
        console.log("\nResultados de la ejecución:");
        console.log("----------------------------------------");
        console.log("Variables globales:");
        for (const [key, value] of visitor.memory) {
            console.log(`${key} = ${value} (${typeof value})`);
        }
        
        if (visitor.output.length > 0) {
            console.log("\nSalidas de 'imprimir':");
            visitor.output.forEach((out, i) => {
                console.log(`[${i+1}] ${out}`);
            });
        }
        console.log("----------------------------------------");
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();