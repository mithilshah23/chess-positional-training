import {FenArrayType} from "../enums/fenArrayType.enum";
import {fenWinningArray} from "../constants/fenWinningArray";
import {fenWinningArrayEndGame} from "../constants/fenWinningArrayEndGame";
import {fenEqualArray} from "../constants/fenEqualArray";
import {fenEqualArrayEndGame} from "../constants/fenEqualArrayEndGame";
import {fenWinningArrayOpening} from "../constants/fenWinningArrayOpening";
import {fenEqualArrayOpening} from "../constants/fenEqualArrayOpening";
import {fenLosingArray} from "../constants/fenLosingArray";
import {fenLosingArrayEndGame} from "../constants/fenLosingArrayEndGame";
import {fenLosingArrayOpening} from "../constants/fenLosingArrayOpening";
import {fenMateInFewMoves} from "../constants/fenMateInFewMoves";
import {
    fenAlekhineDefenseBaloghVariation_B03,
    fenAlekhineDefenseBrooklynVariation_B02,
    fenAlekhineDefenseExchangeVariation_B03,
    fenAlekhineDefenseFourPawnsAttack_B03,
    fenAlekhineDefenseFourPawnsAttackFianchettoVariation_B03,
    fenAlekhineDefenseFourPawnsAttackMainLine_B03,
    fenAlekhineDefenseFourPawnsAttackTrifunovicVariation_B03,
    fenAlekhineDefenseGeneral_B02,
    fenAlekhineDefenseHuntVariationLaskerSimulGambit_B02,
    fenAlekhineDefenseMaroczyVariation_B02,
    fenAlekhineDefenseModernVariation_B04,
    fenAlekhineDefenseModernVariationAlburtVariation_B04,
    fenAlekhineDefenseModernVariationAlekhineGambit_B04,
    fenAlekhineDefenseModernVariationKeresVariation_B04,
    fenAlekhineDefenseModernVariationLarsenHaakertVariation_B04,
    fenAlekhineDefenseModernVariationLarsenVariation_B04,
    fenAlekhineDefenseModernVariationLarsenVariationMilesLine_B04,
    fenAlekhineDefenseModernVariationMainLine_B05,
    fenAlekhineDefenseModernVariationPanovVariation_B05,
    fenAlekhineDefenseModernVariationSchmidVariation_B04,
    fenAlekhineDefenseNormalVariation_B02,
    fenAlekhineDefenseNormalVariation_B03,
    fenAlekhineDefenseSaemischAttack_B02,
    fenAlekhineDefenseScandinavianVariation_B02,
    fenAlekhineDefenseSpielmannGambit_B02,
    fenAlekhineDefenseSteinerVariation_B02,
    fenAlekhineDefenseTwoPawnAttack_B02,
    fenAlekhineDefenseTwoPawnAttackLaskerVariation_B02,
    fenAmarOpeningGeneral_A00,
    fenAnderssenOpeningGeneral_A00,
    fenBarnesOpeningGeneral_A00,
    fenBenkoGambitAcceptedCentralStormingVariation_A57,
    fenBenkoGambitAcceptedDlugyVariation_A57,
    fenBenkoGambitAcceptedFianchettoVariation_A58,
    fenBenkoGambitAcceptedFullyAcceptedVariation_A58,
    fenBenkoGambitAcceptedKingWalkVariation_A59,
    fenBenkoGambitAcceptedModernVariation_A57,
    fenBenkoGambitAcceptedPawnReturnVariation_A57,
    fenBenkoGambitAcceptedYugoslavwith7Bxf1Nge2_A59,
    fenBenkoGambitAcceptedYugoslavwithout7Bxf1_A59,
    fenBenkoGambitDeclinedBishopAttack_A57,
    fenBenkoGambitDeclinedMainLine_A57,
    fenBenkoGambitDeclinedPseudoSaemisch_A57,
    fenBenkoGambitDeclinedQuietLine_A57,
    fenBenkoGambitDeclinedSosonkoVariation_A57,
    fenBenkoGambitGeneral_A57,
    fenBenkoGambitZaitsevSystem_A58,
    fenBenkoGambitZaitsevVariationNescafeFrappeAttack_A57,
    fenBenoniDefenseBenoniGambitAccepted_A43,
    fenBenoniDefenseBenoniGambitSchlenkerDefense_A43,
    fenBenoniDefenseBenoniIndianDefense_A43,
    fenBenoniDefenseBenoniIndianDefenseKingsidemoveorder_A43,
    fenBenoniDefenseClassicalVariationArgentineCounterattack_A75,
    fenBenoniDefenseClassicalVariationAverbakhGrivasAttack_A71,
    fenBenoniDefenseClassicalVariationCzerniakDefense_A76,
    fenBenoniDefenseClassicalVariationCzerniakDefense_A78,
    fenBenoniDefenseClassicalVariationCzerniakDefense_A79,
    fenBenoniDefenseClassicalVariationCzerniakDefenseTalLine_A77,
    fenBenoniDefenseClassicalVariationFullline_A74,
    fenBenoniDefenseClassicalVariationGeneral_A70,
    fenBenoniDefenseClassicalVariationMainline_A73,
    fenBenoniDefenseClassicalVariationNewYorkVariation_A70,
    fenBenoniDefenseClassicalVariationTraditionalVariation_A72,
    fenBenoniDefenseCzechBenoniDefense_A56,
    fenBenoniDefenseFianchettoVariation_A62,
    fenBenoniDefenseFianchettoVariationHastingsDefense_A63,
    fenBenoniDefenseFianchettoVariationHastingsDefenseMainLine_A64,
    fenBenoniDefenseFourPawnsAttack_A68,
    fenBenoniDefenseFourPawnsAttackMainLine_A69,
    fenBenoniDefenseFrancoSicilianDefense_A43,
    fenBenoniDefenseGeneral_A43,
    fenBenoniDefenseHromodkaSystem_A57,
    fenBenoniDefenseKingPawnlines_A65,
    fenBenoniDefenseKingsIndianSystem_A56,
    fenBenoniDefenseKnightsTourVariation_A61,
    fenBenoniDefenseMikenasVariation_A66,
    fenBenoniDefenseModernVariation_A56,
    fenBenoniDefenseModernVariation_A60,
    fenBenoniDefenseModernVariationSnakeVariation_A60,
    fenBenoniDefenseOldBenoni_A43,
    fenBenoniDefenseOldBenoniDefenseClarendonCourtVariation_A43,
    fenBenoniDefenseOldBenoniPawnThrust_A44,
    fenBenoniDefenseOldBenoniRussianVariation_A44,
    fenBenoniDefenseOldBenoniSchmidVariation_A43,
    fenBenoniDefensePawnStormVariation_A66,
    fenBenoniDefenseTaimanovVariation_A67,
    fenBenoniDefenseUhlmannVariation_A61,
    fenBenoniDefenseVultureDefense_A56,
    fenBenoniDefenseWeeninkVariation_A56,
    fenBenoniDefenseWoozle_A43,
    fenBirdOpeningDutchVariation_A03,
    fenBirdOpeningFromGambit_A02,
    fenBirdOpeningFromGambitLaskerVariation_A02,
    fenBirdOpeningGeneral_A02,
    fenBirdOpeningHorseflyDefense_A03,
    fenBirdOpeningLaskerVariation_A03,
    fenBirdOpeningSchlechterGambit_A02,
    fenBishopsOpeningBerlinDefense_C24,
    fenBishopsOpeningBlanelGambit_C23,
    fenBishopsOpeningBodenKieseritskyGambit_C27,
    fenBishopsOpeningBoiVariation_C20,
    fenBishopsOpeningGeneral_C23,
    fenBishopsOpeningPonzianiGambit_C24,
    fenBishopsOpeningUrusovGambit_C24,
    fenBishopsOpeningUrusovGambitKeidanskyGambit_C24,
    fenBishopsOpeningViennaHybrid_C28,
    fenBishopsOpeningViennaHybridHromadkaVariation_C28,
    fenBishopsOpeningViennaHybridSpielmannAttack_C26,
    fenBlackmarDiemerGambitBogoljubowVariationStudierAttack_D00,
    fenBlackmarDiemerGambitDeclinedLangeheineckeDefense_D00,
    fenBlackmarDiemerGambitDeclinedOKellyDefense_D00,
    fenBlackmarDiemerGambitEuweDefense_D00,
    fenBlackmarDiemerGambitGeneral_D00,
    fenBlackmarDiemerGambitNetherlandsVariation_D00,
    fenBlackmarDiemerGambitRyderGambit_D00,
    fenBlackmarDiemerGambitTartakowerVariation_D00,
    fenBlackmarDiemerGambitTeichmannVariation_D00,
    fenBlackmarDiemerGambitViennaVariation_D00,
    fenBlackmarDiemerGambitVonPopielGambit_D00,
    fenBlackmarDiemerGambitZieglerDefense_D00,
    fenBlumenfeldCountergambitAccepted_E10,
    fenBlumenfeldCountergambitDusChotimurskyVariation_E10,
    fenBlumenfeldCountergambitGeneral_E10,
    fenBlumenfeldCountergambitSpielmannVariation_E10,
    fenBogoIndianDefenseExchangeVariation_E11,
    fenBogoIndianDefenseGrunfeldVariation_E11,
    fenBogoIndianDefenseNimzowitschVariation_E11,
    fenBogoIndianDefenseRetreatVariation_E11,
    fenBogoIndianDefenseVitolinshVariation_E11,
    fenBogoIndianDefenseWadeSmyslovVariation_E11,
    fenBorgDefenseGeneral_B00,
    fenBorgDefenseTroonGambit_B00,
    fenBudapestDefenseAdlerVariation_A52,
    fenBudapestDefenseAlekhineVariation_A52,
    fenBudapestDefenseAlekhineVariationAbonyiVariation_A52,
    fenBudapestDefenseFajarowiczSteinerVariation_A51,
    fenBudapestDefenseFajarowiczVariation_A51,
    fenBudapestDefenseGeneral_A52,
    fenBudapestDefenseRubinsteinVariation_A52,
    fenCaroKannDefenseAcceleratedPanovAttack_1_B10,
    fenCaroKannDefenseAcceleratedPanovAttack_2_B10,
    fenCaroKannDefenseAcceleratedPanovAttackModernVariation_B10,
    fenCaroKannDefenseAcceleratedPanovAttackOpenVariation_B10,
    fenCaroKannDefenseAdvanceVariation_B12,
    fenCaroKannDefenseAdvanceVariationBayonetAttack_B12,
    fenCaroKannDefenseAdvanceVariationBotvinnikCarlsDefense_B12,
    fenCaroKannDefenseAdvanceVariationBronsteinVariation_B12,
    fenCaroKannDefenseAdvanceVariationShortVariation_B12,
    fenCaroKannDefenseAdvanceVariationTalVariation_B12,
    fenCaroKannDefenseAdvanceVariationVanderWielAttack_B12,
    fenCaroKannDefenseAdvanceVariationVanderWielAttackBishopHunt_B12,
    fenCaroKannDefenseAdvanceVariationVanderWielAttackDreyevDefense_B12,
    fenCaroKannDefenseAlekhineGambit_B15,
    fenCaroKannDefenseBreyerVariation_B10,
    fenCaroKannDefenseBreyerVariationSteinAttack_B10,
    fenCaroKannDefenseBronsteinLarsenVariation_B16,
    fenCaroKannDefenseClassicalVariation_B18,
    fenCaroKannDefenseClassicalVariationFlohrVariation_B18,
    fenCaroKannDefenseClassicalVariationLobronSystem_B19,
    fenCaroKannDefenseClassicalVariationMainlines_B18,
    fenCaroKannDefenseClassicalVariationMaroczyAttack_B18,
    fenCaroKannDefenseClassicalVariationSeirawanVariation_B19,
    fenCaroKannDefenseDeBruyckerDefense_A40,
    fenCaroKannDefenseEuweAttack_B10,
    fenCaroKannDefenseExchangeVariation_B13,
    fenCaroKannDefenseExchangeVariationRubinsteinVariation_B13,
    fenCaroKannDefenseFinnishVariation_B16,
    fenCaroKannDefenseForgacsVariation_B15,
    fenCaroKannDefenseGeneral_B10,
    fenCaroKannDefenseGoldmanVariation_B12,
    fenCaroKannDefenseGurgenidzeCounterattack_B15,
    fenCaroKannDefenseGurgenidzeSystem_B15,
    fenCaroKannDefenseHillbillyAttack_B00,
    fenCaroKannDefenseHillbillyAttackSchaefferGambit_B10,
    fenCaroKannDefenseKarpovVariation_B17,
    fenCaroKannDefenseKarpovVariationModernMainLine_B17,
    fenCaroKannDefenseKarpovVariationModernVariation_B17,
    fenCaroKannDefenseKarpovVariationModernVariationIvanchukDefense_B17,
    fenCaroKannDefenseKarpovVariationModernVariationKasparovAttack_B17,
    fenCaroKannDefenseKarpovVariationSmyslovVariation_B17,
    fenCaroKannDefenseKarpovVariationSmyslovVariationMainLine_B17,
    fenCaroKannDefenseKarpovVariationTiviakovFischerAttack_B17,
    fenCaroKannDefenseMainLine_B15,
    fenCaroKannDefenseMaroczyVariation_B12,
    fenCaroKannDefenseMaroczyVariationMaroczyGambit_B12,
    fenCaroKannDefenseModernVariation_B12,
    fenCaroKannDefensePanovAttack_1_B13,
    fenCaroKannDefensePanovAttack_2_B13,
    fenCaroKannDefensePanovAttack_B14,
    fenCaroKannDefensePanovAttackFianchettoDefense_B14,
    fenCaroKannDefensePanovAttackFianchettoDefenseFianchettoGambit_B13,
    fenCaroKannDefensePanovAttackGunderamAttack_B13,
    fenCaroKannDefensePanovAttackModernDefense_B13,
    fenCaroKannDefensePanovAttackModernDefenseCarlsbadLine_B13,
    fenCaroKannDefensePanovAttackModernDefenseCzerniakLine_B13,
    fenCaroKannDefensePanovAttackModernDefenseMiesesLine_B13,
    fenCaroKannDefenseRasaStudierGambit_B15,
    fenCaroKannDefenseStandardUnorthodoxReplies_B15,
    fenCaroKannDefenseTartakowerVariation_B15,
    fenCaroKannDefenseTwoKnightsAttack_B10,
    fenCaroKannDefenseTwoKnightsAttackMindenoVariation_B11,
    fenCaroKannDefenseTwoKnightsAttackMindenoVariationExchangeLine_B11,
    fenCaroKannDefenseTwoKnightsAttackMindenoVariationRetreatLine_B11,
    fenCaroKannDefenseVonHennigGambit_B15,
    fenCarrDefenseGeneral_B00,
    fenCatalanOpeningClosedVariation_E01,
    fenCatalanOpeningClosedVariation_E06,
    fenCatalanOpeningClosedVariation_E07,
    fenCatalanOpeningClosedVariation_E08,
    fenCatalanOpeningClosedVariationBotvinnikVariation_E07,
    fenCatalanOpeningClosedVariationRabinovichVariation_E09,
    fenCatalanOpeningClosedVariationTraditionalVariation_E09,
    fenCatalanOpeningGeneral_E00,
    fenCatalanOpeningOpenDefense_E02,
    fenCatalanOpeningOpenDefense_E03,
    fenCatalanOpeningOpenDefense_E04,
    fenCatalanOpeningOpenDefenseClassicalLine_E05,
    fenCatalanOpeningOpenDefenseModernSharpVariation_E04,
    fenCatalanOpeningOpenDefenseTarraschDefense_E04,
    fenCenterGameAccepted_C21,
    fenCenterGameBergerVariation_C22,
    fenCenterGameNormalVariation_C22,
    fenCenterGamePaulsenAttackVariation_C22,
    fenClemenzOpeningGeneral_A00,
    fenColleSystem_1_D05,
    fenColleSystem_2_D05,
    fenColleSystemTraditionalColle_D05,
    fenCreepyCrawlyFormationClassicalDefense_A00,
    fenCzechDefenseGeneral_B07,
    fenDanishGambitDeclinedSorensenDefense_C21,
    fenDanishGambitGeneral_C21,
    fenDefaultOpening,
    fenDurasGambitGeneral_B00,
    fenDutchDefenseAlekhineVariation_A92,
    fenDutchDefenseBlackburneVariation_A81,
    fenDutchDefenseBlackmarsSecondGambit_A80,
    fenDutchDefenseClassicalVariation_A84,
    fenDutchDefenseClassicalVariation_A90,
    fenDutchDefenseClassicalVariation_A91,
    fenDutchDefenseClassicalVariation_A92,
    fenDutchDefenseClassicalVariationBlackburneAttack_A91,
    fenDutchDefenseClassicalVariationBuenosAiresVariation_A96,
    fenDutchDefenseClassicalVariationGeneral_A96,
    fenDutchDefenseClassicalVariationHuislVariation_A96,
    fenDutchDefenseClassicalVariationIlyinZhenevskyVariationAlatortsevLisitsynLine_A98,
    fenDutchDefenseClassicalVariationIlyinZhenevskyVariationGeneral_A97,
    fenDutchDefenseClassicalVariationIlyinZhenevskyVariationModernMainLine_A99,
    fenDutchDefenseClassicalVariationStonewallVariation_A94,
    fenDutchDefenseClassicalVariationStonewallVariation_A95,
    fenDutchDefenseClassicalVariationStonewallVariationBotvinnikVariation_A93,
    fenDutchDefenseFianchettoAttack_A81,
    fenDutchDefenseFianchettoVariation_A86,
    fenDutchDefenseGeneral_A80,
    fenDutchDefenseHoptonAttack_A80,
    fenDutchDefenseJanzenKorchnoiGambit_A80,
    fenDutchDefenseKmochAttack_A80,
    fenDutchDefenseKorchnoiAttack_A80,
    fenDutchDefenseKrejcikGambit_A80,
    fenDutchDefenseLeningradVariation_A86,
    fenDutchDefenseLeningradVariation_A87,
    fenDutchDefenseLeningradVariationMatulovicVariation_A89,
    fenDutchDefenseLeningradVariationWarsawVariation_A88,
    fenDutchDefenseModernStonewallVariation_A97,
    fenDutchDefenseNimzoDutchVariation_A90,
    fenDutchDefenseNimzoDutchVariationAlekhineVariation_A90,
    fenDutchDefenseNormalVariation_A84,
    fenDutchDefenseQueensKnightVariation_A85,
    fenDutchDefenseRaphaelVariation_A80,
    fenDutchDefenseRubinsteinVariation_A84,
    fenDutchDefenseSemiLeningradVariation_A81,
    fenDutchDefenseStauntonGambitAccepted_A82,
    fenDutchDefenseStauntonGambitChigorinVariation_A83,
    fenDutchDefenseStauntonGambitGeneralVariation_A83,
    fenDutchDefenseStauntonGambitLaskerVariation_A83,
    fenDutchDefenseStonewallVariationGeneralVariation_A92,
    fenDutchDefenseStonewallVariationModernVariation_A90,
    fenElephantGambitGeneral_C40,
    fenElephantGambitMaroczyGambit_C40,
    fenElephantGambitPaulsenCountergambit_C40,
    fenEnglishDefenseGeneral_A40,
    fenEnglishDefensePerrinVariation_A40,
    fenEnglishOpeningAdorjanDefense_A10,
    fenEnglishOpeningAgincourtDefense_A13,
    fenEnglishOpeningAgincourtDefenseAgincourtVariation_A13,
    fenEnglishOpeningAgincourtDefenseBogoljubowDefense_A13,
    fenEnglishOpeningAgincourtDefenseCatalanDefenseAccepted_A13,
    fenEnglishOpeningAgincourtDefenseCatalanDefenseSemiSlavDefense_A13,
    fenEnglishOpeningAgincourtDefenseKeresDefense_A14,
    fenEnglishOpeningAgincourtDefenseKingsKnight_A13,
    fenEnglishOpeningAgincourtDefenseKurajicaDefense_A13,
    fenEnglishOpeningAgincourtDefenseNeoCatalanDeclined_A14,
    fenEnglishOpeningAgincourtDefenseTarraschDefense_A14,
    fenEnglishOpeningAgincourtDefenseWimpySystem_A13,
    fenEnglishOpeningAngloDutchDefense_A10,
    fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_1_A16,
    fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_2_A16,
    fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_3_A16,
    fenEnglishOpeningAngloIndianDefenseAntiAntiGrunfeld_A17,
    fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_1_A18,
    fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_2_A18,
    fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_3_A18,
    fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_A19,
    fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariationNeiGambit_A19,
    fenEnglishOpeningAngloIndianDefenseGruenfeldFormation_A15,
    fenEnglishOpeningAngloIndianDefenseHedgehogSystem_A17,
    fenEnglishOpeningAngloIndianDefenseKingsIndianFormation_A15,
    fenEnglishOpeningAngloIndianDefenseKingsIndianFormationDoubleFianchetto_A15,
    fenEnglishOpeningAngloIndianDefenseKingsKnightVariation_A15,
    fenEnglishOpeningAngloIndianDefenseMikenasCarlsVariation_A15,
    fenEnglishOpeningAngloIndianDefenseNimzoEnglishOpening_A17,
    fenEnglishOpeningAngloIndianDefenseOldIndianFormation_A15,
    fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A13,
    fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A15,
    fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A17,
    fenEnglishOpeningAngloIndianDefenseQueensIndianVariation_A17,
    fenEnglishOpeningAngloIndianDefenseQueensKnightVariation_A16,
    fenEnglishOpeningAngloIndianDefenseRomanishinGambit_A13,
    fenEnglishOpeningAngloIndianDefenseRomanishinVariation_A11,
    fenEnglishOpeningAngloIndianDefenseScandavianDefenseExchangeVariation_A15,
    fenEnglishOpeningAngloIndianDefenseScandinavianDefense_A15,
    fenEnglishOpeningAngloIndianDefenseSlavFormation_A15,
    fenEnglishOpeningAngloIndianDefenseZviagintsevKrasenkovAttack_A18,
    fenEnglishOpeningAngloLithuanianVariation_A10,
    fenEnglishOpeningAngloScandinavianDefenseGeneral_A10,
    fenEnglishOpeningAngloScandinavianDefenseMalvinasVariation_A10,
    fenEnglishOpeningAngloScandinavianDefenseSchulzGambit_A10,
    fenEnglishOpeningAngloSlavVariationGeneral_A11,
    fenEnglishOpeningDrillVariation_A20,
    fenEnglishOpeningEnglishDefenseGeneral_A10,
    fenEnglishOpeningGeneral_A10,
    fenEnglishOpeningGolombekDefense_A16,
    fenEnglishOpeningGreatSnakeVariation_A10,
    fenEnglishOpeningKingsEnglishVariationBellonGambit_A22,
    fenEnglishOpeningKingsEnglishVariationBotvinnikSystem_A26,
    fenEnglishOpeningKingsEnglishVariationBotvinnikSystemPricklyPawnPassSystem_A26,
    fenEnglishOpeningKingsEnglishVariationBremenHortVariation_A25,
    fenEnglishOpeningKingsEnglishVariationClosedSystem_A25,
    fenEnglishOpeningKingsEnglishVariationClosedSystemFullSymmetry_A26,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariation_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationBotvinnikLine_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationBradleyBeachVariation_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationFianchettoLines_A29,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationFlexibleLine_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationGeneral_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationKorchnoiLine_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_1_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_2_A28,
    fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_3_A28,
    fenEnglishOpeningKingsEnglishVariationGeneral_A20,
    fenEnglishOpeningKingsEnglishVariationGeneralVariation_A21,
    fenEnglishOpeningKingsEnglishVariationHungarianAttack_A25,
    fenEnglishOpeningKingsEnglishVariationKeresDefense_A21,
    fenEnglishOpeningKingsEnglishVariationKramnikShirovCounter_A21,
    fenEnglishOpeningKingsEnglishVariationNimzowitschFlohrVariation_A20,
    fenEnglishOpeningKingsEnglishVariationNimzowitschVariationGeneral_A20,
    fenEnglishOpeningKingsEnglishVariationReversedClosedSicilian_A25,
    fenEnglishOpeningKingsEnglishVariationReversedSicilian_A21,
    fenEnglishOpeningKingsEnglishVariationTaimanovVariation_A25,
    fenEnglishOpeningKingsEnglishVariationThreeKnightsSystemGeneral_A27,
    fenEnglishOpeningKingsEnglishVariationTrogerDefense_A21,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLine_A22,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLines_A24,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationGeneral_A22,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationKeresVariation_A23,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationReversedDragon_A22,
    fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationSmyslovSystem_A22,
    fenEnglishOpeningSymmetricalVariationAntiBenoniVariation_A31,
    fenEnglishOpeningSymmetricalVariationAntiBenoniVariationGellerVariation_A33,
    fenEnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A32,
    fenEnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A33,
    fenEnglishOpeningSymmetricalVariationBotvinnikSystem_A36,
    fenEnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A36,
    fenEnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A37,
    fenEnglishOpeningSymmetricalVariationDoubleFianchetto_A38,
    fenEnglishOpeningSymmetricalVariationDuchampVariation_A38,
    fenEnglishOpeningSymmetricalVariationFianchettoVariation_A34,
    fenEnglishOpeningSymmetricalVariationFianchettoVariation_A36,
    fenEnglishOpeningSymmetricalVariationFourKnightsVariation_A35,
    fenEnglishOpeningSymmetricalVariationFullSymmetryLine_A38,
    fenEnglishOpeningSymmetricalVariationGeneral_A30,
    fenEnglishOpeningSymmetricalVariationHedgehogDefense_A30,
    fenEnglishOpeningSymmetricalVariationMeckingVariation_A39,
    fenEnglishOpeningSymmetricalVariationNormalVariation_A34,
    fenEnglishOpeningSymmetricalVariationRubinsteinVariation_A34,
    fenEnglishOpeningSymmetricalVariationSymmetricalVariation_A36,
    fenEnglishOpeningSymmetricalVariationThreeKnightsVariation_A34,
    fenEnglishOpeningSymmetricalVariationTwoKnightsLine_A37,
    fenEnglishOpeningSymmetricalVariationTwoKnightsVariation_A35,
    fenEnglishOpeningTheWhale_C20,
    fenEnglundGambitComplexDeclined_A40,
    fenEnglundGambitComplexEnglundGambit_A40,
    fenEnglundGambitComplexGeneral_A40,
    fenEnglundGambitComplexHartlaubCharlickGambit_A40,
    fenEnglundGambitComplexStockholmVariation_A40,
    fenEnglundGambitDeclinedReversedFrench_A40,
    fenFourKnightsGameDoubleSpanish_C49,
    fenFourKnightsGameDoubleSpanishMiscwith5OO_C49,
    fenFourKnightsGameGeneral_C46,
    fenFourKnightsGameGunsbergVariation_C46,
    fenFourKnightsGameHalloweenGambit_C46,
    fenFourKnightsGameItalianVariation_C46,
    fenFourKnightsGameItalianVariation_C50,
    fenFourKnightsGameItalianVariationNoaGambit_C47,
    fenFourKnightsGameJanowskiVariation_C49,
    fenFourKnightsGameNimzowitschPaulsen_C49,
    fenFourKnightsGameRankenVariation_C48,
    fenFourKnightsGameScotchVariation_C47,
    fenFourKnightsGameScotchVariationAccepted_C47,
    fenFourKnightsGameScotchVariationBelgradeGambit_C47,
    fenFourKnightsGameScotchVariationKrauseGambit_C47,
    fenFourKnightsGameScotchVariationKrauseGambitLeonhardtDefense_C47,
    fenFourKnightsGameSpanishVariation_C48,
    fenFourKnightsGameSpanishVariation_C49,
    fenFourKnightsGameSpanishVariationClassicalVariation_C48,
    fenFourKnightsGameSpanishVariationClassicalVariationMarshallGambit_C48,
    fenFourKnightsGameSpanishVariationRubinsteinVariation_C48,
    fenFourKnightsGameSpanishVariationRubinsteinVariationAccepted_C48,
    fenFourKnightsGameSpanishVariationSymmetricalVariation_1_C49,
    fenFourKnightsGameSpanishVariationSymmetricalVariation_2_C49,
    fenFourKnightsGameSpanishVariationSymmetricalVariation_3_C49,
    fenFourKnightsGameSpanishVariationSymmetricalVariation_4_C49,
    fenFrenchDefenseAdvanceVariation_1_C02,
    fenFrenchDefenseAdvanceVariation_2_C02,
    fenFrenchDefenseAdvanceVariation_3_C02,
    fenFrenchDefenseAdvanceVariationEuweVariation_C02,
    fenFrenchDefenseAdvanceVariationExtendedBishopSwap_C02,
    fenFrenchDefenseAdvanceVariationLputianVariation_C02,
    fenFrenchDefenseAdvanceVariationMainLine_C02,
    fenFrenchDefenseAdvanceVariationMilnerBarryGambit_C02,
    fenFrenchDefenseAdvanceVariationNimzowitschAttack_C02,
    fenFrenchDefenseAdvanceVariationNimzowitschGambit_C02,
    fenFrenchDefenseAdvanceVariationNimzowitschSystem_C02,
    fenFrenchDefenseAdvanceVariationPaulsenAttack_C02,
    fenFrenchDefenseAdvanceVariationRuisdonkGambit_C02,
    fenFrenchDefenseAdvanceVariationWadeVariation_C02,
    fenFrenchDefenseAlapinGambit_C00,
    fenFrenchDefenseAlekhineChatardAttack_C13,
    fenFrenchDefenseAlekhineChatardAttackAlbinChatardGambit_C13,
    fenFrenchDefenseAlekhineChatardAttackBreyerVariation_C13,
    fenFrenchDefenseAlekhineChatardAttackMaroczyVariation_C13,
    fenFrenchDefenseAlekhineChatardAttackSpielmannVariation_C13,
    fenFrenchDefenseChigorinVariation_C00,
    fenFrenchDefenseClassicalVariation_C11,
    fenFrenchDefenseClassicalVariationAlapinVariation_C14,
    fenFrenchDefenseClassicalVariationBurnVariation_C11,
    fenFrenchDefenseClassicalVariationBurnVariationMainLine_C11,
    fenFrenchDefenseClassicalVariationBurnVariationMorozevichLine_C11,
    fenFrenchDefenseClassicalVariationDelayedExchangeVariation_C11,
    fenFrenchDefenseClassicalVariationGeneralVariation_C14,
    fenFrenchDefenseClassicalVariationNormalVariation_C13,
    fenFrenchDefenseClassicalVariationPollockVariation_C14,
    fenFrenchDefenseClassicalVariationRichterAttack_1_C13,
    fenFrenchDefenseClassicalVariationRichterAttack_2_C13,
    fenFrenchDefenseClassicalVariationRubinsteinVariation_C14,
    fenFrenchDefenseClassicalVariationSteinitzVariation_C11,
    fenFrenchDefenseClassicalVariationSteinitzVariation_C14,
    fenFrenchDefenseClassicalVariationSwissVariation_C11,
    fenFrenchDefenseClassicalVariationTartakowerVariation_C13,
    fenFrenchDefenseDiemerDuhmGambit_C00,
    fenFrenchDefenseExchangeVariation_C01,
    fenFrenchDefenseExchangeVariationMonteCarloVariation_C01,
    fenFrenchDefenseExchangeVariationSvenoniusVariation_C01,
    fenFrenchDefenseGeneral_C00,
    fenFrenchDefenseHorwitzAttack_C00,
    fenFrenchDefenseHorwitzAttackPapaTiculatGambit_C00,
    fenFrenchDefenseKingsIndianAttack_C00,
    fenFrenchDefenseKnightVariation_C00,
    fenFrenchDefenseLaBourdonnaisVariation_C00,
    fenFrenchDefenseMacCutcheonVariation_C12,
    fenFrenchDefenseMacCutcheonVariationBernsteinVariation_C12,
    fenFrenchDefenseMacCutcheonVariationChigorinVariation_C12,
    fenFrenchDefenseMacCutcheonVariationDrOllandDutchVariation_C12,
    fenFrenchDefenseMacCutcheonVariationExchangeVariation_C12,
    fenFrenchDefenseMacCutcheonVariationJanowskiVariation_C12,
    fenFrenchDefenseMacCutcheonVariationLaskerVariation_1_C12,
    fenFrenchDefenseMacCutcheonVariationLaskerVariation_2_C12,
    fenFrenchDefenseMacCutcheonVariationTartakowerVariation_C12,
    fenFrenchDefenseMacCutcheonVariationWolfGambit_C12,
    fenFrenchDefenseMainLine_C00,
    fenFrenchDefenseMediterraneanDefense_C01,
    fenFrenchDefenseNormalVariation_C00,
    fenFrenchDefenseNormalVariation_C10,
    fenFrenchDefenseOrthoschnappGambit_C00,
    fenFrenchDefensePelikanVariation_C00,
    fenFrenchDefenseQueensKnight_C00,
    fenFrenchDefenseRetiSpielmannAttack_C00,
    fenFrenchDefenseReversedPhilidorFormation_C00,
    fenFrenchDefenseRubinsteinVariation_C10,
    fenFrenchDefenseRubinsteinVariationBlackburneDefense_C10,
    fenFrenchDefenseRubinsteinVariationCapablancaLine_C10,
    fenFrenchDefenseRubinsteinVariationFortKnoxVariation_C10,
    fenFrenchDefenseRubinsteinVariationMaricVariation_C10,
    fenFrenchDefenseSchlechterVariation_C00,
    fenFrenchDefenseSteinitzAttack_C00,
    fenFrenchDefenseSteinitzVariation_C11,
    fenFrenchDefenseSteinitzVariationBoleslavskyVariation_C11,
    fenFrenchDefenseSteinitzVariationGledhillAttack_C11,
    fenFrenchDefenseTarraschVariation_C03,
    fenFrenchDefenseTarraschVariationBotvinnikVariation_C05,
    fenFrenchDefenseTarraschVariationChistyakovDefense_C07,
    fenFrenchDefenseTarraschVariationChistyakovDefenseModernLine_C07,
    fenFrenchDefenseTarraschVariationClosedVariation_1_C05,
    fenFrenchDefenseTarraschVariationClosedVariation_2_C05,
    fenFrenchDefenseTarraschVariationClosedVariationMainLine_C06,
    fenFrenchDefenseTarraschVariationGuimardDefense_C03,
    fenFrenchDefenseTarraschVariationGuimardDefenseMainLine_C04,
    fenFrenchDefenseTarraschVariationHaberditzVariation_C03,
    fenFrenchDefenseTarraschVariationLeningradVariation_C06,
    fenFrenchDefenseTarraschVariationModernSystem_C03,
    fenFrenchDefenseTarraschVariationMorozevichVariation_C03,
    fenFrenchDefenseTarraschVariationOpenSystem_C07,
    fenFrenchDefenseTarraschVariationOpenSystemAdvanceLine_C08,
    fenFrenchDefenseTarraschVariationOpenSystemEuweKeresLine_C07,
    fenFrenchDefenseTarraschVariationOpenSystemMainLine_C09,
    fenFrenchDefenseTarraschVariationOpenSystemSuechtingLine_C07,
    fenFrenchDefenseTarraschVariationPawnCenterVariation_C05,
    fenFrenchDefenseTwoKnightsVariation_C00,
    fenFrenchDefenseWinawerVariation_C15,
    fenFrenchDefenseWinawerVariationAdvanceVariation_1_C17,
    fenFrenchDefenseWinawerVariationAdvanceVariation_1_C18,
    fenFrenchDefenseWinawerVariationAdvanceVariation_2_C17,
    fenFrenchDefenseWinawerVariationAdvanceVariation_2_C18,
    fenFrenchDefenseWinawerVariationAdvanceVariation_3_C17,
    fenFrenchDefenseWinawerVariationAdvanceVariation_C19,
    fenFrenchDefenseWinawerVariationAdvanceVariationGeneral_C16,
    fenFrenchDefenseWinawerVariationAdvanceVariationMoscowVariation_C17,
    fenFrenchDefenseWinawerVariationAlekhineGambitAccepted_C15,
    fenFrenchDefenseWinawerVariationAlekhineGambitKanVariation_C15,
    fenFrenchDefenseWinawerVariationAlekhineMaroczyGambit_C15,
    fenFrenchDefenseWinawerVariationBogoljubowVariation_C17,
    fenFrenchDefenseWinawerVariationBogoljubowVariationIcelandicDefense_C17,
    fenFrenchDefenseWinawerVariationClassicalVariation_C18,
    fenFrenchDefenseWinawerVariationDelayedExchangeVariation_C01,
    fenFrenchDefenseWinawerVariationExchangeVariationCanalAttack_C01,
    fenFrenchDefenseWinawerVariationFingerslipVariation_C15,
    fenFrenchDefenseWinawerVariationFingerslipVariationKuninDoubleGambit_C15,
    fenFrenchDefenseWinawerVariationFingerslipVariationMainLine_C15,
    fenFrenchDefenseWinawerVariationMaroczyWallisVariation_C18,
    fenFrenchDefenseWinawerVariationPetrosianVariation_C16,
    fenFrenchDefenseWinawerVariationPoisonedPawnVariationGeneral_C18,
    fenFrenchDefenseWinawerVariationPoisonedPawnVariationMainLine_C18,
    fenFrenchDefenseWinawerVariationPoisonedPawnVariationPaoliVariation_C18,
    fenFrenchDefenseWinawerVariationPositionalVariation_C19,
    fenFrenchDefenseWinawerVariationRetreatVariationArmenianLine_C18,
    fenFrenchDefenseWinawerVariationRetreatVariationGeneral_C18,
    fenFrenchDefenseWinawerVariationWinckelmannRiemerGambit_C15,
    fenFrenchDefenseWingGambit_C00,
    fenGoldsmithDefenseGeneral_B00,
    fenGrobOpeningGeneral_A00,
    fenGrobOpeningGrobGambit_A00,
    fenGrobOpeningGrobGambitDeclined_A00,
    fenGrobOpeningGrobGambitFritzGambit_A00,
    fenGrobOpeningKeeneDefense_A00,
    fenGrobOpeningSpikeHurstAttack_A00,
    fenGruenfeldDefenseBotvinnikVariation_D95,
    fenGruenfeldDefenseBrinckmannAttack_D82,
    fenGruenfeldDefenseBrinckmannAttackGrunfeldGambit_D83,
    fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitAccepted_D84,
    fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitBotvinnikVariation_D83,
    fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitCapablancaVariation_D83,
    fenGruenfeldDefenseBrinckmannAttackReshevskyGambit_D83,
    fenGruenfeldDefenseCounterthrustVariation_E60,
    fenGruenfeldDefenseExchangeVariation_D85,
    fenGruenfeldDefenseExchangeVariationClassicalVariation_D86,
    fenGruenfeldDefenseExchangeVariationLarsenVariation_D86,
    fenGruenfeldDefenseExchangeVariationModernExchangeVariation_D85,
    fenGruenfeldDefenseExchangeVariationModernExchangeVariationKramniksline_D85,
    fenGruenfeldDefenseExchangeVariationModernExchangeVariationPawnGrabline_D85,
    fenGruenfeldDefenseExchangeVariationNadanianAttack_D85,
    fenGruenfeldDefenseExchangeVariationSevilleVariation_D87,
    fenGruenfeldDefenseExchangeVariationSimaginsImprovedVariation_D86,
    fenGruenfeldDefenseExchangeVariationSokolskyVariation_D89,
    fenGruenfeldDefenseExchangeVariationSpasskyVariation_D87,
    fenGruenfeldDefenseExchangeVariationSpasskyVariation_D88,
    fenGruenfeldDefenseExchangeVariationSpasskyVariation_D89,
    fenGruenfeldDefenseFlohrDefense_D94,
    fenGruenfeldDefenseFlohrVariation_D90,
    fenGruenfeldDefenseGeneral_D80,
    fenGruenfeldDefenseLutikovVariation_D70,
    fenGruenfeldDefenseMakogonovVariation_D94,
    fenGruenfeldDefenseOpocenskyVariation_D94,
    fenGruenfeldDefenseRussianVariation_D96,
    fenGruenfeldDefenseRussianVariationAcceleratedVariation_D81,
    fenGruenfeldDefenseRussianVariationByrneSimaginVariation_D97,
    fenGruenfeldDefenseRussianVariationHungarianVariation_D97,
    fenGruenfeldDefenseRussianVariationPrinsVariation_D97,
    fenGruenfeldDefenseRussianVariationSmyslovVariation_D98,
    fenGruenfeldDefenseRussianVariationSmyslovVariation_D99,
    fenGruenfeldDefenseRussianVariationSzaboBoleslavsky_D97,
    fenGruenfeldDefenseRussianVariationWithe4_D97,
    fenGruenfeldDefenseSmyslovDefense_D94,
    fenGruenfeldDefenseThreeKnightsVariation_D90,
    fenGruenfeldDefenseThreeKnightsVariationBurilleVariation_D94,
    fenGruenfeldDefenseThreeKnightsVariationBurilleVariationReversedTarrasch_D94,
    fenGruenfeldDefenseThreeKnightsVariationHungarianAttack_D92,
    fenGruenfeldDefenseThreeKnightsVariationHungarianVariation_D93,
    fenGruenfeldDefenseThreeKnightsVariationParisVariation_D94,
    fenGruenfeldDefenseThreeKnightsVariationPetrosianSystem_D91,
    fenGruenfeldDefenseThreeKnightsVariationViennaVariation_D95,
    fenGruenfeldDefenseZaitsevGambit_D80,
    fenGunderamDefenseGeneral_C40,
    fenHorwitzDefenseGeneral_A40,
    fenHungarianOpeningCatalanFormation_A00,
    fenHungarianOpeningDutchDefense_A00,
    fenHungarianOpeningGeneral_A00,
    fenHungarianOpeningIndianDefense_A00,
    fenHungarianOpeningReversedAlekhine_A00,
    fenHungarianOpeningReversedModernDefense_A00,
    fenHungarianOpeningSicilianInvitation_A00,
    fenHungarianOpeningSlavFormation_A00,
    fenHungarianOpeningSymmetricalVariation_A00,
    fenIndianGameAntiGrunfeldAdvanceVariation_E60,
    fenIndianGameAntiGrunfeldAlekhineVariation_D70,
    fenIndianGameAntiGrunfeldAlekhineVariationLekoGambit_D70,
    fenIndianGameAntiNimzoindian_E10,
    fenIndianGameBudapestDefense_A51,
    fenIndianGameColleSystemKingsIndianVariation_A48,
    fenIndianGameCzechIndian_A46,
    fenIndianGameDefensePseudoQueensIndianMarienbadSystem_A47,
    fenIndianGameDzindziIndianDefense_E10,
    fenIndianGameGeneral_A45,
    fenIndianGameGibbinsWiedehagenGambitAccepted_A45,
    fenIndianGameKingsideFianchetto_E61,
    fenIndianGameKnightsVariationAlburtMilesVariation_A46,
    fenIndianGameKnightsVariationGeneral_A46,
    fenIndianGameLondonSystem_A46,
    fenIndianGameLondonSystem_A48,
    fenIndianGameNormalVariation_A50,
    fenIndianGamePalefaceAttack_A45,
    fenIndianGamePolishVariation_A46,
    fenIndianGamePrzepiorkaVariation_A49,
    fenIndianGamePseudoBenko_A46,
    fenIndianGamePseudoKingsIndianVariation_A49,
    fenIndianGamePseudoQueensIndian_A47,
    fenIndianGameQueensPawnOpening_E00,
    fenIndianGameReversedChigorinDefense_A45,
    fenIndianGameSaemischIndian_A50,
    fenIndianGameSeirawanAttack_E00,
    fenIndianGameSpielmannIndian_A46,
    fenIndianGameTartakowerAttack_A45,
    fenIndianGameWadeTarkatowerDefense_A46,
    fenIndianGameYusupovRubinsteinSystem_A46,
    fenItalianGameAntiFriedLiverDefense_C55,
    fenItalianGameBirdsAttack_C53,
    fenItalianGameClassicalVariation_C53,
    fenItalianGameClassicalVariationAlbinGambit_C53,
    fenItalianGameClassicalVariationCenterAtttack_C53,
    fenItalianGameClassicalVariationCenterHoldingVariation_C53,
    fenItalianGameClassicalVariationClosedVariation_C53,
    fenItalianGameClassicalVariationDelaBourdonnaisVariation_C53,
    fenItalianGameClassicalVariationGeneral_C53,
    fenItalianGameClassicalVariationGiuocoPianissimo_C53,
    fenItalianGameClassicalVariationGiuocoPianissimoMainline_C53,
    fenItalianGameClassicalVariationGrecoGambit_C53,
    fenItalianGameClassicalVariationGrecoGambitAnderssenVariation_C54,
    fenItalianGameClassicalVariationGrecoGambitGrecoVariation_C54,
    fenItalianGameClassicalVariationGrecoGambitMainLine_C54,
    fenItalianGameClassicalVariationGrecoGambitMasonGambit_C54,
    fenItalianGameClassicalVariationGrecoGambitMoellerTherkatzAttack_C54,
    fenItalianGameClassicalVariationGrecoGambitTraditionalLine_C54,
    fenItalianGameDeutzGambit_C55,
    fenItalianGameEvansGambitAnderssenDefense_C52,
    fenItalianGameEvansGambitAnderssenVariation_C51,
    fenItalianGameEvansGambitAnderssenVariationCordelLine_C51,
    fenItalianGameEvansGambitBronsteinDefense_C51,
    fenItalianGameEvansGambitCompromisedDefense_C52,
    fenItalianGameEvansGambitDeclined_C51,
    fenItalianGameEvansGambitMacDonnellDefense_C51,
    fenItalianGameEvansGambitMacDonnellDefenseMainLine_C51,
    fenItalianGameEvansGambitMainLine_C52,
    fenItalianGameEvansGambitMiesesDefense_C52,
    fenItalianGameEvansGambitPierceDefense_C52,
    fenItalianGameEvansGambitSlowVariation_C52,
    fenItalianGameEvansGambitStoneWareVariation_C51,
    fenItalianGameEvansGambitTartakowerAttack_C52,
    fenItalianGameGeneral_C50,
    fenItalianGameGiuocoPianissimo_C50,
    fenItalianGameGiuocoPianissimoCanalVariation_C50,
    fenItalianGameGiuocoPianissimoItalianFourKnightsVariation_C50,
    fenItalianGameGiuocoPianissimoNormal_C50,
    fenItalianGameHungarianDefense_C50,
    fenItalianGameHungarianDefenseTartakowerVariation_C50,
    fenItalianGameItalianVariation_C50,
    fenItalianGameRosentreterGambit_C50,
    fenItalianGameRousseauGambit_C50,
    fenItalianGameSchillingKosticGambit_C50,
    fenItalianGameScotchGambit_C55,
    fenItalianGameScotchGambitAnderssenAttack_C56,
    fenItalianGameScotchGambitAnderssenAttackMainLine_C56,
    fenItalianGameScotchGambitCanalVariation_C56,
    fenItalianGameScotchGambitDeclined_C55,
    fenItalianGameScotchGambitDeRiviereDefense_C55,
    fenItalianGameScotchGambitDoubleGambitAccepted_C56,
    fenItalianGameScotchGambitJanowskiDefense_C55,
    fenItalianGameScotchGambitMaxLangeAttack_C55,
    fenItalianGameScotchGambitMaxLangeAttackLongVariation_C55,
    fenItalianGameScotchGambitMaxLangeAttackSpielmannDefense_C56,
    fenItalianGameScotchGambitNakhmansonGambit_C56,
    fenItalianGameScotchGambitWalbrodtBairdGambit_C55,
    fenItalianGameTwoKnightsDefense_1_C55,
    fenItalianGameTwoKnightsDefense_2_C55,
    fenItalianGameTwoKnightsDefenseFriedLiverAttack_C57,
    fenItalianGameTwoKnightsDefenseFritzVariation_C57,
    fenItalianGameTwoKnightsDefenseKnightAttack_C57,
    fenItalianGameTwoKnightsDefenseKnightAttackNormalVariation_C57,
    fenItalianGameTwoKnightsDefenseLolliAttack_C57,
    fenItalianGameTwoKnightsDefenseModernBishopsOpening_C55,
    fenItalianGameTwoKnightsDefensePerreuxVariation_C55,
    fenItalianGameTwoKnightsDefensePolerioDefense_C57,
    fenItalianGameTwoKnightsDefensePolerioDefenseBishopCheckline_C58,
    fenItalianGameTwoKnightsDefensePolerioDefenseBogoljubowVariation_C58,
    fenItalianGameTwoKnightsDefensePolerioDefenseKieseritskyVariation_C58,
    fenItalianGameTwoKnightsDefensePolerioDefenseSuhleDefense_C59,
    fenItalianGameTwoKnightsDefenseTraxlerCounterattackBishopsacline_C57,
    fenItalianGameTwoKnightsDefenseTraxlerCounterattackKnightsacline_C57,
    fenItalianGameTwoKnightsDefenseUlvestadVariation_C57,
    fenKadasOpeningGeneral_A00,
    fenKangarooDefenseGeneral_E00,
    fenKangarooDefenseKeresDefenseTranspositionalVariation_E00,
    fenKingPawnGameAlapinOpening_C20,
    fenKingPawnGameBuschGassGambit_C40,
    fenKingPawnGameDresdenOpening_C44,
    fenKingPawnGameGeneral_C20,
    fenKingPawnGameLeonardisVariation_C20,
    fenKingPawnGameMacleodAttack_C20,
    fenKingPawnGameMaroczyDefense_B07,
    fenKingPawnGameTaylerOpening_C44,
    fenKingPawnGameTaylerOpeningInvertedHanham_C44,
    fenKingPawnGameWaywardQueenAttack_C20,
    fenKingsGambitAcceptedAbbaziaDefense_C36,
    fenKingsGambitAcceptedBeckerDefense_C34,
    fenKingsGambitAcceptedBishopsGambit_C33,
    fenKingsGambitAcceptedBishopsGambitBledowCountergambit_C33,
    fenKingsGambitAcceptedBishopsGambitBogoljubowDefense_C33,
    fenKingsGambitAcceptedBishopsGambitBogoljubowVariation_C33,
    fenKingsGambitAcceptedBishopsGambitCozioVariation_C33,
    fenKingsGambitAcceptedBishopsGambitMaurianDefense_C33,
    fenKingsGambitAcceptedBonschOsmolovskyVariation_C34,
    fenKingsGambitAcceptedCunninghamDefense_C35,
    fenKingsGambitAcceptedCunninghamDefenseMcCormickDefense_C35,
    fenKingsGambitAcceptedFischerDefense_C34,
    fenKingsGambitAcceptedGrecoGambit_C38,
    fenKingsGambitAcceptedHansteinGambit_C38,
    fenKingsGambitAcceptedKieseritskyGambitKolischDefense_C39,
    fenKingsGambitAcceptedKieseritskyGambitLongWhip_C39,
    fenKingsGambitAcceptedKieseritskyGambitRubinsteinVariation_C39,
    fenKingsGambitAcceptedKingsKnightGambit_C34,
    fenKingsGambitAcceptedMacLeodDefense_C34,
    fenKingsGambitAcceptedMasonKeresGambit_C33,
    fenKingsGambitAcceptedModernDefense_C36,
    fenKingsGambitAcceptedSchallopDefense_C34,
    fenKingsGambitAcceptedTraditionalVariation_C38,
    fenKingsGambitDeclinedClassicalVariation_C30,
    fenKingsGambitDeclinedClassicalVariationGeneral_C30,
    fenKingsGambitDeclinedKeeneDefense_C30,
    fenKingsGambitDeclinedMilesDefense_C30,
    fenKingsGambitDeclinedPetrovsDefense_C30,
    fenKingsGambitDeclinedQueensKnightDefense_C30,
    fenKingsGambitFalkbeerCountergambitAccepted_C31,
    fenKingsGambitFalkbeerCountergambitBlackburneAttack_C31,
    fenKingsGambitFalkbeerCountergambitCharousekGambit_C31,
    fenKingsGambitFalkbeerCountergambitCharousekGambitAccepted_C32,
    fenKingsGambitFalkbeerCountergambitModernTransfer_C32,
    fenKingsGambitFalkbeerCountergambitNimzowitschMarshallCountergambit_C31,
    fenKingsGambitFalkbeerCountergambitStauntonLine_C31,
    fenKingsGambitGeneral_C30,
    fenKingsIndianAttackDoubleFianchetto_A07,
    fenKingsIndianAttackGeneral_A07,
    fenKingsIndianAttackKeresVariation_A07,
    fenKingsIndianAttackPachmanSystem_A07,
    fenKingsIndianAttackSicilianVariation_1_A08,
    fenKingsIndianAttackSicilianVariation_2_A08,
    fenKingsIndianAttackSicilianVariation_A07,
    fenKingsIndianAttackSmyslovVariation_A05,
    fenKingsIndianAttackSpasskyVariation_A05,
    fenKingsIndianAttackSymmtericalDefense_A05,
    fenKingsIndianAttackWahlsDefense_A05,
    fenKingsIndianAttackYugoslavVariation_A07,
    fenKingsIndianDefenseAcceleratedAverbakhVariation_E70,
    fenKingsIndianDefenseAverbakhVariation6Nc6Defense_E73,
    fenKingsIndianDefenseAverbakhVariation_E73,
    fenKingsIndianDefenseAverbakhVariationBenoniDefenseAdvanceVariation_E75,
    fenKingsIndianDefenseAverbakhVariationBenoniDefenseExchangeVariation_E74,
    fenKingsIndianDefenseAverbakhVariationFlexibleDefense_E73,
    fenKingsIndianDefenseAverbakhVariationGellerDefense_E73,
    fenKingsIndianDefenseAverbakhVariationModernDefense_E73,
    fenKingsIndianDefenseAverbakhVariationModernDefenseBurgessLine_E73,
    fenKingsIndianDefenseAverbakhVariationSpanishDefense_E73,
    fenKingsIndianDefenseExchangeVariation_E92,
    fenKingsIndianDefenseFianchettoVariationBenjaminDefense_E61,
    fenKingsIndianDefenseFianchettoVariationClassicalFianchetto_E67,
    fenKingsIndianDefenseFianchettoVariationClassicalMainLine_E69,
    fenKingsIndianDefenseFianchettoVariationDebrecenDefense_E67,
    fenKingsIndianDefenseFianchettoVariationDelayedFianchetto_E62,
    fenKingsIndianDefenseFianchettoVariationDoubleFianchettoAttack_E64,
    fenKingsIndianDefenseFianchettoVariationHungarianVariation_E64,
    fenKingsIndianDefenseFianchettoVariationImmediateFianchetto_E60,
    fenKingsIndianDefenseFianchettoVariationKarlsbadVariation_E62,
    fenKingsIndianDefenseFianchettoVariationKavalekDefense_E62,
    fenKingsIndianDefenseFianchettoVariationLarsenDefense_E62,
    fenKingsIndianDefenseFianchettoVariationLesserSimaginSpassky_E62,
    fenKingsIndianDefenseFianchettoVariationLongVariation_E68,
    fenKingsIndianDefenseFianchettoVariationPannoVariation_E63,
    fenKingsIndianDefenseFianchettoVariationPannoVariationDonnerLine_E63,
    fenKingsIndianDefenseFianchettoVariationPannoVariationKorchnoiLine_E63,
    fenKingsIndianDefenseFianchettoVariationPterodactylVariation_E64,
    fenKingsIndianDefenseFianchettoVariationSimaginVariation_E62,
    fenKingsIndianDefenseFianchettoVariationUhlmannSzaboSystem_E62,
    fenKingsIndianDefenseFianchettoVariationYugoslavSystemwoNc3_E64,
    fenKingsIndianDefenseFianchettoVariationYugoslavVariation_E65,
    fenKingsIndianDefenseFianchettoVariationYugoslavVariationAdvanceLine_E66,
    fenKingsIndianDefenseFianchettoVariationYugoslavVariationExchangeLine_E66,
    fenKingsIndianDefenseFianchettoVariationYugoslavVariationRareLines_E64,
    fenKingsIndianDefenseFourPawnsAttack_E76,
    fenKingsIndianDefenseFourPawnsAttackDynamicAttack_E76,
    fenKingsIndianDefenseFourPawnsAttackExchangeVariation_E79,
    fenKingsIndianDefenseFourPawnsAttackFlorentineGambit_E77,
    fenKingsIndianDefenseFourPawnsAttackFluidAttack_E78,
    fenKingsIndianDefenseFourPawnsAttackGeneral_E77,
    fenKingsIndianDefenseFourPawnsAttackNormalAttack_E77,
    fenKingsIndianDefenseKazakhVariation_E91,
    fenKingsIndianDefenseKramerVariation_E70,
    fenKingsIndianDefenseLarsenVariation_E90,
    fenKingsIndianDefenseMakagonovVariation_E71,
    fenKingsIndianDefenseNormalVariation_E70,
    fenKingsIndianDefenseNormalVariationDeferredFianchetto_E72,
    fenKingsIndianDefenseNormalVariationKingsKnightVariation_E60,
    fenKingsIndianDefenseNormalVariationRareDefenses_E90,
    fenKingsIndianDefenseNormalVariationStandardDevelopment_E73,
    fenKingsIndianDefenseOrthodoxVariation_E92,
    fenKingsIndianDefenseOrthodoxVariation_E94,
    fenKingsIndianDefenseOrthodoxVariationAroninTaimanovDefense_E97,
    fenKingsIndianDefenseOrthodoxVariationBayonetAttack_E97,
    fenKingsIndianDefenseOrthodoxVariationBayonetAttackSokolovsLine_E97,
    fenKingsIndianDefenseOrthodoxVariationClassicalSystemBenkoAttack_E99,
    fenKingsIndianDefenseOrthodoxVariationClassicalSystemKozulGambit_E99,
    fenKingsIndianDefenseOrthodoxVariationClassicalSystemMiscLines_E98,
    fenKingsIndianDefenseOrthodoxVariationClassicalSystemNeoClasssicalLine_E99,
    fenKingsIndianDefenseOrthodoxVariationClassicalSystemTraditionalLine_E99,
    fenKingsIndianDefenseOrthodoxVariationDonnerDefense_E94,
    fenKingsIndianDefenseOrthodoxVariationGeneral_E91,
    fenKingsIndianDefenseOrthodoxVariationGlekDefense_E94,
    fenKingsIndianDefenseOrthodoxVariationGligoricTaimanovSystem_E92,
    fenKingsIndianDefenseOrthodoxVariationKorchnoiAttack_E97,
    fenKingsIndianDefenseOrthodoxVariationModernSystem_E97,
    fenKingsIndianDefenseOrthodoxVariationPositionalDefense_E94,
    fenKingsIndianDefenseOrthodoxVariationPositionalDefenseClosedLine_E94,
    fenKingsIndianDefenseOrthodoxVariationPositionalDefenseMainLine_E96,
    fenKingsIndianDefenseOrthodoxVariationUkranianDefense_E94,
    fenKingsIndianDefensePetrosianVariation_E92,
    fenKingsIndianDefensePetrosianVariationKeresDefense_E93,
    fenKingsIndianDefensePetrosianVariationNormalDefense_E93,
    fenKingsIndianDefensePetrosianVariationSteinDefense_E92,
    fenKingsIndianDefensePomarSystem_E72,
    fenKingsIndianDefenseSaemischVariation_E80,
    fenKingsIndianDefenseSaemischVariation_E86,
    fenKingsIndianDefenseSaemischVariationBobotsovKorchnoiPetrosianVariation_E81,
    fenKingsIndianDefenseSaemischVariationByrneDefense_E81,
    fenKingsIndianDefenseSaemischVariationClosedVariation7c6_E88,
    fenKingsIndianDefenseSaemischVariationClosedVariation_E87,
    fenKingsIndianDefenseSaemischVariationClosedVariationMainLine_E89,
    fenKingsIndianDefenseSaemischVariationDoubleFianchetto_E82,
    fenKingsIndianDefenseSaemischVariationNormalDefense_E81,
    fenKingsIndianDefenseSaemischVariationOrthodoxVariation_E85,
    fenKingsIndianDefenseSaemischVariationPannoFormation_E83,
    fenKingsIndianDefenseSaemischVariationYatesDefense_E83,
    fenKingsIndianDefenseSemiAverbakhSystem_E73,
    fenKingsIndianDefenseSixPawnsAttack_E77,
    fenKingsIndianDefenseSmyslovVariation_E61,
    fenKingsIndianDefenseSteinerAttack_E76,
    fenKingsIndianDefenseZinnowitzVariation_E90,
    fenKingsKnightOpeningGeneral_C40,
    fenKingsKnightOpeningKonstantinopolskyOpening_C44,
    fenKingsKnightOpeningNormalVariation_C44,
    fenKingsPawnOpeningGeneral_B00,
    fenLatvianGambitAccepted_C40,
    fenLatvianGambitAcceptedBilguerVariation_C40,
    fenLatvianGambitAcceptedLeonhardtVariation_C40,
    fenLatvianGambitFraserDefense_C40,
    fenLatvianGambitGeneral_C40,
    fenLatvianGambitMasonCountergambit_C40,
    fenLionDefenseAntiPhilidor_B07,
    fenLionDefenseAntiPhilidorLionsCave_B07,
    fenLionDefenseBayonetAttack_B07,
    fenLionDefenseLionsJaw_B07,
    fenLondonSystemPoisonedPawnVariation_D02,
    fenMexicanDefenseGeneral_A50,
    fenMiesesOpeningGeneral_A00,
    fenMiesesOpeningReversedRat_A00,
    fenMikenasDefense_A40,
    fenMikenasDefenseLithuanianVariation_A40,
    fenModernDefenseAverbakhSystemKotovVariation_A42,
    fenModernDefenseAverbakhSystemRandspringerVariation_A42,
    fenModernDefenseAverbakhVariation_A42,
    fenModernDefenseAverbakhVariationPseudoSaemisch_A42,
    fenModernDefenseBeefeaterVariation_A40,
    fenModernDefenseBishopAttack_B06,
    fenModernDefenseGellersSystem_B06,
    fenModernDefenseGeneral_A41,
    fenModernDefenseGurgenidzeDefense_B06,
    fenModernDefenseImprovedMaroczy_B06,
    fenModernDefenseKingPawnFianchetto_B06,
    fenModernDefenseLizardDefenseMittenbergerGambit_B06,
    fenModernDefenseModernPterodactyl_B06,
    fenModernDefenseMongredienDefense_1_B06,
    fenModernDefenseMongredienDefense_2_B06,
    fenModernDefenseNorwegianDefense_B06,
    fenModernDefenseNorwegianDefenseNorwegianGambit_B06,
    fenModernDefensePseudoAustrianAttack_B06,
    fenModernDefensePterodactylVariation_B06,
    fenModernDefenseQueenPawnFianchetto_A40,
    fenModernDefenseRossolimoVariation_A41,
    fenModernDefenseSemiAverbakhVariationPterodactylVariation_B06,
    fenModernDefenseStandardDefense_B06,
    fenModernDefenseStandardLine_B06,
    fenModernDefenseThreePawnsAttack_B06,
    fenModernDefenseTwoKnightsVariation_B06,
    fenModernDefenseTwoKnightsVariationSuttlesVariation_B06,
    fenNeoGruenfeldDefenseClassicalVariation_D77,
    fenNeoGruenfeldDefenseClassicalVariationModernDefense_D78,
    fenNeoGruenfeldDefenseClassicalVariationOriginalDefense_D78,
    fenNeoGruenfeldDefenseClassicalVariationPolgarVariation_D78,
    fenNeoGruenfeldDefenseDelayedExchangeVariation_1_D75,
    fenNeoGruenfeldDefenseDelayedExchangeVariation_2_D75,
    fenNeoGruenfeldDefenseDelayedExchangeVariation_D74,
    fenNeoGruenfeldDefenseDelayedExchangeVariation_D76,
    fenNeoGruenfeldDefenseExchangeVariation_D71,
    fenNeoGruenfeldDefenseExchangeVariationwith6e4_D72,
    fenNeoGruenfeldDefenseGeneral_D70,
    fenNeoGruenfeldDefenseMiscwith5Nf3_D73,
    fenNeoGruenfeldDefenseUltradelayedExchangeVariation_D79,
    fenNeoGrunfeldDefenseGoglidzeAttack_D70,
    fenNeoGrunfeldDefenseNonorDelayedFianchetto_D70,
    fenNimzoIndianDefenseClassicalVariation_E32,
    fenNimzoIndianDefenseClassicalVariationBerlinVariation_E38,
    fenNimzoIndianDefenseClassicalVariationBerlinVariationMaciejaSystem_E39,
    fenNimzoIndianDefenseClassicalVariationKeresDefense_E32,
    fenNimzoIndianDefenseClassicalVariationLisitsynBondarevskyGambit_E39,
    fenNimzoIndianDefenseClassicalVariationMilnerBarryVariation_E33,
    fenNimzoIndianDefenseClassicalVariationNoaVariation_E34,
    fenNimzoIndianDefenseClassicalVariationNoaVariation_E36,
    fenNimzoIndianDefenseClassicalVariationNoaVariation_E37,
    fenNimzoIndianDefenseClassicalVariationNoaVariationModernLine_E35,
    fenNimzoIndianDefenseClassicalVariationVitolinshAdorjanGambit_E32,
    fenNimzoIndianDefenseClassicalVariationZurichVariation_E33,
    fenNimzoIndianDefenseFischerVariation_E44,
    fenNimzoIndianDefenseGeneral_E20,
    fenNimzoIndianDefenseHuebnerVariation_E41,
    fenNimzoIndianDefenseHuebnerVariationMainLine_E41,
    fenNimzoIndianDefenseHuebnerVariationRubinsteinVariation_E42,
    fenNimzoIndianDefenseHuebnerVariationRubinsteinVariationMainLine_E42,
    fenNimzoIndianDefenseKmochVariation_E20,
    fenNimzoIndianDefenseLeningradVariation_E30,
    fenNimzoIndianDefenseLeningradVariationAverbakhGambit_E30,
    fenNimzoIndianDefenseLeningradVariationBenoniDefense_E31,
    fenNimzoIndianDefenseNormalLine_E40,
    fenNimzoIndianDefenseNormalVariation_E46,
    fenNimzoIndianDefenseNormalVariationBernsteinDefense_E59,
    fenNimzoIndianDefenseNormalVariationBernsteinDefenseExceptGligoricSystem_E53,
    fenNimzoIndianDefenseNormalVariationBernsteinDefenseExchangeLine_E58,
    fenNimzoIndianDefenseNormalVariationBishopAttack_E47,
    fenNimzoIndianDefenseNormalVariationBishopAttackClassicalDefense_E48,
    fenNimzoIndianDefenseNormalVariationBotvinnikSystem_E49,
    fenNimzoIndianDefenseNormalVariationBronsteinByrneVariation_E45,
    fenNimzoIndianDefenseNormalVariationGligoricSystem_E53,
    fenNimzoIndianDefenseNormalVariationGligoricSystemBernsteinDefense_E56,
    fenNimzoIndianDefenseNormalVariationGligoricSystemBronsteinVariation_E55,
    fenNimzoIndianDefenseNormalVariationGligoricSystemExchangeatc4_E54,
    fenNimzoIndianDefenseNormalVariationGligoricSystemKeresVariation_E53,
    fenNimzoIndianDefenseNormalVariationGligoricSystemSmyslovVariation_E54,
    fenNimzoIndianDefenseNormalVariationHubnerDeferred_E50,
    fenNimzoIndianDefenseNormalVariationRagozinVariation_E51,
    fenNimzoIndianDefenseNormalVariationSaemischDeferred_E51,
    fenNimzoIndianDefenseNormalVariationSchlechterDefense_E52,
    fenNimzoIndianDefenseNormalVariationTaimanovVariation_E40,
    fenNimzoIndianDefensePanovAttackMainLine_E54,
    fenNimzoIndianDefenseRagozinDefense_E46,
    fenNimzoIndianDefenseRagozinVariation_E20,
    fenNimzoIndianDefenseReshevskyVariation_E46,
    fenNimzoIndianDefenseRomanishinVariation_1_E20,
    fenNimzoIndianDefenseRomanishinVariation_2_E20,
    fenNimzoIndianDefenseRomanishinVariationEnglishHybrid_E20,
    fenNimzoIndianDefenseSaemischVariation_E25,
    fenNimzoIndianDefenseSaemischVariation_E26,
    fenNimzoIndianDefenseSaemischVariation_E27,
    fenNimzoIndianDefenseSaemischVariation_E28,
    fenNimzoIndianDefenseSaemischVariation_E29,
    fenNimzoIndianDefenseSaemischVariationAccelerated_E24,
    fenNimzoIndianDefenseSaemischVariationCapablancaVariation_E29,
    fenNimzoIndianDefenseSaemischVariationKeresVariation_E25,
    fenNimzoIndianDefenseSaemischVariationOKellyVariation_E26,
    fenNimzoIndianDefenseSimaginVariation_E46,
    fenNimzoIndianDefenseSpielmannVariation_E22,
    fenNimzoIndianDefenseSpielmannVariationKarlsbadVariation_E23,
    fenNimzoIndianDefenseSpielmannVariationRomanovskyGambit_E23,
    fenNimzoIndianDefenseStPetersburgVariation_E43,
    fenNimzoIndianDefenseThreeKnightsVariation_E21,
    fenNimzoIndianDefenseThreeKnightsVariationDuchampVariation_E21,
    fenNimzoIndianDefenseThreeKnightsVariationDuchampVariationModernLine_E21,
    fenNimzoLarsenAttackClassicalVariation_A01,
    fenNimzoLarsenAttackDutchVariation_A01,
    fenNimzoLarsenAttackEnglishVariation_A01,
    fenNimzoLarsenAttackGeneral_A01,
    fenNimzoLarsenAttackIndianVariation_A01,
    fenNimzoLarsenAttackModernVariation_A01,
    fenNimzoLarsenAttackSpikeVariation_A01,
    fenNimzoLarsenAttackSymmetricalVariation_A01,
    fenNimzowitschDefenseDeclinedVariation_B00,
    fenNimzowitschDefenseFrancoNimzowitschVariation_B00,
    fenNimzowitschDefenseFrenchConnection_B00,
    fenNimzowitschDefenseGeneral_B00,
    fenNimzowitschDefenseKennedyVariationKeresAttack_B00,
    fenNimzowitschDefenseKennedyVariationLinksspringerVariation_B00,
    fenNimzowitschDefenseKennedyVariationMainLine_B00,
    fenNimzowitschDefenseKennedyVariationPaulsenAttack_B00,
    fenNimzowitschDefenseKennedyVariationRiemannDefense_B00,
    fenNimzowitschDefenseLeanVariation_B00,
    fenNimzowitschDefenseLeanVariationColoradoCounterAccepted_B00,
    fenNimzowitschDefenseMikenasVariation_B00,
    fenNimzowitschDefensePseudoSpanishVariation_B00,
    fenNimzowitschDefenseScandinavianVariationAdvanceVariation_B00,
    fenNimzowitschDefenseScandinavianVariationBogoljubowVariation_B00,
    fenNimzowitschDefenseScandinavianVariationBogoljubowVariationHeinolaDeppeGambit_B00,
    fenNimzowitschDefenseScandinavianVariationBogoljubowVariationNimzowitschGambit_B00,
    fenNimzowitschDefenseScandinavianVariationBogoljubowVariationVehreVariation_B00,
    fenNimzowitschDefenseScandinavianVariationExchangeVariation_B00,
    fenNimzowitschDefenseWilliamsVariation_B00,
    fenNimzowitschLarsenAttackGeneral_A06,
    fenOldIndianCzechVariation_A53,
    fenOldIndianCzechVariationwNc3_A53,
    fenOldIndianCzechVariationwNf3_A53,
    fenOldIndianDefenseGeneral_A53,
    fenOldIndianDefenseJanowskiVariation_A53,
    fenOldIndianDefenseJanowskiVariationFianchettoVariation_1_A53,
    fenOldIndianDefenseJanowskiVariationFianchettoVariation_2_A53,
    fenOldIndianDefenseJanowskiVariationMainLine_A53,
    fenOldIndianDefenseNormalVariation_A55,
    fenOldIndianDefenseTartakowerIndian_A54,
    fenOldIndianDefenseTwoKnightsVariation_A54,
    fenOldIndianDefenseUkrainianVariation_A54,
    fenOwenDefenseGeneral_B00,
    fenPhilidorDefenseAlbinBlackburneGambit_C41,
    fenPhilidorDefenseExchangeVariation_1_C41,
    fenPhilidorDefenseExchangeVariation_2_C41,
    fenPhilidorDefenseExchangeVariation_3_C41,
    fenPhilidorDefenseGeneral_1_C41,
    fenPhilidorDefenseGeneral_2_C41,
    fenPhilidorDefenseHanhamVariation_C41,
    fenPhilidorDefenseHanhamVariationKrauseVariation_C41,
    fenPhilidorDefenseHanhamVariationSchlechterVariation_C41,
    fenPhilidorDefenseHanhamVariationSteinerVariation_C41,
    fenPhilidorDefenseLarsenVariation_C41,
    fenPhilidorDefenseLionVariation_C41,
    fenPhilidorDefenseLionVariationBishopSac_C41,
    fenPhilidorDefenseLionVariationForcingLine_C41,
    fenPhilidorDefenseLionVariationLionsClawI_C41,
    fenPhilidorDefenseLionVariationLionsClawII_C41,
    fenPhilidorDefenseLionVariationShirovGambit_C41,
    fenPhilidorDefenseLionVariationSozinVariation_C41,
    fenPhilidorDefenseMorphyGambit_C41,
    fenPhilidorDefenseNimzowitschVariation_1_C41,
    fenPhilidorDefenseNimzowitschVariation_2_C41,
    fenPhilidorDefenseNimzowitschVariationRellstabVariation_C41,
    fenPhilidorDefensePhilidorCountergambit_C41,
    fenPhilidorDefensePhilidorCountergambitZukertortVariation_C41,
    fenPircDefense150Attack_B07,
    fenPircDefense150AttackSveshnikovJansaAttack_B07,
    fenPircDefenseAustrianAttack_1_B09,
    fenPircDefenseAustrianAttack_2_B09,
    fenPircDefenseAustrianAttackDragonFormation_B09,
    fenPircDefenseAustrianAttackKurajicaVariation_B09,
    fenPircDefenseAustrianAttackLjubojevicVariation_B09,
    fenPircDefenseAustrianAttackUnzickerAttack_B09,
    fenPircDefenseAustrianAttackUnzickerAttackBronsteinVariation_B09,
    fenPircDefenseAustrianAttackWeissVariation_B09,
    fenPircDefenseBayonetAttack_B07,
    fenPircDefenseByrneVariation_B07,
    fenPircDefenseChineseVariation_B07,
    fenPircDefenseClassicalVariation_1_B07,
    fenPircDefenseClassicalVariation_2_B07,
    fenPircDefenseClassicalVariationQuietSystem_B08,
    fenPircDefenseClassicalVariationQuietSystemChigorinLine_B08,
    fenPircDefenseClassicalVariationQuietSystemCzechDefense_B08,
    fenPircDefenseClassicalVariationQuietSystemParmaDefense_B08,
    fenPircDefenseClassicalVariationSchlechterVariation_B08,
    fenPircDefenseClassicalVariationTwoKnightsSystem_B08,
    fenPircDefenseGeneral_B07,
    fenPircDefenseKholmovSystem_B07,
    fenPolishDefenseGeneral_A40,
    fenPolishDefenseSpasskyGambitAccepted_A40,
    fenPolishOpeningBalticDefense_A00,
    fenPolishOpeningBugayevAdvanceVariation_A00,
    fenPolishOpeningBugayevAttack_A00,
    fenPolishOpeningCzechDefense_A00,
    fenPolishOpeningGeneral_A00,
    fenPolishOpeningGermanDefense_A00,
    fenPolishOpeningKingsIndianVariation_A00,
    fenPolishOpeningKingsIndianVariationSokolskyAttack_A00,
    fenPolishOpeningOutflankVariation_A00,
    fenPolishOpeningSchifflerSokolskyVariation_A00,
    fenPolishOpeningTartakowerGambit_A00,
    fenPolishOpeningZukertortSystem_A04,
    fenPonzianiOpeningCaroGambit_C44,
    fenPonzianiOpeningGeneral_C44,
    fenPonzianiOpeningJaenischCounterattack_C44,
    fenPonzianiOpeningPonzianiCountergambit_C44,
    fenPonzianiOpeningSpanishVariation_C44,
    fenPonzianiOpeningSteinitzVariation_C44,
    fenPonzianiOpeningVukovicGambit_C44,
    fenPortugueseOpeningGeneral_C20,
    fenPterodactylDefenseEasternAnhanguera_B06,
    fenPterodactylDefenseEasternBenoni_B06,
    fenPterodactylDefenseEasternPterodactyl_B06,
    fenPterodactylDefenseEasternPteronodon_B06,
    fenPterodactylDefenseEasternRhamporhynchus_B06,
    fenPterodactylDefenseFianchettoQueenPteronodon_A40,
    fenPterodactylDefenseMiscellanyQueenPterodactylQuiet_A40,
    fenPterodactylDefenseSicilianAnhanguera_B06,
    fenPterodactylDefenseSicilianRhamporhynchus_B06,
    fenPterodactylDefenseWesternRhamporhynchus_B06,
    fenQueenPawnGameAngloSlavOpening_A41,
    fenQueenPawnGameAntiTorre_D02,
    fenQueenPawnGameBarryAttackGruenfeldVariation_D02,
    fenQueenPawnGameChandlerGambit_D02,
    fenQueenPawnGameChigorinVariation_D02,
    fenQueenPawnGameColleSystem_D04,
    fenQueenPawnGameColleSystemAntiColle_D04,
    fenQueenPawnGameColleSystemGruenfeldFormation_A48,
    fenQueenPawnGameFrancoSicilianDefense_C00,
    fenQueenPawnGameGeneral_D00,
    fenQueenPawnGameHubschGambit_D00,
    fenQueenPawnGameLevitskyAttack_D00,
    fenQueenPawnGameLevitskyAttackEuweVariationModernLine_D00,
    fenQueenPawnGameLondonSystem_D02,
    fenQueenPawnGameMasonAttack_D00,
    fenQueenPawnGameMorrisCountergambit_D00,
    fenQueenPawnGameQueenFianchetto_A40,
    fenQueenPawnGameSarrattAttack_D00,
    fenQueenPawnGameSteinitzCountergambit_D00,
    fenQueenPawnGameStonewallAttack_D00,
    fenQueenPawnGameSymmetricalVariation_D02,
    fenQueenPawnGameSymmetricalVariationPseudoCatalan_D02,
    fenQueenPawnGameTorreAttack_D03,
    fenQueenPawnGameTorreAttackBreyerVariation_D03,
    fenQueenPawnGameTorreAttackGossipVariation_D03,
    fenQueenPawnGameTorreAttackGruenfeldVariation_D03,
    fenQueenPawnGameTorreAttackGruenfeldVariationMainLine_D03,
    fenQueenPawnGameVeresovAtackAlburtDefense_D00,
    fenQueenPawnGameVeresovAtackBoyceDefense_D01,
    fenQueenPawnGameVeresovAtackClassicalDefense_D01,
    fenQueenPawnGameVeresovAtackDutchSystem_A80,
    fenQueenPawnGameVeresovAtackRichterVariation_D01,
    fenQueenPawnGameVeresovAtackVeresovVariation_D01,
    fenQueenPawnGameVeresovAttack_D00,
    fenQueenPawnGameVeresovAttackTwoKnightsSystem_D01,
    fenQueenPawnGameVeresovAttackTwoKnightsSystemGruenfeldDefense_D01,
    fenQueenPawnGameZukertortVariation_D02,
    fenQueenPawnOpeningGeneral_A40,
    fenQueenPawnOpeningVeresovAttackIrishGambit_D00,
    fenQueenPawnOpeningVeresovOpeningRichterAttack_D00,
    fenQueensGambitAcceptedAcceleratedMannheimVariation_D20,
    fenQueensGambitAcceptedAlekhineDefense_D22,
    fenQueensGambitAcceptedAlekhineDefenseBorisenkoFurmanVariation_D21,
    fenQueensGambitAcceptedAlekhineDefenseHaberditzVariation_D22,
    fenQueensGambitAcceptedBogoljubowDefense_D24,
    fenQueensGambitAcceptedCentralVariationAlekhineSystem_D20,
    fenQueensGambitAcceptedCentralVariationGrecoVariation_D20,
    fenQueensGambitAcceptedCentralVariationMcDonnellDefense_D20,
    fenQueensGambitAcceptedCentralVariationModernDefense_D20,
    fenQueensGambitAcceptedCentralVariationRubinsteinDefense_D20,
    fenQueensGambitAcceptedClassicalDefense_D26,
    fenQueensGambitAcceptedClassicalDefenseAlekhineSystem_D28,
    fenQueensGambitAcceptedClassicalDefenseAlekhineSystemExceptMainLine_D28,
    fenQueensGambitAcceptedClassicalDefenseAlekhineSystemMainLine_D29,
    fenQueensGambitAcceptedClassicalDefenseMainLines_D27,
    fenQueensGambitAcceptedClassicalDefenseNormalLines_D26,
    fenQueensGambitAcceptedClassicalDefenseRubinsteinVariation_D27,
    fenQueensGambitAcceptedClassicalDefenseRussianGambit_D27,
    fenQueensGambitAcceptedClassicalDefenseSteinitzVariationDevelopmentVariation_D26,
    fenQueensGambitAcceptedClassicalDefenseSteinitzVariationExchangeVariation_D26,
    fenQueensGambitAcceptedDeferred_D25,
    fenQueensGambitAcceptedFurmanVariation_D27,
    fenQueensGambitAcceptedGeneral_D20,
    fenQueensGambitAcceptedGunsbergDefense_D21,
    fenQueensGambitAcceptedGunsbergDefensePrianishenmoGambit_D24,
    fenQueensGambitAcceptedJanowskiLarsenVariation_D25,
    fenQueensGambitAcceptedLinaresVariation_D20,
    fenQueensGambitAcceptedMannheimVariation_D23,
    fenQueensGambitAcceptedNormalVariation_D21,
    fenQueensGambitAcceptedNormalVariation_D25,
    fenQueensGambitAcceptedNormalVariationTraditionalSystem_D26,
    fenQueensGambitAcceptedOldVariation_D20,
    fenQueensGambitAcceptedRosenthalVariation_D21,
    fenQueensGambitAcceptedSaduletoVariation_D20,
    fenQueensGambitAcceptedShowalterVariation_D24,
    fenQueensGambitAcceptedSmyslovVariation_D25,
    fenQueensGambitAcceptedWinawerDefense_D25,
    fenQueensGambitDeclinedAntiTartakowerVariation_D55,
    fenQueensGambitDeclinedAntiTartakowerVariationPetrosianVariation_D55,
    fenQueensGambitDeclinedBarmenVariation_D37,
    fenQueensGambitDeclinedBeenKoomenVariation_D50,
    fenQueensGambitDeclinedCambridgeSpringsVariation_D52,
    fenQueensGambitDeclinedCapablancaGeneral_D30,
    fenQueensGambitDeclinedCapablancaVariation_D30,
    fenQueensGambitDeclinedCharousekPetrosianVariation_D31,
    fenQueensGambitDeclinedExchangeVariation_D35,
    fenQueensGambitDeclinedExchangeVariationPositionalVariation_1_D35,
    fenQueensGambitDeclinedExchangeVariationPositionalVariation_2_D35,
    fenQueensGambitDeclinedExchangeVariationReshevskyVariation_D36,
    fenQueensGambitDeclinedExchangeVariationSaemischVariation_D35,
    fenQueensGambitDeclinedGeneral_D30,
    fenQueensGambitDeclinedHarrwitzAttack_D35,
    fenQueensGambitDeclinedHarrwitzAttack_D37,
    fenQueensGambitDeclinedHarrwitzAttackFianchettoDefense_D37,
    fenQueensGambitDeclinedHarrwitzAttackMainLine_D37,
    fenQueensGambitDeclinedHarrwitzAttackMainLineNewMainLine_D37,
    fenQueensGambitDeclinedHarrwitzAttackMainLineOldMainLine_D37,
    fenQueensGambitDeclinedHarrwitzAttackOrthodoxDefense_D37,
    fenQueensGambitDeclinedHarrwitzAttackTwoKnightsDefense_D37,
    fenQueensGambitDeclinedHarrwitzAttackTwoKnightsDefenseBlockadeLine_D37,
    fenQueensGambitDeclinedHastingsVariation_D30,
    fenQueensGambitDeclinedJanowskiVariation_D31,
    fenQueensGambitDeclinedLaskerDefense_D56,
    fenQueensGambitDeclinedLaskerDefenseMainLine_D57,
    fenQueensGambitDeclinedLaskerDefenseTeichmannVariation_D56,
    fenQueensGambitDeclinedManhattanVariation_D51,
    fenQueensGambitDeclinedMilesVariationDzhindzhiAttack_D53,
    fenQueensGambitDeclinedModernKnightDefense_1_D51,
    fenQueensGambitDeclinedModernKnightDefense_2_D51,
    fenQueensGambitDeclinedModernKnightDefense_3_D51,
    fenQueensGambitDeclinedModernVariation_D50,
    fenQueensGambitDeclinedModernVariationNormalLine_D55,
    fenQueensGambitDeclinedNeoOrthodoxVariation_D54,
    fenQueensGambitDeclinedNeoOrthodoxVariation_D55,
    fenQueensGambitDeclinedNeoOrthodoxVariationMainLine_D55,
    fenQueensGambitDeclinedNormalDefense_D35,
    fenQueensGambitDeclinedOrthodoxDefenseAlekhineVariation_D67,
    fenQueensGambitDeclinedOrthodoxDefenseBotvinnikVariation_D60,
    fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_1_D68,
    fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_2_D68,
    fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_D69,
    fenQueensGambitDeclinedOrthodoxDefenseFianchettoVariation_D66,
    fenQueensGambitDeclinedOrthodoxDefenseGeneral_D60,
    fenQueensGambitDeclinedOrthodoxDefenseHennegergerVariation_D63,
    fenQueensGambitDeclinedOrthodoxDefenseMainLine_1_D63,
    fenQueensGambitDeclinedOrthodoxDefenseMainLine_2_D63,
    fenQueensGambitDeclinedOrthodoxDefenseMainLine_D67,
    fenQueensGambitDeclinedOrthodoxDefensePillsburyVariation_D63,
    fenQueensGambitDeclinedOrthodoxDefenseRubinsteinVariation_D61,
    fenQueensGambitDeclinedOrthodoxDefenseRubinsteinVariationFlohrLine_D62,
    fenQueensGambitDeclinedPseudoTarraschVariation_D50,
    fenQueensGambitDeclinedQueensKnightVariation_D31,
    fenQueensGambitDeclinedRagozinDefense_D38,
    fenQueensGambitDeclinedRagozinDefenseAlekhineVariation_D38,
    fenQueensGambitDeclinedRagozinDefenseViennaVariation_D39,
    fenQueensGambitDeclinedSemiTarraschDefense_D40,
    fenQueensGambitDeclinedSemiTarraschDefenseExchangeVariation_D41,
    fenQueensGambitDeclinedSemiTarraschDefenseMainLine_D42,
    fenQueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D40,
    fenQueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D41,
    fenQueensGambitDeclinedSemmeringVariation_D30,
    fenQueensGambitDeclinedTarraschDefensePseudoTarrasch_D30,
    fenQueensGambitDeclinedTarraschDefensePseudoTarraschBishopAttack_D30,
    fenQueensGambitDeclinedTartakowerDefenseGeneral_D58,
    fenQueensGambitDeclinedTartakowerDefenseMakogonovExchangeVariation_D59,
    fenQueensGambitDeclinedTartakowerVariationExchangeVariation_D57,
    fenQueensGambitDeclinedThreeKnightsVariationGeneral_D37,
    fenQueensGambitDeclinedTraditionalVariation_D30,
    fenQueensGambitDeclinedViennaVariation_D30,
    fenQueensGambitDeclinedViennaVariation_D44,
    fenQueensGambitDeclinedViennaVariationQuietVariation_D44,
    fenQueensGambitDeclinedWestphalianVariation_D51,
    fenQueensGambitGeneral_D06,
    fenQueensGambitRefusedAlbinCountergambit_D08,
    fenQueensGambitRefusedAlbinCountergambitFianchettoVariation_D09,
    fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBe6Line_D09,
    fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBf5Liner_D09,
    fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBg4Line_D09,
    fenQueensGambitRefusedAlbinCountergambitModernLine_D08,
    fenQueensGambitRefusedAlbinCountergambitNormalLine_D08,
    fenQueensGambitRefusedAustrianDefense_D06,
    fenQueensGambitRefusedAustrianDefenseGusevCountergambit_D06,
    fenQueensGambitRefusedBalticDefense_D02,
    fenQueensGambitRefusedBalticDefenseArgentinianGambit_D31,
    fenQueensGambitRefusedBalticDefensePseudoChigorin_D02,
    fenQueensGambitRefusedBalticDefensePseudoSlav_D02,
    fenQueensGambitRefusedBalticDefenseQueenAttack_D02,
    fenQueensGambitRefusedChigorinDefense_D07,
    fenQueensGambitRefusedChigorinDefenseExchangeVariation_D07,
    fenQueensGambitRefusedChigorinDefenseExchangeVariationCostasLine_D07,
    fenQueensGambitRefusedChigorinDefenseJanowskiVariation_D07,
    fenQueensGambitRefusedChigorinDefenseLazardGambit_D06,
    fenQueensGambitRefusedChigorinDefenseMainLine_D07,
    fenQueensGambitRefusedChigorinDefenseMainLineAlekhineVariation_D07,
    fenQueensGambitRefusedChigorinDefenseModernGambit_D06,
    fenQueensGambitRefusedChigorinDefenseTartakowerGambit_D06,
    fenQueensGambitRefusedMarshallDefense_D06,
    fenQueensIndianDefenseAntiQueensIndianSystem_E17,
    fenQueensIndianDefenseCapablancaVariation_E16,
    fenQueensIndianDefenseClassicalVariation_E17,
    fenQueensIndianDefenseClassicalVariationPolugayevskyGambit_E17,
    fenQueensIndianDefenseClassicalVariationTiviakovDefense_E17,
    fenQueensIndianDefenseClassicalVariationTraditionalVariation_E17,
    fenQueensIndianDefenseClassicalVariationTraditionalVariationMainLine_E19,
    fenQueensIndianDefenseClassicalVariationTraditionalVariationNimowitschLine_E18,
    fenQueensIndianDefenseEuweVariation_E17,
    fenQueensIndianDefenseFianchettoTraditional_E15,
    fenQueensIndianDefenseFianchettoVariationCheckVariation_E15,
    fenQueensIndianDefenseFianchettoVariationCheckVariationIntermezzoLine_E15,
    fenQueensIndianDefenseFianchettoVariationGeneral_E15,
    fenQueensIndianDefenseFianchettoVariationKramnikVariation_E17,
    fenQueensIndianDefenseFianchettoVariationNimzowitschVariation_E15,
    fenQueensIndianDefenseFianchettoVariationNimzowitschVariationNimzowitschAttack_E15,
    fenQueensIndianDefenseFianchettoVariationNimzowitschVariationQuietLine_E15,
    fenQueensIndianDefenseFianchettoVariationNimzowitschVariationTimmansLine_E15,
    fenQueensIndianDefenseFianchettoVariationRubinsteinVariation_E16,
    fenQueensIndianDefenseFianchettoVariationSaemischVariation_E15,
    fenQueensIndianDefenseGeneral_E12,
    fenQueensIndianDefenseKasparovPetrosianVariation_E17,
    fenQueensIndianDefenseKasparovPetrosianVariationAnderssonVariation_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationClassicalVariation_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationHedgehogVariation_E17,
    fenQueensIndianDefenseKasparovPetrosianVariationKasparovAttack_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationMainLine_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationMarcoDefense_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationPetrosianAttack_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationRashkovskyAttack_E12,
    fenQueensIndianDefenseKasparovPetrosianVariationRomanishinAttack_E12,
    fenQueensIndianDefenseKasparovVariation_E12,
    fenQueensIndianDefenseKasparovVariationBotvinnikAttack_E12,
    fenQueensIndianDefenseKasparovVariationGeneral_E13,
    fenQueensIndianDefenseMarienbadSystemBergVariation_A47,
    fenQueensIndianDefenseMilesVariation_E12,
    fenQueensIndianDefenseOpocenskyVariation_E17,
    fenQueensIndianDefensePetrosianVariation_E12,
    fenQueensIndianDefensePetrosianVariationFaragoDefense_E11,
    fenQueensIndianDefenseRiuminVariation_E16,
    fenQueensIndianDefenseSpasskySystem_E14,
    fenQueensIndianDefenseYatesVariation_E16,
    fenRatDefenseAcceleratedGurgenidze_B07,
    fenRatDefenseAntalDefense_B07,
    fenRatDefenseBaloghDefense_B07,
    fenRatDefenseEnglishRat_A41,
    fenRatDefenseHarmonist_B07,
    fenRatDefenseSeealsoModernDefenseforlineswithg6_A41,
    fenRatDefenseSmallCenterDefense_C00,
    fenRetiOpeningAdvanceVariation_A09,
    fenRetiOpeningAdvanceVariationMichelGambit_A09,
    fenRetiOpeningAngloSlavVariationBledVariation_A12,
    fenRetiOpeningAngloSlavVariationBogoljubowVariation_A12,
    fenRetiOpeningAngloSlavVariationBogoljubowVariationII_A12,
    fenRetiOpeningAngloSlavVariationBogoljubowVariationIII_A12,
    fenRetiOpeningAngloSlavVariationBogoljubowVariationStonewallLine_A12,
    fenRetiOpeningAngloSlavVariationCapablancaVariation_A12,
    fenRetiOpeningAngloSlavVariationLondonDefensiveSystem_A12,
    fenRetiOpeningAngloSlavVariationNewYorkSystem_A12,
    fenRetiOpeningAngloSlavVariationTorreSystem_A12,
    fenRetiOpeningGeneral_A09,
    fenRetiOpeningRetiGambit_A09,
    fenRetiOpeningReversedBlumenfeldGambit_A09,
    fenRubinsteinOpening_D05,
    fenRubinsteinOpeningBogoljubowDefense_D05,
    fenRubinsteinOpeningClassicalDefense_D05,
    fenRubinsteinOpeningSemiSlavDefense_D05,
    fenRussianGameClassicalAttack_C42,
    fenRussianGameClassicalAttackBergerVariation_C42,
    fenRussianGameClassicalAttackChigorinVariation_C42,
    fenRussianGameClassicalAttackChigorinVariationBrowneAttack_C42,
    fenRussianGameClassicalAttackChigorinVariationMainLine_C42,
    fenRussianGameClassicalAttackJaenischVariation_C42,
    fenRussianGameClassicalAttackMarshallVariation_C42,
    fenRussianGameClassicalAttackMasonShowalterVariation_C42,
    fenRussianGameClassicalAttackMasonVariation_C42,
    fenRussianGameClassicalAttackStauntonVariation_C42,
    fenRussianGameCochraneGambitCenterVariation_C42,
    fenRussianGameCozioLaskerAttack_C42,
    fenRussianGameDamianoVariation_C42,
    fenRussianGameDamianoVariationKholmovGambit_C42,
    fenRussianGameFrenchAttack_C42,
    fenRussianGameGeneral_C42,
    fenRussianGameKarklinsMartinovskyVariation_C42,
    fenRussianGameKaufmannAttack_C42,
    fenRussianGameMilleniumAttack_C42,
    fenRussianGameModernAttack_C43,
    fenRussianGameModernAttackCenterAttack_C43,
    fenRussianGameModernAttackCenterVariation_C43,
    fenRussianGameModernAttackMurreyVariation_C43,
    fenRussianGameModernAttackSuchtingGambit_C43,
    fenRussianGameModernAttackTrifunovicVariation_C43,
    fenRussianGameNimzowitschAttack_C42,
    fenRussianGamePaulsenAttack_C42,
    fenRussianGameStaffordGambit_C42,
    fenRussianGameThreeKnightsGame_C42,
    fenRussianGameUrusovGambit_C42,
    fenSaragossaOpeningGeneral_A00,
    fenScandinavianDefenseAnderssenCounterattack_B01,
    fenScandinavianDefenseBlackburneGambit_B01,
    fenScandinavianDefenseBronsteinVariation_B01,
    fenScandinavianDefenseClassicalVariation_B01,
    fenScandinavianDefenseGeneral_B01,
    fenScandinavianDefenseGrunfeldVariation_B01,
    fenScandinavianDefenseGubinskyMeltsDefense_B01,
    fenScandinavianDefenseIcelandicPalmeGambit_B01,
    fenScandinavianDefenseKielVariation_B01,
    fenScandinavianDefenseLaskerVariation_B01,
    fenScandinavianDefenseMainLines_B01,
    fenScandinavianDefenseMainLinesLeonhardtGambit_B01,
    fenScandinavianDefenseMainLinesMiesesVariation_B01,
    fenScandinavianDefenseMarshallVariation_B01,
    fenScandinavianDefenseMiesesKotrocVariation_B01,
    fenScandinavianDefenseModernVariation_1_B01,
    fenScandinavianDefenseModernVariation_2_B01,
    fenScandinavianDefenseModernVariationGipslisVariation_B01,
    fenScandinavianDefensePanovTransfer_B01,
    fenScandinavianDefensePortugueseVariation_B01,
    fenScandinavianDefensePortugueseVariationPortugueseGambit_B01,
    fenScandinavianDefenseRichterVariation_B01,
    fenScandinavianDefenseSchillerPytelVariation_B01,
    fenScotchGameClassicalVariation_C45,
    fenScotchGameClassicalVariationBlackburneAttack_C45,
    fenScotchGameClassicalVariationIntermezzoVariation_C45,
    fenScotchGameClassicalVariationMillenniumVariation_C45,
    fenScotchGameGeneral_C44,
    fenScotchGameGeneral_C45,
    fenScotchGameGoringGambit_C44,
    fenScotchGameGoringGambitBardelebenVariation_C44,
    fenScotchGameGoringGambitDoublePawnSacrifice_C44,
    fenScotchGameGoringGambitMainLine_C44,
    fenScotchGameHaxoGambit_C45,
    fenScotchGameHorwitzAttack_C45,
    fenScotchGameLolliVariation_C44,
    fenScotchGameMalaniukVariation_C45,
    fenScotchGameMeitnerVariation_C45,
    fenScotchGameMiesesVariation_C45,
    fenScotchGameModernDefense_C45,
    fenScotchGamePotterVariation_C45,
    fenScotchGameRelfssonGambit_C44,
    fenScotchGameRomanishinVariation_C45,
    fenScotchGameSchmidGambit_C44,
    fenScotchGameSchmidtVariation_C45,
    fenScotchGameScotchGambit_C44,
    fenScotchGameScotchGambitAdvanceVariation_C45,
    fenScotchGameScotchGambitCochraneAnderssenVariation_C44,
    fenScotchGameScotchGambitDuboisRetiDefense_C44,
    fenScotchGameScotchGambitGoringGambitDeclined_C44,
    fenScotchGameScotchGambitKingsideVariation_C45,
    fenScotchGameScotchGambitLondonDefense_C44,
    fenScotchGameScotchGambitSarattVariation_C44,
    fenScotchGameSteinitzVariation_C45,
    fenScotchGameTartakowerVariation_C45,
    fenSemiSlavDefenseAcceleratedMeranVariation_D45,
    fenSemiSlavDefenseAcceleratedMoveOrder_D31,
    fenSemiSlavDefenseAccepted_D44,
    fenSemiSlavDefenseAntiMoscowGambit_D44,
    fenSemiSlavDefenseAntiNoteboomStonewallVariationPortischGambit_D31,
    fenSemiSlavDefenseBogoljubowVariation_D46,
    fenSemiSlavDefenseBotvinnikSystem_D44,
    fenSemiSlavDefenseBotvinnikSystemAlatortsevSystem_D44,
    fenSemiSlavDefenseBotvinnikSystemEkstromVariation_D44,
    fenSemiSlavDefenseBotvinnikSystemLilienthalVariation_D44,
    fenSemiSlavDefenseBotvinnikVariation_D44,
    fenSemiSlavDefenseChigorinDefense_D46,
    fenSemiSlavDefenseGeneral_D43,
    fenSemiSlavDefenseMainLines_D45,
    fenSemiSlavDefenseMainLines_D46,
    fenSemiSlavDefenseMarshallGambit_D31,
    fenSemiSlavDefenseMarshallGambitForgottenVariation_D31,
    fenSemiSlavDefenseMarshallGambitMainLine_D31,
    fenSemiSlavDefenseMeranVariation_D47,
    fenSemiSlavDefenseMeranVariation_D48,
    fenSemiSlavDefenseMeranVariationBlumenfeldVariation_D49,
    fenSemiSlavDefenseMeranVariationLundinVariation_D47,
    fenSemiSlavDefenseMeranVariationOldVariation_D48,
    fenSemiSlavDefenseMeranVariationRabinovichVariation_D49,
    fenSemiSlavDefenseMeranVariationReynoldsVariation_D48,
    fenSemiSlavDefenseMeranVariationSozinVariationII_D49,
    fenSemiSlavDefenseMeranVariationWadeVariation_D47,
    fenSemiSlavDefenseMeranVariationWadeVariationKaidanovGambit_D47,
    fenSemiSlavDefenseMeranVariationWadeVariationLarsenVariation_D47,
    fenSemiSlavDefenseNormalVariation_D45,
    fenSemiSlavDefenseNoteboomVariation_D31,
    fenSemiSlavDefenseNoteboomVariationAbrahamsVariation_D31,
    fenSemiSlavDefenseNoteboomVariationAntiNoteboomGambit_D31,
    fenSemiSlavDefenseQuietVariation_1_D30,
    fenSemiSlavDefenseQuietVariation_2_D30,
    fenSemiSlavDefenseRomihVariation_D46,
    fenSemiSlavDefenseSemiMeranVariation_D47,
    fenSemiSlavDefenseStoltzVariation_D45,
    fenSemiSlavDefenseStoltzVariationCenterVariation_D45,
    fenSemiSlavDefenseStoltzVariationShabalovAttack_D45,
    fenSemiSlavDefenseStonewallDefense_D45,
    fenSicilianDefenseAcceleratedDragonExchangeVariation_B34,
    fenSicilianDefenseAcceleratedDragonGeneral_B36,
    fenSicilianDefenseAcceleratedDragonMaroczyBind_B38,
    fenSicilianDefenseAcceleratedDragonMaroczyBindBreyerVariation_B39,
    fenSicilianDefenseAcceleratedDragonMaroczyBindGeneral_B36,
    fenSicilianDefenseAcceleratedDragonMaroczyBindGurgenidzeVariation_B36,
    fenSicilianDefenseAcceleratedDragonModernBc4Variation_B35,
    fenSicilianDefenseAcceleratedDragonModernVariation_B34,
    fenSicilianDefenseAlapinVariationBarmenDefense_B22,
    fenSicilianDefenseAlapinVariationBarmenDefenseCentralExchange_B22,
    fenSicilianDefenseAlapinVariationBarmenDefenseEndgameVariation_B22,
    fenSicilianDefenseAlapinVariationBarmenDefenseMilnerBarryAttack_B22,
    fenSicilianDefenseAlapinVariationBarmenDefenseModernLine_B22,
    fenSicilianDefenseAlapinVariationGeneral_B22,
    fenSicilianDefenseAlapinVariationSherzerVariation_B22,
    fenSicilianDefenseAlapinVariationSmithMorraDeclined_B22,
    fenSicilianDefenseAlapinVariationStoltzAttack_B22,
    fenSicilianDefenseAlapinVariationStoltzAttackIvanchukLine_B22,
    fenSicilianDefenseBoleslavskyVariation_B59,
    fenSicilianDefenseBoleslavskyVariationGeneralVariation_B58,
    fenSicilianDefenseBoleslavskyVariationLoumaVariation_B58,
    fenSicilianDefenseBowdlerAttack_B20,
    fenSicilianDefenseCanalAttack_B51,
    fenSicilianDefenseCanalAttackHaagGambit_B51,
    fenSicilianDefenseCanalAttackMainLine_B52,
    fenSicilianDefenseCanalAttackMoscowGambit_B51,
    fenSicilianDefenseChameleon_B20,
    fenSicilianDefenseChekhoverVariation_B53,
    fenSicilianDefenseChekhoverVariationZaitsevDefense_B53,
    fenSicilianDefenseClassicalVariation_B58,
    fenSicilianDefenseClassicalVariationAntiSozinVariation_B57,
    fenSicilianDefenseClassicalVariationDragonTransfer_B58,
    fenSicilianDefenseClassicalVariationFianchettoVariation_B58,
    fenSicilianDefenseClassicalVariationGeneral_B56,
    fenSicilianDefenseClosedSicilianAntiSveshnikovVariationKharlovKramnikLine_B30,
    fenSicilianDefenseClosedVariation_B23,
    fenSicilianDefenseClosedVariation_B25,
    fenSicilianDefenseClosedVariation_B26,
    fenSicilianDefenseClosedVariationBotvinnikDefenseI_B25,
    fenSicilianDefenseClosedVariationBotvinnikDefenseIEdgeVariation_B25,
    fenSicilianDefenseClosedVariationBotvinnikDefenseII_B25,
    fenSicilianDefenseClosedVariationChameleonVariation_B23,
    fenSicilianDefenseClosedVariationFianchettoVariation_B24,
    fenSicilianDefenseClosedVariationKorchnoiDefense_B23,
    fenSicilianDefenseClosedVariationTraditional_B25,
    fenSicilianDefenseDelayedAlapin_B50,
    fenSicilianDefenseDelayedAlapinBasmanPalatnikDoubleGambit_B50,
    fenSicilianDefenseDelayedAlapinVariation_B40,
    fenSicilianDefenseDragonVariationClassicalVariation_1_B72,
    fenSicilianDefenseDragonVariationClassicalVariation_1_B73,
    fenSicilianDefenseDragonVariationClassicalVariation_2_B72,
    fenSicilianDefenseDragonVariationClassicalVariation_2_B73,
    fenSicilianDefenseDragonVariationClassicalVariationAlekhineLine_B74,
    fenSicilianDefenseDragonVariationClassicalVariationBatteryVariation_B73,
    fenSicilianDefenseDragonVariationClassicalVariationGeneral_B72,
    fenSicilianDefenseDragonVariationClassicalVariationMaroczyLine_B74,
    fenSicilianDefenseDragonVariationClassicalVariationNormalLine_B74,
    fenSicilianDefenseDragonVariationClassicalVariationTartakowerLine_B74,
    fenSicilianDefenseDragonVariationFianchettoVariation_B70,
    fenSicilianDefenseDragonVariationGeneral_B70,
    fenSicilianDefenseDragonVariationLevenfishVariation_B71,
    fenSicilianDefenseDragonVariationLevenfishVariationMainLine_B71,
    fenSicilianDefenseDragonVariationModernBc4Variation_B35,
    fenSicilianDefenseDragonVariationYugoslavAttack_1_B77,
    fenSicilianDefenseDragonVariationYugoslavAttack_2_B77,
    fenSicilianDefenseDragonVariationYugoslavAttack_B76,
    fenSicilianDefenseDragonVariationYugoslavAttack_B78,
    fenSicilianDefenseDragonVariationYugoslavAttackBelezkyLine_B76,
    fenSicilianDefenseDragonVariationYugoslavAttackCzerniakVariation_B77,
    fenSicilianDefenseDragonVariationYugoslavAttackEarlydeviations_B75,
    fenSicilianDefenseDragonVariationYugoslavAttackMainLine_B77,
    fenSicilianDefenseDragonVariationYugoslavAttackModernLine_B76,
    fenSicilianDefenseDragonVariationYugoslavAttackOldLine_B78,
    fenSicilianDefenseDragonVariationYugoslavAttackPanovVariation_B76,
    fenSicilianDefenseDragonVariationYugoslavAttackSosonkoVariation_B77,
    fenSicilianDefenseDrazicVariation_B40,
    fenSicilianDefenseFlohrVariation_B32,
    fenSicilianDefenseFourKnightsVariation_B45,
    fenSicilianDefenseFourKnightsVariationCobraVariation_B45,
    fenSicilianDefenseFourKnightsVariationExchangeVariation_B45,
    fenSicilianDefenseFrancoScilianVariation_B32,
    fenSicilianDefenseFrenchVariation_B40,
    fenSicilianDefenseFrenchVariationNormal_B40,
    fenSicilianDefenseFrenchVariationOpen_B40,
    fenSicilianDefenseFrenchVariationWesterinenAttack_B40,
    fenSicilianDefenseGawPawVariation_B40,
    fenSicilianDefenseGeneral_B20_99,
    fenSicilianDefenseGodivaVariation_B32,
    fenSicilianDefenseGrandPrixAttack_B23,
    fenSicilianDefenseGrandPrixAttackSchofmanVariation_B23,
    fenSicilianDefenseHyperacceleratedDragon_B27,
    fenSicilianDefenseHyperacceleratedFianchetto_A42,
    fenSicilianDefenseHyperacceleratedPterodactyl_B27,
    fenSicilianDefenseHyperacceleratedPterodactylExchangeVariation_B27,
    fenSicilianDefenseKalashnikovVariation_B32,
    fenSicilianDefenseKanVariation_B41,
    fenSicilianDefenseKanVariationKnightVariation_B43,
    fenSicilianDefenseKanVariationMaroczyBindBronsteinVariation_B41,
    fenSicilianDefenseKanVariationMaroczyBindRetiVariation_B41,
    fenSicilianDefenseKanVariationModernVariation_B42,
    fenSicilianDefenseKanVariationPolugaevskyVariation_B42,
    fenSicilianDefenseKanVariationSwissCheeseVariation_B42,
    fenSicilianDefenseKanVariationWingAttack_B43,
    fenSicilianDefenseKanVariationWingAttackFianchettoVariation_B43,
    fenSicilianDefenseKanVariationWingAttackSpraggettAttack_B43,
    fenSicilianDefenseKatalimovVariation_B27,
    fenSicilianDefenseKramnikVariation_B40,
    fenSicilianDefenseKronbergerVariation_B20,
    fenSicilianDefenseKupreichikVariation_B56,
    fenSicilianDefenseKveinisVariation_B40,
    fenSicilianDefenseLaskerDunneAttack_B20,
    fenSicilianDefenseLaskerPelikanVariationBirdVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationExchangeVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationGeneral_B33,
    fenSicilianDefenseLaskerPelikanVariationRetreatVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationSchlechterVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationSveshnikovVariation_1_B33,
    fenSicilianDefenseLaskerPelikanVariationSveshnikovVariation_2_B33,
    fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationChelyabinskVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationNovosibirskVariation_B33,
    fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationPeresypkinsSacrifice_B33,
    fenSicilianDefenseLowenthalVariation_B32,
    fenSicilianDefenseMarshallCounterattack_B40,
    fenSicilianDefenseMarshallGambit_B23,
    fenSicilianDefenseMcDonnellAttack_B21,
    fenSicilianDefenseMcDonnellAttackTalGambit_B21,
    fenSicilianDefenseMengariniVariation_B20,
    fenSicilianDefenseMiscDefenses_B27,
    fenSicilianDefenseModernVariations_B50,
    fenSicilianDefenseModernVariations_B54,
    fenSicilianDefenseModernVariations_B56,
    fenSicilianDefenseModernVariationsAntiQxd4MoveOrder_B50,
    fenSicilianDefenseModernVariationsAntiQxd4MoveOrderAccepted_B50,
    fenSicilianDefenseModernVariationsMainLine_B57,
    fenSicilianDefenseModernVariationsTartakower_B53,
    fenSicilianDefenseMongooseVariation_B27,
    fenSicilianDefenseMorphyGambit_B21,
    fenSicilianDefenseMorphyGambitAndreaschekGambit_B21,
    fenSicilianDefenseNajdorfVariation_B90_99,
    fenSicilianDefenseNajdorfVariation_B94,
    fenSicilianDefenseNajdorfVariation_B95,
    fenSicilianDefenseNajdorfVariation_B96,
    fenSicilianDefenseNajdorfVariation_B98,
    fenSicilianDefenseNajdorfVariationAdamsAttack_B90,
    fenSicilianDefenseNajdorfVariationAmsterdamVariation_B93,
    fenSicilianDefenseNajdorfVariationBrowneVariation_B98,
    fenSicilianDefenseNajdorfVariationEnglishAttack_B90,
    fenSicilianDefenseNajdorfVariationEnglishAttackAntiEnglish_B90,
    fenSicilianDefenseNajdorfVariationFreakAttack_B90,
    fenSicilianDefenseNajdorfVariationGoteborgArgentine_B98,
    fenSicilianDefenseNajdorfVariationMainLine_B99,
    fenSicilianDefenseNajdorfVariationNeoClassicalDefense_B96,
    fenSicilianDefenseNajdorfVariationOpocenskyVariation_B92,
    fenSicilianDefenseNajdorfVariationOpocenskyVariationModernLine_B92,
    fenSicilianDefenseNajdorfVariationOpocenskyVariationTraditionalLine_B92,
    fenSicilianDefenseNajdorfVariationPoisonedPawnAccepted_B97,
    fenSicilianDefenseNajdorfVariationPoisonedPawnVariation_B97,
    fenSicilianDefenseNajdorfVariationPolugayevskyVariation_B96,
    fenSicilianDefenseNajdorfVariationPolugayevskyVariationSimaginLine_B96,
    fenSicilianDefenseNajdorfVariationScheveningenVariation_B84,
    fenSicilianDefenseNajdorfVariationTraditionalLine_B98,
    fenSicilianDefenseNajdorfVariationZagrebFianchettoVariation_B91,
    fenSicilianDefenseNimzoAmericanVariation_B32,
    fenSicilianDefenseNimzowitschVariationAdvanceVariation_B29,
    fenSicilianDefenseNimzowitschVariationClosedVariation_B29,
    fenSicilianDefenseNimzowitschVariationExchangeVariation_B29,
    fenSicilianDefenseNimzowitschVariationGeneral_B29,
    fenSicilianDefenseNimzowitschVariationMainLine_B29,
    fenSicilianDefenseNyezhmetdinovRossolimoAttack_B30,
    fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariation_B31,
    fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationGufeldGambit_B31,
    fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationLutikovGambit_B31,
    fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationTotskyAttack_B31,
    fenSicilianDefenseNyezhmetdinovRossolimoAttackGurgenidzeVariation_B31,
    fenSicilianDefenseOKellyVariation_B28,
    fenSicilianDefenseOKellyVariationKieseritzkySystem_B28,
    fenSicilianDefenseOKellyVariationMaroczyBind_B28,
    fenSicilianDefenseOKellyVariationMaroczyBindGellerLine_B28,
    fenSicilianDefenseOKellyVariationMaroczyBindPaulsenLine_B28,
    fenSicilianDefenseOKellyVariationMaroczyBindRobatschLine_B28,
    fenSicilianDefenseOKellyVariationNormalSystem_B28,
    fenSicilianDefenseOKellyVariationNormalSystemKanLine_B28,
    fenSicilianDefenseOKellyVariationNormalSystemTaimanovLine_B28,
    fenSicilianDefenseOKellyVariationQuietSystem_B28,
    fenSicilianDefenseOKellyVariationRetiSystem_B28,
    fenSicilianDefenseOKellyVariationVeniceSystem_B28,
    fenSicilianDefenseOKellyVariationVeniceSystemBarczaLine_B28,
    fenSicilianDefenseOKellyVariationVeniceSystemGambitline_B28,
    fenSicilianDefenseOKellyVariationVeniceSystemSteinerLine_B28,
    fenSicilianDefenseOKellyVariationYerevanSystem_B28,
    fenSicilianDefenseOldSicilianGeneral_B30,
    fenSicilianDefenseOldSicilianNormal_B33,
    fenSicilianDefenseOldSicilianOpen_B32,
    fenSicilianDefensePaulsenBasmanDefense_B40,
    fenSicilianDefensePaulsenVariation_B46,
    fenSicilianDefensePaulsenVariationAmericanAttack_B45,
    fenSicilianDefensePaulsenVariationBastrikovVariation_B47,
    fenSicilianDefensePaulsenVariationBastrikovVariation_B48,
    fenSicilianDefensePaulsenVariationBastrikovVariation_B49,
    fenSicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B48,
    fenSicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B49,
    fenSicilianDefensePaulsenVariationBastrikovVariationPonomariovGambit_B48,
    fenSicilianDefensePaulsenVariationGeneral_B44,
    fenSicilianDefensePaulsenVariationModernLine_B44,
    fenSicilianDefensePaulsenVariationNormalVariation_B45,
    fenSicilianDefensePaulsenVariationSzenVariation_B44,
    fenSicilianDefensePaulsenVariationTaimanovVariation_B46,
    fenSicilianDefensePinVariation_B40,
    fenSicilianDefensePinVariationJaffeVariation_B40,
    fenSicilianDefensePinVariationKochVariation_B40,
    fenSicilianDefensePrinsVariation_B54,
    fenSicilianDefensePrinsVariationVeniceAttack_B55,
    fenSicilianDefenseQuinterosVariation_B27,
    fenSicilianDefenseRichterRauzerVariation_B62,
    fenSicilianDefenseRichterRauzerVariationClassicalVariation_B63,
    fenSicilianDefenseRichterRauzerVariationClassicalVariation_B64,
    fenSicilianDefenseRichterRauzerVariationClassicalVariation_B65,
    fenSicilianDefenseRichterRauzerVariationClassicalVariationKantscherLine_B66,
    fenSicilianDefenseRichterRauzerVariationDragonVariation_B60,
    fenSicilianDefenseRichterRauzerVariationGeneral_B60,
    fenSicilianDefenseRichterRauzerVariationIvanovVariation_B63,
    fenSicilianDefenseRichterRauzerVariationModernVariation_B60,
    fenSicilianDefenseRichterRauzerVariationModernVariation_B61,
    fenSicilianDefenseRichterRauzerVariationNeoModernVariation_B67,
    fenSicilianDefenseRichterRauzerVariationNeoModernVariation_B68,
    fenSicilianDefenseRichterRauzerVariationNeoModernVariationEarlydeviations_B62,
    fenSicilianDefenseRichterRauzerVariationNeoModernVariationNyezhmetdinovAttack_B69,
    fenSicilianDefenseRichterRauzerVariationTraditionalVariation_B63,
    fenSicilianDefenseRichterRauzerVariationVitolinsVariation_B62,
    fenSicilianDefenseScheveningenVariation_B80,
    fenSicilianDefenseScheveningenVariationClassicalVariation_1_B84,
    fenSicilianDefenseScheveningenVariationClassicalVariation_2_B84,
    fenSicilianDefenseScheveningenVariationClassicalVariationGeneral_B83,
    fenSicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_1_B85,
    fenSicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_2_B85,
    fenSicilianDefenseScheveningenVariationDelayedKeresAttack_B81,
    fenSicilianDefenseScheveningenVariationDelayedKeresAttackPerenyiGambit_B81,
    fenSicilianDefenseScheveningenVariationEnglishAttack_1_B80,
    fenSicilianDefenseScheveningenVariationEnglishAttack_2_B80,
    fenSicilianDefenseScheveningenVariationFianchettoVariation_B80,
    fenSicilianDefenseScheveningenVariationKeresAttack_B81,
    fenSicilianDefenseScheveningenVariationMatanovicAttack_B82,
    fenSicilianDefenseScheveningenVariationModernVariation_1_B83,
    fenSicilianDefenseScheveningenVariationModernVariation_2_B83,
    fenSicilianDefenseScheveningenVariationModernVariationGeneral_B83,
    fenSicilianDefenseScheveningenVariationTalVariation_B82,
    fenSicilianDefenseScheveningenVariationVitolinsVariation_B80,
    fenSicilianDefenseSmithMorraGambit_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedClassicalFormation_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedFianchettoDefense_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedKanFormation_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedPaulsenFormation_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedPinDefense_B21,
    fenSicilianDefenseSmithMorraGambitAcceptedScheveningenFormation_B21,
    fenSicilianDefenseSmithMorraGambitDeclinedAlapinFormation_B21,
    fenSicilianDefenseSmithMorraGambitDeclinedCenterFormation_B21,
    fenSicilianDefenseSmithMorraGambitDeclinedDuboisVariation_B21,
    fenSicilianDefenseSmithMorraGambitDeclinedPushVariation_B21,
    fenSicilianDefenseSmithMorraGambitDeclinedScandinavianFormation_B21,
    fenSicilianDefenseSmithMorraGambitDeferred_B40,
    fenSicilianDefenseSnyderVariation_B20,
    fenSicilianDefenseSnyderVariationQueenFianchettoVariation_B20,
    fenSicilianDefenseSozinAttackFlankVariation_B87,
    fenSicilianDefenseSozinAttackGeneralVariation_B86,
    fenSicilianDefenseSozinAttackLeonhardtVariation_B88,
    fenSicilianDefenseSozinAttackMainLine_B89,
    fenSicilianDefenseSpielmannVariation_B56,
    fenSicilianDefenseStauntonCochraneVariation_B20,
    fenSicilianDefenseVelimirovicAttack_B89,
    fenSicilianDefenseVeniceAttack_B56,
    fenSicilianDefenseWingGambit_B20,
    fenSicilianDefenseWingGambitAbrahamsVariation_B20,
    fenSicilianDefenseWingGambitCarlsbadVariation_B20,
    fenSicilianDefenseWingGambitDeferred_B40,
    fenSicilianDefenseWingGambitDeferredVariation_B50,
    fenSicilianDefenseWingGambitMarshallVariation_B20,
    fenSlavDefenseAlapinVariation_D16,
    fenSlavDefenseAlekhineVariation_D15,
    fenSlavDefenseBonetGambit_D11,
    fenSlavDefenseBreyerVariation_D11,
    fenSlavDefenseChameleonVariation_D15,
    fenSlavDefenseChameleonVariationAdvanceSystem_D15,
    fenSlavDefenseCzechVariation_D17,
    fenSlavDefenseCzechVariationBledAttack_D17,
    fenSlavDefenseCzechVariationCarlsbadVariation_D17,
    fenSlavDefenseCzechVariationCarlsbadVariationMorozevichVariation_D17,
    fenSlavDefenseCzechVariationClassicalSystem_D18,
    fenSlavDefenseCzechVariationClassicalSystemMainLine_D19,
    fenSlavDefenseCzechVariationKrauseAttack_D17,
    fenSlavDefenseCzechVariationLaskerVariation_D18,
    fenSlavDefenseCzechVariationWiesbadenVariation_D17,
    fenSlavDefenseCzechVariationWiesbadenVariationSharpline_D17,
    fenSlavDefenseExchangeVariation_D10,
    fenSlavDefenseExchangeVariation_D13,
    fenSlavDefenseExchangeVariationSchalloppVariation_D12,
    fenSlavDefenseExchangeVariationSymmetricalLine_D14,
    fenSlavDefenseExchangeVariationTrifunovicVariation_D14,
    fenSlavDefenseGellerGambit_1_D15,
    fenSlavDefenseGellerGambit_2_D15,
    fenSlavDefenseGeneral_D10,
    fenSlavDefenseModernLine_D11,
    fenSlavDefenseQuietVariation_D11,
    fenSlavDefenseQuietVariationPinDefense_D12,
    fenSlavDefenseQuietVariationSchalloppDefense_D12,
    fenSlavDefenseSchlechterVariation_D15,
    fenSlavDefenseSlavGambitAlekhineAttack_D10,
    fenSlavDefenseSmyslovVariation_D16,
    fenSlavDefenseSoultanbeieffVariation_D16,
    fenSlavDefenseSteinerVariation_D16,
    fenSlavDefenseSuchtingVariation_D15,
    fenSlavDefenseThreeKnightsVariation_D15,
    fenSlavDefenseTwoKnightsAttack_D15,
    fenSlavDefenseWinawerCountergambit_D10,
    fenSlavIndian_A50,
    fenSodiumAttackGeneral_A00,
    fenSpanishGameAlapinDefense_C60,
    fenSpanishGameBerlinDefense_C65,
    fenSpanishGameBerlinDefenseBerlinWallJRogersLine_C67,
    fenSpanishGameBerlinDefenseBeverwijkVariation_C65,
    fenSpanishGameBerlinDefenseClosedShowalterVariation_C66,
    fenSpanishGameBerlinDefenseClosedWolfVariation_C66,
    fenSpanishGameBerlinDefenseHedgehogVariation_C66,
    fenSpanishGameBerlinDefenseImprovedSteinitzDefense_C66,
    fenSpanishGameBerlinDefenselHermetVariation_C67,
    fenSpanishGameBerlinDefenselHermetVariationBerlinWallDefense_C67,
    fenSpanishGameBerlinDefenselHermetVariationWesterinenLine_C67,
    fenSpanishGameBerlinDefenseMinckwitzVariation_C67,
    fenSpanishGameBerlinDefenseNyholmAttack_C65,
    fenSpanishGameBerlinDefenseRiodeJaneiroVariation_C67,
    fenSpanishGameBerlinDefenseRioGambitAccepted_C67,
    fenSpanishGameBerlinDefenseRosenthalVariation_C67,
    fenSpanishGameBirdVariation_C61,
    fenSpanishGameClassicalVariation_C64,
    fenSpanishGameClassicalVariationCentralVariation_C64,
    fenSpanishGameClassicalVariationCordelGambit_C64,
    fenSpanishGameClassicalVariationModernMainLine_C64,
    fenSpanishGameClassicalVariationZukertortGambit_C64,
    fenSpanishGameClosedVariations_C84,
    fenSpanishGameClosedVariationsAverbakhVariation_C87,
    fenSpanishGameClosedVariationsBogoljubowVariation_C91,
    fenSpanishGameClosedVariationsBorisenkoVariation_C96,
    fenSpanishGameClosedVariationsBreyerDefense_C95,
    fenSpanishGameClosedVariationsCenterAttack_C84,
    fenSpanishGameClosedVariationsChigorinDefense_1_C98,
    fenSpanishGameClosedVariationsChigorinDefense_2_C98,
    fenSpanishGameClosedVariationsChigorinDefense_C97,
    fenSpanishGameClosedVariationsClosedDefense_1_C96,
    fenSpanishGameClosedVariationsClosedDefense_2_C96,
    fenSpanishGameClosedVariationsClosedDefense_C90,
    fenSpanishGameClosedVariationsDelayedExchange_C85,
    fenSpanishGameClosedVariationsFlohrSystem_C92,
    fenSpanishGameClosedVariationsGeneral_C92,
    fenSpanishGameClosedVariationsKeresDefense_1_C92,
    fenSpanishGameClosedVariationsKeresDefense_2_C92,
    fenSpanishGameClosedVariationsKeresDefense_C96,
    fenSpanishGameClosedVariationsKholmovVariation_C92,
    fenSpanishGameClosedVariationsMartinezVariation_C78,
    fenSpanishGameClosedVariationsMorphyAttack_C78,
    fenSpanishGameClosedVariationsPilnikVariation_C90,
    fenSpanishGameClosedVariationsSmyslovBreyerZaitsevHybrid_C93,
    fenSpanishGameClosedVariationsSmyslovDefense_C93,
    fenSpanishGameClosedVariationsSuetinVariation_C90,
    fenSpanishGameClosedVariationsTrajkovicCounterattack_C88,
    fenSpanishGameClosedVariationsWorrallAttack_C86,
    fenSpanishGameClosedVariationsWorrallAttackCasltingline_C86,
    fenSpanishGameClosedVariationsWorrallAttackDelayedcastlingline_C86,
    fenSpanishGameClosedVariationsYatesVariation_C91,
    fenSpanishGameClosedVariationsZaitsevSystem_C92,
    fenSpanishGameColumbusVariation_C70,
    fenSpanishGameCozioDefenseGeneral_C60,
    fenSpanishGameCozioDefensePaulsenVariation_C60,
    fenSpanishGameExchangeVariationAlapinGambit_C69,
    fenSpanishGameExchangeVariationAlekhineVariation_C68,
    fenSpanishGameExchangeVariationBronsteinVariation_C69,
    fenSpanishGameExchangeVariationGeneral_C68,
    fenSpanishGameExchangeVariationGligoricVariation_C69,
    fenSpanishGameExchangeVariationKeresVariation_C68,
    fenSpanishGameExchangeVariationKingsBishopVariation_C68,
    fenSpanishGameExchangeVariationLutikovVariation_C68,
    fenSpanishGameExchangeVariationNormalVariation_C69,
    fenSpanishGameFianchettoDefense_C60,
    fenSpanishGameGeneral_C60,
    fenSpanishGameMarshallAttackGeneral_C89,
    fenSpanishGameMarshallAttackMainLine_C89,
    fenSpanishGameMarshallAttackModernMainLine_C89,
    fenSpanishGameMarshallAttackModernVariation_C89,
    fenSpanishGameMarshallAttackOriginalMarshallAttack_C89,
    fenSpanishGameMarshallAttackRe3variation_C89,
    fenSpanishGameMarshallAttackSteinerVariation_C89,
    fenSpanishGameMorphyDefense_1_C78,
    fenSpanishGameMorphyDefense_2_C78,
    fenSpanishGameMorphyDefenseAnderssenVariation_C77,
    fenSpanishGameMorphyDefenseArchangelskVariation_C78,
    fenSpanishGameMorphyDefenseBayreuthVariation_C77,
    fenSpanishGameMorphyDefenseBreyerDefense_C94,
    fenSpanishGameMorphyDefenseBreyerDefenseQuietVariation_C94,
    fenSpanishGameMorphyDefenseBreyerDefenseZaitsevHybrid_C95,
    fenSpanishGameMorphyDefenseCaroVariation_C70,
    fenSpanishGameMorphyDefenseChigorinDefensePanovSystem_C99,
    fenSpanishGameMorphyDefenseClassicalDefenseDeferred_C70,
    fenSpanishGameMorphyDefenseCozioDefense_C70,
    fenSpanishGameMorphyDefenseDurasVariation_C77,
    fenSpanishGameMorphyDefenseFianchettoDefenseDeferred_C70,
    fenSpanishGameMorphyDefenseGrazVariation_C70,
    fenSpanishGameMorphyDefenseMackenzieVariation_C77,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C71,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C73,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C74,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C75,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C71,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C73,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C74,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C75,
    fenSpanishGameMorphyDefenseModernSteinitzDefense_C72,
    fenSpanishGameMorphyDefenseModernSteinitzDefenseFianchettoVariation_C76,
    fenSpanishGameMorphyDefenseModernSteinitzDefenseSiestaVariation_C74,
    fenSpanishGameMorphyDefenseNeoArchangelskVariation_C78,
    fenSpanishGameMorphyDefenseNorwegianVariation_C70,
    fenSpanishGameMorphyDefenseSchliemannDefenseDeferred_C70,
    fenSpanishGameMorphyDefenseSteinitzDeferred_C79,
    fenSpanishGameMorphyDefenseTarraschVariation_C77,
    fenSpanishGameMorphyDefenseWingAttack_C78,
    fenSpanishGameMorphyDefenseWormaldAttack_C77,
    fenSpanishGameOpenVariations_C80,
    fenSpanishGameOpenVariationsBerlinVariation_C82,
    fenSpanishGameOpenVariationsBernsteinVariation_C80,
    fenSpanishGameOpenVariationsClassicalDefense_C83,
    fenSpanishGameOpenVariationsClassicalDefenseMainLine_C83,
    fenSpanishGameOpenVariationsDilworthVariation_C82,
    fenSpanishGameOpenVariationsHowellAttack_C81,
    fenSpanishGameOpenVariationsItalianVariation_C82,
    fenSpanishGameOpenVariationsKarpovGambit_C80,
    fenSpanishGameOpenVariationsMainLines_C80,
    fenSpanishGameOpenVariationsMalkinVariation_C83,
    fenSpanishGameOpenVariationsMotzkoAttackII_C82,
    fenSpanishGameOpenVariationsOpenVariation_C80,
    fenSpanishGameOpenVariationsRigaVariation_C80,
    fenSpanishGameOpenVariationsStPetersburgVariation_C82,
    fenSpanishGameSchleimannDefenseJaenischGambitAccepted_C60,
    fenSpanishGameSchliemannDefense_C63,
    fenSpanishGameSchliemannDefenseClassicalVariation_C63,
    fenSpanishGameSchliemannDefenseDyckhoffVariation_C63,
    fenSpanishGameSchliemannDefenseExchangeVariation_C63,
    fenSpanishGameSchliemannDefenseMohringVariation_C63,
    fenSpanishGameSchliemannDefenseSchonemannAttack_C63,
    fenSpanishGameSchliemannDefenseTartakowerVariation_C63,
    fenSpanishGameSteinitzDefense_C62,
    fenSpanishGameSteinitzDefenseNimzowitschAttack_C62,
    fenStGeorgeDefenseGeneral_B00,
    fenStGeorgeDefenseNewStGeorgeThreePawnAttack_B00,
    fenStGeorgeDefenseNewStGeorgeTraditionalLine_B00,
    fenStGeorgeDefensePolishVariation_B00,
    fenSystemCanardFormation_A45,
    fenTarraschDefenseClassicalVariation_D34,
    fenTarraschDefenseClassicalVariationAdvanceVariation_D34,
    fenTarraschDefenseClassicalVariationCarlsbadVariation_D34,
    fenTarraschDefenseClassicalVariationClassicalTarraschGambit_D34,
    fenTarraschDefenseClassicalVariationEndgameVariation_D34,
    fenTarraschDefenseClassicalVariationMainLine_D34,
    fenTarraschDefenseClassicalVariationPeturssonVariation_D34,
    fenTarraschDefenseClassicalVariationRetiVariation_D34,
    fenTarraschDefenseClassicalVariationSpasskyVariation_D34,
    fenTarraschDefenseGeneral_D32,
    fenTarraschDefensePragueVariation_D33,
    fenTarraschDefensePragueVariationMainLine_D34,
    fenTarraschDefenseRubinsteinSystem_D33,
    fenTarraschDefenseScharaGambit_D32,
    fenTarraschDefenseSwedishVariation_D33,
    fenTarraschDefenseSymmetricalVariation_D32,
    fenTarraschDefenseTwoKnightsVariation_D32,
    fenTarraschDefenseVonHennigGambit_D32,
    fenTarraschDefenseWagnerVariation_D33,
    fenThreeKnightsOpeningGeneral_C46,
    fenThreeKnightsOpeningSteinitzDefense_C46,
    fenThreeKnightsOpeningSteinitzRosenthalVariation_C46,
    fenTorreAttackClassicalDefense_A46,
    fenTorreAttackClassicalDefenseNimzowitschVariation_A46,
    fenTorreAttackClassicalDefensePetrosianGambit_A46,
    fenTorreAttackFianchettoDefense_A48,
    fenTorreAttackFianchettoDefenseEuweVariation_A48,
    fenTorreAttackWagnerGambit_A46,
    fenTrompowskyAttackBorgVariation_A45,
    fenTrompowskyAttackClassicalDefense_A45,
    fenTrompowskyAttackClassicalDefenseBigCenterVariation_A45,
    fenTrompowskyAttackEdgeVariation_A45,
    fenTrompowskyAttackGeneral_A45,
    fenTrompowskyAttackPoisonedPawnVariation_A45,
    fenTrompowskyAttackRaptorVariation_A45,
    fenVanGeetOpeningBattambangVariation_A00,
    fenVanGeetOpeningBerlinGambit_A00,
    fenVanGeetOpeningCaroKannVariation_A00,
    fenVanGeetOpeningGeneral_A00,
    fenVanGeetOpeningGruenfeldDefense_A00,
    fenVanGeetOpeningMyersAttack_A00,
    fenVanGeetOpeningNapoleonAttack_A00,
    fenVanGeetOpeningNovosibirskVariation_A00,
    fenVanGeetOpeningReversedNimzowitsch_A00,
    fenVanGeetOpeningSicilianTwoKnights_A00,
    fenVantKruijsOpeningGeneral_A00,
    fenViennaGameAnderssenDefense_C25,
    fenViennaGameFalkbeerVariation_C26,
    fenViennaGameGeneral_C27,
    fenViennaGameMengariniVariation_C26,
    fenViennaGameMiesesVariation_C26,
    fenViennaGameOmahaGambit_C25,
    fenViennaGamePaulsenVariation_C25,
    fenViennaGameStanleyVariation_C26,
    fenViennaGameStanleyVariationAlekhineVariation_C27,
    fenViennaGameStanleyVariationFrankensteinDraculaVariation_C27,
    fenViennaGameStanleyVariationModernVariation_C27,
    fenViennaGameStanleyVariationMonsterDeclined_C27,
    fenViennaGameStanleyVariationReversedSpanish_C26,
    fenViennaGameStanleyVariationThreeKnightsVariation_C28,
    fenViennaGameViennaGambit_C25,
    fenViennaGameViennaGambit_C28,
    fenViennaGameViennaGambitBardelebenVariation_C29,
    fenViennaGameViennaGambitBreyerVariation_C29,
    fenViennaGameViennaGambitKaufmannVariation_C29,
    fenViennaGameViennaGambitMainLine_C29,
    fenViennaGameViennaGambitModernVariation_C29,
    fenViennaGameViennaGambitPaulsenAttack_C29,
    fenViennaGameViennaGambitSteinitzGambitKnightVariation_C25,
    fenWadeDefenseGeneral_A41,
    fenWareDefenseGeneral_B00,
    fenWareOpeningGeneral_A00,
    fenZukertortOpeningBasmanDefense_A04,
    fenZukertortOpeningBlackMustangDefense_A04,
    fenZukertortOpeningDoubleFianchettoAttack_A49,
    fenZukertortOpeningDutchVariation_A04,
    fenZukertortOpeningGrunfeldReversed_A49,
    fenZukertortOpeningHerrstromGambit_A04,
    fenZukertortOpeningKingsideFianchetto_A04,
    fenZukertortOpeningLisitsynGambit_A04,
    fenZukertortOpeningLisitsynGambitDeferred_A04,
    fenZukertortOpeningNimzoLarsenVariation_A04,
    fenZukertortOpeningOldIndianAttack_A06,
    fenZukertortOpeningPircInvitation_A04,
    fenZukertortOpeningPolishDefense_A04,
    fenZukertortOpeningQueenPawnDefense_A06,
    fenZukertortOpeningQueensGambitInvitation_A04,
    fenZukertortOpeningQueensideFianchettoVariation_A04,
    fenZukertortOpeningQuietsystem_A04,
    fenZukertortOpeningReversedMexicanDefense_A06,
    fenZukertortOpeningReversedQueensGambit_D02,
    fenZukertortOpeningSantasieresFolly_A06,
    fenZukertortOpeningSicilianInvitation_A04,
    fenZukertortOpeningSlavInvitation_A04,
    fenZukertortOpeningStGeorgeDefense_A04,
    fenZukertortOpeningSymmetricalVariation_A04,
    fenZukertortOpeningTennisonGambit_A06,
    fenZukertortOpeningWadeDefenseChigorinPlan_A41,
    fenZukertortOpeningWadeTartakowerDefense_A04
} from "../constants/chessOpenings.fen";

export const getRandomFenFromArray = (fenArrayType: FenArrayType): string => {
    let fenArray: string[];
    const fenTypes = [
        FenArrayType.WinningArrayEndGame,
        FenArrayType.WinningArray,
        FenArrayType.WinningArrayOpening,
        FenArrayType.LosingArrayEndGame,
        FenArrayType.LosingArray,
        FenArrayType.LosingArrayOpening,
        FenArrayType.EqualArrayEndGame,
        FenArrayType.EqualArray,
        FenArrayType.EqualArrayOpening,
        FenArrayType.MateInFewMoves,
    ];
    if (!fenTypes.includes(fenArrayType)) {
        window.gtag("event", "difficulty_selected", {
            position_type: "equal",
            game_phase: "opening",
            stardard_fen: fenArrayType,
        });
    }

    switch (fenArrayType) {
        case FenArrayType.WinningArray:
            window.gtag("event", "difficulty_selected", {
                position_type: "winning",
                game_phase: "midgame",
            });
            fenArray = fenWinningArray;
            break;
        case FenArrayType.WinningArrayEndGame:
            window.gtag("event", "difficulty_selected", {
                position_type: "winning",
                game_phase: "endgame",
            });
            fenArray = fenWinningArrayEndGame;
            break;
        case FenArrayType.EqualArray:
            window.gtag("event", "difficulty_selected", {
                position_type: "equal",
                game_phase: "midgame",
            });
            fenArray = fenEqualArray;
            break;
        case FenArrayType.EqualArrayEndGame:
            window.gtag("event", "difficulty_selected", {
                position_type: "equal",
                game_phase: "endgame",
            });
            fenArray = fenEqualArrayEndGame;
            break;
        case FenArrayType.WinningArrayOpening:
            window.gtag("event", "difficulty_selected", {
                position_type: "winning",
                game_phase: "opening",
            });
            fenArray = fenWinningArrayOpening;
            break;
        case FenArrayType.EqualArrayOpening:
            window.gtag("event", "difficulty_selected", {
                position_type: "equal",
                game_phase: "opening",
            });
            fenArray = fenEqualArrayOpening;
            break;
        case FenArrayType.LosingArray:
            window.gtag("event", "difficulty_selected", {
                position_type: "losing",
                game_phase: "midgame",
            });
            fenArray = fenLosingArray;
            break;
        case FenArrayType.LosingArrayEndGame:
            window.gtag("event", "difficulty_selected", {
                position_type: "losing",
                game_phase: "endgame",
            });
            fenArray = fenLosingArrayEndGame;
            break;
        case FenArrayType.LosingArrayOpening:
            window.gtag("event", "difficulty_selected", {
                position_type: "losing",
                game_phase: "opening",
            });
            fenArray = fenLosingArrayOpening;
            break;
        case FenArrayType.MateInFewMoves:
            window.gtag("event", "difficulty_selected", {
                position_type: "winning",
                game_phase: "mate",
            });
            fenArray = fenMateInFewMoves;
            break;

        //custom positions
        case FenArrayType.IndianGameGeneral_A45:
            fenArray = fenIndianGameGeneral_A45;
            break;
        case FenArrayType.SicilianDefenseClosedVariation_B23:
            fenArray = fenSicilianDefenseClosedVariation_B23;
            break;
        case FenArrayType.KingsIndianAttackGeneral_A07:
            fenArray = fenKingsIndianAttackGeneral_A07;
            break;
        case FenArrayType.ZukertortOpeningSicilianInvitation_A04:
            fenArray = fenZukertortOpeningSicilianInvitation_A04;
            break;
        case FenArrayType.TrompowskyAttackGeneral_A45:
            fenArray = fenTrompowskyAttackGeneral_A45;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttack_B30:
            fenArray = fenSicilianDefenseNyezhmetdinovRossolimoAttack_B30;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationGeneral_B22:
            fenArray = fenSicilianDefenseAlapinVariationGeneral_B22;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariation_B90_99:
            fenArray = fenSicilianDefenseNajdorfVariation_B90_99;
            break;
        case FenArrayType.PircDefenseGeneral_B07:
            fenArray = fenPircDefenseGeneral_B07;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariation_B31:
            fenArray =
                fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariation_B31;
            break;
        case FenArrayType.FrenchDefenseExchangeVariation_C01:
            fenArray = fenFrenchDefenseExchangeVariation_C01;
            break;
        case FenArrayType.QueenPawnGameLondonSystem_D02:
            fenArray = fenQueenPawnGameLondonSystem_D02;
            break;
        case FenArrayType.ZukertortOpeningSymmetricalVariation_A04:
            fenArray = fenZukertortOpeningSymmetricalVariation_A04;
            break;
        case FenArrayType.SicilianDefenseOldSicilianGeneral_B30:
            fenArray = fenSicilianDefenseOldSicilianGeneral_B30;
            break;
        case FenArrayType.SicilianDefenseFrenchVariation_B40:
            fenArray = fenSicilianDefenseFrenchVariation_B40;
            break;
        case FenArrayType.SicilianDefenseCanalAttack_B51:
            fenArray = fenSicilianDefenseCanalAttack_B51;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationGeneral_A20:
            fenArray = fenEnglishOpeningKingsEnglishVariationGeneral_A20;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationEnglishAttack_B90:
            fenArray = fenSicilianDefenseNajdorfVariationEnglishAttack_B90;
            break;
        case FenArrayType.ItalianGameClassicalVariationGiuocoPianissimo_C53:
            fenArray = fenItalianGameClassicalVariationGiuocoPianissimo_C53;
            break;
        case FenArrayType.CatalanOpeningClosedVariation_E06:
            fenArray = fenCatalanOpeningClosedVariation_E06;
            break;
        case FenArrayType.SicilianDefenseCanalAttackMainLine_B52:
            fenArray = fenSicilianDefenseCanalAttackMainLine_B52;
            break;
        case FenArrayType.ModernDefenseStandardDefense_B06:
            fenArray = fenModernDefenseStandardDefense_B06;
            break;
        case FenArrayType.ModernDefenseQueenPawnFianchetto_A40:
            fenArray = fenModernDefenseQueenPawnFianchetto_A40;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationSmithMorraDeclined_B22:
            fenArray = fenSicilianDefenseAlapinVariationSmithMorraDeclined_B22;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseKingsKnightVariation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseKingsKnightVariation_A15;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationBarmenDefense_B22:
            fenArray = fenSicilianDefenseAlapinVariationBarmenDefense_B22;
            break;
        case FenArrayType.FrenchDefenseKingsIndianAttack_C00:
            fenArray = fenFrenchDefenseKingsIndianAttack_C00;
            break;
        case FenArrayType.ModernDefenseKingPawnFianchetto_B06:
            fenArray = fenModernDefenseKingPawnFianchetto_B06;
            break;
        case FenArrayType.SemiSlavDefenseGeneral_D43:
            fenArray = fenSemiSlavDefenseGeneral_D43;
            break;
        case FenArrayType.KingsIndianAttackSymmtericalDefense_A05:
            fenArray = fenKingsIndianAttackSymmtericalDefense_A05;
            break;
        case FenArrayType.IndianGameAntiNimzoindian_E10:
            fenArray = fenIndianGameAntiNimzoindian_E10;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseKingsIndianFormation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseKingsIndianFormation_A15;
            break;
        case FenArrayType.QueensGambitDeclinedGeneral_D30:
            fenArray = fenQueensGambitDeclinedGeneral_D30;
            break;
        case FenArrayType.QueenPawnGameSarrattAttack_D00:
            fenArray = fenQueenPawnGameSarrattAttack_D00;
            break;
        case FenArrayType.SicilianDefenseKanVariationKnightVariation_B43:
            fenArray = fenSicilianDefenseKanVariationKnightVariation_B43;
            break;
        case FenArrayType.QueensGambitDeclinedExchangeVariationPositionalVariation_1_D35:
            fenArray =
                fenQueensGambitDeclinedExchangeVariationPositionalVariation_1_D35;
            break;
        case FenArrayType.QueenPawnGameZukertortVariation_D02:
            fenArray = fenQueenPawnGameZukertortVariation_D02;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B47:
            fenArray = fenSicilianDefensePaulsenVariationBastrikovVariation_B47;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseModernBishopsOpening_C55:
            fenArray = fenItalianGameTwoKnightsDefenseModernBishopsOpening_C55;
            break;
        case FenArrayType.KingsIndianDefenseNormalVariationKingsKnightVariation_E60:
            fenArray = fenKingsIndianDefenseNormalVariationKingsKnightVariation_E60;
            break;
        case FenArrayType.CaroKannDefenseExchangeVariation_B13:
            fenArray = fenCaroKannDefenseExchangeVariation_B13;
            break;
        case FenArrayType.SicilianDefenseClosedVariationTraditional_B25:
            fenArray = fenSicilianDefenseClosedVariationTraditional_B25;
            break;
        case FenArrayType.PhilidorDefenseLionVariation_C41:
            fenArray = fenPhilidorDefenseLionVariation_C41;
            break;
        case FenArrayType.SlavDefenseGeneral_D10:
            fenArray = fenSlavDefenseGeneral_D10;
            break;
        case FenArrayType.SlavDefenseModernLine_D11:
            fenArray = fenSlavDefenseModernLine_D11;
            break;
        case FenArrayType.QueenPawnGameSymmetricalVariation_D02:
            fenArray = fenQueenPawnGameSymmetricalVariation_D02;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariationChelyabinskVariation_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationChelyabinskVariation_B33;
            break;
        case FenArrayType.SicilianDefenseModernVariations_B50:
            fenArray = fenSicilianDefenseModernVariations_B50;
            break;
        case FenArrayType.SicilianDefenseDelayedAlapinVariation_B40:
            fenArray = fenSicilianDefenseDelayedAlapinVariation_B40;
            break;
        case FenArrayType.SicilianDefenseDelayedAlapin_B50:
            fenArray = fenSicilianDefenseDelayedAlapin_B50;
            break;
        case FenArrayType.HorwitzDefenseGeneral_A40:
            fenArray = fenHorwitzDefenseGeneral_A40;
            break;
        case FenArrayType.SemiSlavDefenseStoltzVariation_D45:
            fenArray = fenSemiSlavDefenseStoltzVariation_D45;
            break;
        case FenArrayType.CatalanOpeningGeneral_E00:
            fenArray = fenCatalanOpeningGeneral_E00;
            break;
        case FenArrayType.SicilianDefenseKanVariationModernVariation_B42:
            fenArray = fenSicilianDefenseKanVariationModernVariation_B42;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseQueensKnightVariation_A16:
            fenArray = fenEnglishOpeningAngloIndianDefenseQueensKnightVariation_A16;
            break;
        case FenArrayType.SicilianDefenseChekhoverVariation_B53:
            fenArray = fenSicilianDefenseChekhoverVariation_B53;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationShortVariation_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationShortVariation_B12;
            break;
        case FenArrayType.FrenchDefenseSteinitzVariationBoleslavskyVariation_C11:
            fenArray = fenFrenchDefenseSteinitzVariationBoleslavskyVariation_C11;
            break;
        case FenArrayType.IndianGameLondonSystem_A48:
            fenArray = fenIndianGameLondonSystem_A48;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariation_E32:
            fenArray = fenNimzoIndianDefenseClassicalVariation_E32;
            break;
        case FenArrayType.IndianGamePseudoKingsIndianVariation_A49:
            fenArray = fenIndianGamePseudoKingsIndianVariation_A49;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseMikenasCarlsVariation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseMikenasCarlsVariation_A15;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseNeoCatalanDeclined_A14:
            fenArray = fenEnglishOpeningAgincourtDefenseNeoCatalanDeclined_A14;
            break;
        case FenArrayType.CaroKannDefenseGeneral_B10:
            fenArray = fenCaroKannDefenseGeneral_B10;
            break;
        case FenArrayType.SicilianDefenseGrandPrixAttack_B23:
            fenArray = fenSicilianDefenseGrandPrixAttack_B23;
            break;
        case FenArrayType.IndianGameLondonSystem_A46:
            fenArray = fenIndianGameLondonSystem_A46;
            break;
        case FenArrayType.ZukertortOpeningKingsideFianchetto_A04:
            fenArray = fenZukertortOpeningKingsideFianchetto_A04;
            break;
        case FenArrayType.CatalanOpeningOpenDefense_E04:
            fenArray = fenCatalanOpeningOpenDefense_E04;
            break;
        case FenArrayType.SlavDefenseExchangeVariation_D10:
            fenArray = fenSlavDefenseExchangeVariation_D10;
            break;
        case FenArrayType.QueensGambitDeclinedThreeKnightsVariationGeneral_D37:
            fenArray = fenQueensGambitDeclinedThreeKnightsVariationGeneral_D37;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonModernBc4Variation_B35:
            fenArray = fenSicilianDefenseAcceleratedDragonModernBc4Variation_B35;
            break;
        case FenArrayType.NimzoLarsenAttackModernVariation_A01:
            fenArray = fenNimzoLarsenAttackModernVariation_A01;
            break;
        case FenArrayType.SpanishGameGeneral_C60:
            fenArray = fenSpanishGameGeneral_C60;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefense_A13:
            fenArray = fenEnglishOpeningAgincourtDefense_A13;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationClassicalFianchetto_E67:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationClassicalFianchetto_E67;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariation_D85:
            fenArray = fenGruenfeldDefenseExchangeVariation_D85;
            break;
        case FenArrayType.SicilianDefenseClosedVariationFianchettoVariation_B24:
            fenArray = fenSicilianDefenseClosedVariationFianchettoVariation_B24;
            break;
        case FenArrayType.IndianGameKnightsVariationGeneral_A46:
            fenArray = fenIndianGameKnightsVariationGeneral_A46;
            break;
        case FenArrayType.BogoIndianDefenseGrunfeldVariation_E11:
            fenArray = fenBogoIndianDefenseGrunfeldVariation_E11;
            break;
        case FenArrayType.EnglishOpeningGreatSnakeVariation_A10:
            fenArray = fenEnglishOpeningGreatSnakeVariation_A10;
            break;
        case FenArrayType.IndianGamePrzepiorkaVariation_A49:
            fenArray = fenIndianGamePrzepiorkaVariation_A49;
            break;
        case FenArrayType.SlavDefenseQuietVariationSchalloppDefense_D12:
            fenArray = fenSlavDefenseQuietVariationSchalloppDefense_D12;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationGeneral_E91:
            fenArray = fenKingsIndianDefenseOrthodoxVariationGeneral_E91;
            break;
        case FenArrayType.SicilianDefenseKalashnikovVariation_B32:
            fenArray = fenSicilianDefenseKalashnikovVariation_B32;
            break;
        case FenArrayType.RatDefenseSeealsoModernDefenseforlineswithg6_A41:
            fenArray = fenRatDefenseSeealsoModernDefenseforlineswithg6_A41;
            break;
        case FenArrayType.ZukertortOpeningNimzoLarsenVariation_A04:
            fenArray = fenZukertortOpeningNimzoLarsenVariation_A04;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationBotvinnikCarlsDefense_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationBotvinnikCarlsDefense_B12;
            break;
        case FenArrayType.QueenPawnGameSymmetricalVariationPseudoCatalan_D02:
            fenArray = fenQueenPawnGameSymmetricalVariationPseudoCatalan_D02;
            break;
        case FenArrayType.ScandinavianDefenseMiesesKotrocVariation_B01:
            fenArray = fenScandinavianDefenseMiesesKotrocVariation_B01;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationModernExchangeVariation_D85:
            fenArray =
                fenGruenfeldDefenseExchangeVariationModernExchangeVariation_D85;
            break;
        case FenArrayType.BirdOpeningDutchVariation_A03:
            fenArray = fenBirdOpeningDutchVariation_A03;
            break;
        case FenArrayType.ModernDefenseStandardLine_B06:
            fenArray = fenModernDefenseStandardLine_B06;
            break;
        case FenArrayType.SpanishGameMorphyDefenseAnderssenVariation_C77:
            fenArray = fenSpanishGameMorphyDefenseAnderssenVariation_C77;
            break;
        case FenArrayType.SlavDefenseQuietVariation_D11:
            fenArray = fenSlavDefenseQuietVariation_D11;
            break;
        case FenArrayType.SicilianDefenseFourKnightsVariation_B45:
            fenArray = fenSicilianDefenseFourKnightsVariation_B45;
            break;
        case FenArrayType.CaroKannDefenseTwoKnightsAttack_B10:
            fenArray = fenCaroKannDefenseTwoKnightsAttack_B10;
            break;
        case FenArrayType.SicilianDefenseClassicalVariationGeneral_B56:
            fenArray = fenSicilianDefenseClassicalVariationGeneral_B56;
            break;
        case FenArrayType.IndianGameYusupovRubinsteinSystem_A46:
            fenArray = fenIndianGameYusupovRubinsteinSystem_A46;
            break;
        case FenArrayType.HungarianOpeningGeneral_A00:
            fenArray = fenHungarianOpeningGeneral_A00;
            break;
        case FenArrayType.TorreAttackFianchettoDefense_A48:
            fenArray = fenTorreAttackFianchettoDefense_A48;
            break;
        case FenArrayType.FrenchDefenseRubinsteinVariationBlackburneDefense_C10:
            fenArray = fenFrenchDefenseRubinsteinVariationBlackburneDefense_C10;
            break;
        case FenArrayType.CzechDefenseGeneral_B07:
            fenArray = fenCzechDefenseGeneral_B07;
            break;
        case FenArrayType.ScandinavianDefenseMainLines_B01:
            fenArray = fenScandinavianDefenseMainLines_B01;
            break;
        case FenArrayType.FourKnightsGameScotchVariationAccepted_C47:
            fenArray = fenFourKnightsGameScotchVariationAccepted_C47;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationAdamsAttack_B90:
            fenArray = fenSicilianDefenseNajdorfVariationAdamsAttack_B90;
            break;
        case FenArrayType.SpanishGameClosedVariations_C84:
            fenArray = fenSpanishGameClosedVariations_C84;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationClosedVariationMainLine_C06:
            fenArray = fenFrenchDefenseTarraschVariationClosedVariationMainLine_C06;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBind_B38:
            fenArray = fenSicilianDefenseAcceleratedDragonMaroczyBind_B38;
            break;
        case FenArrayType.KingsPawnOpeningGeneral_B00:
            fenArray = fenKingsPawnOpeningGeneral_B00;
            break;
        case FenArrayType.SicilianDefenseGeneral_B20_99:
            fenArray = fenSicilianDefenseGeneral_B20_99;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationGeneral_A30:
            fenArray = fenEnglishOpeningSymmetricalVariationGeneral_A30;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationOpocenskyVariation_B92:
            fenArray = fenSicilianDefenseNajdorfVariationOpocenskyVariation_B92;
            break;
        case FenArrayType.EnglishOpeningAngloSlavVariationGeneral_A11:
            fenArray = fenEnglishOpeningAngloSlavVariationGeneral_A11;
            break;
        case FenArrayType.BogoIndianDefenseNimzowitschVariation_E11:
            fenArray = fenBogoIndianDefenseNimzowitschVariation_E11;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackModernLine_B76:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttackModernLine_B76;
            break;
        case FenArrayType.KingsIndianDefenseNormalVariationRareDefenses_E90:
            fenArray = fenKingsIndianDefenseNormalVariationRareDefenses_E90;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariation_B12:
            fenArray = fenCaroKannDefenseAdvanceVariation_B12;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationPannoVariation_E63:
            fenArray = fenKingsIndianDefenseFianchettoVariationPannoVariation_E63;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationTalVariation_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationTalVariation_B12;
            break;
        case FenArrayType.ScandinavianDefenseGubinskyMeltsDefense_B01:
            fenArray = fenScandinavianDefenseGubinskyMeltsDefense_B01;
            break;
        case FenArrayType.IndianGameSpielmannIndian_A46:
            fenArray = fenIndianGameSpielmannIndian_A46;
            break;
        case FenArrayType.IndianGameWadeTarkatowerDefense_A46:
            fenArray = fenIndianGameWadeTarkatowerDefense_A46;
            break;
        case FenArrayType.SpanishGameMorphyDefense_1_C78:
            fenArray = fenSpanishGameMorphyDefense_1_C78;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationEuweVariation_C02:
            fenArray = fenFrenchDefenseAdvanceVariationEuweVariation_C02;
            break;
        case FenArrayType.TorreAttackClassicalDefense_A46:
            fenArray = fenTorreAttackClassicalDefense_A46;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariation_B18:
            fenArray = fenCaroKannDefenseClassicalVariation_B18;
            break;
        case FenArrayType.ItalianGameGiuocoPianissimoNormal_C50:
            fenArray = fenItalianGameGiuocoPianissimoNormal_C50;
            break;
        case FenArrayType.SicilianDefensePaulsenVariation_B46:
            fenArray = fenSicilianDefensePaulsenVariation_B46;
            break;
        case FenArrayType.KingsIndianDefenseMakagonovVariation_E71:
            fenArray = fenKingsIndianDefenseMakagonovVariation_E71;
            break;
        case FenArrayType.BirdOpeningGeneral_A02:
            fenArray = fenBirdOpeningGeneral_A02;
            break;
        case FenArrayType.CaroKannDefenseTartakowerVariation_B15:
            fenArray = fenCaroKannDefenseTartakowerVariation_B15;
            break;
        case FenArrayType.SicilianDefenseKanVariationMaroczyBindRetiVariation_B41:
            fenArray = fenSicilianDefenseKanVariationMaroczyBindRetiVariation_B41;
            break;
        case FenArrayType.NimzoLarsenAttackClassicalVariation_A01:
            fenArray = fenNimzoLarsenAttackClassicalVariation_A01;
            break;
        case FenArrayType.AlekhineDefenseExchangeVariation_B03:
            fenArray = fenAlekhineDefenseExchangeVariation_B03;
            break;
        case FenArrayType.IndianGameKingsideFianchetto_E61:
            fenArray = fenIndianGameKingsideFianchetto_E61;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariationSeirawanVariation_B19:
            fenArray = fenCaroKannDefenseClassicalVariationSeirawanVariation_B19;
            break;
        case FenArrayType.ZukertortOpeningDutchVariation_A04:
            fenArray = fenZukertortOpeningDutchVariation_A04;
            break;
        case FenArrayType.DutchDefenseGeneral_A80:
            fenArray = fenDutchDefenseGeneral_A80;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B48:
            fenArray = fenSicilianDefensePaulsenVariationBastrikovVariation_B48;
            break;
        case FenArrayType.QueensGambitDeclinedRagozinDefense_D38:
            fenArray = fenQueensGambitDeclinedRagozinDefense_D38;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationPositionalDefense_E94:
            fenArray = fenKingsIndianDefenseOrthodoxVariationPositionalDefense_E94;
            break;
        case FenArrayType.QueensGambitDeclinedExchangeVariationPositionalVariation_2_D35:
            fenArray =
                fenQueensGambitDeclinedExchangeVariationPositionalVariation_2_D35;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationClassicalVariation_1_B84:
            fenArray =
                fenSicilianDefenseScheveningenVariationClassicalVariation_1_B84;
            break;
        case FenArrayType.ItalianGameItalianVariation_C50:
            fenArray = fenItalianGameItalianVariation_C50;
            break;
        case FenArrayType.SlavDefenseChameleonVariation_D15:
            fenArray = fenSlavDefenseChameleonVariation_D15;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationNormalDefense_E81:
            fenArray = fenKingsIndianDefenseSaemischVariationNormalDefense_E81;
            break;
        case FenArrayType.NimzowitschLarsenAttackGeneral_A06:
            fenArray = fenNimzowitschLarsenAttackGeneral_A06;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariation_A31:
            fenArray = fenEnglishOpeningSymmetricalVariationAntiBenoniVariation_A31;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationGeneral_B33:
            fenArray = fenSicilianDefenseLaskerPelikanVariationGeneral_B33;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonModernVariation_B34:
            fenArray = fenSicilianDefenseAcceleratedDragonModernVariation_B34;
            break;
        case FenArrayType.ZukertortOpeningQueenPawnDefense_A06:
            fenArray = fenZukertortOpeningQueenPawnDefense_A06;
            break;
        case FenArrayType.SicilianDefenseHyperacceleratedDragon_B27:
            fenArray = fenSicilianDefenseHyperacceleratedDragon_B27;
            break;
        case FenArrayType.ScotchGameMiesesVariation_C45:
            fenArray = fenScotchGameMiesesVariation_C45;
            break;
        case FenArrayType.RussianGameNimzowitschAttack_C42:
            fenArray = fenRussianGameNimzowitschAttack_C42;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationTwoKnightsLine_A37:
            fenArray = fenEnglishOpeningSymmetricalVariationTwoKnightsLine_A37;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationGligoricTaimanovSystem_E92:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationGligoricTaimanovSystem_E92;
            break;
        case FenArrayType.ScandinavianDefenseMainLinesMiesesVariation_B01:
            fenArray = fenScandinavianDefenseMainLinesMiesesVariation_B01;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationSymmetricalVariation_A36:
            fenArray = fenEnglishOpeningSymmetricalVariationSymmetricalVariation_A36;
            break;
        case FenArrayType.ScandinavianDefenseModernVariation_1_B01:
            fenArray = fenScandinavianDefenseModernVariation_1_B01;
            break;
        case FenArrayType.CaroKannDefenseTwoKnightsAttackMindenoVariationExchangeLine_B11:
            fenArray =
                fenCaroKannDefenseTwoKnightsAttackMindenoVariationExchangeLine_B11;
            break;
        case FenArrayType.OwenDefenseGeneral_B00:
            fenArray = fenOwenDefenseGeneral_B00;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationHedgehogDefense_A30:
            fenArray = fenEnglishOpeningSymmetricalVariationHedgehogDefense_A30;
            break;
        case FenArrayType.QueensGambitDeclinedModernVariation_D50:
            fenArray = fenQueensGambitDeclinedModernVariation_D50;
            break;
        case FenArrayType.SicilianDefenseClosedVariation_B26:
            fenArray = fenSicilianDefenseClosedVariation_B26;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariation_B94:
            fenArray = fenSicilianDefenseNajdorfVariation_B94;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariation_B67:
            fenArray = fenSicilianDefenseRichterRauzerVariationNeoModernVariation_B67;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseKingsKnight_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseKingsKnight_A13;
            break;
        case FenArrayType.QueenPawnGameVeresovAttack_D00:
            fenArray = fenQueenPawnGameVeresovAttack_D00;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationPaulsenAttack_C02:
            fenArray = fenFrenchDefenseAdvanceVariationPaulsenAttack_C02;
            break;
        case FenArrayType.EnglishOpeningGeneral_A10:
            fenArray = fenEnglishOpeningGeneral_A10;
            break;
        case FenArrayType.BenoniDefenseGeneral_A43:
            fenArray = fenBenoniDefenseGeneral_A43;
            break;
        case FenArrayType.SicilianDefenseFrenchVariationWesterinenAttack_B40:
            fenArray = fenSicilianDefenseFrenchVariationWesterinenAttack_B40;
            break;
        case FenArrayType.RatDefenseEnglishRat_A41:
            fenArray = fenRatDefenseEnglishRat_A41;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationMorozevichVariation_C03:
            fenArray = fenFrenchDefenseTarraschVariationMorozevichVariation_C03;
            break;
        case FenArrayType.SicilianDefenseKanVariationPolugaevskyVariation_B42:
            fenArray = fenSicilianDefenseKanVariationPolugaevskyVariation_B42;
            break;
        case FenArrayType.QueensGambitDeclinedCharousekPetrosianVariation_D31:
            fenArray = fenQueensGambitDeclinedCharousekPetrosianVariation_D31;
            break;
        case FenArrayType.ScotchGameClassicalVariation_C45:
            fenArray = fenScotchGameClassicalVariation_C45;
            break;
        case FenArrayType.NimzoIndianDefenseKmochVariation_E20:
            fenArray = fenNimzoIndianDefenseKmochVariation_E20;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationFianchettoLines_A29:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationFianchettoLines_A29;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationOpenSystemEuweKeresLine_C07:
            fenArray = fenFrenchDefenseTarraschVariationOpenSystemEuweKeresLine_C07;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindGeneral_B36:
            fenArray = fenSicilianDefenseAcceleratedDragonMaroczyBindGeneral_B36;
            break;
        case FenArrayType.QueenPawnGameColleSystem_D04:
            fenArray = fenQueenPawnGameColleSystem_D04;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationMainLine_C02:
            fenArray = fenFrenchDefenseAdvanceVariationMainLine_C02;
            break;
        case FenArrayType.BenkoGambitAcceptedFullyAcceptedVariation_A58:
            fenArray = fenBenkoGambitAcceptedFullyAcceptedVariation_A58;
            break;
        case FenArrayType.BenoniDefenseModernVariation_A56:
            fenArray = fenBenoniDefenseModernVariation_A56;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationClosedVariation_1_C05:
            fenArray = fenFrenchDefenseTarraschVariationClosedVariation_1_C05;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationAmsterdamVariation_B93:
            fenArray = fenSicilianDefenseNajdorfVariationAmsterdamVariation_B93;
            break;
        case FenArrayType.CaroKannDefenseAcceleratedPanovAttackModernVariation_B10:
            fenArray = fenCaroKannDefenseAcceleratedPanovAttackModernVariation_B10;
            break;
        case FenArrayType.QueenPawnGameChigorinVariation_D02:
            fenArray = fenQueenPawnGameChigorinVariation_D02;
            break;
        case FenArrayType.SlavDefenseCzechVariationClassicalSystem_D18:
            fenArray = fenSlavDefenseCzechVariationClassicalSystem_D18;
            break;
        case FenArrayType.ModernDefenseAverbakhVariation_A42:
            fenArray = fenModernDefenseAverbakhVariation_A42;
            break;
        case FenArrayType.SicilianDefenseSnyderVariation_B20:
            fenArray = fenSicilianDefenseSnyderVariation_B20;
            break;
        case FenArrayType.EnglishOpeningAngloDutchDefense_A10:
            fenArray = fenEnglishOpeningAngloDutchDefense_A10;
            break;
        case FenArrayType.QueenPawnGameLevitskyAttack_D00:
            fenArray = fenQueenPawnGameLevitskyAttack_D00;
            break;
        case FenArrayType.NeoGruenfeldDefenseClassicalVariationOriginalDefense_D78:
            fenArray = fenNeoGruenfeldDefenseClassicalVariationOriginalDefense_D78;
            break;
        case FenArrayType.SpanishGameMorphyDefenseBreyerDefenseZaitsevHybrid_C95:
            fenArray = fenSpanishGameMorphyDefenseBreyerDefenseZaitsevHybrid_C95;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationChistyakovDefense_C07:
            fenArray = fenFrenchDefenseTarraschVariationChistyakovDefense_C07;
            break;
        case FenArrayType.NimzoIndianDefenseThreeKnightsVariationDuchampVariation_E21:
            fenArray = fenNimzoIndianDefenseThreeKnightsVariationDuchampVariation_E21;
            break;
        case FenArrayType.DutchDefenseSemiLeningradVariation_A81:
            fenArray = fenDutchDefenseSemiLeningradVariation_A81;
            break;
        case FenArrayType.ScotchGameSchmidtVariation_C45:
            fenArray = fenScotchGameSchmidtVariation_C45;
            break;
        case FenArrayType.NimzoIndianDefenseReshevskyVariation_E46:
            fenArray = fenNimzoIndianDefenseReshevskyVariation_E46;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariation_B96:
            fenArray = fenSicilianDefenseNajdorfVariation_B96;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationGlekDefense_E94:
            fenArray = fenKingsIndianDefenseOrthodoxVariationGlekDefense_E94;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseCatalanDefenseAccepted_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseCatalanDefenseAccepted_A13;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationOpocenskyVariationTraditionalLine_B92:
            fenArray =
                fenSicilianDefenseNajdorfVariationOpocenskyVariationTraditionalLine_B92;
            break;
        case FenArrayType.KingsIndianAttackYugoslavVariation_A07:
            fenArray = fenKingsIndianAttackYugoslavVariation_A07;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationEnglishAttack_1_B80:
            fenArray = fenSicilianDefenseScheveningenVariationEnglishAttack_1_B80;
            break;
        case FenArrayType.ModernDefensePseudoAustrianAttack_B06:
            fenArray = fenModernDefensePseudoAustrianAttack_B06;
            break;
        case FenArrayType.AlekhineDefenseScandinavianVariation_B02:
            fenArray = fenAlekhineDefenseScandinavianVariation_B02;
            break;
        case FenArrayType.QueensGambitDeclinedBarmenVariation_D37:
            fenArray = fenQueensGambitDeclinedBarmenVariation_D37;
            break;
        case FenArrayType.ScotchGameScotchGambitAdvanceVariation_C45:
            fenArray = fenScotchGameScotchGambitAdvanceVariation_C45;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationPetrosianSystem_D91:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationPetrosianSystem_D91;
            break;
        case FenArrayType.SicilianDefenseHyperacceleratedFianchetto_A42:
            fenArray = fenSicilianDefenseHyperacceleratedFianchetto_A42;
            break;
        case FenArrayType.WadeDefenseGeneral_A41:
            fenArray = fenWadeDefenseGeneral_A41;
            break;
        case FenArrayType.TarraschDefenseSymmetricalVariation_D32:
            fenArray = fenTarraschDefenseSymmetricalVariation_D32;
            break;
        case FenArrayType.NimzoLarsenAttackIndianVariation_A01:
            fenArray = fenNimzoLarsenAttackIndianVariation_A01;
            break;
        case FenArrayType.SicilianDefenseMcDonnellAttack_B21:
            fenArray = fenSicilianDefenseMcDonnellAttack_B21;
            break;
        case FenArrayType.SicilianDefenseDragonVariationGeneral_B70:
            fenArray = fenSicilianDefenseDragonVariationGeneral_B70;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationKeresAttack_B81:
            fenArray = fenSicilianDefenseScheveningenVariationKeresAttack_B81;
            break;
        case FenArrayType.CaroKannDefensePanovAttack_B14:
            fenArray = fenCaroKannDefensePanovAttack_B14;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseMainLines_D27:
            fenArray = fenQueensGambitAcceptedClassicalDefenseMainLines_D27;
            break;
        case FenArrayType.OldIndianDefenseGeneral_A53:
            fenArray = fenOldIndianDefenseGeneral_A53;
            break;
        case FenArrayType.SicilianDefensePrinsVariation_B54:
            fenArray = fenSicilianDefensePrinsVariation_B54;
            break;
        case FenArrayType.CaroKannDefenseBreyerVariation_B10:
            fenArray = fenCaroKannDefenseBreyerVariation_B10;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationFourKnightsVariation_A35:
            fenArray = fenEnglishOpeningSymmetricalVariationFourKnightsVariation_A35;
            break;
        case FenArrayType.SicilianDefenseGodivaVariation_B32:
            fenArray = fenSicilianDefenseGodivaVariation_B32;
            break;
        case FenArrayType.SpanishGameClosedVariationsMartinezVariation_C78:
            fenArray = fenSpanishGameClosedVariationsMartinezVariation_C78;
            break;
        case FenArrayType.SemiSlavDefenseAcceleratedMoveOrder_D31:
            fenArray = fenSemiSlavDefenseAcceleratedMoveOrder_D31;
            break;
        case FenArrayType.CaroKannDefenseExchangeVariationRubinsteinVariation_B13:
            fenArray = fenCaroKannDefenseExchangeVariationRubinsteinVariation_B13;
            break;
        case FenArrayType.BishopsOpeningBerlinDefense_C24:
            fenArray = fenBishopsOpeningBerlinDefense_C24;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariation_1_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSveshnikovVariation_1_B33;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationZagrebFianchettoVariation_B91:
            fenArray =
                fenSicilianDefenseNajdorfVariationZagrebFianchettoVariation_B91;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationGeneral_B44:
            fenArray = fenSicilianDefensePaulsenVariationGeneral_B44;
            break;
        case FenArrayType.TrompowskyAttackClassicalDefenseBigCenterVariation_A45:
            fenArray = fenTrompowskyAttackClassicalDefenseBigCenterVariation_A45;
            break;
        case FenArrayType.SlavDefenseExchangeVariation_D13:
            fenArray = fenSlavDefenseExchangeVariation_D13;
            break;
        case FenArrayType.FrenchDefenseChigorinVariation_C00:
            fenArray = fenFrenchDefenseChigorinVariation_C00;
            break;
        case FenArrayType.AlekhineDefenseModernVariationMainLine_B05:
            fenArray = fenAlekhineDefenseModernVariationMainLine_B05;
            break;
        case FenArrayType.FourKnightsGameGeneral_C46:
            fenArray = fenFourKnightsGameGeneral_C46;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariationMainlines_B18:
            fenArray = fenCaroKannDefenseClassicalVariationMainlines_B18;
            break;
        case FenArrayType.PircDefenseClassicalVariationTwoKnightsSystem_B08:
            fenArray = fenPircDefenseClassicalVariationTwoKnightsSystem_B08;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariationGeneral_C16:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariationGeneral_C16;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationClassicalMainLine_E69:
            fenArray = fenKingsIndianDefenseFianchettoVariationClassicalMainLine_E69;
            break;
        case FenArrayType.QueensGambitDeclinedCambridgeSpringsVariation_D52:
            fenArray = fenQueensGambitDeclinedCambridgeSpringsVariation_D52;
            break;
        case FenArrayType.QueensGambitDeclinedTartakowerDefenseGeneral_D58:
            fenArray = fenQueensGambitDeclinedTartakowerDefenseGeneral_D58;
            break;
        case FenArrayType.PhilidorDefenseExchangeVariation_1_C41:
            fenArray = fenPhilidorDefenseExchangeVariation_1_C41;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariation_E15:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationNimzowitschVariation_E15;
            break;
        case FenArrayType.CaroKannDefenseMaroczyVariation_B12:
            fenArray = fenCaroKannDefenseMaroczyVariation_B12;
            break;
        case FenArrayType.GruenfeldDefenseGeneral_D80:
            fenArray = fenGruenfeldDefenseGeneral_D80;
            break;
        case FenArrayType.HungarianOpeningIndianDefense_A00:
            fenArray = fenHungarianOpeningIndianDefense_A00;
            break;
        case FenArrayType.PircDefenseAustrianAttackWeissVariation_B09:
            fenArray = fenPircDefenseAustrianAttackWeissVariation_B09;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationCheckVariationIntermezzoLine_E15:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationCheckVariationIntermezzoLine_E15;
            break;
        case FenArrayType.FrenchDefenseRubinsteinVariationFortKnoxVariation_C10:
            fenArray = fenFrenchDefenseRubinsteinVariationFortKnoxVariation_C10;
            break;
        case FenArrayType.SlavDefenseQuietVariationPinDefense_D12:
            fenArray = fenSlavDefenseQuietVariationPinDefense_D12;
            break;
        case FenArrayType.FrenchDefenseTwoKnightsVariation_C00:
            fenArray = fenFrenchDefenseTwoKnightsVariation_C00;
            break;
        case FenArrayType.QueensGambitDeclinedQueensKnightVariation_D31:
            fenArray = fenQueensGambitDeclinedQueensKnightVariation_D31;
            break;
        case FenArrayType.KingsIndianDefensePetrosianVariationSteinDefense_E92:
            fenArray = fenKingsIndianDefensePetrosianVariationSteinDefense_E92;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariationEarlydeviations_B62:
            fenArray =
                fenSicilianDefenseRichterRauzerVariationNeoModernVariationEarlydeviations_B62;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationPoisonedPawnVariationGeneral_C18:
            fenArray =
                fenFrenchDefenseWinawerVariationPoisonedPawnVariationGeneral_C18;
            break;
        case FenArrayType.SicilianDefenseLowenthalVariation_B32:
            fenArray = fenSicilianDefenseLowenthalVariation_B32;
            break;
        case FenArrayType.BishopsOpeningViennaHybrid_C28:
            fenArray = fenBishopsOpeningViennaHybrid_C28;
            break;
        case FenArrayType.DutchDefenseQueensKnightVariation_A85:
            fenArray = fenDutchDefenseQueensKnightVariation_A85;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationMainLine_B99:
            fenArray = fenSicilianDefenseNajdorfVariationMainLine_B99;
            break;
        case FenArrayType.ZukertortOpeningQueensGambitInvitation_A04:
            fenArray = fenZukertortOpeningQueensGambitInvitation_A04;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariationTraditionalVariation_E17:
            fenArray =
                fenQueensIndianDefenseClassicalVariationTraditionalVariation_E17;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationBayonetAttack_E97:
            fenArray = fenKingsIndianDefenseOrthodoxVariationBayonetAttack_E97;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationImmediateFianchetto_E60:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationImmediateFianchetto_E60;
            break;
        case FenArrayType.RetiOpeningGeneral_A09:
            fenArray = fenRetiOpeningGeneral_A09;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationKeresDefense_E32:
            fenArray = fenNimzoIndianDefenseClassicalVariationKeresDefense_E32;
            break;
        case FenArrayType.SpanishGameBerlinDefenseRioGambitAccepted_C67:
            fenArray = fenSpanishGameBerlinDefenseRioGambitAccepted_C67;
            break;
        case FenArrayType.IndianGameTartakowerAttack_A45:
            fenArray = fenIndianGameTartakowerAttack_A45;
            break;
        case FenArrayType.BenoniDefenseBenoniIndianDefenseKingsidemoveorder_A43:
            fenArray = fenBenoniDefenseBenoniIndianDefenseKingsidemoveorder_A43;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationClosedVariation_2_C05:
            fenArray = fenFrenchDefenseTarraschVariationClosedVariation_2_C05;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationBurnVariation_C11:
            fenArray = fenFrenchDefenseClassicalVariationBurnVariation_C11;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationReversedClosedSicilian_A25:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationReversedClosedSicilian_A25;
            break;
        case FenArrayType.IndianGameQueensPawnOpening_E00:
            fenArray = fenIndianGameQueensPawnOpening_E00;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationBerlinVariation_E38:
            fenArray = fenNimzoIndianDefenseClassicalVariationBerlinVariation_E38;
            break;
        case FenArrayType.QueenPawnGameGeneral_D00:
            fenArray = fenQueenPawnGameGeneral_D00;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationGuimardDefenseMainLine_C04:
            fenArray = fenFrenchDefenseTarraschVariationGuimardDefenseMainLine_C04;
            break;
        case FenArrayType.ZukertortOpeningPircInvitation_A04:
            fenArray = fenZukertortOpeningPircInvitation_A04;
            break;
        case FenArrayType.DutchDefenseLeningradVariationWarsawVariation_A88:
            fenArray = fenDutchDefenseLeningradVariationWarsawVariation_A88;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationReversedSicilian_A21:
            fenArray = fenEnglishOpeningKingsEnglishVariationReversedSicilian_A21;
            break;
        case FenArrayType.SicilianDefenseKanVariationWingAttack_B43:
            fenArray = fenSicilianDefenseKanVariationWingAttack_B43;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationDelayedExchangeVariation_C01:
            fenArray = fenFrenchDefenseWinawerVariationDelayedExchangeVariation_C01;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationKramnikShirovCounter_A21:
            fenArray = fenEnglishOpeningKingsEnglishVariationKramnikShirovCounter_A21;
            break;
        case FenArrayType.SpanishGameBerlinDefenselHermetVariationBerlinWallDefense_C67:
            fenArray =
                fenSpanishGameBerlinDefenselHermetVariationBerlinWallDefense_C67;
            break;
        case FenArrayType.SicilianDefenseClosedVariation_B25:
            fenArray = fenSicilianDefenseClosedVariation_B25;
            break;
        case FenArrayType.RetiOpeningAdvanceVariation_A09:
            fenArray = fenRetiOpeningAdvanceVariation_A09;
            break;
        case FenArrayType.SpanishGameCozioDefenseGeneral_C60:
            fenArray = fenSpanishGameCozioDefenseGeneral_C60;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariation_B17:
            fenArray = fenCaroKannDefenseKarpovVariation_B17;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationSteinitzVariation_C11:
            fenArray = fenFrenchDefenseClassicalVariationSteinitzVariation_C11;
            break;
        case FenArrayType.SpanishGameClosedVariationsBogoljubowVariation_C91:
            fenArray = fenSpanishGameClosedVariationsBogoljubowVariation_C91;
            break;
        case FenArrayType.ModernDefenseTwoKnightsVariation_B06:
            fenArray = fenModernDefenseTwoKnightsVariation_B06;
            break;
        case FenArrayType.SicilianDefenseKramnikVariation_B40:
            fenArray = fenSicilianDefenseKramnikVariation_B40;
            break;
        case FenArrayType.SicilianDefenseFourKnightsVariationExchangeVariation_B45:
            fenArray = fenSicilianDefenseFourKnightsVariationExchangeVariation_B45;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B48:
            fenArray =
                fenSicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B48;
            break;
        case FenArrayType.BenoniDefenseCzechBenoniDefense_A56:
            fenArray = fenBenoniDefenseCzechBenoniDefense_A56;
            break;
        case FenArrayType.KingsIndianDefenseSemiAverbakhSystem_E73:
            fenArray = fenKingsIndianDefenseSemiAverbakhSystem_E73;
            break;
        case FenArrayType.BenoniDefenseFianchettoVariation_A62:
            fenArray = fenBenoniDefenseFianchettoVariation_A62;
            break;
        case FenArrayType.FrenchDefenseSchlechterVariation_C00:
            fenArray = fenFrenchDefenseSchlechterVariation_C00;
            break;
        case FenArrayType.PolishOpeningGeneral_A00:
            fenArray = fenPolishOpeningGeneral_A00;
            break;
        case FenArrayType.CatalanOpeningClosedVariation_E01:
            fenArray = fenCatalanOpeningClosedVariation_E01;
            break;
        case FenArrayType.IndianGamePseudoQueensIndian_A47:
            fenArray = fenIndianGamePseudoQueensIndian_A47;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemMiscLines_E98:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationClassicalSystemMiscLines_E98;
            break;
        case FenArrayType.KingsIndianAttackSicilianVariation_1_A08:
            fenArray = fenKingsIndianAttackSicilianVariation_1_A08;
            break;
        case FenArrayType.KingsIndianDefenseNormalVariation_E70:
            fenArray = fenKingsIndianDefenseNormalVariation_E70;
            break;
        case FenArrayType.BenkoGambitAcceptedPawnReturnVariation_A57:
            fenArray = fenBenkoGambitAcceptedPawnReturnVariation_A57;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationReversedDragon_A22:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationReversedDragon_A22;
            break;
        case FenArrayType.CaroKannDefensePanovAttackModernDefense_B13:
            fenArray = fenCaroKannDefensePanovAttackModernDefense_B13;
            break;
        case FenArrayType.NimzoIndianDefensePanovAttackMainLine_E54:
            fenArray = fenNimzoIndianDefensePanovAttackMainLine_E54;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationBarmenDefenseModernLine_B22:
            fenArray = fenSicilianDefenseAlapinVariationBarmenDefenseModernLine_B22;
            break;
        case FenArrayType.NimzoIndianDefenseThreeKnightsVariation_E21:
            fenArray = fenNimzoIndianDefenseThreeKnightsVariation_E21;
            break;
        case FenArrayType.DutchDefenseHoptonAttack_A80:
            fenArray = fenDutchDefenseHoptonAttack_A80;
            break;
        case FenArrayType.QueensGambitAcceptedOldVariation_D20:
            fenArray = fenQueensGambitAcceptedOldVariation_D20;
            break;
        case FenArrayType.ItalianGameGiuocoPianissimoItalianFourKnightsVariation_C50:
            fenArray = fenItalianGameGiuocoPianissimoItalianFourKnightsVariation_C50;
            break;
        case FenArrayType.ItalianGameHungarianDefense_C50:
            fenArray = fenItalianGameHungarianDefense_C50;
            break;
        case FenArrayType.PircDefenseByrneVariation_B07:
            fenArray = fenPircDefenseByrneVariation_B07;
            break;
        case FenArrayType.SicilianDefenseClassicalVariationAntiSozinVariation_B57:
            fenArray = fenSicilianDefenseClassicalVariationAntiSozinVariation_B57;
            break;
        case FenArrayType.KingsIndianDefenseExchangeVariation_E92:
            fenArray = fenKingsIndianDefenseExchangeVariation_E92;
            break;
        case FenArrayType.ScotchGameGeneral_C45:
            fenArray = fenScotchGameGeneral_C45;
            break;
        case FenArrayType.PircDefenseClassicalVariationSchlechterVariation_B08:
            fenArray = fenPircDefenseClassicalVariationSchlechterVariation_B08;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationUhlmannSzaboSystem_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationUhlmannSzaboSystem_E62;
            break;
        case FenArrayType.RussianGameModernAttackCenterVariation_C43:
            fenArray = fenRussianGameModernAttackCenterVariation_C43;
            break;
        case FenArrayType.SpanishGameClosedVariationsFlohrSystem_C92:
            fenArray = fenSpanishGameClosedVariationsFlohrSystem_C92;
            break;
        case FenArrayType.OldIndianDefenseNormalVariation_A55:
            fenArray = fenOldIndianDefenseNormalVariation_A55;
            break;
        case FenArrayType.QueensIndianDefenseSpasskySystem_E14:
            fenArray = fenQueensIndianDefenseSpasskySystem_E14;
            break;
        case FenArrayType.KingsIndianAttackSicilianVariation_2_A08:
            fenArray = fenKingsIndianAttackSicilianVariation_2_A08;
            break;
        case FenArrayType.SicilianDefenseFrenchVariationNormal_B40:
            fenArray = fenSicilianDefenseFrenchVariationNormal_B40;
            break;
        case FenArrayType.BenoniDefenseKingPawnlines_A65:
            fenArray = fenBenoniDefenseKingPawnlines_A65;
            break;
        case FenArrayType.SemiSlavDefenseMainLines_D45:
            fenArray = fenSemiSlavDefenseMainLines_D45;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseQueensIndianFormation_A13:
            fenArray = fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A13;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariation_B80:
            fenArray = fenSicilianDefenseScheveningenVariation_B80;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A37:
            fenArray =
                fenEnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A37;
            break;
        case FenArrayType.FrenchDefenseNormalVariation_C10:
            fenArray = fenFrenchDefenseNormalVariation_C10;
            break;
        case FenArrayType.SicilianDefenseSozinAttackFlankVariation_B87:
            fenArray = fenSicilianDefenseSozinAttackFlankVariation_B87;
            break;
        case FenArrayType.ScandinavianDefenseMarshallVariation_B01:
            fenArray = fenScandinavianDefenseMarshallVariation_B01;
            break;
        case FenArrayType.VanGeetOpeningGeneral_A00:
            fenArray = fenVanGeetOpeningGeneral_A00;
            break;
        case FenArrayType.EnglishOpeningEnglishDefenseGeneral_A10:
            fenArray = fenEnglishOpeningEnglishDefenseGeneral_A10;
            break;
        case FenArrayType.PhilidorDefenseGeneral_1_C41:
            fenArray = fenPhilidorDefenseGeneral_1_C41;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariation_E94:
            fenArray = fenKingsIndianDefenseOrthodoxVariation_E94;
            break;
        case FenArrayType.QueensGambitDeclinedViennaVariation_D44:
            fenArray = fenQueensGambitDeclinedViennaVariation_D44;
            break;
        case FenArrayType.NimzowitschDefenseWilliamsVariation_B00:
            fenArray = fenNimzowitschDefenseWilliamsVariation_B00;
            break;
        case FenArrayType.QueenPawnGameSteinitzCountergambit_D00:
            fenArray = fenQueenPawnGameSteinitzCountergambit_D00;
            break;
        case FenArrayType.FrenchDefenseExchangeVariationMonteCarloVariation_C01:
            fenArray = fenFrenchDefenseExchangeVariationMonteCarloVariation_C01;
            break;
        case FenArrayType.KingsIndianDefenseSixPawnsAttack_E77:
            fenArray = fenKingsIndianDefenseSixPawnsAttack_E77;
            break;
        case FenArrayType.SpanishGameMorphyDefenseArchangelskVariation_C78:
            fenArray = fenSpanishGameMorphyDefenseArchangelskVariation_C78;
            break;
        case FenArrayType.CaroKannDefenseBronsteinLarsenVariation_B16:
            fenArray = fenCaroKannDefenseBronsteinLarsenVariation_B16;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_1_C18:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_1_C18;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationOpenSystem_C07:
            fenArray = fenFrenchDefenseTarraschVariationOpenSystem_C07;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariationNovosibirskVariation_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationNovosibirskVariation_B33;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationPawnCenterVariation_C05:
            fenArray = fenFrenchDefenseTarraschVariationPawnCenterVariation_C05;
            break;
        case FenArrayType.KingsIndianDefenseSteinerAttack_E76:
            fenArray = fenKingsIndianDefenseSteinerAttack_E76;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationThreeKnightsVariation_A34:
            fenArray = fenEnglishOpeningSymmetricalVariationThreeKnightsVariation_A34;
            break;
        case FenArrayType.SpanishGameFianchettoDefense_C60:
            fenArray = fenSpanishGameFianchettoDefense_C60;
            break;
        case FenArrayType.QueenPawnGameTorreAttack_D03:
            fenArray = fenQueenPawnGameTorreAttack_D03;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationSzenVariation_B44:
            fenArray = fenSicilianDefensePaulsenVariationSzenVariation_B44;
            break;
        case FenArrayType.RussianGameThreeKnightsGame_C42:
            fenArray = fenRussianGameThreeKnightsGame_C42;
            break;
        case FenArrayType.SpanishGameClosedVariationsChigorinDefense_C97:
            fenArray = fenSpanishGameClosedVariationsChigorinDefense_C97;
            break;
        case FenArrayType.ViennaGameMiesesVariation_C26:
            fenArray = fenViennaGameMiesesVariation_C26;
            break;
        case FenArrayType.KingsIndianAttackWahlsDefense_A05:
            fenArray = fenKingsIndianAttackWahlsDefense_A05;
            break;
        case FenArrayType.BogoIndianDefenseWadeSmyslovVariation_E11:
            fenArray = fenBogoIndianDefenseWadeSmyslovVariation_E11;
            break;
        case FenArrayType.HungarianOpeningSymmetricalVariation_A00:
            fenArray = fenHungarianOpeningSymmetricalVariation_A00;
            break;
        case FenArrayType.NeoGruenfeldDefenseUltradelayedExchangeVariation_D79:
            fenArray = fenNeoGruenfeldDefenseUltradelayedExchangeVariation_D79;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTaimanovVariation_A25:
            fenArray = fenEnglishOpeningKingsEnglishVariationTaimanovVariation_A25;
            break;
        case FenArrayType.SlavDefenseExchangeVariationSymmetricalLine_D14:
            fenArray = fenSlavDefenseExchangeVariationSymmetricalLine_D14;
            break;
        case FenArrayType.SpanishGameExchangeVariationGligoricVariation_C69:
            fenArray = fenSpanishGameExchangeVariationGligoricVariation_C69;
            break;
        case FenArrayType.ScotchGamePotterVariation_C45:
            fenArray = fenScotchGamePotterVariation_C45;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A33:
            fenArray =
                fenEnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A33;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationKavalekDefense_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationKavalekDefense_E62;
            break;
        case FenArrayType.DutchDefenseRaphaelVariation_A80:
            fenArray = fenDutchDefenseRaphaelVariation_A80;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseNimzoEnglishOpening_A17:
            fenArray = fenEnglishOpeningAngloIndianDefenseNimzoEnglishOpening_A17;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_C72:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_C72;
            break;
        case FenArrayType.PircDefenseClassicalVariationQuietSystemCzechDefense_B08:
            fenArray = fenPircDefenseClassicalVariationQuietSystemCzechDefense_B08;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationOpenSystemMainLine_C09:
            fenArray = fenFrenchDefenseTarraschVariationOpenSystemMainLine_C09;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttack_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttack_D37;
            break;
        case FenArrayType.TrompowskyAttackClassicalDefense_A45:
            fenArray = fenTrompowskyAttackClassicalDefense_A45;
            break;
        case FenArrayType.SpanishGameSteinitzDefense_C62:
            fenArray = fenSpanishGameSteinitzDefense_C62;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariation_D90:
            fenArray = fenGruenfeldDefenseThreeKnightsVariation_D90;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationWadeVariation_C02:
            fenArray = fenFrenchDefenseAdvanceVariationWadeVariation_C02;
            break;
        case FenArrayType.QueensGambitDeclinedModernVariationNormalLine_D55:
            fenArray = fenQueensGambitDeclinedModernVariationNormalLine_D55;
            break;
        case FenArrayType.SemiSlavDefenseNormalVariation_D45:
            fenArray = fenSemiSlavDefenseNormalVariation_D45;
            break;
        case FenArrayType.SicilianDefenseLaskerDunneAttack_B20:
            fenArray = fenSicilianDefenseLaskerDunneAttack_B20;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariation_B95:
            fenArray = fenSicilianDefenseNajdorfVariation_B95;
            break;
        case FenArrayType.KingsIndianAttackSpasskyVariation_A05:
            fenArray = fenKingsIndianAttackSpasskyVariation_A05;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationMilnerBarryGambit_C02:
            fenArray = fenFrenchDefenseAdvanceVariationMilnerBarryGambit_C02;
            break;
        case FenArrayType.BudapestDefenseAdlerVariation_A52:
            fenArray = fenBudapestDefenseAdlerVariation_A52;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationAroninTaimanovDefense_E97:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationAroninTaimanovDefense_E97;
            break;
        case FenArrayType.ColleSystem_1_D05:
            fenArray = fenColleSystem_1_D05;
            break;
        case FenArrayType.MexicanDefenseGeneral_A50:
            fenArray = fenMexicanDefenseGeneral_A50;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationThreeKnightsSystemGeneral_A27:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationThreeKnightsSystemGeneral_A27;
            break;
        case FenArrayType.FrenchDefenseTarraschVariation_C03:
            fenArray = fenFrenchDefenseTarraschVariation_C03;
            break;
        case FenArrayType.SpanishGameSchliemannDefense_C63:
            fenArray = fenSpanishGameSchliemannDefense_C63;
            break;
        case FenArrayType.PircDefenseClassicalVariationQuietSystem_B08:
            fenArray = fenPircDefenseClassicalVariationQuietSystem_B08;
            break;
        case FenArrayType.AnderssenOpeningGeneral_A00:
            fenArray = fenAnderssenOpeningGeneral_A00;
            break;
        case FenArrayType.NeoGruenfeldDefenseClassicalVariationModernDefense_D78:
            fenArray = fenNeoGruenfeldDefenseClassicalVariationModernDefense_D78;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationGeneral_A22:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationGeneral_A22;
            break;
        case FenArrayType.QueensGambitDeclinedJanowskiVariation_D31:
            fenArray = fenQueensGambitDeclinedJanowskiVariation_D31;
            break;
        case FenArrayType.KingsIndianAttackDoubleFianchetto_A07:
            fenArray = fenKingsIndianAttackDoubleFianchetto_A07;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariationLobronSystem_B19:
            fenArray = fenCaroKannDefenseClassicalVariationLobronSystem_B19;
            break;
        case FenArrayType.BenkoGambitDeclinedMainLine_A57:
            fenArray = fenBenkoGambitDeclinedMainLine_A57;
            break;
        case FenArrayType.ModernDefenseAverbakhSystemKotovVariation_A42:
            fenArray = fenModernDefenseAverbakhSystemKotovVariation_A42;
            break;
        case FenArrayType.TorreAttackClassicalDefenseNimzowitschVariation_A46:
            fenArray = fenTorreAttackClassicalDefenseNimzowitschVariation_A46;
            break;
        case FenArrayType.SpanishGameMorphyDefenseWormaldAttack_C77:
            fenArray = fenSpanishGameMorphyDefenseWormaldAttack_C77;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackOldLine_B78:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttackOldLine_B78;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationNoaVariation_E34:
            fenArray = fenNimzoIndianDefenseClassicalVariationNoaVariation_E34;
            break;
        case FenArrayType.TarraschDefenseClassicalVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariation_D34;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBishopAttackClassicalDefense_E48:
            fenArray =
                fenNimzoIndianDefenseNormalVariationBishopAttackClassicalDefense_E48;
            break;
        case FenArrayType.BenoniDefenseModernVariation_A60:
            fenArray = fenBenoniDefenseModernVariation_A60;
            break;
        case FenArrayType.ModernDefenseGellersSystem_B06:
            fenArray = fenModernDefenseGellersSystem_B06;
            break;
        case FenArrayType.QueensGambitDeclinedTraditionalVariation_D30:
            fenArray = fenQueensGambitDeclinedTraditionalVariation_D30;
            break;
        case FenArrayType.QueenPawnOpeningGeneral_A40:
            fenArray = fenQueenPawnOpeningGeneral_A40;
            break;
        case FenArrayType.SicilianDefenseChameleon_B20:
            fenArray = fenSicilianDefenseChameleon_B20;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_1_B77:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttack_1_B77;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindBreyerVariation_B39:
            fenArray =
                fenSicilianDefenseAcceleratedDragonMaroczyBindBreyerVariation_B39;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambit_B21:
            fenArray = fenSicilianDefenseSmithMorraGambit_B21;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationSmyslovSystem_A22:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationSmyslovSystem_A22;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationNewYorkVariation_A70:
            fenArray = fenBenoniDefenseClassicalVariationNewYorkVariation_A70;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationSteinitzVariation_C14:
            fenArray = fenFrenchDefenseClassicalVariationSteinitzVariation_C14;
            break;
        case FenArrayType.FrenchDefenseKnightVariation_C00:
            fenArray = fenFrenchDefenseKnightVariation_C00;
            break;
        case FenArrayType.CaroKannDefenseGurgenidzeSystem_B15:
            fenArray = fenCaroKannDefenseGurgenidzeSystem_B15;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariation_E80:
            fenArray = fenKingsIndianDefenseSaemischVariation_E80;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationBenoniDefenseAdvanceVariation_E75:
            fenArray =
                fenKingsIndianDefenseAverbakhVariationBenoniDefenseAdvanceVariation_E75;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationClassicalVariation_D86:
            fenArray = fenGruenfeldDefenseExchangeVariationClassicalVariation_D86;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_B78:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttack_B78;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariation_B49:
            fenArray = fenSicilianDefensePaulsenVariationBastrikovVariation_B49;
            break;
        case FenArrayType.SpanishGameMorphyDefenseMackenzieVariation_C77:
            fenArray = fenSpanishGameMorphyDefenseMackenzieVariation_C77;
            break;
        case FenArrayType.PircDefenseAustrianAttackDragonFormation_B09:
            fenArray = fenPircDefenseAustrianAttackDragonFormation_B09;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseAgincourtVariation_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseAgincourtVariation_A13;
            break;
        case FenArrayType.QueensGambitDeclinedExchangeVariation_D35:
            fenArray = fenQueensGambitDeclinedExchangeVariation_D35;
            break;
        case FenArrayType.QueensGambitDeclinedRagozinDefenseAlekhineVariation_D38:
            fenArray = fenQueensGambitDeclinedRagozinDefenseAlekhineVariation_D38;
            break;
        case FenArrayType.AlekhineDefenseModernVariationAlburtVariation_B04:
            fenArray = fenAlekhineDefenseModernVariationAlburtVariation_B04;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationBurnVariationMorozevichLine_C11:
            fenArray =
                fenFrenchDefenseClassicalVariationBurnVariationMorozevichLine_C11;
            break;
        case FenArrayType.BudapestDefenseRubinsteinVariation_A52:
            fenArray = fenBudapestDefenseRubinsteinVariation_A52;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttack_E76:
            fenArray = fenKingsIndianDefenseFourPawnsAttack_E76;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitTraditionalLine_C54:
            fenArray = fenItalianGameClassicalVariationGrecoGambitTraditionalLine_C54;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationMeckingVariation_A39:
            fenArray = fenEnglishOpeningSymmetricalVariationMeckingVariation_A39;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationPositionalVariation_C19:
            fenArray = fenFrenchDefenseWinawerVariationPositionalVariation_C19;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBishopAttack_E47:
            fenArray = fenNimzoIndianDefenseNormalVariationBishopAttack_E47;
            break;
        case FenArrayType.DutchDefenseLeningradVariationMatulovicVariation_A89:
            fenArray = fenDutchDefenseLeningradVariationMatulovicVariation_A89;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationClassicalVariation_C18:
            fenArray = fenFrenchDefenseWinawerVariationClassicalVariation_C18;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_1_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_1_A28;
            break;
        case FenArrayType.ScotchGameClassicalVariationIntermezzoVariation_C45:
            fenArray = fenScotchGameClassicalVariationIntermezzoVariation_C45;
            break;
        case FenArrayType.SlavDefenseCzechVariationKrauseAttack_D17:
            fenArray = fenSlavDefenseCzechVariationKrauseAttack_D17;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseMainLine_D07:
            fenArray = fenQueensGambitRefusedChigorinDefenseMainLine_D07;
            break;
        case FenArrayType.SlavDefenseChameleonVariationAdvanceSystem_D15:
            fenArray = fenSlavDefenseChameleonVariationAdvanceSystem_D15;
            break;
        case FenArrayType.SicilianDefenseOldSicilianNormal_B33:
            fenArray = fenSicilianDefenseOldSicilianNormal_B33;
            break;
        case FenArrayType.QueensGambitDeclinedViennaVariationQuietVariation_D44:
            fenArray = fenQueensGambitDeclinedViennaVariationQuietVariation_D44;
            break;
        case FenArrayType.ZukertortOpeningReversedQueensGambit_D02:
            fenArray = fenZukertortOpeningReversedQueensGambit_D02;
            break;
        case FenArrayType.DutchDefenseRubinsteinVariation_A84:
            fenArray = fenDutchDefenseRubinsteinVariation_A84;
            break;
        case FenArrayType.BenoniDefenseTaimanovVariation_A67:
            fenArray = fenBenoniDefenseTaimanovVariation_A67;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationVeniceSystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationVeniceSystem_B28;
            break;
        case FenArrayType.ModernDefenseTwoKnightsVariationSuttlesVariation_B06:
            fenArray = fenModernDefenseTwoKnightsVariationSuttlesVariation_B06;
            break;
        case FenArrayType.NimzoIndianDefenseStPetersburgVariation_E43:
            fenArray = fenNimzoIndianDefenseStPetersburgVariation_E43;
            break;
        case FenArrayType.IndianGameSaemischIndian_A50:
            fenArray = fenIndianGameSaemischIndian_A50;
            break;
        case FenArrayType.SicilianDefenseStauntonCochraneVariation_B20:
            fenArray = fenSicilianDefenseStauntonCochraneVariation_B20;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationNormalSystemKanLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationNormalSystemKanLine_B28;
            break;
        case FenArrayType.BenkoGambitAcceptedModernVariation_A57:
            fenArray = fenBenkoGambitAcceptedModernVariation_A57;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationModernSystem_C03:
            fenArray = fenFrenchDefenseTarraschVariationModernSystem_C03;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariationQuietLine_E15:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationNimzowitschVariationQuietLine_E15;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationBotvinnikSystem_A36:
            fenArray = fenEnglishOpeningSymmetricalVariationBotvinnikSystem_A36;
            break;
        case FenArrayType.KingsIndianDefenseKramerVariation_E70:
            fenArray = fenKingsIndianDefenseKramerVariation_E70;
            break;
        case FenArrayType.ScandinavianDefenseGeneral_B01:
            fenArray = fenScandinavianDefenseGeneral_B01;
            break;
        case FenArrayType.KangarooDefenseGeneral_E00:
            fenArray = fenKangarooDefenseGeneral_E00;
            break;
        case FenArrayType.FrenchDefenseNormalVariation_C00:
            fenArray = fenFrenchDefenseNormalVariation_C00;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariation_D47:
            fenArray = fenSemiSlavDefenseMeranVariation_D47;
            break;
        case FenArrayType.QueensGambitRefusedMarshallDefense_D06:
            fenArray = fenQueensGambitRefusedMarshallDefense_D06;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationGeneral_B72:
            fenArray = fenSicilianDefenseDragonVariationClassicalVariationGeneral_B72;
            break;
        case FenArrayType.SemiSlavDefenseChigorinDefense_D46:
            fenArray = fenSemiSlavDefenseChigorinDefense_D46;
            break;
        case FenArrayType.NimzoIndianDefenseLeningradVariation_E30:
            fenArray = fenNimzoIndianDefenseLeningradVariation_E30;
            break;
        case FenArrayType.SpanishGameClosedVariationsPilnikVariation_C90:
            fenArray = fenSpanishGameClosedVariationsPilnikVariation_C90;
            break;
        case FenArrayType.SpanishGameMorphyDefenseChigorinDefensePanovSystem_C99:
            fenArray = fenSpanishGameMorphyDefenseChigorinDefensePanovSystem_C99;
            break;
        case FenArrayType.CaroKannDefensePanovAttackFianchettoDefense_B14:
            fenArray = fenCaroKannDefensePanovAttackFianchettoDefense_B14;
            break;
        case FenArrayType.FourKnightsGameSpanishVariation_C48:
            fenArray = fenFourKnightsGameSpanishVariation_C48;
            break;
        case FenArrayType.QueensIndianDefensePetrosianVariation_E12:
            fenArray = fenQueensIndianDefensePetrosianVariation_E12;
            break;
        case FenArrayType.BogoIndianDefenseVitolinshVariation_E11:
            fenArray = fenBogoIndianDefenseVitolinshVariation_E11;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationNormalVariation_B45:
            fenArray = fenSicilianDefensePaulsenVariationNormalVariation_B45;
            break;
        case FenArrayType.BenkoGambitAcceptedFianchettoVariation_A58:
            fenArray = fenBenkoGambitAcceptedFianchettoVariation_A58;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationBogoljubowVariation_C17:
            fenArray = fenFrenchDefenseWinawerVariationBogoljubowVariation_C17;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationVanderWielAttack_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationVanderWielAttack_B12;
            break;
        case FenArrayType.ScandinavianDefenseBronsteinVariation_B01:
            fenArray = fenScandinavianDefenseBronsteinVariation_B01;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonMaroczyBindGurgenidzeVariation_B36:
            fenArray =
                fenSicilianDefenseAcceleratedDragonMaroczyBindGurgenidzeVariation_B36;
            break;
        case FenArrayType.SpanishGameClosedVariationsDelayedExchange_C85:
            fenArray = fenSpanishGameClosedVariationsDelayedExchange_C85;
            break;
        case FenArrayType.BenoniDefenseOldBenoniRussianVariation_A44:
            fenArray = fenBenoniDefenseOldBenoniRussianVariation_A44;
            break;
        case FenArrayType.VantKruijsOpeningGeneral_A00:
            fenArray = fenVantKruijsOpeningGeneral_A00;
            break;
        case FenArrayType.SpanishGameExchangeVariationNormalVariation_C69:
            fenArray = fenSpanishGameExchangeVariationNormalVariation_C69;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAlekhineMaroczyGambit_C15:
            fenArray = fenFrenchDefenseWinawerVariationAlekhineMaroczyGambit_C15;
            break;
        case FenArrayType.QueensGambitDeclinedExchangeVariationReshevskyVariation_D36:
            fenArray = fenQueensGambitDeclinedExchangeVariationReshevskyVariation_D36;
            break;
        case FenArrayType.SlavDefenseThreeKnightsVariation_D15:
            fenArray = fenSlavDefenseThreeKnightsVariation_D15;
            break;
        case FenArrayType.QueenPawnGameQueenFianchetto_A40:
            fenArray = fenQueenPawnGameQueenFianchetto_A40;
            break;
        case FenArrayType.NimzoIndianDefenseGeneral_E20:
            fenArray = fenNimzoIndianDefenseGeneral_E20;
            break;
        case FenArrayType.SemiSlavDefenseAntiMoscowGambit_D44:
            fenArray = fenSemiSlavDefenseAntiMoscowGambit_D44;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLine_A22:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLine_A22;
            break;
        case FenArrayType.KingsIndianAttackKeresVariation_A07:
            fenArray = fenKingsIndianAttackKeresVariation_A07;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationPannoFormation_E83:
            fenArray = fenKingsIndianDefenseSaemischVariationPannoFormation_E83;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationFianchettoVariation_A34:
            fenArray = fenEnglishOpeningSymmetricalVariationFianchettoVariation_A34;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSpasskyVariation_D87:
            fenArray = fenGruenfeldDefenseExchangeVariationSpasskyVariation_D87;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseRubinsteinVariation_D27:
            fenArray = fenQueensGambitAcceptedClassicalDefenseRubinsteinVariation_D27;
            break;
        case FenArrayType.DutchDefenseStonewallVariationModernVariation_A90:
            fenArray = fenDutchDefenseStonewallVariationModernVariation_A90;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseHedgehogSystem_A17:
            fenArray = fenEnglishOpeningAngloIndianDefenseHedgehogSystem_A17;
            break;
        case FenArrayType.QueensIndianDefenseKasparovVariation_E12:
            fenArray = fenQueensIndianDefenseKasparovVariation_E12;
            break;
        case FenArrayType.SicilianDefenseSozinAttackMainLine_B89:
            fenArray = fenSicilianDefenseSozinAttackMainLine_B89;
            break;
        case FenArrayType.SpanishGameClassicalVariation_C64:
            fenArray = fenSpanishGameClassicalVariation_C64;
            break;
        case FenArrayType.LionDefenseLionsJaw_B07:
            fenArray = fenLionDefenseLionsJaw_B07;
            break;
        case FenArrayType.ScandinavianDefensePortugueseVariation_B01:
            fenArray = fenScandinavianDefensePortugueseVariation_B01;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_1_A18:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_1_A18;
            break;
        case FenArrayType.BenkoGambitGeneral_A57:
            fenArray = fenBenkoGambitGeneral_A57;
            break;
        case FenArrayType.BenoniDefenseHromodkaSystem_A57:
            fenArray = fenBenoniDefenseHromodkaSystem_A57;
            break;
        case FenArrayType.NimzoIndianDefenseFischerVariation_E44:
            fenArray = fenNimzoIndianDefenseFischerVariation_E44;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationModernSystem_E97:
            fenArray = fenKingsIndianDefenseOrthodoxVariationModernSystem_E97;
            break;
        case FenArrayType.QueensGambitAcceptedJanowskiLarsenVariation_D25:
            fenArray = fenQueensGambitAcceptedJanowskiLarsenVariation_D25;
            break;
        case FenArrayType.SlavDefenseSchlechterVariation_D15:
            fenArray = fenSlavDefenseSchlechterVariation_D15;
            break;
        case FenArrayType.QueensGambitDeclinedSemiTarraschDefense_D40:
            fenArray = fenQueensGambitDeclinedSemiTarraschDefense_D40;
            break;
        case FenArrayType.SemiSlavDefenseAcceleratedMeranVariation_D45:
            fenArray = fenSemiSlavDefenseAcceleratedMeranVariation_D45;
            break;
        case FenArrayType.SicilianDefenseBoleslavskyVariation_B59:
            fenArray = fenSicilianDefenseBoleslavskyVariation_B59;
            break;
        case FenArrayType.NimzoIndianDefenseHuebnerVariation_E41:
            fenArray = fenNimzoIndianDefenseHuebnerVariation_E41;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationPoisonedPawnVariationMainLine_C18:
            fenArray =
                fenFrenchDefenseWinawerVariationPoisonedPawnVariationMainLine_C18;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationModernVariation_1_B83:
            fenArray = fenSicilianDefenseScheveningenVariationModernVariation_1_B83;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationEnglishAttackAntiEnglish_B90:
            fenArray = fenSicilianDefenseNajdorfVariationEnglishAttackAntiEnglish_B90;
            break;
        case FenArrayType.NimzoIndianDefenseRagozinVariation_E20:
            fenArray = fenNimzoIndianDefenseRagozinVariation_E20;
            break;
        case FenArrayType.SicilianDefenseNimzowitschVariationClosedVariation_B29:
            fenArray = fenSicilianDefenseNimzowitschVariationClosedVariation_B29;
            break;
        case FenArrayType.QueensGambitAcceptedCentralVariationMcDonnellDefense_D20:
            fenArray = fenQueensGambitAcceptedCentralVariationMcDonnellDefense_D20;
            break;
        case FenArrayType.SicilianDefenseHyperacceleratedPterodactyl_B27:
            fenArray = fenSicilianDefenseHyperacceleratedPterodactyl_B27;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationBurilleVariation_D94:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationBurilleVariation_D94;
            break;
        case FenArrayType.QueensGambitDeclinedSemiTarraschDefenseExchangeVariation_D41:
            fenArray =
                fenQueensGambitDeclinedSemiTarraschDefenseExchangeVariation_D41;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePolerioDefenseBishopCheckline_C58:
            fenArray =
                fenItalianGameTwoKnightsDefensePolerioDefenseBishopCheckline_C58;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonGeneral_B36:
            fenArray = fenSicilianDefenseAcceleratedDragonGeneral_B36;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationClassicalVariation_B63:
            fenArray = fenSicilianDefenseRichterRauzerVariationClassicalVariation_B63;
            break;
        case FenArrayType.NimzoLarsenAttackGeneral_A01:
            fenArray = fenNimzoLarsenAttackGeneral_A01;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariation_1_C02:
            fenArray = fenFrenchDefenseAdvanceVariation_1_C02;
            break;
        case FenArrayType.CaroKannDefensePanovAttackModernDefenseMiesesLine_B13:
            fenArray = fenCaroKannDefensePanovAttackModernDefenseMiesesLine_B13;
            break;
        case FenArrayType.QueensIndianDefenseCapablancaVariation_E16:
            fenArray = fenQueensIndianDefenseCapablancaVariation_E16;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationGeneral_B60:
            fenArray = fenSicilianDefenseRichterRauzerVariationGeneral_B60;
            break;
        case FenArrayType.RussianGameCozioLaskerAttack_C42:
            fenArray = fenRussianGameCozioLaskerAttack_C42;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationNormalSystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationNormalSystem_B28;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationMainLine_E12:
            fenArray = fenQueensIndianDefenseKasparovPetrosianVariationMainLine_E12;
            break;
        case FenArrayType.ZukertortOpeningQueensideFianchettoVariation_A04:
            fenArray = fenZukertortOpeningQueensideFianchettoVariation_A04;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariationTraditionalVariationMainLine_E19:
            fenArray =
                fenQueensIndianDefenseClassicalVariationTraditionalVariationMainLine_E19;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationBotvinnikLine_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationBotvinnikLine_A28;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationWadeVariation_D47:
            fenArray = fenSemiSlavDefenseMeranVariationWadeVariation_D47;
            break;
        case FenArrayType.CatalanOpeningClosedVariationTraditionalVariation_E09:
            fenArray = fenCatalanOpeningClosedVariationTraditionalVariation_E09;
            break;
        case FenArrayType.QueenPawnGameTorreAttackGruenfeldVariationMainLine_D03:
            fenArray = fenQueenPawnGameTorreAttackGruenfeldVariationMainLine_D03;
            break;
        case FenArrayType.SpanishGameMorphyDefenseNeoArchangelskVariation_C78:
            fenArray = fenSpanishGameMorphyDefenseNeoArchangelskVariation_C78;
            break;
        case FenArrayType.SicilianDefenseBowdlerAttack_B20:
            fenArray = fenSicilianDefenseBowdlerAttack_B20;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariationNimzowitschAttack_E15:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationNimzowitschVariationNimzowitschAttack_E15;
            break;
        case FenArrayType.NimzoIndianDefenseHuebnerVariationRubinsteinVariation_E42:
            fenArray = fenNimzoIndianDefenseHuebnerVariationRubinsteinVariation_E42;
            break;
        case FenArrayType.IndianGamePseudoBenko_A46:
            fenArray = fenIndianGamePseudoBenko_A46;
            break;
        case FenArrayType.SpanishGameExchangeVariationGeneral_C68:
            fenArray = fenSpanishGameExchangeVariationGeneral_C68;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackFianchettoDefense_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackFianchettoDefense_D37;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariation_E46:
            fenArray = fenNimzoIndianDefenseNormalVariation_E46;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationBobotsovKorchnoiPetrosianVariation_E81:
            fenArray =
                fenKingsIndianDefenseSaemischVariationBobotsovKorchnoiPetrosianVariation_E81;
            break;
        case FenArrayType.DutchDefenseClassicalVariation_A90:
            fenArray = fenDutchDefenseClassicalVariation_A90;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseQueensIndianFormation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A15;
            break;
        case FenArrayType.ThreeKnightsOpeningGeneral_C46:
            fenArray = fenThreeKnightsOpeningGeneral_C46;
            break;
        case FenArrayType.FourKnightsGameItalianVariation_C46:
            fenArray = fenFourKnightsGameItalianVariation_C46;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationPoisonedPawnVariation_B97:
            fenArray = fenSicilianDefenseNajdorfVariationPoisonedPawnVariation_B97;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationRubinsteinVariation_C48:
            fenArray = fenFourKnightsGameSpanishVariationRubinsteinVariation_C48;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationLesserSimaginSpassky_E62:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationLesserSimaginSpassky_E62;
            break;
        case FenArrayType.BenkoGambitAcceptedKingWalkVariation_A59:
            fenArray = fenBenkoGambitAcceptedKingWalkVariation_A59;
            break;
        case FenArrayType.SpanishGameMorphyDefenseCozioDefense_C70:
            fenArray = fenSpanishGameMorphyDefenseCozioDefense_C70;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariationTraditionalVariationNimowitschLine_E18:
            fenArray =
                fenQueensIndianDefenseClassicalVariationTraditionalVariationNimowitschLine_E18;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationRubinsteinVariation_A34:
            fenArray = fenEnglishOpeningSymmetricalVariationRubinsteinVariation_A34;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationModernVariation_B61:
            fenArray = fenSicilianDefenseRichterRauzerVariationModernVariation_B61;
            break;
        case FenArrayType.SicilianDefenseModernVariations_B54:
            fenArray = fenSicilianDefenseModernVariations_B54;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambit_C53:
            fenArray = fenItalianGameClassicalVariationGrecoGambit_C53;
            break;
        case FenArrayType.QueenPawnGameTorreAttackGossipVariation_D03:
            fenArray = fenQueenPawnGameTorreAttackGossipVariation_D03;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationLputianVariation_C02:
            fenArray = fenFrenchDefenseAdvanceVariationLputianVariation_C02;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationChistyakovDefenseModernLine_C07:
            fenArray =
                fenFrenchDefenseTarraschVariationChistyakovDefenseModernLine_C07;
            break;
        case FenArrayType.SpanishGameOpenVariationsBernsteinVariation_C80:
            fenArray = fenSpanishGameOpenVariationsBernsteinVariation_C80;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackPanovVariation_B76:
            fenArray =
                fenSicilianDefenseDragonVariationYugoslavAttackPanovVariation_B76;
            break;
        case FenArrayType.SemiSlavDefenseNoteboomVariation_D31:
            fenArray = fenSemiSlavDefenseNoteboomVariation_D31;
            break;
        case FenArrayType.BenoniDefenseKnightsTourVariation_A61:
            fenArray = fenBenoniDefenseKnightsTourVariation_A61;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariationAccelerated_E24:
            fenArray = fenNimzoIndianDefenseSaemischVariationAccelerated_E24;
            break;
        case FenArrayType.BogoIndianDefenseExchangeVariation_E11:
            fenArray = fenBogoIndianDefenseExchangeVariation_E11;
            break;
        case FenArrayType.ZukertortOpeningQuietsystem_A04:
            fenArray = fenZukertortOpeningQuietsystem_A04;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationFullSymmetryLine_A38:
            fenArray = fenEnglishOpeningSymmetricalVariationFullSymmetryLine_A38;
            break;
        case FenArrayType.SicilianDefenseSozinAttackLeonhardtVariation_B88:
            fenArray = fenSicilianDefenseSozinAttackLeonhardtVariation_B88;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationGeneral_A70:
            fenArray = fenBenoniDefenseClassicalVariationGeneral_A70;
            break;
        case FenArrayType.ItalianGameScotchGambitAnderssenAttack_C56:
            fenArray = fenItalianGameScotchGambitAnderssenAttack_C56;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationLarsenDefense_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationLarsenDefense_E62;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackDynamicAttack_E76:
            fenArray = fenKingsIndianDefenseFourPawnsAttackDynamicAttack_E76;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationClassicalVariationGeneral_B83:
            fenArray =
                fenSicilianDefenseScheveningenVariationClassicalVariationGeneral_B83;
            break;
        case FenArrayType.RussianGameClassicalAttackStauntonVariation_C42:
            fenArray = fenRussianGameClassicalAttackStauntonVariation_C42;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemNeoClasssicalLine_E99:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationClassicalSystemNeoClasssicalLine_E99;
            break;
        case FenArrayType.SicilianDefenseOldSicilianOpen_B32:
            fenArray = fenSicilianDefenseOldSicilianOpen_B32;
            break;
        case FenArrayType.RussianGameClassicalAttack_C42:
            fenArray = fenRussianGameClassicalAttack_C42;
            break;
        case FenArrayType.ScandinavianDefenseClassicalVariation_B01:
            fenArray = fenScandinavianDefenseClassicalVariation_B01;
            break;
        case FenArrayType.SlavDefenseCzechVariationClassicalSystemMainLine_D19:
            fenArray = fenSlavDefenseCzechVariationClassicalSystemMainLine_D19;
            break;
        case FenArrayType.TarraschDefenseTwoKnightsVariation_D32:
            fenArray = fenTarraschDefenseTwoKnightsVariation_D32;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseCatalanDefenseSemiSlavDefense_A13:
            fenArray =
                fenEnglishOpeningAgincourtDefenseCatalanDefenseSemiSlavDefense_A13;
            break;
        case FenArrayType.KingsIndianDefenseSmyslovVariation_E61:
            fenArray = fenKingsIndianDefenseSmyslovVariation_E61;
            break;
        case FenArrayType.SicilianDefenseClosedVariationChameleonVariation_B23:
            fenArray = fenSicilianDefenseClosedVariationChameleonVariation_B23;
            break;
        case FenArrayType.QueenPawnGameStonewallAttack_D00:
            fenArray = fenQueenPawnGameStonewallAttack_D00;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationHungarianVariation_D93:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationHungarianVariation_D93;
            break;
        case FenArrayType.SicilianDefenseMengariniVariation_B20:
            fenArray = fenSicilianDefenseMengariniVariation_B20;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationLisitsynBondarevskyGambit_E39:
            fenArray =
                fenNimzoIndianDefenseClassicalVariationLisitsynBondarevskyGambit_E39;
            break;
        case FenArrayType.ItalianGameGeneral_C50:
            fenArray = fenItalianGameGeneral_C50;
            break;
        case FenArrayType.DutchDefenseFianchettoAttack_A81:
            fenArray = fenDutchDefenseFianchettoAttack_A81;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationNormalVariation_A34:
            fenArray = fenEnglishOpeningSymmetricalVariationNormalVariation_A34;
            break;
        case FenArrayType.SlavIndian_A50:
            fenArray = fenSlavIndian_A50;
            break;
        case FenArrayType.CaroKannDefenseMainLine_B15:
            fenArray = fenCaroKannDefenseMainLine_B15;
            break;
        case FenArrayType.AlekhineDefenseModernVariationLarsenVariationMilesLine_B04:
            fenArray = fenAlekhineDefenseModernVariationLarsenVariationMilesLine_B04;
            break;
        case FenArrayType.SpanishGameBirdVariation_C61:
            fenArray = fenSpanishGameBirdVariation_C61;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationBayonetAttackSokolovsLine_E97:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationBayonetAttackSokolovsLine_E97;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariation_2_C02:
            fenArray = fenFrenchDefenseAdvanceVariation_2_C02;
            break;
        case FenArrayType.PonzianiOpeningJaenischCounterattack_C44:
            fenArray = fenPonzianiOpeningJaenischCounterattack_C44;
            break;
        case FenArrayType.ScandinavianDefenseRichterVariation_B01:
            fenArray = fenScandinavianDefenseRichterVariation_B01;
            break;
        case FenArrayType.ColleSystemTraditionalColle_D05:
            fenArray = fenColleSystemTraditionalColle_D05;
            break;
        case FenArrayType.QueensGambitDeclinedTarraschDefensePseudoTarrasch_D30:
            fenArray = fenQueensGambitDeclinedTarraschDefensePseudoTarrasch_D30;
            break;
        case FenArrayType.DutchDefenseClassicalVariation_A84:
            fenArray = fenDutchDefenseClassicalVariation_A84;
            break;
        case FenArrayType.SicilianDefenseClosedVariationKorchnoiDefense_B23:
            fenArray = fenSicilianDefenseClosedVariationKorchnoiDefense_B23;
            break;
        case FenArrayType.MikenasDefense_A40:
            fenArray = fenMikenasDefense_A40;
            break;
        case FenArrayType.RubinsteinOpening_D05:
            fenArray = fenRubinsteinOpening_D05;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackMainLine_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackMainLine_D37;
            break;
        case FenArrayType.BenoniDefenseOldBenoniPawnThrust_A44:
            fenArray = fenBenoniDefenseOldBenoniPawnThrust_A44;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationYatesDefense_E83:
            fenArray = fenKingsIndianDefenseSaemischVariationYatesDefense_E83;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_2_A18:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_2_A18;
            break;
        case FenArrayType.RussianGameGeneral_C42:
            fenArray = fenRussianGameGeneral_C42;
            break;
        case FenArrayType.DutchDefenseLeningradVariation_A87:
            fenArray = fenDutchDefenseLeningradVariation_A87;
            break;
        case FenArrayType.NimzoIndianDefenseNormalLine_E40:
            fenArray = fenNimzoIndianDefenseNormalLine_E40;
            break;
        case FenArrayType.SpanishGameClosedVariationsKeresDefense_C96:
            fenArray = fenSpanishGameClosedVariationsKeresDefense_C96;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationStoltzAttack_B22:
            fenArray = fenSicilianDefenseAlapinVariationStoltzAttack_B22;
            break;
        case FenArrayType.NeoGruenfeldDefenseDelayedExchangeVariation_D76:
            fenArray = fenNeoGruenfeldDefenseDelayedExchangeVariation_D76;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackNormalAttack_E77:
            fenArray = fenKingsIndianDefenseFourPawnsAttackNormalAttack_E77;
            break;
        case FenArrayType.NimzoIndianDefenseRomanishinVariation_1_E20:
            fenArray = fenNimzoIndianDefenseRomanishinVariation_1_E20;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationPositionalDefenseClosedLine_E94:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationPositionalDefenseClosedLine_E94;
            break;
        case FenArrayType.SicilianDefenseNimzowitschVariationAdvanceVariation_B29:
            fenArray = fenSicilianDefenseNimzowitschVariationAdvanceVariation_B29;
            break;
        case FenArrayType.StGeorgeDefenseGeneral_B00:
            fenArray = fenStGeorgeDefenseGeneral_B00;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationHungarianAttack_D92:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationHungarianAttack_D92;
            break;
        case FenArrayType.SpanishGameMorphyDefenseSteinitzDeferred_C79:
            fenArray = fenSpanishGameMorphyDefenseSteinitzDeferred_C79;
            break;
        case FenArrayType.QueensGambitAcceptedCentralVariationAlekhineSystem_D20:
            fenArray = fenQueensGambitAcceptedCentralVariationAlekhineSystem_D20;
            break;
        case FenArrayType.ScotchGameScotchGambit_C44:
            fenArray = fenScotchGameScotchGambit_C44;
            break;
        case FenArrayType.SicilianDefenseBoleslavskyVariationGeneralVariation_B58:
            fenArray = fenSicilianDefenseBoleslavskyVariationGeneralVariation_B58;
            break;
        case FenArrayType.PircDefenseClassicalVariationQuietSystemParmaDefense_B08:
            fenArray = fenPircDefenseClassicalVariationQuietSystemParmaDefense_B08;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBernsteinDefenseExceptGligoricSystem_E53:
            fenArray =
                fenNimzoIndianDefenseNormalVariationBernsteinDefenseExceptGligoricSystem_E53;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationGeneral_E15:
            fenArray = fenQueensIndianDefenseFianchettoVariationGeneral_E15;
            break;
        case FenArrayType.FrenchDefenseRubinsteinVariation_C10:
            fenArray = fenFrenchDefenseRubinsteinVariation_C10;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttack_D82:
            fenArray = fenGruenfeldDefenseBrinckmannAttack_D82;
            break;
        case FenArrayType.SemiSlavDefenseStoltzVariationShabalovAttack_D45:
            fenArray = fenSemiSlavDefenseStoltzVariationShabalovAttack_D45;
            break;
        case FenArrayType.BenoniDefenseFianchettoVariationHastingsDefenseMainLine_A64:
            fenArray = fenBenoniDefenseFianchettoVariationHastingsDefenseMainLine_A64;
            break;
        case FenArrayType.HungarianOpeningSlavFormation_A00:
            fenArray = fenHungarianOpeningSlavFormation_A00;
            break;
        case FenArrayType.BishopsOpeningViennaHybridSpielmannAttack_C26:
            fenArray = fenBishopsOpeningViennaHybridSpielmannAttack_C26;
            break;
        case FenArrayType.FrenchDefenseWingGambit_C00:
            fenArray = fenFrenchDefenseWingGambit_C00;
            break;
        case FenArrayType.SemiSlavDefenseQuietVariation_1_D30:
            fenArray = fenSemiSlavDefenseQuietVariation_1_D30;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_2_C18:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_2_C18;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationPetrosianVariation_C16:
            fenArray = fenFrenchDefenseWinawerVariationPetrosianVariation_C16;
            break;
        case FenArrayType.ScotchGameMalaniukVariation_C45:
            fenArray = fenScotchGameMalaniukVariation_C45;
            break;
        case FenArrayType.DutchDefenseModernStonewallVariation_A97:
            fenArray = fenDutchDefenseModernStonewallVariation_A97;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationKeresVariation_A23:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationKeresVariation_A23;
            break;
        case FenArrayType.NimzowitschDefenseDeclinedVariation_B00:
            fenArray = fenNimzowitschDefenseDeclinedVariation_B00;
            break;
        case FenArrayType.QueenPawnGameColleSystemAntiColle_D04:
            fenArray = fenQueenPawnGameColleSystemAntiColle_D04;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationModernDefense_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariationModernDefense_E73;
            break;
        case FenArrayType.HungarianOpeningSicilianInvitation_A00:
            fenArray = fenHungarianOpeningSicilianInvitation_A00;
            break;
        case FenArrayType.SlavDefenseBreyerVariation_D11:
            fenArray = fenSlavDefenseBreyerVariation_D11;
            break;
        case FenArrayType.FrenchDefenseSteinitzVariation_C11:
            fenArray = fenFrenchDefenseSteinitzVariation_C11;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationKramnikVariation_E17:
            fenArray = fenQueensIndianDefenseFianchettoVariationKramnikVariation_E17;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseRubinsteinVariation_D61:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseRubinsteinVariation_D61;
            break;
        case FenArrayType.AlekhineDefenseSaemischAttack_B02:
            fenArray = fenAlekhineDefenseSaemischAttack_B02;
            break;
        case FenArrayType.FrenchDefenseWinawerVariation_C15:
            fenArray = fenFrenchDefenseWinawerVariation_C15;
            break;
        case FenArrayType.SpanishGameExchangeVariationAlapinGambit_C69:
            fenArray = fenSpanishGameExchangeVariationAlapinGambit_C69;
            break;
        case FenArrayType.ColleSystem_2_D05:
            fenArray = fenColleSystem_2_D05;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationAdvanceVariation_B00:
            fenArray = fenNimzowitschDefenseScandinavianVariationAdvanceVariation_B00;
            break;
        case FenArrayType.FourKnightsGameGunsbergVariation_C46:
            fenArray = fenFourKnightsGameGunsbergVariation_C46;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationModernVariationGeneral_B83:
            fenArray =
                fenSicilianDefenseScheveningenVariationModernVariationGeneral_B83;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationLaskerVariation_1_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationLaskerVariation_1_C12;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationFlexibleDefense_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariationFlexibleDefense_E73;
            break;
        case FenArrayType.SicilianDefenseFourKnightsVariationCobraVariation_B45:
            fenArray = fenSicilianDefenseFourKnightsVariationCobraVariation_B45;
            break;
        case FenArrayType.MiesesOpeningGeneral_A00:
            fenArray = fenMiesesOpeningGeneral_A00;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationKasparovAttack_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationKasparovAttack_E12;
            break;
        case FenArrayType.EnglishDefenseGeneral_A40:
            fenArray = fenEnglishDefenseGeneral_A40;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefense_D07:
            fenArray = fenQueensGambitRefusedChigorinDefense_D07;
            break;
        case FenArrayType.FrenchDefenseHorwitzAttackPapaTiculatGambit_C00:
            fenArray = fenFrenchDefenseHorwitzAttackPapaTiculatGambit_C00;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeclinedPushVariation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitDeclinedPushVariation_B21;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationDuchampVariation_A38:
            fenArray = fenEnglishOpeningSymmetricalVariationDuchampVariation_A38;
            break;
        case FenArrayType.SicilianDefenseClassicalVariationFianchettoVariation_B58:
            fenArray = fenSicilianDefenseClassicalVariationFianchettoVariation_B58;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationModernVariationKasparovAttack_B17:
            fenArray =
                fenCaroKannDefenseKarpovVariationModernVariationKasparovAttack_B17;
            break;
        case FenArrayType.SicilianDefenseVelimirovicAttack_B89:
            fenArray = fenSicilianDefenseVelimirovicAttack_B89;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackTwoKnightsDefense_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackTwoKnightsDefense_D37;
            break;
        case FenArrayType.SpanishGameMorphyDefenseClassicalDefenseDeferred_C70:
            fenArray = fenSpanishGameMorphyDefenseClassicalDefenseDeferred_C70;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationClosedVariation_E87:
            fenArray = fenKingsIndianDefenseSaemischVariationClosedVariation_E87;
            break;
        case FenArrayType.QueensGambitAcceptedGeneral_D20:
            fenArray = fenQueensGambitAcceptedGeneral_D20;
            break;
        case FenArrayType.ItalianGameGiuocoPianissimo_C50:
            fenArray = fenItalianGameGiuocoPianissimo_C50;
            break;
        case FenArrayType.CenterGameBergerVariation_C22:
            fenArray = fenCenterGameBergerVariation_C22;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationMilnerBarryVariation_E33:
            fenArray =
                fenNimzoIndianDefenseClassicalVariationMilnerBarryVariation_E33;
            break;
        case FenArrayType.SicilianDefenseDragonVariationFianchettoVariation_B70:
            fenArray = fenSicilianDefenseDragonVariationFianchettoVariation_B70;
            break;
        case FenArrayType.KingsIndianDefenseNormalVariationStandardDevelopment_E73:
            fenArray = fenKingsIndianDefenseNormalVariationStandardDevelopment_E73;
            break;
        case FenArrayType.SpanishGameExchangeVariationKeresVariation_C68:
            fenArray = fenSpanishGameExchangeVariationKeresVariation_C68;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationKarlsbadVariation_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationKarlsbadVariation_E62;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackDutchSystem_A80:
            fenArray = fenQueenPawnGameVeresovAtackDutchSystem_A80;
            break;
        case FenArrayType.QueensGambitDeclinedModernKnightDefense_1_D51:
            fenArray = fenQueensGambitDeclinedModernKnightDefense_1_D51;
            break;
        case FenArrayType.CatalanOpeningClosedVariation_E08:
            fenArray = fenCatalanOpeningClosedVariation_E08;
            break;
        case FenArrayType.TarraschDefenseScharaGambit_D32:
            fenArray = fenTarraschDefenseScharaGambit_D32;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseWimpySystem_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseWimpySystem_A13;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationYugoslavVariationExchangeLine_E66:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationYugoslavVariationExchangeLine_E66;
            break;
        case FenArrayType.BenoniDefenseOldBenoni_A43:
            fenArray = fenBenoniDefenseOldBenoni_A43;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationModernMainLine_B17:
            fenArray = fenCaroKannDefenseKarpovVariationModernMainLine_B17;
            break;
        case FenArrayType.ScandinavianDefenseModernVariationGipslisVariation_B01:
            fenArray = fenScandinavianDefenseModernVariationGipslisVariation_B01;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationRetreatVariationArmenianLine_C18:
            fenArray =
                fenFrenchDefenseWinawerVariationRetreatVariationArmenianLine_C18;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseMainLine_1_D63:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseMainLine_1_D63;
            break;
        case FenArrayType.PircDefense150Attack_B07:
            fenArray = fenPircDefense150Attack_B07;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseOldIndianFormation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseOldIndianFormation_A15;
            break;
        case FenArrayType.NimzoLarsenAttackEnglishVariation_A01:
            fenArray = fenNimzoLarsenAttackEnglishVariation_A01;
            break;
        case FenArrayType.DutchDefenseStauntonGambitGeneralVariation_A83:
            fenArray = fenDutchDefenseStauntonGambitGeneralVariation_A83;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariationFlohrVariation_B18:
            fenArray = fenCaroKannDefenseClassicalVariationFlohrVariation_B18;
            break;
        case FenArrayType.KingsGambitAcceptedAbbaziaDefense_C36:
            fenArray = fenKingsGambitAcceptedAbbaziaDefense_C36;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystemExchangeatc4_E54:
            fenArray =
                fenNimzoIndianDefenseNormalVariationGligoricSystemExchangeatc4_E54;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBotvinnikSystem_E49:
            fenArray = fenNimzoIndianDefenseNormalVariationBotvinnikSystem_E49;
            break;
        case FenArrayType.QueensIndianDefensePetrosianVariationFaragoDefense_E11:
            fenArray = fenQueensIndianDefensePetrosianVariationFaragoDefense_E11;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationClassicalVariation_B65:
            fenArray = fenSicilianDefenseRichterRauzerVariationClassicalVariation_B65;
            break;
        case FenArrayType.SpanishGameMorphyDefenseTarraschVariation_C77:
            fenArray = fenSpanishGameMorphyDefenseTarraschVariation_C77;
            break;
        case FenArrayType.BenkoGambitAcceptedDlugyVariation_A57:
            fenArray = fenBenkoGambitAcceptedDlugyVariation_A57;
            break;
        case FenArrayType.OldIndianDefenseTwoKnightsVariation_A54:
            fenArray = fenOldIndianDefenseTwoKnightsVariation_A54;
            break;
        case FenArrayType.NeoGrunfeldDefenseGoglidzeAttack_D70:
            fenArray = fenNeoGrunfeldDefenseGoglidzeAttack_D70;
            break;
        case FenArrayType.ZukertortOpeningBlackMustangDefense_A04:
            fenArray = fenZukertortOpeningBlackMustangDefense_A04;
            break;
        case FenArrayType.TrompowskyAttackRaptorVariation_A45:
            fenArray = fenTrompowskyAttackRaptorVariation_A45;
            break;
        case FenArrayType.QueenPawnGameBarryAttackGruenfeldVariation_D02:
            fenArray = fenQueenPawnGameBarryAttackGruenfeldVariation_D02;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationClosedSystemFullSymmetry_A26:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationClosedSystemFullSymmetry_A26;
            break;
        case FenArrayType.VanGeetOpeningCaroKannVariation_A00:
            fenArray = fenVanGeetOpeningCaroKannVariation_A00;
            break;
        case FenArrayType.ModernDefenseGeneral_A41:
            fenArray = fenModernDefenseGeneral_A41;
            break;
        case FenArrayType.QueensGambitAcceptedNormalVariationTraditionalSystem_D26:
            fenArray = fenQueensGambitAcceptedNormalVariationTraditionalSystem_D26;
            break;
        case FenArrayType.NeoGruenfeldDefenseDelayedExchangeVariation_D74:
            fenArray = fenNeoGruenfeldDefenseDelayedExchangeVariation_D74;
            break;
        case FenArrayType.AlekhineDefenseNormalVariation_B03:
            fenArray = fenAlekhineDefenseNormalVariation_B03;
            break;
        case FenArrayType.IndianGameAntiGrunfeldAlekhineVariation_D70:
            fenArray = fenIndianGameAntiGrunfeldAlekhineVariation_D70;
            break;
        case FenArrayType.SemiSlavDefenseBotvinnikSystem_D44:
            fenArray = fenSemiSlavDefenseBotvinnikSystem_D44;
            break;
        case FenArrayType.SpanishGameExchangeVariationBronsteinVariation_C69:
            fenArray = fenSpanishGameExchangeVariationBronsteinVariation_C69;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationYugoslavVariationAdvanceLine_E66:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationYugoslavVariationAdvanceLine_E66;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_1_A16:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_1_A16;
            break;
        case FenArrayType.QueensGambitDeclinedLaskerDefense_D56:
            fenArray = fenQueensGambitDeclinedLaskerDefense_D56;
            break;
        case FenArrayType.CaroKannDefenseAcceleratedPanovAttackOpenVariation_B10:
            fenArray = fenCaroKannDefenseAcceleratedPanovAttackOpenVariation_B10;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationSimaginVariation_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationSimaginVariation_E62;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitNormalLine_D08:
            fenArray = fenQueensGambitRefusedAlbinCountergambitNormalLine_D08;
            break;
        case FenArrayType.ModernDefenseThreePawnsAttack_B06:
            fenArray = fenModernDefenseThreePawnsAttack_B06;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationSymmetricalVariation_1_C49:
            fenArray = fenFourKnightsGameSpanishVariationSymmetricalVariation_1_C49;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationClassicalVariation_C48:
            fenArray = fenFourKnightsGameSpanishVariationClassicalVariation_C48;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedScheveningenFormation_B21:
            fenArray =
                fenSicilianDefenseSmithMorraGambitAcceptedScheveningenFormation_B21;
            break;
        case FenArrayType.SpanishGameBerlinDefenselHermetVariation_C67:
            fenArray = fenSpanishGameBerlinDefenselHermetVariation_C67;
            break;
        case FenArrayType.QueensGambitDeclinedTartakowerDefenseMakogonovExchangeVariation_D59:
            fenArray =
                fenQueensGambitDeclinedTartakowerDefenseMakogonovExchangeVariation_D59;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationBirdVariation_B33:
            fenArray = fenSicilianDefenseLaskerPelikanVariationBirdVariation_B33;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationFlexibleLine_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationFlexibleLine_A28;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackBelezkyLine_B76:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttackBelezkyLine_B76;
            break;
        case FenArrayType.BenoniDefenseBenoniIndianDefense_A43:
            fenArray = fenBenoniDefenseBenoniIndianDefense_A43;
            break;
        case FenArrayType.EnglishOpeningGolombekDefense_A16:
            fenArray = fenEnglishOpeningGolombekDefense_A16;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariation_1_B72:
            fenArray = fenSicilianDefenseDragonVariationClassicalVariation_1_B72;
            break;
        case FenArrayType.SicilianDefenseSozinAttackGeneralVariation_B86:
            fenArray = fenSicilianDefenseSozinAttackGeneralVariation_B86;
            break;
        case FenArrayType.CenterGamePaulsenAttackVariation_C22:
            fenArray = fenCenterGamePaulsenAttackVariation_C22;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationOpocenskyVariationModernLine_B92:
            fenArray =
                fenSicilianDefenseNajdorfVariationOpocenskyVariationModernLine_B92;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationWinckelmannRiemerGambit_C15:
            fenArray = fenFrenchDefenseWinawerVariationWinckelmannRiemerGambit_C15;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseSteinitzVariationDevelopmentVariation_D26:
            fenArray =
                fenQueensGambitAcceptedClassicalDefenseSteinitzVariationDevelopmentVariation_D26;
            break;
        case FenArrayType.AlekhineDefenseFourPawnsAttackMainLine_B03:
            fenArray = fenAlekhineDefenseFourPawnsAttackMainLine_B03;
            break;
        case FenArrayType.ViennaGamePaulsenVariation_C25:
            fenArray = fenViennaGamePaulsenVariation_C25;
            break;
        case FenArrayType.RussianGameFrenchAttack_C42:
            fenArray = fenRussianGameFrenchAttack_C42;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationMarcoDefense_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationMarcoDefense_E12;
            break;
        case FenArrayType.NeoGruenfeldDefenseMiscwith5Nf3_D73:
            fenArray = fenNeoGruenfeldDefenseMiscwith5Nf3_D73;
            break;
        case FenArrayType.SlavDefenseCzechVariationBledAttack_D17:
            fenArray = fenSlavDefenseCzechVariationBledAttack_D17;
            break;
        case FenArrayType.SpanishGameExchangeVariationKingsBishopVariation_C68:
            fenArray = fenSpanishGameExchangeVariationKingsBishopVariation_C68;
            break;
        case FenArrayType.SicilianDefenseKupreichikVariation_B56:
            fenArray = fenSicilianDefenseKupreichikVariation_B56;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBernsteinDefense_E59:
            fenArray = fenNimzoIndianDefenseNormalVariationBernsteinDefense_E59;
            break;
        case FenArrayType.OldIndianDefenseUkrainianVariation_A54:
            fenArray = fenOldIndianDefenseUkrainianVariation_A54;
            break;
        case FenArrayType.FrenchDefenseGeneral_C00:
            fenArray = fenFrenchDefenseGeneral_C00;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationFreakAttack_B90:
            fenArray = fenSicilianDefenseNajdorfVariationFreakAttack_B90;
            break;
        case FenArrayType.SemiSlavDefenseNoteboomVariationAbrahamsVariation_D31:
            fenArray = fenSemiSlavDefenseNoteboomVariationAbrahamsVariation_D31;
            break;
        case FenArrayType.PircDefenseAustrianAttack_1_B09:
            fenArray = fenPircDefenseAustrianAttack_1_B09;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseBotvinnikVariation_D60:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseBotvinnikVariation_D60;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationClassicalVariation_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationClassicalVariation_E12;
            break;
        case FenArrayType.SlavDefenseSoultanbeieffVariation_D16:
            fenArray = fenSlavDefenseSoultanbeieffVariation_D16;
            break;
        case FenArrayType.QueensIndianDefenseYatesVariation_E16:
            fenArray = fenQueensIndianDefenseYatesVariation_E16;
            break;
        case FenArrayType.RetiOpeningRetiGambit_A09:
            fenArray = fenRetiOpeningRetiGambit_A09;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationPoisonedPawnAccepted_B97:
            fenArray = fenSicilianDefenseNajdorfVariationPoisonedPawnAccepted_B97;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationFianchettoVariation_B80:
            fenArray = fenSicilianDefenseScheveningenVariationFianchettoVariation_B80;
            break;
        case FenArrayType.SemiSlavDefenseMarshallGambitMainLine_D31:
            fenArray = fenSemiSlavDefenseMarshallGambitMainLine_D31;
            break;
        case FenArrayType.SaragossaOpeningGeneral_A00:
            fenArray = fenSaragossaOpeningGeneral_A00;
            break;
        case FenArrayType.PhilidorDefenseHanhamVariation_C41:
            fenArray = fenPhilidorDefenseHanhamVariation_C41;
            break;
        case FenArrayType.ItalianGameClassicalVariationGeneral_C53:
            fenArray = fenItalianGameClassicalVariationGeneral_C53;
            break;
        case FenArrayType.QueensGambitRefusedBalticDefense_D02:
            fenArray = fenQueensGambitRefusedBalticDefense_D02;
            break;
        case FenArrayType.TrompowskyAttackEdgeVariation_A45:
            fenArray = fenTrompowskyAttackEdgeVariation_A45;
            break;
        case FenArrayType.QueensGambitAcceptedAlekhineDefense_D22:
            fenArray = fenQueensGambitAcceptedAlekhineDefense_D22;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationAdvanceVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationAdvanceVariation_D34;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationClassicalVariation_2_B84:
            fenArray =
                fenSicilianDefenseScheveningenVariationClassicalVariation_2_B84;
            break;
        case FenArrayType.KingsIndianDefensePetrosianVariation_E92:
            fenArray = fenKingsIndianDefensePetrosianVariation_E92;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationNimzowitschSystem_C02:
            fenArray = fenFrenchDefenseAdvanceVariationNimzowitschSystem_C02;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariation_B98:
            fenArray = fenSicilianDefenseNajdorfVariation_B98;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBronsteinByrneVariation_E45:
            fenArray =
                fenNimzoIndianDefenseNormalVariationBronsteinByrneVariation_E45;
            break;
        case FenArrayType.ScotchGameGeneral_C44:
            fenArray = fenScotchGameGeneral_C44;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackOrthodoxDefense_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackOrthodoxDefense_D37;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationHungarianVariation_D97:
            fenArray = fenGruenfeldDefenseRussianVariationHungarianVariation_D97;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationNoaVariation_E36:
            fenArray = fenNimzoIndianDefenseClassicalVariationNoaVariation_E36;
            break;
        case FenArrayType.RussianGameClassicalAttackChigorinVariationMainLine_C42:
            fenArray = fenRussianGameClassicalAttackChigorinVariationMainLine_C42;
            break;
        case FenArrayType.AlekhineDefenseModernVariationLarsenVariation_B04:
            fenArray = fenAlekhineDefenseModernVariationLarsenVariation_B04;
            break;
        case FenArrayType.SpanishGameClosedVariationsClosedDefense_1_C96:
            fenArray = fenSpanishGameClosedVariationsClosedDefense_1_C96;
            break;
        case FenArrayType.SpanishGameMarshallAttackModernMainLine_C89:
            fenArray = fenSpanishGameMarshallAttackModernMainLine_C89;
            break;
        case FenArrayType.PolishDefenseGeneral_A40:
            fenArray = fenPolishDefenseGeneral_A40;
            break;
        case FenArrayType.QueensGambitDeclinedModernKnightDefense_2_D51:
            fenArray = fenQueensGambitDeclinedModernKnightDefense_2_D51;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariation_D48:
            fenArray = fenSemiSlavDefenseMeranVariation_D48;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationYugoslavVariation_E65:
            fenArray = fenKingsIndianDefenseFianchettoVariationYugoslavVariation_E65;
            break;
        case FenArrayType.BudapestDefenseFajarowiczVariation_A51:
            fenArray = fenBudapestDefenseFajarowiczVariation_A51;
            break;
        case FenArrayType.CatalanOpeningOpenDefenseModernSharpVariation_E04:
            fenArray = fenCatalanOpeningOpenDefenseModernSharpVariation_E04;
            break;
        case FenArrayType.AlekhineDefenseNormalVariation_B02:
            fenArray = fenAlekhineDefenseNormalVariation_B02;
            break;
        case FenArrayType.SicilianDefenseKveinisVariation_B40:
            fenArray = fenSicilianDefenseKveinisVariation_B40;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariation_E17:
            fenArray = fenQueensIndianDefenseClassicalVariation_E17;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariation_3_C02:
            fenArray = fenFrenchDefenseAdvanceVariation_3_C02;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationDelayedKeresAttack_B81:
            fenArray = fenSicilianDefenseScheveningenVariationDelayedKeresAttack_B81;
            break;
        case FenArrayType.BenoniDefenseFourPawnsAttackMainLine_A69:
            fenArray = fenBenoniDefenseFourPawnsAttackMainLine_A69;
            break;
        case FenArrayType.RussianGameModernAttack_C43:
            fenArray = fenRussianGameModernAttack_C43;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationSchlechterDefense_E52:
            fenArray = fenNimzoIndianDefenseNormalVariationSchlechterDefense_E52;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationGellerDefense_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariationGellerDefense_E73;
            break;
        case FenArrayType.QueensGambitDeclinedNormalDefense_D35:
            fenArray = fenQueensGambitDeclinedNormalDefense_D35;
            break;
        case FenArrayType.FrenchDefenseQueensKnight_C00:
            fenArray = fenFrenchDefenseQueensKnight_C00;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackEarlydeviations_B75:
            fenArray =
                fenSicilianDefenseDragonVariationYugoslavAttackEarlydeviations_B75;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationBurilleVariationReversedTarrasch_D94:
            fenArray =
                fenGruenfeldDefenseThreeKnightsVariationBurilleVariationReversedTarrasch_D94;
            break;
        case FenArrayType.ScandinavianDefenseLaskerVariation_B01:
            fenArray = fenScandinavianDefenseLaskerVariation_B01;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationMaroczyBindPaulsenLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationMaroczyBindPaulsenLine_B28;
            break;
        case FenArrayType.KingsIndianAttackPachmanSystem_A07:
            fenArray = fenKingsIndianAttackPachmanSystem_A07;
            break;
        case FenArrayType.AlekhineDefenseFourPawnsAttack_B03:
            fenArray = fenAlekhineDefenseFourPawnsAttack_B03;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationTwoKnightsVariation_A35:
            fenArray = fenEnglishOpeningSymmetricalVariationTwoKnightsVariation_A35;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationMatanovicAttack_B82:
            fenArray = fenSicilianDefenseScheveningenVariationMatanovicAttack_B82;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePolerioDefenseSuhleDefense_C59:
            fenArray = fenItalianGameTwoKnightsDefensePolerioDefenseSuhleDefense_C59;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationGeneralVariation_A21:
            fenArray = fenEnglishOpeningKingsEnglishVariationGeneralVariation_A21;
            break;
        case FenArrayType.SicilianDefenseModernVariationsMainLine_B57:
            fenArray = fenSicilianDefenseModernVariationsMainLine_B57;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_1_C75:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C75;
            break;
        case FenArrayType.SlavDefenseCzechVariationWiesbadenVariation_D17:
            fenArray = fenSlavDefenseCzechVariationWiesbadenVariation_D17;
            break;
        case FenArrayType.SpanishGameBerlinDefenseBeverwijkVariation_C65:
            fenArray = fenSpanishGameBerlinDefenseBeverwijkVariation_C65;
            break;
        case FenArrayType.SicilianDefenseKanVariation_B41:
            fenArray = fenSicilianDefenseKanVariation_B41;
            break;
        case FenArrayType.CaroKannDefenseForgacsVariation_B15:
            fenArray = fenCaroKannDefenseForgacsVariation_B15;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseTartakowerVariation_C63:
            fenArray = fenSpanishGameSchliemannDefenseTartakowerVariation_C63;
            break;
        case FenArrayType.SpanishGameClosedVariationsWorrallAttackCasltingline_C86:
            fenArray = fenSpanishGameClosedVariationsWorrallAttackCasltingline_C86;
            break;
        case FenArrayType.NimzowitschDefenseGeneral_B00:
            fenArray = fenNimzowitschDefenseGeneral_B00;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationNormalLine_B74:
            fenArray =
                fenSicilianDefenseDragonVariationClassicalVariationNormalLine_B74;
            break;
        case FenArrayType.SpanishGameClosedVariationsKeresDefense_1_C92:
            fenArray = fenSpanishGameClosedVariationsKeresDefense_1_C92;
            break;
        case FenArrayType.QueensGambitAcceptedShowalterVariation_D24:
            fenArray = fenQueensGambitAcceptedShowalterVariation_D24;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationMainLine_D34:
            fenArray = fenTarraschDefenseClassicalVariationMainLine_D34;
            break;
        case FenArrayType.SicilianDefenseDragonVariationModernBc4Variation_B35:
            fenArray = fenSicilianDefenseDragonVariationModernBc4Variation_B35;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationKorchnoiLine_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationKorchnoiLine_A28;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseGeneral_D60:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseGeneral_D60;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A32:
            fenArray =
                fenEnglishOpeningSymmetricalVariationAntiBenoniVariationSpielmannDefense_A32;
            break;
        case FenArrayType.FourKnightsGameItalianVariation_C50:
            fenArray = fenFourKnightsGameItalianVariation_C50;
            break;
        case FenArrayType.IndianGameBudapestDefense_A51:
            fenArray = fenIndianGameBudapestDefense_A51;
            break;
        case FenArrayType.RatDefenseAcceleratedGurgenidze_B07:
            fenArray = fenRatDefenseAcceleratedGurgenidze_B07;
            break;
        case FenArrayType.KingsIndianDefenseAcceleratedAverbakhVariation_E70:
            fenArray = fenKingsIndianDefenseAcceleratedAverbakhVariation_E70;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationBogoljubowVariationStonewallLine_A12:
            fenArray =
                fenRetiOpeningAngloSlavVariationBogoljubowVariationStonewallLine_A12;
            break;
        case FenArrayType.PircDefenseClassicalVariationQuietSystemChigorinLine_B08:
            fenArray = fenPircDefenseClassicalVariationQuietSystemChigorinLine_B08;
            break;
        case FenArrayType.PircDefenseKholmovSystem_B07:
            fenArray = fenPircDefenseKholmovSystem_B07;
            break;
        case FenArrayType.QueensGambitAcceptedNormalVariation_D25:
            fenArray = fenQueensGambitAcceptedNormalVariation_D25;
            break;
        case FenArrayType.PircDefenseAustrianAttack_2_B09:
            fenArray = fenPircDefenseAustrianAttack_2_B09;
            break;
        case FenArrayType.ItalianGameDeutzGambit_C55:
            fenArray = fenItalianGameDeutzGambit_C55;
            break;
        case FenArrayType.SpanishGameBerlinDefenseImprovedSteinitzDefense_C66:
            fenArray = fenSpanishGameBerlinDefenseImprovedSteinitzDefense_C66;
            break;
        case FenArrayType.QueensGambitRefusedBalticDefensePseudoSlav_D02:
            fenArray = fenQueensGambitRefusedBalticDefensePseudoSlav_D02;
            break;
        case FenArrayType.ZukertortOpeningOldIndianAttack_A06:
            fenArray = fenZukertortOpeningOldIndianAttack_A06;
            break;
        case FenArrayType.ItalianGameGiuocoPianissimoCanalVariation_C50:
            fenArray = fenItalianGameGiuocoPianissimoCanalVariation_C50;
            break;
        case FenArrayType.BishopsOpeningGeneral_C23:
            fenArray = fenBishopsOpeningGeneral_C23;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationBayonetAttack_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationBayonetAttack_B12;
            break;
        case FenArrayType.DutchDefenseClassicalVariationHuislVariation_A96:
            fenArray = fenDutchDefenseClassicalVariationHuislVariation_A96;
            break;
        case FenArrayType.KadasOpeningGeneral_A00:
            fenArray = fenKadasOpeningGeneral_A00;
            break;
        case FenArrayType.ViennaGameGeneral_C27:
            fenArray = fenViennaGameGeneral_C27;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationLaskerVariation_2_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationLaskerVariation_2_C12;
            break;
        case FenArrayType.CaroKannDefenseTwoKnightsAttackMindenoVariation_B11:
            fenArray = fenCaroKannDefenseTwoKnightsAttackMindenoVariation_B11;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariation_1_B73:
            fenArray = fenSicilianDefenseDragonVariationClassicalVariation_1_B73;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefenseFianchettoVariation_C76:
            fenArray =
                fenSpanishGameMorphyDefenseModernSteinitzDefenseFianchettoVariation_C76;
            break;
        case FenArrayType.SpanishGameOpenVariationsOpenVariation_C80:
            fenArray = fenSpanishGameOpenVariationsOpenVariation_C80;
            break;
        case FenArrayType.GrobOpeningGeneral_A00:
            fenArray = fenGrobOpeningGeneral_A00;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationYerevanSystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationYerevanSystem_B28;
            break;
        case FenArrayType.CaroKannDefenseAcceleratedPanovAttack_1_B10:
            fenArray = fenCaroKannDefenseAcceleratedPanovAttack_1_B10;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationBatteryVariation_B73:
            fenArray =
                fenSicilianDefenseDragonVariationClassicalVariationBatteryVariation_B73;
            break;
        case FenArrayType.SicilianDefenseDragonVariationLevenfishVariation_B71:
            fenArray = fenSicilianDefenseDragonVariationLevenfishVariation_B71;
            break;
        case FenArrayType.QueensGambitAcceptedFurmanVariation_D27:
            fenArray = fenQueensGambitAcceptedFurmanVariation_D27;
            break;
        case FenArrayType.ModernDefenseGurgenidzeDefense_B06:
            fenArray = fenModernDefenseGurgenidzeDefense_B06;
            break;
        case FenArrayType.SpanishGameClassicalVariationCentralVariation_C64:
            fenArray = fenSpanishGameClassicalVariationCentralVariation_C64;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariation_B68:
            fenArray = fenSicilianDefenseRichterRauzerVariationNeoModernVariation_B68;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseDyckhoffVariation_C63:
            fenArray = fenSpanishGameSchliemannDefenseDyckhoffVariation_C63;
            break;
        case FenArrayType.CaroKannDefenseTwoKnightsAttackMindenoVariationRetreatLine_B11:
            fenArray =
                fenCaroKannDefenseTwoKnightsAttackMindenoVariationRetreatLine_B11;
            break;
        case FenArrayType.SpanishGameClosedVariationsAverbakhVariation_C87:
            fenArray = fenSpanishGameClosedVariationsAverbakhVariation_C87;
            break;
        case FenArrayType.SpanishGameOpenVariationsMainLines_C80:
            fenArray = fenSpanishGameOpenVariationsMainLines_C80;
            break;
        case FenArrayType.AlekhineDefenseMaroczyVariation_B02:
            fenArray = fenAlekhineDefenseMaroczyVariation_B02;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationGeneral_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationGeneral_A28;
            break;
        case FenArrayType.LionDefenseAntiPhilidorLionsCave_B07:
            fenArray = fenLionDefenseAntiPhilidorLionsCave_B07;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationDebrecenDefense_E67:
            fenArray = fenKingsIndianDefenseFianchettoVariationDebrecenDefense_E67;
            break;
        case FenArrayType.SicilianDefenseKanVariationSwissCheeseVariation_B42:
            fenArray = fenSicilianDefenseKanVariationSwissCheeseVariation_B42;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariationKeresVariation_E25:
            fenArray = fenNimzoIndianDefenseSaemischVariationKeresVariation_E25;
            break;
        case FenArrayType.SlavDefenseAlekhineVariation_D15:
            fenArray = fenSlavDefenseAlekhineVariation_D15;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationModernVariation_B60:
            fenArray = fenSicilianDefenseRichterRauzerVariationModernVariation_B60;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationRagozinVariation_E51:
            fenArray = fenNimzoIndianDefenseNormalVariationRagozinVariation_E51;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoTraditional_E15:
            fenArray = fenQueensIndianDefenseFianchettoTraditional_E15;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_2_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_2_A28;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationClosedVariation7c6_E88:
            fenArray = fenKingsIndianDefenseSaemischVariationClosedVariation7c6_E88;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_2_A16:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_2_A16;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationHungarianAttack_A25:
            fenArray = fenEnglishOpeningKingsEnglishVariationHungarianAttack_A25;
            break;
        case FenArrayType.QueensGambitDeclinedNeoOrthodoxVariationMainLine_D55:
            fenArray = fenQueensGambitDeclinedNeoOrthodoxVariationMainLine_D55;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationNoaVariationModernLine_E35:
            fenArray =
                fenNimzoIndianDefenseClassicalVariationNoaVariationModernLine_E35;
            break;
        case FenArrayType.SemiSlavDefenseQuietVariation_2_D30:
            fenArray = fenSemiSlavDefenseQuietVariation_2_D30;
            break;
        case FenArrayType.QueensIndianDefenseRiuminVariation_E16:
            fenArray = fenQueensIndianDefenseRiuminVariation_E16;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedPaulsenFormation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitAcceptedPaulsenFormation_B21;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationPetrosianAttack_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationPetrosianAttack_E12;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationGuimardDefense_C03:
            fenArray = fenFrenchDefenseTarraschVariationGuimardDefense_C03;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_C19:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_C19;
            break;
        case FenArrayType.NeoGruenfeldDefenseExchangeVariationwith6e4_D72:
            fenArray = fenNeoGruenfeldDefenseExchangeVariationwith6e4_D72;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseRomanishinGambit_A13:
            fenArray = fenEnglishOpeningAngloIndianDefenseRomanishinGambit_A13;
            break;
        case FenArrayType.SpanishGameClosedVariationsSmyslovDefense_C93:
            fenArray = fenSpanishGameClosedVariationsSmyslovDefense_C93;
            break;
        case FenArrayType.CaroKannDefenseStandardUnorthodoxReplies_B15:
            fenArray = fenCaroKannDefenseStandardUnorthodoxReplies_B15;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariation_D96:
            fenArray = fenGruenfeldDefenseRussianVariation_D96;
            break;
        case FenArrayType.NimzoIndianDefenseHuebnerVariationMainLine_E41:
            fenArray = fenNimzoIndianDefenseHuebnerVariationMainLine_E41;
            break;
        case FenArrayType.BlumenfeldCountergambitDusChotimurskyVariation_E10:
            fenArray = fenBlumenfeldCountergambitDusChotimurskyVariation_E10;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackTwoKnightsDefenseBlockadeLine_D37:
            fenArray =
                fenQueensGambitDeclinedHarrwitzAttackTwoKnightsDefenseBlockadeLine_D37;
            break;
        case FenArrayType.TarraschDefensePragueVariation_D33:
            fenArray = fenTarraschDefensePragueVariation_D33;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariation_2_B73:
            fenArray = fenSicilianDefenseDragonVariationClassicalVariation_2_B73;
            break;
        case FenArrayType.KingsGambitDeclinedClassicalVariation_C30:
            fenArray = fenKingsGambitDeclinedClassicalVariation_C30;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambit_D08:
            fenArray = fenQueensGambitRefusedAlbinCountergambit_D08;
            break;
        case FenArrayType.FrenchDefenseLaBourdonnaisVariation_C00:
            fenArray = fenFrenchDefenseLaBourdonnaisVariation_C00;
            break;
        case FenArrayType.ScandinavianDefenseSchillerPytelVariation_B01:
            fenArray = fenScandinavianDefenseSchillerPytelVariation_B01;
            break;
        case FenArrayType.SicilianDefensePaulsenBasmanDefense_B40:
            fenArray = fenSicilianDefensePaulsenBasmanDefense_B40;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_3_A16:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseAngloGrunfeldVariation_3_A16;
            break;
        case FenArrayType.OldIndianCzechVariation_A53:
            fenArray = fenOldIndianCzechVariation_A53;
            break;
        case FenArrayType.ZukertortOpeningGrunfeldReversed_A49:
            fenArray = fenZukertortOpeningGrunfeldReversed_A49;
            break;
        case FenArrayType.CaroKannDefenseModernVariation_B12:
            fenArray = fenCaroKannDefenseModernVariation_B12;
            break;
        case FenArrayType.SicilianDefenseKatalimovVariation_B27:
            fenArray = fenSicilianDefenseKatalimovVariation_B27;
            break;
        case FenArrayType.SlavDefenseSteinerVariation_D16:
            fenArray = fenSlavDefenseSteinerVariation_D16;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationLongVariation_E68:
            fenArray = fenKingsIndianDefenseFianchettoVariationLongVariation_E68;
            break;
        case FenArrayType.FourKnightsGameDoubleSpanish_C49:
            fenArray = fenFourKnightsGameDoubleSpanish_C49;
            break;
        case FenArrayType.QueensGambitAcceptedMannheimVariation_D23:
            fenArray = fenQueensGambitAcceptedMannheimVariation_D23;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationCzerniakDefenseTalLine_A77:
            fenArray = fenBenoniDefenseClassicalVariationCzerniakDefenseTalLine_A77;
            break;
        case FenArrayType.QueensIndianDefenseMilesVariation_E12:
            fenArray = fenQueensIndianDefenseMilesVariation_E12;
            break;
        case FenArrayType.ElephantGambitGeneral_C40:
            fenArray = fenElephantGambitGeneral_C40;
            break;
        case FenArrayType.SicilianDefenseGrandPrixAttackSchofmanVariation_B23:
            fenArray = fenSicilianDefenseGrandPrixAttackSchofmanVariation_B23;
            break;
        case FenArrayType.CatalanOpeningClosedVariation_E07:
            fenArray = fenCatalanOpeningClosedVariation_E07;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSchlechterVariation_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSchlechterVariation_B33;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationAntiBenoniVariationGellerVariation_A33:
            fenArray =
                fenEnglishOpeningSymmetricalVariationAntiBenoniVariationGellerVariation_A33;
            break;
        case FenArrayType.SemiSlavDefenseBogoljubowVariation_D46:
            fenArray = fenSemiSlavDefenseBogoljubowVariation_D46;
            break;
        case FenArrayType.AlekhineDefenseTwoPawnAttackLaskerVariation_B02:
            fenArray = fenAlekhineDefenseTwoPawnAttackLaskerVariation_B02;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationOpenSystemSuechtingLine_C07:
            fenArray = fenFrenchDefenseTarraschVariationOpenSystemSuechtingLine_C07;
            break;
        case FenArrayType.BudapestDefenseGeneral_A52:
            fenArray = fenBudapestDefenseGeneral_A52;
            break;
        case FenArrayType.CaroKannDefensePanovAttackFianchettoDefenseFianchettoGambit_B13:
            fenArray =
                fenCaroKannDefensePanovAttackFianchettoDefenseFianchettoGambit_B13;
            break;
        case FenArrayType.SpanishGameMorphyDefenseCaroVariation_C70:
            fenArray = fenSpanishGameMorphyDefenseCaroVariation_C70;
            break;
        case FenArrayType.ScotchGameHaxoGambit_C45:
            fenArray = fenScotchGameHaxoGambit_C45;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_1_C71:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C71;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseKingsIndianFormationDoubleFianchetto_A15:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseKingsIndianFormationDoubleFianchetto_A15;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseExchangeVariation_D07:
            fenArray = fenQueensGambitRefusedChigorinDefenseExchangeVariation_D07;
            break;
        case FenArrayType.ViennaGameViennaGambitMainLine_C29:
            fenArray = fenViennaGameViennaGambitMainLine_C29;
            break;
        case FenArrayType.QueensGambitDeclinedRagozinDefenseViennaVariation_D39:
            fenArray = fenQueensGambitDeclinedRagozinDefenseViennaVariation_D39;
            break;
        case FenArrayType.SpanishGameOpenVariationsHowellAttack_C81:
            fenArray = fenSpanishGameOpenVariationsHowellAttack_C81;
            break;
        case FenArrayType.CaroKannDefensePanovAttack_1_B13:
            fenArray = fenCaroKannDefensePanovAttack_1_B13;
            break;
        case FenArrayType.PircDefenseAustrianAttackUnzickerAttack_B09:
            fenArray = fenPircDefenseAustrianAttackUnzickerAttack_B09;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationOrthodoxVariation_E85:
            fenArray = fenKingsIndianDefenseSaemischVariationOrthodoxVariation_E85;
            break;
        case FenArrayType.IndianGameReversedChigorinDefense_A45:
            fenArray = fenIndianGameReversedChigorinDefense_A45;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseAntiAntiGrunfeld_A17:
            fenArray = fenEnglishOpeningAngloIndianDefenseAntiAntiGrunfeld_A17;
            break;
        case FenArrayType.OldIndianDefenseTartakowerIndian_A54:
            fenArray = fenOldIndianDefenseTartakowerIndian_A54;
            break;
        case FenArrayType.CaroKannDefenseGoldmanVariation_B12:
            fenArray = fenCaroKannDefenseGoldmanVariation_B12;
            break;
        case FenArrayType.QueensGambitAcceptedCentralVariationModernDefense_D20:
            fenArray = fenQueensGambitAcceptedCentralVariationModernDefense_D20;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationBernsteinDefenseExchangeLine_E58:
            fenArray =
                fenNimzoIndianDefenseNormalVariationBernsteinDefenseExchangeLine_E58;
            break;
        case FenArrayType.RussianGameClassicalAttackMasonShowalterVariation_C42:
            fenArray = fenRussianGameClassicalAttackMasonShowalterVariation_C42;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationSmyslovVariation_B17:
            fenArray = fenCaroKannDefenseKarpovVariationSmyslovVariation_B17;
            break;
        case FenArrayType.KingsIndianDefenseKazakhVariation_E91:
            fenArray = fenKingsIndianDefenseKazakhVariation_E91;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAlekhineGambitKanVariation_C15:
            fenArray = fenFrenchDefenseWinawerVariationAlekhineGambitKanVariation_C15;
            break;
        case FenArrayType.KingsIndianDefenseLarsenVariation_E90:
            fenArray = fenKingsIndianDefenseLarsenVariation_E90;
            break;
        case FenArrayType.QueensGambitAcceptedGunsbergDefense_D21:
            fenArray = fenQueensGambitAcceptedGunsbergDefense_D21;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystemBronsteinVariation_E55:
            fenArray =
                fenNimzoIndianDefenseNormalVariationGligoricSystemBronsteinVariation_E55;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariationPolugayevskyGambit_E17:
            fenArray = fenQueensIndianDefenseClassicalVariationPolugayevskyGambit_E17;
            break;
        case FenArrayType.SicilianDefenseWingGambit_B20:
            fenArray = fenSicilianDefenseWingGambit_B20;
            break;
        case FenArrayType.IndianGameDzindziIndianDefense_E10:
            fenArray = fenIndianGameDzindziIndianDefense_E10;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationTraditionalLine_B98:
            fenArray = fenSicilianDefenseNajdorfVariationTraditionalLine_B98;
            break;
        case FenArrayType.SicilianDefenseWingGambitMarshallVariation_B20:
            fenArray = fenSicilianDefenseWingGambitMarshallVariation_B20;
            break;
        case FenArrayType.DutchDefenseClassicalVariationGeneral_A96:
            fenArray = fenDutchDefenseClassicalVariationGeneral_A96;
            break;
        case FenArrayType.TarraschDefenseGeneral_D32:
            fenArray = fenTarraschDefenseGeneral_D32;
            break;
        case FenArrayType.ModernDefenseBeefeaterVariation_A40:
            fenArray = fenModernDefenseBeefeaterVariation_A40;
            break;
        case FenArrayType.PhilidorDefenseLionVariationShirovGambit_C41:
            fenArray = fenPhilidorDefenseLionVariationShirovGambit_C41;
            break;
        case FenArrayType.SicilianDefenseClassicalVariation_B58:
            fenArray = fenSicilianDefenseClassicalVariation_B58;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationModernVariation_B17:
            fenArray = fenCaroKannDefenseKarpovVariationModernVariation_B17;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefense_1_C55:
            fenArray = fenItalianGameTwoKnightsDefense_1_C55;
            break;
        case FenArrayType.QueensGambitDeclinedAntiTartakowerVariation_D55:
            fenArray = fenQueensGambitDeclinedAntiTartakowerVariation_D55;
            break;
        case FenArrayType.KingsGambitAcceptedFischerDefense_C34:
            fenArray = fenKingsGambitAcceptedFischerDefense_C34;
            break;
        case FenArrayType.FrenchDefenseAlekhineChatardAttack_C13:
            fenArray = fenFrenchDefenseAlekhineChatardAttack_C13;
            break;
        case FenArrayType.PircDefenseAustrianAttackKurajicaVariation_B09:
            fenArray = fenPircDefenseAustrianAttackKurajicaVariation_B09;
            break;
        case FenArrayType.SpanishGameOpenVariationsClassicalDefense_C83:
            fenArray = fenSpanishGameOpenVariationsClassicalDefense_C83;
            break;
        case FenArrayType.SpanishGameMorphyDefenseBayreuthVariation_C77:
            fenArray = fenSpanishGameMorphyDefenseBayreuthVariation_C77;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationMaroczyBind_B28:
            fenArray = fenSicilianDefenseOKellyVariationMaroczyBind_B28;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationExchangeVariation_B00:
            fenArray =
                fenNimzowitschDefenseScandinavianVariationExchangeVariation_B00;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationModernLine_B44:
            fenArray = fenSicilianDefensePaulsenVariationModernLine_B44;
            break;
        case FenArrayType.ZukertortOpeningSlavInvitation_A04:
            fenArray = fenZukertortOpeningSlavInvitation_A04;
            break;
        case FenArrayType.QueenPawnGameVeresovAttackTwoKnightsSystem_D01:
            fenArray = fenQueenPawnGameVeresovAttackTwoKnightsSystem_D01;
            break;
        case FenArrayType.RatDefenseHarmonist_B07:
            fenArray = fenRatDefenseHarmonist_B07;
            break;
        case FenArrayType.BirdOpeningFromGambit_A02:
            fenArray = fenBirdOpeningFromGambit_A02;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseKeresDefense_A14:
            fenArray = fenEnglishOpeningAgincourtDefenseKeresDefense_A14;
            break;
        case FenArrayType.ItalianGameAntiFriedLiverDefense_C55:
            fenArray = fenItalianGameAntiFriedLiverDefense_C55;
            break;
        case FenArrayType.SicilianDefenseFrenchVariationOpen_B40:
            fenArray = fenSicilianDefenseFrenchVariationOpen_B40;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePolerioDefenseBogoljubowVariation_C58:
            fenArray =
                fenItalianGameTwoKnightsDefensePolerioDefenseBogoljubowVariation_C58;
            break;
        case FenArrayType.ViennaGameAnderssenDefense_C25:
            fenArray = fenViennaGameAnderssenDefense_C25;
            break;
        case FenArrayType.QueensIndianDefenseOpocenskyVariation_E17:
            fenArray = fenQueensIndianDefenseOpocenskyVariation_E17;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefense_D26:
            fenArray = fenQueensGambitAcceptedClassicalDefense_D26;
            break;
        case FenArrayType.SlavDefenseGellerGambit_1_D15:
            fenArray = fenSlavDefenseGellerGambit_1_D15;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariationNeiGambit_A19:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariationNeiGambit_A19;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationBotvinnikSystem_A26:
            fenArray = fenEnglishOpeningKingsEnglishVariationBotvinnikSystem_A26;
            break;
        case FenArrayType.SemiSlavDefenseMarshallGambit_D31:
            fenArray = fenSemiSlavDefenseMarshallGambit_D31;
            break;
        case FenArrayType.QueensIndianDefenseGeneral_E12:
            fenArray = fenQueensIndianDefenseGeneral_E12;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariation_E86:
            fenArray = fenKingsIndianDefenseSaemischVariation_E86;
            break;
        case FenArrayType.NeoGruenfeldDefenseExchangeVariation_D71:
            fenArray = fenNeoGruenfeldDefenseExchangeVariation_D71;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariation_B62:
            fenArray = fenSicilianDefenseRichterRauzerVariation_B62;
            break;
        case FenArrayType.PhilidorDefenseExchangeVariation_2_C41:
            fenArray = fenPhilidorDefenseExchangeVariation_2_C41;
            break;
        case FenArrayType.PhilidorDefenseGeneral_2_C41:
            fenArray = fenPhilidorDefenseGeneral_2_C41;
            break;
        case FenArrayType.SemiSlavDefenseBotvinnikSystemLilienthalVariation_D44:
            fenArray = fenSemiSlavDefenseBotvinnikSystemLilienthalVariation_D44;
            break;
        case FenArrayType.DutchDefenseNormalVariation_A84:
            fenArray = fenDutchDefenseNormalVariation_A84;
            break;
        case FenArrayType.RussianGameKaufmannAttack_C42:
            fenArray = fenRussianGameKaufmannAttack_C42;
            break;
        case FenArrayType.ScandinavianDefenseIcelandicPalmeGambit_B01:
            fenArray = fenScandinavianDefenseIcelandicPalmeGambit_B01;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationBotvinnikVariation_C05:
            fenArray = fenFrenchDefenseTarraschVariationBotvinnikVariation_C05;
            break;
        case FenArrayType.SlavDefenseCzechVariationCarlsbadVariation_D17:
            fenArray = fenSlavDefenseCzechVariationCarlsbadVariation_D17;
            break;
        case FenArrayType.BenoniDefenseModernVariationSnakeVariation_A60:
            fenArray = fenBenoniDefenseModernVariationSnakeVariation_A60;
            break;
        case FenArrayType.ViennaGameViennaGambit_C28:
            fenArray = fenViennaGameViennaGambit_C28;
            break;
        case FenArrayType.NimzoIndianDefenseSimaginVariation_E46:
            fenArray = fenNimzoIndianDefenseSimaginVariation_E46;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationNeoModernVariationNyezhmetdinovAttack_B69:
            fenArray =
                fenSicilianDefenseRichterRauzerVariationNeoModernVariationNyezhmetdinovAttack_B69;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationNewYorkSystem_A12:
            fenArray = fenRetiOpeningAngloSlavVariationNewYorkSystem_A12;
            break;
        case FenArrayType.NimzowitschDefenseKennedyVariationLinksspringerVariation_B00:
            fenArray =
                fenNimzowitschDefenseKennedyVariationLinksspringerVariation_B00;
            break;
        case FenArrayType.BenoniDefenseFrancoSicilianDefense_A43:
            fenArray = fenBenoniDefenseFrancoSicilianDefense_A43;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationVanderWielAttackBishopHunt_B12:
            fenArray =
                fenCaroKannDefenseAdvanceVariationVanderWielAttackBishopHunt_B12;
            break;
        case FenArrayType.DutchDefenseClassicalVariationBuenosAiresVariation_A96:
            fenArray = fenDutchDefenseClassicalVariationBuenosAiresVariation_A96;
            break;
        case FenArrayType.SicilianDefensePinVariationKochVariation_B40:
            fenArray = fenSicilianDefensePinVariationKochVariation_B40;
            break;
        case FenArrayType.FourKnightsGameScotchVariationBelgradeGambit_C47:
            fenArray = fenFourKnightsGameScotchVariationBelgradeGambit_C47;
            break;
        case FenArrayType.ModernDefenseLizardDefenseMittenbergerGambit_B06:
            fenArray = fenModernDefenseLizardDefenseMittenbergerGambit_B06;
            break;
        case FenArrayType.EnglundGambitComplexEnglundGambit_A40:
            fenArray = fenEnglundGambitComplexEnglundGambit_A40;
            break;
        case FenArrayType.ItalianGameClassicalVariationCenterAtttack_C53:
            fenArray = fenItalianGameClassicalVariationCenterAtttack_C53;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationBurnVariationMainLine_C11:
            fenArray = fenFrenchDefenseClassicalVariationBurnVariationMainLine_C11;
            break;
        case FenArrayType.AlekhineDefenseModernVariationSchmidVariation_B04:
            fenArray = fenAlekhineDefenseModernVariationSchmidVariation_B04;
            break;
        case FenArrayType.QueensIndianDefenseAntiQueensIndianSystem_E17:
            fenArray = fenQueensIndianDefenseAntiQueensIndianSystem_E17;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationYugoslavSystemwoNc3_E64:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationYugoslavSystemwoNc3_E64;
            break;
        case FenArrayType.SicilianDefenseAcceleratedDragonExchangeVariation_B34:
            fenArray = fenSicilianDefenseAcceleratedDragonExchangeVariation_B34;
            break;
        case FenArrayType.IndianGamePolishVariation_A46:
            fenArray = fenIndianGamePolishVariation_A46;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationReynoldsVariation_D48:
            fenArray = fenSemiSlavDefenseMeranVariationReynoldsVariation_D48;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseMainLine_2_D63:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseMainLine_2_D63;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseHennegergerVariation_D63:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseHennegergerVariation_D63;
            break;
        case FenArrayType.SemiSlavDefenseAccepted_D44:
            fenArray = fenSemiSlavDefenseAccepted_D44;
            break;
        case FenArrayType.BenoniDefenseBenoniGambitAccepted_A43:
            fenArray = fenBenoniDefenseBenoniGambitAccepted_A43;
            break;
        case FenArrayType.BenkoGambitZaitsevSystem_A58:
            fenArray = fenBenkoGambitZaitsevSystem_A58;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationBronsteinVariation_B12:
            fenArray = fenCaroKannDefenseAdvanceVariationBronsteinVariation_B12;
            break;
        case FenArrayType.RatDefenseAntalDefense_B07:
            fenArray = fenRatDefenseAntalDefense_B07;
            break;
        case FenArrayType.QueensGambitDeclinedExchangeVariationSaemischVariation_D35:
            fenArray = fenQueensGambitDeclinedExchangeVariationSaemischVariation_D35;
            break;
        case FenArrayType.PolishOpeningCzechDefense_A00:
            fenArray = fenPolishOpeningCzechDefense_A00;
            break;
        case FenArrayType.QueensGambitDeclinedCapablancaGeneral_D30:
            fenArray = fenQueensGambitDeclinedCapablancaGeneral_D30;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSpasskyVariation_D88:
            fenArray = fenGruenfeldDefenseExchangeVariationSpasskyVariation_D88;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariation_E25:
            fenArray = fenNimzoIndianDefenseSaemischVariation_E25;
            break;
        case FenArrayType.ScotchGameScotchGambitGoringGambitDeclined_C44:
            fenArray = fenScotchGameScotchGambitGoringGambitDeclined_C44;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationPrinsVariation_D97:
            fenArray = fenGruenfeldDefenseRussianVariationPrinsVariation_D97;
            break;
        case FenArrayType.KingsIndianDefensePetrosianVariationNormalDefense_E93:
            fenArray = fenKingsIndianDefensePetrosianVariationNormalDefense_E93;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationDoubleFianchetto_E82:
            fenArray = fenKingsIndianDefenseSaemischVariationDoubleFianchetto_E82;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackMainLine_B77:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttackMainLine_B77;
            break;
        case FenArrayType.TorreAttackFianchettoDefenseEuweVariation_A48:
            fenArray = fenTorreAttackFianchettoDefenseEuweVariation_A48;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitMoellerTherkatzAttack_C54:
            fenArray =
                fenItalianGameClassicalVariationGrecoGambitMoellerTherkatzAttack_C54;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationBarmenDefenseCentralExchange_B22:
            fenArray =
                fenSicilianDefenseAlapinVariationBarmenDefenseCentralExchange_B22;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationDelayedExchangeVariation_C11:
            fenArray = fenFrenchDefenseClassicalVariationDelayedExchangeVariation_C11;
            break;
        case FenArrayType.SpanishGameMarshallAttackModernVariation_C89:
            fenArray = fenSpanishGameMarshallAttackModernVariation_C89;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A36:
            fenArray =
                fenEnglishOpeningSymmetricalVariationBotvinnikSystemReversed_A36;
            break;
        case FenArrayType.BenkoGambitDeclinedQuietLine_A57:
            fenArray = fenBenkoGambitDeclinedQuietLine_A57;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationHedgehogVariation_E17:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationHedgehogVariation_E17;
            break;
        case FenArrayType.RussianGameClassicalAttackChigorinVariation_C42:
            fenArray = fenRussianGameClassicalAttackChigorinVariation_C42;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationCarlsbadVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationCarlsbadVariation_D34;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationClassicalVariation_B64:
            fenArray = fenSicilianDefenseRichterRauzerVariationClassicalVariation_B64;
            break;
        case FenArrayType.AlekhineDefenseBaloghVariation_B03:
            fenArray = fenAlekhineDefenseBaloghVariation_B03;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttack_D35:
            fenArray = fenQueensGambitDeclinedHarrwitzAttack_D35;
            break;
        case FenArrayType.SicilianDefensePrinsVariationVeniceAttack_B55:
            fenArray = fenSicilianDefensePrinsVariationVeniceAttack_B55;
            break;
        case FenArrayType.KingsGambitGeneral_C30:
            fenArray = fenKingsGambitGeneral_C30;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTrogerDefense_A21:
            fenArray = fenEnglishOpeningKingsEnglishVariationTrogerDefense_A21;
            break;
        case FenArrayType.ThreeKnightsOpeningSteinitzDefense_C46:
            fenArray = fenThreeKnightsOpeningSteinitzDefense_C46;
            break;
        case FenArrayType.NimzoLarsenAttackSymmetricalVariation_A01:
            fenArray = fenNimzoLarsenAttackSymmetricalVariation_A01;
            break;
        case FenArrayType.SicilianDefenseModernVariations_B56:
            fenArray = fenSicilianDefenseModernVariations_B56;
            break;
        case FenArrayType.SlavDefenseGellerGambit_2_D15:
            fenArray = fenSlavDefenseGellerGambit_2_D15;
            break;
        case FenArrayType.BlumenfeldCountergambitGeneral_E10:
            fenArray = fenBlumenfeldCountergambitGeneral_E10;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationDoubleFianchettoAttack_E64:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationDoubleFianchettoAttack_E64;
            break;
        case FenArrayType.PonzianiOpeningGeneral_C44:
            fenArray = fenPonzianiOpeningGeneral_C44;
            break;
        case FenArrayType.KingsKnightOpeningNormalVariation_C44:
            fenArray = fenKingsKnightOpeningNormalVariation_C44;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationAnderssonVariation_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationAnderssonVariation_E12;
            break;
        case FenArrayType.SpanishGameMorphyDefenseNorwegianVariation_C70:
            fenArray = fenSpanishGameMorphyDefenseNorwegianVariation_C70;
            break;
        case FenArrayType.CatalanOpeningOpenDefenseClassicalLine_E05:
            fenArray = fenCatalanOpeningOpenDefenseClassicalLine_E05;
            break;
        case FenArrayType.CaroKannDefenseAcceleratedPanovAttack_2_B10:
            fenArray = fenCaroKannDefenseAcceleratedPanovAttack_2_B10;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseModernGambit_D06:
            fenArray = fenQueensGambitRefusedChigorinDefenseModernGambit_D06;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationRetreatVariation_B33:
            fenArray = fenSicilianDefenseLaskerPelikanVariationRetreatVariation_B33;
            break;
        case FenArrayType.SpanishGameClosedVariationsWorrallAttackDelayedcastlingline_C86:
            fenArray =
                fenSpanishGameClosedVariationsWorrallAttackDelayedcastlingline_C86;
            break;
        case FenArrayType.KangarooDefenseKeresDefenseTranspositionalVariation_E00:
            fenArray = fenKangarooDefenseKeresDefenseTranspositionalVariation_E00;
            break;
        case FenArrayType.SicilianDefensePinVariation_B40:
            fenArray = fenSicilianDefensePinVariation_B40;
            break;
        case FenArrayType.GruenfeldDefenseSmyslovDefense_D94:
            fenArray = fenGruenfeldDefenseSmyslovDefense_D94;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystemBernsteinDefense_E56:
            fenArray =
                fenNimzoIndianDefenseNormalVariationGligoricSystemBernsteinDefense_E56;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationRetiVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationRetiVariation_D34;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseAlekhineSystemMainLine_D29:
            fenArray =
                fenQueensGambitAcceptedClassicalDefenseAlekhineSystemMainLine_D29;
            break;
        case FenArrayType.PhilidorDefenseLarsenVariation_C41:
            fenArray = fenPhilidorDefenseLarsenVariation_C41;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseTarraschDefense_A14:
            fenArray = fenEnglishOpeningAgincourtDefenseTarraschDefense_A14;
            break;
        case FenArrayType.ViennaGameViennaGambitPaulsenAttack_C29:
            fenArray = fenViennaGameViennaGambitPaulsenAttack_C29;
            break;
        case FenArrayType.NimzoIndianDefenseHuebnerVariationRubinsteinVariationMainLine_E42:
            fenArray =
                fenNimzoIndianDefenseHuebnerVariationRubinsteinVariationMainLine_E42;
            break;
        case FenArrayType.SpanishGameClassicalVariationZukertortGambit_C64:
            fenArray = fenSpanishGameClassicalVariationZukertortGambit_C64;
            break;
        case FenArrayType.PircDefenseBayonetAttack_B07:
            fenArray = fenPircDefenseBayonetAttack_B07;
            break;
        case FenArrayType.SicilianDefenseNimzowitschVariationExchangeVariation_B29:
            fenArray = fenSicilianDefenseNimzowitschVariationExchangeVariation_B29;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationBenjaminDefense_E61:
            fenArray = fenKingsIndianDefenseFianchettoVariationBenjaminDefense_E61;
            break;
        case FenArrayType.BenoniDefenseKingsIndianSystem_A56:
            fenArray = fenBenoniDefenseKingsIndianSystem_A56;
            break;
        case FenArrayType.BlumenfeldCountergambitAccepted_E10:
            fenArray = fenBlumenfeldCountergambitAccepted_E10;
            break;
        case FenArrayType.IndianGameSeirawanAttack_E00:
            fenArray = fenIndianGameSeirawanAttack_E00;
            break;
        case FenArrayType.PterodactylDefenseEasternBenoni_B06:
            fenArray = fenPterodactylDefenseEasternBenoni_B06;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationDonnerDefense_E94:
            fenArray = fenKingsIndianDefenseOrthodoxVariationDonnerDefense_E94;
            break;
        case FenArrayType.QueensGambitDeclinedSemiTarraschDefenseMainLine_D42:
            fenArray = fenQueensGambitDeclinedSemiTarraschDefenseMainLine_D42;
            break;
        case FenArrayType.SpanishGameClosedVariationsChigorinDefense_1_C98:
            fenArray = fenSpanishGameClosedVariationsChigorinDefense_1_C98;
            break;
        case FenArrayType.PterodactylDefenseWesternRhamporhynchus_B06:
            fenArray = fenPterodactylDefenseWesternRhamporhynchus_B06;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitFianchettoVariation_D09:
            fenArray =
                fenQueensGambitRefusedAlbinCountergambitFianchettoVariation_D09;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationEnglishAttack_2_B80:
            fenArray = fenSicilianDefenseScheveningenVariationEnglishAttack_2_B80;
            break;
        case FenArrayType.AlekhineDefenseModernVariationLarsenHaakertVariation_B04:
            fenArray = fenAlekhineDefenseModernVariationLarsenHaakertVariation_B04;
            break;
        case FenArrayType.SicilianDefenseNimzowitschVariationMainLine_B29:
            fenArray = fenSicilianDefenseNimzowitschVariationMainLine_B29;
            break;
        case FenArrayType.ZukertortOpeningPolishDefense_A04:
            fenArray = fenZukertortOpeningPolishDefense_A04;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationFianchettoVariation_A36:
            fenArray = fenEnglishOpeningSymmetricalVariationFianchettoVariation_A36;
            break;
        case FenArrayType.SlavDefenseCzechVariationCarlsbadVariationMorozevichVariation_D17:
            fenArray =
                fenSlavDefenseCzechVariationCarlsbadVariationMorozevichVariation_D17;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationRubinsteinVariationAccepted_C48:
            fenArray =
                fenFourKnightsGameSpanishVariationRubinsteinVariationAccepted_C48;
            break;
        case FenArrayType.SicilianDefenseCanalAttackHaagGambit_B51:
            fenArray = fenSicilianDefenseCanalAttackHaagGambit_B51;
            break;
        case FenArrayType.SpanishGameMarshallAttackGeneral_C89:
            fenArray = fenSpanishGameMarshallAttackGeneral_C89;
            break;
        case FenArrayType.RussianGameMilleniumAttack_C42:
            fenArray = fenRussianGameMilleniumAttack_C42;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationByrneSimaginVariation_D97:
            fenArray = fenGruenfeldDefenseRussianVariationByrneSimaginVariation_D97;
            break;
        case FenArrayType.SpanishGameClosedVariationsZaitsevSystem_C92:
            fenArray = fenSpanishGameClosedVariationsZaitsevSystem_C92;
            break;
        case FenArrayType.PircDefense150AttackSveshnikovJansaAttack_B07:
            fenArray = fenPircDefense150AttackSveshnikovJansaAttack_B07;
            break;
        case FenArrayType.FourKnightsGameSpanishVariation_C49:
            fenArray = fenFourKnightsGameSpanishVariation_C49;
            break;
        case FenArrayType.QueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D41:
            fenArray =
                fenQueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D41;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationVitolinsVariation_B62:
            fenArray = fenSicilianDefenseRichterRauzerVariationVitolinsVariation_B62;
            break;
        case FenArrayType.SicilianDefenseFlohrVariation_B32:
            fenArray = fenSicilianDefenseFlohrVariation_B32;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseQueensIndianFormation_A17:
            fenArray = fenEnglishOpeningAngloIndianDefenseQueensIndianFormation_A17;
            break;
        case FenArrayType.ElephantGambitPaulsenCountergambit_C40:
            fenArray = fenElephantGambitPaulsenCountergambit_C40;
            break;
        case FenArrayType.RussianGamePaulsenAttack_C42:
            fenArray = fenRussianGamePaulsenAttack_C42;
            break;
        case FenArrayType.CaroKannDefensePanovAttackModernDefenseCarlsbadLine_B13:
            fenArray = fenCaroKannDefensePanovAttackModernDefenseCarlsbadLine_B13;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationSaemischVariation_E15:
            fenArray = fenQueensIndianDefenseFianchettoVariationSaemischVariation_E15;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackRichterVariation_D01:
            fenArray = fenQueenPawnGameVeresovAtackRichterVariation_D01;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationBogoljubowVariationIII_A12:
            fenArray = fenRetiOpeningAngloSlavVariationBogoljubowVariationIII_A12;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_1_C73:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C73;
            break;
        case FenArrayType.SicilianDefenseModernVariationsAntiQxd4MoveOrder_B50:
            fenArray = fenSicilianDefenseModernVariationsAntiQxd4MoveOrder_B50;
            break;
        case FenArrayType.BenkoGambitDeclinedSosonkoVariation_A57:
            fenArray = fenBenkoGambitDeclinedSosonkoVariation_A57;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttackGrunfeldGambitCapablancaVariation_D83:
            fenArray =
                fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitCapablancaVariation_D83;
            break;
        case FenArrayType.RussianGameModernAttackCenterAttack_C43:
            fenArray = fenRussianGameModernAttackCenterAttack_C43;
            break;
        case FenArrayType.ViennaGameStanleyVariation_C26:
            fenArray = fenViennaGameStanleyVariation_C26;
            break;
        case FenArrayType.SpanishGameMorphyDefenseFianchettoDefenseDeferred_C70:
            fenArray = fenSpanishGameMorphyDefenseFianchettoDefenseDeferred_C70;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeclinedScandinavianFormation_B21:
            fenArray =
                fenSicilianDefenseSmithMorraGambitDeclinedScandinavianFormation_B21;
            break;
        case FenArrayType.QueensGambitAcceptedBogoljubowDefense_D24:
            fenArray = fenQueensGambitAcceptedBogoljubowDefense_D24;
            break;
        case FenArrayType.GunderamDefenseGeneral_C40:
            fenArray = fenGunderamDefenseGeneral_C40;
            break;
        case FenArrayType.RussianGameDamianoVariationKholmovGambit_C42:
            fenArray = fenRussianGameDamianoVariationKholmovGambit_C42;
            break;
        case FenArrayType.QueenPawnGameAntiTorre_D02:
            fenArray = fenQueenPawnGameAntiTorre_D02;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationJanowskiVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationJanowskiVariation_C12;
            break;
        case FenArrayType.SlavDefenseSlavGambitAlekhineAttack_D10:
            fenArray = fenSlavDefenseSlavGambitAlekhineAttack_D10;
            break;
        case FenArrayType.CatalanOpeningOpenDefenseTarraschDefense_E04:
            fenArray = fenCatalanOpeningOpenDefenseTarraschDefense_E04;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationNoaVariation_E37:
            fenArray = fenNimzoIndianDefenseClassicalVariationNoaVariation_E37;
            break;
        case FenArrayType.BenkoGambitZaitsevVariationNescafeFrappeAttack_A57:
            fenArray = fenBenkoGambitZaitsevVariationNescafeFrappeAttack_A57;
            break;
        case FenArrayType.KingPawnGameMaroczyDefense_B07:
            fenArray = fenKingPawnGameMaroczyDefense_B07;
            break;
        case FenArrayType.ScotchGameGoringGambit_C44:
            fenArray = fenScotchGameGoringGambit_C44;
            break;
        case FenArrayType.ItalianGameScotchGambitMaxLangeAttack_C55:
            fenArray = fenItalianGameScotchGambitMaxLangeAttack_C55;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_B76:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttack_B76;
            break;
        case FenArrayType.SicilianDefenseMcDonnellAttackTalGambit_B21:
            fenArray = fenSicilianDefenseMcDonnellAttackTalGambit_B21;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_1_B85:
            fenArray =
                fenSicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_1_B85;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationNimzowitschVariationTimmansLine_E15:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationNimzowitschVariationTimmansLine_E15;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationSmyslovVariationMainLine_B17:
            fenArray = fenCaroKannDefenseKarpovVariationSmyslovVariationMainLine_B17;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariation_E26:
            fenArray = fenNimzoIndianDefenseSaemischVariation_E26;
            break;
        case FenArrayType.BishopsOpeningViennaHybridHromadkaVariation_C28:
            fenArray = fenBishopsOpeningViennaHybridHromadkaVariation_C28;
            break;
        case FenArrayType.SlavDefenseExchangeVariationTrifunovicVariation_D14:
            fenArray = fenSlavDefenseExchangeVariationTrifunovicVariation_D14;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationLundinVariation_D47:
            fenArray = fenSemiSlavDefenseMeranVariationLundinVariation_D47;
            break;
        case FenArrayType.NimzoIndianDefenseSpielmannVariation_E22:
            fenArray = fenNimzoIndianDefenseSpielmannVariation_E22;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariation_E28:
            fenArray = fenNimzoIndianDefenseSaemischVariation_E28;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationIvanovVariation_B63:
            fenArray = fenSicilianDefenseRichterRauzerVariationIvanovVariation_B63;
            break;
        case FenArrayType.QueensIndianDefenseKasparovVariationGeneral_E13:
            fenArray = fenQueensIndianDefenseKasparovVariationGeneral_E13;
            break;
        case FenArrayType.ViennaGameFalkbeerVariation_C26:
            fenArray = fenViennaGameFalkbeerVariation_C26;
            break;
        case FenArrayType.KingsIndianAttackSmyslovVariation_A05:
            fenArray = fenKingsIndianAttackSmyslovVariation_A05;
            break;
        case FenArrayType.PircDefenseClassicalVariation_1_B07:
            fenArray = fenPircDefenseClassicalVariation_1_B07;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackAlburtDefense_D00:
            fenArray = fenQueenPawnGameVeresovAtackAlburtDefense_D00;
            break;
        case FenArrayType.DutchDefenseClassicalVariationStonewallVariation_A95:
            fenArray = fenDutchDefenseClassicalVariationStonewallVariation_A95;
            break;
        case FenArrayType.DanishGambitGeneral_C21:
            fenArray = fenDanishGambitGeneral_C21;
            break;
        case FenArrayType.ScandinavianDefensePanovTransfer_B01:
            fenArray = fenScandinavianDefensePanovTransfer_B01;
            break;
        case FenArrayType.QueensGambitAcceptedRosenthalVariation_D21:
            fenArray = fenQueensGambitAcceptedRosenthalVariation_D21;
            break;
        case FenArrayType.ItalianGameEvansGambitAnderssenVariationCordelLine_C51:
            fenArray = fenItalianGameEvansGambitAnderssenVariationCordelLine_C51;
            break;
        case FenArrayType.BirdOpeningLaskerVariation_A03:
            fenArray = fenBirdOpeningLaskerVariation_A03;
            break;
        case FenArrayType.RussianGameClassicalAttackMarshallVariation_C42:
            fenArray = fenRussianGameClassicalAttackMarshallVariation_C42;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationLondonDefensiveSystem_A12:
            fenArray = fenRetiOpeningAngloSlavVariationLondonDefensiveSystem_A12;
            break;
        case FenArrayType.ZukertortOpeningLisitsynGambit_A04:
            fenArray = fenZukertortOpeningLisitsynGambit_A04;
            break;
        case FenArrayType.SicilianDefenseKanVariationWingAttackSpraggettAttack_B43:
            fenArray = fenSicilianDefenseKanVariationWingAttackSpraggettAttack_B43;
            break;
        case FenArrayType.SpanishGameClosedVariationsCenterAttack_C84:
            fenArray = fenSpanishGameClosedVariationsCenterAttack_C84;
            break;
        case FenArrayType.FrenchDefenseAlekhineChatardAttackMaroczyVariation_C13:
            fenArray = fenFrenchDefenseAlekhineChatardAttackMaroczyVariation_C13;
            break;
        case FenArrayType.DutchDefenseLeningradVariation_A86:
            fenArray = fenDutchDefenseLeningradVariation_A86;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationYugoslavVariationRareLines_E64:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationYugoslavVariationRareLines_E64;
            break;
        case FenArrayType.SlavDefenseCzechVariationWiesbadenVariationSharpline_D17:
            fenArray = fenSlavDefenseCzechVariationWiesbadenVariationSharpline_D17;
            break;
        case FenArrayType.QueensGambitDeclinedWestphalianVariation_D51:
            fenArray = fenQueensGambitDeclinedWestphalianVariation_D51;
            break;
        case FenArrayType.NimzowitschDefenseMikenasVariation_B00:
            fenArray = fenNimzowitschDefenseMikenasVariation_B00;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationNeoClassicalDefense_B96:
            fenArray = fenSicilianDefenseNajdorfVariationNeoClassicalDefense_B96;
            break;
        case FenArrayType.AlekhineDefenseGeneral_B02:
            fenArray = fenAlekhineDefenseGeneral_B02;
            break;
        case FenArrayType.ModernDefenseRossolimoVariation_A41:
            fenArray = fenModernDefenseRossolimoVariation_A41;
            break;
        case FenArrayType.DutchDefenseClassicalVariationIlyinZhenevskyVariationGeneral_A97:
            fenArray =
                fenDutchDefenseClassicalVariationIlyinZhenevskyVariationGeneral_A97;
            break;
        case FenArrayType.ItalianGameClassicalVariationGiuocoPianissimoMainline_C53:
            fenArray = fenItalianGameClassicalVariationGiuocoPianissimoMainline_C53;
            break;
        case FenArrayType.SicilianDefenseKanVariationWingAttackFianchettoVariation_B43:
            fenArray =
                fenSicilianDefenseKanVariationWingAttackFianchettoVariation_B43;
            break;
        case FenArrayType.QueensGambitDeclinedAntiTartakowerVariationPetrosianVariation_D55:
            fenArray =
                fenQueensGambitDeclinedAntiTartakowerVariationPetrosianVariation_D55;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationRetreatVariationGeneral_C18:
            fenArray = fenFrenchDefenseWinawerVariationRetreatVariationGeneral_C18;
            break;
        case FenArrayType.IndianGameNormalVariation_A50:
            fenArray = fenIndianGameNormalVariation_A50;
            break;
        case FenArrayType.SicilianDefenseKronbergerVariation_B20:
            fenArray = fenSicilianDefenseKronbergerVariation_B20;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationWadeVariationLarsenVariation_D47:
            fenArray =
                fenSemiSlavDefenseMeranVariationWadeVariationLarsenVariation_D47;
            break;
        case FenArrayType.DutchDefenseNimzoDutchVariation_A90:
            fenArray = fenDutchDefenseNimzoDutchVariation_A90;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemBenkoAttack_E99:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationClassicalSystemBenkoAttack_E99;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationBrowneVariation_B98:
            fenArray = fenSicilianDefenseNajdorfVariationBrowneVariation_B98;
            break;
        case FenArrayType.RubinsteinOpeningBogoljubowDefense_D05:
            fenArray = fenRubinsteinOpeningBogoljubowDefense_D05;
            break;
        case FenArrayType.NeoGruenfeldDefenseClassicalVariationPolgarVariation_D78:
            fenArray = fenNeoGruenfeldDefenseClassicalVariationPolgarVariation_D78;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitAnderssenVariation_C54:
            fenArray =
                fenItalianGameClassicalVariationGrecoGambitAnderssenVariation_C54;
            break;
        case FenArrayType.BirdOpeningFromGambitLaskerVariation_A02:
            fenArray = fenBirdOpeningFromGambitLaskerVariation_A02;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationMaroczyBindRobatschLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationMaroczyBindRobatschLine_B28;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationZurichVariation_E33:
            fenArray = fenNimzoIndianDefenseClassicalVariationZurichVariation_E33;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseUlvestadVariation_C57:
            fenArray = fenItalianGameTwoKnightsDefenseUlvestadVariation_C57;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_2_C75:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C75;
            break;
        case FenArrayType.QueenPawnGameColleSystemGruenfeldFormation_A48:
            fenArray = fenQueenPawnGameColleSystemGruenfeldFormation_A48;
            break;
        case FenArrayType.KingsIndianDefenseZinnowitzVariation_E90:
            fenArray = fenKingsIndianDefenseZinnowitzVariation_E90;
            break;
        case FenArrayType.SpanishGameClosedVariationsSmyslovBreyerZaitsevHybrid_C93:
            fenArray = fenSpanishGameClosedVariationsSmyslovBreyerZaitsevHybrid_C93;
            break;
        case FenArrayType.NimzoIndianDefenseThreeKnightsVariationDuchampVariationModernLine_E21:
            fenArray =
                fenNimzoIndianDefenseThreeKnightsVariationDuchampVariationModernLine_E21;
            break;
        case FenArrayType.SlavDefenseSmyslovVariation_D16:
            fenArray = fenSlavDefenseSmyslovVariation_D16;
            break;
        case FenArrayType.OldIndianCzechVariationwNc3_A53:
            fenArray = fenOldIndianCzechVariationwNc3_A53;
            break;
        case FenArrayType.ModernDefenseBishopAttack_B06:
            fenArray = fenModernDefenseBishopAttack_B06;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseFritzVariation_C57:
            fenArray = fenItalianGameTwoKnightsDefenseFritzVariation_C57;
            break;
        case FenArrayType.BenoniDefenseOldBenoniDefenseClarendonCourtVariation_A43:
            fenArray = fenBenoniDefenseOldBenoniDefenseClarendonCourtVariation_A43;
            break;
        case FenArrayType.FourKnightsGameScotchVariation_C47:
            fenArray = fenFourKnightsGameScotchVariation_C47;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationBogoljubowVariationII_A12:
            fenArray = fenRetiOpeningAngloSlavVariationBogoljubowVariationII_A12;
            break;
        case FenArrayType.TrompowskyAttackPoisonedPawnVariation_A45:
            fenArray = fenTrompowskyAttackPoisonedPawnVariation_A45;
            break;
        case FenArrayType.RussianGameModernAttackMurreyVariation_C43:
            fenArray = fenRussianGameModernAttackMurreyVariation_C43;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariationMoscowVariation_C17:
            fenArray =
                fenFrenchDefenseWinawerVariationAdvanceVariationMoscowVariation_C17;
            break;
        case FenArrayType.KingsKnightOpeningKonstantinopolskyOpening_C44:
            fenArray = fenKingsKnightOpeningKonstantinopolskyOpening_C44;
            break;
        case FenArrayType.SicilianDefenseKanVariationMaroczyBindBronsteinVariation_B41:
            fenArray =
                fenSicilianDefenseKanVariationMaroczyBindBronsteinVariation_B41;
            break;
        case FenArrayType.KingPawnGameTaylerOpeningInvertedHanham_C44:
            fenArray = fenKingPawnGameTaylerOpeningInvertedHanham_C44;
            break;
        case FenArrayType.ItalianGameBirdsAttack_C53:
            fenArray = fenItalianGameBirdsAttack_C53;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationMainline_A73:
            fenArray = fenBenoniDefenseClassicalVariationMainline_A73;
            break;
        case FenArrayType.CatalanOpeningClosedVariationBotvinnikVariation_E07:
            fenArray = fenCatalanOpeningClosedVariationBotvinnikVariation_E07;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationClosedSystem_A25:
            fenArray = fenEnglishOpeningKingsEnglishVariationClosedSystem_A25;
            break;
        case FenArrayType.NimzoIndianDefenseRomanishinVariationEnglishHybrid_E20:
            fenArray = fenNimzoIndianDefenseRomanishinVariationEnglishHybrid_E20;
            break;
        case FenArrayType.SlavDefenseAlapinVariation_D16:
            fenArray = fenSlavDefenseAlapinVariation_D16;
            break;
        case FenArrayType.BenoniDefenseUhlmannVariation_A61:
            fenArray = fenBenoniDefenseUhlmannVariation_A61;
            break;
        case FenArrayType.ItalianGameClassicalVariationClosedVariation_C53:
            fenArray = fenItalianGameClassicalVariationClosedVariation_C53;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_2_C73:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C73;
            break;
        case FenArrayType.HungarianOpeningDutchDefense_A00:
            fenArray = fenHungarianOpeningDutchDefense_A00;
            break;
        case FenArrayType.RussianGameClassicalAttackMasonVariation_C42:
            fenArray = fenRussianGameClassicalAttackMasonVariation_C42;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationPolugayevskyVariation_B96:
            fenArray = fenSicilianDefenseNajdorfVariationPolugayevskyVariation_B96;
            break;
        case FenArrayType.ModernDefenseNorwegianDefense_B06:
            fenArray = fenModernDefenseNorwegianDefense_B06;
            break;
        case FenArrayType.SpanishGameBerlinDefense_C65:
            fenArray = fenSpanishGameBerlinDefense_C65;
            break;
        case FenArrayType.SemiSlavDefenseBotvinnikVariation_D44:
            fenArray = fenSemiSlavDefenseBotvinnikVariation_D44;
            break;
        case FenArrayType.SlavDefenseWinawerCountergambit_D10:
            fenArray = fenSlavDefenseWinawerCountergambit_D10;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationExchangeVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationExchangeVariation_C12;
            break;
        case FenArrayType.RatDefenseSmallCenterDefense_C00:
            fenArray = fenRatDefenseSmallCenterDefense_C00;
            break;
        case FenArrayType.QueenPawnGameFrancoSicilianDefense_C00:
            fenArray = fenQueenPawnGameFrancoSicilianDefense_C00;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseSchonemannAttack_C63:
            fenArray = fenSpanishGameSchliemannDefenseSchonemannAttack_C63;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationRetiSystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationRetiSystem_B28;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_1_C74:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_1_C74;
            break;
        case FenArrayType.QueensGambitRefusedAustrianDefense_D06:
            fenArray = fenQueensGambitRefusedAustrianDefense_D06;
            break;
        case FenArrayType.ClemenzOpeningGeneral_A00:
            fenArray = fenClemenzOpeningGeneral_A00;
            break;
        case FenArrayType.QueensGambitDeclinedMilesVariationDzhindzhiAttack_D53:
            fenArray = fenQueensGambitDeclinedMilesVariationDzhindzhiAttack_D53;
            break;
        case FenArrayType.FrenchDefenseAlekhineChatardAttackAlbinChatardGambit_C13:
            fenArray = fenFrenchDefenseAlekhineChatardAttackAlbinChatardGambit_C13;
            break;
        case FenArrayType.RussianGameClassicalAttackJaenischVariation_C42:
            fenArray = fenRussianGameClassicalAttackJaenischVariation_C42;
            break;
        case FenArrayType.SpanishGameBerlinDefenseBerlinWallJRogersLine_C67:
            fenArray = fenSpanishGameBerlinDefenseBerlinWallJRogersLine_C67;
            break;
        case FenArrayType.SpanishGameOpenVariationsStPetersburgVariation_C82:
            fenArray = fenSpanishGameOpenVariationsStPetersburgVariation_C82;
            break;
        case FenArrayType.AlekhineDefenseTwoPawnAttack_B02:
            fenArray = fenAlekhineDefenseTwoPawnAttack_B02;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationAverbakhGrivasAttack_A71:
            fenArray = fenBenoniDefenseClassicalVariationAverbakhGrivasAttack_A71;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePerreuxVariation_C55:
            fenArray = fenItalianGameTwoKnightsDefensePerreuxVariation_C55;
            break;
        case FenArrayType.QueensGambitDeclinedLaskerDefenseTeichmannVariation_D56:
            fenArray = fenQueensGambitDeclinedLaskerDefenseTeichmannVariation_D56;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseClassicalVariation_C63:
            fenArray = fenSpanishGameSchliemannDefenseClassicalVariation_C63;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariation_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariation_E73;
            break;
        case FenArrayType.IndianGameDefensePseudoQueensIndianMarienbadSystem_A47:
            fenArray = fenIndianGameDefensePseudoQueensIndianMarienbadSystem_A47;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariation_E27:
            fenArray = fenNimzoIndianDefenseSaemischVariation_E27;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationVitolinshAdorjanGambit_E32:
            fenArray =
                fenNimzoIndianDefenseClassicalVariationVitolinshAdorjanGambit_E32;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedClassicalFormation_B21:
            fenArray =
                fenSicilianDefenseSmithMorraGambitAcceptedClassicalFormation_B21;
            break;
        case FenArrayType.ItalianGameEvansGambitDeclined_C51:
            fenArray = fenItalianGameEvansGambitDeclined_C51;
            break;
        case FenArrayType.ViennaGameViennaGambitModernVariation_C29:
            fenArray = fenViennaGameViennaGambitModernVariation_C29;
            break;
        case FenArrayType.SpanishGameMorphyDefenseSchliemannDefenseDeferred_C70:
            fenArray = fenSpanishGameMorphyDefenseSchliemannDefenseDeferred_C70;
            break;
        case FenArrayType.ViennaGameViennaGambitBreyerVariation_C29:
            fenArray = fenViennaGameViennaGambitBreyerVariation_C29;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeferred_B40:
            fenArray = fenSicilianDefenseSmithMorraGambitDeferred_B40;
            break;
        case FenArrayType.QueensGambitDeclinedViennaVariation_D30:
            fenArray = fenQueensGambitDeclinedViennaVariation_D30;
            break;
        case FenArrayType.PhilidorDefenseExchangeVariation_3_C41:
            fenArray = fenPhilidorDefenseExchangeVariation_3_C41;
            break;
        case FenArrayType.SpanishGameClosedVariationsKholmovVariation_C92:
            fenArray = fenSpanishGameClosedVariationsKholmovVariation_C92;
            break;
        case FenArrayType.SemiSlavDefenseMarshallGambitForgottenVariation_D31:
            fenArray = fenSemiSlavDefenseMarshallGambitForgottenVariation_D31;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackMainLineOldMainLine_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackMainLineOldMainLine_D37;
            break;
        case FenArrayType.OldIndianDefenseJanowskiVariationFianchettoVariation_1_A53:
            fenArray = fenOldIndianDefenseJanowskiVariationFianchettoVariation_1_A53;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseKurajicaDefense_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseKurajicaDefense_A13;
            break;
        case FenArrayType.KingsGambitAcceptedSchallopDefense_C34:
            fenArray = fenKingsGambitAcceptedSchallopDefense_C34;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackSosonkoVariation_B77:
            fenArray =
                fenSicilianDefenseDragonVariationYugoslavAttackSosonkoVariation_B77;
            break;
        case FenArrayType.KingsGambitDeclinedClassicalVariationGeneral_C30:
            fenArray = fenKingsGambitDeclinedClassicalVariationGeneral_C30;
            break;
        case FenArrayType.QueensGambitDeclinedHastingsVariation_D30:
            fenArray = fenQueensGambitDeclinedHastingsVariation_D30;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationGufeldGambit_B31:
            fenArray =
                fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationGufeldGambit_B31;
            break;
        case FenArrayType.ScotchGameModernDefense_C45:
            fenArray = fenScotchGameModernDefense_C45;
            break;
        case FenArrayType.GruenfeldDefenseOpocenskyVariation_D94:
            fenArray = fenGruenfeldDefenseOpocenskyVariation_D94;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseScandavianDefenseExchangeVariation_A15:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseScandavianDefenseExchangeVariation_A15;
            break;
        case FenArrayType.SpanishGameClassicalVariationModernMainLine_C64:
            fenArray = fenSpanishGameClassicalVariationModernMainLine_C64;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambit_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambit_C33;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationTartakowerLine_B74:
            fenArray =
                fenSicilianDefenseDragonVariationClassicalVariationTartakowerLine_B74;
            break;
        case FenArrayType.AlekhineDefenseModernVariation_B04:
            fenArray = fenAlekhineDefenseModernVariation_B04;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_1_C17:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_1_C17;
            break;
        case FenArrayType.PolishOpeningOutflankVariation_A00:
            fenArray = fenPolishOpeningOutflankVariation_A00;
            break;
        case FenArrayType.SicilianDefenseWingGambitDeferred_B40:
            fenArray = fenSicilianDefenseWingGambitDeferred_B40;
            break;
        case FenArrayType.QueensGambitAcceptedCentralVariationGrecoVariation_D20:
            fenArray = fenQueensGambitAcceptedCentralVariationGrecoVariation_D20;
            break;
        case FenArrayType.GruenfeldDefenseMakogonovVariation_D94:
            fenArray = fenGruenfeldDefenseMakogonovVariation_D94;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationRubinsteinVariation_E16:
            fenArray =
                fenQueensIndianDefenseFianchettoVariationRubinsteinVariation_E16;
            break;
        case FenArrayType.ItalianGameClassicalVariationAlbinGambit_C53:
            fenArray = fenItalianGameClassicalVariationAlbinGambit_C53;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariation_2_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSveshnikovVariation_2_B33;
            break;
        case FenArrayType.QueenPawnGameMasonAttack_D00:
            fenArray = fenQueenPawnGameMasonAttack_D00;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationAcceleratedVariation_D81:
            fenArray = fenGruenfeldDefenseRussianVariationAcceleratedVariation_D81;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSimaginsImprovedVariation_D86:
            fenArray =
                fenGruenfeldDefenseExchangeVariationSimaginsImprovedVariation_D86;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationMaroczyBindGellerLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationMaroczyBindGellerLine_B28;
            break;
        case FenArrayType.QueensGambitDeclinedTartakowerVariationExchangeVariation_D57:
            fenArray =
                fenQueensGambitDeclinedTartakowerVariationExchangeVariation_D57;
            break;
        case FenArrayType.SpanishGameMorphyDefenseDurasVariation_C77:
            fenArray = fenSpanishGameMorphyDefenseDurasVariation_C77;
            break;
        case FenArrayType.ScandinavianDefensePortugueseVariationPortugueseGambit_B01:
            fenArray = fenScandinavianDefensePortugueseVariationPortugueseGambit_B01;
            break;
        case FenArrayType.StGeorgeDefensePolishVariation_B00:
            fenArray = fenStGeorgeDefensePolishVariation_B00;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackClassicalDefense_D01:
            fenArray = fenQueenPawnGameVeresovAtackClassicalDefense_D01;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariation_E29:
            fenArray = fenNimzoIndianDefenseSaemischVariation_E29;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationParisVariation_D94:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationParisVariation_D94;
            break;
        case FenArrayType.FrenchDefenseExchangeVariationSvenoniusVariation_C01:
            fenArray = fenFrenchDefenseExchangeVariationSvenoniusVariation_C01;
            break;
        case FenArrayType.KingPawnGameLeonardisVariation_C20:
            fenArray = fenKingPawnGameLeonardisVariation_C20;
            break;
        case FenArrayType.SicilianDefenseModernVariationsTartakower_B53:
            fenArray = fenSicilianDefenseModernVariationsTartakower_B53;
            break;
        case FenArrayType.FourKnightsGameNimzowitschPaulsen_C49:
            fenArray = fenFourKnightsGameNimzowitschPaulsen_C49;
            break;
        case FenArrayType.ScotchGameScotchGambitLondonDefense_C44:
            fenArray = fenScotchGameScotchGambitLondonDefense_C44;
            break;
        case FenArrayType.SlavDefenseTwoKnightsAttack_D15:
            fenArray = fenSlavDefenseTwoKnightsAttack_D15;
            break;
        case FenArrayType.CaroKannDefenseDeBruyckerDefense_A40:
            fenArray = fenCaroKannDefenseDeBruyckerDefense_A40;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationCapablancaVariation_A12:
            fenArray = fenRetiOpeningAngloSlavVariationCapablancaVariation_A12;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationSymmetricalVariation_2_C49:
            fenArray = fenFourKnightsGameSpanishVariationSymmetricalVariation_2_C49;
            break;
        case FenArrayType.CenterGameNormalVariation_C22:
            fenArray = fenCenterGameNormalVariation_C22;
            break;
        case FenArrayType.VanGeetOpeningNapoleonAttack_A00:
            fenArray = fenVanGeetOpeningNapoleonAttack_A00;
            break;
        case FenArrayType.DanishGambitDeclinedSorensenDefense_C21:
            fenArray = fenDanishGambitDeclinedSorensenDefense_C21;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationSwissVariation_C11:
            fenArray = fenFrenchDefenseClassicalVariationSwissVariation_C11;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationTalVariation_B82:
            fenArray = fenSicilianDefenseScheveningenVariationTalVariation_B82;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationModernExchangeVariationKramniksline_D85:
            fenArray =
                fenGruenfeldDefenseExchangeVariationModernExchangeVariationKramniksline_D85;
            break;
        case FenArrayType.SystemCanardFormation_A45:
            fenArray = fenSystemCanardFormation_A45;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationArgentineCounterattack_A75:
            fenArray = fenBenoniDefenseClassicalVariationArgentineCounterattack_A75;
            break;
        case FenArrayType.NeoGrunfeldDefenseNonorDelayedFianchetto_D70:
            fenArray = fenNeoGrunfeldDefenseNonorDelayedFianchetto_D70;
            break;
        case FenArrayType.ScotchGameScotchGambitKingsideVariation_C45:
            fenArray = fenScotchGameScotchGambitKingsideVariation_C45;
            break;
        case FenArrayType.CatalanOpeningOpenDefense_E02:
            fenArray = fenCatalanOpeningOpenDefense_E02;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationClassicalVariationKantscherLine_B66:
            fenArray =
                fenSicilianDefenseRichterRauzerVariationClassicalVariationKantscherLine_B66;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseAlekhineSystemExceptMainLine_D28:
            fenArray =
                fenQueensGambitAcceptedClassicalDefenseAlekhineSystemExceptMainLine_D28;
            break;
        case FenArrayType.QueensGambitRefusedBalticDefensePseudoChigorin_D02:
            fenArray = fenQueensGambitRefusedBalticDefensePseudoChigorin_D02;
            break;
        case FenArrayType.RussianGameUrusovGambit_C42:
            fenArray = fenRussianGameUrusovGambit_C42;
            break;
        case FenArrayType.NimzoIndianDefenseLeningradVariationBenoniDefense_E31:
            fenArray = fenNimzoIndianDefenseLeningradVariationBenoniDefense_E31;
            break;
        case FenArrayType.NeoGruenfeldDefenseDelayedExchangeVariation_1_D75:
            fenArray = fenNeoGruenfeldDefenseDelayedExchangeVariation_1_D75;
            break;
        case FenArrayType.ZukertortOpeningLisitsynGambitDeferred_A04:
            fenArray = fenZukertortOpeningLisitsynGambitDeferred_A04;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationNormalSystemTaimanovLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationNormalSystemTaimanovLine_B28;
            break;
        case FenArrayType.ZukertortOpeningDoubleFianchettoAttack_A49:
            fenArray = fenZukertortOpeningDoubleFianchettoAttack_A49;
            break;
        case FenArrayType.BorgDefenseGeneral_B00:
            fenArray = fenBorgDefenseGeneral_B00;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitModernLine_D08:
            fenArray = fenQueensGambitRefusedAlbinCountergambitModernLine_D08;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationDelayedFianchetto_E62:
            fenArray = fenKingsIndianDefenseFianchettoVariationDelayedFianchetto_E62;
            break;
        case FenArrayType.AlekhineDefenseFourPawnsAttackFianchettoVariation_B03:
            fenArray = fenAlekhineDefenseFourPawnsAttackFianchettoVariation_B03;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationTraditionalVariation_B63:
            fenArray =
                fenSicilianDefenseRichterRauzerVariationTraditionalVariation_B63;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationTorreSystem_A12:
            fenArray = fenRetiOpeningAngloSlavVariationTorreSystem_A12;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationHubnerDeferred_E50:
            fenArray = fenNimzoIndianDefenseNormalVariationHubnerDeferred_E50;
            break;
        case FenArrayType.EnglishOpeningAngloLithuanianVariation_A10:
            fenArray = fenEnglishOpeningAngloLithuanianVariation_A10;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationExchangeVariation_B33:
            fenArray = fenSicilianDefenseLaskerPelikanVariationExchangeVariation_B33;
            break;
        case FenArrayType.QueensGambitDeclinedModernKnightDefense_3_D51:
            fenArray = fenQueensGambitDeclinedModernKnightDefense_3_D51;
            break;
        case FenArrayType.FrenchDefenseHorwitzAttack_C00:
            fenArray = fenFrenchDefenseHorwitzAttack_C00;
            break;
        case FenArrayType.BenoniDefenseFourPawnsAttack_A68:
            fenArray = fenBenoniDefenseFourPawnsAttack_A68;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationScheveningenVariation_B84:
            fenArray = fenSicilianDefenseNajdorfVariationScheveningenVariation_B84;
            break;
        case FenArrayType.SpanishGameMorphyDefenseBreyerDefenseQuietVariation_C94:
            fenArray = fenSpanishGameMorphyDefenseBreyerDefenseQuietVariation_C94;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationVeniceSystemSteinerLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationVeniceSystemSteinerLine_B28;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitNimzowitschMarshallCountergambit_C31:
            fenArray =
                fenKingsGambitFalkbeerCountergambitNimzowitschMarshallCountergambit_C31;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackVeresovVariation_D01:
            fenArray = fenQueenPawnGameVeresovAtackVeresovVariation_D01;
            break;
        case FenArrayType.EnglishOpeningTheWhale_C20:
            fenArray = fenEnglishOpeningTheWhale_C20;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationWolfGambit_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationWolfGambit_C12;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationSmyslovVariation_D98:
            fenArray = fenGruenfeldDefenseRussianVariationSmyslovVariation_D98;
            break;
        case FenArrayType.GruenfeldDefenseFlohrVariation_D90:
            fenArray = fenGruenfeldDefenseFlohrVariation_D90;
            break;
        case FenArrayType.BenkoGambitAcceptedYugoslavwithout7Bxf1_A59:
            fenArray = fenBenkoGambitAcceptedYugoslavwithout7Bxf1_A59;
            break;
        case FenArrayType.SpanishGameOpenVariationsDilworthVariation_C82:
            fenArray = fenSpanishGameOpenVariationsDilworthVariation_C82;
            break;
        case FenArrayType.GruenfeldDefenseThreeKnightsVariationViennaVariation_D95:
            fenArray = fenGruenfeldDefenseThreeKnightsVariationViennaVariation_D95;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationSzaboBoleslavsky_D97:
            fenArray = fenGruenfeldDefenseRussianVariationSzaboBoleslavsky_D97;
            break;
        case FenArrayType.ItalianGameScotchGambitJanowskiDefense_C55:
            fenArray = fenItalianGameScotchGambitJanowskiDefense_C55;
            break;
        case FenArrayType.CaroKannDefensePanovAttack_2_B13:
            fenArray = fenCaroKannDefensePanovAttack_2_B13;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationCzerniakDefense_A79:
            fenArray = fenBenoniDefenseClassicalVariationCzerniakDefense_A79;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationTiviakovFischerAttack_B17:
            fenArray = fenCaroKannDefenseKarpovVariationTiviakovFischerAttack_B17;
            break;
        case FenArrayType.TarraschDefenseSwedishVariation_D33:
            fenArray = fenTarraschDefenseSwedishVariation_D33;
            break;
        case FenArrayType.EnglishOpeningAgincourtDefenseBogoljubowDefense_A13:
            fenArray = fenEnglishOpeningAgincourtDefenseBogoljubowDefense_A13;
            break;
        case FenArrayType.DutchDefenseClassicalVariation_A91:
            fenArray = fenDutchDefenseClassicalVariation_A91;
            break;
        case FenArrayType.SicilianDefenseClosedVariationBotvinnikDefenseI_B25:
            fenArray = fenSicilianDefenseClosedVariationBotvinnikDefenseI_B25;
            break;
        case FenArrayType.ViennaGameStanleyVariationModernVariation_C27:
            fenArray = fenViennaGameStanleyVariationModernVariation_C27;
            break;
        case FenArrayType.PolishOpeningBugayevAttack_A00:
            fenArray = fenPolishOpeningBugayevAttack_A00;
            break;
        case FenArrayType.SpanishGameClosedVariationsClosedDefense_2_C96:
            fenArray = fenSpanishGameClosedVariationsClosedDefense_2_C96;
            break;
        case FenArrayType.SpanishGameClosedVariationsYatesVariation_C91:
            fenArray = fenSpanishGameClosedVariationsYatesVariation_C91;
            break;
        case FenArrayType.FourKnightsGameItalianVariationNoaGambit_C47:
            fenArray = fenFourKnightsGameItalianVariationNoaGambit_C47;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationNadanianAttack_D85:
            fenArray = fenGruenfeldDefenseExchangeVariationNadanianAttack_D85;
            break;
        case FenArrayType.RussianGameStaffordGambit_C42:
            fenArray = fenRussianGameStaffordGambit_C42;
            break;
        case FenArrayType.QueensGambitAcceptedNormalVariation_D21:
            fenArray = fenQueensGambitAcceptedNormalVariation_D21;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttackCzerniakVariation_B77:
            fenArray =
                fenSicilianDefenseDragonVariationYugoslavAttackCzerniakVariation_B77;
            break;
        case FenArrayType.QueensGambitAcceptedCentralVariationRubinsteinDefense_D20:
            fenArray = fenQueensGambitAcceptedCentralVariationRubinsteinDefense_D20;
            break;
        case FenArrayType.BogoIndianDefenseRetreatVariation_E11:
            fenArray = fenBogoIndianDefenseRetreatVariation_E11;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttackGrunfeldGambitAccepted_D84:
            fenArray = fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitAccepted_D84;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationTaimanovVariation_B46:
            fenArray = fenSicilianDefensePaulsenVariationTaimanovVariation_B46;
            break;
        case FenArrayType.FrenchDefenseAlekhineChatardAttackBreyerVariation_C13:
            fenArray = fenFrenchDefenseAlekhineChatardAttackBreyerVariation_C13;
            break;
        case FenArrayType.SicilianDefenseRichterRauzerVariationDragonVariation_B60:
            fenArray = fenSicilianDefenseRichterRauzerVariationDragonVariation_B60;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefenseSiestaVariation_C74:
            fenArray =
                fenSpanishGameMorphyDefenseModernSteinitzDefenseSiestaVariation_C74;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_2_C71:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C71;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLines_A24:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationTwoKnightsVariationFianchettoLines_A24;
            break;
        case FenArrayType.KingsIndianAttackSicilianVariation_A07:
            fenArray = fenKingsIndianAttackSicilianVariation_A07;
            break;
        case FenArrayType.CaroKannDefenseAdvanceVariationVanderWielAttackDreyevDefense_B12:
            fenArray =
                fenCaroKannDefenseAdvanceVariationVanderWielAttackDreyevDefense_B12;
            break;
        case FenArrayType.QueensIndianDefenseClassicalVariationTiviakovDefense_E17:
            fenArray = fenQueensIndianDefenseClassicalVariationTiviakovDefense_E17;
            break;
        case FenArrayType.IndianGameCzechIndian_A46:
            fenArray = fenIndianGameCzechIndian_A46;
            break;
        case FenArrayType.MikenasDefenseLithuanianVariation_A40:
            fenArray = fenMikenasDefenseLithuanianVariation_A40;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSpasskyVariation_D89:
            fenArray = fenGruenfeldDefenseExchangeVariationSpasskyVariation_D89;
            break;
        case FenArrayType.BishopsOpeningBoiVariation_C20:
            fenArray = fenBishopsOpeningBoiVariation_C20;
            break;
        case FenArrayType.SpanishGameBerlinDefenseHedgehogVariation_C66:
            fenArray = fenSpanishGameBerlinDefenseHedgehogVariation_C66;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationBremenHortVariation_A25:
            fenArray = fenEnglishOpeningKingsEnglishVariationBremenHortVariation_A25;
            break;
        case FenArrayType.SicilianDefenseSnyderVariationQueenFianchettoVariation_B20:
            fenArray = fenSicilianDefenseSnyderVariationQueenFianchettoVariation_B20;
            break;
        case FenArrayType.SicilianDefenseClosedVariationBotvinnikDefenseII_B25:
            fenArray = fenSicilianDefenseClosedVariationBotvinnikDefenseII_B25;
            break;
        case FenArrayType.ViennaGameViennaGambit_C25:
            fenArray = fenViennaGameViennaGambit_C25;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationModernVariation_2_B83:
            fenArray = fenSicilianDefenseScheveningenVariationModernVariation_2_B83;
            break;
        case FenArrayType.PircDefenseClassicalVariation_2_B07:
            fenArray = fenPircDefenseClassicalVariation_2_B07;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationBlumenfeldVariation_D49:
            fenArray = fenSemiSlavDefenseMeranVariationBlumenfeldVariation_D49;
            break;
        case FenArrayType.BenoniDefenseFianchettoVariationHastingsDefense_A63:
            fenArray = fenBenoniDefenseFianchettoVariationHastingsDefense_A63;
            break;
        case FenArrayType.SpanishGameClosedVariationsMorphyAttack_C78:
            fenArray = fenSpanishGameClosedVariationsMorphyAttack_C78;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseAlekhineSystem_D28:
            fenArray = fenQueensGambitAcceptedClassicalDefenseAlekhineSystem_D28;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationDrOllandDutchVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationDrOllandDutchVariation_C12;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSokolskyVariation_D89:
            fenArray = fenGruenfeldDefenseExchangeVariationSokolskyVariation_D89;
            break;
        case FenArrayType.SpanishGameMorphyDefenseModernSteinitzDefense_2_C74:
            fenArray = fenSpanishGameMorphyDefenseModernSteinitzDefense_2_C74;
            break;
        case FenArrayType.BudapestDefenseAlekhineVariation_A52:
            fenArray = fenBudapestDefenseAlekhineVariation_A52;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseSlavFormation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseSlavFormation_A15;
            break;
        case FenArrayType.SicilianDefenseVeniceAttack_B56:
            fenArray = fenSicilianDefenseVeniceAttack_B56;
            break;
        case FenArrayType.SpanishGameBerlinDefenseRiodeJaneiroVariation_C67:
            fenArray = fenSpanishGameBerlinDefenseRiodeJaneiroVariation_C67;
            break;
        case FenArrayType.BlackmarDiemerGambitTeichmannVariation_D00:
            fenArray = fenBlackmarDiemerGambitTeichmannVariation_D00;
            break;
        case FenArrayType.ViennaGameStanleyVariationReversedSpanish_C26:
            fenArray = fenViennaGameStanleyVariationReversedSpanish_C26;
            break;
        case FenArrayType.PolishOpeningZukertortSystem_A04:
            fenArray = fenPolishOpeningZukertortSystem_A04;
            break;
        case FenArrayType.GrobOpeningGrobGambitFritzGambit_A00:
            fenArray = fenGrobOpeningGrobGambitFritzGambit_A00;
            break;
        case FenArrayType.AlekhineDefenseFourPawnsAttackTrifunovicVariation_B03:
            fenArray = fenAlekhineDefenseFourPawnsAttackTrifunovicVariation_B03;
            break;
        case FenArrayType.MiesesOpeningReversedRat_A00:
            fenArray = fenMiesesOpeningReversedRat_A00;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_A19:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_A19;
            break;
        case FenArrayType.SpanishGameOpenVariations_C80:
            fenArray = fenSpanishGameOpenVariations_C80;
            break;
        case FenArrayType.KingPawnGameGeneral_C20:
            fenArray = fenKingPawnGameGeneral_C20;
            break;
        case FenArrayType.DutchDefenseKrejcikGambit_A80:
            fenArray = fenDutchDefenseKrejcikGambit_A80;
            break;
        case FenArrayType.DutchDefenseClassicalVariationIlyinZhenevskyVariationModernMainLine_A99:
            fenArray =
                fenDutchDefenseClassicalVariationIlyinZhenevskyVariationModernMainLine_A99;
            break;
        case FenArrayType.PolishOpeningKingsIndianVariationSokolskyAttack_A00:
            fenArray = fenPolishOpeningKingsIndianVariationSokolskyAttack_A00;
            break;
        case FenArrayType.NimzowitschDefenseLeanVariationColoradoCounterAccepted_B00:
            fenArray = fenNimzowitschDefenseLeanVariationColoradoCounterAccepted_B00;
            break;
        case FenArrayType.IndianGameColleSystemKingsIndianVariation_A48:
            fenArray = fenIndianGameColleSystemKingsIndianVariation_A48;
            break;
        case FenArrayType.ScotchGameScotchGambitSarattVariation_C44:
            fenArray = fenScotchGameScotchGambitSarattVariation_C44;
            break;
        case FenArrayType.GruenfeldDefenseBotvinnikVariation_D95:
            fenArray = fenGruenfeldDefenseBotvinnikVariation_D95;
            break;
        case FenArrayType.ItalianGameEvansGambitTartakowerAttack_C52:
            fenArray = fenItalianGameEvansGambitTartakowerAttack_C52;
            break;
        case FenArrayType.KingPawnGameTaylerOpening_C44:
            fenArray = fenKingPawnGameTaylerOpening_C44;
            break;
        case FenArrayType.QueensGambitAcceptedAlekhineDefenseHaberditzVariation_D22:
            fenArray = fenQueensGambitAcceptedAlekhineDefenseHaberditzVariation_D22;
            break;
        case FenArrayType.ItalianGameEvansGambitAnderssenVariation_C51:
            fenArray = fenItalianGameEvansGambitAnderssenVariation_C51;
            break;
        case FenArrayType.CenterGameAccepted_C21:
            fenArray = fenCenterGameAccepted_C21;
            break;
        case FenArrayType.DutchDefenseClassicalVariationStonewallVariation_A94:
            fenArray = fenDutchDefenseClassicalVariationStonewallVariation_A94;
            break;
        case FenArrayType.SpanishGameClosedVariationsBreyerDefense_C95:
            fenArray = fenSpanishGameClosedVariationsBreyerDefense_C95;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedKanFormation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitAcceptedKanFormation_B21;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationBogoljubowVariationVehreVariation_B00:
            fenArray =
                fenNimzowitschDefenseScandinavianVariationBogoljubowVariationVehreVariation_B00;
            break;
        case FenArrayType.SicilianDefenseLaskerPelikanVariationSveshnikovVariationPeresypkinsSacrifice_B33:
            fenArray =
                fenSicilianDefenseLaskerPelikanVariationSveshnikovVariationPeresypkinsSacrifice_B33;
            break;
        case FenArrayType.SpanishGameClassicalVariationCordelGambit_C64:
            fenArray = fenSpanishGameClassicalVariationCordelGambit_C64;
            break;
        case FenArrayType.SpanishGameMorphyDefense_2_C78:
            fenArray = fenSpanishGameMorphyDefense_2_C78;
            break;
        case FenArrayType.NimzoIndianDefenseClassicalVariationBerlinVariationMaciejaSystem_E39:
            fenArray =
                fenNimzoIndianDefenseClassicalVariationBerlinVariationMaciejaSystem_E39;
            break;
        case FenArrayType.ScotchGameRomanishinVariation_C45:
            fenArray = fenScotchGameRomanishinVariation_C45;
            break;
        case FenArrayType.RubinsteinOpeningClassicalDefense_D05:
            fenArray = fenRubinsteinOpeningClassicalDefense_D05;
            break;
        case FenArrayType.SicilianDefenseNimzoAmericanVariation_B32:
            fenArray = fenSicilianDefenseNimzoAmericanVariation_B32;
            break;
        case FenArrayType.QueensGambitAcceptedDeferred_D25:
            fenArray = fenQueensGambitAcceptedDeferred_D25;
            break;
        case FenArrayType.QueensGambitAcceptedSmyslovVariation_D25:
            fenArray = fenQueensGambitAcceptedSmyslovVariation_D25;
            break;
        case FenArrayType.QueenPawnGameVeresovAttackTwoKnightsSystemGruenfeldDefense_D01:
            fenArray =
                fenQueenPawnGameVeresovAttackTwoKnightsSystemGruenfeldDefense_D01;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationTaimanovVariation_E40:
            fenArray = fenNimzoIndianDefenseNormalVariationTaimanovVariation_E40;
            break;
        case FenArrayType.SicilianDefenseNimzowitschVariationGeneral_B29:
            fenArray = fenSicilianDefenseNimzowitschVariationGeneral_B29;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseFriedLiverAttack_C57:
            fenArray = fenItalianGameTwoKnightsDefenseFriedLiverAttack_C57;
            break;
        case FenArrayType.QueensIndianDefenseEuweVariation_E17:
            fenArray = fenQueensIndianDefenseEuweVariation_E17;
            break;
        case FenArrayType.NimzowitschDefenseFrenchConnection_B00:
            fenArray = fenNimzowitschDefenseFrenchConnection_B00;
            break;
        case FenArrayType.RetiOpeningReversedBlumenfeldGambit_A09:
            fenArray = fenRetiOpeningReversedBlumenfeldGambit_A09;
            break;
        case FenArrayType.ScotchGameGoringGambitDoublePawnSacrifice_C44:
            fenArray = fenScotchGameGoringGambitDoublePawnSacrifice_C44;
            break;
        case FenArrayType.SicilianDefenseDelayedAlapinBasmanPalatnikDoubleGambit_B50:
            fenArray = fenSicilianDefenseDelayedAlapinBasmanPalatnikDoubleGambit_B50;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariation_2_B72:
            fenArray = fenSicilianDefenseDragonVariationClassicalVariation_2_B72;
            break;
        case FenArrayType.BishopsOpeningBodenKieseritskyGambit_C27:
            fenArray = fenBishopsOpeningBodenKieseritskyGambit_C27;
            break;
        case FenArrayType.SpanishGameCozioDefensePaulsenVariation_C60:
            fenArray = fenSpanishGameCozioDefensePaulsenVariation_C60;
            break;
        case FenArrayType.NimzowitschDefenseFrancoNimzowitschVariation_B00:
            fenArray = fenNimzowitschDefenseFrancoNimzowitschVariation_B00;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationFingerslipVariation_C15:
            fenArray = fenFrenchDefenseWinawerVariationFingerslipVariation_C15;
            break;
        case FenArrayType.FourKnightsGameScotchVariationKrauseGambit_C47:
            fenArray = fenFourKnightsGameScotchVariationKrauseGambit_C47;
            break;
        case FenArrayType.SemiSlavDefenseBotvinnikSystemEkstromVariation_D44:
            fenArray = fenSemiSlavDefenseBotvinnikSystemEkstromVariation_D44;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseExchangeVariation_C63:
            fenArray = fenSpanishGameSchliemannDefenseExchangeVariation_C63;
            break;
        case FenArrayType.SlavDefenseExchangeVariationSchalloppVariation_D12:
            fenArray = fenSlavDefenseExchangeVariationSchalloppVariation_D12;
            break;
        case FenArrayType.ScotchGameTartakowerVariation_C45:
            fenArray = fenScotchGameTartakowerVariation_C45;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitModernTransfer_C32:
            fenArray = fenKingsGambitFalkbeerCountergambitModernTransfer_C32;
            break;
        case FenArrayType.KingsIndianDefenseNormalVariationDeferredFianchetto_E72:
            fenArray = fenKingsIndianDefenseNormalVariationDeferredFianchetto_E72;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationNimzowitschVariationGeneral_A20:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationNimzowitschVariationGeneral_A20;
            break;
        case FenArrayType.SpanishGameClosedVariationsBorisenkoVariation_C96:
            fenArray = fenSpanishGameClosedVariationsBorisenkoVariation_C96;
            break;
        case FenArrayType.GrobOpeningGrobGambitDeclined_A00:
            fenArray = fenGrobOpeningGrobGambitDeclined_A00;
            break;
        case FenArrayType.BudapestDefenseAlekhineVariationAbonyiVariation_A52:
            fenArray = fenBudapestDefenseAlekhineVariationAbonyiVariation_A52;
            break;
        case FenArrayType.DutchDefenseStauntonGambitChigorinVariation_A83:
            fenArray = fenDutchDefenseStauntonGambitChigorinVariation_A83;
            break;
        case FenArrayType.PonzianiOpeningSteinitzVariation_C44:
            fenArray = fenPonzianiOpeningSteinitzVariation_C44;
            break;
        case FenArrayType.SpanishGameMorphyDefenseGrazVariation_C70:
            fenArray = fenSpanishGameMorphyDefenseGrazVariation_C70;
            break;
        case FenArrayType.EnglundGambitComplexHartlaubCharlickGambit_A40:
            fenArray = fenEnglundGambitComplexHartlaubCharlickGambit_A40;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationBledVariation_A12:
            fenArray = fenRetiOpeningAngloSlavVariationBledVariation_A12;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseScandinavianDefense_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseScandinavianDefense_A15;
            break;
        case FenArrayType.SicilianDefenseMarshallGambit_B23:
            fenArray = fenSicilianDefenseMarshallGambit_B23;
            break;
        case FenArrayType.SicilianDefenseCanalAttackMoscowGambit_B51:
            fenArray = fenSicilianDefenseCanalAttackMoscowGambit_B51;
            break;
        case FenArrayType.AlekhineDefenseBrooklynVariation_B02:
            fenArray = fenAlekhineDefenseBrooklynVariation_B02;
            break;
        case FenArrayType.CaroKannDefenseMaroczyVariationMaroczyGambit_B12:
            fenArray = fenCaroKannDefenseMaroczyVariationMaroczyGambit_B12;
            break;
        case FenArrayType.SpanishGameClosedVariationsClosedDefense_C90:
            fenArray = fenSpanishGameClosedVariationsClosedDefense_C90;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationPositionalDefenseMainLine_E96:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationPositionalDefenseMainLine_E96;
            break;
        case FenArrayType.QueensGambitDeclinedLaskerDefenseMainLine_D57:
            fenArray = fenQueensGambitDeclinedLaskerDefenseMainLine_D57;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationRomanishinAttack_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationRomanishinAttack_E12;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitFianchettoVariationBe6Line_D09:
            fenArray =
                fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBe6Line_D09;
            break;
        case FenArrayType.KingsGambitDeclinedQueensKnightDefense_C30:
            fenArray = fenKingsGambitDeclinedQueensKnightDefense_C30;
            break;
        case FenArrayType.KingsGambitAcceptedBonschOsmolovskyVariation_C34:
            fenArray = fenKingsGambitAcceptedBonschOsmolovskyVariation_C34;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationEndgameVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationEndgameVariation_D34;
            break;
        case FenArrayType.QueenPawnGameAngloSlavOpening_A41:
            fenArray = fenQueenPawnGameAngloSlavOpening_A41;
            break;
        case FenArrayType.PterodactylDefenseEasternPterodactyl_B06:
            fenArray = fenPterodactylDefenseEasternPterodactyl_B06;
            break;
        case FenArrayType.NeoGruenfeldDefenseClassicalVariation_D77:
            fenArray = fenNeoGruenfeldDefenseClassicalVariation_D77;
            break;
        case FenArrayType.SemiSlavDefenseRomihVariation_D46:
            fenArray = fenSemiSlavDefenseRomihVariation_D46;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseLazardGambit_D06:
            fenArray = fenQueensGambitRefusedChigorinDefenseLazardGambit_D06;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationTraditionalVariation_A72:
            fenArray = fenBenoniDefenseClassicalVariationTraditionalVariation_A72;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationStoltzAttackIvanchukLine_B22:
            fenArray = fenSicilianDefenseAlapinVariationStoltzAttackIvanchukLine_B22;
            break;
        case FenArrayType.ItalianGameClassicalVariationDelaBourdonnaisVariation_C53:
            fenArray = fenItalianGameClassicalVariationDelaBourdonnaisVariation_C53;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeclinedDuboisVariation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitDeclinedDuboisVariation_B21;
            break;
        case FenArrayType.DutchDefenseBlackburneVariation_A81:
            fenArray = fenDutchDefenseBlackburneVariation_A81;
            break;
        case FenArrayType.LionDefenseBayonetAttack_B07:
            fenArray = fenLionDefenseBayonetAttack_B07;
            break;
        case FenArrayType.AlekhineDefenseHuntVariationLaskerSimulGambit_B02:
            fenArray = fenAlekhineDefenseHuntVariationLaskerSimulGambit_B02;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationNimzowitschAttack_C02:
            fenArray = fenFrenchDefenseAdvanceVariationNimzowitschAttack_C02;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseSteinitzVariationExchangeVariation_D26:
            fenArray =
                fenQueensGambitAcceptedClassicalDefenseSteinitzVariationExchangeVariation_D26;
            break;
        case FenArrayType.PolishOpeningSchifflerSokolskyVariation_A00:
            fenArray = fenPolishOpeningSchifflerSokolskyVariation_A00;
            break;
        case FenArrayType.PolishOpeningKingsIndianVariation_A00:
            fenArray = fenPolishOpeningKingsIndianVariation_A00;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationLeningradVariation_C06:
            fenArray = fenFrenchDefenseTarraschVariationLeningradVariation_C06;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationRichterAttack_1_C13:
            fenArray = fenFrenchDefenseClassicalVariationRichterAttack_1_C13;
            break;
        case FenArrayType.ScandinavianDefenseModernVariation_2_B01:
            fenArray = fenScandinavianDefenseModernVariation_2_B01;
            break;
        case FenArrayType.FrenchDefenseClassicalVariation_C11:
            fenArray = fenFrenchDefenseClassicalVariation_C11;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseRomanishinVariation_A11:
            fenArray = fenEnglishOpeningAngloIndianDefenseRomanishinVariation_A11;
            break;
        case FenArrayType.QueenPawnGameLevitskyAttackEuweVariationModernLine_D00:
            fenArray = fenQueenPawnGameLevitskyAttackEuweVariationModernLine_D00;
            break;
        case FenArrayType.OldIndianDefenseJanowskiVariationMainLine_A53:
            fenArray = fenOldIndianDefenseJanowskiVariationMainLine_A53;
            break;
        case FenArrayType.SemiSlavDefenseStoltzVariationCenterVariation_D45:
            fenArray = fenSemiSlavDefenseStoltzVariationCenterVariation_D45;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariationCapablancaVariation_E29:
            fenArray = fenNimzoIndianDefenseSaemischVariationCapablancaVariation_E29;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationMaroczyLine_B74:
            fenArray =
                fenSicilianDefenseDragonVariationClassicalVariationMaroczyLine_B74;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitFianchettoVariationBg4Line_D09:
            fenArray =
                fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBg4Line_D09;
            break;
        case FenArrayType.SicilianDefenseModernVariationsAntiQxd4MoveOrderAccepted_B50:
            fenArray =
                fenSicilianDefenseModernVariationsAntiQxd4MoveOrderAccepted_B50;
            break;
        case FenArrayType.DutchDefenseAlekhineVariation_A92:
            fenArray = fenDutchDefenseAlekhineVariation_A92;
            break;
        case FenArrayType.KingsGambitAcceptedCunninghamDefense_C35:
            fenArray = fenKingsGambitAcceptedCunninghamDefense_C35;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationCzerniakDefense_A78:
            fenArray = fenBenoniDefenseClassicalVariationCzerniakDefense_A78;
            break;
        case FenArrayType.ItalianGameScotchGambitDeRiviereDefense_C55:
            fenArray = fenItalianGameScotchGambitDeRiviereDefense_C55;
            break;
        case FenArrayType.EnglundGambitComplexGeneral_A40:
            fenArray = fenEnglundGambitComplexGeneral_A40;
            break;
        case FenArrayType.NimzoIndianDefenseRomanishinVariation_2_E20:
            fenArray = fenNimzoIndianDefenseRomanishinVariation_2_E20;
            break;
        case FenArrayType.PterodactylDefenseMiscellanyQueenPterodactylQuiet_A40:
            fenArray = fenPterodactylDefenseMiscellanyQueenPterodactylQuiet_A40;
            break;
        case FenArrayType.BenoniDefenseVultureDefense_A56:
            fenArray = fenBenoniDefenseVultureDefense_A56;
            break;
        case FenArrayType.ModernDefenseModernPterodactyl_B06:
            fenArray = fenModernDefenseModernPterodactyl_B06;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseRubinsteinVariationFlohrLine_D62:
            fenArray =
                fenQueensGambitDeclinedOrthodoxDefenseRubinsteinVariationFlohrLine_D62;
            break;
        case FenArrayType.SicilianDefenseWingGambitDeferredVariation_B50:
            fenArray = fenSicilianDefenseWingGambitDeferredVariation_B50;
            break;
        case FenArrayType.QueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D40:
            fenArray =
                fenQueensGambitDeclinedSemiTarraschDefensePillsburyVariation_D40;
            break;
        case FenArrayType.VanGeetOpeningSicilianTwoKnights_A00:
            fenArray = fenVanGeetOpeningSicilianTwoKnights_A00;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedPinDefense_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitAcceptedPinDefense_B21;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseExchangeVariationCostasLine_D07:
            fenArray =
                fenQueensGambitRefusedChigorinDefenseExchangeVariationCostasLine_D07;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationPterodactylVariation_E64:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationPterodactylVariation_E64;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationChigorinVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationChigorinVariation_C12;
            break;
        case FenArrayType.PhilidorDefenseHanhamVariationKrauseVariation_C41:
            fenArray = fenPhilidorDefenseHanhamVariationKrauseVariation_C41;
            break;
        case FenArrayType.SemiSlavDefenseMainLines_D46:
            fenArray = fenSemiSlavDefenseMainLines_D46;
            break;
        case FenArrayType.SpanishGameClosedVariationsKeresDefense_2_C92:
            fenArray = fenSpanishGameClosedVariationsKeresDefense_2_C92;
            break;
        case FenArrayType.DutchDefenseClassicalVariationStonewallVariationBotvinnikVariation_A93:
            fenArray =
                fenDutchDefenseClassicalVariationStonewallVariationBotvinnikVariation_A93;
            break;
        case FenArrayType.RetiOpeningAdvanceVariationMichelGambit_A09:
            fenArray = fenRetiOpeningAdvanceVariationMichelGambit_A09;
            break;
        case FenArrayType.NimzowitschDefenseKennedyVariationPaulsenAttack_B00:
            fenArray = fenNimzowitschDefenseKennedyVariationPaulsenAttack_B00;
            break;
        case FenArrayType.SicilianDefenseMorphyGambit_B21:
            fenArray = fenSicilianDefenseMorphyGambit_B21;
            break;
        case FenArrayType.ScotchGameSchmidGambit_C44:
            fenArray = fenScotchGameSchmidGambit_C44;
            break;
        case FenArrayType.RussianGameKarklinsMartinovskyVariation_C42:
            fenArray = fenRussianGameKarklinsMartinovskyVariation_C42;
            break;
        case FenArrayType.SlavDefenseSuchtingVariation_D15:
            fenArray = fenSlavDefenseSuchtingVariation_D15;
            break;
        case FenArrayType.DutchDefenseStonewallVariationGeneralVariation_A92:
            fenArray = fenDutchDefenseStonewallVariationGeneralVariation_A92;
            break;
        case FenArrayType.DutchDefenseClassicalVariationIlyinZhenevskyVariationAlatortsevLisitsynLine_A98:
            fenArray =
                fenDutchDefenseClassicalVariationIlyinZhenevskyVariationAlatortsevLisitsynLine_A98;
            break;
        case FenArrayType.FrenchDefenseRetiSpielmannAttack_C00:
            fenArray = fenFrenchDefenseRetiSpielmannAttack_C00;
            break;
        case FenArrayType.GrobOpeningKeeneDefense_A00:
            fenArray = fenGrobOpeningKeeneDefense_A00;
            break;
        case FenArrayType.QueensGambitDeclinedHarrwitzAttackMainLineNewMainLine_D37:
            fenArray = fenQueensGambitDeclinedHarrwitzAttackMainLineNewMainLine_D37;
            break;
        case FenArrayType.NimzoIndianDefenseRagozinDefense_E46:
            fenArray = fenNimzoIndianDefenseRagozinDefense_E46;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationWithe4_D97:
            fenArray = fenGruenfeldDefenseRussianVariationWithe4_D97;
            break;
        case FenArrayType.LatvianGambitAcceptedBilguerVariation_C40:
            fenArray = fenLatvianGambitAcceptedBilguerVariation_C40;
            break;
        case FenArrayType.BenoniDefenseWeeninkVariation_A56:
            fenArray = fenBenoniDefenseWeeninkVariation_A56;
            break;
        case FenArrayType.PhilidorDefenseLionVariationLionsClawII_C41:
            fenArray = fenPhilidorDefenseLionVariationLionsClawII_C41;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitCharousekGambitAccepted_C32:
            fenArray = fenKingsGambitFalkbeerCountergambitCharousekGambitAccepted_C32;
            break;
        case FenArrayType.SpanishGameClosedVariationsTrajkovicCounterattack_C88:
            fenArray = fenSpanishGameClosedVariationsTrajkovicCounterattack_C88;
            break;
        case FenArrayType.CaroKannDefenseGurgenidzeCounterattack_B15:
            fenArray = fenCaroKannDefenseGurgenidzeCounterattack_B15;
            break;
        case FenArrayType.PhilidorDefenseHanhamVariationSchlechterVariation_C41:
            fenArray = fenPhilidorDefenseHanhamVariationSchlechterVariation_C41;
            break;
        case FenArrayType.ItalianGameSchillingKosticGambit_C50:
            fenArray = fenItalianGameSchillingKosticGambit_C50;
            break;
        case FenArrayType.SicilianDefenseWingGambitCarlsbadVariation_B20:
            fenArray = fenSicilianDefenseWingGambitCarlsbadVariation_B20;
            break;
        case FenArrayType.QueensGambitAcceptedGunsbergDefensePrianishenmoGambit_D24:
            fenArray = fenQueensGambitAcceptedGunsbergDefensePrianishenmoGambit_D24;
            break;
        case FenArrayType.SicilianDefenseDragonVariationYugoslavAttack_2_B77:
            fenArray = fenSicilianDefenseDragonVariationYugoslavAttack_2_B77;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationClassicalTarraschGambit_D34:
            fenArray =
                fenTarraschDefenseClassicalVariationClassicalTarraschGambit_D34;
            break;
        case FenArrayType.ScandinavianDefenseBlackburneGambit_B01:
            fenArray = fenScandinavianDefenseBlackburneGambit_B01;
            break;
        case FenArrayType.ZukertortOpeningSantasieresFolly_A06:
            fenArray = fenZukertortOpeningSantasieresFolly_A06;
            break;
        case FenArrayType.ScotchGameClassicalVariationMillenniumVariation_C45:
            fenArray = fenScotchGameClassicalVariationMillenniumVariation_C45;
            break;
        case FenArrayType.EnglishDefensePerrinVariation_A40:
            fenArray = fenEnglishDefensePerrinVariation_A40;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationBogoljubowVariationNimzowitschGambit_B00:
            fenArray =
                fenNimzowitschDefenseScandinavianVariationBogoljubowVariationNimzowitschGambit_B00;
            break;
        case FenArrayType.EnglishOpeningDrillVariation_A20:
            fenArray = fenEnglishOpeningDrillVariation_A20;
            break;
        case FenArrayType.ModernDefenseSemiAverbakhVariationPterodactylVariation_B06:
            fenArray = fenModernDefenseSemiAverbakhVariationPterodactylVariation_B06;
            break;
        case FenArrayType.CaroKannDefenseEuweAttack_B10:
            fenArray = fenCaroKannDefenseEuweAttack_B10;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationVeniceSystemBarczaLine_B28:
            fenArray = fenSicilianDefenseOKellyVariationVeniceSystemBarczaLine_B28;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambitBogoljubowDefense_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambitBogoljubowDefense_C33;
            break;
        case FenArrayType.CaroKannDefenseClassicalVariationMaroczyAttack_B18:
            fenArray = fenCaroKannDefenseClassicalVariationMaroczyAttack_B18;
            break;
        case FenArrayType.PircDefenseAustrianAttackUnzickerAttackBronsteinVariation_B09:
            fenArray =
                fenPircDefenseAustrianAttackUnzickerAttackBronsteinVariation_B09;
            break;
        case FenArrayType.SpanishGameExchangeVariationLutikovVariation_C68:
            fenArray = fenSpanishGameExchangeVariationLutikovVariation_C68;
            break;
        case FenArrayType.WareOpeningGeneral_A00:
            fenArray = fenWareOpeningGeneral_A00;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationSaemischDeferred_E51:
            fenArray = fenNimzoIndianDefenseNormalVariationSaemischDeferred_E51;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationRubinsteinVariation_C14:
            fenArray = fenFrenchDefenseClassicalVariationRubinsteinVariation_C14;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationHungarianVariation_E64:
            fenArray = fenKingsIndianDefenseFianchettoVariationHungarianVariation_E64;
            break;
        case FenArrayType.RetiOpeningAngloSlavVariationBogoljubowVariation_A12:
            fenArray = fenRetiOpeningAngloSlavVariationBogoljubowVariation_A12;
            break;
        case FenArrayType.NimzoLarsenAttackDutchVariation_A01:
            fenArray = fenNimzoLarsenAttackDutchVariation_A01;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationSevilleVariation_D87:
            fenArray = fenGruenfeldDefenseExchangeVariationSevilleVariation_D87;
            break;
        case FenArrayType.ScotchGameHorwitzAttack_C45:
            fenArray = fenScotchGameHorwitzAttack_C45;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePolerioDefenseKieseritskyVariation_C58:
            fenArray =
                fenItalianGameTwoKnightsDefensePolerioDefenseKieseritskyVariation_C58;
            break;
        case FenArrayType.LondonSystemPoisonedPawnVariation_D02:
            fenArray = fenLondonSystemPoisonedPawnVariation_D02;
            break;
        case FenArrayType.PolishOpeningBalticDefense_A00:
            fenArray = fenPolishOpeningBalticDefense_A00;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationModernExchangeVariationPawnGrabline_D85:
            fenArray =
                fenGruenfeldDefenseExchangeVariationModernExchangeVariationPawnGrabline_D85;
            break;
        case FenArrayType.ItalianGameEvansGambitPierceDefense_C52:
            fenArray = fenItalianGameEvansGambitPierceDefense_C52;
            break;
        case FenArrayType.QueensGambitDeclinedTarraschDefensePseudoTarraschBishopAttack_D30:
            fenArray =
                fenQueensGambitDeclinedTarraschDefensePseudoTarraschBishopAttack_D30;
            break;
        case FenArrayType.PterodactylDefenseEasternAnhanguera_B06:
            fenArray = fenPterodactylDefenseEasternAnhanguera_B06;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAlekhineGambitAccepted_C15:
            fenArray = fenFrenchDefenseWinawerVariationAlekhineGambitAccepted_C15;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationPannoVariationDonnerLine_E63:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationPannoVariationDonnerLine_E63;
            break;
        case FenArrayType.RussianGameCochraneGambitCenterVariation_C42:
            fenArray = fenRussianGameCochraneGambitCenterVariation_C42;
            break;
        case FenArrayType.ItalianGameScotchGambitWalbrodtBairdGambit_C55:
            fenArray = fenItalianGameScotchGambitWalbrodtBairdGambit_C55;
            break;
        case FenArrayType.HungarianOpeningCatalanFormation_A00:
            fenArray = fenHungarianOpeningCatalanFormation_A00;
            break;
        case FenArrayType.SpanishGameOpenVariationsRigaVariation_C80:
            fenArray = fenSpanishGameOpenVariationsRigaVariation_C80;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseAlekhineVariation_D67:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseAlekhineVariation_D67;
            break;
        case FenArrayType.FrenchDefenseAlapinGambit_C00:
            fenArray = fenFrenchDefenseAlapinGambit_C00;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseZviagintsevKrasenkovAttack_A18:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseZviagintsevKrasenkovAttack_A18;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariation_E17:
            fenArray = fenQueensIndianDefenseKasparovPetrosianVariation_E17;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseMainLine_D67:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseMainLine_D67;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationAlapinVariation_C14:
            fenArray = fenFrenchDefenseClassicalVariationAlapinVariation_C14;
            break;
        case FenArrayType.SemiSlavDefenseSemiMeranVariation_D47:
            fenArray = fenSemiSlavDefenseSemiMeranVariation_D47;
            break;
        case FenArrayType.ViennaGameViennaGambitSteinitzGambitKnightVariation_C25:
            fenArray = fenViennaGameViennaGambitSteinitzGambitKnightVariation_C25;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationNimzowitschGambit_C02:
            fenArray = fenFrenchDefenseAdvanceVariationNimzowitschGambit_C02;
            break;
        case FenArrayType.DutchDefenseClassicalVariationBlackburneAttack_A91:
            fenArray = fenDutchDefenseClassicalVariationBlackburneAttack_A91;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseRussianGambit_D27:
            fenArray = fenQueensGambitAcceptedClassicalDefenseRussianGambit_D27;
            break;
        case FenArrayType.SicilianDefenseMarshallCounterattack_B40:
            fenArray = fenSicilianDefenseMarshallCounterattack_B40;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationTartakowerVariation_C13:
            fenArray = fenFrenchDefenseClassicalVariationTartakowerVariation_C13;
            break;
        case FenArrayType.DutchDefenseBlackmarsSecondGambit_A80:
            fenArray = fenDutchDefenseBlackmarsSecondGambit_A80;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitAcceptedFianchettoDefense_B21:
            fenArray =
                fenSicilianDefenseSmithMorraGambitAcceptedFianchettoDefense_B21;
            break;
        case FenArrayType.NimzoIndianDefenseSaemischVariationOKellyVariation_E26:
            fenArray = fenNimzoIndianDefenseSaemischVariationOKellyVariation_E26;
            break;
        case FenArrayType.GruenfeldDefenseZaitsevGambit_D80:
            fenArray = fenGruenfeldDefenseZaitsevGambit_D80;
            break;
        case FenArrayType.AlekhineDefenseModernVariationKeresVariation_B04:
            fenArray = fenAlekhineDefenseModernVariationKeresVariation_B04;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationNimzowitschFlohrVariation_A20:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationNimzowitschFlohrVariation_A20;
            break;
        case FenArrayType.SicilianDefenseClosedVariationBotvinnikDefenseIEdgeVariation_B25:
            fenArray =
                fenSicilianDefenseClosedVariationBotvinnikDefenseIEdgeVariation_B25;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationKorchnoiAttack_E97:
            fenArray = fenKingsIndianDefenseOrthodoxVariationKorchnoiAttack_E97;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_2_B85:
            fenArray =
                fenSicilianDefenseScheveningenVariationClassicalVariationPaulsenVariation_2_B85;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseClassicalVariation_1_D68:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_1_D68;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationQuietSystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationQuietSystem_B28;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackGeneral_E77:
            fenArray = fenKingsIndianDefenseFourPawnsAttackGeneral_E77;
            break;
        case FenArrayType.HungarianOpeningReversedModernDefense_A00:
            fenArray = fenHungarianOpeningReversedModernDefense_A00;
            break;
        case FenArrayType.QueenPawnGameHubschGambit_D00:
            fenArray = fenQueenPawnGameHubschGambit_D00;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationMaroczyWallisVariation_C18:
            fenArray = fenFrenchDefenseWinawerVariationMaroczyWallisVariation_C18;
            break;
        case FenArrayType.QueensGambitDeclinedNeoOrthodoxVariation_D54:
            fenArray = fenQueensGambitDeclinedNeoOrthodoxVariation_D54;
            break;
        case FenArrayType.ZukertortOpeningTennisonGambit_A06:
            fenArray = fenZukertortOpeningTennisonGambit_A06;
            break;
        case FenArrayType.ModernDefenseImprovedMaroczy_B06:
            fenArray = fenModernDefenseImprovedMaroczy_B06;
            break;
        case FenArrayType.ScandinavianDefenseAnderssenCounterattack_B01:
            fenArray = fenScandinavianDefenseAnderssenCounterattack_B01;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseTraxlerCounterattackBishopsacline_C57:
            fenArray =
                fenItalianGameTwoKnightsDefenseTraxlerCounterattackBishopsacline_C57;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariation_E92:
            fenArray = fenKingsIndianDefenseOrthodoxVariation_E92;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationAmericanAttack_B45:
            fenArray = fenSicilianDefensePaulsenVariationAmericanAttack_B45;
            break;
        case FenArrayType.ViennaGameStanleyVariationMonsterDeclined_C27:
            fenArray = fenViennaGameStanleyVariationMonsterDeclined_C27;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationBenoniDefenseExchangeVariation_E74:
            fenArray =
                fenKingsIndianDefenseAverbakhVariationBenoniDefenseExchangeVariation_E74;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationLutikovGambit_B31:
            fenArray =
                fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationLutikovGambit_B31;
            break;
        case FenArrayType.SicilianDefenseWingGambitAbrahamsVariation_B20:
            fenArray = fenSicilianDefenseWingGambitAbrahamsVariation_B20;
            break;
        case FenArrayType.KingsIndianDefensePomarSystem_E72:
            fenArray = fenKingsIndianDefensePomarSystem_E72;
            break;
        case FenArrayType.FourKnightsGameRankenVariation_C48:
            fenArray = fenFourKnightsGameRankenVariation_C48;
            break;
        case FenArrayType.SicilianDefenseGawPawVariation_B40:
            fenArray = fenSicilianDefenseGawPawVariation_B40;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationNormalVariation_C13:
            fenArray = fenFrenchDefenseClassicalVariationNormalVariation_C13;
            break;
        case FenArrayType.RussianGameClassicalAttackChigorinVariationBrowneAttack_C42:
            fenArray = fenRussianGameClassicalAttackChigorinVariationBrowneAttack_C42;
            break;
        case FenArrayType.SicilianDefenseClosedSicilianAntiSveshnikovVariationKharlovKramnikLine_B30:
            fenArray =
                fenSicilianDefenseClosedSicilianAntiSveshnikovVariationKharlovKramnikLine_B30;
            break;
        case FenArrayType.KingsGambitAcceptedMacLeodDefense_C34:
            fenArray = fenKingsGambitAcceptedMacLeodDefense_C34;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseFianchettoVariation_D66:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseFianchettoVariation_D66;
            break;
        case FenArrayType.FrenchDefenseSteinitzAttack_C00:
            fenArray = fenFrenchDefenseSteinitzAttack_C00;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationSpasskyVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationSpasskyVariation_D34;
            break;
        case FenArrayType.KingsGambitAcceptedBeckerDefense_C34:
            fenArray = fenKingsGambitAcceptedBeckerDefense_C34;
            break;
        case FenArrayType.BishopsOpeningPonzianiGambit_C24:
            fenArray = fenBishopsOpeningPonzianiGambit_C24;
            break;
        case FenArrayType.ItalianGameClassicalVariationCenterHoldingVariation_C53:
            fenArray = fenItalianGameClassicalVariationCenterHoldingVariation_C53;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackGurgenidzeVariation_B31:
            fenArray =
                fenSicilianDefenseNyezhmetdinovRossolimoAttackGurgenidzeVariation_B31;
            break;
        case FenArrayType.PhilidorDefenseNimzowitschVariationRellstabVariation_C41:
            fenArray = fenPhilidorDefenseNimzowitschVariationRellstabVariation_C41;
            break;
        case FenArrayType.BlackmarDiemerGambitEuweDefense_D00:
            fenArray = fenBlackmarDiemerGambitEuweDefense_D00;
            break;
        case FenArrayType.PhilidorDefenseHanhamVariationSteinerVariation_C41:
            fenArray = fenPhilidorDefenseHanhamVariationSteinerVariation_C41;
            break;
        case FenArrayType.BarnesOpeningGeneral_A00:
            fenArray = fenBarnesOpeningGeneral_A00;
            break;
        case FenArrayType.OldIndianDefenseJanowskiVariationFianchettoVariation_2_A53:
            fenArray = fenOldIndianDefenseJanowskiVariationFianchettoVariation_2_A53;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_3_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationQuietLine_3_A28;
            break;
        case FenArrayType.ItalianGameScotchGambitMaxLangeAttackLongVariation_C55:
            fenArray = fenItalianGameScotchGambitMaxLangeAttackLongVariation_C55;
            break;
        case FenArrayType.StGeorgeDefenseNewStGeorgeTraditionalLine_B00:
            fenArray = fenStGeorgeDefenseNewStGeorgeTraditionalLine_B00;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationSherzerVariation_B22:
            fenArray = fenSicilianDefenseAlapinVariationSherzerVariation_B22;
            break;
        case FenArrayType.FrenchDefenseRubinsteinVariationMaricVariation_C10:
            fenArray = fenFrenchDefenseRubinsteinVariationMaricVariation_C10;
            break;
        case FenArrayType.BenkoGambitDeclinedPseudoSaemisch_A57:
            fenArray = fenBenkoGambitDeclinedPseudoSaemisch_A57;
            break;
        case FenArrayType.QueenPawnOpeningVeresovAttackIrishGambit_D00:
            fenArray = fenQueenPawnOpeningVeresovAttackIrishGambit_D00;
            break;
        case FenArrayType.EnglundGambitDeclinedReversedFrench_A40:
            fenArray = fenEnglundGambitDeclinedReversedFrench_A40;
            break;
        case FenArrayType.NeoGruenfeldDefenseDelayedExchangeVariation_2_D75:
            fenArray = fenNeoGruenfeldDefenseDelayedExchangeVariation_2_D75;
            break;
        case FenArrayType.KingsGambitAcceptedModernDefense_C36:
            fenArray = fenKingsGambitAcceptedModernDefense_C36;
            break;
        case FenArrayType.SemiSlavDefenseNoteboomVariationAntiNoteboomGambit_D31:
            fenArray = fenSemiSlavDefenseNoteboomVariationAntiNoteboomGambit_D31;
            break;
        case FenArrayType.SpanishGameMarshallAttackOriginalMarshallAttack_C89:
            fenArray = fenSpanishGameMarshallAttackOriginalMarshallAttack_C89;
            break;
        case FenArrayType.SpanishGameClosedVariationsGeneral_C92:
            fenArray = fenSpanishGameClosedVariationsGeneral_C92;
            break;
        case FenArrayType.ScandinavianDefenseMainLinesLeonhardtGambit_B01:
            fenArray = fenScandinavianDefenseMainLinesLeonhardtGambit_B01;
            break;
        case FenArrayType.ViennaGameStanleyVariationThreeKnightsVariation_C28:
            fenArray = fenViennaGameStanleyVariationThreeKnightsVariation_C28;
            break;
        case FenArrayType.FourKnightsGameScotchVariationKrauseGambitLeonhardtDefense_C47:
            fenArray =
                fenFourKnightsGameScotchVariationKrauseGambitLeonhardtDefense_C47;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationGeneralVariation_C14:
            fenArray = fenFrenchDefenseClassicalVariationGeneralVariation_C14;
            break;
        case FenArrayType.EnglishOpeningAdorjanDefense_A10:
            fenArray = fenEnglishOpeningAdorjanDefense_A10;
            break;
        case FenArrayType.ModernDefenseAverbakhVariationPseudoSaemisch_A42:
            fenArray = fenModernDefenseAverbakhVariationPseudoSaemisch_A42;
            break;
        case FenArrayType.DutchDefenseKorchnoiAttack_A80:
            fenArray = fenDutchDefenseKorchnoiAttack_A80;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationSymmetricalVariation_3_C49:
            fenArray = fenFourKnightsGameSpanishVariationSymmetricalVariation_3_C49;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemTraditionalLine_E99:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationClassicalSystemTraditionalLine_E99;
            break;
        case FenArrayType.ItalianGameEvansGambitStoneWareVariation_C51:
            fenArray = fenItalianGameEvansGambitStoneWareVariation_C51;
            break;
        case FenArrayType.AmarOpeningGeneral_A00:
            fenArray = fenAmarOpeningGeneral_A00;
            break;
        case FenArrayType.BenoniDefenseMikenasVariation_A66:
            fenArray = fenBenoniDefenseMikenasVariation_A66;
            break;
        case FenArrayType.SpanishGameOpenVariationsItalianVariation_C82:
            fenArray = fenSpanishGameOpenVariationsItalianVariation_C82;
            break;
        case FenArrayType.ItalianGameEvansGambitMacDonnellDefense_C51:
            fenArray = fenItalianGameEvansGambitMacDonnellDefense_C51;
            break;
        case FenArrayType.KingsGambitAcceptedCunninghamDefenseMcCormickDefense_C35:
            fenArray = fenKingsGambitAcceptedCunninghamDefenseMcCormickDefense_C35;
            break;
        case FenArrayType.DutchDefenseClassicalVariation_A92:
            fenArray = fenDutchDefenseClassicalVariation_A92;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationCzerniakDefense_A76:
            fenArray = fenBenoniDefenseClassicalVariationCzerniakDefense_A76;
            break;
        case FenArrayType.ZukertortOpeningStGeorgeDefense_A04:
            fenArray = fenZukertortOpeningStGeorgeDefense_A04;
            break;
        case FenArrayType.SicilianDefenseOKellyVariation_B28:
            fenArray = fenSicilianDefenseOKellyVariation_B28;
            break;
        case FenArrayType.QueensGambitDeclinedPseudoTarraschVariation_D50:
            fenArray = fenQueensGambitDeclinedPseudoTarraschVariation_D50;
            break;
        case FenArrayType.CaroKannDefenseHillbillyAttack_B00:
            fenArray = fenCaroKannDefenseHillbillyAttack_B00;
            break;
        case FenArrayType.PircDefenseChineseVariation_B07:
            fenArray = fenPircDefenseChineseVariation_B07;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationByrneDefense_E81:
            fenArray = fenKingsIndianDefenseSaemischVariationByrneDefense_E81;
            break;
        case FenArrayType.CaroKannDefensePanovAttackModernDefenseCzerniakLine_B13:
            fenArray = fenCaroKannDefensePanovAttackModernDefenseCzerniakLine_B13;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackExchangeVariation_E79:
            fenArray = fenKingsIndianDefenseFourPawnsAttackExchangeVariation_E79;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationGoteborgArgentine_B98:
            fenArray = fenSicilianDefenseNajdorfVariationGoteborgArgentine_B98;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseJanowskiVariation_D07:
            fenArray = fenQueensGambitRefusedChigorinDefenseJanowskiVariation_D07;
            break;
        case FenArrayType.SpanishGameAlapinDefense_C60:
            fenArray = fenSpanishGameAlapinDefense_C60;
            break;
        case FenArrayType.SicilianDefenseNajdorfVariationPolugayevskyVariationSimaginLine_B96:
            fenArray =
                fenSicilianDefenseNajdorfVariationPolugayevskyVariationSimaginLine_B96;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationExtendedBishopSwap_C02:
            fenArray = fenFrenchDefenseAdvanceVariationExtendedBishopSwap_C02;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttackGrunfeldGambit_D83:
            fenArray = fenGruenfeldDefenseBrinckmannAttackGrunfeldGambit_D83;
            break;
        case FenArrayType.SpanishGameBerlinDefenseNyholmAttack_C65:
            fenArray = fenSpanishGameBerlinDefenseNyholmAttack_C65;
            break;
        case FenArrayType.ScotchGameMeitnerVariation_C45:
            fenArray = fenScotchGameMeitnerVariation_C45;
            break;
        case FenArrayType.FrenchDefenseAdvanceVariationRuisdonkGambit_C02:
            fenArray = fenFrenchDefenseAdvanceVariationRuisdonkGambit_C02;
            break;
        case FenArrayType.SpanishGameBerlinDefenseClosedWolfVariation_C66:
            fenArray = fenSpanishGameBerlinDefenseClosedWolfVariation_C66;
            break;
        case FenArrayType.IndianGameAntiGrunfeldAdvanceVariation_E60:
            fenArray = fenIndianGameAntiGrunfeldAdvanceVariation_E60;
            break;
        case FenArrayType.QueensGambitAcceptedWinawerDefense_D25:
            fenArray = fenQueensGambitAcceptedWinawerDefense_D25;
            break;
        case FenArrayType.EnglishOpeningAngloScandinavianDefenseGeneral_A10:
            fenArray = fenEnglishOpeningAngloScandinavianDefenseGeneral_A10;
            break;
        case FenArrayType.PterodactylDefenseEasternPteronodon_B06:
            fenArray = fenPterodactylDefenseEasternPteronodon_B06;
            break;
        case FenArrayType.BlackmarDiemerGambitViennaVariation_D00:
            fenArray = fenBlackmarDiemerGambitViennaVariation_D00;
            break;
        case FenArrayType.KingsIndianDefenseSaemischVariationClosedVariationMainLine_E89:
            fenArray =
                fenKingsIndianDefenseSaemischVariationClosedVariationMainLine_E89;
            break;
        case FenArrayType.DutchDefenseStauntonGambitAccepted_A82:
            fenArray = fenDutchDefenseStauntonGambitAccepted_A82;
            break;
        case FenArrayType.AlekhineDefenseModernVariationPanovVariation_B05:
            fenArray = fenAlekhineDefenseModernVariationPanovVariation_B05;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationClassicalSystemKozulGambit_E99:
            fenArray =
                fenKingsIndianDefenseOrthodoxVariationClassicalSystemKozulGambit_E99;
            break;
        case FenArrayType.QueensIndianDefenseFianchettoVariationCheckVariation_E15:
            fenArray = fenQueensIndianDefenseFianchettoVariationCheckVariation_E15;
            break;
        case FenArrayType.SicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationTotskyAttack_B31:
            fenArray =
                fenSicilianDefenseNyezhmetdinovRossolimoAttackFianchettoVariationTotskyAttack_B31;
            break;
        case FenArrayType.ItalianGameEvansGambitMiesesDefense_C52:
            fenArray = fenItalianGameEvansGambitMiesesDefense_C52;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariationPonomariovGambit_B48:
            fenArray =
                fenSicilianDefensePaulsenVariationBastrikovVariationPonomariovGambit_B48;
            break;
        case FenArrayType.BenoniDefenseClassicalVariationFullline_A74:
            fenArray = fenBenoniDefenseClassicalVariationFullline_A74;
            break;
        case FenArrayType.ElephantGambitMaroczyGambit_C40:
            fenArray = fenElephantGambitMaroczyGambit_C40;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_3_A18:
            fenArray =
                fenEnglishOpeningAngloIndianDefenseFlohrMikenasCarlsVariation_3_A18;
            break;
        case FenArrayType.ViennaGameViennaGambitBardelebenVariation_C29:
            fenArray = fenViennaGameViennaGambitBardelebenVariation_C29;
            break;
        case FenArrayType.CaroKannDefenseVonHennigGambit_B15:
            fenArray = fenCaroKannDefenseVonHennigGambit_B15;
            break;
        case FenArrayType.RussianGameClassicalAttackBergerVariation_C42:
            fenArray = fenRussianGameClassicalAttackBergerVariation_C42;
            break;
        case FenArrayType.FourKnightsGameJanowskiVariation_C49:
            fenArray = fenFourKnightsGameJanowskiVariation_C49;
            break;
        case FenArrayType.BlumenfeldCountergambitSpielmannVariation_E10:
            fenArray = fenBlumenfeldCountergambitSpielmannVariation_E10;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystem_E53:
            fenArray = fenNimzoIndianDefenseNormalVariationGligoricSystem_E53;
            break;
        case FenArrayType.SpanishGameSchleimannDefenseJaenischGambitAccepted_C60:
            fenArray = fenSpanishGameSchleimannDefenseJaenischGambitAccepted_C60;
            break;
        case FenArrayType.SpanishGameSchliemannDefenseMohringVariation_C63:
            fenArray = fenSpanishGameSchliemannDefenseMohringVariation_C63;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystemKeresVariation_E53:
            fenArray =
                fenNimzoIndianDefenseNormalVariationGligoricSystemKeresVariation_E53;
            break;
        case FenArrayType.RussianGameDamianoVariation_C42:
            fenArray = fenRussianGameDamianoVariation_C42;
            break;
        case FenArrayType.ItalianGameScotchGambitNakhmansonGambit_C56:
            fenArray = fenItalianGameScotchGambitNakhmansonGambit_C56;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitMasonGambit_C54:
            fenArray = fenItalianGameClassicalVariationGrecoGambitMasonGambit_C54;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambitBogoljubowVariation_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambitBogoljubowVariation_C33;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitStauntonLine_C31:
            fenArray = fenKingsGambitFalkbeerCountergambitStauntonLine_C31;
            break;
        case FenArrayType.SpanishGameOpenVariationsMotzkoAttackII_C82:
            fenArray = fenSpanishGameOpenVariationsMotzkoAttackII_C82;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationClassicalVariationMarshallGambit_C48:
            fenArray =
                fenFourKnightsGameSpanishVariationClassicalVariationMarshallGambit_C48;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseClassicalVariation_D69:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_D69;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationExchangeVariationCanalAttack_C01:
            fenArray =
                fenFrenchDefenseWinawerVariationExchangeVariationCanalAttack_C01;
            break;
        case FenArrayType.SicilianDefenseMiscDefenses_B27:
            fenArray = fenSicilianDefenseMiscDefenses_B27;
            break;
        case FenArrayType.SpanishGameClosedVariationsChigorinDefense_2_C98:
            fenArray = fenSpanishGameClosedVariationsChigorinDefense_2_C98;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationDelayedKeresAttackPerenyiGambit_B81:
            fenArray =
                fenSicilianDefenseScheveningenVariationDelayedKeresAttackPerenyiGambit_B81;
            break;
        case FenArrayType.QueensGambitAcceptedAcceleratedMannheimVariation_D20:
            fenArray = fenQueensGambitAcceptedAcceleratedMannheimVariation_D20;
            break;
        case FenArrayType.PonzianiOpeningCaroGambit_C44:
            fenArray = fenPonzianiOpeningCaroGambit_C44;
            break;
        case FenArrayType.GrobOpeningGrobGambit_A00:
            fenArray = fenGrobOpeningGrobGambit_A00;
            break;
        case FenArrayType.KingsIndianDefenseFianchettoVariationPannoVariationKorchnoiLine_E63:
            fenArray =
                fenKingsIndianDefenseFianchettoVariationPannoVariationKorchnoiLine_E63;
            break;
        case FenArrayType.LatvianGambitGeneral_C40:
            fenArray = fenLatvianGambitGeneral_C40;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseQueensIndianVariation_A17:
            fenArray = fenEnglishOpeningAngloIndianDefenseQueensIndianVariation_A17;
            break;
        case FenArrayType.ScandinavianDefenseKielVariation_B01:
            fenArray = fenScandinavianDefenseKielVariation_B01;
            break;
        case FenArrayType.SicilianDefenseDragonVariationLevenfishVariationMainLine_B71:
            fenArray =
                fenSicilianDefenseDragonVariationLevenfishVariationMainLine_B71;
            break;
        case FenArrayType.SicilianDefenseDragonVariationClassicalVariationAlekhineLine_B74:
            fenArray =
                fenSicilianDefenseDragonVariationClassicalVariationAlekhineLine_B74;
            break;
        case FenArrayType.ZukertortOpeningReversedMexicanDefense_A06:
            fenArray = fenZukertortOpeningReversedMexicanDefense_A06;
            break;
        case FenArrayType.ScotchGameClassicalVariationBlackburneAttack_C45:
            fenArray = fenScotchGameClassicalVariationBlackburneAttack_C45;
            break;
        case FenArrayType.SpanishGameOpenVariationsBerlinVariation_C82:
            fenArray = fenSpanishGameOpenVariationsBerlinVariation_C82;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitCharousekGambit_C31:
            fenArray = fenKingsGambitFalkbeerCountergambitCharousekGambit_C31;
            break;
        case FenArrayType.PolishOpeningGermanDefense_A00:
            fenArray = fenPolishOpeningGermanDefense_A00;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationPollockVariation_C14:
            fenArray = fenFrenchDefenseClassicalVariationPollockVariation_C14;
            break;
        case FenArrayType.FrenchDefenseAlekhineChatardAttackSpielmannVariation_C13:
            fenArray = fenFrenchDefenseAlekhineChatardAttackSpielmannVariation_C13;
            break;
        case FenArrayType.ZukertortOpeningWadeDefenseChigorinPlan_A41:
            fenArray = fenZukertortOpeningWadeDefenseChigorinPlan_A41;
            break;
        case FenArrayType.PterodactylDefenseEasternRhamporhynchus_B06:
            fenArray = fenPterodactylDefenseEasternRhamporhynchus_B06;
            break;
        case FenArrayType.BenkoGambitAcceptedCentralStormingVariation_A57:
            fenArray = fenBenkoGambitAcceptedCentralStormingVariation_A57;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationSpanishDefense_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariationSpanishDefense_E73;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseTartakowerGambit_D06:
            fenArray = fenQueensGambitRefusedChigorinDefenseTartakowerGambit_D06;
            break;
        case FenArrayType.KingPawnGameWaywardQueenAttack_C20:
            fenArray = fenKingPawnGameWaywardQueenAttack_C20;
            break;
        case FenArrayType.AlekhineDefenseSpielmannGambit_B02:
            fenArray = fenAlekhineDefenseSpielmannGambit_B02;
            break;
        case FenArrayType.PhilidorDefenseLionVariationBishopSac_C41:
            fenArray = fenPhilidorDefenseLionVariationBishopSac_C41;
            break;
        case FenArrayType.BirdOpeningHorseflyDefense_A03:
            fenArray = fenBirdOpeningHorseflyDefense_A03;
            break;
        case FenArrayType.SlavDefenseBonetGambit_D11:
            fenArray = fenSlavDefenseBonetGambit_D11;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationBellonGambit_A22:
            fenArray = fenEnglishOpeningKingsEnglishVariationBellonGambit_A22;
            break;
        case FenArrayType.ThreeKnightsOpeningSteinitzRosenthalVariation_C46:
            fenArray = fenThreeKnightsOpeningSteinitzRosenthalVariation_C46;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitMainLine_C54:
            fenArray = fenItalianGameClassicalVariationGrecoGambitMainLine_C54;
            break;
        case FenArrayType.BenkoGambitAcceptedYugoslavwith7Bxf1Nge2_A59:
            fenArray = fenBenkoGambitAcceptedYugoslavwith7Bxf1Nge2_A59;
            break;
        case FenArrayType.QueensGambitAcceptedSaduletoVariation_D20:
            fenArray = fenQueensGambitAcceptedSaduletoVariation_D20;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationBernsteinVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationBernsteinVariation_C12;
            break;
        case FenArrayType.PterodactylDefenseSicilianAnhanguera_B06:
            fenArray = fenPterodactylDefenseSicilianAnhanguera_B06;
            break;
        case FenArrayType.BenoniDefensePawnStormVariation_A66:
            fenArray = fenBenoniDefensePawnStormVariation_A66;
            break;
        case FenArrayType.QueensGambitRefusedBalticDefenseArgentinianGambit_D31:
            fenArray = fenQueensGambitRefusedBalticDefenseArgentinianGambit_D31;
            break;
        case FenArrayType.FourKnightsGameHalloweenGambit_C46:
            fenArray = fenFourKnightsGameHalloweenGambit_C46;
            break;
        case FenArrayType.NimzoIndianDefenseLeningradVariationAverbakhGambit_E30:
            fenArray = fenNimzoIndianDefenseLeningradVariationAverbakhGambit_E30;
            break;
        case FenArrayType.TarraschDefensePragueVariationMainLine_D34:
            fenArray = fenTarraschDefensePragueVariationMainLine_D34;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationVeniceSystemGambitline_B28:
            fenArray = fenSicilianDefenseOKellyVariationVeniceSystemGambitline_B28;
            break;
        case FenArrayType.SlavDefenseCzechVariation_D17:
            fenArray = fenSlavDefenseCzechVariation_D17;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationPoisonedPawnVariationPaoliVariation_C18:
            fenArray =
                fenFrenchDefenseWinawerVariationPoisonedPawnVariationPaoliVariation_C18;
            break;
        case FenArrayType.ScandinavianDefenseGrunfeldVariation_B01:
            fenArray = fenScandinavianDefenseGrunfeldVariation_B01;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttackGrunfeldGambitBotvinnikVariation_D83:
            fenArray =
                fenGruenfeldDefenseBrinckmannAttackGrunfeldGambitBotvinnikVariation_D83;
            break;
        case FenArrayType.FrenchDefenseOrthoschnappGambit_C00:
            fenArray = fenFrenchDefenseOrthoschnappGambit_C00;
            break;
        case FenArrayType.ViennaGameOmahaGambit_C25:
            fenArray = fenViennaGameOmahaGambit_C25;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefensePillsburyVariation_D63:
            fenArray = fenQueensGambitDeclinedOrthodoxDefensePillsburyVariation_D63;
            break;
        case FenArrayType.SicilianDefenseChekhoverVariationZaitsevDefense_B53:
            fenArray = fenSicilianDefenseChekhoverVariationZaitsevDefense_B53;
            break;
        case FenArrayType.KingsGambitAcceptedKieseritskyGambitKolischDefense_C39:
            fenArray = fenKingsGambitAcceptedKieseritskyGambitKolischDefense_C39;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseKnightAttackNormalVariation_C57:
            fenArray = fenItalianGameTwoKnightsDefenseKnightAttackNormalVariation_C57;
            break;
        case FenArrayType.ItalianGameScotchGambitDeclined_C55:
            fenArray = fenItalianGameScotchGambitDeclined_C55;
            break;
        case FenArrayType.SicilianDefenseFrancoScilianVariation_B32:
            fenArray = fenSicilianDefenseFrancoScilianVariation_B32;
            break;
        case FenArrayType.ScotchGameGoringGambitMainLine_C44:
            fenArray = fenScotchGameGoringGambitMainLine_C44;
            break;
        case FenArrayType.IndianGamePalefaceAttack_A45:
            fenArray = fenIndianGamePalefaceAttack_A45;
            break;
        case FenArrayType.DutchDefenseFianchettoVariation_A86:
            fenArray = fenDutchDefenseFianchettoVariation_A86;
            break;
        case FenArrayType.CatalanOpeningOpenDefense_E03:
            fenArray = fenCatalanOpeningOpenDefense_E03;
            break;
        case FenArrayType.PhilidorDefenseNimzowitschVariation_1_C41:
            fenArray = fenPhilidorDefenseNimzowitschVariation_1_C41;
            break;
        case FenArrayType.GruenfeldDefenseBrinckmannAttackReshevskyGambit_D83:
            fenArray = fenGruenfeldDefenseBrinckmannAttackReshevskyGambit_D83;
            break;
        case FenArrayType.SicilianDefenseScheveningenVariationVitolinsVariation_B80:
            fenArray = fenSicilianDefenseScheveningenVariationVitolinsVariation_B80;
            break;
        case FenArrayType.ScotchGameScotchGambitDuboisRetiDefense_C44:
            fenArray = fenScotchGameScotchGambitDuboisRetiDefense_C44;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariation6Nc6Defense_E73:
            fenArray = fenKingsIndianDefenseAverbakhVariation6Nc6Defense_E73;
            break;
        case FenArrayType.BlackmarDiemerGambitDeclinedLangeheineckeDefense_D00:
            fenArray = fenBlackmarDiemerGambitDeclinedLangeheineckeDefense_D00;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackFlorentineGambit_E77:
            fenArray = fenKingsIndianDefenseFourPawnsAttackFlorentineGambit_E77;
            break;
        case FenArrayType.SpanishGameMorphyDefenseWingAttack_C78:
            fenArray = fenSpanishGameMorphyDefenseWingAttack_C78;
            break;
        case FenArrayType.KingsIndianDefensePetrosianVariationKeresDefense_E93:
            fenArray = fenKingsIndianDefensePetrosianVariationKeresDefense_E93;
            break;
        case FenArrayType.QueensGambitDeclinedOrthodoxDefenseClassicalVariation_2_D68:
            fenArray = fenQueensGambitDeclinedOrthodoxDefenseClassicalVariation_2_D68;
            break;
        case FenArrayType.SpanishGameBerlinDefenseMinckwitzVariation_C67:
            fenArray = fenSpanishGameBerlinDefenseMinckwitzVariation_C67;
            break;
        case FenArrayType.ItalianGameEvansGambitMainLine_C52:
            fenArray = fenItalianGameEvansGambitMainLine_C52;
            break;
        case FenArrayType.SpanishGameMarshallAttackSteinerVariation_C89:
            fenArray = fenSpanishGameMarshallAttackSteinerVariation_C89;
            break;
        case FenArrayType.PhilidorDefenseNimzowitschVariation_2_C41:
            fenArray = fenPhilidorDefenseNimzowitschVariation_2_C41;
            break;
        case FenArrayType.QueensGambitDeclinedCapablancaVariation_D30:
            fenArray = fenQueensGambitDeclinedCapablancaVariation_D30;
            break;
        case FenArrayType.FrenchDefenseReversedPhilidorFormation_C00:
            fenArray = fenFrenchDefenseReversedPhilidorFormation_C00;
            break;
        case FenArrayType.DutchDefenseStauntonGambitLaskerVariation_A83:
            fenArray = fenDutchDefenseStauntonGambitLaskerVariation_A83;
            break;
        case FenArrayType.SpanishGameMarshallAttackMainLine_C89:
            fenArray = fenSpanishGameMarshallAttackMainLine_C89;
            break;
        case FenArrayType.QueensGambitAcceptedLinaresVariation_D20:
            fenArray = fenQueensGambitAcceptedLinaresVariation_D20;
            break;
        case FenArrayType.PhilidorDefenseLionVariationSozinVariation_C41:
            fenArray = fenPhilidorDefenseLionVariationSozinVariation_C41;
            break;
        case FenArrayType.RussianGameModernAttackSuchtingGambit_C43:
            fenArray = fenRussianGameModernAttackSuchtingGambit_C43;
            break;
        case FenArrayType.BenkoGambitDeclinedBishopAttack_A57:
            fenArray = fenBenkoGambitDeclinedBishopAttack_A57;
            break;
        case FenArrayType.LatvianGambitAcceptedLeonhardtVariation_C40:
            fenArray = fenLatvianGambitAcceptedLeonhardtVariation_C40;
            break;
        case FenArrayType.QueensGambitDeclinedNeoOrthodoxVariation_D55:
            fenArray = fenQueensGambitDeclinedNeoOrthodoxVariation_D55;
            break;
        case FenArrayType.QueenPawnGameTorreAttackGruenfeldVariation_D03:
            fenArray = fenQueenPawnGameTorreAttackGruenfeldVariation_D03;
            break;
        case FenArrayType.CaroKannDefenseKarpovVariationModernVariationIvanchukDefense_B17:
            fenArray =
                fenCaroKannDefenseKarpovVariationModernVariationIvanchukDefense_B17;
            break;
        case FenArrayType.BishopsOpeningBlanelGambit_C23:
            fenArray = fenBishopsOpeningBlanelGambit_C23;
            break;
        case FenArrayType.SpanishGameBerlinDefenselHermetVariationWesterinenLine_C67:
            fenArray = fenSpanishGameBerlinDefenselHermetVariationWesterinenLine_C67;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationBogoljubowVariation_B00:
            fenArray =
                fenNimzowitschDefenseScandinavianVariationBogoljubowVariation_B00;
            break;
        case FenArrayType.QueensGambitDeclinedManhattanVariation_D51:
            fenArray = fenQueensGambitDeclinedManhattanVariation_D51;
            break;
        case FenArrayType.GruenfeldDefenseRussianVariationSmyslovVariation_D99:
            fenArray = fenGruenfeldDefenseRussianVariationSmyslovVariation_D99;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationBotvinnikSystemPricklyPawnPassSystem_A26:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationBotvinnikSystemPricklyPawnPassSystem_A26;
            break;
        case FenArrayType.VanGeetOpeningGruenfeldDefense_A00:
            fenArray = fenVanGeetOpeningGruenfeldDefense_A00;
            break;
        case FenArrayType.CaroKannDefenseRasaStudierGambit_B15:
            fenArray = fenCaroKannDefenseRasaStudierGambit_B15;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationFingerslipVariationMainLine_C15:
            fenArray =
                fenFrenchDefenseWinawerVariationFingerslipVariationMainLine_C15;
            break;
        case FenArrayType.SicilianDefenseDrazicVariation_B40:
            fenArray = fenSicilianDefenseDrazicVariation_B40;
            break;
        case FenArrayType.BlackmarDiemerGambitVonPopielGambit_D00:
            fenArray = fenBlackmarDiemerGambitVonPopielGambit_D00;
            break;
        case FenArrayType.ZukertortOpeningBasmanDefense_A04:
            fenArray = fenZukertortOpeningBasmanDefense_A04;
            break;
        case FenArrayType.QueenPawnGameVeresovAtackBoyceDefense_D01:
            fenArray = fenQueenPawnGameVeresovAtackBoyceDefense_D01;
            break;
        case FenArrayType.PhilidorDefenseLionVariationLionsClawI_C41:
            fenArray = fenPhilidorDefenseLionVariationLionsClawI_C41;
            break;
        case FenArrayType.PhilidorDefenseLionVariationForcingLine_C41:
            fenArray = fenPhilidorDefenseLionVariationForcingLine_C41;
            break;
        case FenArrayType.QueensGambitAcceptedClassicalDefenseNormalLines_D26:
            fenArray = fenQueensGambitAcceptedClassicalDefenseNormalLines_D26;
            break;
        case FenArrayType.SicilianDefenseOKellyVariationKieseritzkySystem_B28:
            fenArray = fenSicilianDefenseOKellyVariationKieseritzkySystem_B28;
            break;
        case FenArrayType.SpanishGameClosedVariationsWorrallAttack_C86:
            fenArray = fenSpanishGameClosedVariationsWorrallAttack_C86;
            break;
        case FenArrayType.LatvianGambitFraserDefense_C40:
            fenArray = fenLatvianGambitFraserDefense_C40;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationHaberditzVariation_C03:
            fenArray = fenFrenchDefenseTarraschVariationHaberditzVariation_C03;
            break;
        case FenArrayType.SicilianDefenseMorphyGambitAndreaschekGambit_B21:
            fenArray = fenSicilianDefenseMorphyGambitAndreaschekGambit_B21;
            break;
        case FenArrayType.KingPawnGameMacleodAttack_C20:
            fenArray = fenKingPawnGameMacleodAttack_C20;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeclinedAlapinFormation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitDeclinedAlapinFormation_B21;
            break;
        case FenArrayType.LatvianGambitAccepted_C40:
            fenArray = fenLatvianGambitAccepted_C40;
            break;
        case FenArrayType.NimzoIndianDefenseSpielmannVariationRomanovskyGambit_E23:
            fenArray = fenNimzoIndianDefenseSpielmannVariationRomanovskyGambit_E23;
            break;
        case FenArrayType.QueensGambitRefusedAustrianDefenseGusevCountergambit_D06:
            fenArray = fenQueensGambitRefusedAustrianDefenseGusevCountergambit_D06;
            break;
        case FenArrayType.BishopsOpeningUrusovGambitKeidanskyGambit_C24:
            fenArray = fenBishopsOpeningUrusovGambitKeidanskyGambit_C24;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationBogoljubowVariationIcelandicDefense_C17:
            fenArray =
                fenFrenchDefenseWinawerVariationBogoljubowVariationIcelandicDefense_C17;
            break;
        case FenArrayType.ScotchGameSteinitzVariation_C45:
            fenArray = fenScotchGameSteinitzVariation_C45;
            break;
        case FenArrayType.StGeorgeDefenseNewStGeorgeThreePawnAttack_B00:
            fenArray = fenStGeorgeDefenseNewStGeorgeThreePawnAttack_B00;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambitBledowCountergambit_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambitBledowCountergambit_C33;
            break;
        case FenArrayType.SicilianDefenseSmithMorraGambitDeclinedCenterFormation_B21:
            fenArray = fenSicilianDefenseSmithMorraGambitDeclinedCenterFormation_B21;
            break;
        case FenArrayType.ItalianGameEvansGambitMacDonnellDefenseMainLine_C51:
            fenArray = fenItalianGameEvansGambitMacDonnellDefenseMainLine_C51;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariationBradleyBeachVariation_A28:
            fenArray =
                fenEnglishOpeningKingsEnglishVariationFourKnightsVariationBradleyBeachVariation_A28;
            break;
        case FenArrayType.SpanishGameOpenVariationsClassicalDefenseMainLine_C83:
            fenArray = fenSpanishGameOpenVariationsClassicalDefenseMainLine_C83;
            break;
        case FenArrayType.KingPawnGameAlapinOpening_C20:
            fenArray = fenKingPawnGameAlapinOpening_C20;
            break;
        case FenArrayType.NimzoIndianDefenseSpielmannVariationKarlsbadVariation_E23:
            fenArray = fenNimzoIndianDefenseSpielmannVariationKarlsbadVariation_E23;
            break;
        case FenArrayType.CaroKannDefenseFinnishVariation_B16:
            fenArray = fenCaroKannDefenseFinnishVariation_B16;
            break;
        case FenArrayType.LatvianGambitMasonCountergambit_C40:
            fenArray = fenLatvianGambitMasonCountergambit_C40;
            break;
        case FenArrayType.TorreAttackClassicalDefensePetrosianGambit_A46:
            fenArray = fenTorreAttackClassicalDefensePetrosianGambit_A46;
            break;
        case FenArrayType.ItalianGameClassicalVariationGrecoGambitGrecoVariation_C54:
            fenArray = fenItalianGameClassicalVariationGrecoGambitGrecoVariation_C54;
            break;
        case FenArrayType.SpanishGameColumbusVariation_C70:
            fenArray = fenSpanishGameColumbusVariation_C70;
            break;
        case FenArrayType.TarraschDefenseClassicalVariationPeturssonVariation_D34:
            fenArray = fenTarraschDefenseClassicalVariationPeturssonVariation_D34;
            break;
        case FenArrayType.GruenfeldDefenseLutikovVariation_D70:
            fenArray = fenGruenfeldDefenseLutikovVariation_D70;
            break;
        case FenArrayType.DutchDefenseJanzenKorchnoiGambit_A80:
            fenArray = fenDutchDefenseJanzenKorchnoiGambit_A80;
            break;
        case FenArrayType.FrenchDefenseRubinsteinVariationCapablancaLine_C10:
            fenArray = fenFrenchDefenseRubinsteinVariationCapablancaLine_C10;
            break;
        case FenArrayType.KingsGambitDeclinedKeeneDefense_C30:
            fenArray = fenKingsGambitDeclinedKeeneDefense_C30;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseTraxlerCounterattackKnightsacline_C57:
            fenArray =
                fenItalianGameTwoKnightsDefenseTraxlerCounterattackKnightsacline_C57;
            break;
        case FenArrayType.DutchDefenseKmochAttack_A80:
            fenArray = fenDutchDefenseKmochAttack_A80;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariation_C12;
            break;
        case FenArrayType.RatDefenseBaloghDefense_B07:
            fenArray = fenRatDefenseBaloghDefense_B07;
            break;
        case FenArrayType.BenoniDefenseOldBenoniSchmidVariation_A43:
            fenArray = fenBenoniDefenseOldBenoniSchmidVariation_A43;
            break;
        case FenArrayType.SicilianDefenseMongooseVariation_B27:
            fenArray = fenSicilianDefenseMongooseVariation_B27;
            break;
        case FenArrayType.KingPawnGameBuschGassGambit_C40:
            fenArray = fenKingPawnGameBuschGassGambit_C40;
            break;
        case FenArrayType.ViennaGameStanleyVariationFrankensteinDraculaVariation_C27:
            fenArray = fenViennaGameStanleyVariationFrankensteinDraculaVariation_C27;
            break;
        case FenArrayType.KingsGambitAcceptedMasonKeresGambit_C33:
            fenArray = fenKingsGambitAcceptedMasonKeresGambit_C33;
            break;
        case FenArrayType.FrenchDefensePelikanVariation_C00:
            fenArray = fenFrenchDefensePelikanVariation_C00;
            break;
        case FenArrayType.FrenchDefenseMediterraneanDefense_C01:
            fenArray = fenFrenchDefenseMediterraneanDefense_C01;
            break;
        case FenArrayType.KingsGambitAcceptedKingsKnightGambit_C34:
            fenArray = fenKingsGambitAcceptedKingsKnightGambit_C34;
            break;
        case FenArrayType.QueenPawnGameMorrisCountergambit_D00:
            fenArray = fenQueenPawnGameMorrisCountergambit_D00;
            break;
        case FenArrayType.ItalianGameEvansGambitAnderssenDefense_C52:
            fenArray = fenItalianGameEvansGambitAnderssenDefense_C52;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationFingerslipVariationKuninDoubleGambit_C15:
            fenArray =
                fenFrenchDefenseWinawerVariationFingerslipVariationKuninDoubleGambit_C15;
            break;
        case FenArrayType.PhilidorDefenseAlbinBlackburneGambit_C41:
            fenArray = fenPhilidorDefenseAlbinBlackburneGambit_C41;
            break;
        case FenArrayType.PhilidorDefenseMorphyGambit_C41:
            fenArray = fenPhilidorDefenseMorphyGambit_C41;
            break;
        case FenArrayType.LionDefenseAntiPhilidor_B07:
            fenArray = fenLionDefenseAntiPhilidor_B07;
            break;
        case FenArrayType.KingsGambitDeclinedMilesDefense_C30:
            fenArray = fenKingsGambitDeclinedMilesDefense_C30;
            break;
        case FenArrayType.KingsIndianDefenseAverbakhVariationModernDefenseBurgessLine_E73:
            fenArray =
                fenKingsIndianDefenseAverbakhVariationModernDefenseBurgessLine_E73;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationWadeVariationKaidanovGambit_D47:
            fenArray =
                fenSemiSlavDefenseMeranVariationWadeVariationKaidanovGambit_D47;
            break;
        case FenArrayType.TrompowskyAttackBorgVariation_A45:
            fenArray = fenTrompowskyAttackBorgVariation_A45;
            break;
        case FenArrayType.RussianGameModernAttackTrifunovicVariation_C43:
            fenArray = fenRussianGameModernAttackTrifunovicVariation_C43;
            break;
        case FenArrayType.QueensGambitAcceptedAlekhineDefenseBorisenkoFurmanVariation_D21:
            fenArray =
                fenQueensGambitAcceptedAlekhineDefenseBorisenkoFurmanVariation_D21;
            break;
        case FenArrayType.PolishDefenseSpasskyGambitAccepted_A40:
            fenArray = fenPolishDefenseSpasskyGambitAccepted_A40;
            break;
        case FenArrayType.EnglishOpeningSymmetricalVariationDoubleFianchetto_A38:
            fenArray = fenEnglishOpeningSymmetricalVariationDoubleFianchetto_A38;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationRabinovichVariation_D49:
            fenArray = fenSemiSlavDefenseMeranVariationRabinovichVariation_D49;
            break;
        case FenArrayType.SpanishGameClosedVariationsSuetinVariation_C90:
            fenArray = fenSpanishGameClosedVariationsSuetinVariation_C90;
            break;
        case FenArrayType.BlackmarDiemerGambitZieglerDefense_D00:
            fenArray = fenBlackmarDiemerGambitZieglerDefense_D00;
            break;
        case FenArrayType.ItalianGameClassicalVariation_C53:
            fenArray = fenItalianGameClassicalVariation_C53;
            break;
        case FenArrayType.VanGeetOpeningReversedNimzowitsch_A00:
            fenArray = fenVanGeetOpeningReversedNimzowitsch_A00;
            break;
        case FenArrayType.ItalianGameRosentreterGambit_C50:
            fenArray = fenItalianGameRosentreterGambit_C50;
            break;
        case FenArrayType.SicilianDefenseBoleslavskyVariationLoumaVariation_B58:
            fenArray = fenSicilianDefenseBoleslavskyVariationLoumaVariation_B58;
            break;
        case FenArrayType.KingsGambitAcceptedHansteinGambit_C38:
            fenArray = fenKingsGambitAcceptedHansteinGambit_C38;
            break;
        case FenArrayType.CarrDefenseGeneral_B00:
            fenArray = fenCarrDefenseGeneral_B00;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambitCozioVariation_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambitCozioVariation_C33;
            break;
        case FenArrayType.ViennaGameMengariniVariation_C26:
            fenArray = fenViennaGameMengariniVariation_C26;
            break;
        case FenArrayType.SemiSlavDefenseAntiNoteboomStonewallVariationPortischGambit_D31:
            fenArray =
                fenSemiSlavDefenseAntiNoteboomStonewallVariationPortischGambit_D31;
            break;
        case FenArrayType.WareDefenseGeneral_B00:
            fenArray = fenWareDefenseGeneral_B00;
            break;
        case FenArrayType.PolishOpeningTartakowerGambit_A00:
            fenArray = fenPolishOpeningTartakowerGambit_A00;
            break;
        case FenArrayType.BenoniDefenseBenoniGambitSchlenkerDefense_A43:
            fenArray = fenBenoniDefenseBenoniGambitSchlenkerDefense_A43;
            break;
        case FenArrayType.EnglundGambitComplexStockholmVariation_A40:
            fenArray = fenEnglundGambitComplexStockholmVariation_A40;
            break;
        case FenArrayType.PterodactylDefenseSicilianRhamporhynchus_B06:
            fenArray = fenPterodactylDefenseSicilianRhamporhynchus_B06;
            break;
        case FenArrayType.KingsGambitAcceptedBishopsGambitMaurianDefense_C33:
            fenArray = fenKingsGambitAcceptedBishopsGambitMaurianDefense_C33;
            break;
        case FenArrayType.ItalianGameRousseauGambit_C50:
            fenArray = fenItalianGameRousseauGambit_C50;
            break;
        case FenArrayType.GoldsmithDefenseGeneral_B00:
            fenArray = fenGoldsmithDefenseGeneral_B00;
            break;
        case FenArrayType.FrenchDefenseClassicalVariationRichterAttack_2_C13:
            fenArray = fenFrenchDefenseClassicalVariationRichterAttack_2_C13;
            break;
        case FenArrayType.CatalanOpeningClosedVariationRabinovichVariation_E09:
            fenArray = fenCatalanOpeningClosedVariationRabinovichVariation_E09;
            break;
        case FenArrayType.OldIndianCzechVariationwNf3_A53:
            fenArray = fenOldIndianCzechVariationwNf3_A53;
            break;
        case FenArrayType.ModernDefenseNorwegianDefenseNorwegianGambit_B06:
            fenArray = fenModernDefenseNorwegianDefenseNorwegianGambit_B06;
            break;
        case FenArrayType.FrenchDefenseSteinitzVariationGledhillAttack_C11:
            fenArray = fenFrenchDefenseSteinitzVariationGledhillAttack_C11;
            break;
        case FenArrayType.SpanishGameBerlinDefenseRosenthalVariation_C67:
            fenArray = fenSpanishGameBerlinDefenseRosenthalVariation_C67;
            break;
        case FenArrayType.AlekhineDefenseModernVariationAlekhineGambit_B04:
            fenArray = fenAlekhineDefenseModernVariationAlekhineGambit_B04;
            break;
        case FenArrayType.SemiSlavDefenseBotvinnikSystemAlatortsevSystem_D44:
            fenArray = fenSemiSlavDefenseBotvinnikSystemAlatortsevSystem_D44;
            break;
        case FenArrayType.TarraschDefenseRubinsteinSystem_D33:
            fenArray = fenTarraschDefenseRubinsteinSystem_D33;
            break;
        case FenArrayType.IndianGameGibbinsWiedehagenGambitAccepted_A45:
            fenArray = fenIndianGameGibbinsWiedehagenGambitAccepted_A45;
            break;
        case FenArrayType.NimzowitschDefenseLeanVariation_B00:
            fenArray = fenNimzowitschDefenseLeanVariation_B00;
            break;
        case FenArrayType.ModernDefenseMongredienDefense_1_B06:
            fenArray = fenModernDefenseMongredienDefense_1_B06;
            break;
        case FenArrayType.SicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B49:
            fenArray =
                fenSicilianDefensePaulsenVariationBastrikovVariationEnglishAttack_B49;
            break;
        case FenArrayType.BlackmarDiemerGambitTartakowerVariation_D00:
            fenArray = fenBlackmarDiemerGambitTartakowerVariation_D00;
            break;
        case FenArrayType.ViennaGameStanleyVariationAlekhineVariation_C27:
            fenArray = fenViennaGameStanleyVariationAlekhineVariation_C27;
            break;
        case FenArrayType.NimzowitschDefenseScandinavianVariationBogoljubowVariationHeinolaDeppeGambit_B00:
            fenArray =
                fenNimzowitschDefenseScandinavianVariationBogoljubowVariationHeinolaDeppeGambit_B00;
            break;
        case FenArrayType.ItalianGameHungarianDefenseTartakowerVariation_C50:
            fenArray = fenItalianGameHungarianDefenseTartakowerVariation_C50;
            break;
        case FenArrayType.NeoGruenfeldDefenseGeneral_D70:
            fenArray = fenNeoGruenfeldDefenseGeneral_D70;
            break;
        case FenArrayType.GruenfeldDefenseFlohrDefense_D94:
            fenArray = fenGruenfeldDefenseFlohrDefense_D94;
            break;
        case FenArrayType.DutchDefenseNimzoDutchVariationAlekhineVariation_A90:
            fenArray = fenDutchDefenseNimzoDutchVariationAlekhineVariation_A90;
            break;
        case FenArrayType.SpanishGameMarshallAttackRe3variation_C89:
            fenArray = fenSpanishGameMarshallAttackRe3variation_C89;
            break;
        case FenArrayType.PortugueseOpeningGeneral_C20:
            fenArray = fenPortugueseOpeningGeneral_C20;
            break;
        case FenArrayType.PterodactylDefenseFianchettoQueenPteronodon_A40:
            fenArray = fenPterodactylDefenseFianchettoQueenPteronodon_A40;
            break;
        case FenArrayType.SodiumAttackGeneral_A00:
            fenArray = fenSodiumAttackGeneral_A00;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationBarmenDefenseMilnerBarryAttack_B22:
            fenArray =
                fenSicilianDefenseAlapinVariationBarmenDefenseMilnerBarryAttack_B22;
            break;
        case FenArrayType.CaroKannDefensePanovAttackGunderamAttack_B13:
            fenArray = fenCaroKannDefensePanovAttackGunderamAttack_B13;
            break;
        case FenArrayType.QueensIndianDefenseKasparovVariationBotvinnikAttack_E12:
            fenArray = fenQueensIndianDefenseKasparovVariationBotvinnikAttack_E12;
            break;
        case FenArrayType.FrenchDefenseTarraschVariationOpenSystemAdvanceLine_C08:
            fenArray = fenFrenchDefenseTarraschVariationOpenSystemAdvanceLine_C08;
            break;
        case FenArrayType.SpanishGameExchangeVariationAlekhineVariation_C68:
            fenArray = fenSpanishGameExchangeVariationAlekhineVariation_C68;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_2_C17:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_2_C17;
            break;
        case FenArrayType.ItalianGameEvansGambitSlowVariation_C52:
            fenArray = fenItalianGameEvansGambitSlowVariation_C52;
            break;
        case FenArrayType.PhilidorDefensePhilidorCountergambit_C41:
            fenArray = fenPhilidorDefensePhilidorCountergambit_C41;
            break;
        case FenArrayType.ItalianGameScotchGambitMaxLangeAttackSpielmannDefense_C56:
            fenArray = fenItalianGameScotchGambitMaxLangeAttackSpielmannDefense_C56;
            break;
        case FenArrayType.PircDefenseAustrianAttackLjubojevicVariation_B09:
            fenArray = fenPircDefenseAustrianAttackLjubojevicVariation_B09;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitBlackburneAttack_C31:
            fenArray = fenKingsGambitFalkbeerCountergambitBlackburneAttack_C31;
            break;
        case FenArrayType.NimzoIndianDefenseNormalVariationGligoricSystemSmyslovVariation_E54:
            fenArray =
                fenNimzoIndianDefenseNormalVariationGligoricSystemSmyslovVariation_E54;
            break;
        case FenArrayType.FourKnightsGameDoubleSpanishMiscwith5OO_C49:
            fenArray = fenFourKnightsGameDoubleSpanishMiscwith5OO_C49;
            break;
        case FenArrayType.BlackmarDiemerGambitGeneral_D00:
            fenArray = fenBlackmarDiemerGambitGeneral_D00;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationSozinVariationII_D49:
            fenArray = fenSemiSlavDefenseMeranVariationSozinVariationII_D49;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationFourKnightsVariation_A28:
            fenArray = fenEnglishOpeningKingsEnglishVariationFourKnightsVariation_A28;
            break;
        case FenArrayType.KingsGambitAcceptedTraditionalVariation_C38:
            fenArray = fenKingsGambitAcceptedTraditionalVariation_C38;
            break;
        case FenArrayType.PonzianiOpeningVukovicGambit_C44:
            fenArray = fenPonzianiOpeningVukovicGambit_C44;
            break;
        case FenArrayType.KingsIndianDefenseFourPawnsAttackFluidAttack_E78:
            fenArray = fenKingsIndianDefenseFourPawnsAttackFluidAttack_E78;
            break;
        case FenArrayType.SpanishGameMorphyDefenseBreyerDefense_C94:
            fenArray = fenSpanishGameMorphyDefenseBreyerDefense_C94;
            break;
        case FenArrayType.KingsGambitFalkbeerCountergambitAccepted_C31:
            fenArray = fenKingsGambitFalkbeerCountergambitAccepted_C31;
            break;
        case FenArrayType.DurasGambitGeneral_B00:
            fenArray = fenDurasGambitGeneral_B00;
            break;
        case FenArrayType.SpanishGameBerlinDefenseClosedShowalterVariation_C66:
            fenArray = fenSpanishGameBerlinDefenseClosedShowalterVariation_C66;
            break;
        case FenArrayType.SicilianDefenseQuinterosVariation_B27:
            fenArray = fenSicilianDefenseQuinterosVariation_B27;
            break;
        case FenArrayType.KingsGambitDeclinedPetrovsDefense_C30:
            fenArray = fenKingsGambitDeclinedPetrovsDefense_C30;
            break;
        case FenArrayType.GruenfeldDefenseCounterthrustVariation_E60:
            fenArray = fenGruenfeldDefenseCounterthrustVariation_E60;
            break;
        case FenArrayType.SemiSlavDefenseStonewallDefense_D45:
            fenArray = fenSemiSlavDefenseStonewallDefense_D45;
            break;
        case FenArrayType.ModernDefenseAverbakhSystemRandspringerVariation_A42:
            fenArray = fenModernDefenseAverbakhSystemRandspringerVariation_A42;
            break;
        case FenArrayType.ItalianGameScotchGambitCanalVariation_C56:
            fenArray = fenItalianGameScotchGambitCanalVariation_C56;
            break;
        case FenArrayType.NimzoLarsenAttackSpikeVariation_A01:
            fenArray = fenNimzoLarsenAttackSpikeVariation_A01;
            break;
        case FenArrayType.SicilianDefenseAlapinVariationBarmenDefenseEndgameVariation_B22:
            fenArray =
                fenSicilianDefenseAlapinVariationBarmenDefenseEndgameVariation_B22;
            break;
        case FenArrayType.NimzowitschDefenseKennedyVariationMainLine_B00:
            fenArray = fenNimzowitschDefenseKennedyVariationMainLine_B00;
            break;
        case FenArrayType.QueensGambitRefusedBalticDefenseQueenAttack_D02:
            fenArray = fenQueensGambitRefusedBalticDefenseQueenAttack_D02;
            break;
        case FenArrayType.CaroKannDefenseHillbillyAttackSchaefferGambit_B10:
            fenArray = fenCaroKannDefenseHillbillyAttackSchaefferGambit_B10;
            break;
        case FenArrayType.SemiSlavDefenseMeranVariationOldVariation_D48:
            fenArray = fenSemiSlavDefenseMeranVariationOldVariation_D48;
            break;
        case FenArrayType.FrenchDefenseMacCutcheonVariationTartakowerVariation_C12:
            fenArray = fenFrenchDefenseMacCutcheonVariationTartakowerVariation_C12;
            break;
        case FenArrayType.PonzianiOpeningPonzianiCountergambit_C44:
            fenArray = fenPonzianiOpeningPonzianiCountergambit_C44;
            break;
        case FenArrayType.KingsKnightOpeningGeneral_C40:
            fenArray = fenKingsKnightOpeningGeneral_C40;
            break;
        case FenArrayType.EnglishOpeningAngloIndianDefenseGruenfeldFormation_A15:
            fenArray = fenEnglishOpeningAngloIndianDefenseGruenfeldFormation_A15;
            break;
        case FenArrayType.QueensIndianDefenseKasparovPetrosianVariationRashkovskyAttack_E12:
            fenArray =
                fenQueensIndianDefenseKasparovPetrosianVariationRashkovskyAttack_E12;
            break;
        case FenArrayType.VanGeetOpeningBattambangVariation_A00:
            fenArray = fenVanGeetOpeningBattambangVariation_A00;
            break;
        case FenArrayType.ScotchGameGoringGambitBardelebenVariation_C44:
            fenArray = fenScotchGameGoringGambitBardelebenVariation_C44;
            break;
        case FenArrayType.KingPawnGameDresdenOpening_C44:
            fenArray = fenKingPawnGameDresdenOpening_C44;
            break;
        case FenArrayType.QueensGambitDeclinedBeenKoomenVariation_D50:
            fenArray = fenQueensGambitDeclinedBeenKoomenVariation_D50;
            break;
        case FenArrayType.SlavDefenseCzechVariationLaskerVariation_D18:
            fenArray = fenSlavDefenseCzechVariationLaskerVariation_D18;
            break;
        case FenArrayType.TarraschDefenseWagnerVariation_D33:
            fenArray = fenTarraschDefenseWagnerVariation_D33;
            break;
        case FenArrayType.IndianGameKnightsVariationAlburtMilesVariation_A46:
            fenArray = fenIndianGameKnightsVariationAlburtMilesVariation_A46;
            break;
        case FenArrayType.QueensGambitDeclinedSemmeringVariation_D30:
            fenArray = fenQueensGambitDeclinedSemmeringVariation_D30;
            break;
        case FenArrayType.ScotchGameScotchGambitCochraneAnderssenVariation_C44:
            fenArray = fenScotchGameScotchGambitCochraneAnderssenVariation_C44;
            break;
        case FenArrayType.BorgDefenseTroonGambit_B00:
            fenArray = fenBorgDefenseTroonGambit_B00;
            break;
        case FenArrayType.ZukertortOpeningWadeTartakowerDefense_A04:
            fenArray = fenZukertortOpeningWadeTartakowerDefense_A04;
            break;
        case FenArrayType.ItalianGameScotchGambitAnderssenAttackMainLine_C56:
            fenArray = fenItalianGameScotchGambitAnderssenAttackMainLine_C56;
            break;
        case FenArrayType.FourKnightsGameSpanishVariationSymmetricalVariation_4_C49:
            fenArray = fenFourKnightsGameSpanishVariationSymmetricalVariation_4_C49;
            break;
        case FenArrayType.BirdOpeningSchlechterGambit_A02:
            fenArray = fenBirdOpeningSchlechterGambit_A02;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefense_2_C55:
            fenArray = fenItalianGameTwoKnightsDefense_2_C55;
            break;
        case FenArrayType.BlackmarDiemerGambitRyderGambit_D00:
            fenArray = fenBlackmarDiemerGambitRyderGambit_D00;
            break;
        case FenArrayType.BlackmarDiemerGambitNetherlandsVariation_D00:
            fenArray = fenBlackmarDiemerGambitNetherlandsVariation_D00;
            break;
        case FenArrayType.FrenchDefenseDiemerDuhmGambit_C00:
            fenArray = fenFrenchDefenseDiemerDuhmGambit_C00;
            break;
        case FenArrayType.PhilidorDefensePhilidorCountergambitZukertortVariation_C41:
            fenArray = fenPhilidorDefensePhilidorCountergambitZukertortVariation_C41;
            break;
        case FenArrayType.KingsGambitAcceptedGrecoGambit_C38:
            fenArray = fenKingsGambitAcceptedGrecoGambit_C38;
            break;
        case FenArrayType.HungarianOpeningReversedAlekhine_A00:
            fenArray = fenHungarianOpeningReversedAlekhine_A00;
            break;
        case FenArrayType.ZukertortOpeningHerrstromGambit_A04:
            fenArray = fenZukertortOpeningHerrstromGambit_A04;
            break;
        case FenArrayType.BenoniDefenseWoozle_A43:
            fenArray = fenBenoniDefenseWoozle_A43;
            break;
        case FenArrayType.ItalianGameScotchGambit_C55:
            fenArray = fenItalianGameScotchGambit_C55;
            break;
        case FenArrayType.CreepyCrawlyFormationClassicalDefense_A00:
            fenArray = fenCreepyCrawlyFormationClassicalDefense_A00;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefensePolerioDefense_C57:
            fenArray = fenItalianGameTwoKnightsDefensePolerioDefense_C57;
            break;
        case FenArrayType.EnglishOpeningAngloScandinavianDefenseMalvinasVariation_A10:
            fenArray = fenEnglishOpeningAngloScandinavianDefenseMalvinasVariation_A10;
            break;
        case FenArrayType.SicilianDefenseClassicalVariationDragonTransfer_B58:
            fenArray = fenSicilianDefenseClassicalVariationDragonTransfer_B58;
            break;
        case FenArrayType.RubinsteinOpeningSemiSlavDefense_D05:
            fenArray = fenRubinsteinOpeningSemiSlavDefense_D05;
            break;
        case FenArrayType.CaroKannDefenseBreyerVariationSteinAttack_B10:
            fenArray = fenCaroKannDefenseBreyerVariationSteinAttack_B10;
            break;
        case FenArrayType.QueenPawnGameTorreAttackBreyerVariation_D03:
            fenArray = fenQueenPawnGameTorreAttackBreyerVariation_D03;
            break;
        case FenArrayType.ModernDefensePterodactylVariation_B06:
            fenArray = fenModernDefensePterodactylVariation_B06;
            break;
        case FenArrayType.NimzowitschDefenseKennedyVariationRiemannDefense_B00:
            fenArray = fenNimzowitschDefenseKennedyVariationRiemannDefense_B00;
            break;
        case FenArrayType.ViennaGameViennaGambitKaufmannVariation_C29:
            fenArray = fenViennaGameViennaGambitKaufmannVariation_C29;
            break;
        case FenArrayType.QueensIndianDefenseMarienbadSystemBergVariation_A47:
            fenArray = fenQueensIndianDefenseMarienbadSystemBergVariation_A47;
            break;
        case FenArrayType.EnglundGambitComplexDeclined_A40:
            fenArray = fenEnglundGambitComplexDeclined_A40;
            break;
        case FenArrayType.SpanishGameSteinitzDefenseNimzowitschAttack_C62:
            fenArray = fenSpanishGameSteinitzDefenseNimzowitschAttack_C62;
            break;
        case FenArrayType.ModernDefenseMongredienDefense_2_B06:
            fenArray = fenModernDefenseMongredienDefense_2_B06;
            break;
        case FenArrayType.EnglishOpeningKingsEnglishVariationKeresDefense_A21:
            fenArray = fenEnglishOpeningKingsEnglishVariationKeresDefense_A21;
            break;
        case FenArrayType.SpanishGameOpenVariationsMalkinVariation_C83:
            fenArray = fenSpanishGameOpenVariationsMalkinVariation_C83;
            break;
        case FenArrayType.CaroKannDefenseAlekhineGambit_B15:
            fenArray = fenCaroKannDefenseAlekhineGambit_B15;
            break;
        case FenArrayType.VanGeetOpeningMyersAttack_A00:
            fenArray = fenVanGeetOpeningMyersAttack_A00;
            break;
        case FenArrayType.SicilianDefenseSpielmannVariation_B56:
            fenArray = fenSicilianDefenseSpielmannVariation_B56;
            break;
        case FenArrayType.AlekhineDefenseSteinerVariation_B02:
            fenArray = fenAlekhineDefenseSteinerVariation_B02;
            break;
        case FenArrayType.SicilianDefenseHyperacceleratedPterodactylExchangeVariation_B27:
            fenArray =
                fenSicilianDefenseHyperacceleratedPterodactylExchangeVariation_B27;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseKnightAttack_C57:
            fenArray = fenItalianGameTwoKnightsDefenseKnightAttack_C57;
            break;
        case FenArrayType.PolishOpeningBugayevAdvanceVariation_A00:
            fenArray = fenPolishOpeningBugayevAdvanceVariation_A00;
            break;
        case FenArrayType.FrenchDefenseWinawerVariationAdvanceVariation_3_C17:
            fenArray = fenFrenchDefenseWinawerVariationAdvanceVariation_3_C17;
            break;
        case FenArrayType.KingsIndianDefenseOrthodoxVariationUkranianDefense_E94:
            fenArray = fenKingsIndianDefenseOrthodoxVariationUkranianDefense_E94;
            break;
        case FenArrayType.GrobOpeningSpikeHurstAttack_A00:
            fenArray = fenGrobOpeningSpikeHurstAttack_A00;
            break;
        case FenArrayType.BlackmarDiemerGambitDeclinedOKellyDefense_D00:
            fenArray = fenBlackmarDiemerGambitDeclinedOKellyDefense_D00;
            break;
        case FenArrayType.QueensGambitRefusedChigorinDefenseMainLineAlekhineVariation_D07:
            fenArray =
                fenQueensGambitRefusedChigorinDefenseMainLineAlekhineVariation_D07;
            break;
        case FenArrayType.KingsGambitAcceptedKieseritskyGambitRubinsteinVariation_C39:
            fenArray = fenKingsGambitAcceptedKieseritskyGambitRubinsteinVariation_C39;
            break;
        case FenArrayType.EnglishOpeningAngloScandinavianDefenseSchulzGambit_A10:
            fenArray = fenEnglishOpeningAngloScandinavianDefenseSchulzGambit_A10;
            break;
        case FenArrayType.PonzianiOpeningSpanishVariation_C44:
            fenArray = fenPonzianiOpeningSpanishVariation_C44;
            break;
        case FenArrayType.BlackmarDiemerGambitBogoljubowVariationStudierAttack_D00:
            fenArray = fenBlackmarDiemerGambitBogoljubowVariationStudierAttack_D00;
            break;
        case FenArrayType.ScotchGameLolliVariation_C44:
            fenArray = fenScotchGameLolliVariation_C44;
            break;
        case FenArrayType.SpanishGameOpenVariationsKarpovGambit_C80:
            fenArray = fenSpanishGameOpenVariationsKarpovGambit_C80;
            break;
        case FenArrayType.GruenfeldDefenseExchangeVariationLarsenVariation_D86:
            fenArray = fenGruenfeldDefenseExchangeVariationLarsenVariation_D86;
            break;
        case FenArrayType.QueenPawnOpeningVeresovOpeningRichterAttack_D00:
            fenArray = fenQueenPawnOpeningVeresovOpeningRichterAttack_D00;
            break;
        case FenArrayType.ItalianGameEvansGambitBronsteinDefense_C51:
            fenArray = fenItalianGameEvansGambitBronsteinDefense_C51;
            break;
        case FenArrayType.ItalianGameTwoKnightsDefenseLolliAttack_C57:
            fenArray = fenItalianGameTwoKnightsDefenseLolliAttack_C57;
            break;
        case FenArrayType.IndianGameAntiGrunfeldAlekhineVariationLekoGambit_D70:
            fenArray = fenIndianGameAntiGrunfeldAlekhineVariationLekoGambit_D70;
            break;
        case FenArrayType.ScotchGameRelfssonGambit_C44:
            fenArray = fenScotchGameRelfssonGambit_C44;
            break;
        case FenArrayType.NimzowitschDefensePseudoSpanishVariation_B00:
            fenArray = fenNimzowitschDefensePseudoSpanishVariation_B00;
            break;
        case FenArrayType.FrenchDefenseMainLine_C00:
            fenArray = fenFrenchDefenseMainLine_C00;
            break;
        case FenArrayType.SicilianDefensePinVariationJaffeVariation_B40:
            fenArray = fenSicilianDefensePinVariationJaffeVariation_B40;
            break;
        case FenArrayType.BudapestDefenseFajarowiczSteinerVariation_A51:
            fenArray = fenBudapestDefenseFajarowiczSteinerVariation_A51;
            break;
        case FenArrayType.VanGeetOpeningBerlinGambit_A00:
            fenArray = fenVanGeetOpeningBerlinGambit_A00;
            break;
        case FenArrayType.VanGeetOpeningNovosibirskVariation_A00:
            fenArray = fenVanGeetOpeningNovosibirskVariation_A00;
            break;
        case FenArrayType.TorreAttackWagnerGambit_A46:
            fenArray = fenTorreAttackWagnerGambit_A46;
            break;
        case FenArrayType.QueensGambitGeneral_D06:
            fenArray = fenQueensGambitGeneral_D06;
            break;
        case FenArrayType.ItalianGameScotchGambitDoubleGambitAccepted_C56:
            fenArray = fenItalianGameScotchGambitDoubleGambitAccepted_C56;
            break;
        case FenArrayType.QueensGambitRefusedAlbinCountergambitFianchettoVariationBf5Liner_D09:
            fenArray =
                fenQueensGambitRefusedAlbinCountergambitFianchettoVariationBf5Liner_D09;
            break;
        case FenArrayType.KingsGambitAcceptedKieseritskyGambitLongWhip_C39:
            fenArray = fenKingsGambitAcceptedKieseritskyGambitLongWhip_C39;
            break;
        case FenArrayType.NimzowitschDefenseKennedyVariationKeresAttack_B00:
            fenArray = fenNimzowitschDefenseKennedyVariationKeresAttack_B00;
            break;
        case FenArrayType.QueenPawnGameChandlerGambit_D02:
            fenArray = fenQueenPawnGameChandlerGambit_D02;
            break;
        case FenArrayType.BishopsOpeningUrusovGambit_C24:
            fenArray = fenBishopsOpeningUrusovGambit_C24;
            break;
        case FenArrayType.OldIndianDefenseJanowskiVariation_A53:
            fenArray = fenOldIndianDefenseJanowskiVariation_A53;
            break;
        case FenArrayType.TarraschDefenseVonHennigGambit_D32:
            fenArray = fenTarraschDefenseVonHennigGambit_D32;
            break;
        case FenArrayType.ItalianGameEvansGambitCompromisedDefense_C52:
            fenArray = fenItalianGameEvansGambitCompromisedDefense_C52;
            break;
        default:
            fenArray = fenDefaultOpening;
            break;
    }
    const randomIndex = Math.floor(Math.random() * fenArray.length);
    return fenArray[randomIndex];
};