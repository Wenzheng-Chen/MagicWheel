class Helper {
   private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   private charactersLength;
   constructor() {
      this.charactersLength = this.characters.length;
   }

   /**
    * Generates a random ID string of the specified length.
    *
    * This function generates a random string composed of alphanumeric characters
    * (both uppercase and lowercase letters and digits). The length of the generated
    * string is determined by the input parameter.
    *
    * Example usage:
    *   generateRandomID(10) might return "A1b2C3d4E5"
    *   generateRandomID(5) might return "xYz12"
    *   generateRandomID() will default to 10 and might return "F6g7H8i9J0"
    *
    * @param length[in] The desired length of the generated ID. Defaults to 10 if not specified.
    * @return A randomly generated string of the specified length.
    */
   public generateRandomID(length: number = 10): string {
      let result = '';
      for (let i = 0; i < length; i++) {
         result += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
      }
      return result;
   }

   /**
    * Helper function used to create a string with a desired length by padding
    * it with preceding zeroes, if necessary.
    *   pad(1, 5) will return "00001".
    *   pad("100", 1) will return "100".
    *   pad(-1, 5) will return "-00001".
    *   pad("-10", 4) will return "-0010".
    *
    * @param value[in] value that will be padded, if necessary.
    * @param maxLen[in] length that will be used to pad zeroes, if necessary.
    * @return string padded to appropriate length.
    */
   public pad(value: string | number, maxLen: number): string {
      const string = value.toString(),
         negative = string.indexOf('-') === 0,
         length = negative ? string.length - 1 : string.length;
      return length < maxLen ? this.pad(negative ? '-0' + string.slice(1) : '0' + string, maxLen) : string;
   }
}

export const helper = new Helper();
