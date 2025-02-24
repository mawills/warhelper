import {
  Ability
} from "../models/ability"
import {
  Wargear
} from "../models/wargear";
import {
  Weapon
} from "../models/weapon";

export class Constants {

  public static abilities: any = {
    denyTheWitch: new Ability({
      name: 'Deny the Witch',
      rules: 'When a PSYKER unit attempts to deny a psychic power, you must take a Deny the Witch test for that unit by rolling 2D6. If the total is greater than the result of the Psychic test, the Deny the Witch test is passed and the psychic power is denied. Only one attempt can be made to deny a psychic power. If a PSYKER unit can attempt to deny more than one psychic power in a psychic phase, this will be listed on its datasheet.'
    }),
    blast: new Ability({
      name: 'Blast',
      rules: ['If target unit has 6+ models, this has at least 3 attacks. <br/>If target unit has 11+ models, this has the maximum number of attacks.']
    }),
    shieldOfFaith: new Ability({
      name: 'Shield of Faith',
      rules: ['6+ invulnerable save.',
        'Deny one psychic power as a Psyker <i>(roll one D6: pass on unmodified 6 or if greater than Psychic test)</i>.'
      ]
    }),
    actsOfFaith: new Ability({
      name: 'Acts of Faith',
      rules: 'Once per phase, replace regular dice rolls with Miracle dice.'
    }),
    leadTheRighteous: new Ability({
      name: 'Lead the Righteous',
      tags: ['Aura'],
      rules: 'Friendly &lang;Order&rang; Core units within 6" can re-roll hit rolls of 1.'
    }),
    leadTheRighteousAffected: new Ability({
      name: 'Lead the Righteous',
      tags: ['Aura'],
      rules: 'If within 6" of Canoness, can re-roll hit rolls of 1.'
    }),
    sacredRitesDivineGuidance: new Ability({
      name: 'Divine Guidance',
      rules: 'Ranged attacks gain -1 Armor Penetration on unmodified Wound rolls of 6.',
      description: 'Seeing the weak points in their enemies’ armour, the Sisters of Battle strike out to shatter it with contemptuous ease.',
      tags: ['Sacred Rites']
    }),
    sacredRitesThePassion: new Ability({
      name: 'The Passion',
      rules: 'Unmodified hit rolls of 6 score +1 hit.',
      description: 'The Sororitas are filled with a burning passion to inflict suffering upon the faithless.',
      tags: ['Sacred Rites']
    }),
    beaconOfFaith: new Ability({
      name: 'Beacon of Faith',
      rules: '<b class="text-dark-blue">Command:</b> Gain one Miracle dice. This dice can used to perform an Act of Faith even if another unit from your army has already performed one this phase. Discard unused dice at the start of your next Command phase.',
      tags: ['Warlord Trait'],
      description: 'This Adepta Sororitas leader is a shining beacon of faith, whose actions on the battlefield are nothing short of miraculous.'
    }),
    righteousJudgementMiracleAura: new Ability({
      name: 'Righteous Judgement',
      points: 25,
      rules: `<i>Miraculous Ability:</i> Friendly &lang;Order&rang; Core and &lang;Order&rang; Character models within Miracle Range ignore enemy cover.`,
      tags: ['Blessing of the Faithful', 'Aura'],
      description: 'None can escape the Emperor’s judgement, and wherever the foe attempts to seek shelter the shots of the Adepta Sororitas miraculously seek them out.'
    }),
    righteousJudgement: new Ability({
      name: 'Righteous Judgement',
      points: 25,
      rules: [
        'Ignore <i>Look Out, Sir</i> rule. Unmodified Wound rolls of 6 inflict one additional Mortal Wound.'
      ],
      tags: ['Blessing of the Faithful'],
      description: 'None can escape the Emperor’s judgement, and wherever the foe attempts to seek shelter the shots of the Adepta Sororitas miraculously seek them out.',
    }),
    slayersOfHeretics: new Ability({
      name: 'Slayers of Heretics',
      rules: ['+1 to hit rolls against Character units.'],
      tags: ['Order Conviction'],
      description: 'Wherever corrupt heretics and vile demagogues oppose the will of the Emperor and the Ecclesiarchy, this Order has vowed to tear out their silvered tongues and sever their poisonous influence.'
    }),
    convictionOfFaith: new Ability({
      name: 'Conviction of Faith',
      rules: 'Re-roll Miracle dice rolls of 1.',
      tags: ['Order Conviction'],
      description: 'The miracles of the God-Emperor are self-evident to those with the iron-hard conviction of true zealots. In the presence of this Order’s warriors, his manifestations of divinity are myriad.'
    }),
    angelicVisage: new Ability({
      name: 'Angelic Visage',
      rules: '+1 to <i>Shield of Faith</i> invulnerable save.'
    }),
    skyStrike: new Ability({
      name: 'Sky Strike',
      rules: 'Can deploy during Reinforcements step at least 9" away from enemy models.'
    }),
    objectiveSecured: new Ability({
      name: 'Objective Secured',
      rules: 'Player controls objective marker if any of their models in range have this ability.'
    }),
    zealot: new Ability({
      name: 'Zealot',
      rules: 'If this unit charged, was charged or performed a Heroic Intervention this turn, it can re-roll hit rolls.'
    }),
    solaceInAnguish: new Ability({
      name: 'Solace in Anguish',
      rules: '5+ ignore wound.'
    }),
    martyrdom: new Ability({
      name: 'Martyrdom',
      rules: 'Gain 1 Miracle dice at end of phase if this unit was destroyed outside of the Morale phase.'
    }),
    drivenOnwards: new Ability({
      name: 'Driven Onwards',
      rules: '<span class="text-dark-blue">Command:</span> Select one friendly SISTERS REPENTIA unit within 3"; that unit and this model can charge even if they Advanced this turn. Roll an additional D6 and discard one of the results for charge rolls this turn.'
    }),
    overseerOfRedemption: new Ability({
      name: 'Overseer of Redemption',
      tags: ['Aura'],
      rules: 'While a friendly SISTERS REPENTIA unit is within 6", that unit gets +1 to wound rolls.'
    }),
    berserkKillingMachines: new Ability({
      name: 'Berserk Killing Machines',
      rules: '5+ ignore wound.'
    }),
    instrumentOfPainAndPenance: new Ability({
      name: 'Instrument of Pain and Penance',
      rules: 'This unit cannot perform any actions.'
    }),
    bornHeroes: new Ability({
      name: "Born Heroes",
      points: 0,
      rules: ["If this model's unit made a charge move, +1 to hit rolls."],
      tags: ["Chapter Tactic"],
    }),
    savageFury: new Ability({
      name: "Savage Fury",
      points: 0,
      rules: ["While the Assault Doctrine is active, unmodified hit rolls of 6 score an additional hit."],
    }),
    whirlwindOfRage: new Ability({
      name: "Whirlwind of Rage",
      points: 0,
      rules: ["If this model's unit made a charge move, was charged, or made a Heroic Intervention this turn, unmodified hit rolls of 6 score an additional hit."],
      tags: ["Chapter Tactic"],
    }),
    angelsOfDeath: new Ability({
      name: "Angels of Death",
      points: 0,
      rules: ["This unit has the following abilities: And They Shall Know No Fear; Bolter Discipline; Shock Assault; Combat Doctrines."],
      tags: ["Adeptus Astartes"],
      description: "Space Marines are amongst the finest warriors in the Imperium."
    }),
    andTheyShallKnowNoFear: new Ability({
      "name": "And They Shall Know No Fear",
      "points": 0,
      rules: ["Each time a Combat Attrition test is taken for this unit, ignore any or all modifiers."],
      "tags": ["Adeptus Astartes"],
      "description": "Space Marines stand unafraid before the terrors of the galaxy."
    }),
    shockAssault: new Ability({
      name: "Shock Assault",
      points: 0,
      rules: ["If this model's unit made a charge move, was charged, or made a Heroic Intervention this turn, models in this unit get +1 Attacks until the fight is resolved."],
      tags: ["Adeptus Astartes"],
      description: "The Adeptus Astartes are elite troops who strike with the fury of a thunderbolt. Few opponents can withstand this onslaught."
    }),
    swiftHunters: new Ability({
      name: "Swift Hunters",
      points: 0,
      rules: [
        "This unit is eligible to declare a charge with even if it Advanced this turn.",
        "Each time this unit makes a pile-in move or consolidation move, models in this unit can move an additional 1\"."
      ],
      description: "Perfectly adapted as unavoidable predators, the lupine allies of the Space Wolves easily outpace their doomed quarry."
    }),
    saintInTheMaking: new Ability({
      name: "Saint in the Making (1CP)",
      rules: "Given <b>Righteous Rage</b> Warlord trait.",
      tags: ["Requisition Stratagem"]
    }),
    openTheReliquaries: new Ability({
      name: "Open the Reliquaries (1CP)",
      rules: "Given <b>Iron Surplice of Saint Istaela</b> relic.",
      tags: ["Requisition Stratagem"]
    }),
    aSacredBurdenRedemption: new Ability({
      name: "A Sacred Burden (1CP)",
      rules: "Adepta Sororitas 'Superior' model only. Given <b>Redemption</b> relic."
    }),
    endlessSuffering: new Ability({
      name: "Endless Suffering",
      rules: ["Can charge even if it advanced. +2\" to pile-in/consolidation moves."]
    }),
    stoicEndurancePreSave: new Ability({
      name: "Stoic Endurance",
      rules: "Reduce enemy Armour Penetration characteristics of -1 or -2 by 1."
    }),
    stoicEndurancePreWound: new Ability({
      name: "Stoic Endurance",
      rules: "5+ ignore mortal wound."
    }),
    imperviousToPain: new Ability({
      name: "Impervious to Pain",
      rules: "Performing an Act of Faith restores 1 wound.",
      tags: ["Warlord Trait", "Order of the Valorous Heart"],
      description: "Following the example of Saint Lucia, this leader will endure any suffering, fighting on long past the limits of mortal endurance."
    }),
    imperviousToPainPreWound: new Ability({
      name: "Impervious to Pain",
      rules: "5+ ignore wound.",
      tags: ["Warlord Trait", "Order of the Valorous Heart"],
      description: "Following the example of Saint Lucia, this leader will endure any suffering, fighting on long past the limits of mortal endurance."
    }),
    executionerOfHeretics: new Ability({
      name: "Executioner of Heretics",
      tags: ["Aura", "Warlord Trait"],
      rules: "-1 to enemy leadership characteristic and -1 to combat attrition tests to enemy units within 6\"."
    }),
    judgementOfTheFaithful: new Ability({
      name: "(1CP) Judgement of the Faithful",
      tags: ["Stratagem"],
      rules: "<b>Movement:</b> Can shoot if fell back."
    }),
    angelicAscent: new Ability({
      name: "(1CP) Angelic Ascent",
      tags: ["Stratagem"],
      rules: "<b>Movement Start:</b> Remove unit from battlefield. Re-deploy in your next Reinforcements step."
    }),
    holyRage: new Ability({
      name: "(2CP) Holy Rage",
      tags: ["Stratagem"],
      rules: "<b>Charge Start:</b> Unit gains Zealot (re-roll hit rolls if charged, was charged, or performed Heroic Intervention) or Fanatic (can charge if fell back)."
    }),
    sufferingAndSacrifice: new Ability({
      name: "(1CP) Suffering and Sacrifice",
      tags: ["Stratagem"],
      rules: "<b>Fight:</b> Until end of phase, enemy attacks within Engagement Range of this Suffering unit can only target this unit."
    }),
    sufferNotTheWitch: new Ability({
      name: "(1CP) Suffer not the Witch",
      tags: ["Stratagem"],
      rules: "<b>Shooting / Fight:</b> +1 to hit rolls against PSYKER units. If attacking unit is a CHARACTER, +1 to wound rolls as well."
    }),
    wordOfTheEmperor: new Ability({
      name: "Word of the Emperor",
      tags: ["Blessings of the Faithful"],
      rules: "<b>Fight:</b> Select one enemy unit within 3\" of this model. That unit fights last."
    }),
    wordOfTheEmperorMiracle: new Ability({
      name: "Word of the Emperor",
      tags: ["Miraculous", "Blessings of the Faithful"],
      rules: "<b>Command:</b> While an enemy unit is within Miracle range of this model, each time a model in a friendly <ORDER> Core or <ORDER> Character unit makes a melee attack against that enemy unit, invulnerable saving throws cannot be made against that attack."
    }),
    divineIntervention: new Ability({
      name: "(2CP) Divine Intervention",
      tags: ["Stratagem"],
      rules: "<b>Destroyed:</b> Instead of triggering other destroyed events, discard 1-3 Miracle dice. At the end of the phase, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemies. This model is returned to play with a number of wounds remaining equal to the number of Miracle dice you discarded. <b>Usable once per battle.</b>"
    }),
    cleansedByFire: new Ability({
      name: "(2CP) Cleansed by Fire",
      tags: ["Stratagem"],
      rules: "<b>Shooting:</b> Choose an ADEPTUS MINISTORUM unit; when models in that unit shoot with flame weapons this phase, they attack for their maximum number of attacks."
    }),
    blessedBolts: new Ability({
      name: "(1CP) Blessed Bolts",
      tags: ["Stratagem"],
      rules: "<b>Shooting:</b> Each time an attack is made with an artificer-crafted storm bolter, unmodified hit rolls of 6 cause 2 mortal wounds (max 6 mortal wounds can be inflicted in this way)."
    }),
    finalRedemption: new Ability({
      name: "(1CP) Final Redemption",
      tags: ["Stratagem"],
      rules: "<b>Fight:</b> Until end of the phase, each time a model in this unit is destroyed by a melee attack, roll one D6: on a 4+, after the attacking model's unit has finished making its attacks, it suffers D3 mortal wounds."
    }),
    righteousImpact: new Ability({
      name: "(1CP) Righteous Impact",
      tags: ["Stratagem"],
      rules: "<b>Charge:</b> When this unit finishes a charge move, select one enemy unit within Engagement Range of this unit and roll one D6 for each model in your unit that is within Engagement Range of that enemy unit. Each dice >= enemy's Toughness suffers 1 mortal wound (unmodified rolls of 6 cause D3 mortal wounds instead)."
    }),
    guidedByTheEmprerorsWill: new Ability({
      name: "Guided by the Emperor's Will",
      tags: ["Order Conviction"],
      rules: "Can re-roll one hit roll or one wound roll per attack."
    }),
    holySmokescreen: new Ability({
      name: "Holy Smokescreen",
      tags: ["Stratagem"],
      rules: "<b>Shooting:</b> Until the end of the phase, -1 to hit rolls against this unit."
    }),
    explodes: new Ability({
      name: "Explodes",
      rules: "When this unit is destroyed, roll one D6 before any embarked models disembark and before removing it from play. On a 6 it explodes, and each unit within 6\" suffers D3 mortal wounds."
    }),
    combatSquads: new Ability({
      name: "Combat Squads",
      rules: "At the start of deployment, before any units have been set up, if this unit contains the maximum number of models that it can, then it can be split into two units containing as equal a number of models as possible. When splitting a unit using this ability, make a note of which models form each of the two new units."
    }),
    teleportStrike: new Ability({
      name: "Teleport Strike",
      rules: "During deployment, if every model in this unit has this ability, then you can set up this unit in a teleportarium chamber instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from any enemy models."
    }),
    cruxTerminatus: new Ability({
      name: "Crux Terminatus",
      rules: "5+ invulnerable save."
    }),
    stormShield: new Ability({
      name: "Storm Shield",
      rules: ["4+ invulnerable save.", "+1 to armour save rolls."]
    }),
    lightningClaw: new Ability({
      name: "Lightning Claw",
      rules: ["You may re-roll wound rolls."]
    }),
    conversionField: new Ability({
      name: "Conversion Field",
      tags: ["Artificer Relic", "INFANTRY"],
      rules: ["4+ invulnerable save.", "Unmodified saving rolls of 6 deal 1 mortal wound to the closest enemy unit within 1\"."]
    }),
     jumpPackAssault: new Ability({
      name: "Jump Pack Assault",
      points: 2,
      rules: ["During deployment, this unit can deployed into the skies above the battlefield. If it is, you may deploy it at the end of any of your Movement phases anywhere that is more than 9\" from enemy models."],
      description: ""
    }),
    bolterDiscipline: new Ability({
      name: "Bolter Discipline",
      points: 0,
      rules: ["Instead of normal rules for Rapid Fire weapons, this unit always makes double the number of attacks with Rapid Fire bolt weapons."],
      tags: ["Adeptus Astartes"],
      description: ""
    }),
    deathFromAbove: new Ability({
      name: "Death From Above",
      points: 25,
      rules: ["During deployment, this unit can deployed into the skies above the battlefield. If it is, you may deploy it at the end of any of your Movement phases anywhere that is more than 9\" from enemy models."],
      description: ""
    })
  };

