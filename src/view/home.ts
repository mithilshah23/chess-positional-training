import {Chessground} from 'chessground';
import {h} from 'snabbdom';
import {Ctrl, FenArrayType} from '../ctrl';
import {Challenge, Game, Renderer} from '../interfaces';
import OngoingGames from '../ongoingGames';
import {href} from '../routing';

export const renderHome: Renderer = ctrl => (ctrl.auth.me ? userHome(ctrl) : anonHome());

const standardOpeningsMap: { [openingName: string]: FenArrayType } = {
    "Indian Game, General (A45)": FenArrayType.IndianGameGeneral_A45,
    "Sicilian Defense, Closed Variation (B23)": FenArrayType.SicilianDefenseClosedVariation_B23,
    "King's Indian Attack, General (A07)": FenArrayType.KingsIndianAttackGeneral_A07,
    "Zukertort Opening, Sicilian Invitation (A04)": FenArrayType.ZukertortOpeningSicilianInvitation_A04,
    "Trompowsky Attack, General (A45)": FenArrayType.TrompowskyAttackGeneral_A45,
    "Sicilian Defense, Nyezhmetdinov-Rossolimo Attack (B30)": FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttack_B30,
    "Sicilian Defense, Alapin Variation, General (B22)": FenArrayType.SicilianDefenseAlapinVariationGeneral_B22,
    "Sicilian Defense, Najdorf Variation (B90-99)": FenArrayType.SicilianDefenseNajdorfVariation_B90_99,
    "Pirc Defense, General (B07)": FenArrayType.PircDefenseGeneral_B07,
    "Sicilian Defense, Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation (B31)": FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariation_B31,
    "French Defense, Exchange Variation (C01)": FenArrayType.FrenchDefenseExchangeVariation_C01,
    "Queen Pawn Game, London System (D02)": FenArrayType.QueenPawnGameLondonSystem_D02,
    "Zukertort Opening, Symmetrical Variation (A04)": FenArrayType.ZukertortOpeningSymmetricalVariation_A04,
    "Sicilian Defense, Old Sicilian, General (B30)": FenArrayType.SicilianDefenseOldSicilianGeneral_B30,
    "Sicilian Defense, French Variation (B40)": FenArrayType.SicilianDefenseFrenchVariation_B40,
    "Sicilian Defense, Canal Attack (B51)": FenArrayType.SicilianDefenseCanalAttack_B51,
    "English Opening, King's English Variation, General (A20)": FenArrayType.EnglishOpeningKingsEnglishVariationGeneral_A20,
    "Sicilian Defense, Najdorf Variation, English Attack (B90)": FenArrayType.SicilianDefenseNajdorfVariationEnglishAttack_B90,
    "Italian Game, Classical Variation, Giuoco Pianissimo (C53)": FenArrayType.ItalianGameClassicalVariationGiuocoPianissimo_C53,
    "Catalan Opening, Closed Variation (E06)": FenArrayType.CatalanOpeningClosedVariation_E06,
    "Sicilian Defense, Canal Attack, Main Line (B52)": FenArrayType.SicilianDefenseCanalAttackMainLine_B52,
    "Modern Defense, Standard Defense (B06)": FenArrayType.ModernDefenseStandardDefense_B06,
    "Modern Defense, Queen Pawn Fianchetto (A40)": FenArrayType.ModernDefenseQueenPawnFianchetto_A40,
    "Sicilian Defense, Alapin Variation, Smith-Morra Declined (B22)": FenArrayType.SicilianDefenseAlapinVariationSmithMorraDeclined_B22,
    "English Opening, Anglo-Indian Defense, King's Knight Variation (A15)": FenArrayType.EnglishOpeningAngloIndianDefenseKingsKnightVariation_A15,
    "Sicilian Defense, Alapin Variation, Barmen Defense (B22)": FenArrayType.SicilianDefenseAlapinVariationBarmenDefense_B22,
    "French Defense, King's Indian Attack (C00)": FenArrayType.FrenchDefenseKingsIndianAttack_C00,
    "Modern Defense, King Pawn Fianchetto (B06)": FenArrayType.ModernDefenseKingPawnFianchetto_B06,
    "Semi-Slav Defense, General (D43)": FenArrayType.SemiSlavDefenseGeneral_D43,
    "King's Indian Attack, Symmterical Defense (A05)": FenArrayType.KingsIndianAttackSymmtericalDefense_A05,
    "Indian Game, Anti-Nimzo-indian (E10)": FenArrayType.IndianGameAntiNimzoindian_E10,
    "English Opening, Anglo-Indian Defense, King's Indian Formation (A15)": FenArrayType.EnglishOpeningAngloIndianDefenseKingsIndianFormation_A15,
    "Queen's Gambit Declined, General (D30)": FenArrayType.QueensGambitDeclinedGeneral_D30,
    "Queen Pawn Game, Sarratt Attack (D00)": FenArrayType.QueenPawnGameSarrattAttack_D00,
    "Sicilian Defense, Kan Variation, Knight Variation (B43)": FenArrayType.SicilianDefenseKanVariationKnightVariation_B43,
    "Queen's Gambit Declined, Exchange Variation, Positional Variation (D35)": FenArrayType.QueensGambitDeclinedExchangeVariationPositionalVariation_D35,
    "Queen Pawn Game, Zukertort Variation (D02)": FenArrayType.QueenPawnGameZukertortVariation_D02,
    "Sicilian Defense, Paulsen Variation, Bastrikov Variation (B47)": FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B47,
    "Italian Game, Two Knights Defense, Modern Bishop's Opening (C55)": FenArrayType.ItalianGameTwoKnightsDefenseModernBishopsOpening_C55,
    "King's Indian Defense, Normal Variation, King's Knight Variation (E60)": FenArrayType.KingsIndianDefenseNormalVariationKingsKnightVariation_E60,
    "Caro-Kann Defense, Exchange Variation (B13)": FenArrayType.CaroKannDefenseExchangeVariation_B13,
    "Sicilian Defense, Closed Variation, Traditional (B25)": FenArrayType.SicilianDefenseClosedVariationTraditional_B25,
    "Philidor Defense, Lion Variation (C41)": FenArrayType.PhilidorDefenseLionVariation_C41,
    "Slav Defense, General (D10)": FenArrayType.SlavDefenseGeneral_D10,
    "Slav Defense, Modern Line (D11)": FenArrayType.SlavDefenseModernLine_D11,
    "Queen Pawn Game, Symmetrical Variation (D02)": FenArrayType.QueenPawnGameSymmetricalVariation_D02,
    "Sicilian Defense, Lasker-Pelikan Variation, Sveshnikov Variation, Chelyabinsk Variation (B33)": FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariationChelyabinskVariation_B33,
    "Sicilian Defense, Modern Variations (B50)": FenArrayType.SicilianDefenseModernVariations_B50,
    "Sicilian Defense, Delayed Alapin Variation (B40)": FenArrayType.SicilianDefenseDelayedAlapinVariation_B40,
    "Sicilian Defense, Delayed Alapin (B50)": FenArrayType.SicilianDefenseDelayedAlapin_B50,
    "Horwitz Defense, General (A40)": FenArrayType.HorwitzDefenseGeneral_A40,
    "Semi-Slav Defense, Stoltz Variation (D45)": FenArrayType.SemiSlavDefenseStoltzVariation_D45,
    "Catalan Opening, General (E00)": FenArrayType.CatalanOpeningGeneral_E00,
    "Sicilian Defense, Kan Variation, Modern Variation (B42)": FenArrayType.SicilianDefenseKanVariationModernVariation_B42,
    "English Opening, Anglo-Indian Defense, Queen's Knight Variation (A16)": FenArrayType.EnglishOpeningAngloIndianDefenseQueensKnightVariation_A16,
    "Sicilian Defense, Chekhover Variation (B53)": FenArrayType.SicilianDefenseChekhoverVariation_B53,
    "Caro-Kann Defense, Advance Variation, Short Variation (B12)": FenArrayType.CaroKannDefenseAdvanceVariationShortVariation_B12,
    "French Defense, Steinitz Variation, Boleslavsky Variation (C11)": FenArrayType.FrenchDefenseSteinitzVariationBoleslavskyVariation_C11,
    "Indian Game, London System (A48)": FenArrayType.IndianGameLondonSystem_A48,
    "Nimzo-Indian Defense, Classical Variation (E32)": FenArrayType.NimzoIndianDefenseClassicalVariation_E32,
    "Indian Game, Pseudo-King's Indian Variation (A49)": FenArrayType.IndianGamePseudoKingsIndianVariation_A49,
    "English Opening, Anglo-Indian Defense, Mikenas-Carls Variation (A15)": FenArrayType.EnglishOpeningAngloIndianDefenseMikenasCarlsVariation_A15,
    "English Opening, Agincourt Defense, Neo Catalan Declined (A14)": FenArrayType.EnglishOpeningAgincourtDefenseNeoCatalanDeclined_A14,
    "Caro-Kann Defense, General (B10)": FenArrayType.CaroKannDefenseGeneral_B10,
    "Sicilian Defense, Grand Prix Attack (B23)": FenArrayType.SicilianDefenseGrandPrixAttack_B23,
    "Indian Game, London System (A46)": FenArrayType.IndianGameLondonSystem_A46,
    "Zukertort Opening, Kingside Fianchetto (A04)": FenArrayType.ZukertortOpeningKingsideFianchetto_A04,
    "Catalan Opening, Open Defense (E04)": FenArrayType.CatalanOpeningOpenDefense_E04,
    "Slav Defense, Exchange Variation (D10)": FenArrayType.SlavDefenseExchangeVariation_D10,
    "Queen's Gambit Declined, Three Knights Variation, General (D37)": FenArrayType.QueensGambitDeclinedThreeKnightsVariationGeneral_D37,
    "Sicilian Defense, Accelerated Dragon, Modern  Bc4 Variation (B35)": FenArrayType.SicilianDefenseAcceleratedDragonModernBc4Variation_B35,
    "Nimzo-Larsen Attack, Modern Variation (A01)": FenArrayType.NimzoLarsenAttackModernVariation_A01,
    "Spanish Game, General (C60)": FenArrayType.SpanishGameGeneral_C60,
    "English Opening, Agincourt Defense (A13)": FenArrayType.EnglishOpeningAgincourtDefense_A13,
    "King's Indian Defense, Fianchetto Variation, Classical Fianchetto (E67)": FenArrayType.KingsIndianDefenseFianchettoVariationClassicalFianchetto_E67,
    "Gruenfeld Defense, Exchange Variation (D85)": FenArrayType.GruenfeldDefenseExchangeVariation_D85,
    "Sicilian Defense, Closed Variation, Fianchetto Variation (B24)": FenArrayType.SicilianDefenseClosedVariationFianchettoVariation_B24,
    "Indian Game, Knights Variation, General (A46)": FenArrayType.IndianGameKnightsVariationGeneral_A46,
    "Bogo-Indian Defense, Grünfeld Variation (E11)": FenArrayType.BogoIndianDefenseGrunfeldVariation_E11,
    "English Opening, Great Snake Variation (A10)": FenArrayType.EnglishOpeningGreatSnakeVariation_A10,
    "Indian Game, Przepiorka Variation (A49)": FenArrayType.IndianGamePrzepiorkaVariation_A49,
    "Slav Defense, Quiet Variation, Schallopp Defense (D12)": FenArrayType.SlavDefenseQuietVariationSchalloppDefense_D12,
    "King's Indian Defense, Orthodox Variation, General (E91)": FenArrayType.KingsIndianDefenseOrthodoxVariationGeneral_E91,
    "Sicilian Defense, Kalashnikov Variation (B32)": FenArrayType.SicilianDefenseKalashnikovVariation_B32,
    "Rat Defense, See also,  Modern Defense (for lines with ...g6) (A41)": FenArrayType.RatDefenseSeealsoModernDefenseforlineswithg6_A41,
    "Zukertort Opening, Nimzo-Larsen Variation (A04)": FenArrayType.ZukertortOpeningNimzoLarsenVariation_A04,
    "Caro-Kann Defense, Advance Variation, Botvinnik-Carls Defense (B12)": FenArrayType.CaroKannDefenseAdvanceVariationBotvinnikCarlsDefense_B12,
    "Queen Pawn Game, Symmetrical Variation, Pseudo-Catalan (D02)": FenArrayType.QueenPawnGameSymmetricalVariationPseudoCatalan_D02,
    "Scandinavian Defense, Mieses-Kotroc Variation (B01)": FenArrayType.ScandinavianDefenseMiesesKotrocVariation_B01,
    "Gruenfeld Defense, Exchange Variation, Modern Exchange Variation (D85)": FenArrayType.GruenfeldDefenseExchangeVariationModernExchangeVariation_D85,
    "Bird Opening, Dutch Variation (A03)": FenArrayType.BirdOpeningDutchVariation_A03,
    "Modern Defense, Standard Line (B06)": FenArrayType.ModernDefenseStandardLine_B06,
    "Spanish Game, Morphy Defense, Anderssen Variation (C77)": FenArrayType.SpanishGameMorphyDefenseAnderssenVariation_C77,
    "Slav Defense, Quiet Variation (D11)": FenArrayType.SlavDefenseQuietVariation_D11,
    "Sicilian Defense, Four Knights Variation (B45)": FenArrayType.SicilianDefenseFourKnightsVariation_B45,
    "Caro-Kann Defense, Two Knights Attack (B10)": FenArrayType.CaroKannDefenseTwoKnightsAttack_B10,
    "Sicilian Defense, Classical Variation, General (B56)": FenArrayType.SicilianDefenseClassicalVariationGeneral_B56,
    "Indian Game, Yusupov-Rubinstein System (A46)": FenArrayType.IndianGameYusupovRubinsteinSystem_A46,
    "Hungarian Opening, General (A00)": FenArrayType.HungarianOpeningGeneral_A00,
    "Torre Attack, Fianchetto Defense (A48)": FenArrayType.TorreAttackFianchettoDefense_A48,
    "French Defense, Rubinstein Variation, Blackburne Defense (C10)": FenArrayType.FrenchDefenseRubinsteinVariationBlackburneDefense_C10,
    "Czech Defense, General (B07)": FenArrayType.CzechDefenseGeneral_B07,
    "Scandinavian Defense, Main Lines (B01)": FenArrayType.ScandinavianDefenseMainLines_B01,
    "Four Knights Game, Scotch Variation, Accepted (C47)": FenArrayType.FourKnightsGameScotchVariationAccepted_C47,
    "Sicilian Defense, Najdorf Variation, Adams Attack (B90)": FenArrayType.SicilianDefenseNajdorfVariationAdamsAttack_B90,
    "Spanish Game, Closed Variations (C84)": FenArrayType.SpanishGameClosedVariations_C84,
    "French Defense, Tarrasch Variation, Closed Variation, Main Line (C06)": FenArrayType.FrenchDefenseTarraschVariationClosedVariationMainLine_C06,
    "Sicilian Defense, Accelerated Dragon, Maroczy Bind (B38)": FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBind_B38,
    "King's Pawn Opening, General (B00)": FenArrayType.KingsPawnOpeningGeneral_B00,
    "Sicilian Defense, General (B20-99)": FenArrayType.SicilianDefenseGeneral_B20_99,
    "English Opening, Symmetrical Variation, General (A30)": FenArrayType.EnglishOpeningSymmetricalVariationGeneral_A30,
    "Sicilian Defense, Najdorf Variation, Opocensky Variation (B92)": FenArrayType.SicilianDefenseNajdorfVariationOpocenskyVariation_B92,
    "English Opening, Anglo-Slav Variation, General (A11)": FenArrayType.EnglishOpeningAngloSlavVariationGeneral_A11,
    "Bogo-Indian Defense, Nimzowitsch Variation (E11)": FenArrayType.BogoIndianDefenseNimzowitschVariation_E11,
    "Sicilian Defense, Dragon Variation, Yugoslav Attack, Modern Line (B76)": FenArrayType.SicilianDefenseDragonVariationYugoslavAttackModernLine_B76,
    "King's Indian Defense, Normal Variation, Rare Defenses (E90)": FenArrayType.KingsIndianDefenseNormalVariationRareDefenses_E90,
    "Caro-Kann Defense, Advance Variation (B12)": FenArrayType.CaroKannDefenseAdvanceVariation_B12,
    "King's Indian Defense, Fianchetto Variation, Panno Variation (E63)": FenArrayType.KingsIndianDefenseFianchettoVariationPannoVariation_E63,
    "Caro-Kann Defense, Advance Variation, Tal Variation (B12)": FenArrayType.CaroKannDefenseAdvanceVariationTalVariation_B12,
    "Scandinavian Defense, Gubinsky-Melts Defense (B01)": FenArrayType.ScandinavianDefenseGubinskyMeltsDefense_B01,
    "Indian Game, Spielmann-Indian (A46)": FenArrayType.IndianGameSpielmannIndian_A46,
    "Indian Game, Wade-Tarkatower Defense (A46)": FenArrayType.IndianGameWadeTarkatowerDefense_A46,
    "Spanish Game, Morphy Defense (C78)": FenArrayType.SpanishGameMorphyDefense_C78,
    "French Defense, Advance Variation, Euwe Variation (C02)": FenArrayType.FrenchDefenseAdvanceVariationEuweVariation_C02,
    "Torre Attack, Classical Defense (A46)": FenArrayType.TorreAttackClassicalDefense_A46,
    "Caro-Kann Defense, Classical Variation (B18)": FenArrayType.CaroKannDefenseClassicalVariation_B18,
    "Italian Game, Giuoco Pianissimo, Normal (C50)": FenArrayType.ItalianGameGiuocoPianissimoNormal_C50,
    "Sicilian Defense, Paulsen Variation (B46)": FenArrayType.SicilianDefensePaulsenVariation_B46,
    "King's Indian Defense, Makagonov Variation (E71)": FenArrayType.KingsIndianDefenseMakagonovVariation_E71,
    "Bird Opening, General (A02)": FenArrayType.BirdOpeningGeneral_A02,
    "Caro-Kann Defense, Tartakower Variation (B15)": FenArrayType.CaroKannDefenseTartakowerVariation_B15,
    "Sicilian Defense, Kan Variation, Maroczy Bind, Reti Variation (B41)": FenArrayType.SicilianDefenseKanVariationMaroczyBindRetiVariation_B41,
    "Nimzo-Larsen Attack, Classical Variation (A01)": FenArrayType.NimzoLarsenAttackClassicalVariation_A01,
    "Alekhine Defense, Exchange Variation (B03)": FenArrayType.AlekhineDefenseExchangeVariation_B03,
    "Indian Game, Kingside Fianchetto (E61)": FenArrayType.IndianGameKingsideFianchetto_E61,
    "Caro-Kann Defense, Classical Variation, Seirawan Variation (B19)": FenArrayType.CaroKannDefenseClassicalVariationSeirawanVariation_B19,
    "Zukertort Opening, Dutch Variation (A04)": FenArrayType.ZukertortOpeningDutchVariation_A04,
    "Dutch Defense, General (A80)": FenArrayType.DutchDefenseGeneral_A80,
    "Sicilian Defense, Paulsen Variation, Bastrikov Variation (B48)": FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B48,
    "Queen's Gambit Declined, Ragozin Defense (D38)": FenArrayType.QueensGambitDeclinedRagozinDefense_D38,
    "King's Indian Defense, Orthodox Variation, Positional Defense (E94)": FenArrayType.KingsIndianDefenseOrthodoxVariationPositionalDefense_E94,
    "Sicilian Defense, Scheveningen Variation, Classical Variation (B84)": FenArrayType.SicilianDefenseScheveningenVariationClassicalVariation_B84,
    "Italian Game, Italian Variation (C50)": FenArrayType.ItalianGameItalianVariation_C50,
    "Slav Defense, Chameleon Variation (D15)": FenArrayType.SlavDefenseChameleonVariation_D15,
    "King's Indian Defense, Saemisch Variation, Normal Defense (E81)": FenArrayType.KingsIndianDefenseSaemischVariationNormalDefense_E81,
    "Nimzowitsch-Larsen Attack, General (A06)": FenArrayType.NimzowitschLarsenAttackGeneral_A06,
    "English Opening, Symmetrical Variation, Anti-Benoni Variation (A31)": FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariation_A31,
    "Sicilian Defense, Lasker-Pelikan Variation, General (B33)": FenArrayType.SicilianDefenseLaskerPelikanVariationGeneral_B33,
    "Sicilian Defense, Accelerated Dragon, Modern Variation (B34)": FenArrayType.SicilianDefenseAcceleratedDragonModernVariation_B34,
    "Zukertort Opening, Queen Pawn Defense (A06)": FenArrayType.ZukertortOpeningQueenPawnDefense_A06,
    "Sicilian Defense, Hyperaccelerated Dragon (B27)": FenArrayType.SicilianDefenseHyperacceleratedDragon_B27,
    "Scotch Game, Mieses Variation (C45)": FenArrayType.ScotchGameMiesesVariation_C45,
    "Russian Game, Nimzowitsch Attack (C42)": FenArrayType.RussianGameNimzowitschAttack_C42,
    "English Opening, Symmetrical Variation, Two Knights Line (A37)": FenArrayType.EnglishOpeningSymmetricalVariationTwoKnightsLine_A37,
    "King's Indian Defense, Orthodox Variation, Gligoric-Taimanov System (E92)": FenArrayType.KingsIndianDefenseOrthodoxVariationGligoricTaimanovSystem_E92,
    "Scandinavian Defense, Main Lines, Mieses Variation (B01)": FenArrayType.ScandinavianDefenseMainLinesMiesesVariation_B01,
    "English Opening, Symmetrical Variation, Symmetrical Variation (A36)": FenArrayType.EnglishOpeningSymmetricalVariationSymmetricalVariation_A36,
    "Scandinavian Defense, Modern Variation (B01)": FenArrayType.ScandinavianDefenseModernVariation_B01,
    "Caro-Kann Defense, Two Knights Attack, Mindeno Variation, Exchange Line (B11)": FenArrayType.CaroKannDefenseTwoKnightsAttackMindenoVariationExchangeLine_B11,
    "Owen Defense, General (B00)": FenArrayType.OwenDefenseGeneral_B00,
    "English Opening, Symmetrical Variation, Hedgehog Defense (A30)": FenArrayType.EnglishOpeningSymmetricalVariationHedgehogDefense_A30,
    "Queen's Gambit Declined, Modern Variation (D50)": FenArrayType.QueensGambitDeclinedModernVariation_D50,
    "Sicilian Defense, Closed Variation (B26)": FenArrayType.SicilianDefenseClosedVariation_B26,
    "Sicilian Defense, Najdorf Variation (B94)": FenArrayType.SicilianDefenseNajdorfVariation_B94,
    "Sicilian Defense, Richter-Rauzer Variation, Neo-Modern Variation (B67)": FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariation_B67,
    "English Opening, Agincourt Defense, King's Knight (A13)": FenArrayType.EnglishOpeningAgincourtDefenseKingsKnight_A13,
    "Queen Pawn Game, Veresov Attack (D00)": FenArrayType.QueenPawnGameVeresovAttack_D00,
    "French Defense, Advance Variation, Paulsen Attack (C02)": FenArrayType.FrenchDefenseAdvanceVariationPaulsenAttack_C02,
    "English Opening, General (A10)": FenArrayType.EnglishOpeningGeneral_A10,
    "Benoni Defense, General (A43)": FenArrayType.BenoniDefenseGeneral_A43,
    "Sicilian Defense, French Variation, Westerinen Attack (B40)": FenArrayType.SicilianDefenseFrenchVariationWesterinenAttack_B40,
    "Rat Defense, English Rat (A41)": FenArrayType.RatDefenseEnglishRat_A41,
    "French Defense, Tarrasch Variation, Morozevich Variation (C03)": FenArrayType.FrenchDefenseTarraschVariationMorozevichVariation_C03,
    "Sicilian Defense, Kan Variation, Polugaevsky Variation (B42)": FenArrayType.SicilianDefenseKanVariationPolugaevskyVariation_B42,
    "Queen's Gambit Declined, Charousek (Petrosian) Variation (D31)": FenArrayType.QueensGambitDeclinedCharousekPetrosianVariation_D31,
    "Scotch Game, Classical Variation (C45)": FenArrayType.ScotchGameClassicalVariation_C45,
    "Nimzo-Indian Defense, Kmoch Variation (E20)": FenArrayType.NimzoIndianDefenseKmochVariation_E20,
    "English Opening, King's English Variation, Four Knights Variation, Fianchetto Lines (A29)": FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationFianchettoLines_A29,
    "French Defense, Tarrasch Variation, Open System, Euwe-Keres Line (C07)": FenArrayType.FrenchDefenseTarraschVariationOpenSystemEuweKeresLine_C07,
    "Sicilian Defense, Accelerated Dragon, Maroczy Bind, General (B36)": FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindGeneral_B36,
    "Queen Pawn Game, Colle System (D04)": FenArrayType.QueenPawnGameColleSystem_D04,
    "French Defense, Advance Variation, Main Line (C02)": FenArrayType.FrenchDefenseAdvanceVariationMainLine_C02,
    "Benko Gambit, Accepted, Fully Accepted Variation (A58)": FenArrayType.BenkoGambitAcceptedFullyAcceptedVariation_A58,
    "Benoni Defense, Modern Variation (A56)": FenArrayType.BenoniDefenseModernVariation_A56,
    "French Defense, Tarrasch Variation, Closed Variation (C05)": FenArrayType.FrenchDefenseTarraschVariationClosedVariation_C05,
    "Sicilian Defense, Najdorf Variation, Amsterdam Variation (B93)": FenArrayType.SicilianDefenseNajdorfVariationAmsterdamVariation_B93,
    "Caro-Kann Defense, Accelerated Panov Attack, Modern Variation (B10)": FenArrayType.CaroKannDefenseAcceleratedPanovAttackModernVariation_B10,
    "Queen Pawn Game, Chigorin  Variation (D02)": FenArrayType.QueenPawnGameChigorinVariation_D02,
    "Slav Defense, Czech Variation, Classical System (D18)": FenArrayType.SlavDefenseCzechVariationClassicalSystem_D18,
    "Modern Defense, Averbakh Variation (A42)": FenArrayType.ModernDefenseAverbakhVariation_A42,
    "Sicilian Defense, Snyder Variation (B20)": FenArrayType.SicilianDefenseSnyderVariation_B20,
    "English Opening, Anglo-Dutch Defense (A10)": FenArrayType.EnglishOpeningAngloDutchDefense_A10,
    "Queen Pawn Game, Levitsky Attack (D00)": FenArrayType.QueenPawnGameLevitskyAttack_D00,
    "Neo-Gruenfeld Defense, Classical Variation, Original Defense (D78)": FenArrayType.NeoGruenfeldDefenseClassicalVariationOriginalDefense_D78,
    "Spanish Game, Morphy Defense, Breyer Defense, Zaitsev Hybrid (C95)": FenArrayType.SpanishGameMorphyDefenseBreyerDefenseZaitsevHybrid_C95,
    "French Defense, Tarrasch Variation, Chistyakov Defense (C07)": FenArrayType.FrenchDefenseTarraschVariationChistyakovDefense_C07,
    "Nimzo-Indian Defense, Three Knights Variation, Duchamp Variation (E21)": FenArrayType.NimzoIndianDefenseThreeKnightsVariationDuchampVariation_E21,
    "Dutch Defense, Semi-Leningrad Variation (A81)": FenArrayType.DutchDefenseSemiLeningradVariation_A81,
    "Scotch Game, Schmidt Variation (C45)": FenArrayType.ScotchGameSchmidtVariation_C45,
    "Nimzo-Indian Defense, Reshevsky Variation (E46)": FenArrayType.NimzoIndianDefenseReshevskyVariation_E46,
    "Sicilian Defense, Najdorf Variation (B96)": FenArrayType.SicilianDefenseNajdorfVariation_B96,
    "King's Indian Defense, Orthodox Variation, Glek Defense (E94)": FenArrayType.KingsIndianDefenseOrthodoxVariationGlekDefense_E94,
    "English Opening, Agincourt Defense, Catalan Defense Accepted (A13)": FenArrayType.EnglishOpeningAgincourtDefenseCatalanDefenseAccepted_A13,
    "Sicilian Defense, Najdorf Variation, Opocensky Variation, Traditional Line (B92)": FenArrayType.SicilianDefenseNajdorfVariationOpocenskyVariationTraditionalLine_B92,
    "King's Indian Attack, Yugoslav Variation (A07)": FenArrayType.KingsIndianAttackYugoslavVariation_A07,
    "Sicilian Defense, Scheveningen Variation, English Attack (B80)": FenArrayType.SicilianDefenseScheveningenVariationEnglishAttack_B80,
    "Modern Defense, Pseudo-Austrian Attack (B06)": FenArrayType.ModernDefensePseudoAustrianAttack_B06,
    "Alekhine Defense, Scandinavian Variation (B02)": FenArrayType.AlekhineDefenseScandinavianVariation_B02,
    "Queen's Gambit Declined, Barmen Variation (D37)": FenArrayType.QueensGambitDeclinedBarmenVariation_D37,
    "Scotch Game, Scotch Gambit, Advance Variation (C45)": FenArrayType.ScotchGameScotchGambitAdvanceVariation_C45,
    "Gruenfeld Defense, Three Knights Variation, Petrosian System (D91)": FenArrayType.GruenfeldDefenseThreeKnightsVariationPetrosianSystem_D91,
    "Sicilian Defense, Hyperaccelerated Fianchetto (A42)": FenArrayType.SicilianDefenseHyperacceleratedFianchetto_A42,
    "Wade Defense, General (A41)": FenArrayType.WadeDefenseGeneral_A41,
    "Tarrasch Defense, Symmetrical Variation (D32)": FenArrayType.TarraschDefenseSymmetricalVariation_D32,
    "Nimzo-Larsen Attack, Indian Variation (A01)": FenArrayType.NimzoLarsenAttackIndianVariation_A01,
    "Sicilian Defense, McDonnell Attack (B21)": FenArrayType.SicilianDefenseMcDonnellAttack_B21,
    "Sicilian Defense, Dragon Variation, General (B70)": FenArrayType.SicilianDefenseDragonVariationGeneral_B70,
    "Sicilian Defense, Scheveningen Variation, Keres Attack (B81)": FenArrayType.SicilianDefenseScheveningenVariationKeresAttack_B81,
    "Caro-Kann Defense, Panov Attack (B14)": FenArrayType.CaroKannDefensePanovAttack_B14,
    "Queen's Gambit Accepted, Classical Defense, Main Lines (D27)": FenArrayType.QueensGambitAcceptedClassicalDefenseMainLines_D27,
    "Old Indian Defense, General (A53)": FenArrayType.OldIndianDefenseGeneral_A53,
    "Sicilian Defense, Prins Variation (B54)": FenArrayType.SicilianDefensePrinsVariation_B54,
    "Caro-Kann Defense, Breyer Variation (B10)": FenArrayType.CaroKannDefenseBreyerVariation_B10,
    "English Opening, Symmetrical Variation, Four Knights Variation (A35)": FenArrayType.EnglishOpeningSymmetricalVariationFourKnightsVariation_A35,
    "Sicilian Defense, Godiva Variation (B32)": FenArrayType.SicilianDefenseGodivaVariation_B32,
    "Spanish Game, Closed Variations, Martinez Variation (C78)": FenArrayType.SpanishGameClosedVariationsMartinezVariation_C78,
    "Semi-Slav Defense, Accelerated Move Order (D31)": FenArrayType.SemiSlavDefenseAcceleratedMoveOrder_D31,
    "Caro-Kann Defense, Exchange  Variation, Rubinstein Variation (B13)": FenArrayType.CaroKannDefenseExchangeVariationRubinsteinVariation_B13,
    "Bishop's Opening, Berlin Defense (C24)": FenArrayType.BishopsOpeningBerlinDefense_C24,
    "Sicilian Defense, Lasker-Pelikan Variation, Sveshnikov Variation (B33)": FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariation_B33,
    "Sicilian Defense, Najdorf Variation, Zagreb (Fianchetto) Variation (B91)": FenArrayType.SicilianDefenseNajdorfVariationZagrebFianchettoVariation_B91,
    "Sicilian Defense, Paulsen Variation, General (B44)": FenArrayType.SicilianDefensePaulsenVariationGeneral_B44,
    "Trompowsky Attack, Classical Defense, Big Center Variation (A45)": FenArrayType.TrompowskyAttackClassicalDefenseBigCenterVariation_A45,
    "Slav Defense, Exchange Variation (D13)": FenArrayType.SlavDefenseExchangeVariation_D13,
    "French Defense, Chigorin Variation (C00)": FenArrayType.FrenchDefenseChigorinVariation_C00,
    "Alekhine Defense, Modern Variation, Main Line (B05)": FenArrayType.AlekhineDefenseModernVariationMainLine_B05,
    "Four Knights Game, General (C46)": FenArrayType.FourKnightsGameGeneral_C46,
    "Caro-Kann Defense, Classical Variation, Main lines (B18)": FenArrayType.CaroKannDefenseClassicalVariationMainlines_B18,
    "Pirc Defense, Classical Variation, Two Knights System (B08)": FenArrayType.PircDefenseClassicalVariationTwoKnightsSystem_B08,
    "French Defense, Winawer Variation, Advance Variation, General (C16)": FenArrayType.FrenchDefenseWinawerVariationAdvanceVariationGeneral_C16,
    "King's Indian Defense, Fianchetto Variation, Classical Main Line (E69)": FenArrayType.KingsIndianDefenseFianchettoVariationClassicalMainLine_E69,
    "Queen's Gambit Declined, Cambridge Springs Variation (D52)": FenArrayType.QueensGambitDeclinedCambridgeSpringsVariation_D52,
    "Queen's Gambit Declined, Tartakower Defense, General (D58)": FenArrayType.QueensGambitDeclinedTartakowerDefenseGeneral_D58,
    "Philidor Defense, Exchange Variation (C41)": FenArrayType.PhilidorDefenseExchangeVariation_C41,
    "Queen's Indian Defense, Fianchetto Variation, Nimzowitsch Variation (E15)": FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariation_E15,
    "Caro-Kann Defense, Maroczy Variation (B12)": FenArrayType.CaroKannDefenseMaroczyVariation_B12,
    "Gruenfeld Defense, General (D80)": FenArrayType.GruenfeldDefenseGeneral_D80,
    "Hungarian Opening, Indian Defense (A00)": FenArrayType.HungarianOpeningIndianDefense_A00,
    "Pirc Defense, Austrian Attack, Weiss Variation (B09)": FenArrayType.PircDefenseAustrianAttackWeissVariation_B09,
    "Queen's Indian Defense, Fianchetto Variation, Check Variation, Intermezzo Line (E15)": FenArrayType.QueensIndianDefenseFianchettoVariationCheckVariationIntermezzoLine_E15,
    "French Defense, Rubinstein Variation, Fort Knox Variation (C10)": FenArrayType.FrenchDefenseRubinsteinVariationFortKnoxVariation_C10,
    "Slav Defense, Quiet Variation, Pin Defense (D12)": FenArrayType.SlavDefenseQuietVariationPinDefense_D12,
    "French Defense, Two Knights Variation (C00)": FenArrayType.FrenchDefenseTwoKnightsVariation_C00,
    "Queen's Gambit Declined, Queen's Knight Variation (D31)": FenArrayType.QueensGambitDeclinedQueensKnightVariation_D31,
    "King's Indian Defense, Petrosian Variation, Stein Defense (E92)": FenArrayType.KingsIndianDefensePetrosianVariationSteinDefense_E92,
    "Sicilian Defense, Richter-Rauzer Variation, Neo-Modern Variation, Early deviations (B62)": FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariationEarlydeviations_B62,
    "French Defense, Winawer Variation, Poisoned Pawn Variation, General (C18)": FenArrayType.FrenchDefenseWinawerVariationPoisonedPawnVariationGeneral_C18,
    "Sicilian Defense, Löwenthal Variation (B32)": FenArrayType.SicilianDefenseLowenthalVariation_B32,
    "Bishop's Opening, Vienna Hybrid (C28)": FenArrayType.BishopsOpeningViennaHybrid_C28,
    "Dutch Defense, Queen's Knight Variation (A85)": FenArrayType.DutchDefenseQueensKnightVariation_A85,
    "Sicilian Defense, Najdorf Variation, Main Line (B99)": FenArrayType.SicilianDefenseNajdorfVariationMainLine_B99,
    "Zukertort Opening, Queen's Gambit Invitation (A04)": FenArrayType.ZukertortOpeningQueensGambitInvitation_A04,
    "Queen's Indian Defense, Classical Variation, Traditional Variation (E17)": FenArrayType.QueensIndianDefenseClassicalVariationTraditionalVariation_E17,
    "King's Indian Defense, Orthodox Variation, Bayonet Attack (E97)": FenArrayType.KingsIndianDefenseOrthodoxVariationBayonetAttack_E97,
    "King's Indian Defense, Fianchetto Variation, Immediate Fianchetto (E60)": FenArrayType.KingsIndianDefenseFianchettoVariationImmediateFianchetto_E60,
    "Reti Opening, General (A09)": FenArrayType.RetiOpeningGeneral_A09,
    "Nimzo-Indian Defense, Classical Variation, Keres Defense (E32)": FenArrayType.NimzoIndianDefenseClassicalVariationKeresDefense_E32,
    "Spanish Game, Berlin Defense, Rio Gambit Accepted (C67)": FenArrayType.SpanishGameBerlinDefenseRioGambitAccepted_C67,
    "Indian Game, Tartakower Attack (A45)": FenArrayType.IndianGameTartakowerAttack_A45,
    "Benoni Defense, Benoni-Indian Defense, Kingside move order (A43)": FenArrayType.BenoniDefenseBenoniIndianDefenseKingsidemoveorder_A43,
    "French Defense, Classical Variation, Burn Variation (C11)": FenArrayType.FrenchDefenseClassicalVariationBurnVariation_C11,
    "English Opening, King's English Variation, Reversed Closed Sicilian (A25)": FenArrayType.EnglishOpeningKingsEnglishVariationReversedClosedSicilian_A25,
    "Indian Game, Queen's Pawn Opening (E00)": FenArrayType.IndianGameQueensPawnOpening_E00,
    "Nimzo-Indian Defense, Classical Variation, Berlin Variation (E38)": FenArrayType.NimzoIndianDefenseClassicalVariationBerlinVariation_E38,
    "Queen Pawn Game, General (D00)": FenArrayType.QueenPawnGameGeneral_D00,
    "French Defense, Tarrasch Variation, Guimard Defense, Main Line (C04)": FenArrayType.FrenchDefenseTarraschVariationGuimardDefenseMainLine_C04,
    "Zukertort Opening, Pirc Invitation (A04)": FenArrayType.ZukertortOpeningPircInvitation_A04,
    "Dutch Defense, Leningrad Variation, Warsaw Variation (A88)": FenArrayType.DutchDefenseLeningradVariationWarsawVariation_A88,
    "English Opening, King's English Variation, Reversed Sicilian (A21)": FenArrayType.EnglishOpeningKingsEnglishVariationReversedSicilian_A21,
    "Sicilian Defense, Kan Variation, Wing Attack (B43)": FenArrayType.SicilianDefenseKanVariationWingAttack_B43,
    "French Defense, Winawer Variation, Delayed Exchange Variation (C01)": FenArrayType.FrenchDefenseWinawerVariationDelayedExchangeVariation_C01,
    "English Opening, King's English Variation, Kramnik-Shirov Counter (A21)": FenArrayType.EnglishOpeningKingsEnglishVariationKramnikShirovCounter_A21,
    "Spanish Game, Berlin Defense, l'Hermet Variation, Berlin Wall Defense (C67)": FenArrayType.SpanishGameBerlinDefenselHermetVariationBerlinWallDefense_C67,
    "Sicilian Defense, Closed Variation (B25)": FenArrayType.SicilianDefenseClosedVariation_B25,
    "Reti Opening, Advance Variation (A09)": FenArrayType.RetiOpeningAdvanceVariation_A09,
    "Spanish Game, Cozio Defense, General (C60)": FenArrayType.SpanishGameCozioDefenseGeneral_C60,
    "Caro-Kann Defense, Karpov Variation (B17)": FenArrayType.CaroKannDefenseKarpovVariation_B17,
    "French Defense, Classical Variation, Steinitz Variation (C11)": FenArrayType.FrenchDefenseClassicalVariationSteinitzVariation_C11,
    "Spanish Game, Closed Variations, Bogoljubow Variation (C91)": FenArrayType.SpanishGameClosedVariationsBogoljubowVariation_C91,
    "Modern Defense, Two Knights Variation (B06)": FenArrayType.ModernDefenseTwoKnightsVariation_B06,
    "Sicilian Defense, Kramnik Variation (B40)": FenArrayType.SicilianDefenseKramnikVariation_B40,
    "Sicilian Defense, Four Knights Variation, Exchange Variation (B45)": FenArrayType.SicilianDefenseFourKnightsVariationExchangeVariation_B45,
    "Sicilian Defense, Paulsen Variation, Bastrikov Variation, English Attack (B48)": FenArrayType.SicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B48,
    "Benoni Defense, Czech Benoni Defense (A56)": FenArrayType.BenoniDefenseCzechBenoniDefense_A56,
    "King's Indian Defense, Semi-Averbakh System (E73)": FenArrayType.KingsIndianDefenseSemiAverbakhSystem_E73,
    "Benoni Defense, Fianchetto Variation (A62)": FenArrayType.BenoniDefenseFianchettoVariation_A62,
    "French Defense, Schlechter Variation (C00)": FenArrayType.FrenchDefenseSchlechterVariation_C00,
    "Polish Opening, General (A00)": FenArrayType.PolishOpeningGeneral_A00,
    "Catalan Opening, Closed Variation (E01)": FenArrayType.CatalanOpeningClosedVariation_E01,
    "Indian Game, Pseudo-Queen's Indian (A47)": FenArrayType.IndianGamePseudoQueensIndian_A47,
    "King's Indian Defense, Orthodox Variation, Classical System, Misc. Lines (E98)": FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemMiscLines_E98,
    "King's Indian Attack, Sicilian Variation (A08)": FenArrayType.KingsIndianAttackSicilianVariation_A08,
    "King's Indian Defense, Normal Variation (E70)": FenArrayType.KingsIndianDefenseNormalVariation_E70,
    "Benko Gambit, Accepted, Pawn Return Variation (A57)": FenArrayType.BenkoGambitAcceptedPawnReturnVariation_A57,
    "English Opening, King's English Variation, Two Knights' Variation, Reversed Dragon (A22)": FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationReversedDragon_A22,
    "Caro-Kann Defense, Panov Attack, Modern Defense (B13)": FenArrayType.CaroKannDefensePanovAttackModernDefense_B13,
    "Nimzo-Indian Defense, Panov Attack, Main Line (E54)": FenArrayType.NimzoIndianDefensePanovAttackMainLine_E54,
    "Sicilian Defense, Alapin Variation, Barmen Defense, Modern Line (B22)": FenArrayType.SicilianDefenseAlapinVariationBarmenDefenseModernLine_B22,
    "Nimzo-Indian Defense, Three Knights Variation (E21)": FenArrayType.NimzoIndianDefenseThreeKnightsVariation_E21,
    "Dutch Defense, Hopton Attack (A80)": FenArrayType.DutchDefenseHoptonAttack_A80,
    "Queen's Gambit Accepted, Old Variation (D20)": FenArrayType.QueensGambitAcceptedOldVariation_D20,
    "Italian Game, Giuoco Pianissimo, Italian Four Knights Variation (C50)": FenArrayType.ItalianGameGiuocoPianissimoItalianFourKnightsVariation_C50,
    "Italian Game, Hungarian Defense (C50)": FenArrayType.ItalianGameHungarianDefense_C50,
    "Pirc Defense, Byrne Variation (B07)": FenArrayType.PircDefenseByrneVariation_B07,
    "Sicilian Defense, Classical Variation, Anti-Sozin Variation (B57)": FenArrayType.SicilianDefenseClassicalVariationAntiSozinVariation_B57,
    "King's Indian Defense, Exchange Variation (E92)": FenArrayType.KingsIndianDefenseExchangeVariation_E92,
    "Scotch Game, General (C45)": FenArrayType.ScotchGameGeneral_C45,
    "Pirc Defense, Classical Variation, Schlechter Variation (B08)": FenArrayType.PircDefenseClassicalVariationSchlechterVariation_B08,
    "King's Indian Defense, Fianchetto Variation, Uhlmann-Szabo System (E62)": FenArrayType.KingsIndianDefenseFianchettoVariationUhlmannSzaboSystem_E62,
    "Russian Game, Modern Attack, Center Variation (C43)": FenArrayType.RussianGameModernAttackCenterVariation_C43,
    "Spanish Game, Closed Variations, Flohr System (C92)": FenArrayType.SpanishGameClosedVariationsFlohrSystem_C92,
    "Old Indian Defense, Normal Variation (A55)": FenArrayType.OldIndianDefenseNormalVariation_A55,
    "Queen's Indian Defense, Spassky System (E14)": FenArrayType.QueensIndianDefenseSpasskySystem_E14,
    "Sicilian Defense, French Variation, Normal (B40)": FenArrayType.SicilianDefenseFrenchVariationNormal_B40,
    "Benoni Defense, King Pawn lines (A65)": FenArrayType.BenoniDefenseKingPawnlines_A65,
    "Semi-Slav Defense, Main Lines (D45)": FenArrayType.SemiSlavDefenseMainLines_D45,
    "English Opening, Anglo-Indian Defense, Queen's Indian Formation (A13)": FenArrayType.EnglishOpeningAngloIndianDefenseQueensIndianFormation_A13,
    "Sicilian Defense, Scheveningen Variation (B80)": FenArrayType.SicilianDefenseScheveningenVariation_B80,
    "English Opening, Symmetrical Variation, Botvinnik System Reversed (A37)": FenArrayType.EnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A37,
    "French Defense, Normal Variation (C10)": FenArrayType.FrenchDefenseNormalVariation_C10,
    "Sicilian Defense, Sozin Attack, Flank Variation (B87)": FenArrayType.SicilianDefenseSozinAttackFlankVariation_B87,
    "Scandinavian Defense, Marshall Variation (B01)": FenArrayType.ScandinavianDefenseMarshallVariation_B01,
    "Van Geet Opening, General (A00)": FenArrayType.VanGeetOpeningGeneral_A00,
    "English Opening, English Defense, General (A10)": FenArrayType.EnglishOpeningEnglishDefenseGeneral_A10,
    "Philidor Defense, General (C41)": FenArrayType.PhilidorDefenseGeneral_C41,
    "King's Indian Defense, Orthodox Variation (E94)": FenArrayType.KingsIndianDefenseOrthodoxVariation_E94,
    "Queen's Gambit Declined, Vienna Variation (D44)": FenArrayType.QueensGambitDeclinedViennaVariation_D44,
    "Nimzowitsch Defense, Williams Variation (B00)": FenArrayType.NimzowitschDefenseWilliamsVariation_B00,
    "Queen Pawn Game, Steinitz Countergambit (D00)": FenArrayType.QueenPawnGameSteinitzCountergambit_D00,
    "French Defense, Exchange Variation, Monte Carlo Variation (C01)": FenArrayType.FrenchDefenseExchangeVariationMonteCarloVariation_C01,
    "King's Indian Defense, Six Pawns Attack (E77)": FenArrayType.KingsIndianDefenseSixPawnsAttack_E77,
    "Spanish Game, Morphy Defense, Archangelsk Variation (C78)": FenArrayType.SpanishGameMorphyDefenseArchangelskVariation_C78,
    "Caro-Kann Defense, Bronstein-Larsen Variation (B16)": FenArrayType.CaroKannDefenseBronsteinLarsenVariation_B16,
    "French Defense, Winawer Variation, Advance Variation (C18)": FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_C18,
    "French Defense, Tarrasch Variation, Open System (C07)": FenArrayType.FrenchDefenseTarraschVariationOpenSystem_C07,
    "Sicilian Defense, Lasker-Pelikan Variation, Sveshnikov Variation, Novosibirsk Variation (B33)": FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariationNovosibirskVariation_B33,
    "French Defense, Tarrasch Variation, Pawn Center Variation (C05)": FenArrayType.FrenchDefenseTarraschVariationPawnCenterVariation_C05,
    "King's Indian Defense, Steiner Attack (E76)": FenArrayType.KingsIndianDefenseSteinerAttack_E76,
    "English Opening, Symmetrical Variation, Three Knights Variation (A34)": FenArrayType.EnglishOpeningSymmetricalVariationThreeKnightsVariation_A34,
    "Spanish Game, Fianchetto Defense (C60)": FenArrayType.SpanishGameFianchettoDefense_C60,
    "Queen Pawn Game, Torre Attack (D03)": FenArrayType.QueenPawnGameTorreAttack_D03,
    "Sicilian Defense, Paulsen Variation, Szen Variation (B44)": FenArrayType.SicilianDefensePaulsenVariationSzenVariation_B44,
    "Russian Game, Three Knights Game (C42)": FenArrayType.RussianGameThreeKnightsGame_C42,
    "Spanish Game, Closed Variations, Chigorin Defense (C97)": FenArrayType.SpanishGameClosedVariationsChigorinDefense_C97,
    "Vienna Game, Mieses Variation (C26)": FenArrayType.ViennaGameMiesesVariation_C26,
    "King's Indian Attack, Wahls Defense (A05)": FenArrayType.KingsIndianAttackWahlsDefense_A05,
    "Bogo-Indian Defense, Wade-Smyslov Variation (E11)": FenArrayType.BogoIndianDefenseWadeSmyslovVariation_E11,
    "Hungarian Opening, Symmetrical Variation (A00)": FenArrayType.HungarianOpeningSymmetricalVariation_A00,
    "Neo-Gruenfeld Defense, Ultra-delayed Exchange Variation (D79)": FenArrayType.NeoGruenfeldDefenseUltradelayedExchangeVariation_D79,
    "English Opening, King's English Variation, Taimanov Variation (A25)": FenArrayType.EnglishOpeningKingsEnglishVariationTaimanovVariation_A25,
    "Slav Defense, Exchange Variation, Symmetrical Line (D14)": FenArrayType.SlavDefenseExchangeVariationSymmetricalLine_D14,
    "Spanish Game, Exchange Variation, Gligoric Variation (C69)": FenArrayType.SpanishGameExchangeVariationGligoricVariation_C69,
    "Scotch Game, Potter Variation (C45)": FenArrayType.ScotchGamePotterVariation_C45,
    "English Opening, Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense (A33)": FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A33,
    "King's Indian Defense, Fianchetto Variation, Kavalek  Defense (E62)": FenArrayType.KingsIndianDefenseFianchettoVariationKavalekDefense_E62,
    "Dutch Defense, Raphael Variation (A80)": FenArrayType.DutchDefenseRaphaelVariation_A80,
    "English Opening, Anglo-Indian Defense, Nimzo-English Opening (A17)": FenArrayType.EnglishOpeningAngloIndianDefenseNimzoEnglishOpening_A17,
    "Spanish Game, Morphy Defense, Modern Steinitz Defense (C72)": FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_C72,
    "Pirc Defense, Classical Variation, Quiet System, Czech Defense (B08)": FenArrayType.PircDefenseClassicalVariationQuietSystemCzechDefense_B08,
    "French Defense, Tarrasch Variation, Open System, Main Line (C09)": FenArrayType.FrenchDefenseTarraschVariationOpenSystemMainLine_C09,
    "Queen's Gambit Declined, Harrwitz Attack (D37)": FenArrayType.QueensGambitDeclinedHarrwitzAttack_D37,
    "Trompowsky Attack, Classical Defense (A45)": FenArrayType.TrompowskyAttackClassicalDefense_A45,
    "Spanish Game, Steinitz Defense (C62)": FenArrayType.SpanishGameSteinitzDefense_C62,
    "Gruenfeld Defense, Three Knights Variation (D90)": FenArrayType.GruenfeldDefenseThreeKnightsVariation_D90,
    "French Defense, Advance Variation, Wade Variation (C02)": FenArrayType.FrenchDefenseAdvanceVariationWadeVariation_C02,
    "Queen's Gambit Declined, Modern Variation, Normal Line (D55)": FenArrayType.QueensGambitDeclinedModernVariationNormalLine_D55,
    "Semi-Slav Defense, Normal Variation (D45)": FenArrayType.SemiSlavDefenseNormalVariation_D45,
    "Sicilian Defense, Lasker-Dunne Attack (B20)": FenArrayType.SicilianDefenseLaskerDunneAttack_B20,
    "Sicilian Defense, Najdorf Variation (B95)": FenArrayType.SicilianDefenseNajdorfVariation_B95,
    "King's Indian Attack, Spassky Variation (A05)": FenArrayType.KingsIndianAttackSpasskyVariation_A05,
    "French Defense, Advance Variation, Milner-Barry Gambit (C02)": FenArrayType.FrenchDefenseAdvanceVariationMilnerBarryGambit_C02,
    "Budapest Defense, Adler Variation (A52)": FenArrayType.BudapestDefenseAdlerVariation_A52,
    "King's Indian Defense, Orthodox Variation, Aronin-Taimanov Defense (E97)": FenArrayType.KingsIndianDefenseOrthodoxVariationAroninTaimanovDefense_E97,
    "Colle System (D05)": FenArrayType.ColleSystem_D05,
    "Mexican Defense, General (A50)": FenArrayType.MexicanDefenseGeneral_A50,
    "English Opening, King's English Variation, Three Knights System, General (A27)": FenArrayType.EnglishOpeningKingsEnglishVariationThreeKnightsSystemGeneral_A27,
    "French Defense, Tarrasch Variation (C03)": FenArrayType.FrenchDefenseTarraschVariation_C03,
    "Spanish Game, Schliemann Defense (C63)": FenArrayType.SpanishGameSchliemannDefense_C63,
    "Pirc Defense, Classical Variation, Quiet System (B08)": FenArrayType.PircDefenseClassicalVariationQuietSystem_B08,
    "Anderssen Opening, General (A00)": FenArrayType.AnderssenOpeningGeneral_A00,
    "Neo-Gruenfeld Defense, Classical Variation, Modern Defense (D78)": FenArrayType.NeoGruenfeldDefenseClassicalVariationModernDefense_D78,
    "English Opening, King's English Variation, Two Knights' Variation, General (A22)": FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationGeneral_A22,
    "Queen's Gambit Declined, Janowski Variation (D31)": FenArrayType.QueensGambitDeclinedJanowskiVariation_D31,
    "King's Indian Attack, Double Fianchetto (A07)": FenArrayType.KingsIndianAttackDoubleFianchetto_A07,
    "Caro-Kann Defense, Classical Variation, Lobron System (B19)": FenArrayType.CaroKannDefenseClassicalVariationLobronSystem_B19,
    "Benko Gambit, Declined, Main Line (A57)": FenArrayType.BenkoGambitDeclinedMainLine_A57,
    "Modern Defense, Averbakh System, Kotov Variation (A42)": FenArrayType.ModernDefenseAverbakhSystemKotovVariation_A42,
    "Torre Attack, Classical Defense, Nimzowitsch Variation (A46)": FenArrayType.TorreAttackClassicalDefenseNimzowitschVariation_A46,
    "Spanish Game, Morphy Defense, Wormald Attack (C77)": FenArrayType.SpanishGameMorphyDefenseWormaldAttack_C77,
    "Sicilian Defense, Dragon Variation, Yugoslav Attack, Old Line (B78)": FenArrayType.SicilianDefenseDragonVariationYugoslavAttackOldLine_B78,
    "Nimzo-Indian Defense, Classical Variation, Noa Variation (E34)": FenArrayType.NimzoIndianDefenseClassicalVariationNoaVariation_E34,
    "Tarrasch Defense, Classical Variation (D34)": FenArrayType.TarraschDefenseClassicalVariation_D34,
    "Nimzo-Indian Defense, Normal Variation, Bishop Attack, Classical Defense (E48)": FenArrayType.NimzoIndianDefenseNormalVariationBishopAttackClassicalDefense_E48,
    "Benoni Defense, Modern Variation (A60)": FenArrayType.BenoniDefenseModernVariation_A60,
    "Modern Defense, Geller's System (B06)": FenArrayType.ModernDefenseGellersSystem_B06,
    "Queen's Gambit Declined, Traditional Variation (D30)": FenArrayType.QueensGambitDeclinedTraditionalVariation_D30,
    "Queen Pawn Opening, General (A40)": FenArrayType.QueenPawnOpeningGeneral_A40,
    "Sicilian Defense, Chameleon (B20)": FenArrayType.SicilianDefenseChameleon_B20,
    "Sicilian Defense, Dragon Variation, Yugoslav Attack (B77)": FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_B77,
    "Sicilian Defense, Accelerated Dragon, Maroczy Bind, Breyer Variation (B39)": FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindBreyerVariation_B39,
    "Sicilian Defense, Smith-Morra Gambit (B21)": FenArrayType.SicilianDefenseSmithMorraGambit_B21,
    "English Opening, King's English Variation, Two Knights' Variation, Smyslov System (A22)": FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationSmyslovSystem_A22,
    "Benoni Defense, Classical Variation, New York Variation (A70)": FenArrayType.BenoniDefenseClassicalVariationNewYorkVariation_A70,
    "French Defense, Classical Variation, Steinitz Variation (C14)": FenArrayType.FrenchDefenseClassicalVariationSteinitzVariation_C14,
    "French Defense, Knight Variation (C00)": FenArrayType.FrenchDefenseKnightVariation_C00,
    "Caro-Kann Defense, Gurgenidze System (B15)": FenArrayType.CaroKannDefenseGurgenidzeSystem_B15,
    "King's Indian Defense, Saemisch Variation (E80)": FenArrayType.KingsIndianDefenseSaemischVariation_E80,
    "King's Indian Defense, Averbakh Variation, Benoni Defense, Advance Variation (E75)": FenArrayType.KingsIndianDefenseAverbakhVariationBenoniDefenseAdvanceVariation_E75,
    "Gruenfeld Defense, Exchange Variation, Classical Variation (D86)": FenArrayType.GruenfeldDefenseExchangeVariationClassicalVariation_D86,
    "Sicilian Defense, Dragon Variation, Yugoslav Attack (B78)": FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_B78,
    "Sicilian Defense, Paulsen Variation, Bastrikov Variation (B49)": FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B49,
    "Spanish Game, Morphy Defense, Mackenzie Variation (C77)": FenArrayType.SpanishGameMorphyDefenseMackenzieVariation_C77,
    "Pirc Defense, Austrian Attack, Dragon Formation (B09)": FenArrayType.PircDefenseAustrianAttackDragonFormation_B09,
    "English Opening, Agincourt Defense, Agincourt Variation (A13)": FenArrayType.EnglishOpeningAgincourtDefenseAgincourtVariation_A13,
    "Queen's Gambit Declined, Exchange Variation (D35)": FenArrayType.QueensGambitDeclinedExchangeVariation_D35,
    "Queen's Gambit Declined, Ragozin Defense, Alekhine Variation (D38)": FenArrayType.QueensGambitDeclinedRagozinDefenseAlekhineVariation_D38,
    "Alekhine Defense, Modern Variation, Alburt Variation (B04)": FenArrayType.AlekhineDefenseModernVariationAlburtVariation_B04,
    "French Defense, Classical Variation, Burn Variation, Morozevich Line (C11)": FenArrayType.FrenchDefenseClassicalVariationBurnVariationMorozevichLine_C11,
    "Budapest Defense, Rubinstein Variation (A52)": FenArrayType.BudapestDefenseRubinsteinVariation_A52,
    "King's Indian Defense, Four Pawns Attack (E76)": FenArrayType.KingsIndianDefenseFourPawnsAttack_E76,
    "Italian Game, Classical Variation, Greco Gambit, Traditional Line (C54)": FenArrayType.ItalianGameClassicalVariationGrecoGambitTraditionalLine_C54,
    "English Opening, Symmetrical Variation, Mecking Variation (A39)": FenArrayType.EnglishOpeningSymmetricalVariationMeckingVariation_A39,
    "French Defense, Winawer Variation, Positional Variation (C19)": FenArrayType.FrenchDefenseWinawerVariationPositionalVariation_C19,
    "Nimzo-Indian Defense, Normal Variation, Bishop Attack (E47)": FenArrayType.NimzoIndianDefenseNormalVariationBishopAttack_E47,
    "Dutch Defense, Leningrad Variation, Matulovic Variation (A89)": FenArrayType.DutchDefenseLeningradVariationMatulovicVariation_A89,
    "French Defense, Winawer Variation, Classical Variation (C18)": FenArrayType.FrenchDefenseWinawerVariationClassicalVariation_C18,
    "English Opening, King's English Variation, Four Knights Variation, Quiet Line (A28)": FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_A28,
    "Scotch Game, Classical Variation, Intermezzo Variation (C45)": FenArrayType.ScotchGameClassicalVariationIntermezzoVariation_C45,
    "Slav Defense, Czech Variation, Krause Attack (D17)": FenArrayType.SlavDefenseCzechVariationKrauseAttack_D17,
    "Queen's Gambit Refused, Chigorin Defense, Main Line (D07)": FenArrayType.QueensGambitRefusedChigorinDefenseMainLine_D07,
    "Slav Defense, Chameleon Variation, Advance System (D15)": FenArrayType.SlavDefenseChameleonVariationAdvanceSystem_D15,
    "Sicilian Defense, Old Sicilian, Normal (B33)": FenArrayType.SicilianDefenseOldSicilianNormal_B33,
    "Queen's Gambit Declined, Vienna Variation, Quiet Variation (D44)": FenArrayType.QueensGambitDeclinedViennaVariationQuietVariation_D44,
    "Zukertort Opening, Reversed Queen's Gambit (D02)": FenArrayType.ZukertortOpeningReversedQueensGambit_D02,
    "Dutch Defense, Rubinstein Variation (A84)": FenArrayType.DutchDefenseRubinsteinVariation_A84,
    "Benoni Defense, Taimanov Variation (A67)": FenArrayType.BenoniDefenseTaimanovVariation_A67,
    "Sicilian Defense, O'Kelly Variation, Venice System (B28)": FenArrayType.SicilianDefenseOKellyVariationVeniceSystem_B28,
    "Modern Defense, Two Knights Variation, Suttles Variation (B06)": FenArrayType.ModernDefenseTwoKnightsVariationSuttlesVariation_B06,
    "Nimzo-Indian Defense, St. Petersburg Variation (E43)": FenArrayType.NimzoIndianDefenseStPetersburgVariation_E43,
    "Indian Game, Saemisch-Indian (A50)": FenArrayType.IndianGameSaemischIndian_A50,
    "Sicilian Defense, Staunton-Cochrane Variation (B20)": FenArrayType.SicilianDefenseStauntonCochraneVariation_B20,
    "Sicilian Defense, O'Kelly Variation, Normal System, Kan Line (B28)": FenArrayType.SicilianDefenseOKellyVariationNormalSystemKanLine_B28,
    "Benko Gambit, Accepted, Modern Variation (A57)": FenArrayType.BenkoGambitAcceptedModernVariation_A57,
    "French Defense, Tarrasch Variation, Modern System (C03)": FenArrayType.FrenchDefenseTarraschVariationModernSystem_C03,
    "Queen's Indian Defense, Fianchetto Variation, Nimzowitsch Variation, Quiet Line (E15)": FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariationQuietLine_E15,
    "English Opening, Symmetrical Variation, Botvinnik System (A36)": FenArrayType.EnglishOpeningSymmetricalVariationBotvinnikSystem_A36,
    "King's Indian Defense, Kramer Variation (E70)": FenArrayType.KingsIndianDefenseKramerVariation_E70,
    "Scandinavian Defense, General (B01)": FenArrayType.ScandinavianDefenseGeneral_B01,
    "Kangaroo Defense, General (E00)": FenArrayType.KangarooDefenseGeneral_E00,
    "French Defense, Normal Variation (C00)": FenArrayType.FrenchDefenseNormalVariation_C00,
    "Semi-Slav Defense, Meran Variation (D47)": FenArrayType.SemiSlavDefenseMeranVariation_D47,
    "Queen's Gambit Refused, Marshall Defense (D06)": FenArrayType.QueensGambitRefusedMarshallDefense_D06,
    "Sicilian Defense, Dragon Variation, Classical Variation, General (B72)": FenArrayType.SicilianDefenseDragonVariationClassicalVariationGeneral_B72,
    "Semi-Slav Defense, Chigorin Defense (D46)": FenArrayType.SemiSlavDefenseChigorinDefense_D46,
    "Nimzo-Indian Defense, Leningrad Variation (E30)": FenArrayType.NimzoIndianDefenseLeningradVariation_E30,
    "Spanish Game, Closed Variations, Pilnik Variation (C90)": FenArrayType.SpanishGameClosedVariationsPilnikVariation_C90,
    "Spanish Game, Morphy Defense, Chigorin Defense, Panov System (C99)": FenArrayType.SpanishGameMorphyDefenseChigorinDefensePanovSystem_C99,
    "Caro-Kann Defense, Panov Attack, Fianchetto Defense (B14)": FenArrayType.CaroKannDefensePanovAttackFianchettoDefense_B14,
    "Four Knights Game, Spanish Variation (C48)": FenArrayType.FourKnightsGameSpanishVariation_C48,
    "Queen's Indian Defense, Petrosian Variation (E12)": FenArrayType.QueensIndianDefensePetrosianVariation_E12,
    "Bogo-Indian Defense, Vitolinsh Variation (E11)": FenArrayType.BogoIndianDefenseVitolinshVariation_E11,
    "Sicilian Defense, Paulsen Variation, Normal Variation (B45)": FenArrayType.SicilianDefensePaulsenVariationNormalVariation_B45,
    "Benko Gambit, Accepted, Fianchetto Variation (A58)": FenArrayType.BenkoGambitAcceptedFianchettoVariation_A58,
    "French Defense, Winawer Variation, Bogoljubow Variation (C17)": FenArrayType.FrenchDefenseWinawerVariationBogoljubowVariation_C17,
    "Caro-Kann Defense, Advance Variation, Van der Wiel Attack (B12)": FenArrayType.CaroKannDefenseAdvanceVariationVanderWielAttack_B12,
    "Scandinavian Defense, Bronstein Variation (B01)": FenArrayType.ScandinavianDefenseBronsteinVariation_B01,
    "Sicilian Defense, Accelerated Dragon, Maroczy Bind, Gurgenidze Variation (B36)": FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindGurgenidzeVariation_B36,
    "Spanish Game, Closed Variations, Delayed Exchange (C85)": FenArrayType.SpanishGameClosedVariationsDelayedExchange_C85,
    "Benoni Defense, Old Benoni, Russian Variation (A44)": FenArrayType.BenoniDefenseOldBenoniRussianVariation_A44,
    "Van't Kruijs Opening, General (A00)": FenArrayType.VantKruijsOpeningGeneral_A00,
    "Spanish Game, Exchange Variation, Normal Variation (C69)": FenArrayType.SpanishGameExchangeVariationNormalVariation_C69,
    "French Defense, Winawer Variation, Alekhine-Maroczy Gambit (C15)": FenArrayType.FrenchDefenseWinawerVariationAlekhineMaroczyGambit_C15,
    "Queen's Gambit Declined, Exchange Variation, Reshevsky Variation (D36)": FenArrayType.QueensGambitDeclinedExchangeVariationReshevskyVariation_D36,
    "Slav Defense, Three Knights Variation (D15)": FenArrayType.SlavDefenseThreeKnightsVariation_D15,
    "Queen Pawn Game, Queen Fianchetto (A40)": FenArrayType.QueenPawnGameQueenFianchetto_A40,
    "Nimzo-Indian Defense, General (E20)": FenArrayType.NimzoIndianDefenseGeneral_E20,
    "Semi-Slav Defense, Anti-Moscow Gambit (D44)": FenArrayType.SemiSlavDefenseAntiMoscowGambit_D44,
    "English Opening, King's English Variation, Two Knights' Variation, Fianchetto Line (A22)": FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLine_A22,
    "King's Indian Attack, Keres Variation (A07)": FenArrayType.KingsIndianAttackKeresVariation_A07,
    "King's Indian Defense, Saemisch Variation, Panno Formation (E83)": FenArrayType.KingsIndianDefenseSaemischVariationPannoFormation_E83,
    "English Opening, Symmetrical Variation, Fianchetto Variation (A34)": FenArrayType.EnglishOpeningSymmetricalVariationFianchettoVariation_A34,
    "Gruenfeld Defense, Exchange Variation, Spassky Variation (D87)": FenArrayType.GruenfeldDefenseExchangeVariationSpasskyVariation_D87,
    "Queen's Gambit Accepted, Classical Defense, Rubinstein Variation (D27)": FenArrayType.QueensGambitAcceptedClassicalDefenseRubinsteinVariation_D27,
    "Dutch Defense, Stonewall Variation, Modern Variation (A90)": FenArrayType.DutchDefenseStonewallVariationModernVariation_A90,
    "English Opening, Anglo-Indian Defense, Hedgehog System (A17)": FenArrayType.EnglishOpeningAngloIndianDefenseHedgehogSystem_A17,
    "Queen's Indian Defense, Kasparov Variation (E12)": FenArrayType.QueensIndianDefenseKasparovVariation_E12,
    "Sicilian Defense, Sozin Attack, Main Line (B89)": FenArrayType.SicilianDefenseSozinAttackMainLine_B89
};


