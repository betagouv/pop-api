var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
var mongoosastic = require("mongoosastic");
var getElasticInstance = require("../elasticsearch");
const Museo = require("./museo");

const Schema = new mongoose.Schema(
  {
    PRODUCTEUR: {
      type: String,
      default: "MUSEE",
      description: "Producteur de la donnée",
      master: "true"
    },
    BASE: {
      type: String,
      default: "Collections des musées de France (Joconde)",
      description: "Nom de la base",
      master: "true"
    },
    CONTIENT_IMAGE: {
      type: String,
      default: "",
      description:
        "Champ généré à chaque sauvegarde de la notice. Si notice contient des images, la valeur du champs sera oui', sinon 'non'. Ce champs est utilisé pour l'affichage de la phototèque mais pourrait être supprimé et remplacer par une fonction exist dans ES",
      master: "true"
    },
    POP_COORDONNEES: {
      lat: {
        type: Number,
        default: 0,
        description: "Latitude de la notice en WGS84",
        master: "true"
      },
      lon: {
        type: Number,
        default: 0,
        description: "Longitude de la notice en WGS84",
        master: "true"
      }
    },
    REF: {
      type: String,
      unique: true,
      index: true,
      trim: true,
      description: "Référence unique de la notice",
      master: "false"
    },
    POP_IMPORT: [{ type: mongoose.Schema.ObjectId, ref: "import" }],
    REFMIS: {
      type: String,
      default: "",
      description:
        "Référence de mise à jour (marque de la modification de la notice)",
      master: false
    },
    ADPT: {
      type: [String],
      default: [],
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation] Ancien dépôt / changement d’affectation",
      master: "false"
    },
    APPL: {
      type: [String],
      default: [],
      description: "Appellation",
      master: "false"
    },
    APTN: {
      type: String,
      default: "",
      description:
        "Ancienne appartenance (nom du donateur / testateur/ vendeur) ",
      master: "false"
    },
    ATTR: {
      type: String,
      default: "",
      description: "Anciennes attributions",
      master: "false"
    },
    AUTR: {
      type: String,
      default: "",
      description: "Auteur /exécutant / collecteur",
      master: "false"
    },
    BIBL: {
      type: String,
      default: "",
      description: "Bibliographie",
      master: "false"
    },
    COMM: {
      type: String,
      default: "",
      description: "Commentaires",
      master: "false"
    },
    CONTACT: {
      type: String,
      default: "",
      description: "Lien contact musée",
      master: "true"
    },
    COOR: {
      type: String,
      default: "",
      description: "Coordinateur",
      master: "false"
    },
    COPY: {
      type: String,
      default: "",
      description: "Copyright notice",
      master: "false"
    },
    DACQ: {
      type: String,
      default: "",
      description: "Date d’acquisition",
      master: "false"
    },
    DATA: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]  ",
      master: "false"
    },
    DATION: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]  ",
      master: "false"
    },
    DDPT: {
      type: String,
      default: "",
      description: "Date de dépôt / changement d’affectation",
      master: "false"
    },
    DECV: {
      type: String,
      default: "",
      description:
        "Découverte / collecte / récolte (lieu de découverte / collecte / récolte) ; Type de site ; Méthode de découverte /collecte / récolte ; Date de découverte / collecte / récolte ; Découvreur / collecteur) ",
      master: "false"
    },
    DENO: {
      type: [String],
      default: [],
      description: "Dénomination du bien",
      master: "false"
    },
    DEPO: {
      type: String,
      default: "",
      description: "Dépôt / établissement dépositaire",
      master: "false"
    },
    DESC: {
      type: String,
      default: "",
      description: "Description ",
      master: "false"
    },
    DESY: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    DIFFU: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    DIMS: {
      type: String,
      default: "",
      description: "Mesures  / Dimensions",
      master: "false"
    },
    DMAJ: {
      type: String,
      default: "",
      description: "Date de la dernière mise à jour",
      master: "true"
    },
    DMIS: {
      type: String,
      default: "",
      description: "Date de la création POP/Mistral",
      master: "true"
    },
    DOMN: {
      type: [String],
      default: [],
      description: "Domaine (catégorie du bien) ",
      master: "false"
    },
    DREP: {
      type: String,
      default: "",
      description: "Date de la représentation",
      master: "false"
    },
    ECOL: {
      type: [String],
      default: [],
      description: "",
      master: "false"
    },
    EPOQ: {
      type: [String],
      default: [],
      description: "Epoque /style / mouvement ",
      master: "false"
    },
    ETAT: {
      type: [String],
      default: [],
      description:
        "[surement à nettoyer] Etat du bien. C'est une liste finie de valeurs possibles",
      master: "false"
    },
    EXPO: {
      type: String,
      default: "",
      description: "Exposition ",
      master: "false"
    },
    GENE: {
      type: [String],
      default: [],
      description: "Genèse ",
      master: "false"
    },
    GEOHI: {
      type: [String],
      default: [],
      description: "Géographie historique",
      master: "false"
    },
    HIST: {
      type: String,
      default: "",
      description: "Historique – Objets associés ",
      master: "false"
    },
    IMAGE: {
      type: String,
      default: "",
      description: "[Je ne sais pas à quoi ce champ sert]  ",
      master: "false"
    },
    IMG: {
      type: [String],
      default: [],
      description: "Contient les images. Le plus souvent généré grâce à REFIM",
      master: "true"
    },
    INSC: {
      type: [String],
      default: [],
      description: "Inscriptions ",
      master: "false"
    },
    INV: {
      type: String,
      default: "",
      description:
        "N°Inventaire, ancien(s) numéros(s), autres numéros, N° de dépôt",
      master: "false"
    },
    LABEL: {
      type: String,
      default: "Musée de France au sens de la loi n°2002-5 du 4 janvier 2002",
      description:
        "Appellation musée de France : logo : Champs ayant toujours la valeur 'Musée de France au sens de la loi n°2002-5 du 4 janvier 2002'",
      master: "true"
    },
    LABO: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    LARC: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    LIEUX: {
      type: String,
      default: "",
      description: "Lieu de création / d’exécution / d’utilisation",
      master: "false"
    },
    LOCA: {
      type: String,
      default: "",
      description: "Localisation",
      master: "false"
    },
    LOCA2: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    LOCA3: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    MILL: {
      type: [String],
      default: [],
      description: "Millésime de création / exécution ",
      master: "false"
    },
    MILU: {
      type: String,
      default: "",
      description: "Millésime d’utilisation ",
      master: "false"
    },
    MOSA: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    MSGCOM: {
      type: String,
      default: "",
      description:
        "[Surement à nettoyer. J'ai vu du code dans ce champ] Lien commande de reproduction et/ou de conditions d’utilisation ",
      master: "false"
    },
    MUSEO: {
      type: String,
      default: "",
      description: "Lien Numéro MUSEOFILE",
      master: "false"
    },
    NSDA: {
      type: String,
      default: "",
      description: "Numéro de site",
      master: "false"
    },
    ONOM: {
      type: [String],
      default: [],
      description: "Onomastique",
      master: "false"
    },
    PAUT: {
      type: String,
      default: "",
      description: "Précisions /auteur / exécutant / collecteur",
      master: "false"
    },
    PDAT: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation]",
      master: "false"
    },
    PDEC: {
      type: String,
      default: "",
      description: "Précisions sur la découverte / collecte / récolte",
      master: "false"
    },
    PEOC: {
      type: [String],
      default: [],
      description: "Période de l’original copié",
      master: "false"
    },
    PERI: {
      type: [String],
      default: [],
      description: "Période de création / exécution ",
      master: "false"
    },
    PERU: {
      type: [String],
      default: [],
      description: "Période d’utilisation",
      master: "false"
    },
    PHOT: {
      type: String,
      default: "",
      description: "Crédits photographiques",
      master: "false"
    },
    PINS: {
      type: String,
      default: "",
      description: "Précisions sur les inscriptions",
      master: "false"
    },
    PLIEUX: {
      type: String,
      default: "",
      description:
        "Précisions sur le lieu de création/ d’exécution / d’utilisation",
      master: "false"
    },
    PREP: {
      type: [String],
      default: [],
      description: "Précisions sur le sujet représenté ",
      master: "false"
    },
    PUTI: {
      type: String,
      default: "",
      description: "Précisions sur l’utilisation ",
      master: "false"
    },
    RANG: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation] ",
      master: "false"
    },
    REDA: {
      type: [String],
      default: [],
      description: "Rédacteur ",
      master: "false"
    },
    REFIM: {
      type: String,
      default: "",
      description:
        "Référence image : lien texte/ image : C'est un code qui permet de retrouver l'url de l'image",
      master: "false"
    },
    REPR: {
      type: String,
      default: "",
      description: "Sujet représenté ",
      master: "false"
    },
    RETIF: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : Pas affiché en production ni en consultation] ",
      master: "false"
    },
    SREP: {
      type: [String],
      default: [],
      description: "Source de la représentation",
      master: "false"
    },
    STAT: {
      type: [String],
      default: [],
      description:
        "Statut juridique (type de propriété ; mode d’acquisition ; institution propriétaire (ville quand la commune est propriétaire) ; établissement affectataire",
      master: "false"
    },
    TECH: {
      type: [String],
      default: [],
      description: "Matériaux et techniques",
      master: "false"
    },
    TICO: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : A vérifier. Non présent en production] ",
      master: "false"
    },
    TITR: {
      type: String,
      default: "",
      description: "Titre de l'oeuvre ",
      master: "false"
    },
    TOUT: {
      type: String,
      default: "",
      description:
        "[Peut être déprécié : A vérifier. Non présent en production] ",
      master: "false"
    },
    UTIL: {
      type: [String],
      default: [],
      description: "Utilisation / Destination",
      master: "false"
    },
    VIDEO: {
      type: [String],
      default: [],
      description: "[Peut être déprécié : A vérifier]",
      master: "false"
    },
    WWW: {
      type: String,
      default: "",
      description: "Lien site associé / site complémentaire",
      master: "false"
    },
    LVID: {
      type: String,
      default: "",
      description: "Lien video",
      master: "false"
    }
  },
  { collection: "joconde" }
);

Schema.plugin(mongoosePaginate);
Schema.plugin(mongoosastic, {
  esClient: getElasticInstance(),
  index: "joconde"
});

Schema.pre("save", function(next, done) {
  this.CONTIENT_IMAGE = this.IMG ? "oui" : "non";
  if (this.MUSEO) {
    Museo.findOne({ REF: this.MUSEO }, (err, museo) => {
      if (!err && museo && museo.location && museo.location.lat) {
        this.POP_COORDONNEES = museo.location;
      }
      next();
    });
  } else {
    next();
  }
});

const object = mongoose.model("joconde", Schema);

module.exports = object;
