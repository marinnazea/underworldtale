var personajes = [
  {
    nombre: "Melinoë",
    categoria: "melinoe",
    imagen: "./images/Melinoë.png",
    signo: "Libra",
    descripcion: "Melinoë es la mensajera de los sueños y las sombras. Balancea la luz y la oscuridad como solo un verdadero Libra puede hacerlo.",
    gustos: "Los sueños, las sombras y el equilibrio",
    noLeGusta: "El caos sin sentido"
  },
  {
    nombre: "Hades",
    categoria: "inframundo",
    imagen: "./images/Hades.png",
    signo: "Escorpio",
    descripcion: "El soberano absoluto del inframundo. Un líder sabio y justo que mantiene el equilibrio entre la vida y la muerte.",
    gustos: "El orden, el silencio y Perséfone",
    noLeGusta: "Las interrupciones y el caos"
  },
  {
    nombre: "Deimos",
    categoria: "mis_coqueteos",
    imagen: "./images/Deimos.png",
    signo: "Aries",
    descripcion: "Dios del terror y el pánico. Hijo de Ares, frío por fuera pero con un fuego que pocos logran ver.",
    gustos: "El combate y la soledad",
    noLeGusta: "La ternura inesperada y las preguntas"
  },
  {
    nombre: "Hermes",
    categoria: "mis_coqueteos",
    imagen: "./images/Hermes.png",
    signo: "Géminis",
    descripcion: "El dios más veloz del Olimpo. Siempre tiene una sonrisa y una palabra perfecta para cada momento.",
    gustos: "Correr, charlar y los retos",
    noLeGusta: "Quedarse quieto y el aburrimiento"
  },
  {
    nombre: "Pasha",
    categoria: "mis_coqueteos",
    imagen: "./images/Pasha.png",
    signo: "Libra",
    descripcion: "Una presencia enigmática entre las sombras del inframundo. Poco se sabe de él, pero es imposible ignorarlo.",
    gustos: "Desconocidos",
    noLeGusta: "Desconocidos"
  },
  {
    nombre: "Perséfone",
    categoria: "inframundo",
    imagen: "./images/Perséfone.png",
    signo: "Tauro",
    descripcion: "La reina del inframundo, símbolo de esperanza y renovación. Su presencia ilumina incluso las tinieblas más profundas.",
    gustos: "Las flores, la primavera y Hades",
    noLeGusta: "La separación y la oscuridad sin fin"
  },
  {
    nombre: "Makaria",
    categoria: "inframundo",
    imagen: "./images/Makaria.png",
    signo: "Virgo",
    descripcion: "Diosa de la muerte bienaventurada. Serena y misteriosa, vela por quienes pasan al otro lado con paz.",
    gustos: "La tranquilidad y las almas en paz",
    noLeGusta: "El caos y los gritos"
  },
  {
    nombre: "Zagreo",
    categoria: "inframundo",
    imagen: "./images/Zagreo.png",
    signo: "Sagitario",
    descripcion: "Príncipe del inframundo, hijo de Hades. Rebelde e incansable, busca su propio camino más allá de las sombras.",
    gustos: "La libertad, Thanatos y los desafíos",
    noLeGusta: "Las reglas y quedarse encerrado"
  },
  {
    nombre: "???",
    categoria: "inframundo",
    imagen: "./images/Kronos.png",
    signo: "???",
    descripcion: "Hay seres tan antiguos y temidos que ni siquiera pueden ser nombrados. Su sola presencia hace temblar los pilares del inframundo.",
    gustos: "???",
    noLeGusta: "???"
  },
  {
    nombre: "Thanatos",
    categoria: "inframundo",
    imagen: "./images/Thanatos.png",
    signo: "Capricornio",
    descripcion: "Dios de la muerte apacible. Hermano de Hipnos, lleva las almas con una calma inquebrantable y una frialdad que pocos se atreven a desafiar.",
    gustos: "El silencio, el orden y el deber",
    noLeGusta: "El caos, Zagreo y las escapadas"
  },
  {
    nombre: "Apolo",
    categoria: "olimpo",
    imagen: "./images/Apolo.png",
    signo: "Leo",
    descripcion: "Dios del sol, la música y la profecía. Brillante y carismático, su luz lo llena todo y su lira resuena hasta en el inframundo.",
    gustos: "La música, la poesía y ser el centro de atención",
    noLeGusta: "Ser ignorado y la oscuridad"
  },
  {
    nombre: "Artemisa",
    categoria: "olimpo",
    imagen: "./images/Artemisa.png",
    signo: "Leo",
    descripcion: "Diosa de la caza y la luna. Independiente y feroz, protege a los suyos con una determinación que no conoce límites.",
    gustos: "La naturaleza, la luna y la libertad",
    noLeGusta: "Los que subestiman su fuerza"
  }
]

