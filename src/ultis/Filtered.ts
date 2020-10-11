import Pizza from '../mocks/index';

/* index 0 */
export const filteredIndex = Pizza.filter(item => item.id);

export const questionBeef = filteredIndex[0].question;
export const scoreBeef = filteredIndex[0].score;
export const questionVegetarian = filteredIndex[1].question;
export const scoreVegetarian = filteredIndex[1].score;
export const questionVegan = filteredIndex[2].question;
export const scoreVegan = filteredIndex[2].score;
export const question4pieces = filteredIndex[3].question;
export const score4Pieces = filteredIndex[3].score;
export const question8pieces = filteredIndex[4].question;
export const score8Pieces = filteredIndex[4].score;
export const question12pieces = filteredIndex[5].question;
export const score12Pieces = filteredIndex[5].score;