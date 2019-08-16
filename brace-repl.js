function validBraces(braces) {
    const braceArr = braces.split('');
    let outcome;
    if (braceArr[0] === (')' || ']' || '}')) {
        outcome = false; return outcome;
    } else if (braceArr[braceArr.length - 1] === ('(' || '[' || '{')) {
        outcome = false; return outcome;
    }
    const BraceObj = {};
    for (let i = 0; i < braceArr.length; i++) {
      if (braceArr[i] in BraceObj) {
        BraceObj[braceArr[i]]++;
      } else {
        BraceObj[braceArr[i]] = 1;
      }
    }
    if ((BraceObj['('] !== BraceObj[')']) || 
    (BraceObj['['] !== BraceObj[']']) || 
    (BraceObj['{'] !== BraceObj['}'])) {
      outcome = false; return outcome;
    }
    for (let i = 0; i < braceArr.length; i++) {
      switch (braceArr[i]) {
        case '(':
          if (braceArr[i+1] === ')') {
              outcome = true;
              break;
          } else if (braceArr[i+1] === (']' || '}')) {
              outcome = false; return outcome;
          } else if (braceArr[i+1] !== ')') {
              for (let j = braceArr[i+2]; j < braceArr.length; j++) {
                if ((braceArr[i+1] === '[') && (braceArr[j] === ')')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '[') && (braceArr[j] === ']')) {
                    outcome = true;
                    break;
                } else if ((braceArr[i+1] === '{') && (braceArr[j] === ')')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '{') && (braceArr[j] === '}')) {
                    outcome = true;
                    break;
                }
              }
          } else if ((braceArr[i+2] === ')') && (braceArr[i+1] !== '(')) {
              outcome = false;
              return outcome;
          } else if (braceArr[i+1] !== ')') {
              for (let j = braceArr[i+3]; j < braceArr.lenth; j += 2) {
                if (braceArr[j] === ')') {
                  outcome = true;
                  break;
                }
              }
              break;
          } else if (i === (braceArr.length - 1) && braceArr[i] === ')') {
              break;
          } else {outcome = false; return outcome;}
        case '[':
          if (braceArr[i+1] === ']') {
              outcome = true;
              break;
          } else if (braceArr[i+1] === (')' || '}')) {
              outcome = false; return outcome;
          } else if (braceArr[i+1] !== ']') {
              for (let j = braceArr[i+2]; j < braceArr.length; j++) {
                if ((braceArr[i+1] === '(') && (braceArr[j] === ']')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '(') && (braceArr[j] === ')')) {
                    outcome = true;
                    break;
                } else if ((braceArr[i+1] === '{') && (braceArr[j] === ']')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '{') && (braceArr[j] === '}')) {
                    outcome = true;
                    break;
                }
              }
          } else if ((braceArr[i+2] === ']') && (braceArr[i+1] !== '[')) {
              outcome = false; return outcome;
          } else if (braceArr[i+1] !== ']') {
              for (let j = braceArr[i+3]; j < braceArr.lenth; j += 2) {
                if (braceArr[j] === ']') {
                  outcome = true;
                  break;
                }
              }
              break;
          } else if (i === (braceArr.length - 1) && braceArr[i] === ']') {
              break;
          } else {outcome = false; return outcome;}
        case '{':
          if (braceArr[i+1] === '}') {
              outcome = true;
              break;
          } else if (braceArr[i+1] === (')' || ']')) {
              outcome = false; return outcome;
          } else if (braceArr[i+1] !== '}') {
              for (let j = braceArr[i+2]; j < braceArr.length; j++) {
                if ((braceArr[i+1] === '(') && (braceArr[j] === '}')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '(') && (braceArr[j] === ')')) {
                    outcome = true;
                    break;
                } else if ((braceArr[i+1] === '[') && (braceArr[j] === '}')) {
                    outcome = false; return outcome;
                } else if ((braceArr[i+1] === '[') && (braceArr[j] === ']')) {
                    outcome = true;
                    break;
                }
              }
          } else if ((braceArr[i+2] === '}') && (braceArr[i+1] !== '{')) {
              outcome = false; return outcome;
          } else if (braceArr[i+1] !== '}') {
              for (let j = braceArr[i+3]; j < braceArr.lenth; j += 2) {
                if (braceArr[j] === '}') {
                  outcome = true;
                  break;
                }
              }
              break;
          } else if (i === (braceArr.length - 1) && braceArr[i] === '}') {
              break;
          } else {outcome = false; return outcome;}
      }
    }
    return outcome;
  }