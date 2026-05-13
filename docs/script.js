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

function cargarPersonajes(categoria) {
  seccionActual = categoria

  var lista = personajes.filter(function(p) {
    return categoria == "todos" ? true : p.categoria == categoria
  })

  var slides = ""
  lista.forEach(function(p) {
    slides += `
      <div class="swiper-slide">
        <article class="tarjeta-personaje">
          <img src="${p.imagen}" alt="${p.nombre}" class="tarjeta-personaje-imagen">
          <div class="tarjeta-personaje-contenido">
            <div class="tarjeta-personaje-nombre">${p.nombre}</div>
            <p class="tarjeta-personaje-signo">✦ ${p.signo}</p>
            <p class="tarjeta-personaje-desc">${p.descripcion}</p>
            <div class="tarjeta-personaje-datos">
              <div class="tarjeta-dato"><span class="label">Le gusta:</span><span class="valor">${p.gustos}</span></div>
              <div class="tarjeta-dato"><span class="label">No le gusta:</span><span class="valor">${p.noLeGusta}</span></div>
            </div>
          </div>
        </article>
      </div>`
  })

  cambiarContenido(`
    <div class="swiper personajes-swiper">
      <div class="swiper-wrapper">${slides}</div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  `, function() {
    new Swiper(".personajes-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: lista.length > 1,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    })
    gsap.from(".tarjeta-personaje", { opacity: 0, y: 20, duration: 0.5 })
  })
}

function filtrarSubcategoria(sub, btn) {
  $(".btn-subcategoria").removeClass("active")
  $(btn).addClass("active")
  cargarPersonajes(sub)
}

function verEpisodios() {
  var eps = [
    { num: 1, titulo: "Episodio 1", texto: "El descenso comienza. Melinoë despierta en los confines del Inframundo y da sus primeros pasos entre las sombras." },
    { num: 2, titulo: "Episodio 2", texto: "Los vínculos se forjan. Nuevos encuentros, decisiones difíciles y secretos que empiezan a salir a la luz." },
    { num: 3, titulo: "Episodio 3", texto: "El destino se escribe. Las elecciones del pasado pesan y los dioses comienzan a mover sus fichas." }
  ]

  var html = ""
  eps.forEach(function(ep) {
    html += `
      <article class="episodio-card">
        <div class="episodio-numero">Ep. ${ep.num}</div>
        <h2 class="episodio-titulo">${ep.titulo}</h2>
        <p class="episodio-desc">${ep.texto}</p>
        <button class="btn-jugar-ep" onclick="pantallaProximamente()">Jugar</button>
      </article>`
  })

  cambiarContenido(html, function() {
    gsap.from(".episodio-card", { opacity: 0, y: 25, duration: 0.4, stagger: 0.1 })
  })
}

function pantallaProximamente() {
  cambiarContenido(`
    <div class="proximamente-pantalla">
      <p class="proximamente-texto">Próximamente...</p>
      <button class="btn-volver" onclick="verEpisodios()">← Volver</button>
    </div>
  `, function() {
    gsap.from(".proximamente-pantalla", { opacity: 0, scale: 0.95, duration: 0.5 })
  })
}

function abrirContacto() {
  cambiarContenido(`
    <div class="contacto-wrapper">
      <h2 class="contacto-titulo text-center mb-4">Envía un mensaje al Inframundo</h2>
      <div class="container-fluid">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="contacto-form-box">
              <form id="contactForm" novalidate>
                <input class="form-campo" type="text" name="nombre" placeholder="Tu nombre" required>
                <p class="form-error-msg" id="err-nombre">Por favor introduce tu nombre.</p>
                <input class="form-campo" type="email" name="email" placeholder="Tu email" required>
                <p class="form-error-msg" id="err-email">Introduce un email válido.</p>
                <textarea class="form-campo" name="mensaje" placeholder="Tu mensaje..." rows="5" required></textarea>
                <p class="form-error-msg" id="err-mensaje">El mensaje no puede estar vacío.</p>
                <button type="submit" class="btn-enviar">Enviar mensaje</button>
                <p class="form-feedback ok" id="form-ok">¡Mensaje enviado! Los dioses han sido notificados.</p>
                <p class="form-feedback err" id="form-err">Algo salió mal. Inténtalo de nuevo.</p>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contacto-libros-box">
              <h3 class="contacto-titulo" style="font-size:1.1em; margin-bottom:16px;">📚 Lecturas del Inframundo</h3>
              <div class="libros-buscar">
                <input type="text" id="libroBusqueda" class="form-campo libros-input" placeholder="Busca un libro...">
                <button id="btnBuscarLibro" class="btn-buscar-libro">Buscar</button>
              </div>
              <div id="librosContainer"><p class="libros-loading">Consultando los archivos divinos...</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, function() {
    gsap.from(".contacto-form-box",   { opacity: 0, y: 20, duration: 0.4 })
    gsap.from(".contacto-libros-box", { opacity: 0, y: 20, duration: 0.4, delay: 0.12 })
    cargarLibros("greek mythology hades")
    montarFormulario()

    $("#btnBuscarLibro").click(function() {
      var q = $("#libroBusqueda").val().trim()
      if (q) cargarLibros(q)
    })

    $("#libroBusqueda").keydown(function(e) {
      if (e.key === "Enter") {
        var q = $(this).val().trim()
        if (q) cargarLibros(q)
      }
    })
  })
}

function cargarLibros(query) {
  var q = encodeURIComponent(query || "greek mythology hades")
  $("#librosContainer").html("<p class='libros-loading'>Consultando los archivos divinos...</p>")
  fetch("https://openlibrary.org/search.json?q=" + q + "&limit=4&fields=title,author_name,cover_i,first_publish_year")
    .then(res => res.json())
    .then(data => {
      var libros = data.docs.slice(0, 4)
      var html = ""

      libros.forEach(function(libro) {
        var portada = libro.cover_i
          ? `<img src="https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg" alt="${libro.title}" class="libro-cover">`
          : `<div class="libro-cover-placeholder">📖</div>`

        var autor = libro.author_name ? libro.author_name[0] : "Autor desconocido"
        var año = libro.first_publish_year || ""

        html += `
          <div class="libro-card">
            ${portada}
            <div class="libro-info">
              <p class="libro-titulo">${libro.title}</p>
              <p class="libro-autor">${autor}</p>
              ${año ? `<p class="libro-año">${año}</p>` : ""}
            </div>
          </div>`
      })

      $("#librosContainer").html(html)
      gsap.from(".libro-card", { opacity: 0, x: 20, duration: 0.4, stagger: 0.1 })
    })
    .catch(function() {
      $("#librosContainer").html("<p class='libros-loading'>No se pudieron cargar los libros.</p>")
    })
}

function montarFormulario() {
  $("#contactForm").on("submit", function(e) {
    e.preventDefault()

    $(".form-campo").removeClass("error")
    $(".form-error-msg").hide()
    $("#form-ok, #form-err").hide()

    var nombre  = $("[name='nombre']").val().trim()
    var email   = $("[name='email']").val().trim()
    var mensaje = $("[name='mensaje']").val().trim()
    var hayError = false

    if (!nombre) {
      $("[name='nombre']").addClass("error")
      $("#err-nombre").show()
      hayError = true
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("[name='email']").addClass("error")
      $("#err-email").show()
      hayError = true
    }
    if (!mensaje) {
      $("[name='mensaje']").addClass("error")
      $("#err-mensaje").show()
      hayError = true
    }
    if (hayError) return

    var $btn = $(".btn-enviar").prop("disabled", true).text("Enviando...")

    $.ajax({
      url: "https://formspree.io/f/xwvywgwo",
      method: "POST",
      data: $(this).serialize(),
      headers: { "Accept": "application/json" },
      success: function() {
        $("#form-ok").fadeIn()
        document.getElementById("contactForm").reset()
      },
      error: function() {
        $("#form-err").fadeIn()
      },
      complete: function() {
        $btn.prop("disabled", false).text("Enviar mensaje")
      }
    })
  })
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
