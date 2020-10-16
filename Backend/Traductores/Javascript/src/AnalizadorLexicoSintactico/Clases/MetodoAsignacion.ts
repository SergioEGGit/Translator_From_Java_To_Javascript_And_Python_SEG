// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class MetodoAsignacion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: string, private FuncionName: string, private ListaParametros: Instruccion[], private PTC: Boolean) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let FuncionName = this.FuncionName;
		let Identificador = this.Identificador;
		let Traduccion: string = "";
        let Parametros: string = "";
		let PuntoYComa = "";	
		
		if(this.PTC = true) {
			
			PuntoYComa = ";";
			
		} else {
			
			PuntoYComa = "";
			
		}		
		
		// Recuperar Parametros
		for(let key in this.ListaParametros) {
			
			if(Number(key) + 1 == this.ListaParametros.length) { 

				Parametros += this.ListaParametros[Number(key)].Traducir();
			
			} else {
				
				Parametros += this.ListaParametros[Number(key)].Traducir() + ", ";
			
			}
		}
		
		// Verificar Si Hay Identificador
		if(Identificador == "") {
			
			Traduccion = AgregarIdentacion() + FuncionName + "(" + Parametros + ")" + PuntoYComa; 
		
		} else {
			
			Traduccion = AgregarIdentacion() + Identificador + "." + FuncionName + "(" + Parametros + ")" + PuntoYComa; 
		
		}
		
		return Traduccion + "\n\n";
    }
}