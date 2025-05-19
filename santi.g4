grammar santi;

programa
: (declaracion | funcion | operacion_texto | concatenar | impresion | retorno)* EOF
;

declaracion
: 'variable' nombre ('=' valor)? ';'
;

funcion
: 'funcion' nombre '(' argumentos? ')' '{' instrucciones* '}'
;

argumentos
: variable (',' variable)*
;

instrucciones
: operacion_texto
| concatenar
| impresion
| retorno
;

operacion_texto
: variable '=' transformacion '(' cadena ')' ';'
;

concatenar
: variable '=' cadena '+' cadena ';'
;

impresion
: 'imprimir' '(' valor ')' ';'
;

retorno
: 'devolver' valor ';'
;

valor
: texto
| NUMBER
| variable
;

cadena
: texto
| variable
;

texto
: STRING
;

variable
: nombre
;

nombre
: IDENTIFIER
;

transformacion
: 'mayusculas'
| 'minusculas'
| 'longitud'
| 'invertir'
| 'reemplazar'
;

// LEXER RULES

IDENTIFIER
: [a-zA-Z_] [a-zA-Z0-9_]*
;

NUMBER
: [0-9]+
;

STRING
: '"' (~["\r\n])* '"'
;

WS
: [ \t\r\n]+ -> skip
;