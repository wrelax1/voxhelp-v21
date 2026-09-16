const APP_VERSION = "2.1";

const LANGUAGE_STORAGE_KEYS = {
    patient: "maVoixPatientLanguage",
    caregiver: "maVoixCaregiverLanguage"
};

const SUPPORTED_LANGUAGES = [
    "fr",
    "en",
    "de",
    "it"
];

/*
   Langues disponibles pour l'affichage
   destiné au patient.
*/
const PATIENT_LANGUAGES = [
    "fr",
    "en",
    "de",
    "it",
    "es",
    "pt"
];

const LANGUAGE_LOCALES = {
    fr: "fr-FR",
    en: "en-GB",
    de: "de-DE",
    it: "it-IT",
    es: "es-ES",
    pt: "pt-PT"
};


const QUICK_PHRASES = {

    yes: {
        fr: {
            label: "OUI",
            speech: "Oui"
        },
        en: {
            label: "YES",
            speech: "Yes"
        },
		de: {
			label: "JA",
			speech: "Ja"
		},
		it: {
            label: "SÌ",
            speech: "Sì"
        },

        es: {
            label: "SÍ",
            speech: "Sí"
        },

        pt: {
            label: "SIM",
            speech: "Sim"
        }
    },

    no: {
        fr: {
            label: "NON",
            speech: "Non"
        },
        en: {
            label: "NO",
            speech: "No"
        },
        de: {
            label: "NEIN",
            speech: "Nein"
        },
        it: {
            label: "NO",
            speech: "No"
        },

        es: {
            label: "NO",
            speech: "No"
        },

        pt: {
            label: "NÃO",
            speech: "Não"
        }
    },

    stop: {
        fr: {
            label: "STOP",
            speech: "Stop, s’il vous plaît"
        },
        en: {
            label: "STOP",
            speech: "Stop, please"
        },
        de: {
            label: "STOPP",
            speech: "Stopp, bitte"
        },
        it: {
            label: "STOP",
            speech: "Stop, per favore"
        },

        es: {
            label: "STOP",
            speech: "Pare, por favor"
        },

        pt: {
            label: "STOP",
            speech: "Pare, por favor"
        }
    }

};

/* =========================================
   ÉCRAN PRINCIPAL — TRADUCTIONS
   ========================================= */

const HOME_TRANSLATIONS = {

    fr: {
        title: "Je veux vous dire…",
        respiration: "RESPIRATION /<br>GORGE",
        pain: "J'AI MAL",
        position: "POSITIONNEMENT",
        care: "INCONFORT",
        hygiene: "VIE QUOTIDIENNE",
        environment: "ENVIRONNEMENT",
        questions: "QUESTIONS<br>MÉDECIN",
		careTeam: "ÉQUIPE SOIGNANTE",
        movement: "DÉPLACEMENTS",
        planning: "PLANNING / TEMPS",
        understand: "COMPRENDRE",
        talk: "FAMILLE / AMIS",
        emotions: "ÉMOTIONS",
        recharge: "RECHARGEZ<br>MON TÉLÉPHONE",
        rechargeSpeech: "Rechargez mon téléphone, s’il vous plaît",
        phrases: "MES PHRASES",
        voice: "VOIX",
        about: "À PROPOS"
    },

    en: {
        title: "I want to tell you…",
        respiration: "BREATHING /<br>THROAT",
        pain: "I'M IN PAIN",
        position: "POSITIONING",
        care: "DISCOMFORT",
        hygiene: "DAILY LIVING",
        environment: "ENVIRONMENT",
        questions: "QUESTIONS<br>FOR THE DOCTOR",
        careTeam: "CARE TEAM",
        movement: "GETTING AROUND",
        planning: "PLANNING / TIME",
        understand: "UNDERSTAND",
        talk: "FAMILY / FRIENDS",
        emotions: "EMOTIONS",
        recharge: "CHARGE<br>MY PHONE",
        rechargeSpeech: "Please charge my phone",
        phrases: "MY PHRASES",
        voice: "VOICE",
        about: "ABOUT"
    },

    de: {
        title: "Ich möchte Ihnen sagen…",
        respiration: "ATMUNG /<br>HALS",
        pain: "ICH HABE SCHMERZEN",
        position: "POSITIONIERUNG",
        care: "BESCHWERDEN",
        hygiene: "ALLTAG",
        environment: "UMGEBUNG",
        questions: "FRAGEN AN<br>DEN ARZT",
        careTeam: "BEHANDLUNGSTEAM",
        movement: "MOBILITÄT",
        planning: "PLANUNG / ZEIT",
        understand: "VERSTEHEN",
        talk: "FAMILIE / FREUNDE",
        emotions: "GEFÜHLE",
        recharge: "BITTE MEIN<br>HANDY LADEN",
        rechargeSpeech: "Bitte laden Sie mein Handy auf",
        phrases: "MEINE SÄTZE",
        voice: "STIMME",
        about: "ÜBER DIE APP"
    },

    it: {
        title: "Vorrei dirle…",
        respiration: "RESPIRAZIONE /<br>GOLA",
        pain: "HO DOLORE",
        position: "POSIZIONAMENTO",
        care: "DISAGIO",
        hygiene: "VITA QUOTIDIANA",
        environment: "AMBIENTE",
        questions: "DOMANDE<br>AL MEDICO",
        careTeam: "TEAM CURANTE",
        movement: "SPOSTAMENTI",
        planning: "PIANIFICAZIONE / TEMPO",
        understand: "CAPIRE",
        talk: "FAMIGLIA / AMICI",
        emotions: "EMOZIONI",
        recharge: "CARICATE<br>IL MIO TELEFONO",
        rechargeSpeech: "Per favore, caricate il mio telefono",
        phrases: "LE MIE FRASI",
        voice: "VOCE",
        about: "INFORMAZIONI"
    },

    es: {
        title: "Quiero decirle…",
        respiration: "RESPIRACIÓN /<br>GARGANTA",
        pain: "TENGO DOLOR",
        position: "POSICIONAMIENTO",
        care: "MALESTAR",
        hygiene: "VIDA DIARIA",
        environment: "ENTORNO",
        questions: "PREGUNTAS<br>AL MÉDICO",
        careTeam: "EQUIPO ASISTENCIAL",
        movement: "DESPLAZAMIENTOS",
        planning: "PLANIFICACIÓN / TIEMPO",
        understand: "COMPRENDER",
        talk: "FAMILIA / AMIGOS",
        emotions: "EMOCIONES",
        recharge: "CARGUE<br>MI TELÉFONO",
        rechargeSpeech: "Cargue mi teléfono, por favor",
        phrases: "MIS FRASES",
        voice: "VOZ",
        about: "ACERCA DE"
    },

    pt: {
        title: "Quero dizer-lhe…",
        respiration: "RESPIRAÇÃO /<br>GARGANTA",
        pain: "TENHO DOR",
        position: "POSICIONAMENTO",
        care: "DESCONFORTO",
        hygiene: "VIDA QUOTIDIANA",
        environment: "AMBIENTE",
        questions: "PERGUNTAS<br>AO MÉDICO",
        careTeam: "EQUIPA DE CUIDADOS",
        movement: "DESLOCAÇÕES",
        planning: "PLANEAMENTO / TEMPO",
        understand: "COMPREENDER",
        talk: "FAMÍLIA / AMIGOS",
        emotions: "EMOÇÕES",
        recharge: "CARREGUE<br>O MEU TELEFONE",
        rechargeSpeech: "Carregue o meu telefone, por favor",
        phrases: "AS MINHAS FRASES",
        voice: "VOZ",
        about: "SOBRE"
    }

};

/* =========================================
   RESPIRATION — TRADUCTIONS
   ========================================= */

const RESPIRATION_TRANSLATIONS = {

    fr: {

        title: "Respiration",

        breathing: {
            label: "J'AI DU MAL<br>À RESPIRER",
            speech: "J’ai du mal à respirer"
        },

        suction: {
            label: "J'AI BESOIN<br>D'ÊTRE ASPIRÉ",
            speech: "J’ai besoin d’être aspiré"
        },

        secretions: {
            label: "SÉCRÉTIONS",
            speech: "J’ai des sécrétions qui me gênent"
        },

        blocked: {
            label: "ÇA SEMBLE<br>BOUCHÉ",
            speech: "J’ai l’impression que quelque chose est bouché"
        },

        tracheostomyPain: {
            label: "DOULEUR AUTOUR<br>DE LA TRACHÉOTOMIE",
            speech: "J’ai mal autour de ma trachéotomie"
        },

        dryThroat: {
            label: "GORGE SÈCHE",
            speech: "J’ai la gorge sèche"
        },

        dryMouth: {
            label: "BOUCHE SÈCHE",
            speech: "J’ai la bouche très sèche"
        },

        better: {
            label: "ÇA VA MIEUX",
            speech: "Ça va mieux maintenant"
        },

        notBetter: {
            label: "ÇA NE VA<br>PAS MIEUX",
            speech: "Ça ne va toujours pas mieux"
        },

        stay: {
            label: "RESTEZ<br>AVEC MOI",
            speech: "Restez avec moi, s’il vous plaît"
        }
    },


    en: {

        title: "Breathing",

        breathing: {
            label: "I'M HAVING TROUBLE<br>BREATHING",
            speech: "I'm having trouble breathing"
        },

        suction: {
            label: "I NEED<br>SUCTION",
            speech: "I need to be suctioned"
        },

        secretions: {
            label: "SECRETIONS",
            speech: "I have secretions that are bothering me"
        },

        blocked: {
            label: "IT FEELS<br>BLOCKED",
            speech: "It feels like something is blocked"
        },

        tracheostomyPain: {
            label: "PAIN AROUND<br>TRACHEOSTOMY",
            speech: "I have pain around my tracheostomy"
        },

        dryThroat: {
            label: "DRY THROAT",
            speech: "My throat is dry"
        },

        dryMouth: {
            label: "DRY MOUTH",
            speech: "My mouth is very dry"
        },

        better: {
            label: "I FEEL BETTER",
            speech: "I feel better now"
        },

        notBetter: {
            label: "STILL NOT<br>BETTER",
            speech: "I still don't feel better"
        },

        stay: {
            label: "STAY<br>WITH ME",
            speech: "Please stay with me"
        }
    },


    de: {

        title: "Atmung",

        breathing: {
            label: "ICH BEKOMME<br>SCHLECHT LUFT",
            speech: "Ich bekomme schlecht Luft"
        },

        suction: {
            label: "BITTE<br>ABSAUGEN",
            speech: "Ich muss abgesaugt werden"
        },

        secretions: {
            label: "SEKRET",
            speech: "Ich habe Sekret, das mich stört"
        },

        blocked: {
            label: "ETWAS IST<br>BLOCKIERT",
            speech: "Ich habe das Gefühl, dass etwas blockiert ist"
        },

        tracheostomyPain: {
            label: "SCHMERZEN AN DER<br>TRACHEOSTOMIE",
            speech: "Ich habe Schmerzen im Bereich der Tracheostomie"
        },

        dryThroat: {
            label: "TROCKENER HALS",
            speech: "Mein Hals ist trocken"
        },

        dryMouth: {
            label: "TROCKENER MUND",
            speech: "Mein Mund ist sehr trocken"
        },

        better: {
            label: "ES GEHT<br>BESSER",
            speech: "Jetzt geht es mir besser"
        },

        notBetter: {
            label: "NOCH NICHT<br>BESSER",
            speech: "Es geht mir immer noch nicht besser"
        },

        stay: {
            label: "BLEIBEN SIE<br>BEI MIR",
            speech: "Bitte bleiben Sie bei mir"
        }
    },


    it: {

        title: "Respirazione",

        breathing: {
            label: "FACCIO FATICA<br>A RESPIRARE",
            speech: "Faccio fatica a respirare"
        },

        suction: {
            label: "HO BISOGNO<br>DI ASPIRAZIONE",
            speech: "Ho bisogno di essere aspirato"
        },

        secretions: {
            label: "SECREZIONI",
            speech: "Ho delle secrezioni che mi danno fastidio"
        },

        blocked: {
            label: "SEMBRA<br>OSTRUITO",
            speech: "Ho l'impressione che ci sia qualcosa di ostruito"
        },

        tracheostomyPain: {
            label: "DOLORE INTORNO<br>ALLA TRACHEOSTOMIA",
            speech: "Ho dolore intorno alla tracheostomia"
        },

        dryThroat: {
            label: "GOLA SECCA",
            speech: "Ho la gola secca"
        },

        dryMouth: {
            label: "BOCCA SECCA",
            speech: "Ho la bocca molto secca"
        },

        better: {
            label: "ORA VA MEGLIO",
            speech: "Adesso va meglio"
        },

        notBetter: {
            label: "NON VA<br>ANCORA MEGLIO",
            speech: "Non va ancora meglio"
        },

        stay: {
            label: "RESTI<br>CON ME",
            speech: "Rimanga con me, per favore"
        }
    },


    es: {

        title: "Respiración",

        breathing: {
            label: "ME CUESTA<br>RESPIRAR"
        },

        suction: {
            label: "NECESITO<br>ASPIRACIÓN"
        },

        secretions: {
            label: "SECRECIONES"
        },

        blocked: {
            label: "PARECE<br>OBSTRUIDO"
        },

        tracheostomyPain: {
            label: "DOLOR ALREDEDOR<br>DE LA TRAQUEOSTOMÍA"
        },

        dryThroat: {
            label: "GARGANTA SECA"
        },

        dryMouth: {
            label: "BOCA SECA"
        },

        better: {
            label: "ESTOY MEJOR"
        },

        notBetter: {
            label: "NO ESTOY<br>MEJOR"
        },

        stay: {
            label: "QUÉDESE<br>CONMIGO"
        }
    },


    pt: {

        title: "Respiração",

        breathing: {
            label: "TENHO DIFICULDADE<br>EM RESPIRAR"
        },

        suction: {
            label: "PRECISO DE<br>ASPIRAÇÃO"
        },

        secretions: {
            label: "SECREÇÕES"
        },

        blocked: {
            label: "PARECE<br>OBSTRUÍDO"
        },

        tracheostomyPain: {
            label: "DOR À VOLTA<br>DA TRAQUEOSTOMIA"
        },

        dryThroat: {
            label: "GARGANTA SECA"
        },

        dryMouth: {
            label: "BOCA SECA"
        },

        better: {
            label: "ESTOU MELHOR"
        },

        notBetter: {
            label: "AINDA NÃO<br>ESTOU MELHOR"
        },

        stay: {
            label: "FIQUE<br>COMIGO"
        }
    }

};

/* =========================================
   DOULEUR — TRADUCTIONS
   ========================================= */

const PAIN_TRANSLATIONS = {

    fr: {
        title: "Douleur",
        where: "Où avez-vous mal ?",
        detail: "Où exactement ?",
        intensity: "Quelle intensité ?",
        changeLocation: "← CHANGER L'ENDROIT"
    },

    en: {
        title: "Pain",
        where: "Where does it hurt?",
        detail: "Where exactly?",
        intensity: "How severe is the pain?",
        changeLocation: "← CHANGE LOCATION"
    },

    de: {
        title: "Schmerzen",
        where: "Wo haben Sie Schmerzen?",
        detail: "Wo genau?",
        intensity: "Wie stark sind die Schmerzen?",
        changeLocation: "← ANDERE STELLE"
    },

    it: {
        title: "Dolore",
        where: "Dove ha dolore?",
        detail: "Dove esattamente?",
        intensity: "Quanto è forte il dolore?",
        changeLocation: "← CAMBIA ZONA"
    },

    es: {
        title: "Dolor",
        where: "¿Dónde le duele?",
        detail: "¿Dónde exactamente?",
        intensity: "¿Qué intensidad tiene?",
        changeLocation: "← CAMBIAR ZONA"
    },

    pt: {
        title: "Dor",
        where: "Onde lhe dói?",
        detail: "Onde exatamente?",
        intensity: "Qual é a intensidade?",
        changeLocation: "← MUDAR LOCAL"
    }

};

/* =========================================
   DOULEUR — LOCALISATIONS
   ========================================= */

const PAIN_LOCATIONS = {

    head: {

        fr: {
            label: "TÊTE",
            speech: "J’ai mal à la tête"
        },

        en: {
            label: "HEAD",
            speech: "My head hurts"
        },

        de: {
            label: "KOPF",
            speech: "Ich habe Kopfschmerzen"
        },

        it: {
            label: "TESTA",
            speech: "Ho mal di testa"
        }
    },


    neck: {

        fr: {
            label: "COU",
            speech: "J’ai mal au cou"
        },

        en: {
            label: "NECK",
            speech: "I have pain in my neck"
        },

        de: {
            label: "NACKEN",
            speech: "Ich habe Schmerzen im Nacken"
        },

        it: {
            label: "COLLO",
            speech: "Ho dolore al collo"
        }
    },


    throat: {

        fr: {
            label: "GORGE",
            speech: "J’ai mal à la gorge"
        },

        en: {
            label: "THROAT",
            speech: "I have pain in my throat"
        },

        de: {
            label: "HALS",
            speech: "Ich habe Schmerzen im Hals"
        },

        it: {
            label: "GOLA",
            speech: "Ho dolore alla gola"
        }
    },


    chest: {

        fr: {
            label: "POITRINE",
            speech: "J’ai mal à la poitrine"
        },

        en: {
            label: "CHEST",
            speech: "I have pain in my chest"
        },

        de: {
            label: "BRUST",
            speech: "Ich habe Schmerzen in der Brust"
        },

        it: {
            label: "PETTO",
            speech: "Ho dolore al petto"
        }
    },


    back: {

        fr: {
            label: "DOS",
            speech: "J’ai mal au dos"
        },

        en: {
            label: "BACK",
            speech: "I have pain in my back"
        },

        de: {
            label: "RÜCKEN",
            speech: "Ich habe Schmerzen im Rücken"
        },

        it: {
            label: "SCHIENA",
            speech: "Ho dolore alla schiena"
        }
    },


    abdomen: {

        fr: {
            label: "VENTRE",
            speech: "J’ai mal au ventre"
        },

        en: {
            label: "ABDOMEN",
            speech: "I have pain in my abdomen"
        },

        de: {
            label: "BAUCH",
            speech: "Ich habe Schmerzen im Bauch"
        },

        it: {
            label: "PANCIA",
            speech: "Ho dolore alla pancia"
        }
    },


    leftShoulder: {

        fr: {
            label: "ÉPAULE<br>GAUCHE",
            speech: "J’ai mal à l’épaule gauche"
        },

        en: {
            label: "LEFT<br>SHOULDER",
            speech: "I have pain in my left shoulder"
        },

        de: {
            label: "LINKE<br>SCHULTER",
            speech: "Ich habe Schmerzen in der linken Schulter"
        },

        it: {
            label: "SPALLA<br>SINISTRA",
            speech: "Ho dolore alla spalla sinistra"
        }
    },


    rightShoulder: {

        fr: {
            label: "ÉPAULE<br>DROITE",
            speech: "J’ai mal à l’épaule droite"
        },

        en: {
            label: "RIGHT<br>SHOULDER",
            speech: "I have pain in my right shoulder"
        },

        de: {
            label: "RECHTE<br>SCHULTER",
            speech: "Ich habe Schmerzen in der rechten Schulter"
        },

        it: {
            label: "SPALLA<br>DESTRA",
            speech: "Ho dolore alla spalla destra"
        }
    },


    leftArm: {

        fr: {
            label: "BRAS<br>GAUCHE",
            speech: "J’ai mal au bras gauche"
        },

        en: {
            label: "LEFT<br>ARM",
            speech: "I have pain in my left arm"
        },

        de: {
            label: "LINKER<br>ARM",
            speech: "Ich habe Schmerzen im linken Arm"
        },

        it: {
            label: "BRACCIO<br>SINISTRO",
            speech: "Ho dolore al braccio sinistro"
        }
    },


    rightArm: {

        fr: {
            label: "BRAS<br>DROIT",
            speech: "J’ai mal au bras droit"
        },

        en: {
            label: "RIGHT<br>ARM",
            speech: "I have pain in my right arm"
        },

        de: {
            label: "RECHTER<br>ARM",
            speech: "Ich habe Schmerzen im rechten Arm"
        },

        it: {
            label: "BRACCIO<br>DESTRO",
            speech: "Ho dolore al braccio destro"
        }
    },


    leftHand: {

        fr: {
            label: "MAIN<br>GAUCHE",
            speech: "J’ai mal à la main gauche"
        },

        en: {
            label: "LEFT<br>HAND",
            speech: "I have pain in my left hand"
        },

        de: {
            label: "LINKE<br>HAND",
            speech: "Ich habe Schmerzen in der linken Hand"
        },

        it: {
            label: "MANO<br>SINISTRA",
            speech: "Ho dolore alla mano sinistra"
        }
    },


    rightHand: {

        fr: {
            label: "MAIN<br>DROITE",
            speech: "J’ai mal à la main droite"
        },

        en: {
            label: "RIGHT<br>HAND",
            speech: "I have pain in my right hand"
        },

        de: {
            label: "RECHTE<br>HAND",
            speech: "Ich habe Schmerzen in der rechten Hand"
        },

        it: {
            label: "MANO<br>DESTRA",
            speech: "Ho dolore alla mano destra"
        }
    },


    leftHip: {

        fr: {
            label: "HANCHE<br>GAUCHE",
            speech: "J’ai mal à la hanche gauche"
        },

        en: {
            label: "LEFT<br>HIP",
            speech: "I have pain in my left hip"
        },

        de: {
            label: "LINKE<br>HÜFTE",
            speech: "Ich habe Schmerzen in der linken Hüfte"
        },

        it: {
            label: "ANCA<br>SINISTRA",
            speech: "Ho dolore all’anca sinistra"
        }
    },


    rightHip: {

        fr: {
            label: "HANCHE<br>DROITE",
            speech: "J’ai mal à la hanche droite"
        },

        en: {
            label: "RIGHT<br>HIP",
            speech: "I have pain in my right hip"
        },

        de: {
            label: "RECHTE<br>HÜFTE",
            speech: "Ich habe Schmerzen in der rechten Hüfte"
        },

        it: {
            label: "ANCA<br>DESTRA",
            speech: "Ho dolore all’anca destra"
        }
    },

    buttocks: {

        fr: {
            label: "FESSES",
            speech: "J’ai mal aux fesses"
        },

        en: {
            label: "BUTTOCKS",
            speech: "I have pain in my buttocks"
        },

        de: {
            label: "GESÄSS",
            speech: "Ich habe Schmerzen am Gesäß"
        },

        it: {
            label: "NATICHE",
            speech: "Ho dolore alle natiche"
        }
    },


    anus: {

        fr: {
            label: "ANUS",
            speech: "J’ai mal à l’anus"
        },

        en: {
            label: "ANUS",
            speech: "I have pain in my anus"
        },

        de: {
            label: "ANUS",
            speech: "Ich habe Schmerzen am Anus"
        },

        it: {
            label: "ANO",
            speech: "Ho dolore all’ano"
        }
    },

    leftLeg: {

        fr: {
            label: "JAMBE<br>GAUCHE",
            speech: "J’ai mal à la jambe gauche"
        },

        en: {
            label: "LEFT<br>LEG",
            speech: "I have pain in my left leg"
        },

        de: {
            label: "LINKES<br>BEIN",
            speech: "Ich habe Schmerzen im linken Bein"
        },

        it: {
            label: "GAMBA<br>SINISTRA",
            speech: "Ho dolore alla gamba sinistra"
        }
    },


    rightLeg: {

        fr: {
            label: "JAMBE<br>DROITE",
            speech: "J’ai mal à la jambe droite"
        },

        en: {
            label: "RIGHT<br>LEG",
            speech: "I have pain in my right leg"
        },

        de: {
            label: "RECHTES<br>BEIN",
            speech: "Ich habe Schmerzen im rechten Bein"
        },

        it: {
            label: "GAMBA<br>DESTRA",
            speech: "Ho dolore alla gamba destra"
        }
    },


    leftFoot: {

        fr: {
            label: "PIED<br>GAUCHE",
            speech: "J’ai mal au pied gauche"
        },

        en: {
            label: "LEFT<br>FOOT",
            speech: "I have pain in my left foot"
        },

        de: {
            label: "LINKER<br>FUSS",
            speech: "Ich habe Schmerzen im linken Fuß"
        },

        it: {
            label: "PIEDE<br>SINISTRO",
            speech: "Ho dolore al piede sinistro"
        }
    },


    rightFoot: {

        fr: {
            label: "PIED<br>DROIT",
            speech: "J’ai mal au pied droit"
        },

        en: {
            label: "RIGHT<br>FOOT",
            speech: "I have pain in my right foot"
        },

        de: {
            label: "RECHTER<br>FUSS",
            speech: "Ich habe Schmerzen im rechten Fuß"
        },

        it: {
            label: "PIEDE<br>DESTRO",
            speech: "Ho dolore al piede destro"
        }
    }

};

const PAIN_LOCATION_PATIENT_LABELS = {

    es: {
        head: "CABEZA",
        neck: "CUELLO",
        throat: "GARGANTA",
        chest: "PECHO",
        back: "ESPALDA",
        abdomen: "VIENTRE",

        leftShoulder: "HOMBRO<br>IZQUIERDO",
        rightShoulder: "HOMBRO<br>DERECHO",

        leftArm: "BRAZO<br>IZQUIERDO",
        rightArm: "BRAZO<br>DERECHO",

        leftHand: "MANO<br>IZQUIERDA",
        rightHand: "MANO<br>DERECHA",

        leftHip: "CADERA<br>IZQUIERDA",
        rightHip: "CADERA<br>DERECHA",

        buttocks: "NALGAS",
        anus: "ANO",

        leftLeg: "PIERNA<br>IZQUIERDA",
        rightLeg: "PIERNA<br>DERECHA",

        leftFoot: "PIE<br>IZQUIERDO",
        rightFoot: "PIE<br>DERECHO"
    },

    pt: {
        head: "CABEÇA",
        neck: "PESCOÇO",
        throat: "GARGANTA",
        chest: "PEITO",
        back: "COSTAS",
        abdomen: "BARRIGA",

        leftShoulder: "OMBRO<br>ESQUERDO",
        rightShoulder: "OMBRO<br>DIREITO",

        leftArm: "BRAÇO<br>ESQUERDO",
        rightArm: "BRAÇO<br>DIREITO",

        leftHand: "MÃO<br>ESQUERDA",
        rightHand: "MÃO<br>DIREITA",

        leftHip: "ANCA<br>ESQUERDA",
        rightHip: "ANCA<br>DIREITA",

        buttocks: "NÁDEGAS",
        anus: "ÂNUS",

        leftLeg: "PERNA<br>ESQUERDA",
        rightLeg: "PERNA<br>DIREITA",

        leftFoot: "PÉ<br>ESQUERDO",
        rightFoot: "PÉ<br>DIREITO"
    }

};

/* =========================================
   DOULEUR — SOUS-LOCALISATIONS
   ========================================= */

