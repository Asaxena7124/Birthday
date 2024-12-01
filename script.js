const text1 = "Happy Birthday Meri Jaan❤️"; // Static heading text
const text2 = "Happy birthday meri jaan 🎂❤️🫂 mera bachaaa finally aaj paidaa hogyaa shaitan bachaa meraa😁❤️ i wish ki humesha aap khush rho muskurati rho aise blkl 😁 aur humeshaa meri rho ❤️🧿 i want ki humdono aise hi humeshaaaaa humeshaaaa sath rahe aur aise hi humdono milke dono logo ki birthdays celebrate kre ❤️🥳 aur khoob saari masti kre milke sath me 🙈❤️ i literally can't explain how i feel to have you in my life literally sometimes it's all looks like a dream which comes true 🫶🏻✨ you means alot for me and ye ldka aapke liye kch bi kr skta h kissi se bhi lad skta h tumhare liye ❤️ bhut pyaar krta h ye ldka tumsee had ni h eski koi  jo had se ho vo pyaar hi kaha ❤️🧿 i just want and always widh ki tum bhut achaaa kro apni life me tumne jo jo chize sochiii h you'll get one day sonner mera bachaaa ❤️🫂 you're doing great day by day and I'm soo proud of my bachaa that how strong my girl is ❤️... she's the most gorgeous and cuteness to etni kut kut ke bhari h esme ky hi kahu mai ❤️😗 esko bhi pta h etna cute cute bolta hu chid jaati hogi 😝 but apart from all the things yaad rakhna that I'll never leave you behind ❤️🤝🏻 I'll always stay forever ♾️ with you meri jaan ❤️🫂 sath dene k liye tumhare sath aaya hu to ab sath hi rahunga tumhare jhelna mushkil h thoda sa ik ik but tum daat phatkaar ke mujeh rak hi logi 😂❤️ Mai sach me bhut khush hu aapke sath and i want ki aapbhi mere sath humesha acha acha feel kro and as we promise ki hum kabhi kuch bhi ni chupayengy sab btayengy bas aise hi rehna h mko kch bhi aisa ni chahiye jisse apne logo k bich problem aye bssss aur aajto bachuuuuuuuuu ki birthday h to bsssss kal bachuu party dega yuss yusss dekhlo tumhari hi adatein h 🐣❤️ and suniyeee......I Loveee You Sooo Much Meriii Jaan ❤️🫂 Stay Blessed Hanuman Ji Kabhi Koi Dikkat Na Aye Mere Bache Pr ❤️🫶🏻 Baki milke hai kal aapse ❤️🐣Jabtk aap ye suniyee ❤️😗And kal reply dena samne se ❤️🐣 Once more Happy vala birthday meri jaan ko 🎂❤️🫶🏻🥳 "; // Typewriter effect text

let index = 0;

function typeWriter() {
  const element2 = document.getElementById("typewriter2");
  if (index < text2.length) {
    element2.textContent += text2.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Adjust typing speed (faster for smoother animation)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Display the static text for the heading
  const element1 = document.getElementById("typewriter1");
  element1.textContent = text1;

  // Start the typewriter effect for the second text
  typeWriter();
});
