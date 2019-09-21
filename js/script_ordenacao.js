/* Fonte: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value */

/* DECLARACAO DO ARRAY DE OBJETOS */
var competidores = [
    { nome: 'Lazslo', pontuacao: 2000 },
    { nome: 'Pig',    pontuacao: 1000 },
    { nome: 'Pirate', pontuacao: 1500 }
];
/* DECLARACAO DA FUNCAO DE COMPARACAO */
function compare( a, b ) {
  if ( a.pontuacao < b.pontuacao ){
    return -1;
  }
  if ( a.pontuacao > b.pontuacao ){
    return 1;
  }
  return 0;
}
/* CHAMADA DA FUNCAO SORT() */
competidores.sort( compare );