const PAIN_SUBLOCATIONS = {

    head: {

        front: {
            label: {
                fr: "FRONT",
                en: "FOREHEAD",
                de: "STIRN",
                it: "FRONTE"
            },
            speech: {
                fr: "J’ai mal au front",
                en: "My forehead hurts",
                de: "Ich habe Schmerzen an der Stirn",
                it: "Ho dolore alla fronte"
            }
        },

        backHead: {
            label: {
                fr: "ARRIÈRE",
                en: "BACK OF<br>HEAD",
                de: "HINTERKOPF",
                it: "DIETRO<br>LA TESTA"
            },
            speech: {
                fr: "J’ai mal à l’arrière de la tête",
                en: "I have pain in the back of my head",
                de: "Ich habe Schmerzen am Hinterkopf",
                it: "Ho dolore dietro la testa"
            }
        },

        leftTemple: {
            label: {
                fr: "TEMPE G",
                en: "LEFT<br>TEMPLE",
                de: "LINKE<br>SCHLÄFE",
                it: "TEMPIA SX"
            },
            speech: {
                fr: "J’ai mal à la tempe gauche",
                en: "I have pain in my left temple",
                de: "Ich habe Schmerzen an der linken Schläfe",
                it: "Ho dolore alla tempia sinistra"
            }
        },

        rightTemple: {
            label: {
                fr: "TEMPE D",
                en: "RIGHT<br>TEMPLE",
                de: "RECHTE<br>SCHLÄFE",
                it: "TEMPIA DX"
            },
            speech: {
                fr: "J’ai mal à la tempe droite",
                en: "I have pain in my right temple",
                de: "Ich habe Schmerzen an der rechten Schläfe",
                it: "Ho dolore alla tempia destra"
            }
        },

        leftEye: {
            label: {
                fr: "ŒIL G",
                en: "LEFT EYE",
                de: "LINKES AUGE",
                it: "OCCHIO SX"
            },
            speech: {
                fr: "J’ai mal à l’œil gauche",
                en: "My left eye hurts",
                de: "Mein linkes Auge tut weh",
                it: "Ho dolore all’occhio sinistro"
            }
        },

        rightEye: {
            label: {
                fr: "ŒIL D",
                en: "RIGHT EYE",
                de: "RECHTES AUGE",
                it: "OCCHIO DX"
            },
            speech: {
                fr: "J’ai mal à l’œil droit",
                en: "My right eye hurts",
                de: "Mein rechtes Auge tut weh",
                it: "Ho dolore all’occhio destro"
            }
        },

        leftEar: {
            label: {
                fr: "OREILLE G",
                en: "LEFT EAR",
                de: "LINKES OHR",
                it: "ORECCHIO SX"
            },
            speech: {
                fr: "J’ai mal à l’oreille gauche",
                en: "My left ear hurts",
                de: "Mein linkes Ohr tut weh",
                it: "Ho dolore all’orecchio sinistro"
            }
        },

        rightEar: {
            label: {
                fr: "OREILLE D",
                en: "RIGHT EAR",
                de: "RECHTES OHR",
                it: "ORECCHIO DX"
            },
            speech: {
                fr: "J’ai mal à l’oreille droite",
                en: "My right ear hurts",
                de: "Mein rechtes Ohr tut weh",
                it: "Ho dolore all’orecchio destro"
            }
        },

        jaw: {
            label: {
                fr: "MÂCHOIRE",
                en: "JAW",
                de: "KIEFER",
                it: "MASCELLA"
            },
            speech: {
                fr: "J’ai mal à la mâchoire",
                en: "My jaw hurts",
                de: "Ich habe Schmerzen am Kiefer",
                it: "Ho dolore alla mascella"
            }
        },

        wholeHead: {
            label: {
                fr: "TOUTE<br>LA TÊTE",
                en: "WHOLE<br>HEAD",
                de: "GANZER<br>KOPF",
                it: "TUTTA<br>LA TESTA"
            },
            speech: {
                fr: "J’ai mal à toute la tête",
                en: "My whole head hurts",
                de: "Mein ganzer Kopf tut weh",
                it: "Mi fa male tutta la testa"
            }
        }
    },


    chest: {

        left: {
            label: {
                fr: "GAUCHE",
                en: "LEFT",
                de: "LINKS",
                it: "SINISTRA"
            },
            speech: {
                fr: "J’ai mal du côté gauche de la poitrine",
                en: "I have pain on the left side of my chest",
                de: "Ich habe Schmerzen auf der linken Seite der Brust",
                it: "Ho dolore sul lato sinistro del petto"
            }
        },

        right: {
            label: {
                fr: "DROITE",
                en: "RIGHT",
                de: "RECHTS",
                it: "DESTRA"
            },
            speech: {
                fr: "J’ai mal du côté droit de la poitrine",
                en: "I have pain on the right side of my chest",
                de: "Ich habe Schmerzen auf der rechten Seite der Brust",
                it: "Ho dolore sul lato destro del petto"
            }
        },

        leftRibs: {
            label: {
                fr: "CÔTES G",
                en: "LEFT RIBS",
                de: "LINKE<br>RIPPEN",
                it: "COSTOLE SX"
            },
            speech: {
                fr: "J’ai mal aux côtes à gauche",
                en: "I have pain in my left ribs",
                de: "Ich habe Schmerzen an den linken Rippen",
                it: "Ho dolore alle costole a sinistra"
            }
        },

        rightRibs: {
            label: {
                fr: "CÔTES D",
                en: "RIGHT RIBS",
                de: "RECHTE<br>RIPPEN",
                it: "COSTOLE DX"
            },
            speech: {
                fr: "J’ai mal aux côtes à droite",
                en: "I have pain in my right ribs",
                de: "Ich habe Schmerzen an den rechten Rippen",
                it: "Ho dolore alle costole a destra"
            }
        },

        center: {
            label: {
                fr: "CENTRE",
                en: "CENTER",
                de: "MITTE",
                it: "CENTRO"
            },
            speech: {
                fr: "J’ai mal au centre de la poitrine",
                en: "I have pain in the center of my chest",
                de: "Ich habe Schmerzen in der Mitte der Brust",
                it: "Ho dolore al centro del petto"
            }
        },

        wholeChest: {
            label: {
                fr: "TOUTE LA<br>POITRINE",
                en: "WHOLE<br>CHEST",
                de: "GANZE<br>BRUST",
                it: "TUTTO<br>IL PETTO"
            },
            speech: {
                fr: "J’ai mal dans toute la poitrine",
                en: "My whole chest hurts",
                de: "Ich habe Schmerzen in der ganzen Brust",
                it: "Ho dolore in tutto il petto"
            }
        }

    },


    back: {

        upper: {
            label: {
                fr: "HAUT",
                en: "UPPER",
                de: "OBEN",
                it: "ALTO"
            },
            speech: {
                fr: "J’ai mal dans le haut du dos",
                en: "I have pain in my upper back",
                de: "Ich habe Schmerzen im oberen Rücken",
                it: "Ho dolore nella parte alta della schiena"
            }
        },

        middle: {
            label: {
                fr: "MILIEU",
                en: "MIDDLE",
                de: "MITTE",
                it: "CENTRO"
            },
            speech: {
                fr: "J’ai mal au milieu du dos",
                en: "I have pain in the middle of my back",
                de: "Ich habe Schmerzen im mittleren Rücken",
                it: "Ho dolore al centro della schiena"
            }
        },

        left: {
            label: {
                fr: "GAUCHE",
                en: "LEFT",
                de: "LINKS",
                it: "SINISTRA"
            },
            speech: {
                fr: "J’ai mal du côté gauche du dos",
                en: "I have pain on the left side of my back",
                de: "Ich habe Schmerzen auf der linken Seite des Rückens",
                it: "Ho dolore sul lato sinistro della schiena"
            }
        },

        right: {
            label: {
                fr: "DROITE",
                en: "RIGHT",
                de: "RECHTS",
                it: "DESTRA"
            },
            speech: {
                fr: "J’ai mal du côté droit du dos",
                en: "I have pain on the right side of my back",
                de: "Ich habe Schmerzen auf der rechten Seite des Rückens",
                it: "Ho dolore sul lato destro della schiena"
            }
        },

        lower: {
            label: {
                fr: "BAS",
                en: "LOWER",
                de: "UNTEN",
                it: "BASSO"
            },
            speech: {
                fr: "J’ai mal dans le bas du dos",
                en: "I have pain in my lower back",
                de: "Ich habe Schmerzen im unteren Rücken",
                it: "Ho dolore nella parte bassa della schiena"
            }
        },

        wholeBack: {
            label: {
                fr: "TOUT<br>LE DOS",
                en: "WHOLE<br>BACK",
                de: "GANZER<br>RÜCKEN",
                it: "TUTTA LA<br>SCHIENA"
            },
            speech: {
                fr: "J’ai mal dans tout le dos",
                en: "My whole back hurts",
                de: "Mein ganzer Rücken tut weh",
                it: "Mi fa male tutta la schiena"
            }
        }

    },


    abdomen: {

        upper: {
            label: {
                fr: "HAUT",
                en: "UPPER",
                de: "OBERBAUCH",
                it: "ALTO"
            },
            speech: {
                fr: "J’ai mal dans le haut du ventre",
                en: "I have pain in my upper abdomen",
                de: "Ich habe Schmerzen im Oberbauch",
                it: "Ho dolore nella parte alta dell’addome"
            }
        },

        center: {
            label: {
                fr: "CENTRE",
                en: "CENTER",
                de: "MITTE",
                it: "CENTRO"
            },
            speech: {
                fr: "J’ai mal au centre du ventre",
                en: "I have pain in the center of my abdomen",
                de: "Ich habe Schmerzen in der Mitte des Bauchs",
                it: "Ho dolore al centro dell’addome"
            }
        },

        left: {
            label: {
                fr: "GAUCHE",
                en: "LEFT",
                de: "LINKS",
                it: "SINISTRA"
            },
            speech: {
                fr: "J’ai mal du côté gauche du ventre",
                en: "I have pain on the left side of my abdomen",
                de: "Ich habe Schmerzen auf der linken Seite des Bauchs",
                it: "Ho dolore sul lato sinistro dell’addome"
            }
        },

        right: {
            label: {
                fr: "DROITE",
                en: "RIGHT",
                de: "RECHTS",
                it: "DESTRA"
            },
            speech: {
                fr: "J’ai mal du côté droit du ventre",
                en: "I have pain on the right side of my abdomen",
                de: "Ich habe Schmerzen auf der rechten Seite des Bauchs",
                it: "Ho dolore sul lato destro dell’addome"
            }
        },

        lowerAbdomen: {
            label: {
                fr: "BAS-VENTRE",
                en: "LOWER<br>ABDOMEN",
                de: "UNTERBAUCH",
                it: "BASSO<br>VENTRE"
            },
            speech: {
                fr: "J’ai mal dans le bas-ventre",
                en: "I have pain in my lower abdomen",
                de: "Ich habe Schmerzen im Unterbauch",
                it: "Ho dolore nel basso ventre"
            }
        },

        bladder: {
            label: {
                fr: "VESSIE",
                en: "BLADDER",
                de: "BLASE",
                it: "VESCICA"
            },
            speech: {
                fr: "J’ai mal à la vessie",
                en: "I have pain in my bladder area",
                de: "Ich habe Schmerzen im Bereich der Blase",
                it: "Ho dolore alla vescica"
            }
        },

        genitals: {
            label: {
                fr: "ORGANES<br>GÉNITAUX",
                en: "GENITAL<br>AREA",
                de: "GENITAL-<br>BEREICH",
                it: "GENITALI"
            },
            speech: {
                fr: "J’ai mal aux organes génitaux",
                en: "I have pain in my genital area",
                de: "Ich habe Schmerzen im Genitalbereich",
                it: "Ho dolore nella zona genitale"
            }
        },

        wholeAbdomen: {
            label: {
                fr: "TOUT LE<br>VENTRE",
                en: "WHOLE<br>ABDOMEN",
                de: "GANZER<br>BAUCH",
                it: "TUTTO<br>L’ADDOME"
            },
            speech: {
                fr: "J’ai mal dans tout le ventre",
                en: "My whole abdomen hurts",
                de: "Ich habe Schmerzen im ganzen Bauch",
                it: "Ho dolore in tutto l’addome"
            }
        }
    },
	
	    buttocks: {

        left: {
            label: {
                fr: "GAUCHE",
                en: "LEFT",
                de: "LINKS",
                it: "SINISTRA"
            },
            speech: {
                fr: "J’ai mal à la fesse gauche",
                en: "I have pain in my left buttock",
                de: "Ich habe Schmerzen an der linken Gesäßhälfte",
                it: "Ho dolore alla natica sinistra"
            }
        },

        right: {
            label: {
                fr: "DROITE",
                en: "RIGHT",
                de: "RECHTS",
                it: "DESTRA"
            },
            speech: {
                fr: "J’ai mal à la fesse droite",
                en: "I have pain in my right buttock",
                de: "Ich habe Schmerzen an der rechten Gesäßhälfte",
                it: "Ho dolore alla natica destra"
            }
        },

        sacrumCoccyx: {
            label: {
                fr: "SACRUM /<br>COCCYX",
                en: "SACRUM /<br>COCCYX",
                de: "KREUZBEIN /<br>STEISSBEIN",
                it: "SACRO /<br>COCCIGE"
            },
            speech: {
                fr: "J’ai mal au niveau du sacrum ou du coccyx",
                en: "I have pain around my sacrum or coccyx",
                de: "Ich habe Schmerzen am Kreuzbein oder Steißbein",
                it: "Ho dolore al sacro o al coccige"
            }
        },

        both: {
            label: {
                fr: "LES DEUX<br>FESSES",
                en: "BOTH<br>BUTTOCKS",
                de: "BEIDE<br>GESÄSSHÄLFTEN",
                it: "ENTRAMBE<br>LE NATICHE"
            },
            speech: {
                fr: "J’ai mal aux deux fesses",
                en: "I have pain in both buttocks",
                de: "Ich habe Schmerzen an beiden Gesäßhälften",
                it: "Ho dolore a entrambe le natiche"
            }
        }

    }

};

const PAIN_SUBLOCATION_PATIENT_LABELS = {

    es: {

        head: {
            front: "FRENTE",
            backHead: "PARTE POSTERIOR<br>DE LA CABEZA",
            leftTemple: "SIEN<br>IZQUIERDA",
            rightTemple: "SIEN<br>DERECHA",
            leftEye: "OJO<br>IZQUIERDO",
            rightEye: "OJO<br>DERECHO",
            leftEar: "OÍDO<br>IZQUIERDO",
            rightEar: "OÍDO<br>DERECHO",
            jaw: "MANDÍBULA",
            wholeHead: "TODA<br>LA CABEZA"
        },

        chest: {
            left: "IZQUIERDA",
            right: "DERECHA",
            leftRibs: "COSTILLAS<br>IZQUIERDAS",
            rightRibs: "COSTILLAS<br>DERECHAS",
            center: "CENTRO",
            wholeChest: "TODO<br>EL PECHO"
        },

        back: {
            upper: "PARTE<br>SUPERIOR",
            middle: "CENTRO",
            left: "IZQUIERDA",
            right: "DERECHA",
            lower: "PARTE<br>INFERIOR",
            wholeBack: "TODA<br>LA ESPALDA"
        },

        abdomen: {
            upper: "PARTE<br>SUPERIOR",
            center: "CENTRO",
            left: "IZQUIERDA",
            right: "DERECHA",
            lowerAbdomen: "BAJO<br>VIENTRE",
            bladder: "VEJIGA",
            genitals: "ÓRGANOS<br>GENITALES",
            wholeAbdomen: "TODO<br>EL VIENTRE"
        },

        buttocks: {
            left: "IZQUIERDA",
            right: "DERECHA",
            sacrumCoccyx: "SACRO /<br>CÓCCIX",
            both: "AMBAS<br>NALGAS"
        }

    },


    pt: {

        head: {
            front: "TESTA",
            backHead: "PARTE DE TRÁS<br>DA CABEÇA",
            leftTemple: "TÊMPORA<br>ESQUERDA",
            rightTemple: "TÊMPORA<br>DIREITA",
            leftEye: "OLHO<br>ESQUERDO",
            rightEye: "OLHO<br>DIREITO",
            leftEar: "OUVIDO<br>ESQUERDO",
            rightEar: "OUVIDO<br>DIREITO",
            jaw: "MANDÍBULA",
            wholeHead: "TODA<br>A CABEÇA"
        },

        chest: {
            left: "ESQUERDA",
            right: "DIREITA",
            leftRibs: "COSTELAS<br>ESQUERDAS",
            rightRibs: "COSTELAS<br>DIREITAS",
            center: "CENTRO",
            wholeChest: "TODO<br>O PEITO"
        },

        back: {
            upper: "PARTE<br>SUPERIOR",
            middle: "MEIO",
            left: "ESQUERDA",
            right: "DIREITA",
            lower: "PARTE<br>INFERIOR",
            wholeBack: "TODAS<br>AS COSTAS"
        },

        abdomen: {
            upper: "PARTE<br>SUPERIOR",
            center: "CENTRO",
            left: "ESQUERDA",
            right: "DIREITA",
            lowerAbdomen: "BAIXO<br>VENTRE",
            bladder: "BEXIGA",
            genitals: "ÓRGÃOS<br>GENITAIS",
            wholeAbdomen: "TODA<br>A BARRIGA"
        },

        buttocks: {
            left: "ESQUERDA",
            right: "DIREITA",
            sacrumCoccyx: "SACRO /<br>CÓCCIX",
            both: "AMBAS<br>AS NÁDEGAS"
        }

    }

};

/* =========================================
   POSITION / CONFORT — TRADUCTIONS
   ========================================= */

const POSITION_TRANSLATIONS = {

    fr: {

        title: "Positionnement",

        bed: {
            label: "COUCHEZ-MOI",
            speech: "Remettez-moi dans le lit, s’il vous plaît"
        },

        chair: {
            label: "ASSEYEZ-MOI",
            speech: "Mettez-moi sur le fauteuil, s’il vous plaît"
        },

        moveUp: {
            label: "REMONTEZ-MOI",
            speech: "Remontez-moi dans le lit, s’il vous plaît"
        },

        moveDown: {
            label: "DESCENDEZ-MOI",
            speech: "Descendez-moi un peu, s’il vous plaît"
        },

        turnLeft: {
            label: "TOURNEZ-MOI<br>À GAUCHE",
            speech: "Tournez-moi à gauche, s’il vous plaît"
        },

        turnRight: {
            label: "TOURNEZ-MOI<br>À DROITE",
            speech: "Tournez-moi à droite, s’il vous plaît"
        },

        sitUp: {
            label: "REDRESSEZ-MOI",
            speech: "Redressez-moi, s’il vous plaît"
        },

        flatter: {
            label: "ALLONGEZ-MOI",
            speech: "Allongez-moi davantage, s’il vous plaît"
        },

        headUp: {
            label: "MONTEZ<br>LA TÊTE DU LIT",
            speech: "Montez la tête du lit, s’il vous plaît"
        },

        headDown: {
            label: "BAISSEZ<br>LA TÊTE DU LIT",
            speech: "Baissez la tête du lit, s’il vous plaît"
        },

        legsUp: {
            label: "MONTEZ<br>MES JAMBES",
            speech: "Montez mes jambes, s’il vous plaît"
        },

        legsDown: {
            label: "BAISSEZ<br>MES JAMBES",
            speech: "Baissez mes jambes, s’il vous plaît"
        },

        pillow: {
            label: "OREILLER",
            speech: "J’ai besoin d’un oreiller"
        },

        removePillow: {
            label: "ENLEVEZ<br>L'OREILLER",
            speech: "Enlevez cet oreiller, s’il vous plaît"
        },

        hot: {
            label: "J'AI CHAUD",
            speech: "J’ai chaud"
        },

        cold: {
            label: "J'AI FROID",
            speech: "J’ai froid"
        },

        blanket: {
            label: "COUVERTURE",
            speech: "Mettez-moi une couverture, s’il vous plaît"
        },

        removeBlanket: {
            label: "ENLEVEZ<br>LA COUVERTURE",
            speech: "Enlevez la couverture, s’il vous plaît"
        },

        positionHurts: {
            label: "CETTE POSITION<br>ME FAIT MAL",
            speech: "Cette position me fait mal"
        },

        comfortable: {
            label: "JE SUIS BIEN<br>COMME ÇA",
            speech: "Je suis bien comme ça"
        }
    },


    en: {

        title: "Positioning",

        bed: {
            label: "PUT ME<br>BACK IN BED",
            speech: "Please put me back in bed"
        },

        chair: {
            label: "SIT ME<br>IN THE CHAIR",
            speech: "Please sit me in the chair"
        },

        moveUp: {
            label: "MOVE ME<br>UP IN BED",
            speech: "Please move me up in the bed"
        },

        moveDown: {
            label: "MOVE ME<br>DOWN A LITTLE",
            speech: "Please move me down a little"
        },

        turnLeft: {
            label: "TURN ME<br>TO THE LEFT",
            speech: "Please turn me to the left"
        },

        turnRight: {
            label: "TURN ME<br>TO THE RIGHT",
            speech: "Please turn me to the right"
        },

        sitUp: {
            label: "SIT ME UP",
            speech: "Please sit me more upright"
        },

        flatter: {
            label: "LAY ME<br>FLATTER",
            speech: "Please lay me flatter"
        },

        headUp: {
            label: "RAISE THE<br>HEAD OF THE BED",
            speech: "Please raise the head of the bed"
        },

        headDown: {
            label: "LOWER THE<br>HEAD OF THE BED",
            speech: "Please lower the head of the bed"
        },

        legsUp: {
            label: "RAISE<br>MY LEGS",
            speech: "Please raise my legs"
        },

        legsDown: {
            label: "LOWER<br>MY LEGS",
            speech: "Please lower my legs"
        },

        pillow: {
            label: "PILLOW",
            speech: "I need a pillow"
        },

        removePillow: {
            label: "REMOVE<br>THE PILLOW",
            speech: "Please remove this pillow"
        },

        hot: {
            label: "I'M HOT",
            speech: "I'm hot"
        },

        cold: {
            label: "I'M COLD",
            speech: "I'm cold"
        },

        blanket: {
            label: "BLANKET",
            speech: "Please give me a blanket"
        },

        removeBlanket: {
            label: "REMOVE<br>THE BLANKET",
            speech: "Please remove the blanket"
        },

        positionHurts: {
            label: "THIS POSITION<br>HURTS",
            speech: "This position hurts"
        },

        comfortable: {
            label: "I'M COMFORTABLE<br>LIKE THIS",
            speech: "I'm comfortable like this"
        }
    },


    de: {

        title: "Positionierung",

        bed: {
            label: "INS BETT<br>LEGEN",
            speech: "Bitte legen Sie mich wieder ins Bett"
        },

        chair: {
            label: "IN DEN SESSEL<br>SETZEN",
            speech: "Bitte setzen Sie mich in den Sessel"
        },

        moveUp: {
            label: "IM BETT<br>HÖHER",
            speech: "Bitte schieben Sie mich im Bett höher"
        },

        moveDown: {
            label: "ETWAS<br>TIEFER",
            speech: "Bitte schieben Sie mich etwas tiefer"
        },

        turnLeft: {
            label: "NACH LINKS<br>DREHEN",
            speech: "Bitte drehen Sie mich nach links"
        },

        turnRight: {
            label: "NACH RECHTS<br>DREHEN",
            speech: "Bitte drehen Sie mich nach rechts"
        },

        sitUp: {
            label: "AUFRICHTEN",
            speech: "Bitte richten Sie mich auf"
        },

        flatter: {
            label: "FLACHER<br>LEGEN",
            speech: "Bitte legen Sie mich flacher"
        },

        headUp: {
            label: "KOPFTEIL<br>HÖHER",
            speech: "Bitte stellen Sie das Kopfteil höher"
        },

        headDown: {
            label: "KOPFTEIL<br>TIEFER",
            speech: "Bitte stellen Sie das Kopfteil tiefer"
        },

        legsUp: {
            label: "BEINE<br>HÖHER",
            speech: "Bitte lagern Sie meine Beine höher"
        },

        legsDown: {
            label: "BEINE<br>TIEFER",
            speech: "Bitte lagern Sie meine Beine tiefer"
        },

        pillow: {
            label: "KISSEN",
            speech: "Ich brauche ein Kissen"
        },

        removePillow: {
            label: "KISSEN<br>ENTFERNEN",
            speech: "Bitte nehmen Sie dieses Kissen weg"
        },

        hot: {
            label: "MIR IST WARM",
            speech: "Mir ist warm"
        },

        cold: {
            label: "MIR IST KALT",
            speech: "Mir ist kalt"
        },

        blanket: {
            label: "DECKE",
            speech: "Bitte geben Sie mir eine Decke"
        },

        removeBlanket: {
            label: "DECKE<br>ENTFERNEN",
            speech: "Bitte nehmen Sie die Decke weg"
        },

        positionHurts: {
            label: "DIESE POSITION<br>TUT WEH",
            speech: "Diese Position tut mir weh"
        },

        comfortable: {
            label: "SO IST<br>ES GUT",
            speech: "So ist es gut"
        }
    },


    it: {

        title: "Posizionamento",

        bed: {
            label: "RIMETTETEMI<br>A LETTO",
            speech: "Rimettetemi a letto, per favore"
        },

        chair: {
            label: "METTETEMI<br>IN POLTRONA",
            speech: "Mettetemi in poltrona, per favore"
        },

        moveUp: {
            label: "SPOSTATEMI<br>PIÙ IN ALTO",
            speech: "Spostatemi più in alto nel letto, per favore"
        },

        moveDown: {
            label: "SPOSTATEMI<br>PIÙ IN BASSO",
            speech: "Spostatemi un po’ più in basso, per favore"
        },

        turnLeft: {
            label: "GIRATEMI<br>A SINISTRA",
            speech: "Giratemi a sinistra, per favore"
        },

        turnRight: {
            label: "GIRATEMI<br>A DESTRA",
            speech: "Giratemi a destra, per favore"
        },

        sitUp: {
            label: "RADDRIZZATEMI",
            speech: "Raddrizzatemi, per favore"
        },

        flatter: {
            label: "SDRAIATEMI<br>DI PIÙ",
            speech: "Sdraiami di più, per favore"
        },

        headUp: {
            label: "ALZATE<br>LA TESTIERA",
            speech: "Alzate la testiera del letto, per favore"
        },

        headDown: {
            label: "ABBASSATE<br>LA TESTIERA",
            speech: "Abbassate la testiera del letto, per favore"
        },

        legsUp: {
            label: "ALZATE<br>LE MIE GAMBE",
            speech: "Alzate le mie gambe, per favore"
        },

        legsDown: {
            label: "ABBASSATE<br>LE MIE GAMBE",
            speech: "Abbassate le mie gambe, per favore"
        },

        pillow: {
            label: "CUSCINO",
            speech: "Ho bisogno di un cuscino"
        },

        removePillow: {
            label: "TOGLIETE<br>IL CUSCINO",
            speech: "Togliete questo cuscino, per favore"
        },

        hot: {
            label: "HO CALDO",
            speech: "Ho caldo"
        },

        cold: {
            label: "HO FREDDO",
            speech: "Ho freddo"
        },

        blanket: {
            label: "COPERTA",
            speech: "Mettetemi una coperta, per favore"
        },

        removeBlanket: {
            label: "TOGLIETE<br>LA COPERTA",
            speech: "Togliete la coperta, per favore"
        },

        positionHurts: {
            label: "QUESTA POSIZIONE<br>MI FA MALE",
            speech: "Questa posizione mi fa male"
        },

        comfortable: {
            label: "STO BENE<br>COSÌ",
            speech: "Sto bene così"
        }
    },


    es: {

        title: "Posicionamiento",

        bed: {
            label: "ACUÉSTEME"
        },

        chair: {
            label: "SIÉNTEME<br>EN EL SILLÓN"
        },

        moveUp: {
            label: "SÚBAME<br>EN LA CAMA"
        },

        moveDown: {
            label: "BÁJEME<br>UN POCO"
        },

        turnLeft: {
            label: "GÍREME<br>A LA IZQUIERDA"
        },

        turnRight: {
            label: "GÍREME<br>A LA DERECHA"
        },

        sitUp: {
            label: "INCORPÓREME"
        },

        flatter: {
            label: "ACUÉSTEME<br>MÁS"
        },

        headUp: {
            label: "SUBA LA CABECERA<br>DE LA CAMA"
        },

        headDown: {
            label: "BAJE LA CABECERA<br>DE LA CAMA"
        },

        legsUp: {
            label: "SUBA<br>MIS PIERNAS"
        },

        legsDown: {
            label: "BAJE<br>MIS PIERNAS"
        },

        pillow: {
            label: "ALMOHADA"
        },

        removePillow: {
            label: "QUITE<br>LA ALMOHADA"
        },

        hot: {
            label: "TENGO CALOR"
        },

        cold: {
            label: "TENGO FRÍO"
        },

        blanket: {
            label: "MANTA"
        },

        removeBlanket: {
            label: "QUITE<br>LA MANTA"
        },

        positionHurts: {
            label: "ESTA POSICIÓN<br>ME DUELE"
        },

        comfortable: {
            label: "ESTOY BIEN<br>ASÍ"
        }
    },


    pt: {

        title: "Posicionamento",

        bed: {
            label: "DEITE-ME"
        },

        chair: {
            label: "SENTE-ME<br>NA CADEIRA"
        },

        moveUp: {
            label: "SUBA-ME<br>NA CAMA"
        },

        moveDown: {
            label: "DESÇA-ME<br>UM POUCO"
        },

        turnLeft: {
            label: "VIRE-ME<br>PARA A ESQUERDA"
        },

        turnRight: {
            label: "VIRE-ME<br>PARA A DIREITA"
        },

        sitUp: {
            label: "SENTE-ME<br>MAIS DIREITO"
        },

        flatter: {
            label: "DEITE-ME<br>MAIS"
        },

        headUp: {
            label: "SUBA A CABECEIRA<br>DA CAMA"
        },

        headDown: {
            label: "BAIXE A CABECEIRA<br>DA CAMA"
        },

        legsUp: {
            label: "LEVANTE<br>AS MINHAS PERNAS"
        },

        legsDown: {
            label: "BAIXE<br>AS MINHAS PERNAS"
        },

        pillow: {
            label: "ALMOFADA"
        },

        removePillow: {
            label: "TIRE<br>A ALMOFADA"
        },

        hot: {
            label: "TENHO CALOR"
        },

        cold: {
            label: "TENHO FRIO"
        },

        blanket: {
            label: "COBERTOR"
        },

        removeBlanket: {
            label: "TIRE<br>O COBERTOR"
        },

        positionHurts: {
            label: "ESTA POSIÇÃO<br>DÓI"
        },

        comfortable: {
            label: "ESTOU BEM<br>ASSIM"
        }
    }

};

