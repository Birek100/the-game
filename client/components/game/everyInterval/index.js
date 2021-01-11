function everyInterval(frame, n) {
  if ((frame / n) % 1 === 0) {
    return true;
  }
  return false;
}

export default everyInterval;
