const mysql = require('mysql')
const { promisify } = require('es6-promisify')
require('dotenv').config()



const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

const query = promisify(conn.query).bind(conn)


const tracksList = [
    {
      "id": 1,
      "name": "Luigi Circuit",
      "image":"https://static.wikia.nocookie.net/mariokart/images/2/29/017.jpg/revision/latest/scale-to-width-down/700?cb=20080731132757",
      "cup": "Mushroom Cup"
    },
    {
      "id": 2,
      "name": "Moo Moo Meadows",
      "image" : "https://static.wikia.nocookie.net/mariokart/images/7/7d/MK8_WiiMooMooMeadows.jpg/revision/latest/scale-to-width-down/700?cb=20150406100636",
      "cup": "Mushroom Cup"
    },
    {
      "id": 3,
      "name": "Mushroom Gorge",
      "image": "https://static.wikia.nocookie.net/mariokart/images/0/01/MarioKartWii_MushroomGorge.png/revision/latest/scale-to-width-down/700?cb=20150413233951",
      "cup": "Mushroom Cup"

    },
    {
      "id": 4,
      "name": "Toads Factory",
      "image": "https://static.wikia.nocookie.net/mariokart/images/9/93/012.jpg/revision/latest/scale-to-width-down/700?cb=20080730134527",
      "cup" : "Mushroom Cup"
    },
    {
      "id": 5,
      "name": "Mario Circuit",
      "image": "https://static.wikia.nocookie.net/mariokart/images/5/5c/Mkwiimariocircuit.jpg/revision/latest/scale-to-width-down/700?cb=20131117213423",
      "cup" : "Flower Cup"
    },
    {
      "id": 6,
      "name": "Coconut Mall",
      "image": "https://mario.wiki.gallery/images/7/7d/Coconut_Mall_MKWii.png",
      "cup": "Flower Cup"
    },
    {
      "id": 7,
      "name": "DK Summit",
      "image": "https://mario.wiki.gallery/images/8/89/DK_Summit_MKWii.png",
      "cup": "Flower Cup"
    },
    {
      "id": 8,
      "name": "Warios Gold Mine",
      "image": "https://mario.wiki.gallery/images/thumb/2/21/MKW_Wario%27s_Gold_Mine_Course_Overview.png/500px-MKW_Wario%27s_Gold_Mine_Course_Overview.png",
      "cup" : "Flower Cup"
    },
    {
      "id": 9,
      "name": "Daisy Circuit",
      "image": "https://static.wikia.nocookie.net/mariokart/images/6/6e/Daisy_Circuitpic.png/revision/latest/scale-to-width-down/500?cb=20130828021822",
      "cup" : "Star Cup"
    },
    {
      "id": 10,
      "name": "Koopa Cape",
      "image": "https://static.wikia.nocookie.net/mariokart/images/7/74/640px-KoopaCapeMK7.png/revision/latest?cb=20111224180743",
      "cup" : "Star Cup"
    },
    {
      "id": 11,
      "name": "Maple Treeway",
      "image": "https://static.wikia.nocookie.net/mariokart/images/b/b9/MKWii_Maple_Treeway.jpg/revision/latest/scale-to-width-down/1000?cb=20180216204534",
      "cup": "Star Cup"
    },
    {
      "id": 12,
      "name": "Grumble Volcano",
      "image": "https://static.wikia.nocookie.net/mariokart/images/0/0d/MK8-Course-Wii_GrumbleVolcano.jpg/revision/latest/scale-to-width-down/1000?cb=20150626174113",
      "cup" : "Star Cup"
    },
    {
      "id": 13,
      "name": "Dry Dry Ruins",
      "image": "https://static.wikia.nocookie.net/mariokart/images/3/31/1074350-drydry_ruinsd.jpg/revision/latest/scale-to-width-down/813?cb=20100207185525",
      "cup" : "Special Cup"
    },
    {
      "id": 14,
      "name": "Moonview Highway",
      "image": "https://i.ytimg.com/vi/rpsYtEE2390/maxresdefault.jpg",
      "cup": "Special Cup"
    },
    {
      "id": 15,
      "name": "Bowsers Castle",
      "image": "https://static.wikia.nocookie.net/mariokart/images/9/9b/Mkwiibowserscastle.jpg/revision/latest/scale-to-width-down/700?cb=20131117213646",
      "cup": "Special Cup"
    },
    {
      "id": 16,
      "name": "Rainbow Road",
      "image": "https://static.wikia.nocookie.net/mariokart/images/8/8a/Rainbow_Road_Overview_-_Mario_Kart_Wii.png/revision/latest/scale-to-width-down/1000?cb=20120317171218",
      "cup": "Special Cup"
    },
    {
      "id": 17,
      "name": "Peach Beach",
      "image": "https://static.wikia.nocookie.net/mariokart/images/1/12/1C8D13A3-5A38-4897-B39B-391D0CD9F0E8.png/revision/latest?cb=20181125024436",
      "cup" : "Shell Cup"
    },
    {
      "id": 18,
      "name": "Yoshi Falls",
      "image": "https://static.wikia.nocookie.net/mariokart/images/8/81/Yoshi_Falls_Overview_-_Mario_Kart_Wii.png/revision/latest/scale-to-width-down/832?cb=20120317174933",
      "cup": "Shell Cup"
    },
    {
      "id": 19,
      "name": "Ghost Valley 2",
      "image": "https://static.wikia.nocookie.net/mariokart/images/8/82/Ghost_Valley_2_Wii.png/revision/latest/scale-to-width-down/640?cb=20110103203518",
      "cup": "Shell Cup"
    },
    {
      "id": 20,
      "name": "Mario Raceway",
      "image": "https://static.wikia.nocookie.net/mariokart/images/0/09/028.jpg/revision/latest/scale-to-width-down/832?cb=20080731004349",
      "cup": "Shell Cup"
    },
    {
      "id": 21,
      "name": "Sherbert Land",
      "image": "https://static.wikia.nocookie.net/mariokart/images/c/cf/MK8-Course-GCN_SherbetLand.png/revision/latest/scale-to-width-down/700?cb=20150529051645",
      "cup": "Banana Cup"
    },
    {
      "id": 22,
      "name": "Shy Guy Beach",
      "image": "https://static.wikia.nocookie.net/mariokartwii/images/8/88/GBA_Shy_Guy_Beach.png/revision/latest?cb=20160319010139",
      "cup": "Banana Cup"
    },
    {
      "id": 23,
      "name": "Delfino Square",
      "image": "https://static.wikia.nocookie.net/mario/images/f/fe/Delfino_Square.PNG/revision/latest?cb=20131107194009",
      "cup": "Banana Cup"
    },
    {
      "id": 24,
      "name": "Waliugi Stadium",
      "image": "https://static.wikia.nocookie.net/mariokart/images/f/fa/031.jpg/revision/latest/scale-to-width-down/700?cb=20080731211800",
      "cup": "Banana Cup"
    },
    {
      "id": 25,
      "name": "Desert Hills",
      "image":"https://static.wikia.nocookie.net/mariokart/images/3/3b/Deserthillsmkwii.jpg/revision/latest/scale-to-width-down/640?cb=20131117214724",
      "cup": "Leaf Cup"
    },
    {
      "id": 26,
      "name": "Bowser Castle 3",
      "image":"https://static.wikia.nocookie.net/mariokart/images/f/f7/800px-GBABowserCastle3-MKWii.png/revision/latest/scale-to-width-down/800?cb=20181119181840",
      "cup": "Leaf Cup"
    },
    {
      "id": 27,
      "name": "DKs Jungle Parkway",
      "image": "https://static.wikia.nocookie.net/mariokart/images/6/60/DKJPWii.jpg/revision/latest/scale-to-width-down/588?cb=20131118205148",
      "cup": "Leaf Cup"
    },
    {
      "id": 28,
      "name": "Mario Circuit (GC)",
      "image": "https://static.wikia.nocookie.net/wii/images/7/7b/640px-GCNMarioCircuit-MKWii.png/revision/latest?cb=20140224175626",
      "cup": "Leaf Cup"
    },
    {
      "id": 29,
      "name": "Mario Circuit 3 (SNES)",
      "image": "https://static.wikia.nocookie.net/mariokartwii/images/4/44/SNES_Mario_Circuit_3_%282%29.png/revision/latest?cb=20160409175806",
      "cup": "Lightning Cup"
    },
    {
      "id": 30,
      "name": "Peach Gardens",
      "image": "https://static.wikia.nocookie.net/mariokart/images/8/83/Peach_gardens_.png/revision/latest/scale-to-width-down/250?cb=20130828214741",
      "cup" : "Lightning Cup"
    },
    {
      "id": 31,
      "name": "DK Mountain",
      "image": "https://static.wikia.nocookie.net/mariokart/images/6/66/DKMount.jpg/revision/latest/scale-to-width-down/300?cb=20100207150727",
      "cup": "Lightning Cup"
    },
    {
      "id": 32,
      "name": "Bowsers Castle (N64)",
      "image": "https://static.wikia.nocookie.net/mariokart/images/2/28/Bowserscastlen64.jpg/revision/latest/scale-to-width-down/640?cb=20131117213006",
      "cup": "Lightning Cup"
    },
    {
      "id": 33,
      "name": "Mario Kart Stadium",
      "image": "https://mario.wiki.gallery/images/3/36/MK8-Course-MarioKartStadium.png",
      "cup": "Mushroom Cup"
    },
    {
      "id": 34,
      "name": "Water Park",
      "image": "https://mario.wiki.gallery/images/thumb/4/41/MK8-Course-WaterPark.jpg/540px-MK8-Course-WaterPark.jpg",
      "cup": "Mushroom Cup"
    },
    {
      "id": 35,
      "name": "Sweet Sweet Canyon",
      "image": "https://mario.wiki.gallery/images/thumb/f/f4/MK8-Course-SweetSweetCanyon.png/540px-MK8-Course-SweetSweetCanyon.png",
      "cup": "Mushroom Cup"
    },
    {
      "id": 36,
      "name": "Thwomp Ruins",
      "image": "https://mario.wiki.gallery/images/thumb/a/ae/MK8-Course-ThwompRuins.png/540px-MK8-Course-ThwompRuins.png",
      "cup": "Mushroom Cup"
    },
    {
      "id": 37,
      "name": "Mario Circut (Wii U)",
      "image": "https://mario.wiki.gallery/images/e/eb/MK8-Course-MarioCircuit.png",
      "cup" : "Flower Cup"

    },
    {
      "id": 38,
      "name": "Toad Harbour",
      "image": "https://mario.wiki.gallery/images/thumb/0/00/MK8-Course-ToadHarbor.png/540px-MK8-Course-ToadHarbor.png",
      "cup": "Flower Cup"
    },
    {
      "id": 39,
      "name": "Twisted Mansion",
      "image": "https://mario.wiki.gallery/images/9/9a/MK8-Course-TwistedMansion.png",
      "cup" : "Flower Cup"
    },
    {
      "id": 40,
      "name": "Shy Guy Falls",
      "image": "https://mario.wiki.gallery/images/thumb/8/85/MK8-Course-ShyGuyFalls.jpg/540px-MK8-Course-ShyGuyFalls.jpg",
      "cup": "Flower Cup"
    },
    {
      "id": 41,
      "name": "Sunshine Airport",
      "image": "https://mario.wiki.gallery/images/9/91/MK8-Course-SunshineAirport.jpg",
      "cup" : "Star Cup"
    },
    {
      "id": 42,
      "name": "Dolphin Shoals",
      "image": "https://mario.wiki.gallery/images/a/a2/MK8-Course-DolphinShoals.jpg",
      "cup": "Star Cup"
    },
    {
      "id": 43,
      "name": "Electrodrome",
      "image": "https://mario.wiki.gallery/images/f/fc/MK8-Course-Electrodrome.jpg",
      "cup": "Star Cup"
    },
    {
      "id": 44,
      "name": "Mount Wario",
      "image": "https://mario.wiki.gallery/images/6/67/MK8-Course-MountWario.jpg",
      "cup": "Star Cup"
    },
    {
      "id": 45,
      "name": "Cloudtop Cruise",
      "image": "https://mario.wiki.gallery/images/c/ce/MK8-Course-CloudtopCruise.png",
      "cup": "Special Cup"
    },
    {
      "id": 46,
      "name": "Bone Dry Dunes",
      "image": "https://mario.wiki.gallery/images/d/d7/MK8-Course-Bone-DryDunes.png",
      "cup": "Special Cup"
    },
    {
      "id": 47,
      "name": "Bowsers Castle (Wii U)",
      "image": "https://mario.wiki.gallery/images/7/76/MK8-Course-Bowser%27sCastle.png",
      "cup": "Special Cup"
    },
    {
      "id": 48,
      "name": "Rainbow Road (Wii U)",
      "image": "https://mario.wiki.gallery/images/7/79/MK8-Course-RainbowRoad.png",
      "cup": "Special Cup"
    },
    {
      "id": 49,
      "name": "Mario Circuit (GBA)",
      "image": "https://images.gamebanana.com/img/ss/mods/5c8c1ce9cec2c.jpg",
      "cup": "Shell Cup"
    },
    {
      "id": 50,
      "name": "Cheep Cheep Beach",
      "image": "https://mario.wiki.gallery/images/thumb/c/c7/MK8-Course-DS_CheepCheepBeach.jpg/1600px-MK8-Course-DS_CheepCheepBeach.jpg",
      "cup": "Shell Cup"
    },
    {
      "id": 51,
      "name": "Toads Turnpike",
      "image": "https://mario.wiki.gallery/images/8/8d/MK8-Course-N64_ToadsTurnpike.jpg",
      "cup": "Shell Cup"
    },
    {
      "id": 52,
      "name": "Dry Dry Desert",
      "image": "https://mario.wiki.gallery/images/3/3f/MK8-Course-GCN_DryDryDesert.jpg",
      "cup": "Banana Cup"
    },
    {
      "id": 53,
      "name": "Donut Plains 3",
      "image": "https://mario.wiki.gallery/images/3/39/MK8-Course-SNES_DonutPlains3.jpg",
      "cup": "Banana Cup"
    },
    {
      "id": 54,
      "name": "Royal Raceway",
      "image": "https://mario.wiki.gallery/images/d/db/MK8-Course-N64_RoyalRaceway.jpg",
      "cup": "Banana Cup"
    },
    {
      "id": 55,
      "name": "DK Jungle",
      "image": "https://mario.wiki.gallery/images/6/66/DKJungle.png",
      "cup": "Banana Cup"
    },
    {
      "id": 56,
      "name": "Wario Stadium",
      "image": "https://mario.wiki.gallery/images/8/80/MK8-Course-DS_WarioStadium.png",
      "cup": "Leaf Cup"
    },
    {
      "id": 57,
      "name": "Music Park"
    },
    {
      "id": 58,
      "name": "Yoshi Valley",
      "image": "https://mario.wiki.gallery/images/4/43/MK8-Course-N64_YoshiValley.png",
      "cup": "Leaf Cup"
    },
    {
      "id": 59,
      "name": "Tick-Tock Clock",
      "image": "https://mario.wiki.gallery/images/0/04/MK8-DS-TickTockClock-pendulum1.png",
      "cup": "Lightning Cup"
    },
    {
      "id": 60,
      "name": "Piranha Plant Slide",
      "image": "https://mario.wiki.gallery/images/e/e6/MK8-Course-3DS_PiranhaPlantSlide.jpg",
      "cup": "Lightning Cup"
    },
    {
      "id": 61,
      "name": "Rainbow Road (N64)",
      "image":"https://mario.wiki.gallery/images/9/9a/MK8-Course-N64_RainbowRoad.jpg",
      "cup":"Lightning Cup"
    },
    {
      "id": 62,
      "name": "Yoshi Circuit",
      "image": "https://mario.wiki.gallery/images/thumb/c/c9/MK8-DLC-Course-GCN_YoshiCircuit.jpg/1600px-MK8-DLC-Course-GCN_YoshiCircuit.jpg",
      "cup":"Egg Cup"

    },
    {
      "id": 63,
      "name": "Excitebike Arena",
      "image": "https://mario.wiki.gallery/images/1/10/MK8-DLC-Course-ExcitebikeArena.jpg",
      "cup": "Egg Cup"
    },
    {
      "id": 64,
      "name": "Dragon Driftway",
      "image": "https://mario.wiki.gallery/images/thumb/3/3f/Dragon_Driftway_MK8_overview.png/540px-Dragon_Driftway_MK8_overview.png",
      "cup": "Egg Cup"
    },
    {
      "id": 65,
      "name": "Mute City",
      "image": "https://mario.wiki.gallery/images/1/14/MK8-DLC-Course-MuteCity-section.jpg",
      "cup": "Egg Cup"
    },
    {
      "id": 66,
      "name": "Rainbow Road (SNES)",
      "image": "https://mario.wiki.gallery/images/2/2a/Mk8-DLC-Course-SNES_RainbowRoad.jpg",
      "cup": "Triforce Cup"
    },
    {
      "id": 67,
      "name": "Ice Ice Outpost",
      "image": "https://mario.wiki.gallery/images/thumb/b/bc/MK8-DLC-Course-IceIceOutpost.jpg/540px-MK8-DLC-Course-IceIceOutpost.jpg",
      "cup": "Triforce Cup"
    },
    {
      "id": 68,
      "name": "Hyrule Circuit",
      "image": "https://mario.wiki.gallery/images/f/f8/MK8-DLC-Course-HyruleCircuit.jpg",
      "cup": "Triforce Cup"
    },
    {
      "id": 69,
      "name": "Koopa City",
      "image": "https://mario.wiki.gallery/images/e/ed/NeoBowserCity.png",
      "cup" : "Bell Cup"
    },
    {
      "id": 70,
      "name": "Ribbon Road",
      "image": "https://mario.wiki.gallery/images/thumb/c/cd/MK8-DLC-Course-GBA_RibbonRoad.jpg/1600px-MK8-DLC-Course-GBA_RibbonRoad.jpg",
      "cup": "Bell Cup"
    },
    {
      "id": 71,
      "name": "Super Bell Subway",
      "image":"https://mario.wiki.gallery/images/thumb/7/7b/MK8-DLC-Course-SuperBellSubway.jpg/1600px-MK8-DLC-Course-SuperBellSubway.jpg",
      "cup": "Bell Cup"
    },
    {
      "id": 72,
      "name": "Big Blue",
      "image": "https://mario.wiki.gallery/images/thumb/e/e0/MK8-DLC-Course-BigBlue-overview.jpg/1600px-MK8-DLC-Course-BigBlue-overview.jpg",
      "cup": "Bell Cup"
    },
    {
      "id": 73,
      "name": "Baby Park",
      "image": "https://mario.wiki.gallery/images/thumb/6/61/MK8-DLC-Course-GCN_BabyPark.jpg/1600px-MK8-DLC-Course-GCN_BabyPark.jpg",
      "cup": "Crossing Cup"
    },
    {
      "id": 74,
      "name": "Cheese Land",
      "image": "https://mario.wiki.gallery/images/thumb/3/39/MK8-DLC-Course-GBA_CheeseLand.jpg/1600px-MK8-DLC-Course-GBA_CheeseLand.jpg",
      "cup":"Crossing Cup"
    },
    {
      "id": 75,
      "name": "Wild Woods",
      "image": "https://mario.wiki.gallery/images/thumb/e/e8/MK8-DLC-Course-WildWoods.jpg/1600px-MK8-DLC-Course-WildWoods.jpg",
      "cup": "Crossing Cup"
    },
    {
      "id": 76,
      "name": "Animal Crossing",
      "image": "https://mario.wiki.gallery/images/thumb/e/e2/Animal_Crossing_preview_MK8_art.png/1600px-Animal_Crossing_preview_MK8_art.png",
      "cup": "Crossing Cup"
    },
    {
      "id": 77,
      "name": "Melody Motorway",
      "image": "https://mario.wiki.gallery/images/2/23/MusicPark.png",
      "cup": "Leaf Cup"
    }
  ]