const userHome = (ctrl: Ctrl) => [
    h('div.container', { attrs: { align: 'left' } }, [
        h('div.row.g-4', [
            h('div.col-12', [
                h('div.card.p-3.mb-4', [
                    h('h2.mb-3', 'Game Positions'),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play Opening Game'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Winning Position', FenArrayType.WinningArrayOpening),
                            positionButton(ctrl, 'Equal Position', FenArrayType.EqualArrayOpening),
                            positionButton(ctrl, 'Losing Position', FenArrayType.LosingArrayOpening),
                            standardOpenings(ctrl, 'Standard Openings')
                        ])
                    ]),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play Middle Game'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Winning Position', FenArrayType.WinningArray),
                            positionButton(ctrl, 'Equal Position', FenArrayType.EqualArray),
                            positionButton(ctrl, 'Losing Position', FenArrayType.LosingArray)
                        ])
                    ]),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play End Game'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Winning Position', FenArrayType.WinningArrayEndGame),
                            positionButton(ctrl, 'Equal Position', FenArrayType.EqualArrayEndGame),
                            positionButton(ctrl, 'Losing Position', FenArrayType.LosingArrayEndGame)
                        ])
                    ])
                ])
            ])
        ]),

        h('div.row.g-4', [
            h('div.col-12', [
                h('div.card.p-3', [
                    h('h2.mb-3', 'Challenges'),
                    h('div.challenges', renderChallenges(ctrl))
                ])
            ]),
            h('div.col-12', [
                h('div.card.p-3', [
                    h('h2.mb-3', 'Games in Progress'),
                    h('div.games', renderGames(ctrl.games))
                ])
            ])
        ]),

        h('div.card.p-3.mt-4', [
            h('h2.mb-3', 'About'),
            renderAbout()
        ]),

        h('div.card.p-3.mt-4', [
            renderSuggestions()
        ])
    ])
];

