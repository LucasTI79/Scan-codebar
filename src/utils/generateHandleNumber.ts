export const handleNumber = (digit = 9) => {
  let isbn = ''
  for(let i = 0; i <= digit - 1; i++){
    isbn += String(Math.floor(Math.random() * 10))
  }
  return `978${isbn}`;
}