let livro = {
    titulo: "não Seja Vagabundo",
    autor: "Miguel Romaniw",
    paginas: 12,
    ano: 2023,
    apresentcao: function(){
        console.log("o livro", this.titulo, "foi escrito por", this.autor, "tem", this.paginas, "paginas e foi escrito em", this.ano);
    }
}
console.log(livro.apresentcao())