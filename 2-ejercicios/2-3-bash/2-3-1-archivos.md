Los comandos son testeados bajo linux

1. Escribe un comando para ver las últimas dos líneas del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`:
```respuesta


cat lorem-ipsum.txt | tail -n2
```

2. Escribe un comando para mostrar la cantidad de palabras que contiene cada línea del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`:
```respuesta

-- Se asume que nos encontramos en el directorio 2-ejercicios/2-3-bash

cat lorem-ipsum.txt | while read line; do (echo $line | wc -w); done 
```

3. Escribe un comando para ver el contenido del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`, sin los caracteres ***punto*** `.` y ***coma*** `,`:
-- Se asume que estamos ubicados en el directorio 2-ejercicios/2-3-bash y segun el enunciado era ver el contenido sin punto ni coma, entendí que era sin modificar el archivo por eso utilice este comando :
[sed 's/\,\|\.//g' lorem-ipsum.txt], agregue en la respuesta el parametro -i

```respuesta

sed -i 's/\.\|\,//g' lorem-ipsum.txt

```

4. Escribe un comando para listar todos los directorios dentro de este repositorio (no recursivo):
```shell
el comando du es para ejectarlo en el directorio donde se encuentra los directorio "du */" o "ls -d */" cambie la respuesta por otro comando
```respuesta

ls -l | grep ^'d'

```


5. Esribe un comando para ordenar los directorios listados, por tamaño:
shell
"du */ -b| sort -nr" este comando permitía buscar dentro del directorios los directorios existentes cambie el comando por el que esta en la seccion respuesta
```respuesta

du $(ls -l | grep ^'d'| awk {'print $9'}) -sbh | sort -n -r



```
