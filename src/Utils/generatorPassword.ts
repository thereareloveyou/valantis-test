import md5 from "md5";

const PASSWORD = "Valantis_";

export const generatorPasword = () => {
  const TIMESTAMP = new Intl.DateTimeFormat("ru-RU", { dateStyle: "short" })
    .format(new Date())
    .split(".")
    .reverse()
    .join("");

  return md5(PASSWORD + TIMESTAMP);
};