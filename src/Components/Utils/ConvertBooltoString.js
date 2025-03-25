function ConvertBooltoString (props){
  const { result } = props;
  let temp = result.map(bool => bool? '1' : "0").join('');
  return parseInt(temp,2);
}
export default ConvertBooltoString;