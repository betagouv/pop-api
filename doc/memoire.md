# POP SCHEMAS memoire

[PRODUCTEUR](/#PRODUCTEUR)
[BASE](/#BASE)
[CONTIENT_IMAGE](/#CONTIENT_IMAGE)
[POP_IMPORT](/#POP_IMPORT)
[REF](/#REF)
[TOUT](/#TOUT)
[ADRESSE](/#ADRESSE)
[AUTOEU](/#AUTOEU)
[AUTG](/#AUTG)
[AUTP](/#AUTP)
[AUTOR](/#AUTOR)
[AUTTI](/#AUTTI)
[COM](/#COM)
[DOM](/#DOM)
[EDIF](/#EDIF)
[EXPO](/#EXPO)
[JDATPV](/#JDATPV)
[LIEUCOR](/#LIEUCOR)
[COTECOR](/#COTECOR)
[LIEUCTI](/#LIEUCTI)
[COTECTI](/#COTECTI)
[LIEUCP](/#LIEUCP)
[COTECP](/#COTECP)
[LEG](/#LEG)
[OBJT](/#OBJT)
[OBS](/#OBS)
[OBSOR](/#OBSOR)
[OBSTI](/#OBSTI)
[PAYS](/#PAYS)
[PUBLI](/#PUBLI)
[TIREDE](/#TIREDE)
[ROLE](/#ROLE)
[PRECOR](/#PRECOR)
[SERIE](/#SERIE)
[THEATRE](/#THEATRE)
[TITRE](/#TITRE)
[DMAJ](/#DMAJ)
[DMIS](/#DMIS)
[IDPROD](/#IDPROD)
[NUMCD](/#NUMCD)
[NUMF](/#NUMF)
[INSEE](/#INSEE)
[NVD](/#NVD)
[MARQ](/#MARQ)
[ACC](/#ACC)
[ACQU](/#ACQU)
[ADPHOT](/#ADPHOT)
[AIRE](/#AIRE)
[ANUMP](/#ANUMP)
[COPY](/#COPY)
[COULEUR](/#COULEUR)
[COSTUME](/#COSTUME)
[DATIMM](/#DATIMM)
[DATOEU](/#DATOEU)
[DATPV](/#DATPV)
[DATOR](/#DATOR)
[DATTI](/#DATTI)
[DATG](/#DATG)
[DATD](/#DATD)
[DIFF](/#DIFF)
[DPT](/#DPT)
[EDIARCH](/#EDIARCH)
[ECH](/#ECH)
[FORMAT](/#FORMAT)
[FORMATOR](/#FORMATOR)
[FORMATTI](/#FORMATTI)
[LBASE](/#LBASE)
[WEB](/#WEB)
[LIB](/#LIB)
[LOCA](/#LOCA)
[LIEUORIG](/#LIEUORIG)
[MCGEO](/#MCGEO)
[MCL](/#MCL)
[MENTIONS](/#MENTIONS)
[MENTOR](/#MENTOR)
[MENTTI](/#MENTTI)
[MCPER](/#MCPER)
[VUECD](/#VUECD)
[NUMAUTP](/#NUMAUTP)
[NUMCAF](/#NUMCAF)
[ANUMOR](/#ANUMOR)
[NUMOR](/#NUMOR)
[NUMP](/#NUMP)
[ANUMTI](/#ANUMTI)
[NUMTI](/#NUMTI)
[RENV](/#RENV)
[REG](/#REG)
[SENS](/#SENS)
[SCLE](/#SCLE)
[SUP](/#SUP)
[TECH](/#TECH)
[TECHOR](/#TECHOR)
[TECHTI](/#TECHTI)
[TOILE](/#TOILE)
[TYP](/#TYP)
[TYPDOC](/#TYPDOC)
[TYPEIMG](/#TYPEIMG)
[TYPSUPP](/#TYPSUPP)
[VIDEO](/#VIDEO)
[LBASE2](/#LBASE2)
[LEG2](/#LEG2)
[REFIM](/#REFIM)
[REFIMG](/#REFIMG)
[MOSA](/#MOSA)
[SITE](/#SITE)
[NUMSITE](/#NUMSITE)
[NUMOP](/#NUMOP)
[CHRONO](/#CHRONO)
[STRUCT](/#STRUCT)
[SUJET](/#SUJET)
[TICO](/#TICO)
[NUMI](/#NUMI)
[LIEU](/#LIEU)
[ADRS](/#ADRS)
[CONTACT](/#CONTACT)
[EMET](/#EMET)
[NUM](/#NUM)
[IMG](/#IMG)
[WCOM](/#WCOM)
[LIENS](/#LIENS)
[LAUTP](/#LAUTP)
[_id](/#_id)
[__v](/#__v)
### PRODUCTEUR
      Producteur de la donnée déterminé grâce à la référence :       IV=INV      OA=CAOA      MH=CRMH      AR=ARCH      AP=SDAP      Autre=SAP

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### BASE
Nom de la base : Photographies (Mémoire)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### CONTIENT_IMAGE
Champ généré à chaque sauvegarde de la notice. Si notice contient des images, la valeur du champs sera oui', sinon 'non'. Ce champs est utilisé pour l'affichage de la phototèque mais pourrait être supprimé et remplacer par une fonction exist dans ES

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### POP_IMPORT


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### REF
Référence unique de la notice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TOUT
Index global [Peut etre déprécié]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADRESSE
Adresse 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTOEU
Auteur oeuvre représentée

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTG
Auteur gravure

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTP
Notice biblio

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTOR
Auteur original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AUTTI
Auteur tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COM
Commune

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DOM
Domaine

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EDIF
Nom édifice

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EXPO
Référence d’exposition de l’image 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### JDATPV
Justif date pv

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEUCOR
Lieu cons orig.

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COTECOR
Cote cons orig. 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEUCTI
Lieu cons tir. 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COTECTI
Cote conservation du tirage 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEUCP
Lieu cons pho.

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COTECP
Cote conservation du phototype

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LEG
Légende 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### OBJT
Nom objet

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### OBS
Obs phototype

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### OBSOR
Obs original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### OBSTI
Obs tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PAYS
Pays   

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PUBLI
Publication 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TIREDE
Pub. photograph.

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ROLE


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### PRECOR
Préc original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SERIE
Titre série

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### THEATRE


|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TITRE


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

### IDPROD
Emetteur (nom) 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMCD
Numéro CD

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMF
No de fond

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### INSEE
Code INSEE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NVD
vidéodisque

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MARQ
Ordre images

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ACC
Accessoire pose

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ACQU
Acquisition

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADPHOT
Adresse personne 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### AIRE
Aire d'étude

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ANUMP
Ancien numéro (ancienne cote du phototype)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COPY
Crédit photo 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COULEUR
Couleur [Devrait contenir oui ou non mais contient bcp plus . donnée à nettoyer]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### COSTUME
Costume de la personne représentée

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATIMM
Date immatricul

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATOEU
Date oeuv année

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATPV
Date prise vue 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATOR
Date original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATTI
Date tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATG
Date gravure

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DATD
Date dessin

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DIFF
Droits diffusion

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### DPT
Département 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### EDIARCH
Interprétation

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ECH
Echelle 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### FORMAT
Format phototype

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### FORMATOR
Format original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### FORMATTI
Format tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LBASE
LBASE contient la référence vers la notice Palissy ou Mérimée contenant l'image

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|Array|false|false|false|

### WEB
Accès Mémoire

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIB
Mots candidats

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LOCA
Localisation 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEUORIG
Lieu de dépôt

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MCGEO
Nom géographique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MCL
Mots clés

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MENTIONS
Mentions photo

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MENTOR
Mentions orig

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MENTTI
Mentions tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MCPER
Nom personne

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VUECD
No vue CD

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMAUTP
Cote photographe

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMCAF
No carte fenêtre

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ANUMOR
No original(anc)

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMOR
No original

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMP
No phototype 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ANUMTI
Ancien numéro du tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMTI
No tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### RENV
Renvoi 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REG
Région 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SENS
Sens [Qu'est ce que c'est ?] 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SCLE
Date oeuv siècle

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SUP
Support 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TECH
Technique photo

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TECHOR
Technique orig

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TECHTI
Technique tirage

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TOILE
Toile de fond

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TYP
Type  [Qu'est ce que c'est ?]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TYPDOC
phototype argentique

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TYPEIMG
Type image num

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TYPSUPP
Type support num 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### VIDEO
Vidéo [Semble être doublon avec IMG]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LBASE2
Liens base  [Quelle différence avec LBASE?]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LEG2
Légende thes. 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFIM
Ref Image

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### REFIMG
Nom Image

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### MOSA
Mosaïques 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SITE
SITE

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMSITE
N° du site 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMOP
N° d'opération

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CHRONO
Chronologie 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### STRUCT
Structure 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### SUJET
Sujet 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### TICO
Titre du dossier

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUMI
Ident. support

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIEU
Lieu-dit 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### ADRS
Adresse saisie

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### CONTACT
Contact 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|true|false|

### EMET
Emetteur (nom) 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### NUM
N° support 

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### IMG
Lien vers l'image

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### WCOM
Ville [Quelle difference avec COM ?]

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LIENS
Liens divers

|Type|Required|Master|Opendata|
|----|--------|------|--------|
|String|false|false|false|

### LAUTP
Notice biblio

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
