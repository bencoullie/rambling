import TreeView from 'react-typist'

const typeistDelayGenerator = function(
  mean: number,
  std: number,
  { character, defDelayGenerator }: TreeView.CurrentTextProps
) {
  switch (character) {
    case '.':
    case '?':
    case '!':
      return Number(Math.floor(Math.random() * 12) + 5) * 100
    case ',':
      return Number(Math.floor(Math.random() * 6) + 4) * 100
    case '—':
      return Number(Math.floor(Math.random() * 8) + 5) * 100
    case '…':
      return Number(Math.floor(Math.random() * 15) + 5) * 100
  }

  return Number(defDelayGenerator(mean, std))
}

export { typeistDelayGenerator }
