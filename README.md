# README

**Introduction**
Voici le projet demandé pour le test technique. Il a été réalisé avec Ruby on Rails (BE) et avec React (FE).

__V2__

Pour lancer le projet entrer dans le terminal:

``heroku local -f Procfile.dev``

J'ai refait l'app avec le minimum d'addons : plus de db, pas de views. Le backend envoie l'info au FE sous JSON et est parsed dans le component React

**Version live**

Déployé sous Heroku avec un free tier: le serveur se met en hibernation quand il ne recoit pas de nouvelle requête dans les trente minutes et met 30sec à repartir. Il est possible que vous ayez à attendre 30 secondes pour l'affichage.

[https://kumojin.herokuapp.com/](https://kumojin.herokuapp.com/)

**Problèmes rencontrés**

* Aucune connaissance de React avant cette fin de semaine, j'ai du suivre des cours;
* Première configuration docker;
* Idem pour les test sous Jest, première utilisation !
* Les dates sous environnement JS sont un cauchemar, il y a d'ailleurs un warning dans la console suite au formattage spécifique du backend envoyé au frontend;
* Il peut y avoir un décalage de temps entre les secondes actuelles (via JS) et celles du backend à cause de la requête http qui peut être plus longue

**Remarques**

* Possibilité d'améliorer le FE en se débarassant de la view et en incorporant directement React dans un div App; => DONE
* Un des tests unitaires du FE ne fonctionne pas pour le moment.
* L'heure du backend est extraite d'une méthode spécifique Ruby. La résolution du problème pourrait être beaucoup plus difficile avec un autre language;
