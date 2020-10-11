type PizzaProps = {
  question: string,
  id: number,
  score: number,
}

const Pizza: PizzaProps[] = [{
  id: 1,
  question: 'Sou carnivoro. Deixo com o chefe!',
  score: 10,
}, {
  id: 2,
  question: 'Sou vegetariano. Deixo com o chefe!',
  score: 10,
}, {
  id: 3,
  question: 'Sou vegano. Deixo com o chefe!',
  score: 10,
}, {
  id: 4,
  question: 'Estou sozinho! Me ve 4 pedacos.',
  score: 4,
}, {
  id: 5,
  question: 'E e mais 1. Manda 8 pra gente!',
  score: 8,
}, {
  id: 6,
  question: 'Só tem parca aqui. Manda 12 pedacos.',
  score: 12,
}];

export default Pizza;