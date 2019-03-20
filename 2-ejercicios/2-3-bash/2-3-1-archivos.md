
1. Escribe un comando para ver las últimas dos líneas del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`:
```respuesta


cat lorem-ipsum.txt | tail -n2
```

2. Escribe un comando para mostrar la cantidad de palabras que contiene cada línea del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`:
```respuesta

wc -w lorem-ipsum.txt 
```

3. Escribe un comando para ver el contenido del archivo `lorem-ipsum.txt`, ubicado en el directorio `2-ejercicios/2-3-bash`, sin los caracteres ***punto*** `.` y ***coma*** `,`:
```respuesta
 
sed 's/\,\|\.//g' lorem-ipsum.txt

```

4. Escribe un comando para listar todos los directorios dentro de este repositorio (no recursivo):
```shell
```respuesta
du */
o

ls -d */


```


5. Esribe un comando para ordenar los directorios listados, por tamaño:
```shell
```respuesta


du */ -b| sort -nr


```
