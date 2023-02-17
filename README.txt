Documentación:
El programa sirve para guardar medicamentos y verlos.

Configuracion:
Renombrar el archivo .env.example a .env

Inicio del servidor:
Ejecutar: npm run dev

LLAMADAS A LAS API's:
Para crear un medicamento:
    usar el metodo post http://localhost:3000/api/crear
    con un json con estos campos:
        {
        "nombre":"nombreDelMedicamento",
        "stock": "100",
        "precio":"3200",
        "presentacion":"TipoDePresentacion- ejemplo: comprimidos",
        "prescripcion":"true"
        }
Para ver la lista de todos los medicamentos:
    usar el método GET http://localhost:3000/api/vertodo

Para ver un medicamento en particular:
    usar el método GET 

