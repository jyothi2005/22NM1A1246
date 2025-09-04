export function generateshortcode(lenght=6) {
  const chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result='';
  for( leti=0;i<lenght;i++){
    result +=chars[Math,floor(Math.random())];
  }
  return result;
}