function showStandardOpeningsDialog(ctrl: Ctrl) {
    const existingDialog = document.querySelector('.popup-overlay');
    if (existingDialog) document.body.removeChild(existingDialog);

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000'
    });

    const dialog = document.createElement('div');
    dialog.className = 'popup-dialog';
    Object.assign(dialog.style, {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        width: '90%',
        maxWidth: '600px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        border: '1px solid #e0e0e0'
    });

    dialog.innerHTML = `
  <h2 style="margin: 0 0 25px 0; color: #333; font-size: 24px; text-align: center;">
    Select Standard Opening
  </h2>
  <input type="text" id="opening-search" placeholder="Search openings..." 
    style="width: 100%; padding: 12px; margin-bottom: 20px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
  <div id="openings-list" style="max-height: 60vh; overflow-y: auto;">
    ${Object.keys(standardOpeningsMap).map(opening => `
      <button class="opening-item btn btn-outline-secondary btn-block text-left mb-2" 
          style="padding: 12px; font-size: 16px; border-radius: 6px;">
          ${opening}
      </button>
    `).join('')}
  </div>
`;


    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const searchInput = dialog.querySelector('#opening-search') as HTMLInputElement;
    const openingsList = dialog.querySelector('#openings-list') as HTMLElement;

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const items = openingsList.getElementsByClassName('opening-item');

        Array.from(items).forEach((item: Element) => {
            const button = item as HTMLElement;
            const text = button.innerText.toLowerCase();
            button.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    openingsList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('opening-item')) {
            const openingName = target.innerText;
            console.log("opening: "+openingName)
            const newFenArray = standardOpeningsMap[openingName] || FenArrayType.DefaultOpening;
            showPlayerSelectionDialog(ctrl, newFenArray, true);
            closeDialog();
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeDialog();
        }
    });

    function closeDialog() {
        if (overlay && overlay.parentNode) {
            document.body.removeChild(overlay);
        }
    }
}

