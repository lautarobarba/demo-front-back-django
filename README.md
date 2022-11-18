# Demo FRONT-BACK en django

## Entorno virtual
```bash
$ # Tener python instalado
$ python3 -V
Python 3.8.10
$ # Tener instalado virtualenv
$ virtualenv --version
virtualenv 20.0.17 from /usr/lib/python3/dist-packages/virtualenv/__init__.py

$ # Crear un entorno virtual 
$ virtualenv venv
$ # Activar entorno virtual
Para LINUX   $ source venv/bin/activate
Para WINDOWS $ .\venv\Script\activate

$ # Aparecera el siguiente indicador
(venv) user@host:~$ 

(venv) $ # Con el entorno activado instalamos los requerimientos
(venv) $ pip install -r requerimientos.txt
```

## Iniciar frontend
```bash
(venv) $ # Con el entorno activado
(venv) $ cd frontend
(venv) $ # No se usa la base de datos pero aplico las migraciones para evitar errores
(venv) $ python manage.py migrate 
(venv) $ python manage.py runserver
... # RUTA 
Starting development server at http://127.0.0.1:8000/
...
```