let seccionActual = "inicio"

$(document).ready(function() {
  document.getElementById("subcategorias-personajes").style.display = "none"
  document.getElementById("subcategorias-episodios").style.display = "none"

  gsap.from(".header",      { duration: 0.8, opacity: 0, y: -30, ease: "power2.out" })
  gsap.from(".categorias",  { duration: 0.6, opacity: 0, y: -10, delay: 0.5, ease: "power2.out" })
  gsap.from(".reproductor", { duration: 0.6, opacity: 0, y: -20, delay: 1,   ease: "power2.out" })

  mostrarSeccion("inicio")

  const audio = document.getElementById("musicaFondo")
  audio.volume = 0.5

  audio.play().then(() => {
    document.getElementById("btnPlay").textContent = "❚❚"
  }).catch(() => {})

  $("#btnPlay").click(function() {
    if (audio.paused) {
      audio.play()
      $(this).text("❚❚")
    } else {
      audio.pause()
      $(this).text("▶")
    }
  })

  document.getElementById("volumen").addEventListener("input", function() {
    audio.volume = this.value
  })
})

function cambiarContenido(html, alTerminar) {
  const grid = document.getElementById("personajesGrid")
  gsap.to(grid, {
    opacity: 0, duration: 0.15,
    onComplete: function() {
      grid.innerHTML = html
      if (alTerminar) alTerminar()
      gsap.to(grid, { opacity: 1, duration: 0.3 })
    }
  })
}

function mostrarSeccion(seccion) {
  document.querySelectorAll(".btn-categoria").forEach(b => b.classList.remove("active"))
  document.getElementById("btn-" + seccion).classList.add("active")

  document.getElementById("subcategorias-personajes").style.display = "none"
  document.getElementById("subcategorias-episodios").style.display = "none"

  if (seccion == "inicio") {
    cargarInicio()
  } else if (seccion == "personajes") {
    $("#subcategorias-personajes").fadeIn(200)
    document.querySelectorAll("#subcategorias-personajes .btn-subcategoria").forEach(b => b.classList.remove("active"))
    document.querySelector("#subcategorias-personajes .btn-subcategoria").classList.add("active")
    cargarPersonajes("melinoe")
  } else if (seccion == "episodios") {
    verEpisodios()
  } else if (seccion == "contacto") {
    abrirContacto()
  }
}

function cargarInicio() {
  cambiarContenido(`
    <section class="inicio-card">
      <img src="./images/Fondo Inicio.png" alt="Inicio" class="inicio-imagen">
      <p class="inicio-nota">DESCIENDE AL INFRAMUNDO<br>Y ESCRIBE TU DESTINO JUNTO A MELINOË.<br>DESCUBRE AMORES PROHIBIDOS,<br>PACTOS DIVINOS Y SECRETOS<br>QUE JAMÁS DEBIERON DESPERTAR.</p>
    </section>
    <section class="inicio-descripcion">
      <p>En esta novela visual descenderás al <strong>Inframundo</strong>, un reino lleno de sombras, secretos y dioses antiguos. Allí conocerás a <strong>Melinoë</strong>, una presencia misteriosa ligada a los fantasmas, la noche y los caminos entre la vida y la muerte.</p>
      <p>A través de tus decisiones, podrás explorar lugares ocultos, formar vínculos con personajes divinos y descubrir romances oscuros, peligrosos y fascinantes. Cada elección marcará tu destino en una historia donde el amor, el miedo y la magia se mezclan bajo la mirada de los dioses.</p>
    </section>
    <div class="inicio-botones">
      <button class="btn-inicio-accion btn-personajes-accion" onclick="mostrarSeccion('personajes')">Personajes</button>
      <button class="btn-inicio-accion btn-jugar-accion" onclick="mostrarSeccion('episodios')">Jugar</button>
    </div>
  `, function() {
    gsap.from(".inicio-card",        { opacity: 0, y: 20, duration: 0.5 })
    gsap.from(".inicio-descripcion", { opacity: 0, y: 20, duration: 0.5, delay: 0.15 })
    gsap.from(".inicio-botones",     { opacity: 0, y: 20, duration: 0.5, delay: 0.28 })
  })
}
