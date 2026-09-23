/*
  AGAMI ONLINE — QUICK SETTINGS
  Edit only the values below to change your contact details and social links.
  No other code changes are required for normal use.
*/

const AGAMI = {
  phoneDisplay: "+91 XXXXXXXXXX",
  phoneLink: "+917404249138",
  whatsappNumber: "917404249138",
  whatsappMessage: "Hi Agami Online, I would like to discuss digital marketing services for my business.",
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/agamionline"
};

const whatsappUrl = `https://wa.me/${AGAMI.whatsappNumber}?text=${encodeURIComponent(AGAMI.whatsappMessage)}`;

document.getElementById("whatsappButton").href = whatsappUrl;
document.getElementById("floatingWhatsApp").href = whatsappUrl;

document.getElementById("callButton").href = `tel:${AGAMI.phoneLink}`;
document.getElementById("floatingCall").href = `tel:${AGAMI.phoneLink}`;

document.getElementById("facebookLink").href = AGAMI.facebook;
document.getElementById("instagramLink").href = AGAMI.instagram;

document.getElementById("year").textContent = new Date().getFullYear();