  public static wargear: any = {
    rosarius: new Wargear({
      name: 'Rosarius',
      rules: '4+ invulnerable save.'
    }),
    rodOfOffice: new Wargear({
      name: 'Rod of Office',
      points: 5,
      rules: '<b>Command:</b> Select one friendly \<ORDER\> CORE or \<ORDER\> CHARACTER unit within 12"; until your next Command phase, that unit can re-roll hit rolls of 1.'
    }),
    simulacrumImperialis: new Wargear({
      name: "Simulacrum Imperialis",
      points: 5,
      rules: "Once per phase, the bearer’s unit can perform one Act of Faith even if another unit from your army has already performed an Act of Faith during this phase.",
      isRelic: false,
      tags: [""],
      description: ""
    }),
    ironSurpliceOfSaintIstaela: new Wargear({
      name: "Iron Surplice of Saint Istaela",
      rules: '+1 Wound Characteristic.'
    }),
    stormShield: new Wargear( {
      name: "Storm Shield",
      points: 4,
      rules: "The bearer has a 4+ invulnerable save. In addition, add 1 to armour saving throws made for the bearer.",
    }),
    jumpPack: new Wargear(
      {
      name: "Jump Pack",
      points: 0,
      rules: "If this model has a jump pack, when you set it up during deployment, it can be set up high in the skies, ready to strike, instead of being placed on the battlefield. If it is, it can make a sudden assault to arrive on the battlefield at the end of any of your Movement phases; when it does so set it up anywhere that is more than 9\". from any enemy models.",
    })
  };
  public static weapons: any = {
    astartesChainsword: new Weapon({
      name: "Astartes Chain Sword",
      points: 0,
      range: 0,
      type: "Melee",
      isRelic: false,
      attacks: 1,
      abilities: [new Ability({
        rules: "Each time the bearer fights, it makes 1 additional attack with this weapon."
      })],
      strength: 0,
      armorPen: -1,
      damage: 1,
      imageUrl: "https://3dprint.com/wp-content/uploads/2016/03/3dp_Chainsword_imperial.jpg"
    }),
    lightningClaw: new Weapon({
      name: "Lightning Claw",
      points: 3,
      range: 0,
      type: "Melee",
      isRelic: false,
      attacks: 1,
      abilities: [new Ability({
        rules: "Each time the bearer fights, it makes 1 additional attack with this weapon. Each time an attack is made with this weapon, you can re-roll the wound roll."
      })],
      strength: 0,
      armorPen: -2,
      damage: 1,
      imageUrl: "https://i.imgur.com/ThQPGqA.png"
    }),
    frostClaw: new Weapon({
      name: "Lightning Claw (Frost)",
      points: 3,
      range: 0,
      type: "Melee",
      isRelic: true,
      attacks: 1,
      abilities: [new Ability({
        rules: "Each time the bearer fights, it makes 1 additional attack with this weapon. Each time an attack is made with this weapon, you can re-roll the wound roll."
      })],
      strength: 1,
      armorPen: -2,
      damage: 2,
      imageUrl: "https://i.imgur.com/ThQPGqA.png"
    }),
    redemption: new Weapon({
      name: 'Redemption',
      type: 'Pistol',
      points: 5,
      isRelic: true,
      range: 12,
      attacks: 1,
      strength: 8,
      armorPen: -3,
      damage: 2,
      imageUrl: 'https://i.imgur.com/DyVQDMm.png',
      abilities: [
        new Ability({
          rules: 'On hit, draw a straight line between the closest part of this model’s base and that of the closest model in the target unit. Make one wound roll against the target unit, and each other unit this line passes over.'
        })
      ]
    }),
    ministorumHeavyFlamer: new Weapon({
      name: 'Ministorum Heavy Flamer',
      type: "Heavy",
      attacks: "D6",
      range: 12,
      strength: 6,
      armorPen: -1,
      damage: 1,
      abilities: [new Ability({
        rules: "Each time an attack is made with this weapon, that attack automatically hits the target."
      })],
      imageUrl: "https://i.imgur.com/64C8R7K.png"
    }),
    hunterKillerMissile: new Weapon({
      name: 'Hunter-killer Missile',
      type: "Heavy",
      attacks: 1,
      strength: 10,
      armorPen: -2,
      damage: 'D6',
      range: 48,
      abilities: [new Ability({
        rules: "Usable once per battle."
      })]
    }),
    stormBolter: new Weapon({
      name: 'Storm Bolter',
      range: 24,
      type: 'Rapid Fire',
      attacks: 2,
      strength: 4,
      damage: 1,
      imageUrl: "https://i.imgur.com/lDVsVA0.png"
    }),
    powerFist: new Weapon({
      name: 'Power Fist',
      type: 'Melee',
      strengthMultiplier: 2,
      armorPen: -3,
      damage: 2,
      hitModifier: -1,
      abilities: [new Ability({rules: "-1 to hit rolls."})]
    }),
    thunderHammer: new Weapon({
      name: 'Thunder Hammer',
      type: 'Melee',
      strengthMultiplier: 2,
      armorPen: -2,
      damage: 3,
      hitModifier: -1,
      abilities: [new Ability({rules: "-1 to hit rolls."})]
    }),
    chainfist: new Weapon({
      name: 'Chainfist',
      type: 'Melee',
      strengthMultiplier: 2,
      armorPen: -4,
      damage: 'D3',
      abilities: [new Ability({rules: "-1 to hit rolls. Damage to VEHICLE models is automatically set to 3."})]
    }),
    penitentBuzzBlade: new Weapon({
      name: "Penitent Buzz-blade",
      type: 'Melee',
      strength: 3,
      armorPen: -4,
      damage: 2,
      imageUrl: "https://i.imgur.com/HOXBxMd.png"
    }),
    penitentFlail: new Weapon({
      name: "Penitent Flail",
      type: 'Melee',
      strength: 0,
      armorPen: -2,
      damage: 1,
      abilities: [new Ability({
        rules: "Attacks make 2 hit rolls instead of 1."
      })]
    }),
    fragGrenade: new Weapon({
      range: 6,
      name: 'Frag Grenades',
      type: 'Grenade',
      attacks: 'D6',
      abilities: [Constants.abilities.blast],
      strength: 3,
      armorPen: 0,
      damage: 1,
      imageUrl: 'https://i.imgur.com/esz6MyK.png'
    }),
    krakGrenade: new Weapon({
      range: 6,
      name: 'Krak Grenades',
      type: 'Grenade',
      attacks: 1,
      strength: 6,
      armorPen: -1,
      imageUrl: 'https://i.imgur.com/NXPaIc0.png',
      damage: 'D3'
    }),
    powerSword: new Weapon({
      name: 'Power Sword',
      type: 'Melee',
      points: 5,
      attacks: 0,
      strength: 1,
      strengthMultiplier: 1,
      armorPen: -3,
      imageUrl: 'https://i.imgur.com/ToVWm0b.png',
      damage: 1
    }),
    plasmaPistol: new Weapon({
      name: 'Plasma Pistol',
      range: 12,
      points: 5,
      type: 'Pistol',
      attacks: 1,
      strength: 7,
      armorPen: -3,
      damage: 1,
      imageUrl: 'https://i.imgur.com/DyVQDMm.png'
    }),
    plasmaPistolSupercharge: new Weapon({
      name: 'Plasma Pistol (Supercharge)',
      range: 12,
      type: 'Pistol',
      attacks: 1,
      strength: 8,
      armorPen: -3,
      damage: 2,
      abilities: [new Ability({
        rules: 'Unmodified hit rolls of 1 destroy the bearer after shooting.'
      })]
    }),
    boltPistol: new Weapon({
      name: 'Bolt Pistol',
      range: 12,
      type: 'Pistol',
      attacks: 1,
      strength: 4,
      armorPen: 0,
      damage: 1,
      imageUrl: 'https://i.imgur.com/RQc5GaZ.png'
    }),
    boltgun: new Weapon({
      name: 'Boltgun',
      type: 'Rapid Fire',
      attacks: 1,
      range: 24,
      strength: 4,
      damage: 1,
      imageUrl: 'https://i.imgur.com/LQRPZxz.png'
    }),
    dustinCrusadeBoltgun: new Weapon({
      name: 'Boltgun',
      type: 'Rapid Fire',
      attacks: 1,
      range: 24,
      strength: 4,
      damage: 1,
      damageModifier: 1,
      hitModifier: 1,
      abilities: [new Ability({name: "Improved Sights"}), new Ability({name: "Masterworked"})],
      imageUrl: 'https://i.imgur.com/LQRPZxz.png'
    }),
    heavyBolter: new Weapon({
      name: 'Heavy Bolter',
      type: 'Heavy',
      points: 10,
      attacks: 3,
      range: 36,
      strength: 5,
      armorPen: -1,
      damage: 2,
      imageUrl: 'https://i.imgur.com/UPqwIfI.png'
    }),
    dustinCrusadeHeavyBolter: new Weapon({
      name: 'Heavy Bolter',
      type: 'Heavy',
      points: 10,
      attacks: 3,
      range: 36,
      strength: 5,
      armorPen: -1,
      abilities: [new Ability({name: "Auto-Loader", rules: "Unmodified hit rolls of 6 score +1 hit."})],
      damage: 2,
      imageUrl: 'https://i.imgur.com/UPqwIfI.png'
    }),
    artificerCraftedStormBolter: new Weapon({
      name: 'Artificer-crafted Storm Bolter',
      type: 'Rapid Fire',
      points: 5,
      attacks: 2,
      range: 24,
      strength: 4,
      armorPen: 0,
      damage: 2,
      imageUrl: 'https://i.imgur.com/lDVsVA0.png'
    }),
    ministorumFlamer: new Weapon({
      name: 'Ministorum Flamer',
      attacks: 'D6',
      points: 5,
      type: 'Assault',
      range: 12,
      strength: 5,
      damage: 1,
      imageUrl: 'https://i.imgur.com/Ps3wjNU.png'
    }),
    chainsword: new Weapon({
      name: 'Chainsword',
      type: 'Melee',
      strength: 0,
      damage: 1,
      attacks: 1,
      imageUrl: "https://3dprint.com/wp-content/uploads/2016/03/3dp_Chainsword_imperial.jpg"
    }),
    powerMaul: new Weapon({
      name: 'Power Maul',
      points: 5,
      type: 'Melee',
      strength: 3,
      damage: 1,
      armorPen: -1
    }),
    penitentEviscerator: new Weapon({
      name: 'Penitent Eviscerator',
      type: 'Melee',
      strengthMultiplier: 2,
      hitModifier: -1,
      armorPen: -3,
      damage: 2,
      abilities: [new Ability({
        rules: '*Weapon skill has been modified to adjust for -1 to hit rolls.'
      })],
      imageUrl: "https://i.imgur.com/XA9GBz6.png"
    }),
    neuralWhips: new Weapon({
      name: 'Neural Whips',
      type: 'Melee',
      strength: 0,
      armorPen: -2,
      damage: 1,
      abilities: [
        new Ability({
          rules: 'If no model in the target unit (excluding VEHICLE units) has a Leadership characteristic of 8 or more, +1 to wound rolls.'
        })
      ],
      imageUrl: 'https://i.imgur.com/ZNYGcME.png'
    }),
    arcoFlails: new Weapon({
      name: 'Arco-flails',
      type: 'Melee',
      strength: 1,
      armorPen: -1,
      damage: 1,
      abilities: [
        new Ability({
          rules: 'Attacks make 2 hit rolls instead of 1.'
        })
      ],
      imageUrl: 'https://i.imgur.com/4xob7rj.png'
    })
  }
}
