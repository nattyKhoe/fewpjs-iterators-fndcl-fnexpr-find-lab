function isWin (KCC) {
  return KCC.result == 'W';
};
function superbowlWin (record){
  if ((record.find(isWin)) != null) {
    return record.find(isWin).year;
  } else {
    return record.find(isWin);
  }
};