/* =========================================
   SOINS — TRADUCTIONS
   ========================================= */

const CARE_TRANSLATIONS = {

    fr: {

        title: "Inconfort",

        help: {
            label: "BESOIN D'AIDE",
            speech: "J’ai besoin d’aide"
        },

        unwell: {
            label: "JE NE ME SENS<br>PAS BIEN",
            speech: "Je ne me sens pas bien"
        },

        better: {
            label: "ÇA VA MIEUX",
            speech: "Ça va mieux"
        },

        privacy: {
            label: "JE VEUX<br>DE L'INTIMITÉ",
            speech: "Je voudrais un peu d’intimité"
        },

        constipation: {
            label: "CONSTIPÉ",
            speech: "Je suis constipé"
        },

        gas: {
            label: "GAZ",
            speech: "J’ai des gaz"
        },

        diarrhea: {
            label: "DIARRHÉE",
            speech: "J’ai la diarrhée"
        },

        nausea: {
            label: "NAUSÉES",
            speech: "J’ai des nausées"
        },

        vomit: {
            label: "ENVIE DE<br>VOMIR",
            speech: "J’ai envie de vomir"
        },

        dizziness: {
            label: "VERTIGES",
            speech: "J’ai des vertiges"
        },

        weakness: {
            label: "FAIBLE",
            speech: "Je me sens faible"
        },

        chills: {
            label: "FRISSONS",
            speech: "J’ai des frissons"
        },

        medicationNotEnough: {
            label: "MÉDICAMENTS<br>PAS EFFICACES",
            speech: "Mes médicaments ne sont pas efficaces"
        },

        hot: {
            label: "J'AI CHAUD",
            speech: "J’ai chaud"
        },

        cold: {
            label: "J'AI FROID",
            speech: "J’ai froid"
        }

    },

    en: {

        title: "Discomfort",

        help: {
            label: "I NEED HELP",
            speech: "I need help"
        },

        unwell: {
            label: "I DON'T FEEL<br>WELL",
            speech: "I don't feel well"
        },

        better: {
            label: "I FEEL BETTER",
            speech: "I feel better"
        },

        privacy: {
            label: "I WANT<br>PRIVACY",
            speech: "I would like some privacy"
        },

        constipation: {
            label: "CONSTIPATED",
            speech: "I'm constipated"
        },

        gas: {
            label: "GAS",
            speech: "I have gas"
        },

        diarrhea: {
            label: "DIARRHEA",
            speech: "I have diarrhea"
        },

        nausea: {
            label: "NAUSEA",
            speech: "I feel nauseous"
        },

        vomit: {
            label: "I FEEL LIKE<br>VOMITING",
            speech: "I feel like vomiting"
        },

        dizziness: {
            label: "DIZZY",
            speech: "I feel dizzy"
        },

        weakness: {
            label: "WEAK",
            speech: "I feel weak"
        },

        chills: {
            label: "CHILLS",
            speech: "I have chills"
        },

        medicationNotEnough: {
            label: "MEDICATION<br>NOT WORKING",
            speech: "My medication is not working"
        },

        hot: {
            label: "I'M HOT",
            speech: "I'm hot"
        },

        cold: {
            label: "I'M COLD",
            speech: "I'm cold"
        }

    },

    de: {

        title: "Beschwerden",

        help: {
            label: "ICH BRAUCHE HILFE",
            speech: "Ich brauche Hilfe"
        },

        unwell: {
            label: "MIR GEHT ES<br>NICHT GUT",
            speech: "Mir geht es nicht gut"
        },

        better: {
            label: "MIR GEHT ES<br>BESSER",
            speech: "Mir geht es besser"
        },

        privacy: {
            label: "ICH MÖCHTE<br>PRIVATSPHÄRE",
            speech: "Ich möchte etwas Privatsphäre"
        },

        constipation: {
            label: "VERSTOPFUNG",
            speech: "Ich habe Verstopfung"
        },

        gas: {
            label: "BLÄHUNGEN",
            speech: "Ich habe Blähungen"
        },

        diarrhea: {
            label: "DURCHFALL",
            speech: "Ich habe Durchfall"
        },

        nausea: {
            label: "ÜBELKEIT",
            speech: "Mir ist übel"
        },

        vomit: {
            label: "BRECHREIZ",
            speech: "Ich habe Brechreiz"
        },

        dizziness: {
            label: "SCHWINDEL",
            speech: "Mir ist schwindelig"
        },

        weakness: {
            label: "SCHWACH",
            speech: "Ich fühle mich schwach"
        },

        chills: {
            label: "SCHÜTTELFROST",
            speech: "Ich habe Schüttelfrost"
        },

        medicationNotEnough: {
            label: "MEDIKAMENTE<br>WIRKEN NICHT",
            speech: "Meine Medikamente wirken nicht"
        },

        hot: {
            label: "MIR IST WARM",
            speech: "Mir ist warm"
        },

        cold: {
            label: "MIR IST KALT",
            speech: "Mir ist kalt"
        }

    },

    it: {

        title: "Disagio",

        help: {
            label: "HO BISOGNO<br>DI AIUTO",
            speech: "Ho bisogno di aiuto"
        },

        unwell: {
            label: "NON MI SENTO<br>BENE",
            speech: "Non mi sento bene"
        },

        better: {
            label: "VA MEGLIO",
            speech: "Va meglio"
        },

        privacy: {
            label: "VOGLIO<br>PRIVACY",
            speech: "Vorrei un po’ di privacy"
        },

        constipation: {
            label: "STITICHEZZA",
            speech: "Ho stitichezza"
        },

        gas: {
            label: "GAS",
            speech: "Ho gas intestinali"
        },

        diarrhea: {
            label: "DIARREA",
            speech: "Ho diarrea"
        },

        nausea: {
            label: "NAUSEA",
            speech: "Ho nausea"
        },

        vomit: {
            label: "VOGLIA DI<br>VOMITARE",
            speech: "Ho voglia di vomitare"
        },

        dizziness: {
            label: "VERTIGINI",
            speech: "Ho le vertigini"
        },

        weakness: {
            label: "DEBOLE",
            speech: "Mi sento debole"
        },

        chills: {
            label: "BRIVIDI",
            speech: "Ho i brividi"
        },

        medicationNotEnough: {
            label: "FARMACI<br>NON EFFICACI",
            speech: "I miei farmaci non sono efficaci"
        },

        hot: {
            label: "HO CALDO",
            speech: "Ho caldo"
        },

        cold: {
            label: "HO FREDDO",
            speech: "Ho freddo"
        }

    },

    es: {

        title: "Malestar",

        help: {
            label: "NECESITO AYUDA"
        },

        unwell: {
            label: "NO ME SIENTO<br>BIEN"
        },

        better: {
            label: "ESTOY MEJOR"
        },

        privacy: {
            label: "QUIERO<br>PRIVACIDAD"
        },

        constipation: {
            label: "ESTREÑIMIENTO"
        },

        gas: {
            label: "GASES"
        },

        diarrhea: {
            label: "DIARREA"
        },

        nausea: {
            label: "NÁUSEAS"
        },

        vomit: {
            label: "GANAS DE<br>VOMITAR"
        },

        dizziness: {
            label: "MAREOS"
        },

        weakness: {
            label: "DÉBIL"
        },

        chills: {
            label: "ESCALOFRÍOS"
        },

        medicationNotEnough: {
            label: "MEDICAMENTOS<br>NO EFICACES"
        },

        hot: {
            label: "TENGO CALOR"
        },

        cold: {
            label: "TENGO FRÍO"
        }

    },

    pt: {

        title: "Desconforto",

        help: {
            label: "PRECISO DE AJUDA"
        },

        unwell: {
            label: "NÃO ME SINTO<br>BEM"
        },

        better: {
            label: "ESTOU MELHOR"
        },

        privacy: {
            label: "QUERO<br>PRIVACIDADE"
        },

        constipation: {
            label: "OBSTIPAÇÃO"
        },

        gas: {
            label: "GASES"
        },

        diarrhea: {
            label: "DIARREIA"
        },

        nausea: {
            label: "NÁUSEAS"
        },

        vomit: {
            label: "VONTADE DE<br>VOMITAR"
        },

        dizziness: {
            label: "TONTURAS"
        },

        weakness: {
            label: "FRACO/A"
        },

        chills: {
            label: "ARREPIOS"
        },

        medicationNotEnough: {
            label: "MEDICAMENTOS<br>NÃO EFICAZES"
        },

        hot: {
            label: "TENHO CALOR"
        },

        cold: {
            label: "TENHO FRIO"
        }

    }

};

const CARE_TEAM_TRANSLATIONS = {

    fr: {

        title: "Équipe soignante",

        nurse: {
            label: "INFIRMIÈRE",
            speech: "Je voudrais voir une infirmière"
        },

        doctor: {
            label: "MÉDECIN",
            speech: "Je voudrais voir un médecin"
        },

        physio: {
            label: "PHYSIO",
            speech: "Je voudrais voir le physiothérapeute"
        },

        ergo: {
            label: "ERGO",
            speech: "Je voudrais voir l’ergothérapeute"
        },

        logo: {
            label: "LOGO",
            speech: "Je voudrais voir le logopédiste"
        },

        assistant: {
            label: "AIDE-SOIGNANTE",
            speech: "Je voudrais voir une aide-soignante"
        },

        dietitian: {
            label: "DIÉTÉTICIENNE",
            speech: "Je voudrais voir la diététicienne"
        },

        neuropsychologist: {
            label: "NEUROPSY",
            speech: "Je voudrais voir le neuropsychologue"
        },

        psychologist: {
            label: "PSY",
            speech: "Je voudrais voir le psychologue"
        },

        socialWorker: {
            label: "ASSISTANTE<br>SOCIALE",
            speech: "Je voudrais voir l’assistante sociale"
        },

        hospitality: {
            label: "AGENT<br>HÔTELIER",
            speech: "Je voudrais voir l’agent hôtelier"
        }

    },


    en: {

        title: "Care team",

        nurse: {
            label: "NURSE",
            speech: "I would like to see a nurse"
        },

        doctor: {
            label: "DOCTOR",
            speech: "I would like to see a doctor"
        },

        physio: {
            label: "PHYSIOTHERAPIST",
            speech: "I would like to see the physiotherapist"
        },

        ergo: {
            label: "OCCUPATIONAL<br>THERAPIST",
            speech: "I would like to see the occupational therapist"
        },

        logo: {
            label: "SPEECH<br>THERAPIST",
            speech: "I would like to see the speech therapist"
        },

        assistant: {
            label: "NURSING<br>ASSISTANT",
            speech: "I would like to see a nursing assistant"
        },

        dietitian: {
            label: "DIETITIAN",
            speech: "I would like to see the dietitian"
        },

        neuropsychologist: {
            label: "NEUROPSYCHOLOGIST",
            speech: "I would like to see the neuropsychologist"
        },

        psychologist: {
            label: "PSYCHOLOGIST",
            speech: "I would like to see the psychologist"
        },

        socialWorker: {
            label: "SOCIAL<br>WORKER",
            speech: "I would like to see the social worker"
        },

        hospitality: {
            label: "HOSPITALITY<br>ASSISTANT",
            speech: "I would like to see the hospitality assistant"
        }

    },


    de: {

        title: "Behandlungsteam",

        nurse: {
            label: "PFLEGEKRAFT",
            speech: "Ich möchte eine Pflegekraft sehen"
        },

        doctor: {
            label: "ARZT",
            speech: "Ich möchte einen Arzt sehen"
        },

        physio: {
            label: "PHYSIOTHERAPIE",
            speech: "Ich möchte den Physiotherapeuten sehen"
        },

        ergo: {
            label: "ERGOTHERAPIE",
            speech: "Ich möchte den Ergotherapeuten sehen"
        },

        logo: {
            label: "LOGOPÄDIE",
            speech: "Ich möchte den Logopäden sehen"
        },

        assistant: {
            label: "PFLEGEASSISTENZ",
            speech: "Ich möchte eine Pflegeassistenz sehen"
        },

        dietitian: {
            label: "ERNÄHRUNGS-<br>BERATUNG",
            speech: "Ich möchte die Ernährungsberaterin sehen"
        },

        neuropsychologist: {
            label: "NEUROPSYCHOLOGIE",
            speech: "Ich möchte den Neuropsychologen sehen"
        },

        psychologist: {
            label: "PSYCHOLOGIE",
            speech: "Ich möchte den Psychologen sehen"
        },

        socialWorker: {
            label: "SOZIALDIENST",
            speech: "Ich möchte die Sozialarbeiterin sehen"
        },

        hospitality: {
            label: "HOTELLERIE",
            speech: "Ich möchte jemanden vom Hotellerie-Service sehen"
        }

    },


    it: {

        title: "Équipe curante",

        nurse: {
            label: "INFERMIERE",
            speech: "Vorrei vedere un infermiere"
        },

        doctor: {
            label: "MEDICO",
            speech: "Vorrei vedere un medico"
        },

        physio: {
            label: "FISIOTERAPISTA",
            speech: "Vorrei vedere il fisioterapista"
        },

        ergo: {
            label: "ERGOTERAPISTA",
            speech: "Vorrei vedere l’ergoterapista"
        },

        logo: {
            label: "LOGOPEDISTA",
            speech: "Vorrei vedere il logopedista"
        },

        assistant: {
            label: "OPERATORE<br>SOCIO-SANITARIO",
            speech: "Vorrei vedere un operatore socio-sanitario"
        },

        dietitian: {
            label: "DIETISTA",
            speech: "Vorrei vedere la dietista"
        },

        neuropsychologist: {
            label: "NEUROPSICOLOGO",
            speech: "Vorrei vedere il neuropsicologo"
        },

        psychologist: {
            label: "PSICOLOGO",
            speech: "Vorrei vedere lo psicologo"
        },

        socialWorker: {
            label: "ASSISTENTE<br>SOCIALE",
            speech: "Vorrei vedere l’assistente sociale"
        },

        hospitality: {
            label: "SERVIZIO<br>ALBERGHIERO",
            speech: "Vorrei vedere un addetto al servizio alberghiero"
        }

    },


    es: {

        title: "Equipo asistencial",

        nurse: {
            label: "ENFERMERO/A"
        },

        doctor: {
            label: "MÉDICO"
        },

        physio: {
            label: "FISIOTERAPEUTA"
        },

        ergo: {
            label: "TERAPEUTA<br>OCUPACIONAL"
        },

        logo: {
            label: "LOGOPEDA"
        },

        assistant: {
            label: "AUXILIAR DE<br>ENFERMERÍA"
        },

        dietitian: {
            label: "DIETISTA"
        },

        neuropsychologist: {
            label: "NEUROPSICÓLOGO/A"
        },

        psychologist: {
            label: "PSICÓLOGO/A"
        },

        socialWorker: {
            label: "TRABAJADOR/A<br>SOCIAL"
        },

        hospitality: {
            label: "PERSONAL DE<br>HOSTELERÍA"
        }

    },


    pt: {

        title: "Equipa de cuidados",

        nurse: {
            label: "ENFERMEIRO/A"
        },

        doctor: {
            label: "MÉDICO"
        },

        physio: {
            label: "FISIOTERAPEUTA"
        },

        ergo: {
            label: "TERAPEUTA<br>OCUPACIONAL"
        },

        logo: {
            label: "TERAPEUTA<br>DA FALA"
        },

        assistant: {
            label: "AUXILIAR<br>DE SAÚDE"
        },

        dietitian: {
            label: "DIETISTA"
        },

        neuropsychologist: {
            label: "NEUROPSICÓLOGO/A"
        },

        psychologist: {
            label: "PSICÓLOGO/A"
        },

        socialWorker: {
            label: "ASSISTENTE<br>SOCIAL"
        },

        hospitality: {
            label: "SERVIÇO<br>HOTELEIRO"
        }

    }

};

const HYGIENE_TRANSLATIONS = {

    fr: {

        title: "Vie quotidienne",

        change: {
            label: "BESOIN<br>D'ÊTRE CHANGÉ",
            speech: "Besoin d’être changé"
        },

        urinate: {
            label: "BESOIN<br>D'URINER",
            speech: "Besoin d’uriner"
        },

        stool: {
            label: "BESOIN D'ALLER<br>À LA SELLE",
            speech: "Besoin d’aller à la selle"
        },

        hungry: {
            label: "J'AI FAIM",
            speech: "J’ai faim"
        },

        thirsty: {
            label: "J'AI SOIF",
            speech: "J’ai soif"
        },

        shower: {
            label: "PRENDRE<br>UNE DOUCHE",
            speech: "Je voudrais prendre une douche"
        },

        teeth: {
            label: "BROSSER<br>MES DENTS",
            speech: "Je voudrais me brosser les dents"
        },

        face: {
            label: "ME LAVER<br>LE VISAGE",
            speech: "Je voudrais me laver le visage"
        },

        shave: {
            label: "ME RASER",
            speech: "Je voudrais me raser"
        },

        comb: {
            label: "ME COIFFER",
            speech: "Je voudrais me coiffer"
        },

        glasses: {
            label: "LUNETTES",
            speech: "Je voudrais mes lunettes"
        },

        hearingAid: {
            label: "APPAREIL<br>AUDITIF",
            speech: "Je voudrais mon appareil auditif"
        },

        dentures: {
            label: "DENTIER",
            speech: "Je voudrais mon dentier"
        },

        tshirt: {
            label: "T-SHIRT",
            speech: "Je voudrais mon t-shirt"
        },

        pants: {
            label: "PANTALON",
            speech: "Je voudrais mon pantalon"
        },

        sweater: {
            label: "PULL",
            speech: "Je voudrais mon pull"
        },

        shoes: {
            label: "CHAUSSURES",
            speech: "Je voudrais mes chaussures"
        }

    },


    en: {

        title: "Daily living",

        change: {
            label: "NEED TO<br>BE CHANGED",
            speech: "I need to be changed"
        },

        urinate: {
            label: "NEED TO<br>URINATE",
            speech: "I need to urinate"
        },

        stool: {
            label: "NEED A<br>BOWEL MOVEMENT",
            speech: "I need to have a bowel movement"
        },

        hungry: {
            label: "I'M HUNGRY",
            speech: "I'm hungry"
        },

        thirsty: {
            label: "I'M THIRSTY",
            speech: "I'm thirsty"
        },

        shower: {
            label: "TAKE A<br>SHOWER",
            speech: "I would like to take a shower"
        },

        teeth: {
            label: "BRUSH<br>MY TEETH",
            speech: "I would like to brush my teeth"
        },

        face: {
            label: "WASH<br>MY FACE",
            speech: "I would like to wash my face"
        },

        shave: {
            label: "SHAVE",
            speech: "I would like to shave"
        },

        comb: {
            label: "COMB<br>MY HAIR",
            speech: "I would like to comb my hair"
        },

        glasses: {
            label: "GLASSES",
            speech: "I would like my glasses"
        },

        hearingAid: {
            label: "HEARING<br>AID",
            speech: "I would like my hearing aid"
        },

        dentures: {
            label: "DENTURES",
            speech: "I would like my dentures"
        },

        tshirt: {
            label: "T-SHIRT",
            speech: "I would like my T-shirt"
        },

        pants: {
            label: "PANTS",
            speech: "I would like my pants"
        },

        sweater: {
            label: "SWEATER",
            speech: "I would like my sweater"
        },

        shoes: {
            label: "SHOES",
            speech: "I would like my shoes"
        }

    },


    de: {

        title: "Alltag",

        change: {
            label: "MUSS<br>GEWECHSELT WERDEN",
            speech: "Ich muss gewechselt werden"
        },

        urinate: {
            label: "MUSS<br>WASSER LASSEN",
            speech: "Ich muss Wasser lassen"
        },

        stool: {
            label: "MUSS ZUR<br>TOILETTE",
            speech: "Ich muss Stuhlgang haben"
        },

        hungry: {
            label: "ICH HABE HUNGER",
            speech: "Ich habe Hunger"
        },

        thirsty: {
            label: "ICH HABE DURST",
            speech: "Ich habe Durst"
        },

        shower: {
            label: "DUSCHEN",
            speech: "Ich möchte duschen"
        },

        teeth: {
            label: "ZÄHNE<br>PUTZEN",
            speech: "Ich möchte meine Zähne putzen"
        },

        face: {
            label: "GESICHT<br>WASCHEN",
            speech: "Ich möchte mein Gesicht waschen"
        },

        shave: {
            label: "RASIEREN",
            speech: "Ich möchte mich rasieren"
        },

        comb: {
            label: "HAARE<br>KÄMMEN",
            speech: "Ich möchte meine Haare kämmen"
        },

        glasses: {
            label: "BRILLE",
            speech: "Ich möchte meine Brille"
        },

        hearingAid: {
            label: "HÖRGERÄT",
            speech: "Ich möchte mein Hörgerät"
        },

        dentures: {
            label: "ZAHNPROTHESE",
            speech: "Ich möchte meine Zahnprothese"
        },

        tshirt: {
            label: "T-SHIRT",
            speech: "Ich möchte mein T-Shirt"
        },

        pants: {
            label: "HOSE",
            speech: "Ich möchte meine Hose"
        },

        sweater: {
            label: "PULLOVER",
            speech: "Ich möchte meinen Pullover"
        },

        shoes: {
            label: "SCHUHE",
            speech: "Ich möchte meine Schuhe"
        }

    },


    it: {

        title: "Vita quotidiana",

        change: {
            label: "HO BISOGNO<br>DI ESSERE CAMBIATO",
            speech: "Ho bisogno di essere cambiato"
        },

        urinate: {
            label: "HO BISOGNO<br>DI URINARE",
            speech: "Ho bisogno di urinare"
        },

        stool: {
            label: "HO BISOGNO<br>DI ANDARE DI CORPO",
            speech: "Ho bisogno di andare di corpo"
        },

        hungry: {
            label: "HO FAME",
            speech: "Ho fame"
        },

        thirsty: {
            label: "HO SETE",
            speech: "Ho sete"
        },

        shower: {
            label: "FARE UNA<br>DOCCIA",
            speech: "Vorrei fare una doccia"
        },

        teeth: {
            label: "LAVARMI<br>I DENTI",
            speech: "Vorrei lavarmi i denti"
        },

        face: {
            label: "LAVARMI<br>IL VISO",
            speech: "Vorrei lavarmi il viso"
        },

        shave: {
            label: "FARMI<br>LA BARBA",
            speech: "Vorrei farmi la barba"
        },

        comb: {
            label: "PETTINARMI",
            speech: "Vorrei pettinarmi"
        },

        glasses: {
            label: "OCCHIALI",
            speech: "Vorrei i miei occhiali"
        },

        hearingAid: {
            label: "APPARECCHIO<br>ACUSTICO",
            speech: "Vorrei il mio apparecchio acustico"
        },

        dentures: {
            label: "DENTIERA",
            speech: "Vorrei la mia dentiera"
        },

        tshirt: {
            label: "T-SHIRT",
            speech: "Vorrei la mia maglietta"
        },

        pants: {
            label: "PANTALONI",
            speech: "Vorrei i miei pantaloni"
        },

        sweater: {
            label: "MAGLIONE",
            speech: "Vorrei il mio maglione"
        },

        shoes: {
            label: "SCARPE",
            speech: "Vorrei le mie scarpe"
        }

    },


    es: {

        title: "Vida diaria",

        change: {
            label: "NECESITO<br>QUE ME CAMBIEN"
        },

        urinate: {
            label: "NECESITO<br>ORINAR"
        },

        stool: {
            label: "NECESITO<br>DEFECAR"
        },

        hungry: {
            label: "TENGO HAMBRE"
        },

        thirsty: {
            label: "TENGO SED"
        },

        shower: {
            label: "DARME UNA<br>DUCHA"
        },

        teeth: {
            label: "CEPILLARME<br>LOS DIENTES"
        },

        face: {
            label: "LAVARME<br>LA CARA"
        },

        shave: {
            label: "AFEITARME"
        },

        comb: {
            label: "PEINARME"
        },

        glasses: {
            label: "GAFAS"
        },

        hearingAid: {
            label: "AUDÍFONO"
        },

        dentures: {
            label: "DENTADURA"
        },

        tshirt: {
            label: "CAMISETA"
        },

        pants: {
            label: "PANTALÓN"
        },

        sweater: {
            label: "JERSEY"
        },

        shoes: {
            label: "ZAPATOS"
        }

    },


    pt: {

        title: "Vida quotidiana",

        change: {
            label: "PRECISO<br>QUE ME MUDEM"
        },

        urinate: {
            label: "PRECISO<br>DE URINAR"
        },

        stool: {
            label: "PRECISO<br>DE EVACUAR"
        },

        hungry: {
            label: "TENHO FOME"
        },

        thirsty: {
            label: "TENHO SEDE"
        },

        shower: {
            label: "TOMAR<br>BANHO"
        },

        teeth: {
            label: "LAVAR<br>OS DENTES"
        },

        face: {
            label: "LAVAR<br>O ROSTO"
        },

        shave: {
            label: "FAZER<br>A BARBA"
        },

        comb: {
            label: "PENTEAR-ME"
        },

        glasses: {
            label: "ÓCULOS"
        },

        hearingAid: {
            label: "APARELHO<br>AUDITIVO"
        },

        dentures: {
            label: "DENTADURA"
        },

        tshirt: {
            label: "T-SHIRT"
        },

        pants: {
            label: "CALÇAS"
        },

        sweater: {
            label: "CAMISOLA"
        },

        shoes: {
            label: "SAPATOS"
        }

    }

};

/* =========================================
   ÉMOTIONS — TRADUCTIONS
   ========================================= */

