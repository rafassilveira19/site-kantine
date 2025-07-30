const bolos = {
  chocolatudo: {
    nome: "Chocolatudo",
    imagem: "images/chocolatudo.png",
    descricao: "Bolo 100% cacau e mousse de chocolate. Decorado com morangos frescos.",
    tamanhos: {
      Mini: { pessoas: "6-8", kg: "1 kg", valor: "R$125,00", diametro: "12,5cm" },
      P: { pessoas: "10-12", kg: "1,5 kg", valor: "R$170,00", diametro: "14,5cm" },
      M: { pessoas: "15-17", kg: "2 kg", valor: "R$230,00", diametro: "16,5cm" },
      G: { pessoas: "20-22", kg: "2,5 kg", valor: "R$290,00", diametro: "19,5cm" },
      GG: { pessoas: "25-28", kg: "3,5 kg", valor: "R$350,00", diametro: "22,5cm" }
    }
  },
  martarocha: {
    nome: "Marta Rocha Naked",
    imagem: "images/martarochanaked.png",
    descricao: "Bolo de chocolate, creme Kantine com crocante de castanha, suspiro caseiro, pão de ló, geleia de damasco, creme de leite fresco e crocante de castanha. Na versão naked ele não vai decorado com a camada de castanhas em volta.",
    tamanhos: {
      Mini: { pessoas: "6-8", kg: "1 kg", valor: "R$125,00", diametro: "12,5cm" },
      P: { pessoas: "10-12", kg: "1,5 kg", valor: "R$170,00", diametro: "14,5cm" },
      M: { pessoas: "15-17", kg: "2 kg", valor: "R$230,00", diametro: "16,5cm" },
      G: { pessoas: "20-22", kg: "2,5 kg", valor: "R$290,00", diametro: "19,5cm" },
      GG: { pessoas: "25-28", kg: "3,5 kg", valor: "R$350,00", diametro: "22,5cm" }
    }
  },
  martarochatrad: {
    nome: "Marta Rocha Tradicional",
    imagem: "images/martarochatrad.png",
    descricao: "Bolo de chocolate, creme Kantine com crocante de castanha, suspiro caseiro, pão de ló, geleia de damasco, creme de leite fresco e crocante de castanha. Versão tradicional com uma camada de castanhas em volta.",
    tamanhos: {
Mini: { pessoas: "6-8", kg: "1 kg", valor: "R$140,00", diametro: "12,5cm" },
      P: { pessoas: "10-12", kg: "1,5 kg", valor: "R$190,00", diametro: "14,5cm" },
      M: { pessoas: "15-17", kg: "2 kg", valor: "R$250,00", diametro: "16,5cm" },
      G: { pessoas: "20-22", kg: "2,5 kg", valor: "R$320,00", diametro: "19,5cm" },
      GG: { pessoas: "25-28", kg: "3,5 kg", valor: "R$390,00", diametro: "22,5cm" }
    }
  },
  leoavila: {
    nome: "Léo Ávila",
    imagem: "images/leoavila.png",
    descricao: "O bolo do pai da Luana. Pão de ló recheado com compota caseira de abacaxi e creme Kantine. Decorado com raspas de chocolate branco.",
    tamanhos: {
Mini: { pessoas: "6-8", kg: "1 kg", valor: "R$125,00", diametro: "12,5cm" },
      P: { pessoas: "10-12", kg: "1,5 kg", valor: "R$170,00", diametro: "14,5cm" },
      M: { pessoas: "15-17", kg: "2 kg", valor: "R$230,00", diametro: "16,5cm" },
      G: { pessoas: "20-22", kg: "2,5 kg", valor: "R$290,00", diametro: "19,5cm" },
      GG: { pessoas: "25-28", kg: "3,5 kg", valor: "R$350,00", diametro: "22,5cm" }
    }
  },
  pistache: {
    nome: "Pistache com Frutas Vermelhas",
    imagem: "images/pistache.png",
    descricao: "Pão de ló cortado em fatias fininhas recheado com camadas de creme de pistache e geleia de frutas vermelhas.",
    tamanhos: {
Mini: { pessoas: "6-8", kg: "1 kg", valor: "R$140,00", diametro: "12,5cm" },
      P: { pessoas: "10-12", kg: "1,5 kg", valor: "R$190,00", diametro: "14,5cm" },
      M: { pessoas: "15-17", kg: "2 kg", valor: "R$250,00", diametro: "16,5cm" },
      G: { pessoas: "20-22", kg: "2,5 kg", valor: "R$320,00", diametro: "19,5cm" },
      GG: { pessoas: "25-28", kg: "3,5 kg", valor: "R$390,00", diametro: "22,5cm" }
    }
  },
  
};

