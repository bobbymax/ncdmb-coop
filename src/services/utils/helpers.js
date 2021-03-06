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

export const levelOptions = (optionsArr) => {
  const arr = [];
  if (optionsArr.length !== 0) {
    optionsArr.forEach((el) => {
      arr.push({ value: el.id, label: el.code });
    });
  } else {
    arr.push({ value: 0, label: "Select Grade Level" });
  }
  return arr;
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

// const htmlEntities = (str) => {
//   return String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// };

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

export const search = (str = "", data = []) => {
  let filtered = [];
  if (str !== "" && data.length > 0) {
    filtered = data.filter((row) => {
      return Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(str.toLowerCase());
    });
  } else {
    filtered = data;
  }

  return filtered;
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

export const filterByRef = (arr1, arr2) => {
  let res = [];

  res = arr1.filter((el) => {
    return !arr2.find((element) => {
      return element.grade_level_id === el.value;
    });
  });

  return res;
};

const fetchLabels = (entity) => {
  let enty = [];

  entity.roles.forEach((el) => {
    enty.push(el.label);
  });

  return enty;
};

export const userHasRole = (auth, role) => {
  const authRoles = fetchLabels(auth);
  return authRoles.includes(role);
};

export const uniqueNumberGenerator = (str) => {
  const paymentType = str === "staff-payment" ? "SP" : "TPP";
  return paymentType + Math.floor(Math.random() * 100000);
};
