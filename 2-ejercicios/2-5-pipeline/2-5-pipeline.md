Escribe la definición de un pipeline como código que _compile/empaquete_ la aplicación alojada en el siguiente repositorio:

https://github.com/MarkFChavez/bitcoin-price-index

Y luego ejecute los tests construidos para este proyecto. Éste corresponde a un pequeño proyecto ReactJS de ejemplo, y los comandos para construir y testear el código están documentados en el archivo [README.md](https://github.com/MarkFChavez/bitcoin-price-index/blob/master/README.md), alojado en el mismo repo.

```respuesta
NO se entiende bien a que se refiere( hay que definir suponiendo que se ejecute con jenkins, aws commit code, code deploy)

1.- pipeline conexion a repositorio : confgurar acceso a repositorio y obneter copia de rama en un ambiente de build.
2.- pipeline analisis de codigo estatico : se asume que esta configurado sonarqube, y verifcar que cumple las metricas 
3.- pipeline de ejecucion : ejecutar aplicacion
4.- pipeline ejecucion de pruebas : ejeuctar npmp run test
5.- pipeline construncio : constrior la aplicacion "build" 

```

