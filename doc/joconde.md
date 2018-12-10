# POP SCHEMAS joconde

[PRODUCTEUR](/#PRODUCTEUR)
[BASE](/#BASE)
[CONTIENT_IMAGE](/#CONTIENT_IMAGE)
[POP_COORDONNEES.lat](/#POP_COORDONNEES.lat)
[POP_COORDONNEES.lon](/#POP_COORDONNEES.lon)
[POP_CONTIENT_GEOLOCALISATION](/#POP_CONTIENT_GEOLOCALISATION)
[REF](/#REF)
[POP_IMPORT](/#POP_IMPORT)
[REFMIS](/#REFMIS)
[ADPT](/#ADPT)
[APPL](/#APPL)
[APTN](/#APTN)
[ATTR](/#ATTR)
[AUTR](/#AUTR)
[BIBL](/#BIBL)
[COMM](/#COMM)
[CONTACT](/#CONTACT)
[COOR](/#COOR)
[COPY](/#COPY)
[DACQ](/#DACQ)
[DATA](/#DATA)
[DATION](/#DATION)
[DDPT](/#DDPT)
[DECV](/#DECV)
[DENO](/#DENO)
[DEPO](/#DEPO)
[DESC](/#DESC)
[DESY](/#DESY)
[DIFFU](/#DIFFU)
[DIMS](/#DIMS)
[DMAJ](/#DMAJ)
[DMIS](/#DMIS)
[DOMN](/#DOMN)
[DREP](/#DREP)
[ECOL](/#ECOL)
[EPOQ](/#EPOQ)
[ETAT](/#ETAT)
[EXPO](/#EXPO)
[GENE](/#GENE)
[GEOHI](/#GEOHI)
[HIST](/#HIST)
[IMAGE](/#IMAGE)
[IMG](/#IMG)
[INSC](/#INSC)
[INV](/#INV)
[LABEL](/#LABEL)
[LABO](/#LABO)
[LARC](/#LARC)
[LIEUX](/#LIEUX)
[LOCA](/#LOCA)
[LOCA2](/#LOCA2)
[LOCA3](/#LOCA3)
[MILL](/#MILL)
[MILU](/#MILU)
[MOSA](/#MOSA)
[MSGCOM](/#MSGCOM)
[MUSEO](/#MUSEO)
[NSDA](/#NSDA)
[ONOM](/#ONOM)
[PAUT](/#PAUT)
[PDAT](/#PDAT)
[PDEC](/#PDEC)
[PEOC](/#PEOC)
[PERI](/#PERI)
[PERU](/#PERU)
[PHOT](/#PHOT)
[PINS](/#PINS)
[PLIEUX](/#PLIEUX)
[PREP](/#PREP)
[PUTI](/#PUTI)
[RANG](/#RANG)
[REDA](/#REDA)
[REFIM](/#REFIM)
[REPR](/#REPR)
[RETIF](/#RETIF)
[SREP](/#SREP)
[STAT](/#STAT)
[TECH](/#TECH)
[TICO](/#TICO)
[TITR](/#TITR)
[TOUT](/#TOUT)
[UTIL](/#UTIL)
[VIDEO](/#VIDEO)
[WWW](/#WWW)
[LVID](/#LVID)
[_id](/#_id)
[__v](/#__v)
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
