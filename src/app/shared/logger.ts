import { helper } from './helper';

export enum LogLevel {
   ERROR = 0,
   WARN = 1,
   INFO = 2,
   DEBUG = 3,
   TRACE = 4
}

export class Logger {
   public static readonly LEVEL_ASC = ['E', 'W', 'I', 'D', 'T'];
   public static logLevel: LogLevel = LogLevel.INFO;
   public static setLogLevel(level: LogLevel): void {
      Logger.logLevel = level;
   }

   public static error(message: string | any[], prefix: string | null = null): void {
      if (Logger.logLevel >= LogLevel.ERROR) {
         Logger.log(message, prefix, Logger.LEVEL_ASC[0]);
      }
   }

   public static warn(message: string | any[], prefix: string | null = null): void {
      if (Logger.logLevel >= LogLevel.WARN) {
         Logger.log(message, prefix, Logger.LEVEL_ASC[1]);
      }
   }

   public static info(message: string | any[], prefix: string | null = null): void {
      if (Logger.logLevel >= LogLevel.INFO) {
         Logger.log(message, prefix, Logger.LEVEL_ASC[2]);
      }
   }

   public static debug(message: string | any[], prefix: string | null = null): void {
      if (Logger.logLevel >= LogLevel.DEBUG) {
         Logger.log(message, prefix, Logger.LEVEL_ASC[3]);
      }
   }

   public static trace(message: string | any[], prefix: string | null = null): void {
      if (Logger.logLevel >= LogLevel.TRACE) {
         Logger.log(message, prefix, Logger.LEVEL_ASC[4]);
      }
   }

   private static log(message: string | any[], prefix: string | null, level: string) {
      let timeStamp = new Date();
      let logString =
         '[' +
         timeStamp.getFullYear() +
         '-' +
         helper.pad(timeStamp.getMonth() + 1, 2) +
         '-' +
         helper.pad(timeStamp.getDate(), 2) +
         'T' +
         helper.pad(timeStamp.getHours(), 2) +
         ':' +
         helper.pad(timeStamp.getMinutes(), 2) +
         ':' +
         helper.pad(timeStamp.getSeconds(), 2) +
         '.' +
         helper.pad(timeStamp.getMilliseconds(), 3) +
         '][' +
         level +
         ']';

      if (prefix) {
         logString += ' <' + prefix + '>';
      }
      console.log(`${Array.isArray(message) ? logString + message.join(' ') : logString + message}`);
   }
}
