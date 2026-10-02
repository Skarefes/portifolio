// Desenha os ícones
    lucide.createIcons();

    // ----- Menu do celular -----
    const menu = document.getElementById("menu");
    const botaoMenu = document.getElementById("botao-menu");

    botaoMenu.addEventListener("click", function () {
      menu.classList.toggle("aberto");
    });

    // fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("aberto");
      });
    });

    // ----- Filtro de projetos -----
    const botoesFiltro = document.querySelectorAll(".filtro");
    const projetos = document.querySelectorAll(".projeto");

    botoesFiltro.forEach(function (botao) {
      botao.addEventListener("click", function () {
        const filtro = botao.dataset.filtro;

        // marca só o botão clicado como ativo
        botoesFiltro.forEach(function (b) { b.classList.remove("ativo"); });
        botao.classList.add("ativo");

        // mostra ou esconde cada projeto
        projetos.forEach(function (projeto) {
          if (filtro === "todos" || projeto.dataset.categoria === filtro) {
            projeto.style.display = "";
          } else {
            projeto.style.display = "none";
          }
        });
      });
    });

    // ----- Animação de aparecer ao rolar a página -----
    const elementos = document.querySelectorAll(".aparecer");

    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    elementos.forEach(function (el) { observador.observe(el); });

    // ----- Formulário de contato -----
    // const formulario = document.getElementById("formulario");
    // const sucesso = document.getElementById("sucesso");

    // formulario.addEventListener("submit", function (evento) {
    //   evento.preventDefault();   // impede a página de recarregar

    //   const nome = document.getElementById("nome").value.trim();
    //   const email = document.getElementById("email").value.trim();
    //   const servico = document.getElementById("servico").value;
    //   const mensagem = document.getElementById("mensagem").value.trim();

    //   // limpa erros antigos
    //   document.getElementById("erro-nome").textContent = "";
    //   document.getElementById("erro-email").textContent = "";
    //   document.getElementById("erro-servico").textContent = "";
    //   document.getElementById("erro-mensagem").textContent = "";
    //   sucesso.style.display = "none";

    //   let tudoCerto = true;

    //   if (nome === "") {
    //     document.getElementById("erro-nome").textContent = "Informe seu nome.";
    //     tudoCerto = false;
    //   }

    //   if (email === "") {
    //     document.getElementById("erro-email").textContent = "Informe seu e-mail.";
    //     tudoCerto = false;
    //   } else if (!email.includes("@") || !email.includes(".")) {
    //     document.getElementById("erro-email").textContent = "Digite um e-mail válido.";
    //     tudoCerto = false;
    //   }

    //   if (servico === "") {
    //     document.getElementById("erro-servico").textContent = "Selecione um serviço.";
    //     tudoCerto = false;
    //   }

    //   if (mensagem.length < 12) {
    //     document.getElementById("erro-mensagem").textContent = "Escreva pelo menos 12 caracteres.";
    //     tudoCerto = false;
    //   }

    //   if (tudoCerto) {
    //     // Aqui você conectaria o formulário a um servidor/serviço de e-mail
    //     sucesso.textContent = "Mensagem validada com sucesso! Conecte este formulário a um endpoint para receber os contatos.";
    //     sucesso.style.display = "block";
    //     formulario.reset();
    //   }
    // });