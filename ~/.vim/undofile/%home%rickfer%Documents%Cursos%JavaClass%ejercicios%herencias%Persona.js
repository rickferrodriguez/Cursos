Vim�UnDo� dZ��/�ܧ咗��`=��9�~�k�������                    	       	   	   	    clj�   	 _�                             ����                                                                                                                                                                                                                                                                                                                                       )           V        clg�    �                 class Empleado extends Persona {   F    constructor(idPersona, nombre, apellido, edad,idEmpleado, sueldo){   1        super(idPersona, nombre, apellido, edad);   &        this._idEmpleado = idEmpleado;           this._sueldo = sueldo;       }       0    get idEmpleado() { return this._idEmpleado;}   )    get sueldo() { return this._sueldo; }       @    set idEmpleado(idEmpleado) { this._idEmpleado = idEmpleado;}   0    set sueldo(sueldo) { this._sueldo = sueldo;}              toString(){   G        return super.toString()+ this._idEmpleado + ' ' + this._sueldo;       }   }5��                                              5�_�                            ����                                                                                                                                                                                                                                                                                                                                       *           V        clhX    �                class Cliente extends Persona {   L    constructor(idPersona, nombre, apellido, edad,idCliente, fechaRegistro){   1        super(idPersona, nombre, apellido, edad);   #        this._idCliene = idCliente;   ,        this._fechaRegistro = fechaRegistro;       }       .    get idCliente() { return this._idCliente;}   7    get fechaRegistro() { return this._fechaRegistro; }       :    set idCliente(idCliente){this._idCliente = idCliente;}   J    set fechaRegistro(fechaRegistro){this._fechaRegistro = fechaRegistro;}           toString(){   R        return super.toString()+ ' '+ this._idEmpleado + ' '+ this._fechaRegistro;       }   }5��                                Q              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        clh�    �               $        this._idPersona = idPersona;5��              	          �       	              �                        �                     �       $                 �                     �       $                 �                     �       $                 �                     �       $                 �                     �       $                 �                     �       $                 �                     �       $              	   �              	       �       $       	       	   �       	       	       �       $       	          �       	              �       $                 �                     �       $                 �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        clh�     �               5    constructor( idPersona, nombre, apellido, edad) {5��              	           B       	               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        clh�    �               ,    constructor( , nombre, apellido, edad) {5��                         A                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        clh�    �                <    set idPersona(idPersona) { this._idPersona = idPersona;}5��                          �      =               5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                  V        clja    �               5        this._idPersona = ++Persona.contadorPersonas;5��                         x                      5�_�                 	          ����                                                                                                                                                                                                                                                                                                                                                  V        clj�   	 �             5��                          1                      �                          1                      5�_�              	             ����                                                                                                                                                                                                                                                                                                                                                  V        clj�     �                5��                          \                      �                         \                     �                          \                      5��