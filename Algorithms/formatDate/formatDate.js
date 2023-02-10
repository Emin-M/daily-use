//! formating date
const formatDate = (date) => {
    let now = Date.now();
    let different = Math.floor((now - date) / 1000);

    if (different < 1) {
        return "now";
    } else if (different < 60) {
        return `${different} sec. before`;
    } else if (different < 3600) {
        return `${Math.floor(different / 60)} m. before`;
    } else {
        return `${("0" + date.getDate()).slice(-2)}.${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}.${date.getFullYear()} ${date.getHours()}:${(
        "0" + date.getMinutes()
      ).slice(-2)}`;
    }
};

//! how to use
formatDate(new Date("2022-11-14T09:30:30.237Z"));