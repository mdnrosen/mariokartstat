const { getResults } = require("./controllers/raceController")

exports.getWins = (races, person) => {
    const wins = races.filter(race => race[person] === 1).length
    const perc = Math.round((wins/races.length) * 100)
    return `${wins} (${perc}%)`
} 

function getEdgeWins (races, person) {
    return races.filter(race => race[person] === 1).length
}

exports.getSecond = (races, person) => {

    const sec = races.filter(race => race[person] === 2).length
    const perc = Math.round((sec/races.length) * 100)

    return `${sec} (${perc}%)`
} 
exports.getThird = (races, person) => {

    const third = races.filter(race => race[person] === 3).length
    const perc = Math.round((third/races.length) * 100)

    return `${third} (${perc}%)`
} 

exports.getPositionsTotal = (races, person, position) => {
    return races.filter(race => race[person] === position)
}

exports.getPositionTotals = (races, person) => {

}



exports.getPlayerData = (name) => {
    if (name === 'james') {
        return {
            character: 'Link',
            bike: 'Superbike',
            image: '/dist/images/link.png'
        }
    } else {
        return {
            character: 'Rosalina',
            bike: 'Superbike',
            image: '/dist/images/rosalina.jpg'
        }
    }
}

exports.getMid = (races, person) => {

    const mid = races.filter(race => race[person] < 7 && race[person] > 3).length
    const perc = Math.round((mid/races.length) * 100)

    return `${mid} (${perc}%)`
} 

function getEdgeMid (races, person) {
    return races.filter(race => race[person] < 7 && race[person] > 3).length

}

exports.getPodiums = (races, person) => {

    const pods = races.filter(race => race[person] <= 3).length
    const perc = Math.round((pods/races.length) * 100)

    return `${pods} (${perc}%)`
} 

function getEdgePods (races, person) {
    return races.filter(race => race[person] <= 3).length

}


exports.getBottomHalf = (races, person) => {

    const bottom = races.filter(race => race[person] >= 7).length
    const perc = Math.round((bottom/races.length) * 100)

    return `${bottom} (${perc}%)`
}

function getBottom (races, person) {
    const bottoms = races.filter(race => race[person] >= 7).length
    const perc = (bottoms/races.length)
    return perc
}


// exports.filterTracks = (val) => {
//     console.log(val)
// }

exports.getDominance = (races) => {
   let miles
   let james

   let players = [
       {key: 'milesPos'},
       {key: 'jamesPos'}
   ]

   const scores = players.map(player => {
       const wins = getEdgeWins(races, player.key)
       const pods = getEdgePods(races, player.key)
       const mid = getEdgeMid(races, player.key)

      return (((wins * 1) + ((pods - wins) * 0.5) + (mid * 0.25)) / races.length) * 100

       
    

 

   })

   const diff = Math.abs(scores[0] - scores[1])
   if (scores[0] > scores[1]) {
       return 50 - diff
   } else if (scores[0] < scores[1]) {
       return 50 + diff
   } else {
       return 50
   }
   

 
    // GET WINS / PODIUMS & BOTTOM HALFS FOR BOTH RACERS - PER TRACK

}


exports.getForm = (races, person) => {
    const data = races.map(race => formatPos(race[person]))
    return data.join(' • ')
}



function formatPos(pos){
    if (pos === 1) return `${pos}st`
    if (pos === 2) return `${pos}nd`
    if (pos === 3) return `${pos}rd`
    return `${pos}th`
}

exports.formatPos = (pos) => {
    if (pos === 1) return `${pos}st`
    if (pos === 2) return `${pos}nd`
    if (pos === 3) return `${pos}rd`
    return `${pos}th`
}



exports.getAverage = (races, person) => {
    const positions = races.map(race => race[person])
    const average = positions.reduce((a,b) => a + b, 0) / positions.length;

    return formatPos(Math.round(average))

}


exports.getBest = (races, person) => {
    const thing = groupBy(races, 'milesPos')
}


exports.getWinless = (results) => {
    let winless = []
    results.forEach(race => {
        const racesArr = race.results.split(',')
        if (racesArr.length >= 4) {
            const wins = race.results.split(',').filter(result => result == 1)
            if (!wins.length) winless.push(race)
        }
    })
    return !winless.length ? '-' : winless
}


exports.getWinningest = (results) => {
    results.forEach(race => {
        race['wins'] = race.results.split(',').filter(result => result == 1).length
    })
    const maxWins = Math.max.apply(Math, results.map(track => track.wins))
    return results.filter(track => track.wins === maxWins)

}


function scoreMaths(results){
    let total = 0
    results.forEach(result => {
        parseInt(result)
        if (result === 1) total+= 1
        if (result < 4) total+= 0.5
        if (result < 7) total+= 0.25
    })
    return total
}

function getTrackScore(tracks) {
    tracks.forEach(track => {
        const resultsArr = track.results.split(',')
        const score = scoreMaths(resultsArr)
        track['score'] = score / resultsArr.length
    })
    return tracks
}
function calcBest(tracks){
    return tracks.reduce(function(prev, current) {
        return (prev.score > current.score) ? prev : current
    }) 
}
function calcWorst(tracks){
    return tracks.reduce(function(prev, current) {
        return (prev.score < current.score) ? prev : current
    }) 
}





exports.getBest = (results) => {
    const tracks = getTrackScore(results)
    return calcBest(tracks)
}
exports.getWorst = (results) => {
    const tracks = getTrackScore(results)
    return calcWorst(tracks)
}


function groupBy(arr, prop) {
    return arr.reduce((acc, cv) => {
        if (!acc[cv[prop]]) { acc[cv[prop]] = []}
        acc[cv[prop]].push(cv)
        return acc
    }, [])
}


exports.getBG = (pos) => {
    switch (pos) {
        case 1:
            return 'gold'
        case 2:
            return 'silver'
        case 3:
            return 'bronze'
        case 4:
            return 'mid'
        case 5:
            return 'mid'
        case 6:
            return 'mid'
        default:
            return 'bottom'
    }
}



exports.formatPos = (pos) => {
    if (pos === 1) return `${pos}st`
    if (pos === 2) return `${pos}nd`
    if (pos === 3) return `${pos}rd`

    return `${pos}th`
}



exports.totalPoints = (comps, key) => {
    return comps.reduce((a, b) => a + (b[key] || 0), 0);
}



var result = (item) => item === 'good'

function result(item){
    return item === 'good'
}

result('good') // returns TRUE
result('bad') // returns FALSE
result(['my', 'array', 'of', 'stuff']) // returns FALSE


