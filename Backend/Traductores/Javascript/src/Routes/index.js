// Creación De Rutas

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const Parser = require('../AnalizadorLexicoSintactico/build/Parser/AnalizadorGramatica.js');
const { ArrayErrores } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');
const { ArrayTokens } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	// Enviar Response
	/*  
		for (5 > 5; 5 <= 5 + 5; 5++) {
		
          System.out.println(5);
		  System.out.print(5);
      
		}
	
		while (true) {
			
			System.out.println(-3);
			
		}		
	
		do {
            System.out.println (6);
		} while (5 < 10);
		
		
		if ( 5 > 5 ){
			System.out.print(5);
		} else if (a < 5){
			System.out.print(5);
		}else{
			System.out.print(5);
		}
		
		
		
		for (int i = 0; 5 <= 5 + 5; 5++) {
		
          System.out.println(5);
		  System.out.print(5);
      
		}	
		
		String Variable = 5, Hola=1,Y;
		String Hola, quehace, quetal;
		
		
		public class Prueba {
			
			public void Mimetodo() {
				
				System.out.println("puta madre");
				
				
			}
			
			public class Hola {
				
				
				
			}
			
			public int Mimetodo(int a, int b, int c) {
				System.out.println("puta madre");
				
				a = this:MeCagoEnLaPuta("TengoMiedo",5,62.5,true,'a');
				
				funcion(a, b);
				
				mimetodo();
				
				a = metodo(5, 6);
				a=Function(Funcion(1,5,6),OtraFun(adios,Fot("ss",F())),"F","Ojala no Muera"); 
				// Ojala no muera XD
				// murio desde mas antes XD jaja poruqe lo esta probando tan complejo XD 
				// te caste XD nel pq no tiene punto y coma XD jajaj tu madre XD ahorita lo arreglo si queres XD el macho xd 
				
			}
			
			
		} 
	*/
	
	
	/*
	public interface Intefaz {
			
			public void Mimetodo();
			
			public void Otra(int a, int b);
			
			public int OtraCosa();
			
			public double Precio(int a, int b);
			
			public string Nombre(string nombre);
			
		}	
	*/
	
	const AST = Parser.parse(`
	
	public class AddTwoIntegers {
		@@@@@
		public class Nueva{
			
		}
			
			public void Ejemplo() {
				System.out.println("hola mundo");
			}

    public static void main(String[] args) {
        
        int first = 10;
        int second = 20;

        int time = 22;
        if (time < 10) {
        System.out.println("Good morning.");
        } else if (time < 20) {
        System.out.println("Good day.");
        } else {
        System.out.println("Good evening.");
        }

    }
	
	
	// Hola

    
    
}
    

	`);
	
	let Traduccion_Total="";

	for(const element of AST){
	
		Traduccion_Total += element.Traducir() + "\n";
		
	}
	console.log(Traduccion_Total);
	
	for (const element of ArrayErrores) {
		
		console.log(element);
		
	}
	
	for (const element of ArrayTokens) {
		
		console.log(element);
		
	}
	
	res.send("Bienvenido Al Servidor De Javascript! Puerto: 7776");
	
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//console.log(req.body.Cadena.toString());
	
	// Response
	res.send("Conectado Al Servidor En Puerto: 7776");
});

// Exportar Modulo
module.exports = RouterAuxiliar;