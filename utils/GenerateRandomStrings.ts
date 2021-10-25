class GenerateRandomString {
  randomNumericalString(lengthstring: number) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthstring; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomSpecialString(lengthString: number) {
    let result = '';
    const characters = '~!@#$%^&*()_+-={}:"|<>?[];,./';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomLowercaseLetterString(lengthString: number) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomUppercaseLetterString(lengthString: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomLowercaseDiacriticalString(lengthString: number) {
    let result = '';
    const characters = 'eóasłżźćń';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomUppercaseDiacriticalString(lengthString: number) {
    let result = '';
    const characters = 'ĘÓĄŚŁŻŹĆŃ';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  randomMixString(lengthString: number) {
    let result = '';
    let array;
    outer: for (let i = 0; result.length != lengthString; i++) {
      array = [
        this.randomNumericalString(1),
        this.randomSpecialString(1),
        this.randomLowercaseLetterString(1),
        this.randomUppercaseLetterString(1),
        this.randomLowercaseDiacriticalString(1),
        this.randomUppercaseDiacriticalString(1),
      ];
      for (let i = 0; i < 4; i++) {
        if (result.length == lengthString) {
          return result;
          break outer;
        } else {
          result += array[i];
        }
      }
    }
  }
}
