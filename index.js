// Bài tập 1:Quản lý tuyển sinh

let score = (document.getElementById("output-1").onclick = () => {
  let total = +document.getElementById("input-total").value;
  let input1 = +document.getElementById("input-1").value;
  let input2 = +document.getElementById("input-2").value;
  let input3 = +document.getElementById("input-3").value;
  let location = +document.getElementById("selectLocation").value;
  let target = +document.getElementById("selectTarget").value;
  let output = document.getElementById("ketqua1");

  let i = input1 + input2 + input3 + (location + target);

  if (input1 && input2 && input3) {
    output.innerHTML =
      i >= total ? `Đạt,tổng điểm: ${i}` : `Rớt,tổng điểm: ${i}`;
  } else {
    output.innerHTML = "Rớt.Do tổng điểm dưới hoặc bằng 0.";
  }
});

// Bài tập 2:tính tiền điện theo số kw đã sử dụng trong 1 tháng
let ex2 = (document.getElementById("output-2").onclick = function () {
  let name = document.getElementById("input-name").value;
  let kw = +document.getElementById("input-kw").value;
  let bill = 0;
  if (kw <= 0) {
    alert("Vui lòng nhập số kw");
  } else if (kw <= 50) {
    bill = kw * 500;
  } else if (kw <= 100) {
    bill = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    bill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  bill = new Intl.NumberFormat("vn-VN").format(bill);

  document.getElementById(
    "ketqua2"
  ).innerHTML = `Tên: ${name} ; Tiền điện: ${bill} VND`;
});

// Bài tập 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
document.getElementById("output-3").onclick = function () {
  let name2 = document.getElementById("input-name2").value;
  let people = +document.getElementById("input-people").value;
  let totalSalary =
    +document.getElementById("input-salary").value - 4e6 - people * 1.6e6;
  let total = 0;
  if (totalSalary <= 0) {
    alert("Số tiền không hợp lệ");
  } else if (totalSalary <= 6e7) {
    total = totalSalary * 0.05;
  } else if (totalSalary <= 12e7) {
    total = totalSalary * 0.1;
  } else if (totalSalary <= 21e7) {
    total = totalSalary * 0.15;
  } else if (totalSalary <= 384e7) {
    total = totalSalary * 0.2;
  } else if (totalSalary <= 624e7) {
    total = totalSalary * 0.25;
  } else if (totalSalary <= 960e7) {
    total = totalSalary * 0.3;
  } else {
    total = totalSalary * 0.35;
  }
  total = new Intl.NumberFormat("vn-VN").format(total);
  document.getElementById(
    "ketqua3"
  ).innerHTML = `Họ tên: ${name2} ; Tiền thuế thu nhập cá nhân: ${total} VND`;
};
// Bài tập 4
function onchangeButton() {
  let i = document.getElementById("Customer").value;
  let a = (document.getElementById("inp-Connect").style.display =
    "company" === i ? "block" : "none");
}

document.getElementById("output-4").onclick = () => {
  let i = document.getElementById("Customer").value;
  let id = document.getElementById("input-id").value;
  let channel = +document.getElementById("input-channel").value;
  let connect = +document.getElementById("inp-Connect").value;
  let totalBill = 0;
  let personalBill = 4.5 + 20.5 + channel * 7.5;
  let companyBill = 15 + 75 + channel * 50;
  if ("personal" === i) {
    totalBill = personalBill;
  } else if ("company" === i) {
    if (connect <= 10) {
      totalBill = companyBill;
    } else {
      totalBill += companyBill + (connect - 10) * 5;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng !!!");
  }
  totalBill = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(totalBill);
  document.getElementById(
    "ketqua4"
  ).innerHTML = `Mã KH: ${id};Tiền cáp: ${totalBill}`;
};
