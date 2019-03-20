1. Escribe un comando para listar la imágenes docker con un tag sobreescrito por otra imagen docker (*dangling*):
```respuesta
docker images -f "dangling=true"
```

2. Escribe un comando para listar los IDs de volúmenes docker, configurados con el driver `aufs`:
```respuesta
docker volume ls
```

3. Escribe un comando para ejecutar un contenedor docker que liste todos los contenedores docker en ejecución (docker-in-docker), incluyendo el mismo contenedor en ejecución:
```respuesta
docker exec -it "nombre docker" docker ps
```

4. Usando el archivo `docker-compose.yml` ubicado en el directorio `2-ejercicios/2-4-docker`, ¿cómo podemos reiniciar el servicio nginx del contenedor `nginx-dev`, **sin reiniciar ninguno de los contenedores en ejecución?**. Se asume que ambos contenedores fueron ya iniciados con el comando `docker-compose up -d`
```respuesta
docker exec nginx-dev nginx -s reload
```

5. Al construir la imagen docker ubicada en el directorio `2-ejercicios/2-4-docker`, podemos ver que ésta tiene un tamaño de 1.07GB:
```shell
$ cd 2-ejercicios/2-4-docker
$ docker build -t calculator .
# content omitted due to size
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
calculator          latest              877f0e34f43a        17 seconds ago      1.07GB
```
Nuestro equipo de desarrollo piensa que 1.07GB es demasiado para ser una página estática codificada en JS. **¿Qué formas propones de reducir su tamaño al mínimo?**. No es necesario codificar las soluciones, sólo queremos saber tus ideas.

  ```respuesta
  ```