const EMOTION_TRANSLATIONS = {

    fr: {

        title: "Émotions",

        afraid: {
            label: "J'AI PEUR",
            speech: "J’ai peur"
        },

        sad: {
            label: "JE SUIS<br>TRISTE",
            speech: "Je suis triste"
        },

        angry: {
            label: "JE SUIS<br>EN COLÈRE",
            speech: "Je suis en colère"
        },

        fedUp: {
            label: "J'EN AI<br>MARRE",
            speech: "J’en ai marre"
        },

        discouraged: {
            label: "JE SUIS<br>DÉCOURAGÉ",
            speech: "Je suis découragé"
        },

        lonely: {
            label: "JE ME SENS<br>SEUL",
            speech: "Je me sens seul"
        },

        tired: {
            label: "JE SUIS<br>FATIGUÉ",
            speech: "Je suis fatigué"
        },

        bored: {
            label: "JE M'ENNUIE",
            speech: "Je m’ennuie"
        },

        happy: {
            label: "JE SUIS<br>CONTENT",
            speech: "Je suis content"
        },

        better: {
            label: "JE ME SENS<br>MIEUX",
            speech: "Je me sens mieux"
        },

        stay: {
            label: "RESTEZ<br>AVEC MOI",
            speech: "Restez un peu avec moi, s’il vous plaît"
        },

        alone: {
            label: "JE VEUX<br>ÊTRE SEUL",
            speech: "Je voudrais être seul un moment"
        },

        noTalk: {
            label: "PAS ENVIE<br>DE PARLER",
            speech: "Je n’ai pas envie de parler maintenant"
        }
    },


    en: {

        title: "Emotions",

        afraid: {
            label: "I'M AFRAID",
            speech: "I'm afraid"
        },

        sad: {
            label: "I'M<br>SAD",
            speech: "I'm sad"
        },

        angry: {
            label: "I'M<br>ANGRY",
            speech: "I'm angry"
        },

        fedUp: {
            label: "I'VE HAD<br>ENOUGH",
            speech: "I've had enough"
        },

        discouraged: {
            label: "I FEEL<br>DISCOURAGED",
            speech: "I feel discouraged"
        },

        lonely: {
            label: "I FEEL<br>LONELY",
            speech: "I feel lonely"
        },

        tired: {
            label: "I'M<br>TIRED",
            speech: "I'm tired"
        },

        bored: {
            label: "I'M BORED",
            speech: "I'm bored"
        },

        happy: {
            label: "I'M<br>HAPPY",
            speech: "I'm happy"
        },

        better: {
            label: "I FEEL<br>BETTER",
            speech: "I feel better"
        },

        stay: {
            label: "STAY<br>WITH ME",
            speech: "Please stay with me for a while"
        },

        alone: {
            label: "I WANT TO<br>BE ALONE",
            speech: "I would like to be alone for a while"
        },

        noTalk: {
            label: "I DON'T WANT<br>TO TALK",
            speech: "I don't want to talk right now"
        }
    },


    de: {

        title: "Gefühle",

        afraid: {
            label: "ICH HABE ANGST",
            speech: "Ich habe Angst"
        },

        sad: {
            label: "ICH BIN<br>TRAURIG",
            speech: "Ich bin traurig"
        },

        angry: {
            label: "ICH BIN<br>WÜTEND",
            speech: "Ich bin wütend"
        },

        fedUp: {
            label: "ICH HABE<br>GENUG",
            speech: "Ich habe genug"
        },

        discouraged: {
            label: "ICH BIN<br>ENTMUTIGT",
            speech: "Ich bin entmutigt"
        },

        lonely: {
            label: "ICH FÜHLE MICH<br>ALLEIN",
            speech: "Ich fühle mich allein"
        },

        tired: {
            label: "ICH BIN<br>MÜDE",
            speech: "Ich bin müde"
        },

        bored: {
            label: "MIR IST<br>LANGWEILIG",
            speech: "Mir ist langweilig"
        },

        happy: {
            label: "ICH BIN<br>FROH",
            speech: "Ich bin froh"
        },

        better: {
            label: "MIR GEHT ES<br>BESSER",
            speech: "Mir geht es besser"
        },

        stay: {
            label: "BLEIBEN SIE<br>BEI MIR",
            speech: "Bitte bleiben Sie noch etwas bei mir"
        },

        alone: {
            label: "ICH MÖCHTE<br>ALLEIN SEIN",
            speech: "Ich möchte eine Weile allein sein"
        },

        noTalk: {
            label: "ICH MÖCHTE<br>NICHT REDEN",
            speech: "Ich möchte jetzt nicht reden"
        }
    },


    it: {

        title: "Emozioni",

        afraid: {
            label: "HO PAURA",
            speech: "Ho paura"
        },

        sad: {
            label: "SONO<br>TRISTE",
            speech: "Sono triste"
        },

        angry: {
            label: "SONO<br>ARRABBIATO",
            speech: "Sono arrabbiato"
        },

        fedUp: {
            label: "NON NE POSSO<br>PIÙ",
            speech: "Non ne posso più"
        },

        discouraged: {
            label: "SONO<br>SCORAGGIATO",
            speech: "Sono scoraggiato"
        },

        lonely: {
            label: "MI SENTO<br>SOLO",
            speech: "Mi sento solo"
        },

        tired: {
            label: "SONO<br>STANCO",
            speech: "Sono stanco"
        },

        bored: {
            label: "MI ANNOIO",
            speech: "Mi annoio"
        },

        happy: {
            label: "SONO<br>CONTENTO",
            speech: "Sono contento"
        },

        better: {
            label: "MI SENTO<br>MEGLIO",
            speech: "Mi sento meglio"
        },

        stay: {
            label: "RESTI<br>CON ME",
            speech: "Rimanga un po’ con me, per favore"
        },

        alone: {
            label: "VOGLIO STARE<br>DA SOLO",
            speech: "Vorrei stare da solo per un po’"
        },

        noTalk: {
            label: "NON VOGLIO<br>PARLARE",
            speech: "Non voglio parlare adesso"
        }
    },


    es: {

        title: "Emociones",

        afraid: {
            label: "TENGO MIEDO"
        },

        sad: {
            label: "ESTOY<br>TRISTE"
        },

        angry: {
            label: "ESTOY<br>ENFADADO/A"
        },

        fedUp: {
            label: "ESTOY<br>HARTO/A"
        },

        discouraged: {
            label: "ESTOY<br>DESANIMADO/A"
        },

        lonely: {
            label: "ME SIENTO<br>SOLO/A"
        },

        tired: {
            label: "ESTOY<br>CANSADO/A"
        },

        bored: {
            label: "ME ABURRO"
        },

        happy: {
            label: "ESTOY<br>CONTENTO/A"
        },

        better: {
            label: "ME SIENTO<br>MEJOR"
        },

        stay: {
            label: "QUÉDESE<br>CONMIGO"
        },

        alone: {
            label: "QUIERO ESTAR<br>SOLO/A"
        },

        noTalk: {
            label: "NO QUIERO<br>HABLAR"
        }
    },


    pt: {

        title: "Emoções",

        afraid: {
            label: "TENHO MEDO"
        },

        sad: {
            label: "ESTOU<br>TRISTE"
        },

        angry: {
            label: "ESTOU<br>ZANGADO/A"
        },

        fedUp: {
            label: "ESTOU<br>FARTO/A"
        },

        discouraged: {
            label: "ESTOU<br>DESANIMADO/A"
        },

        lonely: {
            label: "SINTO-ME<br>SOZINHO/A"
        },

        tired: {
            label: "ESTOU<br>CANSADO/A"
        },

        bored: {
            label: "ESTOU<br>ABORRECIDO/A"
        },

        happy: {
            label: "ESTOU<br>CONTENTE"
        },

        better: {
            label: "SINTO-ME<br>MELHOR"
        },

        stay: {
            label: "FIQUE<br>COMIGO"
        },

        alone: {
            label: "QUERO FICAR<br>SOZINHO/A"
        },

        noTalk: {
            label: "NÃO QUERO<br>FALAR"
        }
    }

};

/* =========================================
   QUESTIONS MÉDECIN — TRADUCTIONS
   ========================================= */

const QUESTIONS_TRANSLATIONS = {

    fr: {

        title: "Questions",

        whatHappened: {
            label: "QU'EST-CE QUI<br>M'EST ARRIVÉ ?",
            speech: "Qu’est-ce qui m’est arrivé ?"
        },

        injuries: {
            label: "QUELLES SONT<br>MES BLESSURES ?",
            speech: "Quelles sont exactement mes blessures ?"
        },

        improving: {
            label: "EST-CE QUE<br>JE VAIS MIEUX ?",
            speech: "Est-ce que mon état s’améliore ?"
        },

        concern: {
            label: "QU'EST-CE QUI<br>VOUS INQUIÈTE ?",
            speech: "Est-ce que quelque chose vous inquiète encore ?"
        },

        nextGoal: {
            label: "QUEL EST LE<br>PROCHAIN OBJECTIF ?",
            speech: "Quel est le prochain objectif ?"
        },

        exams: {
            label: "QUELS EXAMENS<br>VAIS-JE AVOIR ?",
            speech: "Quels examens vais-je avoir ?"
        },

        resultsWhen: {
            label: "QUAND AURAI-JE<br>LES RÉSULTATS ?",
            speech: "Quand aurai-je les résultats ?"
        },

        resultsMeaning: {
            label: "QUE MONTRENT<br>LES RÉSULTATS ?",
            speech: "Que montrent les résultats ?"
        },

        speakWhen: {
            label: "QUAND POURRAI-JE<br>PARLER ?",
            speech: "Quand pourrai-je parler de nouveau ?"
        },

        speakNormally: {
            label: "POURRAI-JE PARLER<br>NORMALEMENT ?",
            speech: "Est-ce que je pourrai parler normalement ?"
        },

        tracheostomyHowLong: {
            label: "COMBIEN DE TEMPS<br>LA TRACHÉOTOMIE ?",
            speech: "Combien de temps vais-je garder la trachéotomie ?"
        },

        eatWhen: {
            label: "QUAND POURRAI-JE<br>MANGER ?",
            speech: "Quand pourrai-je manger normalement ?"
        },

        standWhen: {
            label: "QUAND POURRAI-JE<br>ME LEVER ?",
            speech: "Quand pourrai-je me lever ?"
        },

        walkWhen: {
            label: "QUAND POURRAI-JE<br>MARCHER ?",
            speech: "Quand pourrai-je marcher ?"
        },

        rehabilitation: {
            label: "AURAI-JE BESOIN<br>DE RÉÉDUCATION ?",
            speech: "Est-ce que je vais avoir besoin de rééducation ?"
        },

        leaveICU: {
            label: "QUAND QUITTERAI-JE<br>LES SOINS INTENSIFS ?",
            speech: "Quand pourrai-je quitter les soins intensifs ?"
        },

        leaveHospital: {
            label: "QUAND QUITTERAI-JE<br>L'HÔPITAL ?",
            speech: "Quand pourrai-je quitter l’hôpital ?"
        },

        goHome: {
            label: "QUAND POURRAI-JE<br>RENTRER CHEZ MOI ?",
            speech: "Quand pourrai-je rentrer chez moi ?"
        },

        improveBeforeHome: {
            label: "QUE FAUT-IL ENCORE<br>AMÉLIORER ?",
            speech: "Qu’est-ce qui doit encore s’améliorer avant que je puisse rentrer ?"
        },

        explainNext: {
            label: "EXPLIQUEZ-MOI<br>LA SUITE",
            speech: "Pouvez-vous m’expliquer la suite ?"
        }
    },


    en: {

        title: "Questions",

        whatHappened: {
            label: "WHAT HAPPENED<br>TO ME?",
            speech: "What happened to me?"
        },

        injuries: {
            label: "WHAT ARE<br>MY INJURIES?",
            speech: "What exactly are my injuries?"
        },

        improving: {
            label: "AM I<br>GETTING BETTER?",
            speech: "Is my condition improving?"
        },

        concern: {
            label: "WHAT ARE YOU<br>STILL CONCERNED ABOUT?",
            speech: "Is there anything you are still concerned about?"
        },

        nextGoal: {
            label: "WHAT IS THE<br>NEXT GOAL?",
            speech: "What is the next goal?"
        },

        exams: {
            label: "WHAT TESTS<br>WILL I HAVE?",
            speech: "What tests will I have?"
        },

        resultsWhen: {
            label: "WHEN WILL I GET<br>THE RESULTS?",
            speech: "When will I get the results?"
        },

        resultsMeaning: {
            label: "WHAT DO THE<br>RESULTS SHOW?",
            speech: "What do the results show?"
        },

        speakWhen: {
            label: "WHEN WILL I<br>SPEAK AGAIN?",
            speech: "When will I be able to speak again?"
        },

        speakNormally: {
            label: "WILL I SPEAK<br>NORMALLY?",
            speech: "Will I be able to speak normally?"
        },

        tracheostomyHowLong: {
            label: "HOW LONG WILL I<br>KEEP THE TRACHEOSTOMY?",
            speech: "How long will I need the tracheostomy?"
        },

        eatWhen: {
            label: "WHEN CAN I<br>EAT NORMALLY?",
            speech: "When will I be able to eat normally?"
        },

        standWhen: {
            label: "WHEN CAN I<br>GET UP?",
            speech: "When will I be able to get up?"
        },

        walkWhen: {
            label: "WHEN CAN I<br>WALK?",
            speech: "When will I be able to walk?"
        },

        rehabilitation: {
            label: "WILL I NEED<br>REHABILITATION?",
            speech: "Will I need rehabilitation?"
        },

        leaveICU: {
            label: "WHEN CAN I LEAVE<br>INTENSIVE CARE?",
            speech: "When will I be able to leave intensive care?"
        },

        leaveHospital: {
            label: "WHEN CAN I LEAVE<br>THE HOSPITAL?",
            speech: "When will I be able to leave the hospital?"
        },

        goHome: {
            label: "WHEN CAN I<br>GO HOME?",
            speech: "When will I be able to go home?"
        },

        improveBeforeHome: {
            label: "WHAT STILL NEEDS<br>TO IMPROVE?",
            speech: "What still needs to improve before I can go home?"
        },

        explainNext: {
            label: "EXPLAIN<br>WHAT COMES NEXT",
            speech: "Can you explain what happens next?"
        }
    },


    de: {

        title: "Fragen",

        whatHappened: {
            label: "WAS IST MIR<br>PASSIERT?",
            speech: "Was ist mir passiert?"
        },

        injuries: {
            label: "WELCHE VERLETZUNGEN<br>HABE ICH?",
            speech: "Welche Verletzungen habe ich genau?"
        },

        improving: {
            label: "WIRD MEIN ZUSTAND<br>BESSER?",
            speech: "Verbessert sich mein Zustand?"
        },

        concern: {
            label: "WAS MACHT IHNEN<br>NOCH SORGEN?",
            speech: "Gibt es noch etwas, das Ihnen Sorgen macht?"
        },

        nextGoal: {
            label: "WAS IST DAS<br>NÄCHSTE ZIEL?",
            speech: "Was ist das nächste Ziel?"
        },

        exams: {
            label: "WELCHE UNTERSUCHUNGEN<br>BEKOMME ICH?",
            speech: "Welche Untersuchungen werde ich bekommen?"
        },

        resultsWhen: {
            label: "WANN BEKOMME ICH<br>DIE ERGEBNISSE?",
            speech: "Wann bekomme ich die Ergebnisse?"
        },

        resultsMeaning: {
            label: "WAS ZEIGEN<br>DIE ERGEBNISSE?",
            speech: "Was zeigen die Ergebnisse?"
        },

        speakWhen: {
            label: "WANN KANN ICH<br>WIEDER SPRECHEN?",
            speech: "Wann kann ich wieder sprechen?"
        },

        speakNormally: {
            label: "WERDE ICH NORMAL<br>SPRECHEN KÖNNEN?",
            speech: "Werde ich wieder normal sprechen können?"
        },

        tracheostomyHowLong: {
            label: "WIE LANGE NOCH<br>DIE TRACHEOSTOMIE?",
            speech: "Wie lange werde ich die Tracheostomie noch brauchen?"
        },

        eatWhen: {
            label: "WANN KANN ICH<br>WIEDER NORMAL ESSEN?",
            speech: "Wann kann ich wieder normal essen?"
        },

        standWhen: {
            label: "WANN KANN ICH<br>AUFSTEHEN?",
            speech: "Wann kann ich wieder aufstehen?"
        },

        walkWhen: {
            label: "WANN KANN ICH<br>GEHEN?",
            speech: "Wann kann ich wieder gehen?"
        },

        rehabilitation: {
            label: "BRAUCHE ICH<br>REHABILITATION?",
            speech: "Werde ich eine Rehabilitation brauchen?"
        },

        leaveICU: {
            label: "WANN KANN ICH DIE<br>INTENSIVSTATION VERLASSEN?",
            speech: "Wann kann ich die Intensivstation verlassen?"
        },

        leaveHospital: {
            label: "WANN KANN ICH DAS<br>KRANKENHAUS VERLASSEN?",
            speech: "Wann kann ich das Krankenhaus verlassen?"
        },

        goHome: {
            label: "WANN KANN ICH<br>NACH HAUSE?",
            speech: "Wann kann ich nach Hause?"
        },

        improveBeforeHome: {
            label: "WAS MUSS SICH NOCH<br>VERBESSERN?",
            speech: "Was muss sich noch verbessern, bevor ich nach Hause kann?"
        },

        explainNext: {
            label: "ERKLÄREN SIE MIR<br>WIE ES WEITERGEHT",
            speech: "Können Sie mir erklären, wie es weitergeht?"
        }
    },


    it: {

        title: "Domande",

        whatHappened: {
            label: "COSA MI È<br>SUCCESSO?",
            speech: "Cosa mi è successo?"
        },

        injuries: {
            label: "QUALI SONO<br>LE MIE LESIONI?",
            speech: "Quali sono esattamente le mie lesioni?"
        },

        improving: {
            label: "STO<br>MIGLIORANDO?",
            speech: "Le mie condizioni stanno migliorando?"
        },

        concern: {
            label: "COSA LA PREOCCUPA<br>ANCORA?",
            speech: "C’è ancora qualcosa che la preoccupa?"
        },

        nextGoal: {
            label: "QUAL È IL<br>PROSSIMO OBIETTIVO?",
            speech: "Qual è il prossimo obiettivo?"
        },

        exams: {
            label: "QUALI ESAMI<br>DOVRÒ FARE?",
            speech: "Quali esami dovrò fare?"
        },

        resultsWhen: {
            label: "QUANDO AVRÒ<br>I RISULTATI?",
            speech: "Quando avrò i risultati?"
        },

        resultsMeaning: {
            label: "COSA MOSTRANO<br>I RISULTATI?",
            speech: "Cosa mostrano i risultati?"
        },

        speakWhen: {
            label: "QUANDO POTRÒ<br>PARLARE?",
            speech: "Quando potrò parlare di nuovo?"
        },

        speakNormally: {
            label: "POTRÒ PARLARE<br>NORMALMENTE?",
            speech: "Potrò parlare normalmente?"
        },

        tracheostomyHowLong: {
            label: "PER QUANTO TEMPO<br>LA TRACHEOSTOMIA?",
            speech: "Per quanto tempo dovrò tenere la tracheostomia?"
        },

        eatWhen: {
            label: "QUANDO POTRÒ<br>MANGIARE?",
            speech: "Quando potrò mangiare normalmente?"
        },

        standWhen: {
            label: "QUANDO POTRÒ<br>ALZARMI?",
            speech: "Quando potrò alzarmi?"
        },

        walkWhen: {
            label: "QUANDO POTRÒ<br>CAMMINARE?",
            speech: "Quando potrò camminare?"
        },

        rehabilitation: {
            label: "AVRÒ BISOGNO<br>DI RIABILITAZIONE?",
            speech: "Avrò bisogno di riabilitazione?"
        },

        leaveICU: {
            label: "QUANDO POTRÒ LASCIARE<br>LA TERAPIA INTENSIVA?",
            speech: "Quando potrò lasciare la terapia intensiva?"
        },

        leaveHospital: {
            label: "QUANDO POTRÒ LASCIARE<br>L'OSPEDALE?",
            speech: "Quando potrò lasciare l’ospedale?"
        },

        goHome: {
            label: "QUANDO POTRÒ<br>TORNARE A CASA?",
            speech: "Quando potrò tornare a casa?"
        },

        improveBeforeHome: {
            label: "COSA DEVE ANCORA<br>MIGLIORARE?",
            speech: "Cosa deve ancora migliorare prima che io possa tornare a casa?"
        },

        explainNext: {
            label: "MI SPIEGHI<br>COSA SUCCEDE DOPO",
            speech: "Può spiegarmi cosa succederà dopo?"
        }
    },


    es: {

        title: "Preguntas",

        whatHappened: {
            label: "¿QUÉ ME<br>HA PASADO?"
        },

        injuries: {
            label: "¿CUÁLES SON<br>MIS LESIONES?"
        },

        improving: {
            label: "¿ESTOY<br>MEJORANDO?"
        },

        concern: {
            label: "¿QUÉ LE<br>PREOCUPA?"
        },

        nextGoal: {
            label: "¿CUÁL ES EL<br>PRÓXIMO OBJETIVO?"
        },

        exams: {
            label: "¿QUÉ PRUEBAS<br>ME HARÁN?"
        },

        resultsWhen: {
            label: "¿CUÁNDO TENDRÉ<br>LOS RESULTADOS?"
        },

        resultsMeaning: {
            label: "¿QUÉ MUESTRAN<br>LOS RESULTADOS?"
        },

        speakWhen: {
            label: "¿CUÁNDO PODRÉ<br>VOLVER A HABLAR?"
        },

        speakNormally: {
            label: "¿PODRÉ HABLAR<br>NORMALMENTE?"
        },

        tracheostomyHowLong: {
            label: "¿CUÁNTO TIEMPO<br>LA TRAQUEOSTOMÍA?"
        },

        eatWhen: {
            label: "¿CUÁNDO PODRÉ<br>COMER?"
        },

        standWhen: {
            label: "¿CUÁNDO PODRÉ<br>LEVANTARME?"
        },

        walkWhen: {
            label: "¿CUÁNDO PODRÉ<br>CAMINAR?"
        },

        rehabilitation: {
            label: "¿NECESITARÉ<br>REHABILITACIÓN?"
        },

        leaveICU: {
            label: "¿CUÁNDO SALDRÉ DE<br>CUIDADOS INTENSIVOS?"
        },

        leaveHospital: {
            label: "¿CUÁNDO PODRÉ<br>SALIR DEL HOSPITAL?"
        },

        goHome: {
            label: "¿CUÁNDO PODRÉ<br>VOLVER A CASA?"
        },

        improveBeforeHome: {
            label: "¿QUÉ DEBE<br>MEJORAR TODAVÍA?"
        },

        explainNext: {
            label: "EXPLÍQUEME<br>QUÉ PASARÁ DESPUÉS"
        }
    },


    pt: {

        title: "Perguntas",

        whatHappened: {
            label: "O QUE ME<br>ACONTECEU?"
        },

        injuries: {
            label: "QUAIS SÃO<br>AS MINHAS LESÕES?"
        },

        improving: {
            label: "ESTOU A<br>MELHORAR?"
        },

        concern: {
            label: "O QUE AINDA<br>O PREOCUPA?"
        },

        nextGoal: {
            label: "QUAL É O<br>PRÓXIMO OBJETIVO?"
        },

        exams: {
            label: "QUE EXAMES<br>VOU FAZER?"
        },

        resultsWhen: {
            label: "QUANDO TEREI<br>OS RESULTADOS?"
        },

        resultsMeaning: {
            label: "O QUE MOSTRAM<br>OS RESULTADOS?"
        },

        speakWhen: {
            label: "QUANDO PODEREI<br>VOLTAR A FALAR?"
        },

        speakNormally: {
            label: "PODEREI FALAR<br>NORMALMENTE?"
        },

        tracheostomyHowLong: {
            label: "QUANTO TEMPO<br>COM A TRAQUEOSTOMIA?"
        },

        eatWhen: {
            label: "QUANDO PODEREI<br>COMER?"
        },

        standWhen: {
            label: "QUANDO PODEREI<br>LEVANTAR-ME?"
        },

        walkWhen: {
            label: "QUANDO PODEREI<br>CAMINHAR?"
        },

        rehabilitation: {
            label: "VOU PRECISAR<br>DE REABILITAÇÃO?"
        },

        leaveICU: {
            label: "QUANDO PODEREI SAIR<br>DOS CUIDADOS INTENSIVOS?"
        },

        leaveHospital: {
            label: "QUANDO PODEREI<br>SAIR DO HOSPITAL?"
        },

        goHome: {
            label: "QUANDO PODEREI<br>VOLTAR PARA CASA?"
        },

        improveBeforeHome: {
            label: "O QUE AINDA<br>PRECISA DE MELHORAR?"
        },

        explainNext: {
            label: "EXPLIQUE-ME<br>O QUE VAI ACONTECER"
        }
    }

};

/* =========================================
   MA CHAMBRE / ENVIRONNEMENT — TRADUCTIONS
   ========================================= */

