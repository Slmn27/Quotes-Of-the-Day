const quotes = [
  {
    quote: '"Orang sukses mempunyai kebiasaan mengerjakan hal-hal yang tidak suka dikerjakan oleh orang-orang gagal"',
    writer: "-Albert E.N.Gray",
  },
  {
    quote: '"Kenyamanan adalah jebakan terbesarmu dan keluar dari zona nyaman merupakan tantangan terbesarmu"',
    writer: "-Manoj Arora",
  },
  {
    quote: '"Barangsiapa yang mengenali dirinya, akan lebih sibuk membenahi dirinya sendiri daripada mencari kesalahan orang lain"',
    writer: "-Ibnu Qoyyim al-Jauziyah",
  },
  {
    quote: '"Ada yang berubah,ada yang bertahan.Karena zaman tak bisa dilawan. Yang pasti kepercayaan harus diperjuangkan"',
    writer: "-Chairil Anwar",
  },
  {
    quote: '"Sukses berjalan dari satu kegagalan ke kegagalan yang lain,tanpa kita kehilangan semangat" ',
    writer: "-Abraham Lincoln",
  },
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
});