function standardOpenings(ctrl: Ctrl, text: string) {
    return h(
        'button.btn.btn-outline-primary.btn-lg',
        {
            attrs: { type: 'button' },
            on: {
                click: () => showStandardOpeningsDialog(ctrl)
            }
        },
        text
    );
}

function positionButton(ctrl: Ctrl, text: string, fenType: FenArrayType) {
    return h(
        'button.btn.btn-outline-primary.btn-lg',
        {
            attrs: { type: 'button' },
            on: {
                click: () => showPlayerSelectionDialog(ctrl, fenType, false)
            }
        },
        text
    );
}



const renderGames = (ongoing: OngoingGames) =>
  ongoing.games.length ? ongoing.games.map(renderGameWidget) : [h('p', 'No ongoing games at the moment')];


const renderChallenges = (ctrl: Ctrl) => {
    if (!ctrl.challenges?.in?.length) return h('p', 'No incoming challenges at the moment');
    return ctrl.challenges.in.map(challenge =>
        h('div.challenge', [
            h('div.challenge-header', [
                h('div.challenge-info', [
                    h('strong', `${challenge.challenger?.name || 'Anonymous'}`),
                    h('div', [
                        h('span', `${challenge.variant.name} • `),
                        h('span', `${challenge.speed} • `),
                        h('span', `${formatTimeControl(challenge.timeControl)}`)
                    ])
                ])
            ]),
            h('div.challenge-actions', [
                h('button.btn.btn-sm.btn-success', {
                    on: { click: () => ctrl.acceptChallenge(challenge.id) }
                }, 'Accept'),
                h('button.btn.btn-sm.btn-danger', {
                    on: { click: () => ctrl.declineChallenge(challenge.id) }
                }, 'Decline')
            ])
        ])
    );
};