const ENVIRONMENT_TRANSLATIONS = {

    fr: {

        title: "Environnement",

        closeDoor: {
            label: "FERMEZ<br>LA PORTE",
            speech: "Fermez la porte, s’il vous plaît"
        },

        openDoor: {
            label: "OUVREZ<br>LA PORTE",
            speech: "Ouvrez la porte, s’il vous plaît"
        },

        closeCurtains: {
            label: "FERMEZ<br>LES RIDEAUX",
            speech: "Fermez les rideaux, s’il vous plaît"
        },

        openCurtains: {
            label: "OUVREZ<br>LES RIDEAUX",
            speech: "Ouvrez les rideaux, s’il vous plaît"
        },

        lightOn: {
            label: "ALLUMEZ<br>LA LUMIÈRE",
            speech: "Allumez la lumière, s’il vous plaît"
        },

        lightOff: {
            label: "ÉTEIGNEZ<br>LA LUMIÈRE",
            speech: "Éteignez la lumière, s’il vous plaît"
        },

        noise: {
            label: "TROP<br>DE BRUIT",
            speech: "Il y a trop de bruit"
        },

        openWindow: {
            label: "OUVREZ<br>LA FENÊTRE",
            speech: "Ouvrez la fenêtre, s’il vous plaît"
        },

        closeWindow: {
            label: "FERMEZ<br>LA FENÊTRE",
            speech: "Fermez la fenêtre, s’il vous plaît"
        },

        television: {
            label: "TÉLÉVISION",
            speech: "Je voudrais regarder la télévision"
        },

        music: {
            label: "MUSIQUE",
            speech: "Je voudrais écouter de la musique"
        },

        phone: {
            label: "AVOIR MON<br>TÉLÉPHONE",
            speech: "Je voudrais avoir mon téléphone"
        },

        rechargePhone: {
            label: "RECHARGER MON<br>TÉLÉPHONE",
            speech: "Rechargez mon téléphone, s’il vous plaît"
        },

        sleep: {
            label: "JE VEUX<br>DORMIR",
            speech: "Je voudrais dormir"
        }

    },

    en: {

        title: "Environment",

        closeDoor: {
            label: "CLOSE<br>THE DOOR",
            speech: "Please close the door"
        },

        openDoor: {
            label: "OPEN<br>THE DOOR",
            speech: "Please open the door"
        },

        closeCurtains: {
            label: "CLOSE<br>THE CURTAINS",
            speech: "Please close the curtains"
        },

        openCurtains: {
            label: "OPEN<br>THE CURTAINS",
            speech: "Please open the curtains"
        },

        lightOn: {
            label: "TURN ON<br>THE LIGHT",
            speech: "Please turn on the light"
        },

        lightOff: {
            label: "TURN OFF<br>THE LIGHT",
            speech: "Please turn off the light"
        },

        noise: {
            label: "TOO MUCH<br>NOISE",
            speech: "There is too much noise"
        },

        openWindow: {
            label: "OPEN<br>THE WINDOW",
            speech: "Please open the window"
        },

        closeWindow: {
            label: "CLOSE<br>THE WINDOW",
            speech: "Please close the window"
        },

        television: {
            label: "TELEVISION",
            speech: "I would like to watch television"
        },

        music: {
            label: "MUSIC",
            speech: "I would like to listen to music"
        },

        phone: {
            label: "MY<br>PHONE",
            speech: "I would like to have my phone"
        },

        rechargePhone: {
            label: "CHARGE<br>MY PHONE",
            speech: "Please charge my phone"
        },

        sleep: {
            label: "I WANT<br>TO SLEEP",
            speech: "I would like to sleep"
        }

    },

    de: {

        title: "Umgebung",

        closeDoor: {
            label: "TÜR<br>SCHLIESSEN",
            speech: "Bitte schließen Sie die Tür"
        },

        openDoor: {
            label: "TÜR<br>ÖFFNEN",
            speech: "Bitte öffnen Sie die Tür"
        },

        closeCurtains: {
            label: "VORHÄNGE<br>SCHLIESSEN",
            speech: "Bitte schließen Sie die Vorhänge"
        },

        openCurtains: {
            label: "VORHÄNGE<br>ÖFFNEN",
            speech: "Bitte öffnen Sie die Vorhänge"
        },

        lightOn: {
            label: "LICHT<br>AN",
            speech: "Bitte machen Sie das Licht an"
        },

        lightOff: {
            label: "LICHT<br>AUS",
            speech: "Bitte machen Sie das Licht aus"
        },

        noise: {
            label: "ZU VIEL<br>LÄRM",
            speech: "Es ist zu laut"
        },

        openWindow: {
            label: "FENSTER<br>ÖFFNEN",
            speech: "Bitte öffnen Sie das Fenster"
        },

        closeWindow: {
            label: "FENSTER<br>SCHLIESSEN",
            speech: "Bitte schließen Sie das Fenster"
        },

        television: {
            label: "FERNSEHEN",
            speech: "Ich möchte fernsehen"
        },

        music: {
            label: "MUSIK",
            speech: "Ich möchte Musik hören"
        },

        phone: {
            label: "MEIN<br>HANDY",
            speech: "Ich möchte mein Handy haben"
        },

        rechargePhone: {
            label: "HANDY<br>AUFLADEN",
            speech: "Bitte laden Sie mein Handy auf"
        },

        sleep: {
            label: "ICH MÖCHTE<br>SCHLAFEN",
            speech: "Ich möchte schlafen"
        }

    },

    it: {

        title: "Ambiente",

        closeDoor: {
            label: "CHIUDETE<br>LA PORTA",
            speech: "Chiudete la porta, per favore"
        },

        openDoor: {
            label: "APRITE<br>LA PORTA",
            speech: "Aprite la porta, per favore"
        },

        closeCurtains: {
            label: "CHIUDETE<br>LE TENDE",
            speech: "Chiudete le tende, per favore"
        },

        openCurtains: {
            label: "APRITE<br>LE TENDE",
            speech: "Aprite le tende, per favore"
        },

        lightOn: {
            label: "ACCENDETE<br>LA LUCE",
            speech: "Accendete la luce, per favore"
        },

        lightOff: {
            label: "SPEGNETE<br>LA LUCE",
            speech: "Spegnete la luce, per favore"
        },

        noise: {
            label: "TROPPO<br>RUMORE",
            speech: "C’è troppo rumore"
        },

        openWindow: {
            label: "APRITE<br>LA FINESTRA",
            speech: "Aprite la finestra, per favore"
        },

        closeWindow: {
            label: "CHIUDETE<br>LA FINESTRA",
            speech: "Chiudete la finestra, per favore"
        },

        television: {
            label: "TELEVISIONE",
            speech: "Vorrei guardare la televisione"
        },

        music: {
            label: "MUSICA",
            speech: "Vorrei ascoltare della musica"
        },

        phone: {
            label: "IL MIO<br>TELEFONO",
            speech: "Vorrei avere il mio telefono"
        },

        rechargePhone: {
            label: "RICARICARE<br>IL TELEFONO",
            speech: "Ricaricate il mio telefono, per favore"
        },

        sleep: {
            label: "VOGLIO<br>DORMIRE",
            speech: "Vorrei dormire"
        }

    },

    es: {

        title: "Entorno",

        closeDoor: {
            label: "CIERRE<br>LA PUERTA"
        },

        openDoor: {
            label: "ABRA<br>LA PUERTA"
        },

        closeCurtains: {
            label: "CIERRE<br>LAS CORTINAS"
        },

        openCurtains: {
            label: "ABRA<br>LAS CORTINAS"
        },

        lightOn: {
            label: "ENCIENDA<br>LA LUZ"
        },

        lightOff: {
            label: "APAGUE<br>LA LUZ"
        },

        noise: {
            label: "DEMASIADO<br>RUIDO"
        },

        openWindow: {
            label: "ABRA<br>LA VENTANA"
        },

        closeWindow: {
            label: "CIERRE<br>LA VENTANA"
        },

        television: {
            label: "TELEVISIÓN"
        },

        music: {
            label: "MÚSICA"
        },

        phone: {
            label: "MI<br>TELÉFONO"
        },

        rechargePhone: {
            label: "CARGAR<br>MI TELÉFONO"
        },

        sleep: {
            label: "QUIERO<br>DORMIR"
        }

    },

    pt: {

        title: "Ambiente",

        closeDoor: {
            label: "FECHE<br>A PORTA"
        },

        openDoor: {
            label: "ABRA<br>A PORTA"
        },

        closeCurtains: {
            label: "FECHE<br>AS CORTINAS"
        },

        openCurtains: {
            label: "ABRA<br>AS CORTINAS"
        },

        lightOn: {
            label: "ACENDA<br>A LUZ"
        },

        lightOff: {
            label: "APAGUE<br>A LUZ"
        },

        noise: {
            label: "DEMASIADO<br>BARULHO"
        },

        openWindow: {
            label: "ABRA<br>A JANELA"
        },

        closeWindow: {
            label: "FECHE<br>A JANELA"
        },

        television: {
            label: "TELEVISÃO"
        },

        music: {
            label: "MÚSICA"
        },

        phone: {
            label: "O MEU<br>TELEFONE"
        },

        rechargePhone: {
            label: "CARREGAR<br>O MEU TELEFONE"
        },

        sleep: {
            label: "QUERO<br>DORMIR"
        }

    }

};

/* =========================================
   COMPRENDRE — TRADUCTIONS
   ========================================= */

const UNDERSTAND_TRANSLATIONS = {

    fr: {

        title: "Comprendre",

        wait: {
            label: "ATTENDEZ<br>JE N'AI PAS FINI",
            speech: "Attendez, je n’ai pas fini"
        },

        choices: {
            label: "DONNEZ-MOI<br>LES CHOIX",
            speech: "Donnez-moi les choix possibles"
        },

        notUnderstand: {
            label: "JE N'AI PAS<br>COMPRIS",
            speech: "Je n’ai pas compris"
        },

        write: {
            label: "JE VEUX<br>L'ÉCRIRE",
            speech: "Je veux essayer de l’écrire"
        },

        louder: {
            label: "PARLEZ<br>PLUS FORT",
            speech: "Parlez plus fort, s’il vous plaît"
        },

        slower: {
            label: "PARLEZ PLUS<br>LENTEMENT",
            speech: "Parlez plus lentement, s’il vous plaît"
        },

        yesNo: {
            label: "QUESTION<br>OUI / NON",
            speech: "Posez-moi une question à laquelle je peux répondre par oui ou non"
        },

        repeat: {
            label: "RÉPÉTEZ",
            speech: "Répétez, s’il vous plaît"
        },

        oneQuestion: {
            label: "UNE QUESTION<br>À LA FOIS",
            speech: "Posez-moi une seule question à la fois"
        },

        misunderstood: {
            label: "VOUS AVEZ<br>MAL COMPRIS",
            speech: "Vous avez mal compris ce que je voulais dire"
        }
    },


    en: {

        title: "Understand",

        wait: {
            label: "WAIT<br>I'M NOT FINISHED",
            speech: "Wait, I haven't finished"
        },

        choices: {
            label: "GIVE ME<br>THE CHOICES",
            speech: "Please give me the possible choices"
        },

        notUnderstand: {
            label: "I DON'T<br>UNDERSTAND",
            speech: "I don't understand"
        },

        write: {
            label: "I WANT TO<br>WRITE IT",
            speech: "I want to try to write it"
        },

        louder: {
            label: "SPEAK<br>LOUDER",
            speech: "Please speak louder"
        },

        slower: {
            label: "SPEAK MORE<br>SLOWLY",
            speech: "Please speak more slowly"
        },

        yesNo: {
            label: "YES / NO<br>QUESTION",
            speech: "Ask me a question I can answer with yes or no"
        },

        repeat: {
            label: "REPEAT",
            speech: "Please repeat"
        },

        oneQuestion: {
            label: "ONE QUESTION<br>AT A TIME",
            speech: "Please ask me one question at a time"
        },

        misunderstood: {
            label: "YOU<br>MISUNDERSTOOD ME",
            speech: "You misunderstood what I meant"
        }
    },


    de: {

        title: "Verstehen",

        wait: {
            label: "WARTEN SIE<br>ICH BIN NOCH NICHT FERTIG",
            speech: "Warten Sie, ich bin noch nicht fertig"
        },

        choices: {
            label: "NENNEN SIE MIR<br>DIE MÖGLICHKEITEN",
            speech: "Nennen Sie mir bitte die möglichen Antworten"
        },

        notUnderstand: {
            label: "ICH HABE ES<br>NICHT VERSTANDEN",
            speech: "Ich habe es nicht verstanden"
        },

        write: {
            label: "ICH MÖCHTE<br>ES SCHREIBEN",
            speech: "Ich möchte versuchen, es zu schreiben"
        },

        louder: {
            label: "SPRECHEN SIE<br>LAUTER",
            speech: "Bitte sprechen Sie lauter"
        },

        slower: {
            label: "SPRECHEN SIE<br>LANGSAMER",
            speech: "Bitte sprechen Sie langsamer"
        },

        yesNo: {
            label: "JA / NEIN<br>FRAGE",
            speech: "Stellen Sie mir eine Frage, die ich mit Ja oder Nein beantworten kann"
        },

        repeat: {
            label: "WIEDERHOLEN",
            speech: "Bitte wiederholen Sie"
        },

        oneQuestion: {
            label: "EINE FRAGE<br>NACH DER ANDEREN",
            speech: "Stellen Sie mir bitte nur eine Frage nach der anderen"
        },

        misunderstood: {
            label: "SIE HABEN MICH<br>FALSCH VERSTANDEN",
            speech: "Sie haben falsch verstanden, was ich sagen wollte"
        }
    },


    it: {

        title: "Capire",

        wait: {
            label: "ASPETTI<br>NON HO FINITO",
            speech: "Aspetti, non ho ancora finito"
        },

        choices: {
            label: "MI DIA<br>LE POSSIBILITÀ",
            speech: "Mi dia le possibili scelte"
        },

        notUnderstand: {
            label: "NON HO<br>CAPITO",
            speech: "Non ho capito"
        },

        write: {
            label: "VOGLIO<br>SCRIVERLO",
            speech: "Voglio provare a scriverlo"
        },

        louder: {
            label: "PARLI<br>PIÙ FORTE",
            speech: "Parli più forte, per favore"
        },

        slower: {
            label: "PARLI PIÙ<br>LENTAMENTE",
            speech: "Parli più lentamente, per favore"
        },

        yesNo: {
            label: "DOMANDA<br>SÌ / NO",
            speech: "Mi faccia una domanda a cui posso rispondere sì o no"
        },

        repeat: {
            label: "RIPETA",
            speech: "Ripeta, per favore"
        },

        oneQuestion: {
            label: "UNA DOMANDA<br>ALLA VOLTA",
            speech: "Mi faccia una sola domanda alla volta"
        },

        misunderstood: {
            label: "HA CAPITO<br>MALE",
            speech: "Ha capito male quello che volevo dire"
        }
    },


    es: {

        title: "Comprender",

        wait: {
            label: "ESPERE<br>NO HE TERMINADO"
        },

        choices: {
            label: "DÉME<br>LAS OPCIONES"
        },

        notUnderstand: {
            label: "NO HE<br>ENTENDIDO"
        },

        write: {
            label: "QUIERO<br>ESCRIBIRLO"
        },

        louder: {
            label: "HABLE<br>MÁS ALTO"
        },

        slower: {
            label: "HABLE MÁS<br>DESPACIO"
        },

        yesNo: {
            label: "PREGUNTA<br>SÍ / NO"
        },

        repeat: {
            label: "REPITA"
        },

        oneQuestion: {
            label: "UNA PREGUNTA<br>A LA VEZ"
        },

        misunderstood: {
            label: "ME HA<br>ENTENDIDO MAL"
        }
    },


    pt: {

        title: "Compreender",

        wait: {
            label: "ESPERE<br>AINDA NÃO TERMINEI"
        },

        choices: {
            label: "DÊ-ME<br>AS OPÇÕES"
        },

        notUnderstand: {
            label: "NÃO<br>PERCEBI"
        },

        write: {
            label: "QUERO<br>ESCREVER"
        },

        louder: {
            label: "FALE<br>MAIS ALTO"
        },

        slower: {
            label: "FALE MAIS<br>DEVAGAR"
        },

        yesNo: {
            label: "PERGUNTA<br>SIM / NÃO"
        },

        repeat: {
            label: "REPITA"
        },

        oneQuestion: {
            label: "UMA PERGUNTA<br>DE CADA VEZ"
        },

        misunderstood: {
            label: "NÃO ME<br>PERCEBEU BEM"
        }
    }

};

/* =========================================
   FAMILLE / AMIS — TRADUCTIONS
   ========================================= */

const TALK_TRANSLATIONS = {

    fr: {

        title: "Famille / Amis",

        hello: {
            label: "BONJOUR",
            speech: "Bonjour"
        },

        seeYou: {
            label: "À BIENTÔT",
            speech: "À bientôt"
        },

        happyToSee: {
            label: "JE SUIS CONTENT<br>DE TE VOIR",
            speech: "Je suis content de te voir"
        },

        missedYou: {
            label: "TU M'AS MANQUÉ",
            speech: "Tu m’as manqué"
        },

        loveYou: {
            label: "JE T'AIME",
            speech: "Je t’aime"
        },

        thankYou: {
            label: "MERCI",
            speech: "Merci"
        },

        sorry: {
            label: "DÉSOLÉ",
            speech: "Désolé"
        },

        dontWorry: {
            label: "NE T'INQUIÈTE PAS",
            speech: "Ne t’inquiète pas"
        },

        stayLonger: {
            label: "RESTE ENCORE<br>UN PEU",
            speech: "Reste encore un peu avec moi"
        },

        tellMe: {
            label: "RACONTE-MOI",
            speech: "Raconte-moi"
        },

        gettingBetter: {
            label: "ÇA VA MIEUX",
            speech: "Ça va mieux"
        },

        doingWell: {
            label: "JE VAIS BIEN",
            speech: "Je vais bien"
        },

        tiredButOkay: {
            label: "JE SUIS FATIGUÉ,<br>MAIS ÇA VA",
            speech: "Je suis fatigué, mais ça va"
        },

        dontKnow: {
            label: "JE NE SAIS PAS",
            speech: "Je ne sais pas"
        },

        asYouWant: {
            label: "COMME TU VEUX",
            speech: "Comme tu veux"
        },

        maybe: {
            label: "PEUT-ÊTRE",
            speech: "Peut-être"
        },

        changeSubject: {
            label: "CHANGEONS<br>DE SUJET",
            speech: "Changeons de sujet"
        },

        continue: {
            label: "CONTINUE",
            speech: "Continue"
        }
    },


    en: {

        title: "Family / Friends",

        hello: {
            label: "HELLO",
            speech: "Hello"
        },

        seeYou: {
            label: "SEE YOU SOON",
            speech: "See you soon"
        },

        happyToSee: {
            label: "I'M HAPPY<br>TO SEE YOU",
            speech: "I'm happy to see you"
        },

        missedYou: {
            label: "I MISSED YOU",
            speech: "I missed you"
        },

        loveYou: {
            label: "I LOVE YOU",
            speech: "I love you"
        },

        thankYou: {
            label: "THANK YOU",
            speech: "Thank you"
        },

        sorry: {
            label: "I'M SORRY",
            speech: "I'm sorry"
        },

        dontWorry: {
            label: "DON'T WORRY",
            speech: "Don't worry"
        },

        stayLonger: {
            label: "STAY A LITTLE<br>LONGER",
            speech: "Stay with me a little longer"
        },

        tellMe: {
            label: "TELL ME",
            speech: "Tell me"
        },

        gettingBetter: {
            label: "I'M GETTING<br>BETTER",
            speech: "I'm getting better"
        },

        doingWell: {
            label: "I'M DOING WELL",
            speech: "I'm doing well"
        },

        tiredButOkay: {
            label: "I'M TIRED,<br>BUT I'M OKAY",
            speech: "I'm tired, but I'm okay"
        },

        dontKnow: {
            label: "I DON'T KNOW",
            speech: "I don't know"
        },

        asYouWant: {
            label: "AS YOU WISH",
            speech: "As you wish"
        },

        maybe: {
            label: "MAYBE",
            speech: "Maybe"
        },

        changeSubject: {
            label: "LET'S CHANGE<br>THE SUBJECT",
            speech: "Let's change the subject"
        },

        continue: {
            label: "CONTINUE",
            speech: "Continue"
        }
    },


    de: {

        title: "Familie / Freunde",

        hello: {
            label: "HALLO",
            speech: "Hallo"
        },

        seeYou: {
            label: "BIS BALD",
            speech: "Bis bald"
        },

        happyToSee: {
            label: "ICH FREUE MICH,<br>DICH ZU SEHEN",
            speech: "Ich freue mich, dich zu sehen"
        },

        missedYou: {
            label: "DU HAST MIR<br>GEFEHLT",
            speech: "Du hast mir gefehlt"
        },

        loveYou: {
            label: "ICH LIEBE DICH",
            speech: "Ich liebe dich"
        },

        thankYou: {
            label: "DANKE",
            speech: "Danke"
        },

        sorry: {
            label: "ES TUT MIR LEID",
            speech: "Es tut mir leid"
        },

        dontWorry: {
            label: "MACH DIR<br>KEINE SORGEN",
            speech: "Mach dir keine Sorgen"
        },

        stayLonger: {
            label: "BLEIB NOCH<br>EIN WENIG",
            speech: "Bleib noch ein wenig bei mir"
        },

        tellMe: {
            label: "ERZÄHL MIR",
            speech: "Erzähl mir"
        },

        gettingBetter: {
            label: "ES GEHT<br>BESSER",
            speech: "Es geht mir besser"
        },

        doingWell: {
            label: "MIR GEHT ES GUT",
            speech: "Mir geht es gut"
        },

        tiredButOkay: {
            label: "ICH BIN MÜDE,<br>ABER ES GEHT",
            speech: "Ich bin müde, aber es geht"
        },

        dontKnow: {
            label: "ICH WEISS ES NICHT",
            speech: "Ich weiß es nicht"
        },

        asYouWant: {
            label: "WIE DU WILLST",
            speech: "Wie du willst"
        },

        maybe: {
            label: "VIELLEICHT",
            speech: "Vielleicht"
        },

        changeSubject: {
            label: "WECHSELN WIR<br>DAS THEMA",
            speech: "Wechseln wir das Thema"
        },

        continue: {
            label: "WEITER",
            speech: "Weiter"
        }
    },


    it: {

        title: "Famiglia / Amici",

        hello: {
            label: "CIAO",
            speech: "Ciao"
        },

        seeYou: {
            label: "A PRESTO",
            speech: "A presto"
        },

        happyToSee: {
            label: "SONO CONTENTO<br>DI VEDERTI",
            speech: "Sono contento di vederti"
        },

        missedYou: {
            label: "MI SEI MANCATO",
            speech: "Mi sei mancato"
        },

        loveYou: {
            label: "TI VOGLIO BENE",
            speech: "Ti voglio bene"
        },

        thankYou: {
            label: "GRAZIE",
            speech: "Grazie"
        },

        sorry: {
            label: "MI DISPIACE",
            speech: "Mi dispiace"
        },

        dontWorry: {
            label: "NON PREOCCUPARTI",
            speech: "Non preoccuparti"
        },

        stayLonger: {
            label: "RESTA ANCORA<br>UN PO'",
            speech: "Resta ancora un po’ con me"
        },

        tellMe: {
            label: "RACCONTAMI",
            speech: "Raccontami"
        },

        gettingBetter: {
            label: "VA MEGLIO",
            speech: "Va meglio"
        },

        doingWell: {
            label: "STO BENE",
            speech: "Sto bene"
        },

        tiredButOkay: {
            label: "SONO STANCO,<br>MA VA BENE",
            speech: "Sono stanco, ma va bene"
        },

        dontKnow: {
            label: "NON LO SO",
            speech: "Non lo so"
        },

        asYouWant: {
            label: "COME VUOI",
            speech: "Come vuoi"
        },

        maybe: {
            label: "FORSE",
            speech: "Forse"
        },

        changeSubject: {
            label: "CAMBIAMO<br>ARGOMENTO",
            speech: "Cambiamo argomento"
        },

        continue: {
            label: "CONTINUA",
            speech: "Continua"
        }
    },


    es: {

        title: "Familia / Amigos",

        hello: {
            label: "HOLA"
        },

        seeYou: {
            label: "HASTA PRONTO"
        },

        happyToSee: {
            label: "ME ALEGRA<br>VERTE"
        },

        missedYou: {
            label: "TE HE<br>ECHADO DE MENOS"
        },

        loveYou: {
            label: "TE QUIERO"
        },

        thankYou: {
            label: "GRACIAS"
        },

        sorry: {
            label: "LO SIENTO"
        },

        dontWorry: {
            label: "NO TE<br>PREOCUPES"
        },

        stayLonger: {
            label: "QUÉDATE UN POCO<br>MÁS"
        },

        tellMe: {
            label: "CUÉNTAME"
        },

        gettingBetter: {
            label: "ESTOY<br>MEJORANDO"
        },

        doingWell: {
            label: "ESTOY BIEN"
        },

        tiredButOkay: {
            label: "ESTOY CANSADO/A,<br>PERO ESTOY BIEN"
        },

        dontKnow: {
            label: "NO LO SÉ"
        },

        asYouWant: {
            label: "COMO QUIERAS"
        },

        maybe: {
            label: "QUIZÁS"
        },

        changeSubject: {
            label: "CAMBIEMOS<br>DE TEMA"
        },

        continue: {
            label: "CONTINÚA"
        }
    },


    pt: {

        title: "Família / Amigos",

        hello: {
            label: "OLÁ"
        },

        seeYou: {
            label: "ATÉ BREVE"
        },

        happyToSee: {
            label: "ESTOU CONTENTE<br>POR TE VER"
        },

        missedYou: {
            label: "TIVE SAUDADES<br>TUAS"
        },

        loveYou: {
            label: "AMO-TE"
        },

        thankYou: {
            label: "OBRIGADO/A"
        },

        sorry: {
            label: "DESCULPA"
        },

        dontWorry: {
            label: "NÃO TE<br>PREOCUPES"
        },

        stayLonger: {
            label: "FICA MAIS<br>UM POUCO"
        },

        tellMe: {
            label: "CONTA-ME"
        },

        gettingBetter: {
            label: "ESTOU A<br>MELHORAR"
        },

        doingWell: {
            label: "ESTOU BEM"
        },

        tiredButOkay: {
            label: "ESTOU CANSADO/A,<br>MAS ESTOU BEM"
        },

        dontKnow: {
            label: "NÃO SEI"
        },

        asYouWant: {
            label: "COMO QUISERES"
        },

        maybe: {
            label: "TALVEZ"
        },

        changeSubject: {
            label: "MUDEMOS<br>DE ASSUNTO"
        },

        continue: {
            label: "CONTINUA"
        }
    }

};

/* =========================================
   MES PHRASES — TRADUCTIONS
   ========================================= */

