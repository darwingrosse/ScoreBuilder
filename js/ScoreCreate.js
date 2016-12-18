var mood = [
'Accepted',
'Accomplished',
'Aggravated',
'Alone',
'Amused',
'Angry',
'Annoyed',
'Anxious',
'Apathetic',
'Apologetic',
'Ashamed',
'Awake',
'Bewildered',
'Bitchy',
'Bittersweet',
'Blah',
'Blank',
'Blissful',
'Bored',
'Bouncy',
'Brooding',
'Calm',
'Cautious',
'Chaotic',
'Cheerful',
'Chilled',
'Chipper',
'Cold',
'Complacent',
'Confused',
'Content',
'Cranky',
'Crappy',
'Crazy',
'Crushed',
'Curious',
'Cynical',
'Dark',
'Defensive',
'Delusional',
'Demented',
'Depressed',
'Determined',
'Devious',
'Dirty',
'Disappointed',
'Discontent',
'Ditzy',
'Dorky',
'Drained',
'Drunk',
'Ecstatic',
'Energetic',
'Enraged',
'Enthralled',
'Envious',
'Exanimate',
'Excited',
'Exhausted',
'Fearful',
'Flirty',
'Forgetful',
'Frustrated',
'Full',
'Geeky',
'Giddy',
'Giggly',
'Gloomy',
'Good',
'Grateful',
'Groggy',
'Grumpy',
'Guilty',
'Happy',
'Heartbroken',
'High',
'Hopeful',
'Hot',
'Hungry',
'Hyper',
'Impressed',
'Indescribable',
'Indifferent',
'Infuriated',
'Irate',
'Irritated',
'Jealous',
'Joyful',
'Jubilant',
'Lazy',
'Lethargic',
'Listless',
'Lonely',
'Loved',
'Mad',
'Melancholy',
'Mellow',
'Mischievous',
'Moody',
'Morose',
'Naughty',
'Nerdy',
'Numb',
'Okay',
'Optimistic',
'Peaceful',
'Pessimistic',
'Pissed off',
'Pleased',
'Predatory',
'Quixotic',
'Rapturous',
'Recumbent',
'Refreshed',
'Rejected',
'Rejuvenated',
'Relaxed',
'Relieved',
'Restless',
'Rushed',
'Sad',
'Satisfied',
'Shocked',
'Sick',
'Silly',
'Sleepy',
'Smart',
'Stressed',
'Surprised',
'Sympathetic',
'Thankful',
'Tired',
'Touched',
'Uncomfortable',
'Weird'
]

var source = [
'Voice sounds',
'Guitar sounds',
'Drone sounds',
'Drum loops',
'Nature sounds',
'Piano sounds',
'Speech',
'Noise',
'None',
'None']

var filter = [
'Bandpass',
'Lowpass',
'Hipass',
'Notch',
'None',
'Chords',
'Sounds']

var modulation = [
'Audio',
'Pings',
'Slow lfo',
'Sweep',
'None',
'Chords',
'Stepped']

var slope = [
'Envelope',
'Looped',
'Slow',
'Fast',
'None']

var resonance = [
'Off',
'Cusp',
'Warm',
'Extreme'
]

var chords = [
'High',
'Mid',
'Low',
'Odd',
'Major',
'Slow',
'Fast',
'Smooth',
'Coarse',
'None',
'None']

var sequence = [
'Random',
'2',
'3',
'4',
'5',
'6',
'8',
'16',
'Audio Clocked',
'Chord Clocked',
'None',
'None']

var score = {}


function randomChoice(a) {
  var index = Math.floor(Math.random() * a.length)
  return a[index]
}


function randomName(l = 6) {
  const vowels = ['a','e','i','o','u','']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']

  var outVal = '';
  while (outVal.length < l) {
    outVal += randomChoice(consonants)
    outVal += randomChoice(vowels)
  }

  outVal = outVal[0].toUpperCase() + outVal.slice(1)
  return outVal;
}


function randomShape(l = 6) {
	const vowels = ['_', '_']
	const consonants = ['|','_','_','_','_','_','.','[',']','|','_','_','_','_','_','.','_','_','|','_','_','_','_','_','.','_','_','|','_','_','_','_','_','.','[',']','|','_','_','_','_','_','.','_','_','|','_','_','_','_','_','.','_','_','|','_','_','_','_','_','.','[',']','|','_','_','_','_','_','.','_','_','|','_','_','_','_','_','.','_','_']

  var outVal = '';
  while (outVal.length < l) {
    outVal += randomChoice(consonants)
    outVal += randomChoice(vowels)
  }
  return outVal;
}


var genLines = function (h, w) {
  outVal = []

  for (var i=0; i<h; i++) {
    outVal.push(randomShape(w))
  }
  return outVal
}


var genScore = function () {
  let trackcount = Math.floor(Math.random() * 7) + 5

  score.name = randomName(8)
  score.tracks = []

  for (var i=0; i<trackcount; i++) {
    let lineheight = Math.floor(Math.random() * 11) + 1
    let linewidth = Math.floor(Math.random() * 55) + 8

    score.tracks.push({
      name: randomName(6),
      mood: randomChoice(mood) + ', ' + randomChoice(mood),
      source: randomChoice(source),
      filter: randomChoice(filter),
      modulation: randomChoice(modulation),
      slope: randomChoice(slope),
      resonance: randomChoice(resonance),
      chords: randomChoice(chords),
      sequence: randomChoice(sequence),
      lines: genLines(lineheight, linewidth)
    })
  }

  return score
}

module.exports = genScore