const formatTimeControl = (tc: Challenge['timeControl']) => {
    if (tc.type === 'clock') {
        const minutes = Math.floor((tc.limit || 0) / 60);
        return `${minutes}+${tc.increment}`;
    }
    if (tc.type === 'correspondence') {
        return `${tc.daysPerTurn} days/move`;
    }
    return 'Unlimited';
};



const renderGameWidget = (game: Game) =>
  h(
    `a.game-widget.text-decoration-none.game-widget--${game.id}`,
    {
      attrs: href(`/game/${game.gameId}`),
    },
    [
      h('span.game-widget__opponent', [
        h('span.game-widget__opponent__name', game.opponent.username || 'Anon'),
        game.opponent.rating && h('span.game-widget__opponent__rating', game.opponent.rating),
      ]),
      h(
        'span.game-widget__board.cg-wrap',
        {
          hook: {
            insert(vnode) {
              const el = vnode.elm as HTMLElement;
              Chessground(el, {
                fen: game.fen,
                orientation: game.color,
                lastMove: game.lastMove.match(/.{1,2}/g),
                viewOnly: true,
                movable: { free: false },
                drawable: { visible: false },
                coordinates: false,
              });
            },
          },
        },
        'board'
      ),
    ]
  );

function showPlayerSelectionDialog(ctrl: Ctrl, fenArrayType: FenArrayType, isStandardOpening: boolean) {
    const existingDialog = document.querySelector('.popup-overlay');
    if (existingDialog) {
        document.body.removeChild(existingDialog);
    }

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Create dialog container
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'popup-dialog';
    optionsDiv.style.backgroundColor = 'white';
    optionsDiv.style.borderRadius = '12px';
    optionsDiv.style.padding = '30px';
    optionsDiv.style.width = '90%';
    optionsDiv.style.maxWidth = '600px';
    optionsDiv.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
    optionsDiv.style.border = '1px solid #e0e0e0';

    if (window.innerWidth < 550) {
        optionsDiv.innerHTML = `
            <h2 style="margin: 0 0 25px 0; color: #333; font-size: 24px; text-align: center;">Select Opponent</h2>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button id="play-computer" class="btn btn-primary" 
                    style="padding: 15px; font-size: 18px; border-radius: 8px;">
                    🖥️ Play vs Computer
                </button>
                <button id="play-human" class="btn btn-primary" 
                    style="padding: 15px; font-size: 18px; border-radius: 8px;">
                    👤 Play vs Human
                </button>
            </div>
        `;
    } else {
        optionsDiv.innerHTML = `
            <h2 style="margin: 0 0 30px 0; color: #333; font-size: 28px; text-align: center;">Select Your Opponent</h2>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <button id="play-computer" class="btn btn-primary" 
                    style="padding: 18px; font-size: 20px; border-radius: 10px;">
                    🖥️ Play Against Computer
                </button>
                <button id="play-human" class="btn btn-primary" 
                    style="padding: 18px; font-size: 20px; border-radius: 10px;">
                    👤 Play Against Human
                </button>
            </div>
        `;
    }

    overlay.appendChild(optionsDiv);
    document.body.appendChild(overlay);

    const getColorSelectionHTML = () => {
        return isStandardOpening ? `
            <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">Choose Color</h3>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <label style="font-size: 18px;">
                    <input type="radio" name="player-color" value="white" > White
                </label>
                <label style="font-size: 18px;">
                    <input type="radio" name="player-color" value="black"> Black
                </label>
            </div>
        ` : '';
    };

    document.getElementById('play-computer')?.addEventListener('click', () => {
        const newContent = `
            <div style="display: flex; flex-direction: column; gap: 25px;">
                <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
                    Computer Level (1-8)
                </h3>
                <input id="opponent-level" type="number"
                    placeholder="Computer Level (1-8)"
                    value="${ctrl.level}"
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
                    Clock limit (3 - 180 minutes)
                </h3>
                <input id="clock-limit" type="number"
                    placeholder="Clock limit (3 - 180 minutes)"
                    value="${ctrl.clockLimit}"
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
                    Clock Increment (0 - 60 seconds)
                </h3>
                <input id="clock-increment" type="number"
                    placeholder="Clock Increment (0 - 60 seconds)"
                    value="${ctrl.clockIncrement}"
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                ${getColorSelectionHTML()}
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="cancel-dialog" class="btn btn-secondary" 
                        style="padding: 12px 25px; font-size: 16px;">
                        Cancel
                    </button>
                    <button id="confirm-play" class="btn btn-primary" 
                        style="padding: 12px 25px; font-size: 16px;">
                        Play
                    </button>
                </div>
            </div>
        `;
        optionsDiv.innerHTML = newContent;
        optionsDiv.style.padding = '40px 30px';
        optionsDiv.style.maxWidth = '500px';

        document.getElementById('confirm-play')?.addEventListener('click', () => {
            const opponentLevelInput = (document.getElementById('opponent-level') as HTMLInputElement).value;
            const clockLimitInput = (document.getElementById('clock-limit') as HTMLInputElement).value;
            const clockIncrementInput = (document.getElementById('clock-increment') as HTMLInputElement).value;

            const opponentLevel = parseInt(opponentLevelInput, 10);
            if (!isNaN(opponentLevel)) {
                ctrl.level = opponentLevel;
            }

            const clockLimit = parseInt(clockLimitInput, 10);
            if (!isNaN(clockLimit)) {
                ctrl.clockLimit = clockLimit;
            }

            const clockIncrement = parseInt(clockIncrementInput, 10);
            if (!isNaN(clockIncrement)) {
                ctrl.clockIncrement = clockIncrement;
            }

            if (isStandardOpening) {
                const playerColor = (document.querySelector('input[name="player-color"]:checked') as HTMLInputElement)?.value || 'random';
                ctrl.playerRequiredColor = playerColor;
            }

            ctrl.playAiFromPosition(fenArrayType);
            closeOption();
        });

        document.getElementById('cancel-dialog')?.addEventListener('click', () => {
            closeOption();
        });
    });

    document.getElementById('play-human')?.addEventListener('click', () => {
        const newContent = `
            <div style="display: flex; flex-direction: column; gap: 25px;">
                <h2 style="margin: 0; color: #333; font-size: 22px; text-align: center;">
                    Enter Lichess Username
                </h2>
                <input id="opponent-username" type="text" 
                    placeholder="Username..."
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
                    Clock limit (1 - 180 minutes)
                </h3>
                <input id="clock-limit" type="number"
                    placeholder="Clock limit (1 - 180 minutes)"
                    value="${ctrl.clockLimit}"
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
                    Clock Increment (0 - 60 seconds)
                </h3>
                <input id="clock-increment" type="number"
                    placeholder="Clock Increment (0 - 60 seconds)"
                    value="${ctrl.clockIncrement}"
                    style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
                
                ${getColorSelectionHTML()}
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="cancel-dialog" class="btn btn-secondary" 
                        style="padding: 12px 25px; font-size: 16px;">
                        Cancel
                    </button>
                    <button id="confirm-dialog" class="btn btn-primary" 
                        style="padding: 12px 25px; font-size: 16px;">
                        Challenge
                    </button>
                </div>
            </div>
        `;
        optionsDiv.innerHTML = newContent;
        optionsDiv.style.padding = '40px 30px';
        optionsDiv.style.maxWidth = '500px';

        document.getElementById('confirm-dialog')?.addEventListener('click', () => {
            const usernameInput = (document.getElementById('opponent-username') as HTMLInputElement).value;
            const clockLimitInput = (document.getElementById('clock-limit') as HTMLInputElement).value;
            const clockIncrementInput = (document.getElementById('clock-increment') as HTMLInputElement).value;

            const clockLimit = parseInt(clockLimitInput, 10);
            if (!isNaN(clockLimit)) {
                ctrl.clockLimit = clockLimit;
            }

            const clockIncrement = parseInt(clockIncrementInput, 10);
            if (!isNaN(clockIncrement)) {
                ctrl.clockIncrement = clockIncrement;
            }

            if (isStandardOpening) {
                const playerColor = (document.querySelector('input[name="player-color"]:checked') as HTMLInputElement)?.value || 'random';
                ctrl.playerRequiredColor = playerColor;
            }

            if (usernameInput) {
                ctrl.playHumanFromPosition(fenArrayType, usernameInput);
            }
            closeOption();
        });

        document.getElementById('cancel-dialog')?.addEventListener('click', () => {
            closeOption();
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOption();
        }
    });

    function closeOption() {
        if (overlay && overlay.parentNode) {
            document.body.removeChild(overlay);
        }
    }
}



const anonHome = () => [
  h('div.login.text-center', [
    renderAbout(),
    h('div.big', [h('p', 'Please log in to continue.')]),
    h(
      'a.btn.btn-primary.btn-lg.mt-5',
      {
        attrs: href('/login'),
      },
      'Login with Lichess'
    ),
  ]),
];

const renderAbout = () => h('div.about', [
    h('p', [
        'Chess Positional Training is your secret weapon for mastering the game—whether it’s the opening, the middle game, or the endgame. It’s about converting winning positions into victories, escaping losing endgames, and finding clarity in complex middlegames. Ready to elevate your chess?',
        h('br'), h('br'),
        h('strong', 'How it Works:'),
        h('br'),
        h('ul', [
            h('li', [
                h('strong', 'Start Where You Want: '),
                'Choose to practice openings, midgame, or endgame positions based on your needs.'
            ]),
            h('li', [
                h('strong', 'Play Anyone, Anywhere: '),
                'Challenge friend or play against an AI. Every game begins from a random position, eliminating the need for memorized openings.'
            ]),
            h('li', [
                h('strong', 'Choose Your Challenge: '),
                'Play from an advantage, equal, or losing position to practice specific scenarios and improve your decision-making.'
            ]),
        ]),
    ])
]);

const renderSuggestions = () =>
    h('div.about', [
        h('p', [
            h('small', [
                'Drop your thoughts ',
                h('a', { attrs: { href: 'https://forms.gle/1m1c4mcXea8NqXsU8', target: '_blank' } }, 'here!')
            ])
        ])
    ]);



