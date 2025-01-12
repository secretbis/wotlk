import { Consumes } from '../core/proto/common.js';

import { EquipmentSpec } from '../core/proto/common.js';
import { Flask } from '../core/proto/common.js';
import { Food } from '../core/proto/common.js';
import { Glyphs } from '../core/proto/common.js';
import { Potions } from '../core/proto/common.js';
import { SavedRotation, SavedTalents } from '../core/proto/ui.js';
import { Spec } from '../core/proto/common.js';
import { Player } from '../core/player.js';
import { APLRotation } from '../core/proto/apl.js';

import { ElementalShaman_Rotation as ElementalShamanRotation, ElementalShaman_Options as ElementalShamanOptions, ShamanShield, ShamanMajorGlyph, ShamanMinorGlyph } from '../core/proto/shaman.js';
import { ElementalShaman_Rotation_RotationType as RotationType } from '../core/proto/shaman.js';

import {
  AirTotem,
  EarthTotem,
  FireTotem,
  WaterTotem,
  ShamanTotems,
} from '../core/proto/shaman.js';


import * as Tooltips from '../core/constants/tooltips.js';
import { Faction } from '../core/proto/common.js';

import DefaultApl from './apls/default.apl.json';
import AdvancedApl from './apls/advanced.apl.json';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/wotlk/talent-calc and copy the numbers in the url.
export const StandardTalents = {
  name: 'Standard',
  data: SavedTalents.create({
    talentsString: '0532001523212351322301351-005052031',
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfLava,
      major2: ShamanMajorGlyph.GlyphOfTotemOfWrath,
      major3: ShamanMajorGlyph.GlyphOfLightningBolt,
      minor1: ShamanMinorGlyph.GlyphOfThunderstorm,
      minor2: ShamanMinorGlyph.GlyphOfWaterShield,
      minor3: ShamanMinorGlyph.GlyphOfGhostWolf,
    }),
  }),
};

export const Phase4Talents = {
  name: 'Phase 4',
  data: SavedTalents.create({
    talentsString: '0533001523213351322301351-005050031',
    glyphs: Glyphs.create({
      major1: ShamanMajorGlyph.GlyphOfFlameShock,
      major2: ShamanMajorGlyph.GlyphOfTotemOfWrath,
      major3: ShamanMajorGlyph.GlyphOfLightningBolt,
      minor1: ShamanMinorGlyph.GlyphOfThunderstorm,
      minor2: ShamanMinorGlyph.GlyphOfWaterShield,
      minor3: ShamanMinorGlyph.GlyphOfGhostWolf,
    }),
  }),
};

export const DefaultRotation = ElementalShamanRotation.create({
  totems: ShamanTotems.create({
    earth: EarthTotem.StrengthOfEarthTotem,
    air: AirTotem.WrathOfAirTotem,
    fire: FireTotem.TotemOfWrath,
    water: WaterTotem.ManaSpringTotem,
    useFireElemental: true,
  }),
  type: RotationType.Adaptive,
  fnMinManaPer: 66,
  clMinManaPer: 33,
  useChainLightning: false,
  useFireNova: false,
  useThunderstorm: true,
});

export const DefaultOptions = ElementalShamanOptions.create({
  shield: ShamanShield.WaterShield,
  bloodlust: true,
  totems: ShamanTotems.create({
    earth: EarthTotem.StrengthOfEarthTotem,
    air: AirTotem.WrathOfAirTotem,
    fire: FireTotem.TotemOfWrath,
    water: WaterTotem.ManaSpringTotem,
    useFireElemental: true,
  }),
});

export const DefaultConsumes = Consumes.create({
  defaultPotion: Potions.PotionOfWildMagic,
  flask: Flask.FlaskOfTheFrostWyrm,
  food: Food.FoodFishFeast,
});

export const PRE_RAID_PRESET = {
	name: 'Pre-raid Preset',
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{"items": [
		{"id":37180,"enchant":3820,"gems":[41285,42144]},
		{"id":37595},
		{"id":37673,"enchant":3810,"gems":[42144]},
		{"id":41610,"enchant":3722},
		{"id":39592,"enchant":3832,"gems":[42144,40025]},
		{"id":37788,"enchant":2332,"gems":[0]},
		{"id":39593,"enchant":3246,"gems":[40051,0]},
		{"id":40696,"gems":[40049,39998]},
		{"id":37791,"enchant":3719},
		{"id":44202,"enchant":3826,"gems":[39998]},
		{"id":43253,"gems":[40027]},
		{"id":37694},
		{"id":40682},
		{"id":37873},
		{"id":41384,"enchant":3834},
		{"id":40698},
		{"id":40708}
  ]}`),
};

export const P1_PRESET = {
	name: 'P1 Preset',
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{"items": [
		{"id":40516,"enchant":3820,"gems":[41285,40027]},
		{"id":44661,"gems":[39998]},
		{"id":40286,"enchant":3810},
		{"id":44005,"enchant":3722,"gems":[40027]},
		{"id":40514,"enchant":3832,"gems":[42144,42144]},
		{"id":40324,"enchant":2332,"gems":[42144,0]},
		{"id":40302,"enchant":3246,"gems":[0]},
		{"id":40301,"gems":[40014]},
		{"id":40560,"enchant":3721},
		{"id":40519,"enchant":3826},
		{"id":37694},
		{"id":40399},
		{"id":40432},
		{"id":40255},
		{"id":40395,"enchant":3834},
		{"id":40401,"enchant":1128},
		{"id":40267}
  ]}`),
};

