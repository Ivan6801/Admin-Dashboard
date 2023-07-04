const orderList = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85631",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "LARVENDER KF102",
    productNumber: "36378",
    paymentStatus: "Refunded",
    shipping: "Decline",
  },
  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "96996",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "GPS 4k Drone",
    productNumber: "22821",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
orderList.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<tr>
  <td>${order.productName}</td>
  <td>85631</td>
  <td>Due</td>
  <td class="warning">Pending</td>
  <td class="primary">Details</td>
</tr>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
