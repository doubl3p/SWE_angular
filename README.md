------------------------------------------------------------------------------------------------------------------------
# What is Bower?
SHORT: Package Manager for dependencies (libraries and frameworks)
  --> f�r das Endprodukt

LONG:
There are now more libraries and frameworks available for front-end development than ever before.
It�s not uncommon to have five or more of these libraries involved in a single project.
But keeping track of all these libraries and making sure they�re up-to-date can be tricky.
Enter Bower, a package manager that makes it easy to manage all your application�s front-end dependencies.

Installing Packages:
Using multiple packages within your project it�s often a good idea to list these packages in a bower.json file.
  --> bower init    = Command at the root of your project will launch an interactive program that will create bower.json
  --> bower install = allow you to install and update multiple packages with a single command
  --> bower_components directory = installed packages placed there (can be changed in .bowerrc file)

More Infos:
http://blog.teamtreehouse.com/getting-started-bower
------------------------------------------------------------------------------------------------------------------------
# What is Gulp?
SHORT: = Task Runner basierend auf Node.js (Automatisierung von Prozessen)
  --> f�r die Entwicklung

LONG:
Ob Minifizierung von Javascript, CSS und HTML, verlustlose Optimierung von Bildern oder z.B. die Kompilierung von
Sass-Dateien: Gulp erledigt diese Prozesse in einem Rutsch, �berwacht Ver�nderungen und revolutioniert die eigene Webentwicklung.

Konzept der Str�me:
  --> Aufgaben leitet man bei Gulp durch Kan�le, die �Pipes�

Arbeitsweise
  --> asynchron Streams

Plugins
  --> �einfache Plugins�. = eine Aufgabe designt, nicht f�r mehrere.
  --> Grundlegende Funktionen, z.B. die �berwachung von Prozessen, sind in Gulp

Installing Packages:
package.json
  --> devDependecies
  --> Packetmanager notiert Version der Gulp-Module und welche installiert wurden
  --> nicht f�r Betrieb notwendig
  --> npm init = Command at the root of your project will launch an interactive program that will create package.json for you
  --> npm install gulp = install / update gulp module

gulpfile.js entspricht pom.xml von maven
  --> Tasks, die das Building Tool f�r uns erledigen soll

More Infos:
http://mo.phlow.de/gulp/#was-ist-gulp

------------------------------------------------------------------------------------------------------------------------
# Run our Projekt

NodeJS muss lokal installiert sein.
 Umgebungsvariable setzen:

  ```
  NODEJS_HOME   C:\Program Files (x86)\nodejs
  ```

 und in PATH ganz vorne einf�gen
  ```
  %NODEJS_HOME%;
  ```
 Nach der Installation von Node folgenden Befehl ausf�hren:

 ```
 npm install -g gulp bower
 (werden hier hin global abgelegt C:\Users\DEINUSER\AppData\Roaming\npm\node_modules)
  ```
     Projekt auschecken
     In das Verzeichnis des Projektes wechseln
     In der Konsole folgende Befehle ausf�hren:


  ```
  npm install
  ```

  ```
  bower install
  ```

  ```
  gulp webserver
  ```

 Seite ist nun auf http://localhost:9000 erreichbar