const modal = document.getElementById("orderModal");
const flavorSelect = document.getElementById("flavor");
const sizeSelect = document.getElementById("size");
const tamanhoInfo = document.getElementById("tamanhoInfo");
const nameInput = document.getElementById("name");
const boloImg = document.getElementById("modalBoloImg");
const boloDescricao = document.getElementById("modalBoloDescricao");

let boloAtualKey = null;


function abrirModal(key) {
  boloAtualKey = key;
  const bolo = bolos[key];

  boloImg.src = bolo.imagem;
  boloImg.alt = bolo.nome;
  boloDescricao.textContent = bolo.descricao;

  flavorSelect.innerHTML = `<option value="${bolo.nome}">${bolo.nome}</option>`;
  flavorSelect.value = bolo.nome;

  sizeSelect.value = "Mini";
  atualizarInfoTamanho();

  dateInput.value = "";
  timeInput.value = "";
  nameInput.value = "";

  document.body.style.overflow = "hidden";
  modal.style.display = "flex";
}


function atualizarInfoTamanho() {
  if (!boloAtualKey) return;

  const tamanho = sizeSelect.value;
  const info = bolos[boloAtualKey].tamanhos[tamanho];

  tamanhoInfo.textContent = `Serve ${info.pessoas} pessoas | ${info.kg} | ${info.valor} | Diâmetro: ${info.diametro}`;
}


function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}


document.getElementById("sendOrder").addEventListener("click", () => {
  if (!boloAtualKey) {
    alert("Selecione um bolo primeiro.");
    return;
  }

  const sabor = bolos[boloAtualKey].nome;
  const tamanho = sizeSelect.value;
  const data = dateInput.value;
  const hora = timeInput.value;
  const nome = nameInput.value.trim();
  

  if (!data || !hora || !nome) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const msg = `Olá! Gostaria de encomendar o bolo *${sabor}*, tamanho *${tamanho}*. Retirada no dia *${data}* às *${hora}*. Meu nome é *${nome}*.`;
  const kantinePhone = "34996787881";
  const url = `https://wa.me/55${kantinePhone}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
});

sizeSelect.addEventListener("change", atualizarInfoTamanho);

document.querySelectorAll(".btn-order").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slide = btn.closest(".slide");
    const key = slide.getAttribute("data-key");
    abrirModal(key);
  });
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}



const slidesContainer = document.querySelector(".slides");
const slideWidth = 280 + 24; 
let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const slidesPerView = 3;

document.getElementById("nextSlide").addEventListener("click", () => {
  if (currentIndex < totalSlides - slidesPerView) {
    currentIndex++;
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

document.getElementById("prevSlide").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});


const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const timeSlotsContainer = document.getElementById("timeSlots");


flatpickr.localize(flatpickr.l10ns.pt);

flatpickr("#date", {
  minDate: "today",
  disable: [
    function (date) {
      return date.getDay() === 0; 
    }
  ],
  dateFormat: "d-m-Y",
  onChange: function(selectedDates) {
    const selectedDate = selectedDates[0];
    const dayOfWeek = selectedDate.getDay();
    renderTimeSlots(dayOfWeek);
  }
});


function generateTimeSlots(dayOfWeek) {
  let startHour = 10;
  let endHour;

  if (dayOfWeek === 6) { 
    endHour = 18;
  } else { 
    endHour = 19;
  }

  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  slots.push(`${endHour.toString().padStart(2, '0')}:00`);
  return slots;
}


function renderTimeSlots(dayOfWeek) {
  const slots = generateTimeSlots(dayOfWeek);
  timeSlotsContainer.innerHTML = "";

  slots.forEach(slot => {
    const btn = document.createElement("button");
    btn.textContent = slot;
    btn.classList.add("time-slot-button");
    btn.addEventListener("click", () => {
      timeInput.value = slot;
      document.querySelectorAll(".time-slot-button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
    timeSlotsContainer.appendChild(btn);
  });
}


const today = new Date();
const todayDay = today.getDay();
if (todayDay !== 0) {
  renderTimeSlots(todayDay);
}
