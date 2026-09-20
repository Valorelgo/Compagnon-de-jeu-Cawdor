// data.js - Base de données Necromunda (Cawdor, Mercenaires, Armes, Équipements, Traits, Cartes Tactiques, Territoires, Conditions)

const db = {
    // ===== PERSONNAGES =====
    characters: [
        {
            id: "char_word_keeper", name: "Word-keeper",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 3, I: 3, A: 2, Sv: '5+', Ld: 8, Cl: 8, Wil: 8, Int: 7 },
            type: ["guerrier", "leader", "pious"], starting_xp: 61,
            starting_skill: "Une au choix dans les compétences primaires",
            special_rules: ["Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ."],
            primary_skills: ["muscle", "savant"], secondary_skills: ["combat", "tir"],
            cost: 115, tactics_cards: 2
        },
        {
            id: "char_firebrand", name: "Firebrand",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 2, I: 3, A: 2, Sv: '5+', Ld: 7, Cl: 7, Wil: 6, Int: 7 },
            type: ["guerrier", "champion", "pious"], starting_xp: 37,
            starting_skill: "Une au choix dans les compétences primaires",
            special_rules: ["Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ."],
            primary_skills: ["muscle", "combat"], secondary_skills: ["savant"],
            cost: 95, tactics_cards: 1
        },
        {
            id: "char_brethen", name: "Brethen",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 3, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 6 },
            type: ["guerrier", "ganger", "spécialiste", "pious"], starting_xp: 13,
            starting_skill: "selon spécialité",
            special_rules: [
                "Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ.",
                "lourd (Bulging biceps), artilleur (Hip-shooting), pistolero (Gunfighter), scout (Clamber), sniper (Precision shot), bagarreur (Berserker), medic (Medicate), tech (Munitioneer)"
            ],
            primary_skills: ["combat"], secondary_skills: ["agilité", "muscle"],
            cost: 40
        },
        {
            id: "char_way_brethen", name: "Way-brethen",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 6, Wil: 6, Int: 5 },
            type: ["guerrier", "pious", "prospect"], starting_xp: 4,
            starting_skill: "Dodge",
            special_rules: [
                "Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ.",
                "Équipé de base d'un Ridge walker."
            ],
            default_equipment: ["eq_ridge_walker"],
            primary_skills: ["agilité"], secondary_skills: ["combat"],
            cost: 65
        },
        {
            id: "char_bonepicker", name: "Bonepicker",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 5, Wil: 5, Int: 5 },
            type: ["guerrier", "pious", "prospect"], starting_xp: 1,
            starting_skill: "",
            special_rules: ["Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ."],
            primary_skills: ["combat"], secondary_skills: ["agilité"],
            cost: 20
        },
        {
            id: "char_stig_shambler", name: "Stig-shambler",
            stats: { M: '4"', WS: '4+', BS: '4+', S: 5, T: 4, W: 4, I: 3, A: 2, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 5 },
            type: ["guerrier", "brute", "pious", "solitaire"], starting_xp: 25,
            starting_skill: "Bulging biceps",
            special_rules: [
                "Without number : au moment de choisir les guerriers pour une bataille, le gang peut inclure un Prospect additionnel dans son équipe de départ.",
                "Armé directement d'un heavy club (Heavy cleaver) et d'un lance flamme lourd, inclus dans son coût.",
                "À la création uniquement, peut échanger son lance flamme lourd contre un Heavy-stubber jumelé.",
                "Ne peut jamais acheter d'autre arme, armure, équipement ou accessoire d'arme."
            ],
            default_weapons: ["wpn_heavy_cleaver", "wpn_lance_flamme_lourd"],
            primary_skills: ["muscle"], secondary_skills: ["tir"],
            cost: 240
        },
        {
            id: "char_redemptionist_priest", name: "Redemptionist priest",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 3, I: 3, A: 3, Sv: '5+', Ld: 8, Cl: 7, Wil: 9, Int: 7 },
            type: ["guerrier", "fanatic", "leader"], starting_xp: 61,
            starting_skill: "Une au choix dans les compétences primaires",
            special_rules: ["Fanatical : le gang peut relancer les tests de bottle-checks dont le résultat est 11 ou 12."],
            primary_skills: ["combat", "savant"], secondary_skills: ["muscle", "ruse"],
            cost: 130, tactics_cards: 2
        },
        {
            id: "char_redemptionist_deacon", name: "Redemptionist deacon",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 2, I: 3, A: 2, Sv: '5+', Ld: 7, Cl: 7, Wil: 8, Int: 9 },
            type: ["guerrier", "fanatic", "champion"], starting_xp: 37,
            starting_skill: "Une au choix dans les compétences primaires",
            special_rules: ["Fanatical : le gang peut relancer les tests de bottle-checks dont le résultat est 11 ou 12."],
            primary_skills: ["combat", "tir"], secondary_skills: ["savant"],
            cost: 100, tactics_cards: 1
        },
        {
            id: "char_redemptionist_brethen", name: "Redemptionist brethen",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 3, A: 1, Sv: '6+', Ld: 6, Cl: 7, Wil: 7, Int: 5 },
            type: ["guerrier", "ganger", "fanatic", "spécialiste"], starting_xp: 13,
            starting_skill: "selon spécialité",
            special_rules: [
                "Fanatical : le gang peut relancer les tests de bottle-checks dont le résultat est 11 ou 12.",
                "lourd (Bulging biceps), artilleur (Hip-shooting), pistolero (Gunfighter), scout (Clamber), sniper (Precision shot), bagarreur (Berserker), medic (Medicate), tech (Munitioneer)"
            ],
            primary_skills: ["combat"], secondary_skills: ["ruse", "tir"],
            cost: 40
        },
        {
            id: "char_redemptionist_zealot", name: "Redemptionist zealot",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 2, Sv: '6+', Ld: 5, Cl: 6, Wil: 5, Int: 5 },
            type: ["guerrier", "fanatic", "prospect"], starting_xp: 1,
            starting_skill: "",
            special_rules: ["Fanatical : le gang peut relancer les tests de bottle-checks dont le résultat est 11 ou 12."],
            primary_skills: ["agilité"], secondary_skills: ["combat"],
            cost: 35
        },
        {
            id: "char_shen_bird", name: "Shen bird",
            is_gang: true, is_equip_pious: true,
            stats: { M: '7"', WS: '3+', BS: '6+', S: 2, T: 3, W: 1, I: 5, A: 2, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 4 },
            type: ["guerrier", "bête", "volant", "familier"], starting_xp: 13,
            starting_skill: "Leash de 6\", Frénésie",
            special_rules: ["Rattaché à une figurine.", "Équipé directement de l'arme Beak & talons.", "Ne peut jamais acheter d'autre arme, armure, équipement ou accessoire d'arme."],
            default_weapons: ["wpn_beak_talons"],
            primary_skills: ["agilité"], secondary_skills: ["combat"],
            cost: 75
        }
    ],

    // ===== DICTIONNAIRE DES COMPETENCES =====
    skills: {
        agilite: [
            { id: "sk_chute_chat", name: "Catfall", desc: "Réduit le cran de distance verticale en cas de chute/saut. Test d'agilité pour ne pas être suppressed si non blessé/hors combat." },
            { id: "sk_grimper", name: "Clamber", desc: "Mouvement non divisé par deux en grimpant." },
            { id: "sk_esquive", name: "Dodge", desc: "Avant jet d'armure, sur un 6, ignore la blessure. Si gabarit, déplace de 2\" pour éviter." },
            { id: "sk_bond_prodigieux", name: "Mighty leap", desc: "Ignore les 2 premiers pouces de distance lors d'un saut (saut 4\" sans test)." },
            { id: "sk_jaillir", name: "Spring up", desc: "Si suppressed, test d'agilité. Si réussi, n'est plus suppressed." },
            { id: "sk_sprint", name: "Sprint", desc: "Action double : déplacement = Mouvement + (2 x Initiative)." }
        ],
        muscle: [
            { id: "sk_charge_taureau", name: "Bull charge", desc: "Attaque de charge : l'arme gagne knockback (6+) et +1 en Force." },
            { id: "sk_biceps_saillants", name: "Bulging biceps", desc: "Braced shot : déplacement d'Initiative en pouces avant ou après. Arme lourde au close : peut déclarer arme secondaire non lourde." },
            { id: "sk_redoutable", name: "Fearsome", desc: "Condition fearsome." },
            { id: "sk_machoire_acier", name: "Iron jaw", desc: "Endurance +2 si touché par arme sans AP." },
            { id: "sk_nerfs_acier", name: "Nerves of steel", desc: "Si touché au tir, test de cool : si réussi, non suppressed." },
            { id: "sk_instoppable", name: "Unstoppable", desc: "A l'activation, test de Willpower : si réussi, récupère 1 PV." }
        ],
        combat: [
            { id: "sk_berserker", name: "Berserker", desc: "Condition frénésie." },
            { id: "sk_maitre_combat", name: "Combat master", desc: "Pas de malus d'interférence pour toucher. Peut toujours assister quel que soit le nb d'ennemis." },
            { id: "sk_coup_boule", name: "Headbutt", desc: "Arme intégrée : engagé, F+1, L:1, attaques additionnelles (1)." },
            { id: "sk_coups_puissants", name: "Heavy blows", desc: "Arme lourde au close = +1 Force." },
            { id: "sk_pluie_coups", name: "Rain of blows", desc: "Si après une action d'attaque, le guerrier est toujours engagé, peut faire une action d'attaque gratuite en plus." },
            { id: "sk_combat_2_armes", name: "Two-weapon fighter", desc: "Fait 2 attaques avec son arme secondaire au lieu d'une." }
        ],
        ruse: [
            { id: "sk_backstab", name: "Backstab", desc: "Armes close gagnent Backstab. Si déjà acquis, Force +2 au lieu de +1." },
            { id: "sk_contre_attaque", name: "Counter-attack", desc: "Peut faire une attaque additionnelle quand un ennemi l'attaque, au même rang d'initiative que lui." },
            { id: "sk_coupe_gorge", name: "Cut-throat", desc: "Relance son D6 de coup de grâce." },
            { id: "sk_infiltration", name: "Infiltrate", desc: "Déploiement spécial : hors ligne de vue et à + de 9\" de tout ennemi." },
            { id: "sk_se_cacher", name: "Lie low", desc: "Si suppressed, inciblable au-delà de la portée courte des ennemis." },
            { id: "sk_overwatch", name: "Overwatch", desc: "Interrompt une action ennemie avec un tir en perdant son marqueur ready." }
        ],
        savant: [
            { id: "sk_connecte", name: "Connected", desc: "Visite le Trading Post avec 1 TP supplémentaire post-cycle (2 visites max)." },
            { id: "sk_recharge_rapide", name: "Fast reload", desc: "Recharge toutes ses armes d'un coup." },
            { id: "sk_volonte_fer", name: "Iron will", desc: "Soustrait 1 aux tests de bottle check du gang." },
            { id: "sk_soin", name: "Medicate", desc: "Action : un allié à 1\" qui n'est pas seriously injured récupère 1 PV." },
            { id: "sk_mentor", name: "Mentor", desc: "Si un allié à 6\" gagne 1 XP, test de Ld : si réussi, gagne 1 XP." },
            { id: "sk_munitions", name: "Munitioneer", desc: "Action distribution : alliés à 6\" font test d'Int, si réussi -> recharge gratuite." }
        ],
        tir: [
            { id: "sk_tir_rapide", name: "Fast shot", desc: "Peut faire 2 actions de tir pendant l'activation." },
            { id: "sk_pistolero", name: "Gunfighter", desc: "Peut tirer avec 2 armes de tir (léger) sur cibles différentes." },
            { id: "sk_tir_hanche", name: "Hip-shooting", desc: "Les armes de tir (non lourdes) gagnent le trait assaut." },
            { id: "sk_tireur_habile", name: "Marksman", desc: "+1 pour toucher les cibles entre portée courte et longue." },
            { id: "sk_tir_precision", name: "Precision shot", desc: "Sur un 6 naturel pour toucher, ignore l'armure (sauf explosion/tir rapide)." },
            { id: "sk_tireur_elite", name: "Sharpshooter", desc: "Aimed shot : +2 pour toucher au lieu de +1." }
        ],
        generique: [
            { id: "sk_poison_blood", name: "Poison blood", desc: "Quand le guerrier utilise une arme avec le trait toxine (X+), les résultats de 1 peuvent être relancés." },
            { id: "sk_lands_on_feet", name: "Lands on their feet", desc: "Si le guerrier tombe pour n'importe quelle raison, réduire de 3\" la hauteur de chute dans le tableau." },
            { id: "sk_hit_run", name: "Hit & run", desc: "Après action de combat, peut consolider (sortir de 1\") en finissant à +1\" des ennemis." },
            { id: "sk_inspirant", name: "Inspirant", desc: "Peut faire l'action d'activation de groupe en action gratuite." },
            { id: "sk_chef", name: "Chef", desc: "Tous les alliés dans les 12\" et en ligne de vue peuvent utiliser le Cl du leader pour leurs tests de nerf." },
            { id: "sk_sous_chef", name: "Sous-chef", desc: "Tous les alliés dans les 6\" et en ligne de vue peuvent utiliser le Cl du leader pour leurs tests de nerf." },
            { id: "sk_juggernaut", name: "Juggernaut", desc: "Si touché au tir, suppressed uniquement si PV perdu ou effet du dé de blessure.", specific_to: "brute" },
            { id: "sk_regeneration", name: "Regeneration", desc: "Action : mouvement puis 4+ = récupère 1 PV." },
            { id: "sk_leash", name: "Leash de X\"", desc: "Portée pour familiers pour ignorer le test de panique." }
        ]
    },

    // ===== ARMES =====
    weapons: [
        // --- Base commune (tir) ---
        { id: "wpn_autogun", name: "Autogun", profiles: [{ name: "Unique", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Tir rapide (1)" }], cost_credits: 20, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_autopistol", name: "Autopistol", profiles: [{ name: "Unique", SR: '4"', LR: '12"', S: 3, AP: "-", L: 1, traits: "Léger, tir rapide (1)" }], cost_credits: 10, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_heavy_stubber", name: "Heavy stubber*", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "Lourd, tir rapide (2)" }], cost_credits: 70, cost_tp: 2, is_hive_scum: false, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_long_rifle", name: "Long rifle", profiles: [{ name: "Unique", SR: '24"', LR: '48"', S: 4, AP: "-1", L: 1, traits: "Knockback (6+)" }], cost_credits: 55, cost_tp: 1, is_hive_scum: false, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_stub_gun", name: "Stub gun", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 3, AP: "-", L: 1, traits: "Léger" }], cost_credits: 5, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_boltgun", name: "Boltgun", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "Tir rapide (1), munitions (3+)" }], cost_credits: 55, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_bolt_pistol", name: "Bolt pistol", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 4, AP: "-1", L: 2, traits: "Tir rapide (1), munitions (3+), léger" }], cost_credits: 45, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_heavy_bolter", name: "Bolter lourd*", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 5, AP: "-2", L: 2, traits: "Munitions (3+), lourd, tir rapide (2)" }], cost_credits: 100, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_warpstorm_bolter", name: "Warpstorm bolter", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "Munitions (6+), tir rapide (1), rare (4+), maudit" }], cost_credits: 65, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_lance_flamme", name: "Lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }], cost_credits: 70, cost_tp: 1, is_hive_scum: false, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_pist_lance_flamme", name: "Pistolet lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "Munitions (6+), flammes (5+), gabarit, léger" }], cost_credits: 45, cost_tp: 1, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_lance_flamme_lourd", name: "Lance flamme lourd*", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-2", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }], cost_credits: 95, cost_tp: 2, is_hive_scum: false, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_grav_gun", name: "Grav gun", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-", L: 2, traits: "Munitions (5+), explosion (3\"), graviton pulse" }], cost_credits: 50, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grav_pistol", name: "Grav pistol", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 2, traits: "Munitions (5+), explosion (3\"), graviton pulse, léger" }], cost_credits: 40, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        {
            id: "wpn_grenade_launcher", name: "Lance grenade",
            profiles: [
                { name: "Frag grenades", SR: '6"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), knockback (5+)" },
                { name: "Krak grenades", SR: '6"', LR: '24"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+)" }
            ],
            optional_profiles: [
                { name: "Photon flash", SR: '6"', LR: '24"', S: "-", AP: "-", L: "-", traits: "Munitions (5+), explosion (3\"), flash", extra_cost: 15, excluded_for_fanatic: true },
                { name: "Fumigène", SR: '6"', LR: '24"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (3\"), fumée", extra_cost: 15 }
            ],
            cost_credits: 80, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: true
        },
        { id: "wpn_lasgun", name: "Lasgun", profiles: [{ name: "Unique", SR: '16"', LR: '24"', S: 3, AP: "-", L: 1, traits: "" }], cost_credits: 15, cost_tp: 0, is_hive_scum: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_laspistol", name: "Laspistol", profiles: [{ name: "Unique", SR: '8"', LR: '12"', S: 3, AP: "-", L: 1, traits: "Léger" }], cost_credits: 5, cost_tp: 0, is_hive_scum: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_long_las", name: "Long Las", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 4, AP: "-", L: 1, traits: "" }], cost_credits: 40, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fuseur", name: "Fuseur", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3)" }], cost_credits: 140, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_multifuseur", name: "Multifuseur*", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3), lourd" }], cost_credits: 150, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_canon_plasma", name: "Canon plasma*", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 6, AP: "-2", L: 2, traits: "Munitions (6+), explosion (3\"), dommages (2), lourd, instable" }], cost_credits: 115, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fusil_plasma", name: "Fusil plasma", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), dommages (2), tir rapide (1), instable" }], cost_credits: 85, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_pistolet_plasma", name: "Pistolet plasma", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), dommages (2), léger, instable" }], cost_credits: 70, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_couteau_lancer", name: "Couteau de lancer", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: "-", AP: "-", L: 1, traits: "Munitions (3+), toxine (4+)" }], cost_credits: 10, cost_tp: 0, is_hive_scum: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_canon_rad", name: "Rad cannon*", profiles: [{ name: "Unique", SR: '16"', LR: '32"', S: 3, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), lourd, rad-phage" }], cost_credits: 55, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fusil_rad", name: "Rad gun", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-1", L: 1, traits: "Munitions (5+), gabarit, rad-phage" }], cost_credits: 60, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_lance_harpon", name: "Lance harpon*", profiles: [{ name: "Unique", SR: '6"', LR: '18"', S: 5, AP: "-3", L: 1, traits: "Munitions (5+), attirer" }], cost_credits: 80, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_cutter_laser", name: "Las cutter", profiles: [{ name: "Unique", SR: '2"', LR: '4"', S: 9, AP: "-2", L: 2, traits: "Dommages (2), léger, tir unique" }], cost_credits: 80, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_laser_minage", name: "Laser de minage*", profiles: [{ name: "Unique", SR: '10"', LR: '14"', S: 9, AP: "-3", L: 3, traits: "Munitions (5+), dommages (2), lourd" }], cost_credits: 125, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        {
            id: "wpn_pompe_combat", name: "Fusil à pompe de combat",
            profiles: [
                { name: "Salve", SR: '4"', LR: '12"', S: 4, AP: "-", L: 1, traits: "Knockback (6+)" },
                { name: "Déchiquetant", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "Munitions (6+), tir rapide (1), déchiqueter (6+), gabarit" }
            ], cost_credits: 35, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false
        },
        {
            id: "wpn_pompe_canon_scie", name: "Fusil à pompe à canon scié",
            profiles: [
                { name: "Dispersion", SR: '4"', LR: '8"', S: 2, AP: "-", L: 1, traits: "Léger, tir rapide (1)" },
                { name: "Concentré", SR: '4"', LR: '8"', S: 4, AP: "-", L: 1, traits: "Léger, knockback (6+)" }
            ], cost_credits: 30, cost_tp: 1, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false
        },
        {
            id: "wpn_fusil_pompe", name: "Fusil à pompe",
            profiles: [
                { name: "Dispersion", SR: '4"', LR: '8"', S: 3, AP: "-", L: 1, traits: "Tir rapide (2)" },
                { name: "Concentré", SR: '8"', LR: '16"', S: 4, AP: "-", L: 1, traits: "Knockback (5+)" },
                { name: "Executeur", SR: '4"', LR: '8"', S: 4, AP: "-2", L: 1, traits: "Munitions (5+), knockback (5+)" },
                { name: "Retributor", SR: '4"', LR: '16"', S: 4, AP: "-", L: 1, traits: "Tir rapide (2), flammes (5+)" }
            ], cost_credits: 35, cost_tp: 0, is_hive_scum: true, is_weapon_pious: false, is_weapon_fanatic: true
        },
        { id: "wpn_pist_aiguille", name: "Pistolet à aiguille", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 1, traits: "Léger, toxine (3+)" }], cost_credits: 25, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fusil_aiguille", name: "Fusil à aiguille", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Toxine (3+)" }], cost_credits: 45, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fusil_web", name: "Fusil web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-", L: "-", traits: "Munitions (6+), gabarit, toile" }], cost_credits: 65, cost_tp: 4, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_pistolet_web", name: "Pistolet web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-", L: "-", traits: "Munitions (6+), gabarit, toile, léger" }], cost_credits: 50, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },

        // --- Base commune (corps à corps) ---
        { id: "wpn_hache_tron", name: "Hache tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+)" }], cost_credits: 20, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_epee_tron", name: "Epée tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, déchiqueter (5+), parade" }], cost_credits: 20, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_hache_nrj", name: "Hache énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-3", L: 1, traits: "Melee, breche (5+)" }], cost_credits: 40, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_gantelet_nrj", name: "Gantelet énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+3", AP: "-3", L: 2, traits: "Melee, breche (6+), dommages (2), commotion (5+), encombrant" }], cost_credits: 105, cost_tp: 3, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_marteau_nrj", name: "Marteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 2, traits: "Melee, breche (6+), commotion (6+)" }], cost_credits: 40, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_couteau_nrj", name: "Couteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "Melee, breche (6+), backstab" }], cost_credits: 30, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_masse_nrj", name: "Masse énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-2", L: 1, traits: "Melee, breche (6+), commotion (6+)" }], cost_credits: 45, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_epee_nrj", name: "Epée énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "Melee, breche (6+), parade" }], cost_credits: 40, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_hache", name: "Hache", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee" }], cost_credits: 15, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_couteau_combat", name: "Couteau de combat", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, backstab" }], cost_credits: 5, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_fleau", name: "Fléau", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, knockback (6+)" }], cost_credits: 10, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_masse", name: "Masse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, commotion (6+)" }], cost_credits: 20, cost_tp: 0, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_hache_2m", name: "Hache à deux mains*", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-1", L: 2, traits: "Melee, lourd, encombrant" }], cost_credits: 40, cost_tp: 1, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_marteau_2m", name: "Marteau à deux mains*", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 3, traits: "Melee, lourd, encombrant, commotion (6+)" }], cost_credits: 40, cost_tp: 1, is_hive_scum: true, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_servo_griffe", name: "Servo-claw", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-", L: 2, traits: "Melee, encombrant" }], cost_credits: 40, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_baton_shock", name: "Shock baton", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, parade, shock (6+)" }], cost_credits: 20, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_arme_hast_shock", name: "Shock stave", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, shock (5+)" }], cost_credits: 25, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_fouet_shock", name: "Fouet shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, knockback (6+), shock (6+)" }], cost_credits: 10, cost_tp: 1, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_couteau_stylet", name: "Couteau stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "Melee, toxine (3+)" }], cost_credits: 25, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_epee_stylet", name: "Epée stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-1", L: 1, traits: "Melee, toxine (3+), parade" }], cost_credits: 45, cost_tp: 2, is_hive_scum: false, is_weapon_pious: false, is_weapon_fanatic: false },

        // --- Armes spécifiques Pious ---
        { id: "wpn_heavy_stubber_jumele", name: "Heavy-stubber jumelé", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "Lourd, tir rapide (2), jumelé" }], cost_credits: 10, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false, specific_to: "char_stig_shambler" },
        { id: "wpn_combi_autogun_lf", name: "Combi autogun/lance flamme", profiles: [
            { name: "Autogun", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Tir rapide (1), combi" },
            { name: "Lance flamme", SR: "T", LR: "-", S: 4, AP: "-", L: "-", traits: "Flammes (5+), munitions (6+), combi, gabarit" }
        ], cost_credits: 75, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_arbalete_lourde", name: "Arbalète lourde*", profiles: [
            { name: "Frag", SR: '15"', LR: '30"', S: 4, AP: "-", L: 1, traits: "Munitions (3+), explosion (5\"), lourd, knockback (6+)" },
            { name: "Krak", SR: '15"', LR: '30"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+), lourd" }
        ], cost_credits: 110, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_polearm_autogun", name: "Polearm/autogun", profiles: [
            { name: "Polearm", SR: "E", LR: "-", S: "S+1", AP: "-", L: 2, traits: "Lourd, lance, melee, encombrant" },
            { name: "Autogun", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Tir rapide (1)" }
        ], cost_credits: 30, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_polearm_blunderbuss", name: "Polearm/blunderbuss", profiles: [
            { name: "Polearm", SR: "E", LR: "-", S: "S+1", AP: "-", L: 2, traits: "Lourd, lance, melee, encombrant" },
            { name: "Grape", SR: "T", LR: "-", S: 2, AP: "-", L: 1, traits: "Tir rapide (1), gabarit" },
            { name: "Purgation", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }
        ], cost_credits: 80, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_polearm_lance_flamme", name: "Polearm/lance flamme", profiles: [
            { name: "Polearm", SR: "E", LR: "-", S: "S+1", AP: "-", L: 2, traits: "Lourd, lance, melee, encombrant" },
            { name: "Lance flamme", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }
        ], cost_credits: 85, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_glaive_tron", name: "Glaive tronçonneur", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-1", L: 2, traits: "Lourd, melee, parade, déchiqueter (6+), encombrant" }], cost_credits: 50, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_lance_frag", name: "Lance frag", profiles: [
            { name: "1ère utilisation", SR: "E", LR: "-", S: 4, AP: "-1", L: 1, traits: "Lourd, lance-bombe, knockback (5+), melee" },
            { name: "Épuisé", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Lourd, lance, melee" }
        ], cost_credits: 35, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_krak_lance", name: "Krak lance", profiles: [
            { name: "1ère utilisation", SR: "E", LR: "-", S: 6, AP: "-2", L: 2, traits: "Lourd, lance-bombe, melee" },
            { name: "Épuisé", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Lourd, lance, melee" }
        ], cost_credits: 50, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },
        { id: "wpn_lance_shock", name: "Lance shock", profiles: [
            { name: "1ère utilisation", SR: "E", LR: "-", S: 2, AP: "-1", L: 1, traits: "Lourd, lance-bombe, melee, shock (3+)" },
            { name: "Épuisé", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Lourd, lance, melee" }
        ], cost_credits: 30, cost_tp: 0, is_weapon_pious: true, is_weapon_fanatic: false },

        // --- Armes spécifiques Fanatic ---
        { id: "wpn_fire_pike", name: "Fire pike", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-2", L: 1, traits: "Munitions (6+), flammes (5+), breche (5+), gabarit" }], cost_credits: 80, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_eviscerator", name: "Eviscerator", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-2", L: 2, traits: "Lourd, melee, déchiqueter (5+), encombrant" }], cost_credits: 65, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_cleaver", name: "Cleaver", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 2, traits: "Melee" }], cost_credits: 25, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_exterminator_autogun", name: "Exterminator autogun", profiles: [
            { name: "Exterminator", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Auxilliaire, flammes (5+), tir unique, gabarit" },
            { name: "Autogun", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Tir rapide (1)" }
        ], cost_credits: 55, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_exterminator_shotgun", name: "Exterminator shotgun", profiles: [
            { name: "Exterminator", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Auxilliaire, flammes (5+), tir unique, gabarit" },
            { name: "Dispersion", SR: '4"', LR: '8"', S: 3, AP: "-", L: 1, traits: "Tir rapide (2)" },
            { name: "Concentré", SR: '8"', LR: '16"', S: 4, AP: "-", L: 1, traits: "Knockback (5+)" }
        ], cost_credits: 70, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_exterminator_eviscerator", name: "Exterminator eviscerator", profiles: [
            { name: "Exterminator", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Auxilliaire, flammes (5+), tir unique, gabarit" },
            { name: "Eviscerator", SR: "E", LR: "-", S: "S+2", AP: "-2", L: 2, traits: "Lourd, melee, déchiqueter (5+), encombrant" }
        ], cost_credits: 100, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },
        { id: "wpn_exterminator_hache_tron", name: "Exterminator hache tronçonneuse", profiles: [
            { name: "Exterminator", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Auxilliaire, flammes (5+), tir unique, gabarit" },
            { name: "Hache tronçonneuse", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+)" }
        ], cost_credits: 55, cost_tp: 0, is_weapon_pious: false, is_weapon_fanatic: true },

        // --- Armes de personnage (réservées, jamais achetables) ---
        { id: "wpn_beak_talons", name: "Beak & talons", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-1", L: 2, traits: "Melee, déchirant (6+)" }], default_for: "char_shen_bird" },
        { id: "wpn_heavy_cleaver", name: "Heavy cleaver", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-", L: 2, traits: "Commotion (5+), lourd, melee, encombrant" }], default_for: "char_stig_shambler" },

        // --- Armes intégrées données automatiquement par une compétence ---
        // (voir syncInnateWeapons() dans core-state.js : ajoutées/retirées
        // automatiquement selon les compétences possédées, 0 emplacement,
        // jamais achetables, jamais retirables manuellement)
        { id: "wpn_headbutt", name: "Headbutt", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, attaques additionnelles (1)" }], cost_credits: 0, isInnateWeapon: true, granted_by_skill: "sk_coup_boule" },

        // --- Grenades à main (armes comptant comme équipement, cf counts_as_equip) ---
        { id: "wpn_grenade_explo", name: "Grenade explosive", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 5, AP: "-1", L: 2, traits: "Munitions (5+), explosion (5\"), knockback (5+), limité" }], cost_credits: 60, cost_tp: 2, counts_as_equip: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_grenade_gaz", name: "Grenade à gaz asphyxiant", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: 1, traits: "Munitions (5+), explosion (3\"), gaz, limité, toxine (3+)" }], cost_credits: 45, cost_tp: 1, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_charge_demo", name: "Charge de démolition", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 6, AP: "-3", L: 3, traits: "Munitions (6+), explosion (5\"), dommages (2), limité" }], cost_credits: 85, cost_tp: 3, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grenade_frag", name: "Grenade frag", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), knockback (6+), limité" }], cost_credits: 30, cost_tp: 0, counts_as_equip: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_grenade_inc", name: "Grenade incendiaire", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (5+), explosion (5\"), flammes (5+), limité" }], cost_credits: 40, cost_tp: 2, counts_as_equip: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_grenade_krak", name: "Grenade krak", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+), limité" }], cost_credits: 45, cost_tp: 1, counts_as_equip: true, is_weapon_pious: true, is_weapon_fanatic: true },
        { id: "wpn_grenade_phos", name: "Grenade au phosphore", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 4, AP: "-2", L: 2, traits: "Munitions (5+), explosion (3\"), flammes (5+), limité, instable" }], cost_credits: 65, cost_tp: 3, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grenade_photon", name: "Grenade à photon", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (5\"), flash, limité" }], cost_credits: 15, cost_tp: 1, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grenade_plasma", name: "Grenade à plasma", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 5, AP: "-1", L: 2, traits: "Munitions (4+), explosion (3\"), dommages (2), limité, instable" }], cost_credits: 70, cost_tp: 3, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grenade_rad", name: "Grenade rad", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 2, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), limité, rad-phage" }], cost_credits: 25, cost_tp: 1, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: false },
        { id: "wpn_grenade_fumi", name: "Grenade fumigène", type: "Grenade", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (3\"), limité, fumée" }], cost_credits: 15, cost_tp: 0, counts_as_equip: true, is_weapon_pious: false, is_weapon_fanatic: true }
    ],

    // ===== EQUIPEMENTS =====
    equipment: [
        // --- Armures ---
        { id: "eq_armure_cara_leg", name: "Armure carapace légère", type: "Armure", cost_credits: 100, cost_tp: 1, effect: "Améliore la sauvegarde de 1. Réduit l'initiative de 1.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_armure_cara_lourde", name: "Armure carapace lourde", type: "Armure", cost_credits: 140, cost_tp: 3, effect: "Améliore la sauvegarde de 2. Réduit l'initiative de 2. Malus aux jets d'agilité de -1.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_combi_protec", name: "Hazard suit", type: "Armure", cost_credits: 10, cost_tp: 0, effect: "Immunisé flammes (X+) et rad-phage.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: true },
        { id: "eq_mesh_armour", name: "Mesh armour", type: "Armure", cost_credits: 40, cost_tp: 0, effect: "Améliore sauvegarde de 1 au CàC.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: false },
        { id: "eq_nuage_reflec", name: "Reflec shroud", type: "Armure", cost_credits: 25, cost_tp: 1, effect: "AP des armes las, plasma et fuseur = '-'.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_champ_reflec", name: "Refractor shield", type: "Armure", cost_credits: 50, cost_tp: 2, effect: "Sauvegarde invulnérable de 5+. Au 1er jet de 1, ne fonctionne plus. Cumulable avec les autres armures.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: false },

        // --- Équipement personnel ---
        { id: "eq_bio_booster", name: "Bio-booster", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1ère fois blessé : réduit léthalité de 1 (si 0, jette 2 dés et garde au choix).", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_corde_descente", name: "Drop rig", type: "Personnel", cost_credits: 10, cost_tp: 0, effect: "Action descendre : 12\" vertical, 3\" horizontal.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: true },
        { id: "eq_lance_grappin", name: "Grapnel launcher", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "Action grappin : déplace 12\" ligne droite, doit finir plus haut.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_grav_chute", name: "Grav-chute", type: "Personnel", cost_credits: 30, cost_tp: 0, effect: "Chute sans dommage, jamais suppressed.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_kit_medical", name: "Medicae kit", type: "Personnel", cost_credits: 20, cost_tp: 0, effect: "Soigne un allié : jette 2 dés de recovery et garde au choix.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: false },
        { id: "eq_medicrane", name: "Medicrane", type: "Personnel", cost_credits: 0, effect: "Figurine à 1\", T3 Sv6+. Soigne en action gratuite.", specific_to: "merc_rogue_doc" },
        { id: "eq_lunettes_infra", name: "Photo-goggles", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Visibilité +9\", voit dans la fumée. Malus -2 init si touché par munition flash.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: true },
        { id: "eq_lampe_frontale", name: "Photo-lumens", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Visibilité +9\" mais toujours ciblable, quelle que soit la luminosité.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_respirateur", name: "Respirator", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Sauvegarde invulnérable 5+ contre le trait gaz.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: true },
        { id: "eq_servo_partiel", name: "Servo-harness partial", type: "Personnel", cost_credits: 100, cost_tp: 2, effect: "+2 Force, +1 Endurance (peut dépasser le max autorisé). Malus -1 Mvt et Init. Incompatible servo-claw/servo-harness full.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_servo_total", name: "Servo-harness full", type: "Personnel", cost_credits: 130, cost_tp: 3, effect: "Idem partiel sans les malus. Incompatible servo-claw/servo-harness partial.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_stimm_slug", name: "Stimm-slug stash", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1/bataille, en début d'activation : +2 M, S, T jusqu'à la prochaine activation. À la prochaine activation, D6 : sur 1, subit une blessure.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_dirt_bike", name: "Dirt bike", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Devient monté. M = 8\". Dash = 5\" au lieu de l'initiative.", is_equip_pious: true, is_equip_fanatic: false, is_hive_scum: false },
        {
            id: "eq_rats_kamikazes", name: "Rats kamikazes", type: "Personnel", cost_credits: 30, cost_tp: 0,
            effect: "Action rat kamikaze : sélectionner un type de grenade équipé (non à court de munitions), test de munitions, puis placer un rat au contact. Chaque round, avant la 1ère activation (après jet de priorité), tous les rats sur la table s'activent : s'ils sont à 9\" du porteur, il choisit la direction, sinon jet de dispersion ; déplacement de 6\" ligne droite (ignore décors, avec la compétence grimper). À 1\" d'un guerrier autre que son porteur : explose sur 2+ (gabarit centré sur le rat), sinon s'enfuit. Peut être tiré dessus (-1 pour toucher) : explose sur 4+.",
            is_equip_pious: true, is_equip_fanatic: false, is_hive_scum: false
        },
        {
            id: "eq_livre_redemption", name: "Livre de la rédemption", type: "Personnel", cost_credits: 50, cost_tp: 0,
            effect: "Action mots de colère : jusqu'à la fin du round, tous les fanatic dans les 6\" peuvent relancer leur jet de charge et relancer un seul résultat de 1 sur un jet pour toucher.",
            is_equip_pious: false, is_equip_fanatic: true, is_hive_scum: false
        },
        {
            id: "eq_icone_culte", name: "Icône du culte", type: "Personnel", cost_credits: 40, cost_tp: 0,
            effect: "Un seul par gang, porté par le leader ou un champion. Lors d'une activation de groupe, le porteur peut relancer son test de Ld.",
            is_equip_pious: true, is_equip_fanatic: false, is_hive_scum: false, unique_per_gang: true
        },
        {
            id: "eq_manteau_pyromane", name: "Manteau du pyromane", type: "Personnel", cost_credits: 30, cost_tp: 0,
            effect: "Toute attaque au corps à corps du porteur gagne le trait flammes (5+) tant que le porteur est actif.",
            is_equip_pious: false, is_equip_fanatic: true, is_hive_scum: false
        },
        {
            id: "eq_ridge_walker", name: "Ridge walker", type: "Personnel", cost_credits: 40, cost_tp: 0,
            effect: "Le porteur gagne les types monté et agile (agile = compétence : +1 aux jets d'agilité). M passe à 8\". En cas de dash, ajoute +5\" au lieu de l'initiative.",
            is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: false, fanatic_cost_credits: 45
        },

        // --- Accessoires d'arme ---
        { id: "eq_cristal_concen", name: "Focusing crystal", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "AP +1. L'arme devient instable.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_hotshot", name: "Hotshot las pack", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "Force +1.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_viseur_infra", name: "Infra-sight", type: "Accessoire", cost_credits: 10, cost_tp: 0, effect: "Tire à travers la fumée. Visibilité +9\".", is_equip_pious: false, is_equip_fanatic: true, is_hive_scum: false },
        { id: "eq_viseur_laser", name: "Las-projector", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit le bonus de couvert de 1 à portée courte.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_viseur", name: "Mono-sight", type: "Accessoire", cost_credits: 20, cost_tp: 0, effect: "Aimed shot : bonus +2 au lieu de +1.", is_equip_pious: true, is_equip_fanatic: true, is_hive_scum: false },
        { id: "eq_suspenseur", name: "Suspensors", type: "Accessoire", cost_credits: 40, cost_tp: 0, effect: "Arme avec * compte pour 1 emplacement au lieu de 2.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: false },
        { id: "eq_viseur_longue", name: "Telescopic sight", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit le bonus de couvert de 1 sur portée longue.", is_equip_pious: false, is_equip_fanatic: false, is_hive_scum: true }
    ],

    // ===== RÈGLES DES ACCESSOIRES =====
    accessory_rules: {
        max_per_weapon: 1,
        unequip_to_stash: true,
        desc: "Chaque arme ne peut recevoir qu'un seul accessoire. Si une arme est déséquipée et envoyée dans le stash, son accessoire aussi."
    },

    // ===== TRAITS DES ARMES =====
    weapon_traits: [
        { id: "trait_arc", name: "Arc (X)", desc: "Une arme avec ce trait a un champ de tir limité, indiqué par X." },
        { id: "trait_assaut", name: "Assaut", desc: "Après que l'utilisateur a fait une action de dash, il peut tirer en action gratuite." },
        { id: "trait_attaques_add", name: "Attaques additionnelles (X)", desc: "L'arme peut faire X attaques supplémentaires en plus des attaques normales. Uniquement pendant l'activation et si l'arme n'est pas choisie comme arme primaire ou secondaire." },
        { id: "trait_attirer", name: "Attirer", desc: "Si une figurine est touchée par une arme ayant ce trait mais pas mise hors de combat, l'attaquant peut essayer de l'attirer. Il lance un D6, et si cela dépasse la force de la cible, elle est attirée de D3\". Si elle rencontre une autre figurine, elle est attirée aussi. Si la cible finit dans les 1\" d'un de ses ennemis, elle est déplacée pour être engagée avec lui." },
        { id: "trait_auxilliaire", name: "Auxilliaire", desc: "Une arme avec ce trait ne peut qu'être attachée à une autre arme et jamais prise seule. Elle n'utilise pas d'emplacement d'arme." },
        { id: "trait_backstab", name: "Backstab", desc: "Cette arme gagne +1 en force si l'adversaire est engagé avec plus d'un ennemi." },
        { id: "trait_belier", name: "Bélier", desc: "Une arme avec ce trait ne peut être utilisée que lors d'une charge." },
        { id: "trait_bouclier", name: "Bouclier", desc: "Si la figurine est équipée avec au moins une arme ayant ce trait, elle augmente sa sauvegarde de 1 contre les tirs." },
        { id: "trait_breche", name: "Breche (X+)", desc: "Si le jet de blessure donne X ou +, il ne peut y avoir de jet d'armure." },
        { id: "trait_combi", name: "Combi", desc: "Quand on tire avec cette arme, le personnage peut choisir quel profil il utilise. Il peut aussi tirer avec les deux, mais avec une pénalité de -1 pour toucher." },
        { id: "trait_commotion", name: "Commotion (X+)", desc: "Si l'attaquant blesse son adversaire et que le jet de blessure est de X ou +, l'initiative de la cible baisse de 1 jusqu'à la fin de sa prochaine activation." },
        { id: "trait_dechiqueter", name: "Déchiqueter (X+)", desc: "Lors du jet de blessure avec cette arme, si le résultat est de X ou +, la léthalité de l'arme augmente de 1." },
        { id: "trait_dechirant", name: "Déchirant (X+)", desc: "Si le jet naturel d'une blessure avec cette arme est X ou plus, augmenter l'AP de 1." },
        { id: "trait_dommages", name: "Dommages (X)", desc: "Si un guerrier est blessé par cette arme, il perd X PV au lieu d'un. S'il faut faire un jet de dé de blessure, on ne lance que la léthalité de cette arme, quel que soit le nombre de PV perdu." },
        { id: "trait_encombrant", name: "Encombrant", desc: "Au corps à corps, les attaques avec cette arme se font avec une initiative de 1." },
        { id: "trait_explosion", name: "Explosion (3\"/5\")", desc: "Placer le gabarit correspondant sur la cible du tir. Si la touche rate, le gabarit se déplace de D6\" dans la direction indiquée par le dé de dispersion. Si le dé de dispersion indique un hit et le dé une valeur de 1, le tir est annulé." },
        { id: "trait_fiable", name: "Fiable", desc: "Une arme avec ce trait ignore le premier résultat à court de munitions obtenu à chaque round." },
        { id: "trait_flammes", name: "Flammes (X+)", desc: "Si le jet pour blesser donne X ou plus, on effectue une touche supplémentaire, même s'il n'y a pas de blessure. Faire un nouveau jet de blessure pour cette nouvelle touche." },
        { id: "trait_flash", name: "Flash", desc: "Si une cible est touchée par une arme avec flash, on ne jette pas de jet de blessure, mais d'initiative. S'il est raté, la figurine subit la condition aveugle (perd son token prêt)." },
        { id: "trait_fumee", name: "Fumée", desc: "Cette arme ne cible pas une figurine, mais un point sur le champ de bataille. Une colonne de fumée s'élève à cet endroit, bloquant les lignes de vue." },
        { id: "trait_gabarit", name: "Gabarit", desc: "Quand un tir est réalisé avec cette arme, placer le gabarit en larme. Toute figurine sous le gabarit est automatiquement touchée." },
        { id: "trait_gaz", name: "Gaz", desc: "Un guerrier ne peut faire de jet d'armure contre les armes ayant ce trait. Les guerriers équipés d'un respirateur ont une sauvegarde invulnérable de 5+ contre ces armes." },
        { id: "trait_graviton_pulse", name: "Graviton pulse", desc: "Au lieu de lancer un jet de blessure, la cible doit faire un test de force. S'il est raté, la figurine subit une blessure sans sauvegarde." },
        { id: "trait_independant", name: "Indépendant", desc: "Le porteur de cette arme ne peut pas tirer avec. À la place, elle tire en même temps que son porteur, en pouvant avoir une autre cible (touche toujours sur 4+)." },
        { id: "trait_instable", name: "Instable", desc: "Si le jet pour toucher avec cette arme donne 1, le guerrier maniant cette arme subit une touche automatique avec le profil de l'arme." },
        { id: "trait_jumelee", name: "Jumelée", desc: "Lors d'un tir avec cette arme, le dé de tir rapide peut être relancé." },
        { id: "trait_knockback", name: "Knockback (X+)", desc: "Si cette arme touche avec un résultat de X ou plus, la cible est repoussée de 1\", ce qui peut la faire tomber ou la désengager." },
        { id: "trait_lance", name: "Lance", desc: "Si le guerrier portant cette arme est monté, il ajoute +1 en force à ses attaques de charge." },
        { id: "trait_lance_bombe", name: "Lance-bombe", desc: "La première touche de la partie avec cette arme est résolue avec son profil primed, toutes les autres avec son profil utilisé." },
        { id: "trait_leger", name: "Léger", desc: "Cette arme peut être utilisée en tant qu'arme primaire ou secondaire au corps à corps, mais ne pourra faire qu'une seule attaque." },
        { id: "trait_limite", name: "Limité", desc: "Si cette arme tombe à court de munitions, elle ne peut plus être utilisée pour cette partie." },
        { id: "trait_lourd", name: "Lourd", desc: "Une arme avec ce trait ne peut tirer qu'en utilisant l'action braced shot. Une arme de corps à corps avec ce trait ne peut pas être utilisée en arme secondaire." },
        { id: "trait_maudit", name: "Maudit", desc: "Un guerrier touché par une arme maudite doit réussir un test de willpower ou subir la condition folie (insanity)." },
        { id: "trait_melee", name: "Melee", desc: "Cette arme ne peut être utilisée que quand on est engagé au corps à corps." },
        { id: "trait_munitions", name: "Munitions (X+)", desc: "Après le tir avec cette arme, lancer un D6. Si le résultat est inférieur à X, l'arme est à court de munitions." },
        { id: "trait_paire", name: "Paire (X)", desc: "Quand on attaque avec cette arme, on ajoute X attaques supplémentaires." },
        { id: "trait_parade", name: "Parade", desc: "Quand cette arme est utilisée au corps à corps, la sauvegarde augmente de 1." },
        { id: "trait_power_pack", name: "Power pack", desc: "Ne compte pas dans la limite d'armes portées (max 2 avec ce trait)." },
        { id: "trait_rad_phage", name: "Rad-phage", desc: "Quand un guerrier subit une blessure non sauvegardée d'une arme avec ce trait, il devient empoisonné aux radiations (-1 Endurance)." },
        { id: "trait_rare", name: "Rare (X+)", desc: "Lors de l'action de recharge, il faut lancer un D6 (réussi sur X+)." },
        { id: "trait_shock", name: "Shock (X+)", desc: "Lors du jet pour toucher, si le résultat est X+, on considère que le jet de blessure donne 6." },
        { id: "trait_temeraire", name: "Téméraire", desc: "Peut toucher toute figurine en ligne de vue dans les 6\", même amie, à déterminer aléatoirement." },
        { id: "trait_tir_rapide", name: "Tir rapide (X)", desc: "Ajoute le dé de tir rapide (nombre de touches potentielles et risque de court de munitions)." },
        { id: "trait_tir_unique", name: "Tir unique", desc: "Ne peut tirer qu'une fois par partie sans pouvoir être rechargée." },
        { id: "trait_toile", name: "Toile", desc: "Pas de sauvegarde d'armure (sauf invulnérable). La cible blessée gagne la condition entoilé." },
        { id: "trait_toxine", name: "Toxine (X+)", desc: "Lors du jet de blessure, on ignore l'endurance de la cible, blessée sur X+." }
    ],

    // ===== CARTES TACTIQUES (18) =====
    tactics: [
        { id: "tac_point_blank_shot", name: "Point-blank shot", timing: "Quand un guerrier s'active, avant ses actions", effect: "Une des armes du guerrier qui n'a pas les traits explosions ou template gagne le trait léger." },
        { id: "tac_hidden_stash", name: "Hidden stash", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pendant son activation, ce guerrier peut faire gratuitement une action de recharge." },
        { id: "tac_suppressing_fire", name: "Suppressing fire", timing: "Quand un guerrier tire", effect: "La cible est suppressed même si elle n'est pas touchée. Les compétences ne peuvent empêcher le suppressed." },
        { id: "tac_burst_of_courage", name: "Burst of courage", timing: "Avant de faire un bottle check", effect: "Le test est automatiquement réussi." },
        { id: "tac_adrenaline_surge", name: "Adrenaline surge", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire une action supplémentaire." },
        { id: "tac_desperate_effort", name: "Desperate effort", timing: "Juste avant de choisir quel guerrier va s'activer", effect: "Activer le guerrier comme s'il avait un marqueur prêt. À la fin de son activation, il est suppressed et subit une blessure qu'on ne peut sauvegarder ou empêcher." },
        { id: "tac_grenade_bouquet", name: "Grenade bouquet", timing: "Quand un guerrier tire avec une grenade ayant le trait explosion", effect: "Le guerrier résout 3 attaques ciblant le même ennemi. Elles dévient toutes et l'arme devient à court de munitions." },
        { id: "tac_quick_finish", name: "Quick finish", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire un coup de grâce en action gratuite." },
        { id: "tac_remorseless_killer", name: "Remorseless killer", timing: "Quand un guerrier fait un coup de grâce, avant de jeter les dés", effect: "L'ennemi est directement out of combat sans jet de dé." },
        { id: "tac_last_gap", name: "Last gap", timing: "Quand un guerrier reçoit l'état out of action", effect: "Le guerrier peut immédiatement faire un tir avant d'être retiré du terrain." },
        { id: "tac_thundering_charge", name: "Thundering charge", timing: "Quand un guerrier déclare une charge, avant de jeter le dé de distance", effect: "Lancer 2 dés et choisir lequel garder pour la distance de charge." },
        { id: "tac_chain_attack", name: "Chain attack", timing: "Quand un guerrier a résolu un combat et n'est plus engagé", effect: "Le guerrier peut immédiatement effectuer une charge gratuite même s'il a déjà charged ce tour. La distance de charge sera de D6+2\"." },
        { id: "tac_opening_volley", name: "Opening volley", timing: "Avant le premier round et le jet de priorité", effect: "Un guerrier peut immédiatement effectuer un tir sans perdre son état prêt." },
        { id: "tac_you", name: "You !", timing: "Quand un guerrier s'active, avant ses actions", effect: "Désigner un guerrier ennemi, le guerrier aura +1 pour blesser cet ennemi pour toute la partie. Tant que l'ennemi est sur la table, le guerrier ne peut prendre que lui pour cible de ses actions." },
        { id: "tac_rapid_healing", name: "Rapid healing", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier récupère immédiatement 1 PV perdu." },
        { id: "tac_reckless_attack", name: "Reckless attack", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pour son activation, le guerrier a +1 à sa WS. Jusqu'à sa prochaine activation, il sera touché sur un 2+ au corps à corps." },
        { id: "tac_rapid_fire", name: "Rapid fire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Durant son activation, ce guerrier peut faire une action de tir gratuitement (pas une en plus)." },
        { id: "tac_crossfire", name: "Crossfire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Si ce guerrier fait une attaque de tir sur un ennemi qui a déjà été pris pour cible par un allié à ce round, le tir touche automatiquement." }
    ],

    // ===== TERRITOIRES (19) =====
    territories: [
        { id: "ter_settlement", name: "Settlement", income: 15, optionType: "discount_ganger", optionText: "Option : Recruter un ganger (-25 cr sur coût)", desc: "Revenu : 15 cr OU recruter un ganger pour 25 cr de moins." },
        { id: "ter_bullet_den", name: "Bullet den", income: 15, optionType: "discount_ammojack", optionText: "Option : Recruter un Ammo-jack (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Ammo-jack pour 30 cr de moins." },
        { id: "ter_rogue_doc_shop", name: "Rogue doc shop", income: 15, optionType: "discount_doc", optionText: "Option : Recruter un Rogue doc (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Rogue doc pour 30 cr de moins." },
        { id: "ter_mess_shack", name: "Mess Shack", income: 15, optionType: "discount_slopper", optionText: "Option : Recruter un Slopper (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Slopper pour 30 cr de moins." },
        { id: "ter_drinking_hole", name: "Drinking hole", income: 15, optionType: "discount_watcher", optionText: "Option : Recruter un Hive watcher (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Hive watcher pour 30 cr de moins." },
        { id: "ter_fence_hangout", name: "Fence hangout", income: 15, optionType: "discount_runner", optionText: "Option : Recruter un Dome runner (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Dome runner pour 30 cr de moins." },
        { id: "ter_bounty_den", name: "Bounty den", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_generatorium", name: "Generatorium", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_corpse_farm", name: "Corpse farm", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_tunnels", name: "Tunnels", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_tech_bazaar", name: "Tech bazaar", income: 15, passive: "+1 TP", desc: "Revenu : 15 cr. Passif : +1 TP au Trading Post." },
        { id: "ter_promethium_cache", name: "Promethium cache", income: 15, optionType: "items_suits", optionText: "Option : 3 Combinaisons de protection gratos", desc: "Revenu : 15 cr OU récupérer gratuitement 3 combinaisons de protection dans le Stash." },
        { id: "ter_collapsed_dome", name: "Collapsed dome", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_bone_shrine", name: "Bone shrine", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_mine_workings", name: "Mine workings", income: 20, optionType: "items_respirators", optionText: "Option : 2 Respirateurs gratos", desc: "Revenu : 20 cr OU récupérer gratuitement 2 respirateurs dans le Stash." },
        { id: "ter_gambling_den", name: "Gambling den", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_synth_still", name: "Synth still", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_old_ruins", name: "Old ruins", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_fighting_pit", name: "Fighting pit", income: 25, desc: "Revenu : 25 crédits." }
    ],

    // ===== CONDITIONS =====
    conditions: {
        "Fearsome": "Lorsqu'il est pris pour cible d'une attaque de corps à corps, l'attaquant fait un jet de Wil. En cas d'échec, sa WS passe à 6+. Les guerriers fearsome ne sont pas affectés, sauf si la cible est terrifying.",
        "Frénésie": "Le guerrier doit déclarer une charge s'il commence son activation à son M + 6\" d'un ennemi. Il devra charger l'ennemi le plus proche. Ils gagnent +1A.",
        "Haine": "Quand le guerrier engage, charge ou est la cible de ces actions par une figurine haïe, il peut relancer les jets pour toucher ratés.",
        "Blessé": "Le guerrier perd toutes ses compétences jusqu'à ce qu'il récupère un point de vie.",
        "Intoxiqué": "Le guerrier baisse de 1 ses WS et BS, mais augmente son cool de 1.",
        "Terrifying": "A les mêmes avantages qu'un guerrier fearsome. De plus, pour charger ou engager ce guerrier, il faut réussir un test Will. En cas d'échec, l'attaquant reste sur place.",
        "Entoilé": "Le guerrier ne peut plus se déplacer, ni être déplacé et il subit un -1 à tous ses jets pour toucher. À la fin de son activation, un test de force réussi le libère.",
        "Folie": "Quand un guerrier atteint de folie s'active, jeter un dé sur le tableau de folie pour voir comment il va agir. À la fin de son activation, un jet de Will réussi annule la condition folie."
    }
};
