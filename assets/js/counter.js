export default function counterUp() {
  const counter = document.querySelectorAll(".counter");

  counter.forEach((counter) => {
    counter.innerText = "0";
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCount, 1);
      }
    };
    updateCount();
  });
}
