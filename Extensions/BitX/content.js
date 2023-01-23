// authenticate
// get date today
const date = new Date();
const dateToday = date.toISOString().slice(0, 10);

// show settings modal
// save settings to localstorage & cookie

// show before loop starts
let startingBalance = document.querySelector("#balance").innerHTML;
let freeRolls = 0;
let reference = document.getElementById("free_play_result");
let reference2 = document.getElementById(
  "double_your_btc_main_container_outer"
);
let banners = document.getElementById("bitx");
let bottom = document.getElementById("bottom_user_ads_container");
let bottom2 = document.getElementById("double_your_btc_main_container");

// add the iframe
reference.insertAdjacentHTML(
  "afterend",
  '<div id="bitx" class="responsive-iframe-container"><iframe src="https://www.arnuld.net/?a=2509870" scrolling="no" frameborder="0" allowfullscreen></iframe><small><a href="https://www.arnuld.net/buy/bitcoins/">Buy Bitcoin</a> to start playing &bull; <a href="https://www.arnuld.net/dl/multiply-btc-guide">Download Guide</a> to win the Multiply BTC game</small></div>'
);
// add iframe to multiply btc page
reference2.insertAdjacentHTML(
  "afterend",
  '<div id="bitx2" class="responsive-iframe-container"><iframe src="https://www.arnuld.net/?a=2509870" scrolling="no" frameborder="0" allowfullscreen></iframe><small><a href="https://www.arnuld.net/buy/bitcoins/">Buy Bitcoin</a> to start playing &bull; <a href="https://www.arnuld.net/dl/multiply-btc-guide">Download Guide</a> to win the Multiply BTC game</small></div>'
);
// 60-second loop starts here
function main() {
  setInterval(function () {
    let btn = document.getElementById("free_play_form_button");
    let btnStyle = btn.getAttribute("style");
    // if 'style' attribute is not found, click the button
    if (!btnStyle) {
      console.log("Page is being reloaded");
      setTimeout(function () {
        btn.click();
        console.log("ROLL button clicked");
        scrapeSelected();
      }, 3000);
    } else {
      // close the modal after free roll
      try {
        let modal = document.getElementById("myModal22");
        if (modal) {
          let btn_close = modal.querySelector(".close-reveal-modal");
          if (btn_close) {
            btn_close.click();
          } else {
            throw new Error("Close button not found");
          }
        } else {
          throw new Error("Parent element doesn't exist");
        }
      } catch (error) {}

      console.log("Timer is active... ");
      // scroll to bottom of the page
      bottom.scrollIntoView({ behavior: "smooth" });
      bottom2.scrollIntoView({ behavior: "smooth" });
    }

    if (document.getElementById("bitx")) {
      // if element exist, do nothing
    } else {
      // add iframe
      reference.insertAdjacentHTML(
        "afterend",
        '<div id="bitx" class="responsive-iframe-container"><iframe src="https://www.arnuld.net/?a=2509870" scrolling="no" frameborder="0" allowfullscreen></iframe><small><a href="https://www.arnuld.net/buy/bitcoins/">Buy Bitcoin</a> to start playing &bull; <a href="https://www.arnuld.net/dl/multiply-btc-guide">Download Guide</a> to win the Multiply BTC game</small></div>'
      );
    }
  }, 30000);
}

function scrapeSelected() {
  let btcUSDPrice = document.querySelector(
    "#site_stats > div > div > div h4"
  ).innerHTML;
  let currentBalance = document.querySelector("span#balance").innerHTML;
  let eligibleBonus = document.querySelector(
    "#bonus_eligible_msg > span > .dep_bonus_max"
  ).innerHTML;
  let rpPromo = document.querySelector(
    "#free_play_alert_boxes > div ~ div"
  ).innerHTML;
  let multiplyBTCWinnings = document.querySelector(
    "#personal_stats > div > div > div h4"
  ).innerHTML;

  let jsonData = {
    "date-today": dateToday,
    "btc-usd-price": btcUSDPrice,
    "starting-balance": startingBalance,
    "current-balance": currentBalance,
    "eligible-bonus": eligibleBonus,
    "multiply-btc-winnings": multiplyBTCWinnings,
    "rp-promo": rpPromo,
    "free-rolls": freeRolls,
  };

  console.log(jsonData);
}

main();
