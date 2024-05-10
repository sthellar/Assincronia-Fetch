const exibeUsuario = (usuario) => {
    console.log(`O usuário ${usuario.login} possui ${usuario.public_repos} seguidores!`)
}

const iniciar = () => {
    console.log("antes do fetch");

    fetch('https://api.github.com/users/sthellar')
        .then((response) => response.json())
        .then((dados) => exibeUsuario(dados));
};

document.addEventListener("DOMContentLoaded", iniciar);