exports.getResults = async (req, res) => {
    try {
        const results = await query(`SELECT * FROM RACES inner join TRACKS on races.trackID = tracks.id ORDER BY tracks.name;`)
        res.json(results)
    } catch(err) {
        res.json(err)
    }
}

exports.getTracks = async(req, res) => {
    try {
        const tracks = await query(`SELECT * FROM tracks`)
        
        res.json(tracks)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

exports.getATrack = async(req, res) => {

    try {
        const track = await query(`SELECT * FROM tracks where id = ${req.params.trackID}`)

        const races = await query(`
        select * from tracks
        INNER JOIN races 
        INNER JOIN competition
        ON tracks.id = races.trackID
        AND races.compID = competition.compID
        WHERE trackID = ${req.params.trackID}
        ORDER BY competition.date;`)

        res.render('showTrack', { races, track: track[0] })
    } catch(err) {
        res.status(500).send(err.message)
    }

}


// exports.filterTracks = async(req, res) => {
//   try {
//     console.log(req.body)
//     const allTracks = await query(`SELECT * FROM tracks`)
//     res.render('tracks', { tracks })

//   } catch(err) {
//     res.status(500).send(err.message)

//   }




// }


exports.getAcompetition = async(req, res) => {
    try {
        const races = await query(`
        SELECT 
            races.compID as comp,
            races.milesPos, 
            races.jamesPos, 
            races.id, 
            trackID,
            competition.jamesScore,
            competition.milesScore,
            competition.date,
            tracks.name
            FROM races

        INNER JOIN competition 
        INNER JOIN tracks
        ON races.compID = competition.compID
        AND races.trackID = tracks.id
        WHERE races.compID = ${req.params.compID}
        `)

        res.render('showComp', { races })
    } catch (err) {
        console.log(err.message)
        res.status(err.status || 500).send(err.message || 'Unexpected Error')

    }
}



exports.getWins = async(req, res) => {
    try {
        const wins = await query(`
        SELECT tracks.name, tracks.id, races.milesPos, races.jamesPos
        FROM tracks
        INNER JOIN races
        ON tracks.id = races.trackID
        WHERE ${req.body.person} = 1
        `)

        res.json(wins)
    } catch(err) {
        res.status(err.status || 500).send(err.message || 'Unexpected Error')
    }
}


exports.getProfile = async(req, res) => {
    const person = req.params.name + 'Pos'
    try {
        const races = await query(`SELECT * FROM races`)

        // const wins = await query(`
        //   SELECT * FROM races WHERE ${person} = 1
        // `)
        // const podiums = await query(`
        //   SELECT * FROM races WHERE ${person} < 4
        // `)

        const results = await query(`
          SELECT tracks.id, tracks.name, GROUP_CONCAT(races.${person}) AS results
          from tracks 
          INNER JOIN races ON races.trackID = tracks.id 
          GROUP BY races.trackID;
        `)





        const comps = await query(`SELECT * FROM competition`)

        res.render('profile', {results, races, player: req.params.name, comps })
    } catch(err) {
        res.status(err.status || 500).send(err.message || 'Unexpected Error')
    } 
}


async function updateBowser(){
    try {
        await query(`
            UPDATE races
            SET
                trackID = 47
            WHERE
                id = 431
        `)
    } catch(err) {
        console.log(err)
    }

}



async function updateImages(track){
  try {
    await query(`
      UPDATE tracks
      SET 
        image = '${track.id}.png'
      WHERE id = ${track.id}
    `)
  } catch(err) {
    console.log(err)
  }
}

// tracksList.forEach(track => {
//   updateImages(track)
// })

// updateBowser()


// connection.query(`SELECT milesPos AS Miles, jamesPos AS James, tracks.name AS TrackName, competition.date
// FROM races
// INNER JOIN tracks ON tracks.id = trackID
// INNER JOIN competition ON races.compID = competition.compID
// WHERE tracks.name LIKE '%rainbow%';`, (err, rows) => {
//     if (err) throw err

//     console.log(rows)
// })


// const event = [
//   {
//     "compID": 24,
//     "trackID": 40,
//     "jamesPos": 1,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 51,
//     "jamesPos": 1,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 60,
//     "jamesPos": 4,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 48,
//     "jamesPos": 1,
//     "milesPos": 5
//   },
//   {
//     "compID": 24,
//     "trackID": 65,
//     "jamesPos": 1,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 58,
//     "jamesPos": 1,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 59,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 22,
//     "jamesPos": 1,
//     "milesPos": 5
//   },
//   {
//     "compID": 24,
//     "trackID": 68,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 77,
//     "jamesPos": 1,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 55,
//     "jamesPos": 3,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 53,
//     "jamesPos": 1,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 43,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 56,
//     "jamesPos": 1,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 46,
//     "jamesPos": 2,
//     "milesPos": 5
//   },
//   {
//     "compID": 24,
//     "trackID": 69,
//     "jamesPos": 6,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 72,
//     "jamesPos": 1,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 54,
//     "jamesPos": 3,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 12,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 45,
//     "jamesPos": 3,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 49,
//     "jamesPos": 2,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 37,
//     "jamesPos": 1,
//     "milesPos": 4
//   },
//   {
//     "compID": 24,
//     "trackID": 47,
//     "jamesPos": 3,
//     "milesPos": 4
//   },
//   {
//     "compID": 24,
//     "trackID": 34,
//     "jamesPos": 1,
//     "milesPos": 4
//   },
//   {
//     "compID": 24,
//     "trackID": 64,
//     "jamesPos": 4,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 35,
//     "jamesPos": 4,
//     "milesPos": 3
//   },
//   {
//     "compID": 24,
//     "trackID": 36,
//     "jamesPos": 1,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": 8,
//     "jamesPos": 4,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 44,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 70,
//     "jamesPos": 2,
//     "milesPos": 1
//   },
//   {
//     "compID": 24,
//     "trackID": 74,
//     "jamesPos": 4,
//     "milesPos": 2
//   },
//   {
//     "compID": 24,
//     "trackID": null,
//     "jamesPos": 1,
//     "milesPos": 6
//   }
//  ]

// function addToComp(comp){
//     comp.forEach(race => {
//         conn.query(`
//             INSERT INTO races (compID, trackID, milesPos, jamesPos)
//             VALUES (${race.compID}, ${race.trackID}, ${race.milesPos}, ${race.jamesPos})
//             `, (err, result) => {

//                 if (err) throw err

//                 console.log(result)
//             })
//     })
// }

// addToComp(event)






//? GET ALL RACES IN A SPECIFIC COMPETITION
// SELECT milesPos AS Miles, jamesPos AS James, tracks.name AS TrackName, competition.date
// FROM races
// INNER JOIN tracks ON tracks.id = trackID
// INNER JOIN competition ON races.compID = competition.compID
// WHERE competition.date = '21/04/15'

