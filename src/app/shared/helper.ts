class Helper {
   private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   private charactersLength;
   constructor() {
      this.charactersLength = this.characters.length;
   }

   public generateRandomID(length: number = 10): string {
      let result = '';
      for (let i = 0; i < length; i++) {
         result += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
      }
      return result;
   }
}

export const helper = new Helper();