export const P2_PRESET = {
	name: 'P2 Preset',
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{"items": [
    {"id":46209,"enchant":3820,"gems":[41285,40048]},
    {"id":45933,"gems":[39998]},
    {"id":46211,"enchant":3810,"gems":[39998]},
    {"id":45242,"enchant":3722,"gems":[39998]},
    {"id":46206,"enchant":3832,"gems":[39998,39998]},
    {"id":45460,"enchant":2332,"gems":[39998,0]},
    {"id":45665,"enchant":3604,"gems":[39998,39998,0]},
    {"id":45616,"enchant":3599,"gems":[39998,39998,39998]},
    {"id":46210,"enchant":3721,"gems":[39998,40027]},
    {"id":45537,"enchant":3606,"gems":[39998,40027]},
    {"id":46046,"gems":[39998]},
    {"id":45495,"gems":[39998]},
    {"id":45518},
    {"id":40255},
    {"id":45612,"enchant":3834,"gems":[39998]},
    {"id":45470,"enchant":1128,"gems":[39998]},
    {"id":40267}
  ]}`),
};

export const P3_PRESET_HORDE = {
	name: 'P3 Preset [H]',
	enableWhen: (player: Player<Spec.SpecElementalShaman>) => player.getFaction() == Faction.Horde,
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{"items": [
    {"id":48328,"enchant":3820,"gems":[41285,40153]},
    {"id":47468,"gems":[40155]},
    {"id":48330,"enchant":3810,"gems":[40113]},
    {"id":47551,"enchant":3722,"gems":[40113]},
    {"id":48326,"enchant":3832,"gems":[40113,40132]},
    {"id":45460,"enchant":2332,"gems":[40113,0]},
    {"id":48327,"enchant":3604,"gems":[40155,0]},
    {"id":47447,"enchant":3599,"gems":[40132,40113,40113]},
    {"id":47479,"enchant":3721,"gems":[40113,40113,40113]},
    {"id":47456,"enchant":3606,"gems":[40113,40113]},
    {"id":46046,"gems":[40155]},
    {"id":45495,"gems":[40113]},
    {"id":47477},
    {"id":45518},
    {"id":47422,"enchant":3834,"gems":[40113]},
    {"id":47448,"enchant":1128,"gems":[40155]},
    {"id":47666}
  ]}`),
};

export const P3_PRESET_ALLI = {
	name: 'P3 Preset [A]',
	enableWhen: (player: Player<Spec.SpecElementalShaman>) => player.getFaction() == Faction.Alliance,
	tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
	gear: EquipmentSpec.fromJsonString(`{"items":[
    {"id":48323,"enchant":3820,"gems":[41285,40155]},
    {"id":47144,"gems":[40155]},
    {"id":48321,"enchant":3810,"gems":[40113]},
    {"id":47552,"enchant":3722,"gems":[40113]},
    {"id":48325,"enchant":3832,"gems":[40113,40132]},
    {"id":45460,"enchant":2332,"gems":[40113,0]},
    {"id":48324,"enchant":3604,"gems":[40155,0]},
    {"id":47084,"enchant":3599,"gems":[40132,40113,40113]},
    {"id":47190,"enchant":3721,"gems":[40113,40113,40113]},
    {"id":47099,"enchant":3606,"gems":[40113,40113]},
    {"id":46046,"gems":[40155]},
    {"id":45495,"gems":[40113]},
    {"id":47188},
    {"id":45518},
    {"id":46980,"enchant":3834,"gems":[40113]},
    {"id":47085,"enchant":1128,"gems":[40155]},
    {"id":47666}
  ]}`),
};

export const P4_PRESET = {
  name: 'P4 Preset',
  tooltip: Tooltips.BASIC_BIS_DISCLAIMER,
  gear: EquipmentSpec.fromJsonString(`{"items": [
    {"id":51237,"enchant":3820,"gems":[41285,40113]},
    {"id":50658,"gems":[40155]},
    {"id":50698,"enchant":3810,"gems":[40113,40113]},
    {"id":50628,"enchant":3722,"gems":[40155]},
    {"id":51239,"enchant":3832,"gems":[40113,40134]},
    {"id":50687,"enchant":2332,"gems":[40155,0]},
    {"id":51238,"enchant":3604,"gems":[40113,0]},
    {"id":50613,"gems":[40113,40113,40113]},
    {"id":51236,"enchant":3721,"gems":[40113,40155]},
    {"id":50699,"enchant":3826,"gems":[40134,40113]},
    {"id":50398,"gems":[40155]},
    {"id":50664,"gems":[40113]},
    {"id":50348},
    {"id":50365},
    {"id":50734,"enchant":3834,"gems":[40113]},
    {"id":50616,"enchant":1128,"gems":[40155]},
    {"id":50458}
  ]}`),
};

export const ROTATION_PRESET_DEFAULT = {
  name: 'Default',
  rotation: SavedRotation.create({
    specRotationOptionsJson: ElementalShamanRotation.toJsonString(DefaultRotation),
    rotation: APLRotation.fromJsonString(JSON.stringify(DefaultApl)),
  }),
};

export const ROTATION_PRESET_ADVANCED = {
  name: 'Advanced APL',
  rotation: SavedRotation.create({
    specRotationOptionsJson: ElementalShamanRotation.toJsonString(DefaultRotation),
    rotation: APLRotation.fromJsonString(JSON.stringify(AdvancedApl)),
  }),
}