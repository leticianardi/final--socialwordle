import { DailyWord, DailyWordDatabase } from "../models";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

export function getToday(): string {
  const todayDate = new Date();
  const correctedDate = new Date(
    todayDate.valueOf() -
      todayDate.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE
  );

  return correctedDate.toISOString().split("T")[0];
}

export function getDailyWordEng(): DailyWord {
  return dailyWords[getToday()];
}

// TODO: update words in english

export const dailyWords: DailyWordDatabase = {
  "2022-03-01": { edition: "001", date: "2022-03-01", word: "RACES" },
  "2022-03-02": { edition: "002", date: "2022-03-02", word: "THROW" },
  "2022-03-03": { edition: "003", date: "2022-03-03", word: "MEALS" },
  "2022-03-04": { edition: "004", date: "2022-03-04", word: "BOARD" },
  "2022-03-05": { edition: "005", date: "2022-03-05", word: "MOTOR" },
  "2022-03-06": { edition: "006", date: "2022-03-06", word: "QUIET" },
  "2022-03-07": { edition: "007", date: "2022-03-07", word: "PIECE" },
  "2022-03-08": { edition: "008", date: "2022-03-08", word: "BLACK" },
  "2022-03-09": { edition: "009", date: "2022-03-09", word: "SNOUT" },
  "2022-03-10": { edition: "010", date: "2022-03-10", word: "CHANT" },
  "2022-03-11": { edition: "011", date: "2022-03-11", word: "PLATE" },
  "2022-03-12": { edition: "012", date: "2022-03-12", word: "MARGE" },
  "2022-03-13": { edition: "013", date: "2022-03-13", word: "STOKE" },
  "2022-03-14": { edition: "014", date: "2022-03-14", word: "CLOTH" },
  "2022-03-15": { edition: "015", date: "2022-03-15", word: "HOURS" },
  "2022-03-16": { edition: "016", date: "2022-03-16", word: "BARGE" },
  "2022-03-17": { edition: "016", date: "2022-03-17", word: "HOURS" },
  "2022-03-18": { edition: "018", date: "2022-03-18", word: "ERECT" },
  "2022-03-19": { edition: "019", date: "2022-03-19", word: "PAMPER" },
  "2022-03-20": { edition: "020", date: "2022-03-20", word: "TOOTH" },
  "2022-03-21": { edition: "021", date: "2022-03-21", word: "CRAZY" },
  "2022-03-22": { edition: "022", date: "2022-03-22", word: "GOALS" },
  "2022-03-23": { edition: "023", date: "2022-03-23", word: "DRIPS" },
  "2022-03-24": { edition: "024", date: "2022-03-24", word: "SAINT" },
  "2022-03-25": { edition: "025", date: "2022-03-25", word: "GAMBLE" },
  "2022-03-26": { edition: "026", date: "2022-03-26", word: "RIVER" },
  "2022-03-27": { edition: "027", date: "2022-03-27", word: "WHITE" },
  "2022-03-28": { edition: "028", date: "2022-03-28", word: "MATCH" },
  "2022-03-29": { edition: "029", date: "2022-03-29", word: "WANTS" },
  "2022-03-30": { edition: "030", date: "2022-03-30", word: "EATER" },
  "2022-03-31": { edition: "021", date: "2022-03-31", word: "ANCHOR" },
};