const WRITE_TRANSLATIONS = {

    fr: {

        title: "Mes phrases",

        starters: {
            wouldLike: {
                label: "JE VOUDRAIS…",
                text: "Je voudrais "
            },

            need: {
                label: "J'AI BESOIN DE…",
                text: "J’ai besoin de "
            },

            want: {
                label: "JE VEUX…",
                text: "Je veux "
            },

            dontWant: {
                label: "JE NE VEUX PAS…",
                text: "Je ne veux pas "
            },

            canYou: {
                label: "POUVEZ-VOUS…",
                text: "Pouvez-vous "
            },

            helpMe: {
                label: "AIDEZ-MOI À…",
                text: "Aidez-moi à "
            },

            when: {
                label: "QUAND… ?",
                text: "Quand est-ce que "
            },

            why: {
                label: "POURQUOI… ?",
                text: "Pourquoi "
            },

            isIt: {
                label: "EST-CE QUE… ?",
                text: "Est-ce que "
            },

            think: {
                label: "JE PENSE QUE…",
                text: "Je pense que "
            }
        },

        placeholder:
            "Écrivez ici ce que vous voulez dire...",

        clear:
            "🗑️ EFFACER",

        speak:
            "🔊 DIRE",

        save:
            "⭐ ENREGISTRER",

        personalTitle:
            "Mes phrases personnelles",

		noFavorites:
			"Aucune phrase personnelle pour le moment.",

		duplicateFavorite:
			"Cette phrase est déjà dans vos favoris.",

		favoriteAdded:
			"Phrase ajoutée.",

		deleteConfirm:
			"Supprimer cette phrase ?"
    },


    en: {

        title: "My phrases",

        starters: {
            wouldLike: {
                label: "I WOULD LIKE…",
                text: "I would like "
            },

            need: {
                label: "I NEED…",
                text: "I need "
            },

            want: {
                label: "I WANT…",
                text: "I want "
            },

            dontWant: {
                label: "I DON'T WANT…",
                text: "I don't want "
            },

            canYou: {
                label: "CAN YOU…",
                text: "Can you "
            },

            helpMe: {
                label: "HELP ME TO…",
                text: "Help me to "
            },

            when: {
                label: "WHEN… ?",
                text: "When "
            },

            why: {
                label: "WHY… ?",
                text: "Why "
            },

            isIt: {
                label: "IS IT… ?",
                text: "Is it "
            },

            think: {
                label: "I THINK…",
                text: "I think "
            }
        },

        placeholder:
            "Write here what you want to say...",

        clear:
            "🗑️ CLEAR",

        speak:
            "🔊 SAY",

        save:
            "⭐ SAVE",

        personalTitle:
            "My personal phrases",

		noFavorites:
			"No personal phrases yet.",

		duplicateFavorite:
			"This phrase is already in your favorites.",

		favoriteAdded:
			"Phrase saved.",

		deleteConfirm:
			"Delete this phrase?"
    },


    de: {

        title: "Meine Sätze",

        starters: {
            wouldLike: {
                label: "ICH MÖCHTE…",
                text: "Ich möchte "
            },

            need: {
                label: "ICH BRAUCHE…",
                text: "Ich brauche "
            },

            want: {
                label: "ICH WILL…",
                text: "Ich will "
            },

            dontWant: {
                label: "ICH WILL NICHT…",
                text: "Ich will nicht "
            },

            canYou: {
                label: "KÖNNEN SIE…",
                text: "Können Sie "
            },

            helpMe: {
                label: "HELFEN SIE MIR…",
                text: "Helfen Sie mir "
            },

            when: {
                label: "WANN… ?",
                text: "Wann "
            },

            why: {
                label: "WARUM… ?",
                text: "Warum "
            },

            isIt: {
                label: "IST ES… ?",
                text: "Ist es "
            },

            think: {
                label: "ICH DENKE…",
                text: "Ich denke, dass "
            }
        },

        placeholder:
            "Schreiben Sie hier, was Sie sagen möchten...",

        clear:
            "🗑️ LÖSCHEN",

        speak:
            "🔊 SAGEN",

        save:
            "⭐ SPEICHERN",

        personalTitle:
            "Meine persönlichen Sätze",

		noFavorites:
			"Noch keine persönlichen Sätze.",

		duplicateFavorite:
			"Dieser Satz ist bereits in Ihren Favoriten.",

		favoriteAdded:
			"Satz gespeichert.",

		deleteConfirm:
			"Diesen Satz löschen?"
    },


    it: {

        title: "Le mie frasi",

        starters: {
            wouldLike: {
                label: "VORREI…",
                text: "Vorrei "
            },

            need: {
                label: "HO BISOGNO DI…",
                text: "Ho bisogno di "
            },

            want: {
                label: "VOGLIO…",
                text: "Voglio "
            },

            dontWant: {
                label: "NON VOGLIO…",
                text: "Non voglio "
            },

            canYou: {
                label: "PUÒ…",
                text: "Può "
            },

            helpMe: {
                label: "MI AIUTI A…",
                text: "Mi aiuti a "
            },

            when: {
                label: "QUANDO… ?",
                text: "Quando "
            },

            why: {
                label: "PERCHÉ… ?",
                text: "Perché "
            },

            isIt: {
                label: "È… ?",
                text: "È "
            },

            think: {
                label: "PENSO CHE…",
                text: "Penso che "
            }
        },

        placeholder:
            "Scriva qui quello che vuole dire...",

        clear:
            "🗑️ CANCELLA",

        speak:
            "🔊 DI'",

        save:
            "⭐ SALVA",

        personalTitle:
            "Le mie frasi personali",

		noFavorites:
			"Nessuna frase personale per il momento.",

		duplicateFavorite:
			"Questa frase è già nei preferiti.",

		favoriteAdded:
			"Frase salvata.",

        deleteConfirm:
            "Eliminare questa frase?"
    },


    es: {

        title: "Mis frases",

        starters: {

            wouldLike: {
                label: "QUISIERA…",
                text: "Quisiera "
            },

            need: {
                label: "NECESITO…",
                text: "Necesito "
            },

            want: {
                label: "QUIERO…",
                text: "Quiero "
            },

            dontWant: {
                label: "NO QUIERO…",
                text: "No quiero "
            },

            canYou: {
                label: "¿PUEDE…?",
                text: "Puede "
            },

            helpMe: {
                label: "AYÚDEME A…",
                text: "Ayúdeme a "
            },

            when: {
                label: "¿CUÁNDO…?",
                text: "Cuándo "
            },

            why: {
                label: "¿POR QUÉ…?",
                text: "Por qué "
            },

            isIt: {
                label: "¿ES…?",
                text: "Es "
            },

            think: {
                label: "CREO QUE…",
                text: "Creo que "
            }
        },

        placeholder:
            "Escriba aquí lo que quiere decir...",

        clear:
            "🗑️ BORRAR",

        speak:
            "🔊 DECIR",

        save:
            "⭐ GUARDAR",

        personalTitle:
            "Mis frases personales",

        noFavorites:
            "Todavía no hay frases personales.",

        duplicateFavorite:
            "Esta frase ya está en sus favoritos.",

        favoriteAdded:
            "Frase guardada.",

        deleteConfirm:
            "¿Eliminar esta frase?"
    },


    pt: {

        title: "As minhas frases",

        starters: {

            wouldLike: {
                label: "GOSTARIA DE…",
                text: "Gostaria de "
            },

            need: {
                label: "PRECISO DE…",
                text: "Preciso de "
            },

            want: {
                label: "QUERO…",
                text: "Quero "
            },

            dontWant: {
                label: "NÃO QUERO…",
                text: "Não quero "
            },

            canYou: {
                label: "PODE…?",
                text: "Pode "
            },

            helpMe: {
                label: "AJUDE-ME A…",
                text: "Ajude-me a "
            },

            when: {
                label: "QUANDO…?",
                text: "Quando "
            },

            why: {
                label: "PORQUÊ…?",
                text: "Porquê "
            },

            isIt: {
                label: "É…?",
                text: "É "
            },

            think: {
                label: "PENSO QUE…",
                text: "Penso que "
            }
        },

        placeholder:
            "Escreva aqui o que quer dizer...",

        clear:
            "🗑️ APAGAR",

        speak:
            "🔊 DIZER",

        save:
            "⭐ GUARDAR",

        personalTitle:
            "As minhas frases pessoais",

        noFavorites:
            "Ainda não há frases pessoais.",

        duplicateFavorite:
            "Esta frase já está nos favoritos.",

        favoriteAdded:
            "Frase guardada.",

        deleteConfirm:
            "Eliminar esta frase?"
    }

};

function updateWriteLanguage() {

    const translation =
        WRITE_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "writeTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const starters = {

        writeWouldLikeButton:
            translation.starters.wouldLike.label,

        writeNeedButton:
            translation.starters.need.label,

        writeWantButton:
            translation.starters.want.label,

        writeDontWantButton:
            translation.starters.dontWant.label,

        writeCanYouButton:
            translation.starters.canYou.label,

        writeHelpMeButton:
            translation.starters.helpMe.label,

        writeWhenButton:
            translation.starters.when.label,

        writeWhyButton:
            translation.starters.why.label,

        writeIsItButton:
            translation.starters.isIt.label,

        writeThinkButton:
            translation.starters.think.label
    };

    Object.entries(starters).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.textContent =
                    entry[1];
            }
        }
    );

    const textArea =
        document.getElementById(
            "customText"
        );

    if (textArea) {
        textArea.placeholder =
            translation.placeholder;
    }

    const clearButton =
        document.getElementById(
            "writeClearButton"
        );

    if (clearButton) {
        clearButton.textContent =
            translation.clear;
    }

    const speakButton =
        document.getElementById(
            "writeSpeakButton"
        );

    if (speakButton) {
        speakButton.textContent =
            translation.speak;
    }

    const saveButton =
        document.getElementById(
            "writeSaveButton"
        );

    if (saveButton) {
        saveButton.textContent =
            translation.save;
    }

    const personalTitle =
        document.getElementById(
            "writePersonalTitle"
        );

    if (personalTitle) {
        personalTitle.textContent =
            translation.personalTitle;
    }

    renderCustomFavorites();
}


function addQuickText(phraseKey) {

    const translation =
        WRITE_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation.starters[
            phraseKey
        ];

    if (!phrase) {
        return;
    }

    addText(
        phrase.text
    );
}

