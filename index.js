function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const setTitle = require("node-bash-title");
setTitle("Cyber & Woxy Token Generator");
const fs = require("fs");
async function main() {
  console.clear();
  ("use-scrict");
  const ps = require("prompt-sync");
  const prompt = ps();
  const colors = require("colors");
  console.log("Cyber ve  Woxy Tarafından Kodlanmıştır");
  console.log("[" + "1".brightBlue + "] [" + "Token Oluşturamaya Başla".green + "]");
  console.log("[" + "2".brightBlue + "] Yardım");
  console.log("[" + "3".brightBlue + "] Çıkış Yap");
  let choice = prompt("[" + "?".brightBlue + "]>");

  if (choice == 1) {
    console.log("[" + "1".brightBlue + "] Temp-mail");
    console.log("[" + "2".brightBlue + "] 10minemai (Önerilen)");
    console.log("[" + "3".brightBlue + "] Tempmaildev");
    let emailchoice = prompt("[?]>");
    console.log(
      "[" +
        "!".red +
        "] Projeye Star Atmayı Unutma: https://github.com/Cyber-Woxy/Discord-Token-Generator "
    );
    let choicewbwile = prompt("[?]>");
    if (choicewbwile == "y") {
      webhook = prompt("Devam Etmek İçin Enter Basınız ");
    }
    console.log(
      "[" +
        "!".green +
        "] Tokenleri Sunucuya a göndermek istiyormusun (Premium Özellik Discord Üzerinden İletişime Geçiniz Fiyat 20 TL): "
    );
    let choicewbwile2 = prompt("[?]>");
    if (choicewbwile2 == "y") {
      sunucudavet = prompt("Sunucu Linki  [No Premium] ");
    }
    let tokensname = prompt(
      "Token İsimleri: ( İsterseniz Doldurun Yoksa Random Yapar ) "
    );
    let HowTokens = prompt("Kaç Adet Token Oluşturmak İstiyorsun: ");

    const StealthPlugin = require("puppeteer-extra-plugin-stealth");
    const randchars = require("crypto");
    const puppeteer = require("puppeteer-extra");
    const RecaptchaPlugin = require("puppeteer-extra-plugin-recaptcha");
    const { uniqueNamesGenerator, animals } = require("unique-names-generator");
    const { PuppeteerBlocker } = require("@cliqz/adblocker-puppeteer");
    const { fetch } = require("cross-fetch");
    const fs = require("fs");

    const cfg = {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-infobars",
        "--window-position=0,0",
        "--window-size=1366,768",
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    };

    puppeteer.use(StealthPlugin());
    puppeteer.use(
      RecaptchaPlugin({
        provider: {
          id: "2captcha",
        },
        visualFeedback: true,
        throwOnError: true,
      })
    );

    const accounts = fs.createWriteStream("tokenler.txt", { flags: "a" });
    async function dsne(page, infoname, info) {
      const p = await page.$("input[name=" + infoname + "]");
      await p.focus();
      await page.keyboard.type(info);
    }

    async function cli(page, name, min, max) {
      var i = await page.$("input[id=" + name + "]");
      await i.click();
      
      var r = Math.floor(Math.random() * (max - min + 1)) + min;

      await page.waitForSelector("[class*=option]");
      await page.$eval(
        "[class$=option]",
        function (e, r) {
          e.parentNode.childNodes[r].click();
        },
        r
      );

      return r;
    }

    async function discordInput(dspagee, username, password, email) {
      await dspagee.bringToFront();
      await dspagee.goto(`https://discord.com/register` , {
        waitUntil: "networkidle0",
        timeout: 100000,
      });

      await cli(dspagee, "react-select-4-input", 17, 24);
      await cli(dspagee, "react-select-3-input", 0, 28);
      await cli(dspagee, "react-select-2-input", 0, 11);

      dspagee
        .waitForSelector("input[type*=text]")
        .then(() => {
          dspagee.$eval("input[type*=text]", (el) => el.click());
        })
        .catch((e) => {});
      dspagee
        .waitForSelector("input[type*=text]")
        .then(() => {
          dspagee.$eval("input[type*=text]", (el) => el.click());
        })
        .catch((e) => {});

      await dsne(dspagee, "username", username);
      await dsne(dspagee, "password", password);
      await dsne(dspagee, "email", email);
      await dspagee.$eval("button[type=submit]", (el) => el.click());
    }

    async function captchaby(DiscordPage) {
      try {
        await DiscordPage.waitForSelector("[src*=sitekey]");
        await DiscordPage.addScriptTag({ content: `hcaptcha.execute()` });

        while (true) {
          try {
            await DiscordPage.solveRecaptchas();
            return true;
          } catch (err) {
            sleep(3000);
          }
        }
      } catch (e) {}
    }

    async function genmail(page2) {
      if (emailchoice == 1) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://temp-mail.org/", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction(
            (info_id) =>
              document.querySelector(info_id).value.indexOf("@") != -1,
            {},
            info_id
          );

          var email = await page2.$eval("#mail", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 2) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://10minemail.com/", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction(
            (info_id) =>
              document.querySelector(info_id).value.indexOf("@") != -1,
            {},
            info_id
          );

          var email = await page2.$eval("#mail", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 3) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://tempmail.dev/en/Gmail", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#current-mail";

        try {
          await page2.waitForSelector("#current-mail");
          const element = await page2.$("#current-mail");
          const email = await page2.evaluate(
            (element) => element.textContent,
            element
          );
          return email;
        } catch (e) {
          return false;
        }
      }
    }

    async function emailvery(page2) {
      await page2.bringToFront();
      if (emailchoice == 1) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      } else if (emailchoice == 2) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      } else if (emailchoice == 3) {
        while (true) {
          try {
            await page2.waitForSelector("#inbox-dataList");
            await page2.click("#inbox-dataList");

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      }
    }

    async function verif2(chrom, link) {
      const page = await chrom.newPage();
      await page.goto(link, { waitUntil: "networkidle0", timeout: 60000 });
      captchaby(page);
    }

    const nickname = [` ${tokensname}`];

    async function create_accinfos(chrome, disc) {
      const username = uniqueNamesGenerator({
        dictionaries: [animals, nickname],
        separator: " ",
        style: "capital",
        length: 2,
      });
      const password = "cyberwoxyninsikidassagi"; //TÜM OLUSTURDUGUN TOKENLERİN ŞİFRELERİ BU OLACAK
      const page2 = (await chrome.pages())[0];
      var email;

      while (!email) {
        try {
          email = await genmail(page2);
        } catch (e) {}
      }

      const dspage = disc;
      await discordInput(dspage, username, password, email);

      const client = disc._client;
      var token;

      client.on("Network.webSocketFrameSent", ({ response }) => {
        try {
          const json = JSON.parse(response.payloadData);
          if (!token && json["d"]["token"]) {
            token = json["d"]["token"];
          }
        } catch (e) {}
      });
      await captchaby(dspage);

      let verifyy = await emailvery(page2);
      await verif2(chrome, verifyy);

      return token;
    }

    (async () => {
      for (let i = 0; i < HowTokens; i++) {
        const browser = await puppeteer.launch(cfg);
        try {
          const page = await browser.newPage();
          const infos = await create_accinfos(browser, page);
          accounts.write(infos + "\n");
          if (choicewbwile == "y") {
            let request = fetch(webhook, {
              method: "POST",
              headers: {
                accept: "*/*",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-GB",
                "content-length": "90",
                "content-type": "application/json",
                origin: "https://discord.com",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36",
                "x-debug-options": "bugReporterEnabled",
                "x-super-properties":
                  "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMjI0NjMiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6InNrIiwiY2xpZW50X2J1aWxkX251bWJlciI6OTkwMTYsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9",
              },
              body: JSON.stringify({
                content: infos,
              }),
            });
          }
        } catch (e) {
          console.log(e);
        } finally {
          try {
            await sleep(60000)
            browser.close();
          } catch (e) {}
        }
        await sleep(60000);
      }
      await sleep(1000);
      main();
    })();
  } else if (choice == 2) {
    console.log("Cyber ve Woxy Tarafından Yapılmıştır");
    let reactionChoice = prompt("[" + "?".brightBlue + "]>");
    reactionChoice = main();
  } else if (choice == 3) {
    await sleep(1000);
  } else {
    console.log("YANLIS TIKLAMA".red);
    await sleep(1000);
    main();
  }
}

main();
