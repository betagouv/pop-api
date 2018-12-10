# POP SCHEMAS palissy

[PRODUCTEUR](https://www.google.com)

[CONTIENT_IMAGE](https://www.google.com)

[POP_COORDONNEES.lat](https://www.google.com)

[POP_COORDONNEES.lon](https://www.google.com)

[POP_CONTIENT_GEOLOCALISATION](https://www.google.com)

[POP_COORDINATES_POLYGON.type](https://www.google.com)

[POP_COORDINATES_POLYGON.coordinates](https://www.google.com)

[BASE](https://www.google.com)

[MEMOIRE](https://www.google.com)

[REF](https://www.google.com)

[POP_IMPORT](https://www.google.com)

[ACQU](https://www.google.com)

[ADRS](https://www.google.com)

[ADRS2](https://www.google.com)

[AFIG](https://www.google.com)

[AIRE](https://www.google.com)

[APPL](https://www.google.com)

[ATEL](https://www.google.com)

[AUTP](https://www.google.com)

[AUTR](https://www.google.com)

[BIBL](https://www.google.com)

[CANT](https://www.google.com)

[CATE](https://www.google.com)

[COM](https://www.google.com)

[COM2](https://www.google.com)

[CONTACT](https://www.google.com)

[COOR](https://www.google.com)

[COORM](https://www.google.com)

[COPY](https://www.google.com)

[DATE](https://www.google.com)

[DBOR](https://www.google.com)

[DENO](https://www.google.com)

[DENQ](https://www.google.com)

[DEPL](https://www.google.com)

[DESC](https://www.google.com)

[DIMS](https://www.google.com)

[DMAJ](https://www.google.com)

[DMIS](https://www.google.com)

[DOMN](https://www.google.com)

[DOSADRS](https://www.google.com)

[DOSS](https://www.google.com)

[DOSURL](https://www.google.com)

[DOSURLPDF](https://www.google.com)

[DPRO](https://www.google.com)

[DPT](https://www.google.com)

[EDIF](https://www.google.com)

[EDIF2](https://www.google.com)

[EMPL](https://www.google.com)

[EMPL2](https://www.google.com)

[ETAT](https://www.google.com)

[ETUD](https://www.google.com)

[EXEC](https://www.google.com)

[EXPO](https://www.google.com)

[HIST](https://www.google.com)

[IDAGR](https://www.google.com)

[IMAGE](https://www.google.com)

[IMG](https://www.google.com)

[IMPL](https://www.google.com)

[INSC](https://www.google.com)

[INSEE](https://www.google.com)

[INSEE2](https://www.google.com)

[INTE](https://www.google.com)

[JDAT](https://www.google.com)

[LBASE2](https://www.google.com)

[LIENS](https://www.google.com)

[LIEU](https://www.google.com)

[LMDP](https://www.google.com)

[LOCA](https://www.google.com)

[MATR](https://www.google.com)

[MFICH](https://www.google.com)

[MICR](https://www.google.com)

[MOSA](https://www.google.com)

[NART](https://www.google.com)

[NINV](https://www.google.com)

[NOMS](https://www.google.com)

[NUMA](https://www.google.com)

[NUMP](https://www.google.com)

[OBS](https://www.google.com)

[ORIG](https://www.google.com)

[PAPP](https://www.google.com)

[PARN](https://www.google.com)

[PART](https://www.google.com)

[PDEN](https://www.google.com)

[PDIM](https://www.google.com)

[PERS](https://www.google.com)

[PETA](https://www.google.com)

[PHOTO](https://www.google.com)

[PINS](https://www.google.com)

[PINT](https://www.google.com)

[PLOC](https://www.google.com)

[PPRO](https://www.google.com)

[PREP](https://www.google.com)

[PROT](https://www.google.com)

[REFA](https://www.google.com)

[REFE](https://www.google.com)

[REFM](https://www.google.com)

[REFP](https://www.google.com)

[REG](https://www.google.com)

[RENP](https://www.google.com)

[RENV](https://www.google.com)

[REPR](https://www.google.com)

[SCLD](https://www.google.com)

[SCLE](https://www.google.com)

[SCLX](https://www.google.com)

[SOUR](https://www.google.com)

[STAD](https://www.google.com)

[STAT](https://www.google.com)

[STRU](https://www.google.com)

[THEM](https://www.google.com)

[TICO](https://www.google.com)

[TITR](https://www.google.com)

[TOUT](https://www.google.com)

[VIDEO](https://www.google.com)

[VOLS](https://www.google.com)

[WADRS](https://www.google.com)

[WCOM](https://www.google.com)

[WEB](https://www.google.com)

[WRENV](https://www.google.com)

[ZONE](https://www.google.com)

[_id](https://www.google.com)

[__v](https://www.google.com)

### PRODUCTEUR


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

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


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### POP_COORDINATES_POLYGON.type


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### POP_COORDINATES_POLYGON.coordinates


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### BASE
Nom de la base : Patrimoine mobilier (Palissy)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### MEMOIRE


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REF
Référence unique de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### POP_IMPORT


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ACQU
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADRS
Adresse 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADRS2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AFIG
Auteur(s) de la source figurée

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### AIRE
Aire d'étude

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### APPL
Appellation et titre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ATEL
Nom de l’atelier, de la manufacture, de la fabrique ou de l’école 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTP
Auteurs phototype

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTR
Auteurs de l'oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### BIBL
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CANT
Canton 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CATE
Catégorie technique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### COM
Commune 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COM2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CONTACT
Contact 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### COOR
Coordonnées Lambert (ou autres) d'un points 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COORM
Coordonnées Lambert (ou autres) multiples 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COPY
CopyRight

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATE
Datation en années

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DBOR
Date de rédaction de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DENO
Dénomination 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DENQ
Date d'enquête

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DEPL
Partie déplacée

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DESC
Commentaire description

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DIMS
Dimensions 

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
Domaines 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DOSADRS
Dossier adresse

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DOSS
Dossier 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DOSURL
Dossier URL

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DOSURLPDF
Dossier PDF 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### DPRO
Date protection

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DPT
Département 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EDIF
Edifice de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EDIF2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EMPL
Emplacement de l’œuvre dans l’édifice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EMPL2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ETAT
Etat de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ETUD
Parties non étud

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EXEC
Nom actuel ou historique du lieu d’exécution 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EXPO
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### HIST
Commentaire historique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IDAGR
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### IMAGE
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMG
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### IMPL
Milieu d'implantation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### INSC
Inscriptions, marques, emblématique et poinçons

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### INSEE
Numéro INSEE de la commune

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### INSEE2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### INTE
Intérêt de l'oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### JDAT
Justification de la datation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### LBASE2
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIENS
Liens Divers

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### LIEU
Lieu-dit 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LMDP
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA
Localisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MATR
Matériaux 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### MFICH
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### MICR
Numéro de microfiche

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MOSA
Mosaïques 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NART
Numérotation artificielle

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NINV
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NOMS
Noms des rédacteurs de la notice et du dossier 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### NUMA
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMP
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### OBS
Observations 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ORIG
Origine de l’œuvre (lieu de provenance ou de destination)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PAPP
Préc. appart

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PARN
Parties non étud

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PART
Parties constituantes

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PDEN
Précision sur la dénomination

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PDIM
Précisions sur les dimensions

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PERS
Personnalitées 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PETA
Précisions sur l’état de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PHOTO
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PINS
Précisions sur les inscriptions, marques, emblématique et poinçons 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PINT
Intérêt oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PLOC
Précision sur la localisation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PPRO
Précisions sur la protection MH

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PREP
Précision sur la représentation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PROT
Nature de la protection MH

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFA
Référence de l'édifice de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFE
Référence de l’ensemble ou de l'oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFM
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFP
Références des parties constituantes étudiées 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REG
Region 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RENP
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### RENV
N° de renvoi au domaine MH ou au domaine INVENTAIRE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REPR
Représentation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SCLD
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SCLE
Datation des campagnes principales de construction 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SCLX
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SOUR
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### STAD
Stade de la création

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### STAT
Statut de la propriété

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### STRU
Structure et typologie

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### THEM
Thème 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TICO
Titre courant

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TITR
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TOUT
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VIDEO
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### VOLS
Objet(s) volé(s)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WADRS
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WCOM
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WEB
Visite guidé 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WRENV
[PAS AFFICHE]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ZONE
Zone Lambert ou autre

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