function updateTalkLanguage() {

    const translation =
        TALK_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "talkTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        talkHelloButton:
            translation.hello.label,

        talkSeeYouButton:
            translation.seeYou.label,

        talkHappyToSeeButton:
            translation.happyToSee.label,

        talkMissedYouButton:
            translation.missedYou.label,

        talkLoveYouButton:
            translation.loveYou.label,

        talkThankYouButton:
            translation.thankYou.label,

        talkSorryButton:
            translation.sorry.label,

        talkDontWorryButton:
            translation.dontWorry.label,

        talkStayLongerButton:
            translation.stayLonger.label,

        talkTellMeButton:
            translation.tellMe.label,

        talkDoingWellButton:
            translation.doingWell.label,

        talkTiredButOkayButton:
            translation.tiredButOkay.label,

        talkDontKnowButton:
            translation.dontKnow.label,

        talkChangeSubjectButton:
            translation.changeSubject.label

    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakTalkPhrase(phraseKey) {

    const translation =
        TALK_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateUnderstandLanguage() {

    const translation =
        UNDERSTAND_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "understandTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        understandWaitButton:
            translation.wait.label,

        understandChoicesButton:
            translation.choices.label,

        understandNotUnderstandButton:
            translation.notUnderstand.label,

        understandWriteButton:
            translation.write.label,

        understandLouderButton:
            translation.louder.label,

        understandSlowerButton:
            translation.slower.label,

        understandYesNoButton:
            translation.yesNo.label,

        understandRepeatButton:
            translation.repeat.label,

        understandOneQuestionButton:
            translation.oneQuestion.label,

        understandMisunderstoodButton:
            translation.misunderstood.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakUnderstandPhrase(phraseKey) {

    const translation =
        UNDERSTAND_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateEnvironmentLanguage() {

    const translation =
        ENVIRONMENT_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "environmentTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        environmentCloseDoorButton:
            translation.closeDoor.label,

        environmentOpenDoorButton:
            translation.openDoor.label,

        environmentCloseCurtainsButton:
            translation.closeCurtains.label,

        environmentOpenCurtainsButton:
            translation.openCurtains.label,

        environmentLightOnButton:
            translation.lightOn.label,

        environmentLightOffButton:
            translation.lightOff.label,

        environmentNoiseButton:
            translation.noise.label,

        environmentOpenWindowButton:
            translation.openWindow.label,

        environmentCloseWindowButton:
            translation.closeWindow.label,

        environmentTelevisionButton:
            translation.television.label,

        environmentMusicButton:
            translation.music.label,

        environmentPhoneButton:
            translation.phone.label,

        environmentRechargePhoneButton:
            translation.rechargePhone.label,

        environmentSleepButton:
            translation.sleep.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakEnvironmentPhrase(phraseKey) {

    const translation =
        ENVIRONMENT_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateQuestionsLanguage() {

    const translation =
        QUESTIONS_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "questionsTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        questionsWhatHappenedButton:
            translation.whatHappened.label,

        questionsInjuriesButton:
            translation.injuries.label,

        questionsImprovingButton:
            translation.improving.label,

        questionsConcernButton:
            translation.concern.label,

        questionsNextGoalButton:
            translation.nextGoal.label,

        questionsExamsButton:
            translation.exams.label,

        questionsResultsWhenButton:
            translation.resultsWhen.label,

        questionsResultsMeaningButton:
            translation.resultsMeaning.label,

        questionsSpeakWhenButton:
            translation.speakWhen.label,

        questionsSpeakNormallyButton:
            translation.speakNormally.label,

        questionsTracheostomyHowLongButton:
            translation.tracheostomyHowLong.label,

        questionsEatWhenButton:
            translation.eatWhen.label,

        questionsStandWhenButton:
            translation.standWhen.label,

        questionsWalkWhenButton:
            translation.walkWhen.label,

        questionsRehabilitationButton:
            translation.rehabilitation.label,

        questionsLeaveICUButton:
            translation.leaveICU.label,

        questionsLeaveHospitalButton:
            translation.leaveHospital.label,

        questionsGoHomeButton:
            translation.goHome.label,

        questionsImproveBeforeHomeButton:
            translation.improveBeforeHome.label,

        questionsExplainNextButton:
            translation.explainNext.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakQuestionsPhrase(phraseKey) {

    const translation =
        QUESTIONS_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateEmotionLanguage() {

    const translation =
        EMOTION_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "emotionTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        emotionAfraidButton:
            translation.afraid.label,

        emotionSadButton:
            translation.sad.label,

        emotionAngryButton:
            translation.angry.label,

        emotionFedUpButton:
            translation.fedUp.label,

        emotionDiscouragedButton:
            translation.discouraged.label,

        emotionLonelyButton:
            translation.lonely.label,

        emotionTiredButton:
            translation.tired.label,

        emotionBoredButton:
            translation.bored.label,

        emotionHappyButton:
            translation.happy.label,

        emotionBetterButton:
            translation.better.label,

        emotionStayButton:
            translation.stay.label,

        emotionAloneButton:
            translation.alone.label,

        emotionNoTalkButton:
            translation.noTalk.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakEmotionPhrase(phraseKey) {

    const translation =
        EMOTION_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateCareTeamLanguage() {

    const translation =
        CARE_TEAM_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "careTeamTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        careTeamNurseButton:
            translation.nurse.label,

        careTeamDoctorButton:
            translation.doctor.label,

        careTeamPhysioButton:
            translation.physio.label,

        careTeamErgoButton:
            translation.ergo.label,

        careTeamLogoButton:
            translation.logo.label,

        careTeamAssistantButton:
            translation.assistant.label,

        careTeamDietitianButton:
            translation.dietitian.label,

        careTeamNeuropsychologistButton:
            translation.neuropsychologist.label,

        careTeamPsychologistButton:
            translation.psychologist.label,

        careTeamSocialWorkerButton:
            translation.socialWorker.label,

        careTeamHospitalityButton:
            translation.hospitality.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakCareTeamPhrase(phraseKey) {

    const translation =
        CARE_TEAM_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateHygieneLanguage() {

    const translation =
        HYGIENE_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "hygieneTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        hygieneChangeButton:
            translation.change.label,

        hygieneUrinateButton:
            translation.urinate.label,

        hygieneStoolButton:
            translation.stool.label,

        hygieneHungryButton:
            translation.hungry.label,

        hygieneThirstyButton:
            translation.thirsty.label,

        hygieneShowerButton:
            translation.shower.label,

        hygieneTeethButton:
            translation.teeth.label,

        hygieneFaceButton:
            translation.face.label,

        hygieneShaveButton:
            translation.shave.label,

        hygieneCombButton:
            translation.comb.label,

        hygieneGlassesButton:
            translation.glasses.label,

        hygieneHearingAidButton:
            translation.hearingAid.label,

        hygieneDenturesButton:
            translation.dentures.label,

        hygieneTshirtButton:
            translation.tshirt.label,

        hygienePantsButton:
            translation.pants.label,

        hygieneSweaterButton:
            translation.sweater.label,

        hygieneShoesButton:
            translation.shoes.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakHygienePhrase(phraseKey) {

    const translation =
        HYGIENE_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateCareLanguage() {

    const translation =
        CARE_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "careTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        careHelpButton:
            translation.help.label,

        careUnwellButton:
            translation.unwell.label,

        careBetterButton:
            translation.better.label,

        carePrivacyButton:
            translation.privacy.label,

        careConstipationButton:
            translation.constipation.label,

        careGasButton:
            translation.gas.label,

        careDiarrheaButton:
            translation.diarrhea.label,

        careNauseaButton:
            translation.nausea.label,

        careVomitButton:
            translation.vomit.label,

        careDizzinessButton:
            translation.dizziness.label,

        careWeaknessButton:
            translation.weakness.label,

        careChillsButton:
            translation.chills.label,

        careMedicationNotEnoughButton:
            translation.medicationNotEnough.label,

        careHotButton:
            translation.hot.label,

        careColdButton:
            translation.cold.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakCarePhrase(phraseKey) {

    const translation =
        CARE_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updatePositionLanguage() {

    const translation =
        POSITION_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }

    const title =
        document.getElementById(
            "positionTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }

    const elements = {

        positionBedButton:
            translation.bed.label,

        positionChairButton:
            translation.chair.label,

        positionMoveUpButton:
            translation.moveUp.label,

        positionTurnLeftButton:
            translation.turnLeft.label,

        positionTurnRightButton:
            translation.turnRight.label,

        positionSitUpButton:
            translation.sitUp.label,

        positionHeadUpButton:
            translation.headUp.label,

        positionHeadDownButton:
            translation.headDown.label,

        positionLegsUpButton:
            translation.legsUp.label,

        positionLegsDownButton:
            translation.legsDown.label,

        positionPillowButton:
            translation.pillow.label,

        positionBlanketButton:
            translation.blanket.label,

        positionHurtsButton:
            translation.positionHurts.label,

        positionComfortableButton:
            translation.comfortable.label
    };

    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.innerHTML =
                    entry[1];
            }
        }
    );
}


function speakPositionPhrase(phraseKey) {

    const translation =
        POSITION_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }

    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }

    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updatePainLanguage() {

    const translation =
        PAIN_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById(
            "painTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }


    const whereTitle =
        document.getElementById(
            "painWhereTitle"
        );

    if (whereTitle) {
        whereTitle.textContent =
            translation.where;
    }


    const changeButton =
        document.getElementById(
            "painChangeLocationButton"
        );

    if (changeButton) {
        changeButton.textContent =
            translation.changeLocation;
    }


    const locationElements = {

        painLocationHead:
            "head",

        painLocationNeck:
            "neck",

        painLocationThroat:
            "throat",

        painLocationChest:
            "chest",

        painLocationBack:
            "back",

        painLocationAbdomen:
            "abdomen",

        painLocationLeftShoulder:
            "leftShoulder",

        painLocationRightShoulder:
            "rightShoulder",

        painLocationLeftArm:
            "leftArm",

        painLocationRightArm:
            "rightArm",

        painLocationLeftHand:
            "leftHand",

        painLocationRightHand:
            "rightHand",

        painLocationLeftHip:
            "leftHip",

        painLocationRightHip:
            "rightHip",
			
		painLocationButtocks:
            "buttocks",

        painLocationAnus:
            "anus",

        painLocationLeftLeg:
            "leftLeg",

        painLocationRightLeg:
            "rightLeg",

        painLocationLeftFoot:
            "leftFoot",

        painLocationRightFoot:
            "rightFoot"
    };


    Object.entries(locationElements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const locationKey =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            const location =
                PAIN_LOCATIONS[
                    locationKey
                ];

            let label = "";

            if (
                location &&
                location[patientLanguage]
            ) {

                label =
                    location[
                        patientLanguage
                    ].label;
            }
            else if (
                PAIN_LOCATION_PATIENT_LABELS[
                    patientLanguage
                ]
            ) {

                label =
                    PAIN_LOCATION_PATIENT_LABELS[
                        patientLanguage
                    ][
                        locationKey
                    ] || "";
            }

            if (
                element &&
                label
            ) {

                element.innerHTML =
                    label;
            }

        }
    );

	const detailTitle =
		document.getElementById(
			"painDetailTitle"
		);

	if (detailTitle) {
		detailTitle.textContent =
			translation.detail;
	}


	const detailBackButton =
		document.getElementById(
			"painDetailBackButton"
		);

	if (detailBackButton) {
		detailBackButton.textContent =
			translation.changeLocation;
	}


	renderPainDetailButtons();

		updatePainIntensityTitle();
	}

function updatePainIntensityTitle() {

    const title =
        document.getElementById(
            "painLocationTitle"
        );

    if (!title) {
        return;
    }


    const translation =
        PAIN_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    title.textContent =
        translation.intensity;
}

function updateRespirationLanguage() {

    const translation =
        RESPIRATION_TRANSLATIONS[
            patientLanguage
        ];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById(
            "respirationTitle"
        );

    if (title) {
        title.textContent =
            translation.title;
    }


    const elements = {

        respirationBreathingButton:
            translation.breathing.label,

        respirationSuctionButton:
            translation.suction.label,

        respirationSecretionsButton:
            translation.secretions.label,

        respirationBlockedButton:
            translation.blocked.label,

        respirationTracheostomyPainButton:
            translation.tracheostomyPain.label,

        respirationDryMouthButton:
            translation.dryMouth.label,

        respirationBetterButton:
            translation.better.label,

        respirationNotBetterButton:
            translation.notBetter.label

    };


    Object.entries(elements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const html =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            if (element) {
                element.innerHTML =
                    html;
            }

        }
    );
}


function speakRespirationPhrase(phraseKey) {

    const translation =
        RESPIRATION_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }


    const phrase =
        translation[phraseKey];

    if (!phrase) {
        return;
    }


    speak(
        phrase.speech,
        caregiverLanguage
    );
}

function updateHomeLanguage() {

    const translation =
        HOME_TRANSLATIONS[patientLanguage];

    if (!translation) {
        return;
    }


    const title =
        document.getElementById("homeTitleText");

    if (title) {
        title.textContent =
            translation.title;
    }


    const elements = {

        homeRespirationButton:
            translation.respiration,

        homePainButton:
            translation.pain,

        homePositionButton:
            translation.position,

        homeCareButton:
            translation.care,

        homeHygieneButton:
            translation.hygiene,

        homeEnvironmentButton:
            translation.environment,

        homeQuestionsButton:
            translation.questions,

        homeCareTeamButton:
            translation.careTeam,

        homeMovementButton:
            translation.movement,

        homePlanningButton:
            translation.planning,

        homeUnderstandButton:
            translation.understand,

        homeTalkButton:
            translation.talk,

        homeEmotionButton:
            translation.emotions,

        homeRechargeButton:
            translation.recharge,

        homePhrasesButton:
            translation.phrases,

        homeVoiceButton:
            translation.voice,

        homeAboutButton:
            translation.about
    };


    Object.entries(elements).forEach(
        function(entry) {

            const elementId =
                entry[0];

            const html =
                entry[1];

            const element =
                document.getElementById(
                    elementId
                );

            if (element) {
                element.innerHTML =
                    html;
            }

        }
    );
}


function speakHomePhrase(phraseKey) {

    const translation =
        HOME_TRANSLATIONS[
            caregiverLanguage
        ];

    if (!translation) {
        return;
    }


    const speechKey =
        phraseKey + "Speech";


    const text =
        translation[speechKey];

    if (!text) {
        return;
    }


    speak(
        text,
        caregiverLanguage
    );
}

function readLocalSetting(key, fallbackValue = "") {

    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : fallbackValue;
    }
    catch (error) {
        return fallbackValue;
    }
}


function writeLocalSetting(key, value) {

    try {
        localStorage.setItem(key, value);
    }
    catch (error) {
        console.warn(
            "Impossible d’enregistrer le réglage local :",
            key,
            error
        );
    }
}


let availableVoices = [];

let patientLanguage = readLocalSetting(
    LANGUAGE_STORAGE_KEYS.patient,
    "fr"
);

let caregiverLanguage = readLocalSetting(
    LANGUAGE_STORAGE_KEYS.caregiver,
    "fr"
);


if (!PATIENT_LANGUAGES.includes(patientLanguage)) {
    patientLanguage = "fr";
}

if (!SUPPORTED_LANGUAGES.includes(caregiverLanguage)) {
    caregiverLanguage = "fr";
}


function getLanguagePairLabel() {

    return (
        patientLanguage.toUpperCase() +
        "→" +
        caregiverLanguage.toUpperCase()
    );
}

function getVoicesForLanguage(language) {

    return availableVoices.filter(
        function(voice) {

            return voice.lang
                .toLowerCase()
                .startsWith(
                    language.toLowerCase()
                );
        }
    );
}

const SPEECH_LANGUAGE_NAMES = {
    fr: "Français",
    en: "English",
    de: "Deutsch",
    it: "Italiano",
    es: "Español",
    pt: "Português"
};

const MISSING_VOICE_TRANSLATIONS = {

    fr: {
        title:
            "Voix de synthèse indisponible",

        message:
            "Aucune voix de synthèse {language} n'est installée ou accessible sur cet appareil.",

        instructions:
            "Pour utiliser cette langue, installez la voix de synthèse correspondante dans les paramètres de l'appareil ou demandez à votre service informatique de l'installer.",

        installButton:
            "COMMENT INSTALLER UNE VOIX",

        chooseButton:
            "CHOISIR UNE AUTRE LANGUE",

        closeButton:
            "✕ FERMER",

        availableTitle:
            "Choisissez une langue de vocalisation disponible :",

        noVoice:
            "Aucune voix compatible avec VoxHelp n'est actuellement disponible sur cet appareil.",

        helpTitle:
            "Pour installer une voix :",

        android:
            "ANDROID",

        androidInstructions:
            "Paramètres → Synthèse vocale / Texte par synthèse vocale → langues ou données vocales → télécharger la langue souhaitée.",

        ios:
            "IPHONE / IPAD",

        iosInstructions:
            "Réglages → Accessibilité → Contenu énoncé → Voix → choisir la langue puis télécharger une voix.",

        hospital:
            "Si l'appareil est géré par votre hôpital et que cette modification est bloquée, demandez au service informatique d'installer la voix de synthèse pour vous."
    },


    en: {
        title:
            "Text-to-speech voice unavailable",

        message:
            "No {language} text-to-speech voice is installed or accessible on this device.",

        instructions:
            "To use this language, install the corresponding text-to-speech voice in the device settings or ask your IT department to install it.",

        installButton:
            "HOW TO INSTALL A VOICE",

        chooseButton:
            "CHOOSE ANOTHER LANGUAGE",

        closeButton:
            "✕ CLOSE",

        availableTitle:
            "Choose an available speech language:",

        noVoice:
            "No voice compatible with VoxHelp is currently available on this device.",

        helpTitle:
            "To install a voice:",

        android:
            "ANDROID",

        androidInstructions:
            "Settings → Text-to-speech / Text-to-speech output → languages or voice data → download the required language.",

        ios:
            "IPHONE / IPAD",

        iosInstructions:
            "Settings → Accessibility → Spoken Content → Voices → choose the language, then download a voice.",

        hospital:
            "If this device is managed by your hospital and this setting is blocked, ask your IT department to install the text-to-speech voice for you."
    },


    de: {
        title:
            "Sprachausgabe nicht verfügbar",

        message:
            "Auf diesem Gerät ist keine {language} Sprachausgabe installiert oder verfügbar.",

        instructions:
            "Um diese Sprache zu verwenden, installieren Sie die entsprechende Sprachausgabe in den Geräteeinstellungen oder bitten Sie Ihre IT-Abteilung, sie zu installieren.",

        installButton:
            "SPRACHE INSTALLIEREN",

        chooseButton:
            "ANDERE SPRACHE WÄHLEN",

        closeButton:
            "✕ SCHLIESSEN",

        availableTitle:
            "Wählen Sie eine verfügbare Sprache für die Sprachausgabe:",

        noVoice:
            "Auf diesem Gerät ist derzeit keine mit VoxHelp kompatible Sprachausgabe verfügbar.",

        helpTitle:
            "So installieren Sie eine Stimme:",

        android:
            "ANDROID",

        androidInstructions:
            "Einstellungen → Text-in-Sprache / Sprachausgabe → Sprachen oder Sprachdaten → gewünschte Sprache herunterladen.",

        ios:
            "IPHONE / IPAD",

        iosInstructions:
            "Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Sprache auswählen und eine Stimme herunterladen.",

        hospital:
            "Wenn dieses Gerät von Ihrem Krankenhaus verwaltet wird und diese Änderung gesperrt ist, bitten Sie die IT-Abteilung, die Sprachausgabe für Sie zu installieren."
    },


    it: {
        title:
            "Voce di sintesi non disponibile",

        message:
            "Nessuna voce di sintesi {language} è installata o accessibile su questo dispositivo.",

        instructions:
            "Per utilizzare questa lingua, installi la voce di sintesi corrispondente nelle impostazioni del dispositivo oppure chieda al servizio informatico di installarla.",

        installButton:
            "COME INSTALLARE UNA VOCE",

        chooseButton:
            "SCEGLIERE UN'ALTRA LINGUA",

        closeButton:
            "✕ CHIUDI",

        availableTitle:
            "Scelga una lingua di vocalizzazione disponibile:",

        noVoice:
            "Nessuna voce compatibile con VoxHelp è attualmente disponibile su questo dispositivo.",

        helpTitle:
            "Per installare una voce:",

        android:
            "ANDROID",

        androidInstructions:
            "Impostazioni → Sintesi vocale / Output sintesi vocale → lingue o dati vocali → scaricare la lingua desiderata.",

        ios:
            "IPHONE / IPAD",

        iosInstructions:
            "Impostazioni → Accessibilità → Contenuto letto ad alta voce → Voci → scegliere la lingua e scaricare una voce.",

        hospital:
            "Se il dispositivo è gestito dall'ospedale e questa modifica è bloccata, chieda al servizio informatico di installare la voce di sintesi."
    }

};

const VOICE_SCREEN_TRANSLATIONS = {

    fr: {
        title: "Langues / Voix",
        back: "← RETOUR",
        patientTitle: "Langue du patient",
        patientHelp: "pour les boutons des écrans.",
        caregiverTitle: "Langue du soignant",
        caregiverHelp: "pour la prononciation des phrases.",
        test: "🔊 TESTER LA VOIX",
        voiceAvailable: "✓ Voix {language} disponible hors connexion.",
        voiceOnline: "⚠️ Voix {language} détectée, mais son fonctionnement hors connexion n'est pas garanti.",
        voiceMissing: "⚠️ Aucune voix {language} détectée sur cet appareil."
    },

    en: {
        title: "Languages / Voice",
        back: "← BACK",
        patientTitle: "Patient language",
        patientHelp: "for the buttons on the screens.",
        caregiverTitle: "Caregiver language",
        caregiverHelp: "for spoken phrases.",
        test: "🔊 TEST VOICE",
        voiceAvailable: "✓ {language} voice available offline.",
        voiceOnline: "⚠️ {language} voice detected, but offline operation is not guaranteed.",
        voiceMissing: "⚠️ No {language} voice detected on this device."
    },

    de: {
        title: "Sprachen / Stimme",
        back: "← ZURÜCK",
        patientTitle: "Sprache des Patienten",
        patientHelp: "für die Schaltflächen auf den Bildschirmen.",
        caregiverTitle: "Sprache der Pflegeperson",
        caregiverHelp: "für die Aussprache der Sätze.",
        test: "🔊 STIMME TESTEN",
        voiceAvailable: "✓ {language} Stimme ist offline verfügbar.",
        voiceOnline: "⚠️ {language} Stimme erkannt, aber die Offline-Nutzung ist nicht garantiert.",
        voiceMissing: "⚠️ Keine {language} Stimme auf diesem Gerät erkannt."
    },

    it: {
        title: "Lingue / Voce",
        back: "← INDIETRO",
        patientTitle: "Lingua del paziente",
        patientHelp: "per i pulsanti delle schermate.",
        caregiverTitle: "Lingua del personale curante",
        caregiverHelp: "per la pronuncia delle frasi.",
        test: "🔊 PROVA LA VOCE",
        voiceAvailable: "✓ Voce {language} disponibile offline.",
        voiceOnline: "⚠️ Voce {language} rilevata, ma il funzionamento offline non è garantito.",
        voiceMissing: "⚠️ Nessuna voce {language} rilevata su questo dispositivo."
    }

};

const ABOUT_SCREEN_TRANSLATIONS = {

    fr: {
        back: "← RETOUR",
        title: "À propos",

        intro:
            "Cette application a pour but d'aider des patients hospitalisés " +
            "avec trachéotomie ou aphones à exprimer leurs besoins et leurs émotions " +
            "auprès du personnel soignant, de leur famille et de leurs proches aidants, " +
            "par la simple pression de boutons très lisibles sur une tablette " +
            "ou un smartphone.",

        free:
            "Cette application est et restera gratuite.",

        contact:
            "Pour toute demande d'amélioration, contacter " +
            "Winfried Windegger par email :",

        shareTitle:
            "Partager VoxHelp",

        shareIntro:
            "Vous souhaitez faire connaître cette application à un collègue " +
            "soignant ou à un proche aidant ?",

        shareInstructions:
            "Activez une connexion Internet, saisissez simplement son adresse " +
            "email puis cliquez sur <strong>PARTAGER</strong>. " +
            "Un message contenant le lien vers l'application et les instructions " +
            "pour l'installer hors connexion sera préparé.",

        emailLabel:
            "Email du destinataire",
			
		recipientLanguage:
			"Langue du destinataire :",

        emailPlaceholder:
            "adresse@email.com",

        shareButton:
            "✉️ PARTAGER",

        previewTitle:
            "Message prêt à envoyer",

        recipient:
            "DESTINATAIRE",

        subject:
            "OBJET",

        message:
            "MESSAGE",

        openButton:
            "📋 COPIER ET OUVRIR<br>MA MESSAGERIE",

        copyHelp:
            "Si votre messagerie n'insère pas automatiquement le texte, " +
            "celui-ci aura déjà été copié : il suffira de le coller."
    },


    en: {
        back: "← BACK",
        title: "About",

        intro:
            "This application is designed to help hospitalized patients " +
            "with a tracheostomy or who are unable to speak express their needs " +
            "and emotions to healthcare staff, their family and caregivers, " +
            "simply by pressing highly readable buttons on a tablet or smartphone.",

        free:
            "This application is and will remain free.",

        contact:
            "For any suggestion for improvement, contact " +
            "Winfried Windegger by email:",

        shareTitle:
            "Share VoxHelp",

        shareIntro:
            "Would you like to tell a healthcare colleague or caregiver " +
            "about this application?",

        shareInstructions:
            "Connect to the Internet, simply enter their email address " +
            "and tap <strong>SHARE</strong>. " +
            "A message containing the link to the application and instructions " +
            "for installing it for offline use will be prepared.",

        emailLabel:
            "Recipient's email",
			
		recipientLanguage:
			"Recipient language:",

        emailPlaceholder:
            "email@address.com",

        shareButton:
            "✉️ SHARE",

        previewTitle:
            "Message ready to send",

        recipient:
            "RECIPIENT",

        subject:
            "SUBJECT",

        message:
            "MESSAGE",

        openButton:
            "📋 COPY AND OPEN<br>MY EMAIL APP",

        copyHelp:
            "If your email app does not insert the text automatically, " +
            "it will already have been copied: just paste it."
    },


    de: {
        back: "← ZURÜCK",
        title: "Über VoxHelp",

        intro:
            "Diese Anwendung hilft hospitalisierten Patientinnen und Patienten " +
            "mit Tracheotomie oder Personen, die nicht sprechen können, " +
            "ihre Bedürfnisse und Gefühle gegenüber dem Pflegepersonal, " +
            "ihrer Familie und ihren betreuenden Angehörigen auszudrücken – " +
            "durch einfaches Antippen gut lesbarer Schaltflächen auf einem Tablet " +
            "oder Smartphone.",

        free:
            "Diese Anwendung ist und bleibt kostenlos.",

        contact:
            "Für Verbesserungsvorschläge kontaktieren Sie " +
            "Winfried Windegger per E-Mail:",

        shareTitle:
            "VoxHelp teilen",

        shareIntro:
            "Möchten Sie diese Anwendung einer Pflegefachperson, " +
            "einem Kollegen oder einer betreuenden Person empfehlen?",

        shareInstructions:
            "Stellen Sie eine Internetverbindung her, geben Sie einfach die " +
            "E-Mail-Adresse der Person ein und klicken Sie auf <strong>TEILEN</strong>. " +
            "Eine Nachricht mit dem Link zur Anwendung und den Anweisungen " +
            "zur Offline-Installation wird vorbereitet.",

        emailLabel:
            "E-Mail des Empfängers",
			
		recipientLanguage:
			"Sprache des Empfängers:",

        emailPlaceholder:
            "adresse@email.com",

        shareButton:
            "✉️ TEILEN",

        previewTitle:
            "Nachricht zum Senden bereit",

        recipient:
            "EMPFÄNGER",

        subject:
            "BETREFF",

        message:
            "NACHRICHT",

        openButton:
            "📋 KOPIEREN UND<br>E-MAIL ÖFFNEN",

        copyHelp:
            "Wenn Ihr E-Mail-Programm den Text nicht automatisch einfügt, " +
            "wurde er bereits kopiert: Sie müssen ihn nur noch einfügen."
    },


    it: {
        back: "← INDIETRO",
        title: "Informazioni",

        intro:
            "Questa applicazione ha lo scopo di aiutare i pazienti ricoverati " +
            "con tracheostomia o impossibilitati a parlare a esprimere i propri " +
            "bisogni e le proprie emozioni al personale sanitario, alla famiglia " +
            "e alle persone che li assistono, semplicemente premendo pulsanti " +
            "molto leggibili su un tablet o uno smartphone.",

        free:
            "Questa applicazione è e rimarrà gratuita.",

        contact:
            "Per qualsiasi suggerimento di miglioramento, contattare " +
            "Winfried Windegger via email:",

        shareTitle:
            "Condividi VoxHelp",

        shareIntro:
            "Vuoi far conoscere questa applicazione a un collega del personale " +
            "sanitario o a una persona che presta assistenza?",

        shareInstructions:
            "Attiva una connessione Internet, inserisci semplicemente il suo " +
            "indirizzo email e premi <strong>CONDIVIDI</strong>. " +
            "Verrà preparato un messaggio con il link all'applicazione e le " +
            "istruzioni per installarla e usarla offline.",

        emailLabel:
            "Email del destinatario",
			
		recipientLanguage:
			"Lingua del destinatario:",

        emailPlaceholder:
            "indirizzo@email.com",

        shareButton:
            "✉️ CONDIVIDI",

        previewTitle:
            "Messaggio pronto per l'invio",

        recipient:
            "DESTINATARIO",

        subject:
            "OGGETTO",

        message:
            "MESSAGGIO",

        openButton:
            "📋 COPIA E APRI<br>L'APP EMAIL",

        copyHelp:
            "Se l'app email non inserisce automaticamente il testo, " +
            "questo sarà già stato copiato: basterà incollarlo."
    }

};

function hasVoiceForLanguage(language) {

    return (
        getVoicesForLanguage(language)
            .length > 0
    );
}


function getAvailableSpeechLanguages() {

    return SUPPORTED_LANGUAGES.filter(
        function(language) {

            return hasVoiceForLanguage(
                language
            );
        }
    );
}

let missingVoiceLanguage = null;


function openMissingVoiceModal(language) {

    const modal =
        document.getElementById(
            "missingVoiceModal"
        );

    if (!modal) {
        return;
    }


    missingVoiceLanguage =
        language;


    /*
       Le popup est affiché dans la langue
       de vocalisation demandée par le soignant.
       L'anglais sert uniquement de secours.
    */

	const popupLanguage =
		SUPPORTED_LANGUAGES.includes(language)
			? language
			: caregiverLanguage;

	const translation =
		MISSING_VOICE_TRANSLATIONS[
			popupLanguage
		] ||
		MISSING_VOICE_TRANSLATIONS.en;


    const languageName =
        SPEECH_LANGUAGE_NAMES[
            language
        ] ||
        language;


    const title =
        document.getElementById(
            "missingVoiceTitle"
        );

    if (title) {
        title.textContent =
            translation.title +
            " : " +
            languageName;
    }


    const message =
        document.getElementById(
            "missingVoiceMessage"
        );

    if (message) {
        message.textContent =
            translation.message.replace(
                "{language}",
                languageName
            );
    }


    const instructions =
        document.getElementById(
            "missingVoiceInstructions"
        );

    if (instructions) {
        instructions.textContent =
            translation.instructions;
    }


    const helpButton =
        document.getElementById(
            "missingVoiceHelpButton"
        );

    if (helpButton) {
        helpButton.textContent =
            translation.installButton;
    }


	const chooseButton =
		document.getElementById(
			"missingVoiceChooseButton"
		);

	if (chooseButton) {

		chooseButton.textContent =
			translation.chooseButton;

		chooseButton.hidden =
			!SUPPORTED_LANGUAGES.includes(
				language
			);
	}


    const closeButton =
        document.getElementById(
            "missingVoiceCloseButton"
        );

    if (closeButton) {
        closeButton.textContent =
            translation.closeButton;
    }


    updateMissingVoiceStatus();


    const availableContainer =
        document.getElementById(
            "availableVoiceLanguages"
        );

    if (availableContainer) {
        availableContainer.hidden = true;
        availableContainer.innerHTML = "";
    }


    const help =
        document.getElementById(
            "voiceInstallationHelp"
        );

    if (help) {
        help.hidden = true;
        help.innerHTML = "";
    }


    modal.hidden = false;

    document.body.style.overflow =
        "hidden";
}

function closeMissingVoiceModal() {

    const modal =
        document.getElementById(
            "missingVoiceModal"
        );

    if (!modal) {
        return;
    }


    modal.hidden = true;

    document.body.style.overflow =
        "";


    /*
       Si la langue actuelle du soignant
       n'est pas vocalisable, on revient
       automatiquement à une langue
       réellement disponible.
    */

    if (
        !hasVoiceForLanguage(
            caregiverLanguage
        )
    ) {

        const availableLanguages =
            getAvailableSpeechLanguages();


        let fallbackLanguage = null;


        /*
           Priorité :
           utiliser la langue du patient
           si une voix correspondante existe.
        */

        if (
            availableLanguages.includes(
                patientLanguage
            )
        ) {

            fallbackLanguage =
                patientLanguage;
        }


        /*
           Sinon :
           première langue réellement disponible.
        */

        else if (
            availableLanguages.length > 0
        ) {

            fallbackLanguage =
                availableLanguages[0];
        }


        if (fallbackLanguage) {

            caregiverLanguage =
                fallbackLanguage;


            writeLocalSetting(
                LANGUAGE_STORAGE_KEYS.caregiver,
                caregiverLanguage
            );


            updateLanguageButtons();

            updateCaregiverVoiceStatus();

            updateTopRightButton(
                "voiceScreen"
            );
        }
    }


    missingVoiceLanguage = null;
}


function updateMissingVoiceStatus() {

    const container =
        document.getElementById(
            "missingVoiceStatus"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    SUPPORTED_LANGUAGES.forEach(
        function(language) {

            const line =
                document.createElement("div");


            const available =
                hasVoiceForLanguage(
                    language
                );


            line.textContent =
                (
                    available
                        ? "✓ "
                        : "✗ "
                ) +
                SPEECH_LANGUAGE_NAMES[
                    language
                ];


            container.appendChild(
                line
            );
        }
    );
}


function showAvailableVoiceLanguages() {

    const container =
        document.getElementById(
            "availableVoiceLanguages"
        );

    if (!container) {
        return;
    }


	const popupLanguage =
		SUPPORTED_LANGUAGES.includes(
			missingVoiceLanguage
		)
			? missingVoiceLanguage
			: caregiverLanguage;

	const translation =
		MISSING_VOICE_TRANSLATIONS[
			popupLanguage
		] ||
		MISSING_VOICE_TRANSLATIONS.en;


    const help =
        document.getElementById(
            "voiceInstallationHelp"
        );

    if (help) {
        help.hidden = true;
    }


    container.innerHTML = "";


    const languages =
        getAvailableSpeechLanguages();


    if (languages.length === 0) {

        const message =
            document.createElement("p");

        message.textContent =
            translation.noVoice;

        container.appendChild(
            message
        );

        container.hidden = false;

        return;
    }


    const title =
        document.createElement("p");

    title.textContent =
        translation.availableTitle;

    container.appendChild(
        title
    );


    languages.forEach(
        function(language) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.textContent =
                SPEECH_LANGUAGE_NAMES[
                    language
                ];


            button.onclick =
                function() {

                    selectAvailableVoiceLanguage(
                        language
                    );
                };


            container.appendChild(
                button
            );
        }
    );


    container.hidden = false;
}


function selectAvailableVoiceLanguage(language) {

    if (
        !SUPPORTED_LANGUAGES.includes(
            language
        )
    ) {
        return;
    }


    if (
        !hasVoiceForLanguage(
            language
        )
    ) {
        return;
    }


    closeMissingVoiceModal();


    chooseCaregiverLanguage(
        language
    );
}


function showVoiceInstallationHelp() {

    const help =
        document.getElementById(
            "voiceInstallationHelp"
        );

    if (!help) {
        return;
    }


	const popupLanguage =
		SUPPORTED_LANGUAGES.includes(
			missingVoiceLanguage
		)
			? missingVoiceLanguage
			: caregiverLanguage;

	const translation =
		MISSING_VOICE_TRANSLATIONS[
			popupLanguage
		] ||
		MISSING_VOICE_TRANSLATIONS.en;


    const availableContainer =
        document.getElementById(
            "availableVoiceLanguages"
        );

    if (availableContainer) {
        availableContainer.hidden = true;
    }


    help.innerHTML =
        "<strong>" +
        translation.helpTitle +
        "</strong>" +

        "<br><br>" +

        "<strong>" +
        translation.android +
        "</strong><br>" +

        translation.androidInstructions +

        "<br><br>" +

        "<strong>" +
        translation.ios +
        "</strong><br>" +

        translation.iosInstructions +

        "<br><br>" +

        translation.hospital;


    help.hidden = false;
}

function checkCaregiverVoiceAvailability() {

    /*
       Certaines plateformes chargent
       les voix avec un léger retard.
       Tant que la liste est vide,
       on ne conclut pas qu'une voix manque.
    */

    if (availableVoices.length === 0) {
        return;
    }


    updateCaregiverVoiceStatus();


    if (
        !hasVoiceForLanguage(
            caregiverLanguage
        )
    ) {

        openMissingVoiceModal(
            caregiverLanguage
        );
    }
}

function getAutomaticVoice(language) {

    const voices =
        getVoicesForLanguage(language);

    if (voices.length === 0) {
        return null;
    }


    const expectedLocale =
        (
            LANGUAGE_LOCALES[language] ||
            language
        ).toLowerCase();


    /*
       Priorité 1 :
       bonne langue + bon pays + voix locale
    */

    const exactLocalVoice =
        voices.find(
            function(voice) {

                return (
                    voice.localService === true &&
                    voice.lang.toLowerCase() ===
                        expectedLocale
                );
            }
        );

    if (exactLocalVoice) {
        return exactLocalVoice;
    }


    /*
       Priorité 2 :
       n'importe quelle voix locale
       dans la bonne langue
    */

    const localVoice =
        voices.find(
            function(voice) {
                return voice.localService === true;
            }
        );

    if (localVoice) {
        return localVoice;
    }


    /*
       Priorité 3 :
       bonne langue + bon pays
    */

    const exactVoice =
        voices.find(
            function(voice) {

                return (
                    voice.lang.toLowerCase() ===
                    expectedLocale
                );
            }
        );

    if (exactVoice) {
        return exactVoice;
    }


    /*
       Dernier recours :
       première voix trouvée dans la langue
    */

    return voices[0];
}

function updateQuickBarLanguage() {

    const yesButton =
        document.getElementById(
            "quickYesButton"
        );

    const noButton =
        document.getElementById(
            "quickNoButton"
        );

    const stopButton =
        document.getElementById(
            "quickStopButton"
        );


    if (yesButton) {
        yesButton.textContent =
            QUICK_PHRASES.yes[
                patientLanguage
            ].label;
    }


    if (noButton) {
        noButton.textContent =
            QUICK_PHRASES.no[
                patientLanguage
            ].label;
    }


    if (stopButton) {
        stopButton.textContent =
            QUICK_PHRASES.stop[
                patientLanguage
            ].label;
    }
}


function speakQuickPhrase(phraseKey) {

    const phrase =
        QUICK_PHRASES[phraseKey];

    if (!phrase) {
        return;
    }


    const translation =
        phrase[caregiverLanguage];

    if (!translation) {
        return;
    }


    speak(
        translation.speech,
        caregiverLanguage
    );
}

function speak(text, language = "fr") {

    if (!text) {
        return;
    }


    window.speechSynthesis.cancel();


    const message =
        new SpeechSynthesisUtterance(text);


    const selectedVoice =
        getAutomaticVoice(language);


    /*
       SÉCURITÉ :
       aucune voix d'une autre langue
       ne doit être utilisée par défaut.
    */

    if (!selectedVoice) {

        openMissingVoiceModal(
            language
        );

        return;
    }


    message.voice =
        selectedVoice;

    message.lang =
        selectedVoice.lang;

    message.rate =
        0.9;


    window.speechSynthesis.speak(
        message
    );
}

function handleTopRightButton() {

    const activeScreen =
        document.querySelector(".screen.active");

	if (
		!activeScreen ||
		activeScreen.id === "homeScreen"
	) {
		openVoiceScreen();
		return;
	}

    const backButton =
        activeScreen.querySelector(".back-button");

    if (backButton) {
        backButton.click();
    }
	else {
        showScreen("homeScreen");
    }
}

function updateTopRightButton(screenId) {

    const button =
        document.getElementById("topRightButton");

    if (!button) {
        return;
    }


    if (screenId === "homeScreen") {

        button.textContent =
            getLanguagePairLabel();

        button.classList.remove(
            "emergency"
        );

        button.classList.remove(
            "return-mode"
        );

    }
    else {

        button.textContent =
            "↶";

        button.classList.remove(
            "emergency"
        );

        button.classList.add(
            "return-mode"
        );

    }
}

function showScreen(screenId) {

    const selectedScreen = document.getElementById(screenId);

    if (!selectedScreen) {
        console.error("Écran introuvable :", screenId);
        return;
    }

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    selectedScreen.classList.add("active");

	updateTopRightButton(screenId);

    window.scrollTo(0, 0);
}

function openWriteScreen() {

    renderCustomFavorites();

    showScreen("writeScreen");
}

function loadAvailableVoices() {

    availableVoices =
        window.speechSynthesis.getVoices();
}

function openVoiceScreen() {

    loadAvailableVoices();

    showScreen("voiceScreen");

    updateLanguageButtons();
	
	updateVoiceScreenLanguage();
	
	updateCaregiverVoiceStatus();
	
}

function choosePatientLanguage(language) {

	if (!PATIENT_LANGUAGES.includes(language)) {
        return;
    }

    patientLanguage =
        language;

    writeLocalSetting(
        LANGUAGE_STORAGE_KEYS.patient,
        patientLanguage
    );

    updateLanguageButtons();
	
	updateQuickBarLanguage();
	
	updateHomeLanguage();
	
	updateRespirationLanguage();
	
	updatePainLanguage();
	
	updatePositionLanguage();
	
	updateCareLanguage();
	
	updateCareTeamLanguage();
	
	updateHygieneLanguage();
	
	updateEmotionLanguage();
	
	updateQuestionsLanguage();
	
	updateEnvironmentLanguage();
	
	updateUnderstandLanguage();
	
	updateTalkLanguage();
	
	updateWriteLanguage();
	
	updateVoiceScreenLanguage();
	
	updateAboutScreenLanguage();
	
	updateCaregiverVoiceStatus();

    updateTopRightButton("voiceScreen");
}


function chooseCaregiverLanguage(language) {

    if (
        !SUPPORTED_LANGUAGES.includes(
            language
        )
    ) {
        return;
    }


    /*
       Recharge la liste réelle des voix
       disponibles sur l'appareil.
    */

    loadAvailableVoices();


    /*
       Si aucune voix correspondant à la
       langue choisie n'existe, on refuse
       la sélection et on affiche l'aide.
    */

    if (
        !hasVoiceForLanguage(
            language
        )
    ) {

        openMissingVoiceModal(
            language
        );

        return;
    }


    caregiverLanguage =
        language;


    writeLocalSetting(
        LANGUAGE_STORAGE_KEYS.caregiver,
        caregiverLanguage
    );


    updateLanguageButtons();
	
	updateVoiceScreenLanguage();
	
	updateAboutScreenLanguage();

    updateCaregiverVoiceStatus();

    updateTopRightButton(
        "voiceScreen"
    );
}


function updateLanguageButtons() {

    const patientButtons =
        document.querySelectorAll(
            "[data-patient-language]"
        );

    const caregiverButtons =
        document.querySelectorAll(
            "[data-caregiver-language]"
        );


    patientButtons.forEach(
        function(button) {

            button.classList.toggle(
                "language-active",
                button.dataset.patientLanguage ===
                    patientLanguage
            );
        }
    );


    caregiverButtons.forEach(
        function(button) {

            button.classList.toggle(
                "language-active",
                button.dataset.caregiverLanguage ===
                    caregiverLanguage
            );
        }
    );
}

function updateVoiceScreenLanguage() {

    const translation =
        VOICE_SCREEN_TRANSLATIONS[
            caregiverLanguage
        ] ||
        VOICE_SCREEN_TRANSLATIONS.fr;


    const elements = {
        voiceBackButton:
            translation.back,

        voiceTitle:
            translation.title,

        voicePatientTitle:
            translation.patientTitle,

        voicePatientHelp:
            translation.patientHelp,

        voiceCaregiverTitle:
            translation.caregiverTitle,

        voiceCaregiverHelp:
            translation.caregiverHelp,

        voiceTestButton:
            translation.test
    };


    Object.entries(elements).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.textContent =
                    entry[1];
            }
        }
    );
}

function updateAboutScreenLanguage() {

    const translation =
        ABOUT_SCREEN_TRANSLATIONS[
            caregiverLanguage
        ] ||
        ABOUT_SCREEN_TRANSLATIONS.fr;


    const textElements = {

        aboutBackButton:
            translation.back,

        aboutTitle:
            translation.title,

        aboutIntroText:
            translation.intro,

        aboutFreeText:
            translation.free,

        aboutContactText:
            translation.contact,

        shareTitle:
            translation.shareTitle,

        shareIntroText:
            translation.shareIntro,

        shareEmailLabel:
            translation.emailLabel,
			
		shareRecipientLanguageLabel:
			translation.recipientLanguage,

        shareButton:
            translation.shareButton,

        sharePreviewTitle:
            translation.previewTitle,

        sharePreviewRecipientLabel:
            translation.recipient,

        sharePreviewSubjectLabel:
            translation.subject,

        sharePreviewMessageLabel:
            translation.message,

        shareCopyHelp:
            translation.copyHelp
    };


    Object.entries(
        textElements
    ).forEach(
        function(entry) {

            const element =
                document.getElementById(
                    entry[0]
                );

            if (element) {
                element.textContent =
                    entry[1];
            }
        }
    );


    const instructions =
        document.getElementById(
            "shareInstructionsText"
        );

    if (instructions) {
        instructions.innerHTML =
            translation.shareInstructions;
    }


    const openButton =
        document.getElementById(
            "shareOpenButtonText"
        );

    if (openButton) {
        openButton.innerHTML =
            translation.openButton;
    }


    const emailInput =
        document.getElementById(
            "shareEmail"
        );

    if (emailInput) {
        emailInput.placeholder =
            translation.emailPlaceholder;
    }
}

function updateCaregiverVoiceStatus() {

    const status =
        document.getElementById(
            "caregiverVoiceStatus"
        );

    if (!status) {
        return;
    }


    const voices =
        getVoicesForLanguage(
            caregiverLanguage
        );


    const localVoices =
        voices.filter(
            function(voice) {

                return voice.localService === true;

            }
        );


    const translation =
        VOICE_SCREEN_TRANSLATIONS[
            caregiverLanguage
        ] ||
        VOICE_SCREEN_TRANSLATIONS.fr;


    const languageNames = {

        fr: {
            fr: "française",
            en: "anglaise",
            de: "allemande",
            it: "italienne"
        },

        en: {
            fr: "French",
            en: "English",
            de: "German",
            it: "Italian"
        },

        de: {
            fr: "Französische",
            en: "Englische",
            de: "Deutsche",
            it: "Italienische"
        },

        it: {
            fr: "francese",
            en: "inglese",
            de: "tedesca",
            it: "italiana"
        }

    };


    const languageName =
        (
            languageNames[
                caregiverLanguage
            ] &&
            languageNames[
                caregiverLanguage
            ][
                caregiverLanguage
            ]
        ) ||
        caregiverLanguage;


    status.classList.remove(
        "voice-status-ok",
        "voice-status-warning"
    );


    if (localVoices.length > 0) {

        status.textContent =
            translation.voiceAvailable.replace(
                "{language}",
                languageName
            );

        status.classList.add(
            "voice-status-ok"
        );

        return;
    }


    if (voices.length > 0) {

        status.textContent =
            translation.voiceOnline.replace(
                "{language}",
                languageName
            );

        status.classList.add(
            "voice-status-warning"
        );

        return;
    }


    status.textContent =
        translation.voiceMissing.replace(
            "{language}",
            languageName
        );

    status.classList.add(
        "voice-status-warning"
    );
}

function testCaregiverVoice() {

    const testPhrases = {
        fr: "Bonjour. Voici la voix utilisée par VoxHelp.",
        en: "Hello. This is the voice used by VoxHelp.",
        de: "Hallo. Dies ist die von VoxHelp verwendete Stimme.",
        it: "Buongiorno. Questa è la voce utilizzata da VoxHelp."
    };


    const text =
        testPhrases[caregiverLanguage];

    if (!text) {
        return;
    }


    speak(
        text,
        caregiverLanguage
    );
}

/* Compatibilité voix Android / iPhone */

if (
    "speechSynthesis" in window &&
    typeof window.speechSynthesis.addEventListener === "function"
) {

	window.speechSynthesis.addEventListener(
		"voiceschanged",
		function() {

			loadAvailableVoices();

			checkCaregiverVoiceAvailability();
		}
	);

}


/* Douleur */

let selectedPainLocation = "";
let selectedPainSubLocation = "";


function renderPainDetailButtons() {

    const container =
        document.getElementById(
            "painDetailButtons"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    const details =
        PAIN_SUBLOCATIONS[
            selectedPainLocation
        ];

    if (!details) {
        return;
    }


    Object.entries(details).forEach(
        function(entry) {

            const detailKey =
                entry[0];

            const detail =
                entry[1];

            let label = "";

            if (
                detail.label[
                    patientLanguage
                ]
            ) {

                label =
                    detail.label[
                        patientLanguage
                    ];
            }
            else if (
                PAIN_SUBLOCATION_PATIENT_LABELS[
                    patientLanguage
                ] &&
                PAIN_SUBLOCATION_PATIENT_LABELS[
                    patientLanguage
                ][
                    selectedPainLocation
                ]
            ) {

                label =
                    PAIN_SUBLOCATION_PATIENT_LABELS[
                        patientLanguage
                    ][
                        selectedPainLocation
                    ][
                        detailKey
                    ] || "";
            }

            if (label === "") {
                label =
                    detail.label.fr;
            }


            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.innerHTML =
                label;

            button.onclick =
                function() {
                    selectPainSubLocation(
                        detailKey
                    );
                };


            container.appendChild(
                button
            );
        }
    );
}


function selectPainLocation(locationKey) {

    if (!PAIN_LOCATIONS[locationKey]) {
        return;
    }


    selectedPainLocation =
        locationKey;

    selectedPainSubLocation =
        "";


    document
        .getElementById("painStep1")
        .classList.add("hidden");


    if (PAIN_SUBLOCATIONS[locationKey]) {

        document
            .getElementById("painStep2")
            .classList.add("hidden");

        document
            .getElementById("painStepDetail")
            .classList.remove("hidden");

        renderPainDetailButtons();

        return;
    }


    document
        .getElementById("painStepDetail")
        .classList.add("hidden");

    document
        .getElementById("painStep2")
        .classList.remove("hidden");

    updatePainIntensityTitle();
}


function selectPainSubLocation(detailKey) {

    const details =
        PAIN_SUBLOCATIONS[
            selectedPainLocation
        ];

    if (
        !details ||
        !details[detailKey]
    ) {
        return;
    }


    selectedPainSubLocation =
        detailKey;


    document
        .getElementById("painStepDetail")
        .classList.add("hidden");

    document
        .getElementById("painStep2")
        .classList.remove("hidden");

    updatePainIntensityTitle();
}


function selectPainLevel(level) {

    if (
        selectedPainLocation === "" ||
        !PAIN_LOCATIONS[
            selectedPainLocation
        ]
    ) {
        return;
    }


    let caregiverSpeech = "";


    if (selectedPainSubLocation !== "") {

        const details =
            PAIN_SUBLOCATIONS[
                selectedPainLocation
            ];

        if (
            details &&
            details[
                selectedPainSubLocation
            ]
        ) {

            const detail =
                details[
                    selectedPainSubLocation
                ];

            caregiverSpeech =
                detail.speech[
                    caregiverLanguage
                ] ||
                detail.speech.fr;
        }
    }


    if (caregiverSpeech === "") {

        const location =
            PAIN_LOCATIONS[
                selectedPainLocation
            ];

        const caregiverLocation =
            location[
                caregiverLanguage
            ] ||
            location.fr;

        if (!caregiverLocation) {
            return;
        }

        caregiverSpeech =
            caregiverLocation.speech;
    }


    let sentence = "";


    if (caregiverLanguage === "fr") {

        sentence =
            caregiverSpeech +
            ". Douleur " +
            level +
            " sur 10.";
    }

    else if (caregiverLanguage === "en") {

        sentence =
            caregiverSpeech +
            ". Pain level " +
            level +
            " out of 10.";
    }

    else if (caregiverLanguage === "de") {

        sentence =
            caregiverSpeech +
            ". Schmerzstärke " +
            level +
            " von 10.";
    }

    else if (caregiverLanguage === "it") {

        sentence =
            caregiverSpeech +
            ". Dolore " +
            level +
            " su 10.";
    }


    speak(
        sentence,
        caregiverLanguage
    );
}


function changePainLocation() {

    selectedPainLocation = "";
    selectedPainSubLocation = "";

    document
        .getElementById("painStepDetail")
        .classList.add("hidden");

    document
        .getElementById("painStep2")
        .classList.add("hidden");

    document
        .getElementById("painStep1")
        .classList.remove("hidden");
}


function resetPain() {

    selectedPainLocation = "";
    selectedPainSubLocation = "";

    document
        .getElementById("painStepDetail")
        .classList.add("hidden");

    document
        .getElementById("painStep2")
        .classList.add("hidden");

    document
        .getElementById("painStep1")
        .classList.remove("hidden");
}


function speakCustomText() {

    const text =
        document
            .getElementById("customText")
            .value
            .trim();

    if (text === "") {
        return;
    }

    speak(
        text,
        patientLanguage
    );
}


function clearCustomText() {

    const textArea =
        document.getElementById("customText");

    textArea.value = "";

    textArea.focus();
}


function addText(text) {

    const textArea =
        document.getElementById("customText");

    const currentText = textArea.value;

    if (
        currentText !== "" &&
        !currentText.endsWith(" ")
    ) {
        textArea.value += " ";
    }

    textArea.value += text;

    textArea.focus();

    textArea.setSelectionRange(
        textArea.value.length,
        textArea.value.length
    );
}

/* =========================================
   PARTAGER VoxHelp PAR EMAIL
   ========================================= */

let shareEmailAddress = "";
let shareEmailSubject = "";
let shareEmailBody = "";


const SHARE_EMAIL_TRANSLATIONS = {

    fr: {

        invalidEmail:
            "Veuillez saisir une adresse email valide.",

        ready:
            "Vérifiez le message ci-dessous avant de l'envoyer.",

        copied:
            "Message copié. Ouverture de votre messagerie…",

        opening:
            "Ouverture de votre messagerie… Le message reste affiché ci-dessous.",

        subject:
            "Une app pour faire parler un patient aphone",

        body:
`Vous êtes invité-e à découvrir « VoxHelp », une application gratuite et simple, développée à partir des besoins rencontrés auprès de patients et de soignants en milieu hospitalier à Genève, pour aider les patients avec trachéotomie ou aphones à sortir de leur prison du silence.

Le principe de l'application est très simple :

Le patient dispose de gros boutons correspondant à ce qu'il peut vouloir dire — par exemple Oui, Non, Stop, J'ai mal, Difficulté à respirer, Changez-moi de position, Besoin de soins, Toilettes, Famille / Amis, Émotions, Questions, etc.

Il lui suffit d'appuyer sur un bouton et le téléphone ou la tablette prononce la phrase à sa place, dans l'une des quatre principales langues utilisées dans les hôpitaux suisses : français, allemand, italien et anglais.


SIMPLICITÉ, LÉGÈRETÉ ET CONFIDENTIALITÉ

• L'application ne nécessite aucun compte ; 0 impact sur la confidentialité des données.

• Elle fonctionne sur Android et iPhone, smartphone et tablette, avec un affichage adaptatif à la taille de l'écran.

• Une connexion Internet est nécessaire uniquement pour la première installation et pour les éventuelles mises à jour ultérieures.

• L'application est peu gourmande en stockage : moins de 5 Mo.

• Après son installation, l'application peut fonctionner sans connexion Internet.


VOIX ET LANGUES

VoxHelp utilise les voix de synthèse disponibles sur le téléphone ou la tablette. Pour qu'une langue soit prononcée correctement, la voix de synthèse correspondante doit être installée sur l'appareil.

Sur une tablette personnelle, ces voix peuvent généralement être ajoutées dans les paramètres de langue ou de synthèse vocale de l'appareil.

Mais sur une tablette professionnelle gérée par un hôpital, certaines installations peuvent être bloquées. Dans ce cas, s'il manque une voix de synthèse dans votre langue sur votre tablette, demandez au service informatique de l'établissement de l'installer pour vous.

Pour installer une voix de synthèse dans votre langue :

Sur ANDROID

Paramètres → Synthèse vocale / Texte par synthèse vocale → langues ou données vocales → télécharger la langue souhaitée.

Le chemin exact peut varier selon la marque et la version d'Android.

Sur IPHONE / IPAD

Réglages → Accessibilité → Contenu énoncé → Voix → choisir la langue puis télécharger une voix.


INSTALLATION DE L'APP SUR VOTRE SMARTPHONE / TABLETTE

Accéder à l'application ici :

https://wrelax1.github.io/voxhelp/

Sur IPHONE / IPAD

1. Ouvrir l'adresse ci-dessus avec Safari.
2. Appuyer sur le bouton Partager.
3. Choisir « Ajouter à l'écran d'accueil ».
4. Vérifier que le nom est « VoxHelp », puis appuyer sur « Ajouter ».
5. VoxHelp apparaîtra comme une application normale avec son icône « VoxHelp ».

Sur ANDROID

1. Ouvrir l'adresse ci-dessus avec un navigateur.
2. Appuyer sur les trois points ⋮.
3. Choisir « Installer l'application » ou « Ajouter à l'écran d'accueil ».
4. Valider « VoxHelp ».
5. VoxHelp apparaîtra comme une application normale avec son icône « VoxHelp ».

Redonnons une voix à ceux qui en sont privés.`
    },


    en: {

        invalidEmail:
            "Please enter a valid email address.",

        ready:
            "Please check the message below before sending it.",

        copied:
            "Message copied. Opening your email app…",

        opening:
            "Opening your email app… The message remains displayed below.",

        subject:
            "An app that gives a voice to patients who cannot speak",

        body:
`You are invited to discover VoxHelp, a simple and free application developed from needs identified among patients and healthcare professionals in hospitals in Geneva. It is designed to help patients with a tracheostomy or who are unable to speak communicate and escape the isolation of silence.

The principle is very simple:

The patient has large buttons corresponding to what they may want to say — for example Yes, No, Stop, I am in pain, Difficulty breathing, Change my position, I need care, Toilet, Family / Friends, Emotions, Questions, and more.

The patient simply presses a button and the phone or tablet speaks the phrase for them in one of the four main languages used in Swiss hospitals: French, German, Italian and English.


SIMPLE, LIGHTWEIGHT AND PRIVATE

• The application requires no account and does not collect personal data.

• It works on Android and iPhone, smartphones and tablets, with a display that adapts to the screen size.

• An Internet connection is required only for the initial installation and for future updates.

• The application uses very little storage: less than 5 MB.

• Once installed, the application can work without an Internet connection.


VOICES AND LANGUAGES

VoxHelp uses the text-to-speech voices available on the phone or tablet. For a language to be spoken correctly, the corresponding text-to-speech voice must be installed on the device.

On a personal tablet or smartphone, these voices can usually be added in the device's language or text-to-speech settings.

On a professional device managed by a hospital, however, some installations may be restricted. If a voice for your language is missing, ask the hospital's IT department to install the appropriate text-to-speech voice.

To install a text-to-speech voice:

On ANDROID

Settings → Text-to-speech / Text-to-speech output → languages or voice data → download the required language.

The exact path may vary depending on the Android version and device manufacturer.

On IPHONE / IPAD

Settings → Accessibility → Spoken Content → Voices → select the language and download a voice.


INSTALLING VOXHELP ON YOUR SMARTPHONE / TABLET

Open the application here:

https://wrelax1.github.io/voxhelp/

On IPHONE / IPAD

1. Open the address above in Safari.
2. Tap the Share button.
3. Select “Add to Home Screen”.
4. Make sure the name is “VoxHelp”, then tap “Add”.
5. VoxHelp will appear like a normal application with its VoxHelp icon.

On ANDROID

1. Open the address above in a browser.
2. Tap the three-dot menu ⋮.
3. Select “Install app” or “Add to Home screen”.
4. Confirm “VoxHelp”.
5. VoxHelp will appear like a normal application with its VoxHelp icon.

Giving a voice back to those who have lost theirs.`
    },


    de: {

        invalidEmail:
            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",

        ready:
            "Bitte überprüfen Sie die Nachricht vor dem Senden.",

        copied:
            "Nachricht kopiert. E-Mail-Programm wird geöffnet…",

        opening:
            "E-Mail-Programm wird geöffnet… Die Nachricht bleibt unten sichtbar.",

        subject:
            "Eine App, die Patienten ohne Stimme das Sprechen ermöglicht",

        body:
`Wir möchten Ihnen VoxHelp vorstellen, eine einfache und kostenlose Anwendung, die aus den Erfahrungen und Bedürfnissen von Patienten und Pflegefachpersonen in Genfer Krankenhäusern entstanden ist. Sie hilft Patienten mit Tracheotomie oder Personen, die nicht sprechen können, ihre Bedürfnisse mitzuteilen und die Isolation des Schweigens zu überwinden.

Das Prinzip der Anwendung ist sehr einfach:

Dem Patienten stehen große, gut lesbare Schaltflächen für typische Aussagen zur Verfügung — zum Beispiel Ja, Nein, Stopp, Ich habe Schmerzen, Atemnot, Bitte ändern Sie meine Position, Ich brauche Pflege, Toilette, Familie / Freunde, Gefühle, Fragen usw.

Der Patient muss lediglich eine Schaltfläche berühren. Das Smartphone oder Tablet spricht den entsprechenden Satz in einer der vier wichtigsten Sprachen der Schweizer Spitäler aus: Französisch, Deutsch, Italienisch oder Englisch.


EINFACH, LEICHT UND DATENSCHUTZFREUNDLICH

• Die Anwendung benötigt kein Benutzerkonto und sammelt keine persönlichen Daten.

• Sie funktioniert auf Android und iPhone sowie auf Smartphones und Tablets und passt die Anzeige automatisch an die Bildschirmgröße an.

• Eine Internetverbindung ist nur für die erste Installation und für spätere Aktualisierungen erforderlich.

• Die Anwendung benötigt sehr wenig Speicherplatz: weniger als 5 MB.

• Nach der Installation kann die Anwendung ohne Internetverbindung verwendet werden.


STIMMEN UND SPRACHEN

VoxHelp verwendet die auf dem Smartphone oder Tablet verfügbaren Sprachausgabestimmen. Damit eine Sprache korrekt ausgesprochen wird, muss die entsprechende Text-to-Speech-Stimme auf dem Gerät installiert sein.

Auf einem privaten Smartphone oder Tablet können diese Stimmen normalerweise über die Sprach- oder Sprachausgabe-Einstellungen des Geräts hinzugefügt werden.

Bei professionellen Geräten, die von einem Krankenhaus verwaltet werden, können solche Installationen gesperrt sein. Falls die gewünschte Stimme fehlt, bitten Sie die IT-Abteilung des Krankenhauses, die entsprechende Sprachausgabe zu installieren.

So installieren Sie eine Stimme:

Auf ANDROID

Einstellungen → Text-in-Sprache / Sprachausgabe → Sprachen oder Sprachdaten → gewünschte Sprache herunterladen.

Der genaue Menüpfad kann je nach Android-Version und Hersteller abweichen.

Auf IPHONE / IPAD

Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Sprache auswählen und eine Stimme herunterladen.


VOXHELP AUF SMARTPHONE / TABLET INSTALLIEREN

Öffnen Sie die Anwendung hier:

https://wrelax1.github.io/voxhelp/

Auf IPHONE / IPAD

1. Öffnen Sie die oben angegebene Adresse mit Safari.
2. Tippen Sie auf die Schaltfläche „Teilen“.
3. Wählen Sie „Zum Home-Bildschirm“.
4. Überprüfen Sie, dass der Name „VoxHelp“ lautet, und tippen Sie auf „Hinzufügen“.
5. VoxHelp erscheint anschließend wie eine normale App mit dem VoxHelp-Symbol.

Auf ANDROID

1. Öffnen Sie die oben angegebene Adresse in einem Browser.
2. Tippen Sie auf das Drei-Punkte-Menü ⋮.
3. Wählen Sie „App installieren“ oder „Zum Startbildschirm hinzufügen“.
4. Bestätigen Sie „VoxHelp“.
5. VoxHelp erscheint anschließend wie eine normale App mit dem VoxHelp-Symbol.

Geben wir denjenigen eine Stimme zurück, die ihre Stimme verloren haben.`
    },


    it: {

        invalidEmail:
            "Inserisca un indirizzo email valido.",

        ready:
            "Controlli il messaggio qui sotto prima di inviarlo.",

        copied:
            "Messaggio copiato. Apertura dell'app email…",

        opening:
            "Apertura dell'app email… Il messaggio rimane visualizzato qui sotto.",

        subject:
            "Un'app che dà voce ai pazienti che non possono parlare",

        body:
`La invitiamo a scoprire VoxHelp, un'applicazione semplice e gratuita sviluppata a partire dai bisogni riscontrati tra pazienti e personale sanitario negli ospedali di Ginevra. È stata creata per aiutare i pazienti con tracheostomia o impossibilitati a parlare a comunicare e a uscire dall'isolamento del silenzio.

Il principio dell'applicazione è molto semplice:

Il paziente dispone di grandi pulsanti corrispondenti a ciò che potrebbe voler dire — per esempio Sì, No, Stop, Ho dolore, Difficoltà a respirare, Cambiatemi posizione, Ho bisogno di cure, Toilette, Famiglia / Amici, Emozioni, Domande e altro ancora.

È sufficiente premere un pulsante e il telefono o il tablet pronuncia la frase al posto del paziente in una delle quattro principali lingue utilizzate negli ospedali svizzeri: francese, tedesco, italiano e inglese.


SEMPLICE, LEGGERA E RISPETTOSA DELLA PRIVACY

• L'applicazione non richiede alcun account e non raccoglie dati personali.

• Funziona su Android e iPhone, smartphone e tablet, con una visualizzazione che si adatta alle dimensioni dello schermo.

• Una connessione Internet è necessaria solo per la prima installazione e per gli eventuali aggiornamenti futuri.

• L'applicazione occupa pochissimo spazio: meno di 5 MB.

• Dopo l'installazione, l'applicazione può funzionare senza connessione Internet.


VOCI E LINGUE

VoxHelp utilizza le voci di sintesi disponibili sul telefono o sul tablet. Perché una lingua venga pronunciata correttamente, la relativa voce di sintesi deve essere installata sul dispositivo.

Su uno smartphone o tablet personale, queste voci possono generalmente essere aggiunte nelle impostazioni della lingua o della sintesi vocale.

Su un dispositivo professionale gestito da un ospedale, alcune installazioni possono invece essere bloccate. Se manca la voce della lingua desiderata, chieda al servizio informatico dell'ospedale di installare la voce di sintesi corrispondente.

Per installare una voce di sintesi:

Su ANDROID

Impostazioni → Sintesi vocale / Output sintesi vocale → lingue o dati vocali → scaricare la lingua desiderata.

Il percorso esatto può variare a seconda della versione di Android e del produttore del dispositivo.

Su IPHONE / IPAD

Impostazioni → Accessibilità → Contenuto letto ad alta voce → Voci → scegliere la lingua e scaricare una voce.


INSTALLAZIONE DI VOXHELP SU SMARTPHONE / TABLET

Acceda all'applicazione qui:

https://wrelax1.github.io/voxhelp/

Su IPHONE / IPAD

1. Apra l'indirizzo qui sopra con Safari.
2. Tocchi il pulsante Condividi.
3. Scelga “Aggiungi alla schermata Home”.
4. Verifichi che il nome sia “VoxHelp”, quindi tocchi “Aggiungi”.
5. VoxHelp apparirà come una normale applicazione con la sua icona VoxHelp.

Su ANDROID

1. Apra l'indirizzo qui sopra con un browser.
2. Tocchi il menu con i tre puntini ⋮.
3. Scelga “Installa app” oppure “Aggiungi alla schermata Home”.
4. Confermi “VoxHelp”.
5. VoxHelp apparirà come una normale applicazione con la sua icona VoxHelp.

Ridiamo una voce a chi ne è stato privato.`
    }

};


function shareAppByEmail() {

    const emailInput =
        document.getElementById(
            "shareEmail"
        );

    const messageElement =
        document.getElementById(
            "shareMessage"
        );

    const preview =
        document.getElementById(
            "sharePreview"
        );


    if (
        !emailInput ||
        !messageElement ||
        !preview
    ) {
        return;
    }


	const uiTranslation =
		SHARE_EMAIL_TRANSLATIONS[
			caregiverLanguage
		] ||
		SHARE_EMAIL_TRANSLATIONS.fr;


	const selectedLanguage =
		document.querySelector(
			'input[name="shareRecipientLanguage"]:checked'
		);


	const recipientLanguage =
		selectedLanguage
			? selectedLanguage.value
			: "fr";


	const emailTranslation =
		SHARE_EMAIL_TRANSLATIONS[
			recipientLanguage
		] ||
		SHARE_EMAIL_TRANSLATIONS.fr;


    const email =
        emailInput.value.trim();


    messageElement.textContent = "";


    if (
        email === "" ||
        !emailInput.checkValidity()
    ) {

        preview.classList.add(
            "hidden"
        );

        messageElement.textContent =
            uiTranslation.invalidEmail;

        emailInput.focus();

        return;
    }


    shareEmailAddress =
        email;

    shareEmailSubject =
        emailTranslation.subject;

    shareEmailBody =
        emailTranslation.body;


    document.getElementById(
        "sharePreviewEmail"
    ).textContent =
        shareEmailAddress;


    document.getElementById(
        "sharePreviewSubject"
    ).textContent =
        shareEmailSubject;


    document.getElementById(
        "sharePreviewBody"
    ).textContent =
        shareEmailBody;


    preview.classList.remove(
        "hidden"
    );


    messageElement.textContent =
        uiTranslation.ready;


    preview.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


async function copyAndOpenMail() {

    if (
        !shareEmailAddress ||
        !shareEmailSubject ||
        !shareEmailBody
    ) {
        return;
    }


    const messageElement =
        document.getElementById(
            "shareMessage"
        );


    const translation =
        SHARE_EMAIL_TRANSLATIONS[
            caregiverLanguage
        ] ||
        SHARE_EMAIL_TRANSLATIONS.fr;


    try {

        await navigator.clipboard.writeText(
            shareEmailBody
        );

        if (messageElement) {
            messageElement.textContent =
                translation.copied;
        }

    }
    catch (error) {

        if (messageElement) {
            messageElement.textContent =
                translation.opening;
        }

    }


    const mailtoUrl =
        "mailto:" +
        shareEmailAddress +
        "?subject=" +
        encodeURIComponent(
            shareEmailSubject
        ) +
        "&body=" +
        encodeURIComponent(
            shareEmailBody
        );


    window.location.href =
        mailtoUrl;
}

const FAVORITES_STORAGE_KEY = "maVoixCustomFavorites";


function getCustomFavorites() {

    const savedFavorites =
        localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!savedFavorites) {
        return [];
    }

    try {
        return JSON.parse(savedFavorites);
    }
    catch (error) {
        return [];
    }
}

function openFavoritesScreen() {

    renderCustomFavorites();

    showScreen("favoritesScreen");
}


function saveFavoriteText(textAreaId) {

    const textArea =
        document.getElementById(textAreaId);

    if (!textArea) {
        return;
    }

    const phrase =
        textArea.value.trim();

    if (phrase === "") {
        return;
    }


    const translation =
        WRITE_TRANSLATIONS[
            patientLanguage
        ] ||
        WRITE_TRANSLATIONS.fr;


    const favorites =
        getCustomFavorites();


    if (favorites.includes(phrase)) {

        speak(
            translation.duplicateFavorite,
            patientLanguage
        );

        return;
    }


    favorites.push(phrase);

    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );

    textArea.value = "";

    renderCustomFavorites();

    speak(
        translation.favoriteAdded,
        patientLanguage
    );
}


function saveFavorite() {

    saveFavoriteText("favoriteText");
}


function saveFavoriteFromWrite() {

    saveFavoriteText("customText");
}

function renderCustomFavorites() {

    const container =
        document.getElementById("customFavorites");

    if (!container) {
        return;
    }

    const favorites =
        getCustomFavorites();

    container.innerHTML = "";

    if (favorites.length === 0) {

        const message =
            document.createElement("p");

        message.className = "no-favorites";

		const translation =
			WRITE_TRANSLATIONS[
				patientLanguage
			];

		message.textContent =
			translation
				? translation.noFavorites
				: "Aucune phrase personnelle pour le moment.";

        container.appendChild(message);

        return;
    }


    favorites.forEach(function(phrase, index) {

        const item =
            document.createElement("div");

        item.className = "favorite-item";


        const speakButton =
            document.createElement("button");

        speakButton.className =
            "favorite-speak-button";

        speakButton.textContent =
            phrase;

		speakButton.onclick =
			function() {

				speak(
					phrase,
					patientLanguage
				);
			};

		const deleteButton =
			document.createElement("button");

		deleteButton.className =
			"favorite-delete-button";

		deleteButton.textContent =
			"🗑️";

		const translation =
			WRITE_TRANSLATIONS[
				patientLanguage
			] ||
			WRITE_TRANSLATIONS.fr;

		deleteButton.setAttribute(
			"aria-label",
			translation.deleteConfirm
		);

		deleteButton.onclick =
			function(event) {

				event.stopPropagation();

				deleteFavorite(index);
			};

        item.appendChild(speakButton);

        item.appendChild(deleteButton);

        container.appendChild(item);
    });
}


function deleteFavorite(index) {

    const favorites =
        getCustomFavorites();

    const phrase =
        favorites[index];


    const translation =
        WRITE_TRANSLATIONS[
            patientLanguage
        ] ||
        WRITE_TRANSLATIONS.fr;


    const confirmed =
        confirm(
            translation.deleteConfirm +
            "\n\n" +
            phrase
        );


    if (!confirmed) {
        return;
    }


    favorites.splice(index, 1);

    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );

    renderCustomFavorites();
}

async function updateAppVersion() {

    const versionElement =
        document.getElementById("appVersion");

    if (!versionElement) {
        return;
    }


    try {

        const response =
            await fetch(
                "./sw.js",
                {
                    cache: "no-store"
                }
            );


        if (!response.ok) {
            return;
        }


        const swText =
            await response.text();


        const match =
            swText.match(
                /voxhelp21-c(\d+)/
            );


        if (!match) {
            return;
        }


		versionElement.textContent =
			"(v" + APP_VERSION +
			"/c" + match[1] + ")";

    }
    catch (error) {

        console.warn(
            "Impossible de lire la version :",
            error
        );
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderCustomFavorites();

        loadAvailableVoices();
		
		checkCaregiverVoiceAvailability();

		updateLanguageButtons();
		
		updateVoiceScreenLanguage();
		
		updateAboutScreenLanguage();
		
		updateQuickBarLanguage();
		
		updateHomeLanguage();
		
		updateRespirationLanguage();
		
		updatePainLanguage();
		
		updatePositionLanguage();
		
		updateCareLanguage();
		
		updateCareTeamLanguage();
		
		updateHygieneLanguage();
		
		updateEmotionLanguage();
		
		updateQuestionsLanguage();
		
		updateEnvironmentLanguage();
		
		updateUnderstandLanguage();
		
		updateTalkLanguage();
		
		updateWriteLanguage();

		updateTopRightButton("homeScreen");
		
		updateAppVersion();

    }
);


if ("serviceWorker" in navigator) {

    let serviceWorkerRefreshing = false;

    const hadController =
        navigator.serviceWorker.controller !== null;


    window.addEventListener(
        "load",
        function() {

            navigator.serviceWorker
                .register("./sw.js")
                .then(function(registration) {

                    return registration.update();

                })
                .catch(function(error) {

                    console.error(
                        "Erreur Service Worker :",
                        error
                    );

                });

        }
    );


    navigator.serviceWorker.addEventListener(
        "controllerchange",
        function() {

            if (
                !hadController ||
                serviceWorkerRefreshing
            ) {
                return;
            }

            serviceWorkerRefreshing = true;

            window.location.reload();

        }
    );

}