function isValidTimes({
  startTime, check1Time, check2Time,
  check3Time, hole9Time, check4Time,
  check5Time, check6Time, endTime,
}, errorTitle) {
  const times = [
    startTime,
    check1Time,
    check2Time,
    check3Time,
    hole9Time,
    check4Time,
    check5Time,
    check6Time,
    endTime,
  ].filter(time => time != null && time !== '')
    .map(time => (typeof (time) === 'string' ? new Date(time) : time));

  if (times.length <= 1) {
    return true;
  }

  /* eslint-disable no-plusplus */
  for (let i = 0; i < times.length - 1; i++) {
    if (times[i].getTime() > times[i + 1].getTime()) {
      toastr.error('Times are not in order', errorTitle || 'Invalid Form');
      return false;
    }
  }

  return true;
}

function isValidCheckHoles({
  check1Hole, check2Hole, check3Hole,
  check4Hole, check5Hole, check6Hole,
}, errorTitle) {
  const holes = [
    check1Hole,
    check2Hole,
    check3Hole,
    check4Hole,
    check5Hole,
    check6Hole,
  ].filter(hole => hole != null && hole !== '')
    .map(hole => parseInt(hole, 10));

  if (holes.length <= 1) {
    return true;
  }

  /* eslint-disable no-plusplus */
  for (let i = 0; i < holes.length - 1; i++) {
    if (holes[i] > holes[i + 1]) {
      toastr.error('Checks are not in order', errorTitle || 'Invalid Form');
      return false;
    }
  }

  return true;
}

export default function isValidForm(form, errorTitle) {
  return isValidTimes(form, errorTitle) && isValidCheckHoles(form, errorTitle);
}
