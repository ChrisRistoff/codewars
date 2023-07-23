function getAlbumProperties(obj) {
  const result=[]
  const keys = Object.keys(obj)

  for (let i=0;i<keys.length;i++) {
    result.push(obj[keys[i]])
  }

  return result
  // can just do
  // return Object.keys(obj)
}


const album = {
  title: '21',
  artist: 'Adele',
  year: 2011,
  sales: 31e6,
}

console.log(getAlbumProperties(album))
