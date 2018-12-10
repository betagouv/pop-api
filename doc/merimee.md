# POP SCHEMAS merimee

[REF](/#REF)
[PRODUCTEUR](/#PRODUCTEUR)
[BASE](/#BASE)
[CONTIENT_IMAGE](/#CONTIENT_IMAGE)
[MEMOIRE](/#MEMOIRE)
[POP_COORDONNEES.lat](/#POP_COORDONNEES.lat)
[POP_COORDONNEES.lon](/#POP_COORDONNEES.lon)
[POP_CONTIENT_GEOLOCALISATION](/#POP_CONTIENT_GEOLOCALISATION)
[POP_COORDINATES_POLYGON.type](/#POP_COORDINATES_POLYGON.type)
[POP_COORDINATES_POLYGON.coordinates](/#POP_COORDINATES_POLYGON.coordinates)
[POP_DATE](/#POP_DATE)
[POP_IMPORT](/#POP_IMPORT)
[TOUT](/#TOUT)
[ACTU](/#ACTU)
[ADRS](/#ADRS)
[AFFE](/#AFFE)
[AIRE](/#AIRE)
[APPL](/#APPL)
[APRO](/#APRO)
[ARCHEO](/#ARCHEO)
[AUTP](/#AUTP)
[AUTR](/#AUTR)
[CADA](/#CADA)
[CANT](/#CANT)
[COLL](/#COLL)
[COM](/#COM)
[COOR](/#COOR)
[COORM](/#COORM)
[COPY](/#COPY)
[COUV](/#COUV)
[DATE](/#DATE)
[DBOR](/#DBOR)
[DOMN](/#DOMN)
[DENO](/#DENO)
[DENQ](/#DENQ)
[DEPL](/#DEPL)
[DESC](/#DESC)
[DIMS](/#DIMS)
[DMAJ](/#DMAJ)
[DMIS](/#DMIS)
[DOSS](/#DOSS)
[DPRO](/#DPRO)
[DPT](/#DPT)
[EDIF](/#EDIF)
[ELEV](/#ELEV)
[ENER](/#ENER)
[ESCA](/#ESCA)
[ETAG](/#ETAG)
[ETAT](/#ETAT)
[ETUD](/#ETUD)
[GENR](/#GENR)
[HIST](/#HIST)
[HYDR](/#HYDR)
[IMPL](/#IMPL)
[INSEE](/#INSEE)
[INTE](/#INTE)
[JATT](/#JATT)
[JDAT](/#JDAT)
[LBASE2](/#LBASE2)
[LIEU](/#LIEU)
[LOCA](/#LOCA)
[MFICH](/#MFICH)
[MOSA](/#MOSA)
[MHPP](/#MHPP)
[MICR](/#MICR)
[MURS](/#MURS)
[NBOR](/#NBOR)
[NOMS](/#NOMS)
[OBS](/#OBS)
[PAFF](/#PAFF)
[PART](/#PART)
[PARN](/#PARN)
[PDEN](/#PDEN)
[PERS](/#PERS)
[PLAN](/#PLAN)
[PLOC](/#PLOC)
[PPRO](/#PPRO)
[PREP](/#PREP)
[PROT](/#PROT)
[PSTA](/#PSTA)
[REFE](/#REFE)
[REFP](/#REFP)
[REFO](/#REFO)
[REG](/#REG)
[REMA](/#REMA)
[REMP](/#REMP)
[RENV](/#RENV)
[REPR](/#REPR)
[RFPA](/#RFPA)
[SCLD](/#SCLD)
[SCLE](/#SCLE)
[SCLX](/#SCLX)
[SITE](/#SITE)
[STAT](/#STAT)
[TECH](/#TECH)
[TICO](/#TICO)
[TOIT](/#TOIT)
[TYPO](/#TYPO)
[VERT](/#VERT)
[REFIM](/#REFIM)
[IMG](/#IMG)
[VIDEO](/#VIDEO)
[DOSURL](/#DOSURL)
[DOSURLPDF](/#DOSURLPDF)
[DOSADRS](/#DOSADRS)
[LIENS](/#LIENS)
[IMAGE](/#IMAGE)
[VISI](/#VISI)
[VOCA](/#VOCA)
[VOUT](/#VOUT)
[WEB](/#WEB)
[ZONE](/#ZONE)
[THEM](/#THEM)
[ACMH](/#ACMH)
[ACURL](/#ACURL)
[WADRS](/#WADRS)
[WCOM](/#WCOM)
[WRENV](/#WRENV)
[REFM](/#REFM)
[CONTACT](/#CONTACT)
[IDAGR](/#IDAGR)
[LMDP](/#LMDP)
[PINT](/#PINT)
[DLAB](/#DLAB)
[_id](/#_id)
[__v](/#__v)
### REF
Référence unique de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PRODUCTEUR


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### BASE
Nom de la base : Patrimoine architectural (Mérimée)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### CONTIENT_IMAGE
Champ généré à chaque sauvegarde de la notice. Si notice contient des images, la valeur du champs sera oui', sinon 'non'. Ce champs est utilisé pour l'affichage de la phototèque mais pourrait être supprimé et remplacer par une fonction exist dans ES

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### MEMOIRE


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

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
Champ généré à chaque sauvegarde de la notice. Si notice contient des une géolocalisation, la valeur du champs sera 'oui', sinon 'non'

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### POP_COORDINATES_POLYGON.type


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### POP_COORDINATES_POLYGON.coordinates


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### POP_DATE
Champ qui sera utilisé pour traduire les date en format requetable

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|true|false|

### POP_IMPORT


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### TOUT
Champs qui devait contenir tous les champs dans mistral. Aujourd'hui est vide [DEPRECIE ?]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ACTU
Destinations successives et actuelle 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADRS
Adresse

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AFFE
Affectataire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

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

### APRO


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ARCHEO
Référence dans la base Patriarche

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTP
Auteurs phototype

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### AUTR
Auteurs de l'oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### CADA
Référence cadastrale

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### CANT
Canton

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COLL
Décompte des oeuvres recensées

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### COM
Commune

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

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
|Array|false|false|false|

### COUV
Type de la couverture

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DATE
Date protection

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### DBOR
Date de rédaction de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DOMN
Domaines

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
|String|false|false|false|

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

### DOSS
Dossier

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

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

### ELEV
Parti d’élévation extérieure

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ENER
Source de l'énergie

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ESCA
Emplacement, forme et structure de l’escalier 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ETAG
Vaisseau et étage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ETAT
Etat de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### ETUD
Parties non étud

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### GENR
Destinataire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### HIST
Commentaire historique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### HYDR
Cours d'eau

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMPL
Milieu d'implantation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### INSEE
Numéro INSEE de la commune

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### INTE
Intérêt de l'oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### JATT
Justification de l'attribution

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### JDAT
Justification de la datation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### LBASE2
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEU
Lieu-dit

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA
Localisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MFICH
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MOSA
Mosaïques

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MHPP
Eléments protégés MH

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MICR
Numéro de microfiche

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MURS
Matériau du gros-oeuvre et mise en oeuvre 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### NBOR
no Bordereaus

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NOMS
Noms des rédacteurs de la notice et du dossier

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### OBS
Observations

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PAFF
Précisions sur l'affectataire 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PART
Parties constituantes

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PARN
Parties non étud

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PDEN
Précision sur la dénomination

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PERS
Personnalitées

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PLAN
Parti de plan

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
|Array|false|false|false|

### PROT
Nature de la protection MH

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### PSTA
Précisions sur le statut de la propriété

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFE
Référence de l'édifice de conservation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFP
Références des parties constituantes étudiées

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REFO
REFO

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REG
Region

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REMA
Eléments remarquables

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REMP
Remploi

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RENV
N° de renvoi au domaine MH ou au domaine INVENTAIRE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REPR
Représentation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RFPA
Identifiant Patrimoine

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SCLD
Datation des campagnes secondaires de construction

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SCLE
Datation des campagnes principales de construction

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SCLX
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### SITE
Site, secteur ou zone de protection

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### STAT
Statut de la propriété

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TECH
Technique du décor des immeubles par nature 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### TICO
Titre courant

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TOIT
Matériau de la couverture 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### TYPO
Typologie 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VERT
Couvert et découvert de jardin 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFIM
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMG
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### VIDEO
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

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

### DOSADRS
Dossier adresse

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIENS
Liens Divers

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### IMAGE
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VISI
Ouverture au public

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### VOCA
Vocable 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VOUT
Type et nature du couvrement 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### WEB
Visite guidé

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ZONE
Zone Lambert ou autres

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### THEM
Thème 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ACMH
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ACURL
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WADRS
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WCOM
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WRENV
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFM
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CONTACT
Contact 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### IDAGR
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LMDP
[PAS affiché]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PINT
intérêt oeuvre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DLAB
Date du label

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
