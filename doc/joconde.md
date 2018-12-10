# POP SCHEMAS joconde

[PRODUCTEUR](https://www.google.com)

[BASE](https://www.google.com)

[CONTIENT_IMAGE](https://www.google.com)

[POP_COORDONNEES.lat](https://www.google.com)

[POP_COORDONNEES.lon](https://www.google.com)

[POP_CONTIENT_GEOLOCALISATION](https://www.google.com)

[REF](https://www.google.com)

[POP_IMPORT](https://www.google.com)

[REFMIS](https://www.google.com)

[ADPT](https://www.google.com)

[APPL](https://www.google.com)

[APTN](https://www.google.com)

[ATTR](https://www.google.com)

[AUTR](https://www.google.com)

[BIBL](https://www.google.com)

[COMM](https://www.google.com)

[CONTACT](https://www.google.com)

[COOR](https://www.google.com)

[COPY](https://www.google.com)

[DACQ](https://www.google.com)

[DATA](https://www.google.com)

[DATION](https://www.google.com)

[DDPT](https://www.google.com)

[DECV](https://www.google.com)

[DENO](https://www.google.com)

[DEPO](https://www.google.com)

[DESC](https://www.google.com)

[DESY](https://www.google.com)

[DIFFU](https://www.google.com)

[DIMS](https://www.google.com)

[DMAJ](https://www.google.com)

[DMIS](https://www.google.com)

[DOMN](https://www.google.com)

[DREP](https://www.google.com)

[ECOL](https://www.google.com)

[EPOQ](https://www.google.com)

[ETAT](https://www.google.com)

[EXPO](https://www.google.com)

[GENE](https://www.google.com)

[GEOHI](https://www.google.com)

[HIST](https://www.google.com)

[IMAGE](https://www.google.com)

[IMG](https://www.google.com)

[INSC](https://www.google.com)

[INV](https://www.google.com)

[LABEL](https://www.google.com)

[LABO](https://www.google.com)

[LARC](https://www.google.com)

[LIEUX](https://www.google.com)

[LOCA](https://www.google.com)

[LOCA2](https://www.google.com)

[LOCA3](https://www.google.com)

[MILL](https://www.google.com)

[MILU](https://www.google.com)

[MOSA](https://www.google.com)

[MSGCOM](https://www.google.com)

[MUSEO](https://www.google.com)

[NSDA](https://www.google.com)

[ONOM](https://www.google.com)

[PAUT](https://www.google.com)

[PDAT](https://www.google.com)

[PDEC](https://www.google.com)

[PEOC](https://www.google.com)

[PERI](https://www.google.com)

[PERU](https://www.google.com)

[PHOT](https://www.google.com)

[PINS](https://www.google.com)

[PLIEUX](https://www.google.com)

[PREP](https://www.google.com)

[PUTI](https://www.google.com)

[RANG](https://www.google.com)

[REDA](https://www.google.com)

[REFIM](https://www.google.com)

[REPR](https://www.google.com)

[RETIF](https://www.google.com)

[SREP](https://www.google.com)

[STAT](https://www.google.com)

[TECH](https://www.google.com)

[TICO](https://www.google.com)

[TITR](https://www.google.com)

[TOUT](https://www.google.com)

[UTIL](https://www.google.com)

[VIDEO](https://www.google.com)

[WWW](https://www.google.com)

[LVID](https://www.google.com)

[_id](https://www.google.com)

[__v](https://www.google.com)

### PRODUCTEUR
Producteur de la donnée : MUSEE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### BASE
Nom de la base : Collections des musées de France (Joconde)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### CONTIENT_IMAGE
Champ généré à chaque sauvegarde de la notice. Si notice contient des images, la valeur du champs sera oui', sinon 'non'. Ce champs est utilisé pour l'affichage de la phototèque mais pourrait être supprimé et remplacer par une fonction exist dans ES

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### POP_COORDONNEES.lat
Latitude de la notice en WGS84

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Number|false|true|false|

### POP_COORDONNEES.lon
Longitude de la notice en WGS84

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Number|false|true|false|

### POP_CONTIENT_GEOLOCALISATION
Champ qui permet de savoir si la geolocalisation est disponible ou non

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### REF
Référence unique de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|true|false|false|

### POP_IMPORT


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFMIS
Référence de mise à jour (marque de la modification de la notice)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADPT
Ancien dépôt / changement d’affectation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### APPL
Appellation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### APTN
Ancienne appartenance (nom du donateur / testateur/ vendeur) 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ATTR
Anciennes attributions

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTR
Auteur /exécutant / collecteur

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### BIBL
Bibliographie

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COMM
Commentaires

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CONTACT
Lien contact musée

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### COOR
Coordinateur

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COPY
Copyright notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DACQ
Date d’acquisition

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATA
[Peut être déprécié : Pas affiché en production ni en consultation]  

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATION
[Peut être déprécié : Pas affiché en production ni en consultation]  

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DDPT
Date de dépôt / changement d’affectation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DECV
Découverte / collecte / récolte (lieu de découverte / collecte / récolte) ; Type de site ; Méthode de découverte /collecte / récolte ; Date de découverte / collecte / récolte ; Découvreur / collecteur) 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DENO
Dénomination du bien

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DEPO
Dépôt / établissement dépositaire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DESC
Description 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DESY
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DIFFU
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DIMS
Mesures  / Dimensions

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DMAJ
Date de la dernière mise à jour

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### DMIS
Date de la création POP/Mistral

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### DOMN
Domaine (catégorie du bien) 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DREP
Date de la représentation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ECOL
Ecole 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### EPOQ
Epoque /style / mouvement 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ETAT
[surement à nettoyer] Etat du bien. C'est une liste finie de valeurs possibles

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### EXPO
Exposition 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### GENE
Genèse 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### GEOHI
Géographie historique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### HIST
Historique – Objets associés 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMAGE
[Je ne sais pas à quoi ce champ sert]  

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMG
Contient les images. Le plus souvent généré grâce à REFIM

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|true|false|

### INSC
Inscriptions 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### INV
N°Inventaire, ancien(s) numéros(s), autres numéros, N° de dépôt

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LABEL
Appellation musée de France : logo : Champs ayant toujours la valeur 'Musée de France au sens de la loi n°2002-5 du 4 janvier 2002'

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### LABO
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LARC
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEUX
Lieu de création / d’exécution / d’utilisation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA
Localisation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA2
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA3
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MILL
Millésime de création / exécution 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### MILU
Millésime d’utilisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MOSA
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MSGCOM
[Surement à nettoyer. J'ai vu du code dans ce champ] Lien commande de reproduction et/ou de conditions d’utilisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MUSEO
Lien Numéro MUSEOFILE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NSDA
Numéro de site

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ONOM
Onomastique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PAUT
Précisions /auteur / exécutant / collecteur

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PDAT
[Peut être déprécié : Pas affiché en production ni en consultation]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PDEC
Précisions sur la découverte / collecte / récolte

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PEOC
Période de l’original copié

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PERI
Période de création / exécution 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PERU
Période d’utilisation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PHOT
Crédits photographiques

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PINS
Précisions sur les inscriptions

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PLIEUX
Précisions sur le lieu de création/ d’exécution / d’utilisation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PREP
Précisions sur le sujet représenté 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PUTI
Précisions sur l’utilisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RANG
[Peut être déprécié : Pas affiché en production ni en consultation] 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REDA
Rédacteur 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFIM
Référence image : lien texte/ image : C'est un code qui permet de retrouver l'url de l'image

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REPR
Sujet représenté 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RETIF
[Peut être déprécié : Pas affiché en production ni en consultation] 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SREP
Source de la représentation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### STAT
Statut juridique (type de propriété ; mode d’acquisition ; institution propriétaire (ville quand la commune est propriétaire) ; établissement affectataire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|true|false|false|

### TECH
Matériaux et techniques

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### TICO
[Peut être déprécié : A vérifier. Non présent en production] 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TITR
Titre de l'oeuvre 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TOUT
[Peut être déprécié : A vérifier. Non présent en production] 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### UTIL
Utilisation / Destination

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### VIDEO
[Peut être déprécié : A vérifier]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### WWW
Lien site associé / site complémentaire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LVID
Lien video

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### _id


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|ObjectID|false|false|false|

### __v


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Number|false|false|false|
