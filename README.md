# Demo FRONT-BACK en django

## Entorno virtual
```bash
$ # Tener python instalado
$ python3 -V
Python 3.10.X
$ # Tener instalado virtualenv
$ virtualenv --version
virtualenv 20.0.17 from /usr/lib/python3/dist-packages/virtualenv/__init__.py

$ # Crear un entorno virtual 
$ virtualenv venv --python=python3
$ # Activar entorno virtual
Para LINUX   $ source venv/bin/activate
Para WINDOWS $ .\venv\Scripts\activate 
Nota WINDOWS: Si sale el error "... la ejecución de scripts está deshabilitada en este sistema..." Solución: https://youtu.be/Q2uLUuq0Ft4

$ # Aparecera el siguiente indicador
(venv) user@host:~$ 

(venv) $ # Con el entorno activado instalamos los requerimientos
(venv) $ pip install -r requerimientos.txt
```

## Iniciar frontend
```bash
(venv) $ # Con el entorno activado
(venv) $ cd frontend
(venv) $ python manage.py runserver
... # RUTA 
Starting development server at http://127.0.0.1:8000/
...
```

## Iniciar backend
```bash
(venv) $ # Con el entorno activado
(venv) $ cd backend
(venv) $ python manage.py runserver
... # RUTA 
Starting development server at http://127.0.0.1:7000/
...

$ # La api devuelve un JSON con los usuarios registrados en la direccion:
$ # http://127.0.0.1:7000/users/?format=json
```