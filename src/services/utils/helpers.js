import moment from "moment";
import { ToWords } from "to-words";

const toWords = new ToWords({
  localeCode: "en-NG",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
  },
});

export const formatConfig = (arr) => {
  const obt = {};

  if (arr.length > 0) {
    arr.forEach((el) => {
      obt[el.key] = el.value;
    });
  }

  return obt;
};

export const getMonthToCurrent = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  return months.slice(0, months[date.getMonth()]);
};

export const formatCurrency = (fig) => {
  let currency = Intl.NumberFormat("en-US");
  return "NGN " + currency.format(fig);
};

export const verifyNumOfDays = (started, ended) => {
  const date1 = new Date(started);
  const date2 = new Date(ended);
  const diffTime = Math.abs(date2 - date1);

  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const returnArr = (arrs) => {
  const arr = [];

  arrs.forEach((el) => {
    arr.push(el && el.fund.booked_balance);
  });

  return arr;
};

export const getPaymentType = (code) => {
  const type = code.substring(0, 2);
  return type === "SP" ? "STAFF PAYMENT" : "THIRD PARTY PAYMENT";
};

export const formatDate = (date) => {
  return moment(date).format("DD-MMM-YY");
};

export const amountToWords = (amount) => {
  return toWords.convert(amount);
};
