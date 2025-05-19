// Generated from c:/Users/Asus/ssl-antlr-calculator/santi.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import santiListener from './santiListener.js';
import santiVisitor from './santiVisitor.js';

const serializedATN = [4,1,21,124,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,5,0,37,8,0,10,0,12,0,40,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,56,8,2,1,
2,1,2,1,2,5,2,61,8,2,10,2,12,2,64,9,2,1,2,1,2,1,3,1,3,1,3,5,3,71,8,3,10,
3,12,3,74,9,3,1,4,1,4,1,4,1,4,3,4,80,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,
1,9,1,9,3,9,110,8,9,1,10,1,10,3,10,114,8,10,1,11,1,11,1,12,1,12,1,13,1,13,
1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,1,1,0,13,
17,124,0,38,1,0,0,0,2,43,1,0,0,0,4,51,1,0,0,0,6,67,1,0,0,0,8,79,1,0,0,0,
10,81,1,0,0,0,12,89,1,0,0,0,14,96,1,0,0,0,16,102,1,0,0,0,18,109,1,0,0,0,
20,113,1,0,0,0,22,115,1,0,0,0,24,117,1,0,0,0,26,119,1,0,0,0,28,121,1,0,0,
0,30,37,3,2,1,0,31,37,3,4,2,0,32,37,3,10,5,0,33,37,3,12,6,0,34,37,3,14,7,
0,35,37,3,16,8,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,0,0,
36,34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,
41,1,0,0,0,40,38,1,0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,5,1,0,0,44,47,
3,26,13,0,45,46,5,2,0,0,46,48,3,18,9,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,
1,0,0,0,49,50,5,3,0,0,50,3,1,0,0,0,51,52,5,4,0,0,52,53,3,26,13,0,53,55,5,
5,0,0,54,56,3,6,3,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,6,
0,0,58,62,5,7,0,0,59,61,3,8,4,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,
0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,8,0,0,66,5,1,0,0,0,67,
72,3,24,12,0,68,69,5,9,0,0,69,71,3,24,12,0,70,68,1,0,0,0,71,74,1,0,0,0,72,
70,1,0,0,0,72,73,1,0,0,0,73,7,1,0,0,0,74,72,1,0,0,0,75,80,3,10,5,0,76,80,
3,12,6,0,77,80,3,14,7,0,78,80,3,16,8,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,
1,0,0,0,79,78,1,0,0,0,80,9,1,0,0,0,81,82,3,24,12,0,82,83,5,2,0,0,83,84,3,
28,14,0,84,85,5,5,0,0,85,86,3,20,10,0,86,87,5,6,0,0,87,88,5,3,0,0,88,11,
1,0,0,0,89,90,3,24,12,0,90,91,5,2,0,0,91,92,3,20,10,0,92,93,5,10,0,0,93,
94,3,20,10,0,94,95,5,3,0,0,95,13,1,0,0,0,96,97,5,11,0,0,97,98,5,5,0,0,98,
99,3,18,9,0,99,100,5,6,0,0,100,101,5,3,0,0,101,15,1,0,0,0,102,103,5,12,0,
0,103,104,3,18,9,0,104,105,5,3,0,0,105,17,1,0,0,0,106,110,3,22,11,0,107,
110,5,19,0,0,108,110,3,24,12,0,109,106,1,0,0,0,109,107,1,0,0,0,109,108,1,
0,0,0,110,19,1,0,0,0,111,114,3,22,11,0,112,114,3,24,12,0,113,111,1,0,0,0,
113,112,1,0,0,0,114,21,1,0,0,0,115,116,5,20,0,0,116,23,1,0,0,0,117,118,3,
26,13,0,118,25,1,0,0,0,119,120,5,18,0,0,120,27,1,0,0,0,121,122,7,0,0,0,122,
29,1,0,0,0,9,36,38,47,55,62,72,79,109,113];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class santiParser extends antlr4.Parser {

    static grammarFileName = "santi.g4";
    static literalNames = [ null, "'variable'", "'='", "';'", "'funcion'", 
                            "'('", "')'", "'{'", "'}'", "','", "'+'", "'imprimir'", 
                            "'devolver'", "'mayusculas'", "'minusculas'", 
                            "'longitud'", "'invertir'", "'reemplazar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "IDENTIFIER", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "concatenar", 
                         "impresion", "retorno", "valor", "cadena", "texto", 
                         "variable", "nombre", "transformacion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = santiParser.ruleNames;
        this.literalNames = santiParser.literalNames;
        this.symbolicNames = santiParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, santiParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268306) !== 0)) {
	            this.state = 36;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 30;
	                this.declaracion();
	                break;

	            case 2:
	                this.state = 31;
	                this.funcion();
	                break;

	            case 3:
	                this.state = 32;
	                this.operacion_texto();
	                break;

	            case 4:
	                this.state = 33;
	                this.concatenar();
	                break;

	            case 5:
	                this.state = 34;
	                this.impresion();
	                break;

	            case 6:
	                this.state = 35;
	                this.retorno();
	                break;

	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this.match(santiParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, santiParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(santiParser.T__0);
	        this.state = 44;
	        this.nombre();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 45;
	            this.match(santiParser.T__1);
	            this.state = 46;
	            this.valor();
	        }

	        this.state = 49;
	        this.match(santiParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, santiParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(santiParser.T__3);
	        this.state = 52;
	        this.nombre();
	        this.state = 53;
	        this.match(santiParser.T__4);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 54;
	            this.argumentos();
	        }

	        this.state = 57;
	        this.match(santiParser.T__5);
	        this.state = 58;
	        this.match(santiParser.T__6);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268288) !== 0)) {
	            this.state = 59;
	            this.instrucciones();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this.match(santiParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, santiParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.variable();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 68;
	            this.match(santiParser.T__8);
	            this.state = 69;
	            this.variable();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, santiParser.RULE_instrucciones);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.operacion_texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.concatenar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.impresion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.retorno();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, santiParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.variable();
	        this.state = 82;
	        this.match(santiParser.T__1);
	        this.state = 83;
	        this.transformacion();
	        this.state = 84;
	        this.match(santiParser.T__4);
	        this.state = 85;
	        this.cadena();
	        this.state = 86;
	        this.match(santiParser.T__5);
	        this.state = 87;
	        this.match(santiParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, santiParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.variable();
	        this.state = 90;
	        this.match(santiParser.T__1);
	        this.state = 91;
	        this.cadena();
	        this.state = 92;
	        this.match(santiParser.T__9);
	        this.state = 93;
	        this.cadena();
	        this.state = 94;
	        this.match(santiParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, santiParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(santiParser.T__10);
	        this.state = 97;
	        this.match(santiParser.T__4);
	        this.state = 98;
	        this.valor();
	        this.state = 99;
	        this.match(santiParser.T__5);
	        this.state = 100;
	        this.match(santiParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, santiParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(santiParser.T__11);
	        this.state = 103;
	        this.valor();
	        this.state = 104;
	        this.match(santiParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, santiParser.RULE_valor);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.texto();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.match(santiParser.NUMBER);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, santiParser.RULE_cadena);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.texto();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, santiParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(santiParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, santiParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.nombre();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, santiParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(santiParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, santiParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 253952) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

santiParser.EOF = antlr4.Token.EOF;
santiParser.T__0 = 1;
santiParser.T__1 = 2;
santiParser.T__2 = 3;
santiParser.T__3 = 4;
santiParser.T__4 = 5;
santiParser.T__5 = 6;
santiParser.T__6 = 7;
santiParser.T__7 = 8;
santiParser.T__8 = 9;
santiParser.T__9 = 10;
santiParser.T__10 = 11;
santiParser.T__11 = 12;
santiParser.T__12 = 13;
santiParser.T__13 = 14;
santiParser.T__14 = 15;
santiParser.T__15 = 16;
santiParser.T__16 = 17;
santiParser.IDENTIFIER = 18;
santiParser.NUMBER = 19;
santiParser.STRING = 20;
santiParser.WS = 21;

santiParser.RULE_programa = 0;
santiParser.RULE_declaracion = 1;
santiParser.RULE_funcion = 2;
santiParser.RULE_argumentos = 3;
santiParser.RULE_instrucciones = 4;
santiParser.RULE_operacion_texto = 5;
santiParser.RULE_concatenar = 6;
santiParser.RULE_impresion = 7;
santiParser.RULE_retorno = 8;
santiParser.RULE_valor = 9;
santiParser.RULE_cadena = 10;
santiParser.RULE_texto = 11;
santiParser.RULE_variable = 12;
santiParser.RULE_nombre = 13;
santiParser.RULE_transformacion = 14;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(santiParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_declaracion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_funcion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_argumentos;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_instrucciones;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	NUMBER() {
	    return this.getToken(santiParser.NUMBER, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_cadena;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_texto;
    }

	STRING() {
	    return this.getToken(santiParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_variable;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_nombre;
    }

	IDENTIFIER() {
	    return this.getToken(santiParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = santiParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof santiListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof santiVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




santiParser.ProgramaContext = ProgramaContext; 
santiParser.DeclaracionContext = DeclaracionContext; 
santiParser.FuncionContext = FuncionContext; 
santiParser.ArgumentosContext = ArgumentosContext; 
santiParser.InstruccionesContext = InstruccionesContext; 
santiParser.Operacion_textoContext = Operacion_textoContext; 
santiParser.ConcatenarContext = ConcatenarContext; 
santiParser.ImpresionContext = ImpresionContext; 
santiParser.RetornoContext = RetornoContext; 
santiParser.ValorContext = ValorContext; 
santiParser.CadenaContext = CadenaContext; 
santiParser.TextoContext = TextoContext; 
santiParser.VariableContext = VariableContext; 
santiParser.NombreContext = NombreContext; 
santiParser.TransformacionContext = TransformacionContext; 
