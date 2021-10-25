class GenerateRandomData {
  randomZIP() {
    const firstPartZIP = Math.floor(Math.random() * 90) + 10;
    const secondPartZIP = Math.floor(Math.random() * 900) + 100;
    const result = firstPartZIP + '-' + secondPartZIP;
    return result;
  }

  randomPhone() {
    const result = Math.floor(Math.random() * 1000000000).toString();
    return result;
  }

  randomNIP() {
    const result = Math.floor(Math.random() * 10000000000).toString();
    return result;
  }

  randomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let result = '';
    let drawChar;
    for (let i = 0; i < 10; i++) {
      drawChar = characters.charAt(
        Math.round(characters.length * Math.random())
      );
      result = result + drawChar;
    }
    drawChar = '';
    result = result + '@';
    for (let j = 0; j < 8; j++) {
      drawChar = characters.charAt(
        Math.round(characters.length * Math.random())
      );
      result = result + drawChar;
    }
    result = result + '.com';
    return result;
  }
}

export default new GenerateRandomData();
