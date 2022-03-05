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

export function getDailyWord(): DailyWord {
  return dailyWords[getToday()];
}


export const dailyWords: DailyWordDatabase = {
  "2022-03-01": { edition: "001", date: "2022-03-01", word: "ETNIA" },
  "2022-03-02": { edition: "002", date: "2022-03-02", word: "BOTAR" },
  "2022-03-03": { edition: "003", date: "2022-03-03", word: "CARNE" },
  "2022-03-04": { edition: "004", date: "2022-03-04", word: "FOGAO" },
  "2022-03-05": { edition: "005", date: "2022-03-05", word: "CARRO" },
  "2022-03-06": { edition: "006", date: "2022-03-06", word: "CALMO" },
  "2022-03-07": { edition: "007", date: "2022-03-07", word: "PARTE" },
  "2022-03-08": { edition: "008", date: "2022-03-08", word: "PRETO" },
  "2022-03-09": { edition: "009", date: "2022-03-09", word: "BOCAL" },
  "2022-03-10": { edition: "010", date: "2022-03-10", word: "CANTE" },
  "2022-03-11": { edition: "011", date: "2022-03-11", word: "PRATO" },
  "2022-03-12": { edition: "012", date: "2022-03-12", word: "BORDA" },
  "2022-03-13": { edition: "013", date: "2022-03-13", word: "JANTO" },
  "2022-03-14": { edition: "014", date: "2022-03-14", word: "ROUPA" },
  "2022-03-15": { edition: "015", date: "2022-03-15", word: "HORAS" },
  "2022-03-16": { edition: "016", date: "2022-03-16", word: "BARCO" },
  "2022-03-17": { edition: "016", date: "2022-03-17", word: "HORAS" },
  "2022-03-18": { edition: "018", date: "2022-03-18", word: "ERETO" },
  "2022-03-19": { edition: "019", date: "2022-03-19", word: "FARTO" },
  "2022-03-20": { edition: "020", date: "2022-03-20", word: "DENTE" },
  "2022-03-21": { edition: "021", date: "2022-03-21", word: "LOUCA" },
  "2022-03-22": { edition: "022", date: "2022-03-22", word: "EXITO" },
  "2022-03-23": { edition: "023", date: "2022-03-23", word: "GOTAS" },
  "2022-03-24": { edition: "024", date: "2022-03-24", word: "SANTO" },
  "2022-03-25": { edition: "025", date: "2022-03-25", word: "RISCO" },
  "2022-03-26": { edition: "026", date: "2022-03-26", word: "PONTE" },
  "2022-03-27": { edition: "027", date: "2022-03-27", word: "ZEBRA" },
  "2022-03-28": { edition: "028", date: "2022-03-28", word: "ORNAR" },
  "2022-03-29": { edition: "029", date: "2022-03-29", word: "QUERO" },
  "2022-03-30": { edition: "030", date: "2022-03-30", word: "VORAZ" },
  "2022-03-31": { edition: "021", date: "2022-03-31", word: "DOCAS" },
};
