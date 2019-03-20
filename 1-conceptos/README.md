# SOSAFE DevOps pre-test - Conceptos

A continuación encontrarás una serie de preguntas teóricas relacionadas a algunos de los servicios básicos de AWS.

Por favor responde cada pregunta de alternativas marcando con una `[x]` donde corresponda, o redacta una respuesta en palabras en el campo indicado si así se solicita.

1. Elige 1: ¿Cuál es el tamaño mínimo de un objeto en S3?:
  ```
  [ ] 1 byte
  [ ] 1 kbyte
  [X] 0 bytes
  [ ] 1 bit
  ```

2. Elige 1: ¿Qué servicio permite el envío y recibo de mensajes no duplicados y en orden?.
  ```
  [ ] S3
  [ ] SNS
  [X] SQS 
  [ ] SMS
  ```

3. Desarrolla: Si tienes un repositorio donde varias personas trabajan en paralelo, ¿cómo organizarías el trabajo?. ¿Existe una forma de asegurar la calidad del trabajo de todos?.
  ```
  Respuesta:
Definir ramas en donde se desarrollen los features y hotfixes. Mantender actualizada la rama principal
Establecer estrategrias de uso para definir etapas de los releases o tags, 
Definir encargados de hacer el merge a las ramas en caso que el equipo no cuente con experiencia en cierto software de versionamiento.
Para asegurar la calidad hay que definir normas de actualizacion de ramas en los equipos de desarrollo todos los días.

  ```

4. Elige 1 y justifica: Acabas de subir un archivo a S3, y recibes una confirmación que éste ha terminado el proceso de upload. ¿Puedes leer el archivo inmediatamente?.
  ```
  [ ] Sí
  [X] No 

  ¿Por qué?:
  Hay que configurar las  ACL, definir acceso publico en caso de ser necesario o dar acceso a algún ID AWs para acceder al recurso.
 
  ```

5. Elige 1: ¿Qué servicio está destinado a analizar y debuggear aplicaciones distribuidas, encontrar bugs y problemas de performance?:
  ```
  [X] X-Ray
  [ ] CloudWatch
  [ ] Systems Manager
  [ ] CloudTrail
  ```

6. Elige 1: ¿Cuál es el tamaño máximo de un objeto en S3?:
  ```
  [ ] 50 GB
  [ ] 500 GB
  [X] 5 TB 
  [ ] 50 TB
  [ ] No tiene máximo
  ```

7. Desarrolla: En tus palabras ¿qué son las funciones Lambda en AWS, y qué beneficios ofrece frente a alternativas como EC2 o ECS?:
  ```
  Respuesta:
	Son funciones o codigos que pueden ser  utiilizadas solo cuando se requieren, es decir, una aplicaicon invoca el codigo de la función solo en ciertos eventos. 
	Las funciones Lambda permiten implementar arquitectura serverless, y solo es consumido cuando el recurso cuando es invocado.
  ```

8. Elige 2: ¿Para qué sirve Route53?:
  ```
  [X] Configuración de nombres de dominio
  [ ] Balanceo de carga
  [X] Aseguramiento de sitios con SSL (HTTPS)
  ```

9. Elige 2: ¿Qué servicios sirven para crear infraestructura como código?:
  ```
  [ ] Chef
  [X] Terrafom
  [X] CloudFormation
  [ ] Ansible
  ```

10. Elige 2: ¿Qué servicio sugerirías para reducir costos de uso en S3, considerando que los archivos se pueden almacenar por mucho tiempo, y a medida que el tiempo pasa el acceso a éstos es cada vez más infrecuente?:
  ```
  [ ] S3 IOPS SSD Access
  [ ] CloudFront
  [ ] S3 Infrequent Access
  [X] S3 One Zone Access
  [X] Glacier
  ```

11. Elige 1: Si tu sitio web realiza cargas (uploads) de archivos pesados a AWS (más de 200mb) y la conexión a Internet de los usuarios presenta interrupciones en seguidas oportunidades, ¿qué le recomiendas al equipo de desarrollo?:
  ```
  [] Implementar un sistema de tolerancia a errores, que reintente subir el archivo completo cuando éste falle
  [] Utilizar un servicio de CDN
  [X] Implementar el uso de multipart uploads
  [] Configurar una VPN entre la red local de los usuarios y AWS
  ```

12. Elige 2: ¿Qué servicios sirven para configurar discos duros en la nube?:
  ```
  [ ] ElastiCache
  [ ] EFS 
  [X] Glacier -> Aunque desde mi punto de vista esto esta más enfocado a nivel de archivos.
  [X] EBS -> desde mi punto de vista sería esta la opción.
  ```
