Escribe la definición de un pipeline como código que _compile/empaquete_ la aplicación alojada en el siguiente repositorio:

https://github.com/MarkFChavez/bitcoin-price-index

Y luego ejecute los tests construidos para este proyecto. Éste corresponde a un pequeño proyecto ReactJS de ejemplo, y los comandos para construir y testear el código están documentados en el archivo [README.md](https://github.com/MarkFChavez/bitcoin-price-index/blob/master/README.md), alojado en el mismo repo.

```respuesta
NO se entiende bien a que se refiere( hay que definir suponiendo que se ejecute con jenkins, aws commit code, code deploy)
# se asume git instalado y lo spligins dsl y en el archivo de configuracion las rutas de los entornos
pipeline {
agent any
stages{
	stage('git') 
		sh 'rm -rf *'
        	git 'https://github.com/pcanales-puq/prueba-sosafe.git'
	stage ('deploy')
		sh 'npm install'
		sh 'npm run deploy'
	stage ('build')
		sh 'npm run build'
	stage ('test')
		sh 'npm test'

}

}

```

